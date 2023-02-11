import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Editbook = ({currentBook,editBook,setEditBook,showbooklist,setshowbooklist}) => {
    let [title,setTitle]=useState(currentBook.title)
    let [isbn,setIsbn]=useState(currentBook.isbn)
    let [author,setAuthor]=useState(currentBook.author)
    let [description,setDescription]=useState(currentBook.description)
    let [published,setPublished]=useState(currentBook.published)
    let [publisher, setPublisher]=useState(currentBook.publisher)
    let [genre, setGenre]=useState(currentBook.genre)

    function updtaeBook(){
        setEditBook(false)
         setshowbooklist(true)
        fetch(`/books/${currentBook._id}`,{
            method:"PUT",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                title,isbn,author,description,published,publisher,genre,
                user:JSON.parse(localStorage.getItem("user"))
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                alert(data.error)
            }
            else { 
                alert(data.messgae)
                setshowbooklist(true)
            }
        })
    }
  return (
    <div style={{marginLeft:"450px"}}>

    <button style={{marginLeft:"-450px", backgroundColor:"yellow"}} onClick={()=>{setEditBook(false); setshowbooklist(true)}}>Show Book List</button>
        <div style={{border:"1px solid black"}}>
    <h1>Edit Book</h1>
    <p>Update Book's Info</p>
    Title: <input type="text" value={title} placeholder="Title of the book" onChange={(e)=>setTitle(e.target.value)}/><br></br><br></br>
    ISBN: <input type="text" value={isbn} placeholder="ISBN" onChange={(e)=>setIsbn(e.target.value)}/><br></br><br></br>
    Author: <input type="text" value={author} placeholder="Author" onChange={(e)=>setAuthor(e.target.value)}/><br></br><br></br>
    Description: <input type="text" value={description} placeholder="Decsribe the book" onChange={(e)=>setDescription(e.target.value)}/><br></br><br></br>
    Published Date: <input type="date" value={published} placeholder="published date" onChange={(e)=>setPublished(e.target.value)}/><br></br><br></br>
    Publisher: <input type="text" value={publisher} placeholder="publisher of this book" onChange={(e)=>setPublisher(e.target.value)}/><br></br><br></br>
    Genre: <input type="text" value={genre} placeholder="Genre of this book" onChange={(e)=>setGenre(e.target.value)}/><br></br><br></br>

    <button onClick={updtaeBook}>Update Book</button>
        </div>
    </div>
  )
}

export default Editbook