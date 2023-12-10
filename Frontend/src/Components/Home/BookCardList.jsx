import React from 'react'
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BookCardList = ({item}) => {
  return (
          <div className="border-gray-400 p-4 m-3 rounded border-2 hover:shadow-xl" key={item._id}>
              <h2 className='text-2xl text-purple-900 font-bold'>{item.publishYear}</h2>
             <h4 className='mt-5 underline'>{item._id}</h4>
              <div className="flex items-center gap-3 my-8">
                  <PiBookOpenTextLight className='text-red-500 text-3xl' />
                  <h2>{item.title}</h2>
              </div>
              <div className="flex items-center gap-3 mb-14">
                  <BiUserCircle className='text-yellow-300 text-3xl' />
                  <h2>{item.author}</h2>
              </div>
              <div className="flex justify-between items-center p-3">
                  <Link to={`books/details/${item._id}`}>
                      <BsInfoCircle className='text-3xl text-green-800' />
                  </Link>
                  <Link to={`books/edit/${item._id}`}>
                      <AiOutlineEdit className='text-3xl text-yellow-800' />
                  </Link>
                  <Link to={`books/delete/${item._id}`}>
                      <MdOutlineDelete className='text-3xl text-red-800' />
                  </Link>
              </div>
          </div>
  )
}

export default BookCardList