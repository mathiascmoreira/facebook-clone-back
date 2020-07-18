import Sequelize, { Model } from 'sequelize';

class UserRelationship extends Model {
    static init(sequelize) {
        super.init({
            userId: Sequelize.INTEGER,
            relatedUserId: Sequelize.INTEGER,
            type: Sequelize.INTEGER,
            visibility: Sequelize.INTEGER,
        },
        {
            sequelize,
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
        this.belongsTo(models.User, { foreignKey: 'relatedUserId', as: 'relatedUser' });
    }
}

export default UserRelationship;