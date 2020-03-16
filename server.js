const express= require('express')
const app= express()
const connectDB= require('./config/connectDB')

app.use(express.json())

const port=process.env.PORT||8888

//connect to dataBase
connectDB();

app.use('/contacts', require('./routes/contacts') )

app.listen(port, (err)=>{
    err? console.log("error server") : console.log(`server running on port ${port}`)
})

///
