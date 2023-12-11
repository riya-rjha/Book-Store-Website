import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Spinner from '../Components/Spinner.jsx'
import BackButton from '../Components/BackButton.jsx'

const ShowBook = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams(); //Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path

  useEffect(() => {
    try {
      setIsLoading(false);
      axios.get(`https://book-store-snzt.onrender.com/books/${id}`)
        .then(response => {
          setBooks(response.data);
          setIsLoading(false);
        });
    }
    catch (error) {
      console.log('Error : ', error.message);
      setIsLoading(false);
    }
  }, []);

  return (
    <div>
      <BackButton />
      <h1 className='text-red-950 m-8 text-2xl font-bold '>Showing book : </h1>
      {isLoading ?
        (
          <Spinner />
        )
        :
        (
          <div className='m-8 border-emerald-250 border bg-purple-100 p-2 w-fit'>
            <div className="flex flex-col">
              <span className='text-1.8xl font-bold p-1.5  text-cyan-950'>S. No : </span>
              <span className='p-1.5 text-pink-800 font-semibold  text-1.4xl'>{books._id}</span>
            </div>
            <div className="flex">
              <span className='text-1.8xl font-bold p-1.5  text-cyan-950'>Title : </span>
              <span className='p-1.5 text-pink-800 font-semibold  text-1.4xl'>{books.title}</span>
            </div>
            <div className="flex">
              <span className='text-1.8xl font-bold p-1.5  text-cyan-950'>Author : </span>
              <span className='p-1.5 text-pink-800 font-semibold  text-1.4xl'>{books.author}</span>
            </div>
            <div className="flex">
              <span className='text-1.8xl font-bold p-1.5  text-cyan-950'>Publish Year : </span>
              <span className='p-1.5 text-pink-800 font-semibold  text-1.4xl'>{books.publishYear}</span>
            </div>
            <div className="flex">
              <span className='text-1.8xl font-bold p-1.5  text-cyan-950'>Creation Time : </span>
              <span className='p-1.5 text-pink-800 font-semibold  text-1.4xl'>{new Date(books.createdAt).toString()}</span>
            </div>
            <div className="flex">
              <span className='text-1.8xl font-bold p-1.5  text-cyan-950'>Last Updated Time : </span>
              <span className='p-1.5 text-pink-800 font-semibold  text-1.4xl'>{new Date(books.updatedAt).toString()}</span>
            </div>

          </div>
        )}
    </div>
  )
}

export default ShowBook