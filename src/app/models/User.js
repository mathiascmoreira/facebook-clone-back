import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            lastName: Sequelize.STRING,
            email: Sequelize.STRING,
            userName: Sequelize.STRING,
            birthday: Sequelize.DATE,
            bio: Sequelize.STRING,
            joinedAt: Sequelize.DATE,
            password: Sequelize.VIRTUAL,
            passwordHash: Sequelize.STRING,
        },
        {
            sequelize,
        });

        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });

        return this;
    }

    static associate(models) {
        this.hasMany(models.PostLike, { as: 'likes', foreignKey: 'userId'});
        this.hasMany(models.PostComment, { as: 'comments', foreignKey: 'userId'});
        this.hasMany(models.UserEducation, { as: 'educations', foreignKey: 'userId'});
        this.hasOne(models.UserRelationship, { as: 'relationship', foreignKey: 'userId'});
        this.hasMany(models.UserWork, { as: 'works', foreignKey: 'userId'});
        this.hasOne(models.UserLocation, { as: 'location', foreignKey: 'userId'});
        this.belongsTo(models.File, { foreignKey: 'coverPhotoId', as: 'coverPhoto' });
        this.belongsTo(models.File, { foreignKey: 'pictureId', as: 'picture' });

    }

    checkPassword(password) {
        return bcrypt.compare(password, this.passwordHash);
    }
}

export default User;