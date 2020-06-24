import Sequelize, { Model } from 'sequelize';

class PostComment extends Model {
    static init(sequelize) {
        super.init({
            postId: Sequelize.INTEGER,
            userId: Sequelize.INTEGER,
        },
            {
                sequelize,
            });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Post, { foreignKey: 'postId', as: 'post' });
        this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
}

export default PostComment;