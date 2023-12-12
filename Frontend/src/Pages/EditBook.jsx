import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Spinner from '../Components/Spinner.jsx'
import BackButton from '../Components/BackButton.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const EditBook = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const { id } = useParams();

  const navigate = useNavigate();

  //Get book of specified ID
  useEffect(() => {
    setIsLoading(true);
    axios.
      get(`https://book-store-snzt.onrender.com/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      })
  }, []);

  //Post book of specified edits in ID
  const handleEdit = () => {
    const data = {
      title, author, publishYear
    }
    setIsLoading(true);
    axios
      .put(`https://book-store-snzt.onrender.com/books/${id}`, data)
      .then(() => {
        setIsLoading(false);
        navigate('/');
        enqueueSnackbar('Book edited successfully!', { variant: 'success' });
      })
      .catch((err) => {
        console.log(err.message);
        enqueueSnackbar("Opps! An error occurred!", { variant: "error" });
        setIsLoading(false);
        enqueueSnackbar('Opps! An error occurred!', { variant: 'error' });
      });
  };

  return (

		<div>
			<BackButton />
			<h1 className='text-red-950 m-8 text-2xl font-bold '>Edit book : </h1>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='flex w-full justify-center items-center'>
					<div className='border border-green-500 flex flex-col mx-5 mt-10 p-15 w-[450px] min-w-[150px] rounded-lg'>
						<div className='m-2 flex flex-col'>
							<label className=' text-green-800 text-2xl font-semibold'>
								Title :
							</label>
							<input
								type='text'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								className='border border-green-900 outline-none p-1.5 rounded-md my-2'
							/>
						</div>
						<div className='m-2 flex flex-col'>
							<label className='text-green-800 text-2xl font-semibold'>
								Author :
							</label>
							<input
								type='text'
								value={author}
								onChange={(e) => setAuthor(e.target.value)}
								className='border border-green-900 outline-none p-1.5 rounded-md my-2'
							/>
						</div>
						<div className='m-2 flex flex-col'>
							<label className=' text-green-800 text-2xl font-semibold'>
								Publish Year :
							</label>
							<input
								type='text'
								value={publishYear}
								onChange={(e) => setPublishYear(e.target.value)}
								className='border border-green-900 outline-none p-1.5 rounded-md my-2 '
							/>
						</div>
						<button
							className='transition-all p-2 border border-green-900 text-22xl m-2 rounded-md hover:bg-green-200 font-bold text-green-950'
							onClick={handleEdit}
						>
							Submit
						</button>
					</div>
				</div>
			)}
		</div>
	);


export default EditBook