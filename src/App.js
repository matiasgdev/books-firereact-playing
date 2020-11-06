import React from 'react'
import BooksContext from './context/BooksContext'
import BookForm from './components/BookForm'
import Books from './components/Books'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
     
import './App.css';

function App() {
  return (
    <BooksContext>
      <div className="app">
        <h1>
          Favourites Books Application
        </h1>
        <div className="app__container">
          <BookForm />
          <Books />
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
      />
    </BooksContext>
  )
}

export default App;
