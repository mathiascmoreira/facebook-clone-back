import Sequelize, { Model } from 'sequelize';

class Friendship extends Model {
    static init(sequelize) {
        super.init({
            userId: Sequelize.INTEGER,
            friendId: Sequelize.INTEGER,
        },
            {
                sequelize,
            });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
        this.belongsTo(models.User, { foreignKey: 'friendId', as: 'friend' });
    }
}

export default Friendship;