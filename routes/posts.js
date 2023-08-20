import express from "express";
import { getPosts,createPost,updatePost,deletePost,likePost} from "../controller/posts.js";
import auth from '../middleware/auth.js';
const router = express.Router();
// all the users can see all the posts
router.get('/', getPosts);
router.post('/', auth,createPost);
// to create a post you can must have aauthentication token
router.patch('/:id',auth,updatePost);
router.delete('/:id',auth,deletePost);
router.patch('/:id/likePost',auth,likePost);
export default router;