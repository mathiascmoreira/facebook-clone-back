import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            last_name: Sequelize.STRING,
            email: Sequelize.STRING,
            birthday: Sequelize.DATE,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
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
        this.hasMany(models.PostLike, { as: 'likes' });
        this.hasMany(models.PostComment, { as: 'comments'});
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }
}

export default User;