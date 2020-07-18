import Sequelize, { Model } from 'sequelize';

class UserWork extends Model {
    static init(sequelize) {
        super.init({
            userId: Sequelize.INTEGER,
            position: Sequelize.STRING,
            company: Sequelize.STRING,
            location: Sequelize.STRING,
            description: Sequelize.STRING,
            currentlyWorking: Sequelize.BOOLEAN,
            dateStart: Sequelize.DATE,
            dateEnd: Sequelize.DATE,
            visibility: Sequelize.INTEGER,
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

export default UserWork