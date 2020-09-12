import Post from '../models/Post';
import PostComment from '../models/PostComment';
import Friendship from '../models/Friendship';
import File from '../models/File';
import User from '../models/User';
import { Op, literal } from 'sequelize';

class PostController {
    async index(req, res) {

        var itsOwnProfile = req.params.userId == req.userId;

        var itsFriend = !itsOwnProfile && await Friendship.count({
            where: {
                userId: req.userId,
                friendId: req.params.userId,
            }
        }) > 0;

        var publicVisibility = 1;
        var onlyFriendsVisibility = itsOwnProfile || itsFriend ? 2 : 1;
        var onlyMeVisibility = itsOwnProfile ? 3 : 1;

        const posts = await Post.findAll({
            attributes: {
                exclude: ['updatedAt'],
                include: [
                    [
                        literal(`(
                            SELECT COUNT(*) 
                            FROM post_likes AS likes 
                            WHERE likes.post_id = "Post".id 
                        )`), 'likesCount'
                    ],
                    [
                        literal(`(
                                SELECT COUNT(*)
                                FROM post_comments AS comments
                                WHERE comments.post_id = "Post".id
                        )`), 'commentsCount'
                    ],
                    [
                        literal(`(
                            SELECT COUNT(*)
                            FROM post_likes AS likes
                            WHERE likes.post_id = "Post".id and likes.user_id = ${req.userId}) > 0
                        `), 'hasOwnLike'
                    ],
                ]
            },
            include: [
                {
                    model: PostComment,
                    as: 'comments',
                    limit: 3,
                    attributes: ['userId', 'comment', 'createdAt'],
                    include: [{
                        model: User,
                        as: 'user',
                        attributes: ['name'],
                        include: [
                            {
                                model: File,
                                as: 'picture',
                                attributes: ['url', 'path'],
                            },
                        ]
                    }]
                },
                {
                    model: File,
                    as: 'image',
                    attributes: ['url', 'path'],
                },
                {
                    model: User,
                    as: 'user',
                    attributes: ['name'],
                    include: [
                        {
                            model: File,
                            as: 'picture',
                            attributes: ['url', 'path'],
                        },
                    ]
                },
            ],
            where: {
                userId: req.params.userId,
                [Op.or]: [
                    { visibility: publicVisibility },
                    { visibility: onlyFriendsVisibility },
                    { visibility: onlyMeVisibility }
                ]
            },
            order: [['createdAt', 'DESC']],
        });

        return res.json(posts);
    }

    async store(req, res) {

        try {
            var post = req.body;

            post.userId = req.userId;

            post = await Post.create(post);

            return res.json(post);
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }
}

export default new PostController();