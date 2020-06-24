import Sequelize, { Model } from 'sequelize';

class Friendship extends Model {
    static init(sequelize) {
        super.init({
            user1_id: Sequelize.INTEGER,
            user2_id: Sequelize.INTEGER,
        },
            {
                sequelize,
            });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user1_id', as: 'user1' });
        this.belongsTo(models.User, { foreignKey: 'user2_id', as: 'user2' });
    }
}

export default Friendship;