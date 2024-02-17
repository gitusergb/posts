const express = require('express');
const {getPosts,addPost,updatePost,deletePost} = require('../controllers/postController');
const {authMiddleware}= require('../middleware/authMiddleware');
const  postRouter = express.Router();
// Get posts of logged-in user
 postRouter.get('/',authMiddleware,getPosts);

// Add a new post
 postRouter.post('/add', authMiddleware,addPost);

// Update a post
 postRouter.patch('/update/:postID', authMiddleware,updatePost);

// Delete a post
 postRouter.delete('/delete/:postID', authMiddleware,deletePost);

module.exports = { postRouter };
