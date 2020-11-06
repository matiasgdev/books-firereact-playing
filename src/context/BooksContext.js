import React, { useState, useCallback, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import { db } from '../firebase'

export const BookContext = React.createContext()

export default function BookContextProvider({children}) {
  const [books, setBooks] = useState([])
  const [currentId, setCurrentId] = useState(null)
  const focusRef = useRef(null)

  const createOrUpdateBook = useCallback(async (book) => {
    // add or edit book from/to collection
    if (currentId) {
      await db.collection('books').doc(currentId).update(book)
      setCurrentId(null) // delete actual state of ID
      toast('Updated', {type: 'success'}) 
    } else {
      await db.collection('books').doc().set(book)
      toast('Created')
      // scroll to end to the list
      focusRef.current.scrollIntoView({ behavior: 'smooth'})
    }

  }, [currentId])


  const deleteBook = useCallback( async id => {
    if (window.confirm('Are you sure?')) {
      await db.collection('books').doc(id).delete()
      toast('Deleted succesfully', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }, [])

  const getBooks = useCallback(async () => {
    // get collection books 
    db
      .collection('books')
      .onSnapshot((snapshot) => {
        let books = []
        snapshot.forEach(doc => {
          books.push({...doc.data(), id: doc.id})
        })
        setBooks(books)
      })
      
  }, [])


  useEffect(() => {
    getBooks()
  }, [getBooks])


  return (
    <BookContext.Provider value={{
      books,
      createOrUpdateBook,
      deleteBook,
      currentId,
      setCurrentId,
      focusRef
    }}>
      {children}
    </BookContext.Provider>
  )
}