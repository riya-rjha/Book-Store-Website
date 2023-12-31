//Route to save a new book
//Postman API to get data

import {Book} from '../Models/boxModel.js'
import express from "express"

const router = express.Router();

router.post('/', async (req, res) => {
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
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(201).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(`Error message : ${error.message}`);
        return res.status(500).send({ message: error.message });
    }
})

//get one book from an id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;//fetch data from database
        const book = await Book.findById(id);
        return res.status(201).json(book);

    } catch (error) {
        console.log(`Error message : ${error.message}`);
        return res.status(500).send({ message: error.message });
    }
})

//update a book from an id
router.put('/:id', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(500).send({ message: 'Send all the required details!' });
        }

        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(500).json({ message: 'Book not found!' })
        }
        return res.status(200).send({ message: 'Book updated successfully' });
    }
    catch (err) {
        console.log(`Error message : ${err.message}`);
        return res.status(500).send({ message: err.message });
    }
});

//delete a book from an id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id, req.body);
        if (!result) {
            return res.send(400).json({ message: 'Book could not be deleted!' });
        }
        return res.status(200).send({ message: 'Book deleted successfully!' });
    } catch (error) {
        console.log(error.message);
        return res.status(404).send({ message: error.message });
    }

})

export default router