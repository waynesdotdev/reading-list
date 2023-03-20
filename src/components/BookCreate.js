import { useState, useContext } from 'react'
import BooksContext from '../context/books'

const BookCreate = () => {
  const [title, setTitle] = useState('')
  const { createBook } = useContext(BooksContext)

  const handleChange = e => {
    setTitle(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    createBook(title)
    setTitle('')
  }

  return (
    <div className='book-create'>
      <form onSubmit={handleSubmit}>
        <h3>Add a Book</h3>
        <label htmlFor='bookTitle'>Book Title</label>
        <input
          className='input'
          type='text'
          id='bookTitle'
          value={title}
          onChange={handleChange}
        />
        <button className='button'>Create</button>
      </form>
    </div>
  )
}

export default BookCreate
