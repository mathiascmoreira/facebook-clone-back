import Sequelize from 'sequelize';
import User from '../app/models/User';
import UserLocation from '../app/models/UserLocation';
import UserEducation from '../app/models/UserEducation';
import UserRelationship from '../app/models/UserRelationship';
import UserWork from '../app/models/UserWork';
import Post from '../app/models/Post';
import PostLike from '../app/models/PostLike';
import PostComment from '../app/models/PostComment';
import Friendship from '../app/models/Friendship';
import Followship from '../app/models/Followship';
import File from '../app/models/File';
import databaseConfig from '../config/database';
 
const models = [User, UserLocation, Post, PostLike, PostComment, Friendship, Followship, UserEducation, UserRelationship, UserWork, File];
 
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