import express from 'express';
import data from './data.js';
import dotenv from 'dotenv'
import config from './config';
import userRoute from './routes/userRoutes'
import db from './db';
import bodyParser from 'body-parser'
dotenv.config()

const mongoDbUri = config.MONGODB_URI



const app = express()
app.use(bodyParser.json())
app.use('/api/users',userRoute)
app.get('/api/products/:id',(req,res)=>{
    const productId = req.params.id;
    const product = data.products.find(productitem=>productitem._id===productId)
    if(product){
        res.send(product)
    }
    else if(!product)
    res.status(404).send({msg:"product not found"})
})

app.get('/api/products',(req,res) =>{
    res.send(data.products)
})

app.listen(8080,()=>{
    console.log('server running at port number 8080')
})