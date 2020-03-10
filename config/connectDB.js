const mongoose= require('mongoose')
const config= require('config')
const db= config.get('mongoURI')


const connectDB=()=>{
    mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true },).then(()=> console.log("DB connected")).catch(err=>console.log("connection to DB failed"))
}


module.exports=connectDB;