import mongoose from 'mongoose'

const connectDb = async() =>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/blog`)
  } catch (error) {
    console.log(error.message)
  }
}
export default connectDb;