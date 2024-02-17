const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title:  { type:String,required:true},
  body: { type:String,required:true},
  device: { type:String,enum: ["PC", "TABLET", "MOBILE"],required:true},
  userID:{ type:String},
  username:{type:String}
},{
  versionKey:false
});

const Post = mongoose.model('Post',postSchema);

module.exports = Post;
