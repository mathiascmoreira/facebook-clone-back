import jwt from 'jsonwebtoken';
import File from '../models/File';
import User from '../models/User';

import authConfig from '../../config/auth';

class SessionController {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({
            include: [
                {
                    model: File,
                    as: 'picture',
                    attributes: ['url', 'path'],
                }
            ],
            where: {
                email
            }
        });

        if (!user) {
            return res.status(401).json({ error: 'your email or password are incorrect' });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'your email or password are incorrect' })
        }

        const { id, name, picture: { url: profilePhotoUrl } } = user;

        return res.json({
            user: { id, name, profilePhotoUrl },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            }),
        });
    }
}

export default new SessionController();