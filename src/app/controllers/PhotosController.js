import Post from '../models/Post';
import User from '../models/User';
import File from '../models/File';
import { Op } from 'sequelize';

class PhotosController {
    async index(req, res) {
        const photos = await Post.findAll(
            {
                where: {
                    userId: req.params.userId,
                    [Op.not]: [
                        { imageId: null }
                    ],
                },
                include: [
                    {
                        model: File,
                        as: 'image',
                        attributes: ['url', 'path'],
                    },
                    {
                        model: User,
                        as: 'user',
                        attributes: ['name']                        
                    },
                ],
            });

        return res.json(photos);
    }
}

export default new PhotosController();