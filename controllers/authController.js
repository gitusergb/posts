const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


exports.register = async (req, res) => {
    const {name,email,gender,password}=req.body
    try { 

        bcrypt.hash(password,5,async(err,hash)=>{
           if(err){
                   res.status(200).send({"error":err})
           }else{
               const user=new User({name,email,gender,password:hash})
               await user.save()
               res.status(200).json({ msg: 'The new user has been registered',registeredUser:user});
           }
        });
         } catch (error) {
           res.status(400).json({ error: error.message });
         }

};

exports.login = async (req, res) => {
    const {email, password} = req.body;
    try {
     
      const user = await User.findOne({email});
      bcrypt.compare(password,user.password,(err, result)=>{
       if(result){
          const token = jwt.sign({ userID:user._id,username:user.username},process.env.JWT_SECRET);
          res.status(200).send({ msg:'Login successful!', "token" : token });
       }else{
          res.status(400).send({ error:'Invalid email or password' });
       }
      })
    } catch (err) {
      res.status(400).json({ error: err });
    }
};
