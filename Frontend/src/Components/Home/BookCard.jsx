import React from 'react'
import BookCardList from './BookCardList'

const BookCard = ({books}) => {

  return (
    <div className=' grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {books.map((item)=>(
        <BookCardList key={item._id} item={item}/>
      ))}
    </div>
  )
}

export default BookCard