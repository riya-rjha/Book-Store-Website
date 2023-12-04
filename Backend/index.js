import express from "express"
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App successfully connected to database');  
        //HTTP Requests
        app.get('/', (request, response) => {
            console.log(request);
            return response.status(202).send('Welcome to MERN Stack Tutorial!');
        })
    })
    .catch((error)=>{
        console.log(`Error : ${error}`);
    })

app.listen(PORT, ()=> {
    console.log(`App is listening to ${PORT}`);
})

//Postman API to get data
app.post('/books', async(req, res)=> { 
    try {
        if(
            !req.body.title || 
            !req.body.author || 
            !req.body.publishYear
        )
        {
            return response.status(400).send({
                message: 'Send all the required details'
            })
        }
    } catch (error) {
        console.log(`Error message : ${error.message}`);
        res.status(500).send({message : error.message});
    }
});
