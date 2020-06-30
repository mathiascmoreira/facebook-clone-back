import Post from '../models/Post';
import User from '../models/User';
import PostComment from '../models/PostComment';
import Friendship from '../models/Friendship';
import { Op, literal } from 'sequelize';

class NewsFeedController {

    async index(req, res) {

        const friendships = await Friendship.findAll(
            {
                where: {
                    [Op.or]: [
                        { user1_id: req.userId },
                        { user2_id: req.userId }
                    ]
                },
                attributes: ['user1_id', 'user2_id']
            });

        const friendsIds = friendships.map(friendship => friendship.user1_id == req.userId ? friendship.user2_id : friendship.user1_id);

        var posts = await Post.findAll({
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
            where: {
                user_id: friendsIds
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
}

export default new NewsFeedController();