import express from 'express';

import { getPosts, createPost,updatePost,deletePost,likePost  } from '../controllers/posts.js'; {/* getPost,updatePost, likePost,  */}

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost); //creating the route that the data will be posted to 
router.delete('/:id', deletePost)
router.patch('/:id', likePost)
export default router