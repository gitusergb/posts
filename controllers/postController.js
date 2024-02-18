const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Post = require('../models/post');

// Get posts of logged-in user
const getPosts = async (req, res) => {
  const { page = 1, limit = 4 } = req.query;
  
  const pageNumber = parseInt(page);
  const limitNumber = parseInt(limit);

    // Calculate start and end indices based on page and limit
    const startIndex = (pageNumber - 1) * limitNumber;
    const endIndex = pageNumber * limitNumber;
  
  try { 
    const posts = await Post.find({userID:req.body.userID})
  const paginatedPosts = posts.slice(startIndex, endIndex);
  //res.json(paginatedPosts);
    // res.status(200).send(posts);
    res.status(200).send(paginatedPosts);
      } catch (error) {
        res.status(400).send({ error: error.message });
      }








};

// Add a new post
const addPost = async (req, res) => {
    try { 
        const post= new Post(req.body)
        await post.save()
        res.status(200).send({ msg: 'A new post has been Created',post:post});
          } catch (error) {
            res.status(400).send({ error: error.message });
          }
};

// Update a post
const updatePost = async (req, res) => {
    const {postID}=req.params
    try { 
        const post = await Post.findOne({_id:postID})
        if(req.body.userID===post.userID){
       await Post.findByIdAndUpdate({_id:postID},req.body)
       res.status(200).send({ msg:`Note with Id:${postID} has been updated`});}
       else{
        res.status(400).send({ msg:`You are not Authorised`});}
       
          } catch (error) {
            res.status(400).send({ error: error.message });
          }
};

// Delete a post
const deletePost = async (req, res) => {
    const {postID}=req.params
    try { 
        const post = await Post.findOne({_id:postID})
        if(req.body.userID===post.userID){
       await Post.findByIdAndDelete({_id:postID})
       res.status(200).send({ msg:`post with Id:${postID} has been deleted`});}
       else{
        res.status(400).send({ msg:`You are not Authorised`});}
       
          } catch (error) {
            res.status(400).send({ error: error.message });
          }

};
module.exports = {getPosts,addPost,updatePost,deletePost};