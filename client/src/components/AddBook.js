import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
    let [title,setTitle]=useState("")
    let [isbn,setIsbn]=useState("")
    let [author,setAuthor]=useState("")
    let [description,setDescription]=useState("")
    let [published,setPublished]=useState("")
    let [publisher, setPublisher]=useState("")
    let [genre, setGenre]=useState("")
    const navigate= useNavigate ()
    
    useEffect(()=>{
        let id=localStorage.getItem("user")
        if(!id){
            navigate("/")
        }
    },[])
    function addBook({user, setUser}){
        fetch("/addBook",{
            method:"POST",
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
                
                alert(data.message)
                navigate("/home")
            }   
        })
    }
  return (
    <>
     <button style={{marginLeft:"-360px", backgroundColor:"yellow"}} onClick={()=>{navigate("/home")}}>Show Book List</button>
    <div style={{border:"1px solid black", width:"400px", marginLeft:"520px", padding:"30px 30px"}}>
    <h1>Add Book</h1>
    <p>create new book</p>
    <input type="text" value={title} placeholder="Title of the book" onChange={(e)=>setTitle(e.target.value)}/><br></br><br></br>
    <input type="text" value={isbn} placeholder="ISBN" onChange={(e)=>setIsbn(e.target.value)}/><br></br><br></br>
    <input type="text" value={author} placeholder="Author" onChange={(e)=>setAuthor(e.target.value)}/><br></br><br></br>
    <input type="text" value={description} placeholder="Decsribe the book" onChange={(e)=>setDescription(e.target.value)}/><br></br><br></br>
    <input type="date" value={published} placeholder="published date" onChange={(e)=>setPublished(e.target.value)}/><br></br><br></br>
    <input type="text" value={publisher} placeholder="publisher of this book" onChange={(e)=>setPublisher(e.target.value)}/><br></br><br></br>
    <input type="text" value={genre} placeholder="Genre of this book" onChange={(e)=>setGenre(e.target.value)}/><br></br><br></br>

    <button onClick={addBook}>Submit</button>
    </div>
    </>
  )
}

export default AddBook