import express from "express"
import mongoose from "mongoose";
import cors from 'cors'
import BooksRouter from './Routes/bookRoutes.js'

import 'dotenv/config'

const app = express();

//enabling cors for all IP Adresses
app.use(cors());

//convert JSON data into text format
app.use(express.json());

//creating routes for books from routeBooks file
app.use('/books', BooksRouter);

mongoose
    .connect(process.env.mongoDBURL)
    .then(() => {
        console.log('App successfully connected to database');
        //HTTP Requests
        app.get('/', (request, response) => {
            console.log(request);
            return response.status(202).send('Welcome to MERN Stack Tutorial!');
        })
    })
    .catch((error) => {
        console.log(`Error : ${error}`);
    })

app.listen(process.env.PORT, () => {
    console.log(`App successfully listening to ${process.env.PORT}`);
})


