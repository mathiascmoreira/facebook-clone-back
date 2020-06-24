import Sequelize from 'sequelize';
import User from '../app/models/User';
import Post from '../app/models/Post';
import PostLike from '../app/models/PostLike';
import PostComment from '../app/models/PostComment';
import Friendship from '../app/models/Friendship';
import databaseConfig from '../config/database';
 
const models = [User, Post, PostLike, PostComment, Friendship];
 
class Database {
   constructor() {
       this.init();
   }
 
   init() {
     this.connection = new Sequelize(databaseConfig);
 
     models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
   }
}
 
export default new Database();