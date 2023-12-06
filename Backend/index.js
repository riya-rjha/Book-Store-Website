import express from "express"
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './Models/boxModel.js'

const app = express();

app.use(express.json());

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
    console.log(`App is listening to ${PORT}`);
})


//Route to save a new book
//Postman API to get data
app.post('/books', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: 'Send all the required details'
            });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };
        const book = await Book.create(newBook);
        return res.status(201).send(book);
        //uses postman to create and send https requests
    } catch (error) {
        console.log(`Error message : ${error.message}`);
        return res.status(500).send({ message: error.message });
    }
});

//route to get all books from database
app.get('/books', async(req, resp)=>{
    try {
        const books = await Book.find()
    } catch (error) {
        
    }
})