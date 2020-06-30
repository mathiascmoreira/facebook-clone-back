import Post from '../models/Post';
import PostComment from '../models/PostComment';
import User from '../models/User';
import { Op, literal } from 'sequelize';

class PostController {

    async index(req, res) {

        const userId = req.params.userId

        const posts = await Post.findAll({
            where: {
                [Op.or]: [
                    {
                        [Op.and]: [
                            { userId: userId },
                            { targetUserId: null }
                        ],
                    },
                    { 
                        targetUserId: userId
                    }
                ]
            }, 
            attributes: {
                exclude: ['updatedAt'],
                include: [
                    [
                        literal(`(
                                SELECT COUNT(*)
                                FROM post_likes AS likes
                                WHERE
                                likes.post_id = "Post".id
                            )`),
                        'likesCount'
                    ],
                    [
                        literal(`(
                                SELECT COUNT(*)
                                FROM post_comments AS comments
                                WHERE
                                comments.post_id = "Post".id
                            )`),
                        'commentsCount'
                    ],
                    [
                        literal(`(
                            SELECT COUNT(*)
                            FROM post_likes AS likes
                            WHERE
                            likes.post_id = "Post".id and likes.user_id = ${req.userId}
                        ) > 0`),
                    'hasOwnLike'
                    ]
                ]
            },
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['name']
                },
                {
                    model: PostComment,
                    as: 'comments',
                    limit: 3,
                    attributes: ['userId', 'comment'],
                    include: [ {
                        model: User,
                        as: 'user',
                        attributes: ['name']
                    }]
                }
            ],
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