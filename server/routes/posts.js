import express from 'express';

import { getPosts, createPost  } from '../controllers/posts.js'; {/* getPost,updatePost, likePost, deletePost */}

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

export default router