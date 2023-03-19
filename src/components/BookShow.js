const BookShow = ({ book, deleteBook }) => {
  const handleDelete = id => {
    deleteBook(book.id)
  }

  return (
    <div className='book-show' onClick={handleDelete}>
      {book.title}
    </div>
  )
}

export default BookShow
