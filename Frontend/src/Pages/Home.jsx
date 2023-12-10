import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { MdOutlineAddBox } from 'react-icons/md';
import Spinner from '../Components/Spinner.jsx'
import { Link } from 'react-router-dom'
import BookCard from '../Components/Home/BookCard.jsx';
import BookTable from '../Components/Home/BookTable.jsx';

const Home = () => {

  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:9999/books')
      .then((response) => {
        setBooks(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
        <div className="btns flex items-center justify-center gap-10">
          <button 
            className='p-2 text-white bg-slate-800 border-0 outline-none w-55 text-2xl rounded-md'
            onClick={() => setShowType('table')}
          >Table</button>
          <button
           className='p-2 text-white bg-slate-800 border-0 outline-none w-55 text-2xl rounded-md'
           onClick={() => setShowType('card')}
           >Card</button>
        </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {isLoading ? (
        <Spinner />
      ) :
        (
          showType === 'table' ? (<BookTable books={books} />) : (<BookCard books={books} />)
        )}
    </div>
  )
}

export default Home