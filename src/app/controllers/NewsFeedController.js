import Post from '../models/Post';
import User from '../models/User';
import PostComment from '../models/PostComment';
import File from '../models/File';
import Friendship from '../models/Friendship';
import { literal } from 'sequelize';

class NewsFeedController {

    async index(req, res) {

        const friendsIds = (await Friendship.findAll(
            {
                where: { userId: req.userId },
                attributes: ['friendId']
            })).map(friendship => friendship.dataValues.friendId);

        var posts = await Post.findAll({
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
                userId: friendsIds
            },

            order: [['createdAt', 'DESC']],
        });

        return res.json(posts);
    }
}

export default new NewsFeedController();