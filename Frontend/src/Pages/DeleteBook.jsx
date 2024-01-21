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
          <div className="max-w-[650px] flex items-center justify-center m-auto flex-col p-5 gap-6">
            <h2 className="text-[25px] text-green-800 text-center mt-10">
              Are you sure you want to delete this book?
            </h2>
            <button className=" text-xl-white bg-red-100 hover:bg-red-200 transition-all outline-none border-2 border-red-700 px-10 py-4 mx-2 mb-10 font-bold rounded-xl" onClick={handleDelete}>
              Yes, Delete it!
            </button>
          </div>
        )
      }
    </div>
  )
}

export default DeleteBook