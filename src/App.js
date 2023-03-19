import { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([])

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

  return (
    <div className='app'>
      <BookList books={books} deleteBook={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
