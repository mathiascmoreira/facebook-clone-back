import Sequelize, { Model } from 'sequelize';

class Followship extends Model {
    static init(sequelize) {
        super.init({
            followerUserId: Sequelize.INTEGER,
            followedUserId: Sequelize.INTEGER,
        },
            {
                sequelize,
            });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'followerUserId', as: 'following' });
        this.belongsTo(models.User, { foreignKey: 'followedUserId', as: 'followers' });
    }
}

export default Followship;