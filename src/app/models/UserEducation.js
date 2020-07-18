import Sequelize, { Model } from 'sequelize';

class UserEducation extends Model {
    static init(sequelize) {
        super.init({
            userId: Sequelize.INTEGER,
            type: Sequelize.INTEGER,
            schoolName: Sequelize.STRING,
            courseName: Sequelize.STRING,
            description: Sequelize.STRING,
            graduated: Sequelize.BOOLEAN,
            dateStart:  Sequelize.DATE,
            dateEnd:  Sequelize.DATE,
            visibility:  Sequelize.INTEGER
        },
        {
            sequelize,
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
}

export default UserEducation;