import { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleDeleteClick = id => {
    onDelete(book.id)
  }

  const handleSubmit = (id, newTitle) => {
    setShowEdit(!showEdit)
    onEdit(id, newTitle)
  }

  let content = <h3>{book.title}</h3>
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />
  }

  return (
    <div className='book-show'>
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt='Book Images'
      />
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleSubmit}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow
