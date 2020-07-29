import User from '../models/User';
import Friendship from '../models/Friendship';
import File from '../models/File';
import { Op } from 'sequelize';

class FriendshipController {

    async index(req, res) {

        const friendships = await Friendship.findAll(
            {
                attributes: [],
                include: [
                    {
                        model: User,
                        as: 'friend',
                        include: [
                            {
                                model: File,
                                as: 'picture',
                                attributes: ['url', 'path'],
                            }
                        ],
                        attributes: ['userName', 'name', 'lastName']
                    }
                ],
                where: {
                    userId: req.userId
                },

            });


        return res.json(friendships);
    }
}

export default new FriendshipController();