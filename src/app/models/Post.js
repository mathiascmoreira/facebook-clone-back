import Sequelize, { Model } from 'sequelize';

class Post extends Model {
    static init(sequelize) {
        super.init({
            userId: Sequelize.INTEGER,
            imageId: Sequelize.INTEGER,
            content: Sequelize.STRING,
            visibility: Sequelize.BOOLEAN,
        },
            {
                sequelize,
            });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
        this.belongsTo(models.File, { foreignKey: 'image_id', as: 'image' });
        this.hasMany(models.PostLike, { as: 'likes'});
        this.hasMany(models.PostComment, { as: 'comments'});
    }
}

export default Post;