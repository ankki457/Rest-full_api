import mongoose from "mongoose";
const connectDB = async()=>{
   const connect = await mongoose.connect('mongodb+srv://sahankit457:Ankit%40457@cluster0.r5x0u.mongodb.net/myDatabase?retryWrites=true&w=majority');
   if(connect){
    console.log('connection successfull...')
   }else{
    console.log("connection failed...")
   }
}


export default connectDB;