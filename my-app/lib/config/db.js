import mongoose from 'mongoose'

export const ConnectDb = async() =>{
    await mongoose.connect('mongodb+srv://admin:admin123@cluster0.mqoam1b.mongodb.net/Blogger-next')
    console.log('DB connected')
}   