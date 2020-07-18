import Sequelize, { Model } from 'sequelize';

class UserLocation extends Model {
    static init(sequelize) {
        super.init({
            userId: Sequelize.INTEGER,
            fromLocation: Sequelize.STRING,
            currentLocation: Sequelize.STRING,
            fromLocationVisibility: Sequelize.INTEGER,
            currentLocationVisibility: Sequelize.INTEGER,
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

export default UserLocation;