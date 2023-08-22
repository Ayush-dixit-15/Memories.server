import express from "express";
import { getPostsBySearch,getPosts,createPost,updatePost,deletePost,likePost,getPost} from "../controller/posts.js";
import auth from '../middleware/auth.js';
const router = express.Router();
// all the users can see all the posts
router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);
// to create a post you can must have aauthentication token
router.post('/',auth,createPost);
router.patch('/:id',auth,updatePost);
router.delete('/:id',auth,deletePost);
router.patch('/:id/likePost',auth,likePost);

export default router;