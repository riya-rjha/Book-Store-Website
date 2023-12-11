import React, { useState } from 'react'
import axios from 'axios'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const DeleteBook = () => {

  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = () => {
    setIsLoading(true);
    axios
      .delete(`https://book-store-snzt.onrender.com/books/${id}`)
      .then(() => {
        setIsLoading(false);
        enqueueSnackbar('Book deleted successfully!', { variant: 'success' });
        navigate('/');
      })
      .catch((err) => {
        console.log('Error message : ', err.message);
        enqueueSnackbar('Opps! An error occurred!', { variant: 'error' });
        setIsLoading(false);
      })
  }

  return (
    <div>
      <BackButton />
      {isLoading ?
        (
          <Spinner />
        ) :
        (
          <div className="w-[45%] flex items-center justify-center m-auto flex-col p-25">
            <h2 className="text-3xl text-green-800 p-10">
              Are you sure you want to delete this book?
            </h2>
            <button className=" text-1xl-white bg-red-100 outline-none border-0 p-4 mb-10 font-bold rounded-xl w-[90%]" onClick={handleDelete}>
              Yes, Delete it!
            </button>
          </div>
        )
      }
    </div>
  )
}

export default DeleteBook