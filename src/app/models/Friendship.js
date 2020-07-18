import Sequelize, { Model } from 'sequelize';

class Friendship extends Model {
    static init(sequelize) {
        super.init({
            user1Id: Sequelize.INTEGER,
            user2Id: Sequelize.INTEGER,
        },
            {
                sequelize,
            });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user1Id', as: 'user1' });
        this.belongsTo(models.User, { foreignKey: 'user2Id', as: 'user2' });
    }
}

export default Friendship;