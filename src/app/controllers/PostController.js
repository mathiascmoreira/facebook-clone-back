import Post from '../models/Post';

class PostController {

    async index(req, res) {
        const posts = await Post.findAll({where: {user_id: req.userId}});
        
        return res.json(posts);
    }

    async store(req, res) {

        try {
            var post = req.body;
       
            post.user_id = req.userId;

            post = await Post.create(post);
    
            return res.json(post);
        } catch(err) {
            return res.status(400).json({error: err})
        }
       
    }

    
}

export default new PostController();