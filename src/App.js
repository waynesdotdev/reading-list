import { useEffect, useContext } from 'react'
import BookCreate from './components/BookCreate'
import BooksContext from './context/books'
import BookList from './components/BookList'

function App() {
  const { fetchBooks } = useContext(BooksContext)

  useEffect(() => {
    fetchBooks()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  )
}

export default App
