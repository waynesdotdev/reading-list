import { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([])
  console.log(books)

  const createBook = title => {
    if (!title) {
      return alert('There is no title, please add one and try')
    }
    const updatedBooks = [...books, { id: books.length + 1, title: title }]
    setBooks(updatedBooks)
  }

  const deleteBookById = id => {
    const updatedBooks = books.filter(book => book.id !== id)
    setBooks(updatedBooks)
  }

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return { ...book, title: newTitle }
      }
      return book
    })

    setBooks(updatedBooks)
  }

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
