import React, { useContext, useEffect } from 'react'
import { BookContext } from '../../context/BooksContext'
import useInput from '../../hooks/useInput'

const BookForm = () => {
  const [nameInput, resetName, setName] = useInput('')
  const [descriptionInput, resetDescription, setDescription] = useInput('')
  const { createOrUpdateBook, currentId, setCurrentId, books } = useContext(BookContext)

  const handleCreateOrUpdateBook = (e) => {
    e.preventDefault()
    createOrUpdateBook({
      name: nameInput.value,
      description: descriptionInput.value
    })
    resetName()
    resetDescription()
  }

  const deleteCurrentId = () => { 
    setCurrentId(null)
    resetName()
    resetDescription()
  }

  useEffect(() => {
    if (currentId) {
      const bookFromCache = books.find(book => book.id === currentId)
      setName(bookFromCache.name)
      setDescription(bookFromCache.description)
    }
  }, [currentId, books, setName, setDescription]) 

  let header = []

  if (currentId) {
    header.push(
      <header className="bookform__header">
        <h2
          className="bookform__header--title"
        >Edit</h2>
        <small>#{currentId}</small>
        <span
          className="bookform__header--deleteId"
          onClick={deleteCurrentId}
        >x</span>
      </header>
    )
  } else {
    header.push(
      <header>
        <h2>New book</h2>
      </header>
    )
  }
  let buttonText = currentId ? 'Save Changes' : 'Save'


  return (
    <form
      onSubmit={handleCreateOrUpdateBook}
    >
      {header}
      <input
        type="text"
        placeholder="Type your favourite book"
        {...nameInput}
      />
      <br />
      <textarea
        placeholder="Description of book"
        {...descriptionInput}
      />
      <br />
      <button>
        {buttonText}
      </button>
    </form>
  )
}

export default BookForm
