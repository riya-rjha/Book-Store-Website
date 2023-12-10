import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Components/Spinner.jsx'
import BackButton from '../Components/BackButton.jsx';
import {useSnackbar} from 'notistack'

const CreateBook = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {enqueueSnackbar} = useSnackbar();

  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      title, author, publishYear
    }
    setIsLoading(true);
    axios
      .post('http://localhost:9999/books', data)
      .then(() => {
        setIsLoading(false);
        enqueueSnackbar('Book created successfully!', {variant: 'success'});
        navigate('/');
      })
      .catch((err) => {
        console.log(err.message);
        enqueueSnackbar('Opps! An error occurred!', {variant: 'error'});
        setIsLoading(false);
      });
  };

  return (
    <div >
      <BackButton />
      <h1 className='text-red-950 m-8 text-2xl font-bold '>Create book : </h1>
      {isLoading ? (
        <Spinner />
      ) : (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="m-2 flex flex-col">
            <label className=' text-green-800 text-2xl font-semibold'>Title : </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='border border-green-900 outline-none p-1.5 rounded-md my-2 '
            />
          </div>
          <div className="m-2 flex flex-col">
            <label className=' text-green-800 text-2xl font-semibold'>Author : </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className='border border-green-900 outline-none p-1.5 rounded-md my-2 '
            />
          </div>
          <div className="m-2 flex flex-col">
            <label className=' text-green-800 text-2xl font-semibold'>Publish Year : </label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className='border border-green-900 outline-none p-1.5 rounded-md my-2 '
            />
          </div>
          <button
            className=' p-2 border border-green-900 text-22xl m-2 rounded-md hover:bg-green-200 font-bold text-green-950'
            onClick={handleSubmit}
          >Submit</button>

        </div>
      )}
    </div>
  )
}

export default CreateBook