import Sequelize, { Model } from 'sequelize';

class Post extends Model {
    static init(sequelize) {
        super.init({
            userId: Sequelize.INTEGER,
            targetUserId: Sequelize.INTEGER,
            content: Sequelize.STRING,
            visibility: Sequelize.BOOLEAN,
            hasLikeReaction: Sequelize.VIRTUAL,
            hasLoveReaction: Sequelize.VIRTUAL,
            hasCareReaction: Sequelize.VIRTUAL,
            hasHahaReaction: Sequelize.VIRTUAL,
            hasWowReaction: Sequelize.VIRTUAL,
            hasSadReaction: Sequelize.VIRTUAL,
            hasAngryReaction: Sequelize.VIRTUAL,
            reactionCount: Sequelize.VIRTUAL
        },
            {
                sequelize,
            });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
        this.hasMany(models.PostLike, { as: 'likes'});
        this.hasMany(models.PostComment, { as: 'comments'});
    }
}

export default Post;