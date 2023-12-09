import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import CreateBook from './Pages/CreateBook.jsx'
import ShowBook from './Pages/ShowBook.jsx'
import EditBook from './Pages/EditBook.jsx'
import DeleteBook from './Pages/DeleteBook.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books/create' element={<CreateBook/>}/>
        <Route path='/books/details/:id' element={<ShowBook/>}/>
        <Route path='/books/edit/:id' element={<EditBook/>}/>
        <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      </Routes>
    </>
  )
}

export default App