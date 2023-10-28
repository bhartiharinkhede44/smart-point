import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const app = express();
app.use(express.json());
import User from './models/user.js'


// POST /signup


app.post('/signup', async (req, res) => {

  const { name, email, mobile, address, password, gender } = req.body

  const newUser = new User({
      name, email, mobile, address, password, gender
  })



  try {
      const saveUser = await newUser.save()
      return res.json({
          data: saveUser,
          success: true,
          message: "successfully created signup"
      })
  }
  catch (e) {
      return res.json(
          {
              message: (e.message)
          }
      )
  }
})
// get all user
app.get('/signup',async (req,res)=>{
  const alluser = await User.find();
  res.json({
    data:alluser,
    message: "feached all user"
  })
})

// Login 
app.post('/login',async(req,res)=>{

    const{  email,password}=req.body;

    const loginUser = await User.findOne({email:email ,password:password}).select('name gmail gender address')


    if(loginUser){
        return res.json({
            success:true,
            data:loginUser,
            message:"login successfully"

        })
    }
   else{
    return res.json({
        success:false,
        data:loginUser,


    })

   }
})







const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  const conn = mongoose.connect(process.env.MONGODB_URI);
  if (conn)
    console.log('mongoDB connect succesfully')
};
app.listen(PORT, () => {
  console.log(`server is running on ; ${PORT}`)
  connectDB();
})