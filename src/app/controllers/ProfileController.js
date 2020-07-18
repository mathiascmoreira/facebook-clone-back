import User from '../models/User';
import UserLocation from '../models/UserLocation';
import UserEducation from '../models/UserEducation';
import UserRelationship from '../models/UserRelationship';
import UserWork from '../models/UserWork';
import File from '../models/File';

class ProfileController {

    async index(req, res) {

        const user = await User.findOne({
            include: [
                {
                    model: UserLocation,
                    as: 'location',
                    attributes: ['fromLocation', 'currentLocation']
                },
                {
                    model: UserEducation,
                    as: 'educations',
                    attributes: ['type', 'schoolName', 'courseName', 'graduated']
                },
                {
                    model: UserRelationship,
                    as: 'relationship',
                    attributes: ['type']
                },
                {
                    model: UserWork,
                    as: 'works',
                    attributes: ['position', 'company', 'currentlyWorking']
                },
                {
                    model: File,
                    as: 'coverPhoto',
                    attributes: ['url', 'path'],
                    
                },
                {
                    model: File,
                    as: 'picture',
                    attributes: ['url', 'path'],
                }
            ],
            where: {
                userName: req.params.username
            }
        })

        return res.json(user);
    }
}

export default new ProfileController();