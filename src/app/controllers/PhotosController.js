import Post from '../models/Post';
import File from '../models/File';
import { Op } from 'sequelize';

class PhotosController {
    async index(req, res) {
        const photos = await Post.findAll(
            {
                where: {
                    userId: req.userId,
                    [Op.not]: [
                        { imageId: null }
                    ]
                },
                include: [
                    {
                        model: File,
                        as: 'image',
                        attributes: ['url', 'path'],
                    }
                ],
            });

        return res.json(photos);
    }
}

export default new PhotosController();