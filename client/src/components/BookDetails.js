import React from 'react'

const BookDetails = ({book}) => {
  return (
    <>
    <h1>Book's Record</h1>
    <p>view book's info</p>
    <div>
       <p>Title : {book.title}</p> <br></br>
       <p>Author : {book.author}</p> <br></br>
       <p>ISBN : {book.isbn}</p> <br></br>
       <p>Publisher : {book.publisher}</p> <br></br>
       <p>Published Date : {book.published}</p> <br></br>
       <p>Description : {book.description}</p> <br></br>
    </div>
    <button>Delete book</button>    <button>Edit book</button>

    </>
  )
}

export default BookDetails