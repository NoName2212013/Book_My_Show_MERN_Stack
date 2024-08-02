require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async() => {
  try{
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to Database')}
  catch(error){
    console.log(error)}
}
module.exports = connectDB;