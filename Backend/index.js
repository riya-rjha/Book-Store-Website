import express from "express"
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import Cors from 'cors'
import BooksRouter from './Routes/bookRoutes.js'

const app = express();
//convert JSON data into text format
app.use(express.json());

//creating routes for books from routeBooks file
app.use('/books', BooksRouter)

//enabling cors for all IP Adresses
app.use(Cors());

mongoose
    .connect(mongoDBURL)
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

app.listen(PORT, () => {
    console.log(`App successfully listening to ${PORT}`);
})


