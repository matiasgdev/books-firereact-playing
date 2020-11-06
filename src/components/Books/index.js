import React, { useContext } from 'react'
import { BookContext } from '../../context/BooksContext'

const Books = () => {
  const { books, deleteBook, setCurrentId, focusRef } = useContext(BookContext)

  const handleDeleteBook = (id) => {
    deleteBook(id)
  }

  return (
    <div>
      <h2>List of your books ({books.length})</h2>
      {/* Books items */}
      {books.map(book => (
        <div className="book" key={book.id}>
          <small className="book__id">#{book.id}</small>
          <p className="book__name">{book.name}</p>
          <p className="book__desc">{book.description}</p>
          <div className="book__actions">
            <span
              onClick={
                () => setCurrentId(book.id)
              }
            > edit
            </span>
            <span
              onClick={
                () => handleDeleteBook(book.id)
              }
            > x
            </span>
          </div>
        </div>
      ))}
      <div ref={focusRef} id="focus"></div>
    </div>
  )
}

export default Books
