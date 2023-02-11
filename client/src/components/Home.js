import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import book from "../images/book.png"
import Editbook from './Editbook'
const Home = () => {
    const [mybooks, setMybooks]=useState([])
    const [showbooklist, setshowbooklist]=useState(true)
    const [currentBook, setcurrentBook]=useState({})
    const [editBook, setEditBook]=useState(false)
    const navigate=useNavigate()
    let id=JSON.parse(localStorage.getItem("user"))._id
    useEffect(()=>{
        if(!id){
            navigate("/")
        }
        fetch(`/books/${id}`,{
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                alert(data.error)
            }
            else {
                setMybooks(data)
               console.log("my books", data)
            }
        })
    },[editBook, showbooklist, mybooks])

    function deletefunc(){
        fetch(`/books/${currentBook._id}/${id}`,{
            method:"DELETE",
            headers:{
                "Content-type":"application/json"
            },

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

    function bookdetails(){
     return(
        !editBook ?
        <>
        <div style={{textAlign:"center", marginLeft:"350px"}}>

        <button style={{marginLeft:"-350px", backgroundColor:"yellow"}} onClick={()=>{setshowbooklist(true);setcurrentBook({})}}>show book list</button>
        <h1 style={{textAlign:"center"}}>Book's Record</h1>
    <p style={{textAlign:"center"}}>view book's info</p>
        </div>
    <div  style={{border:"1px solid black", width:"400px", marginLeft:"520px", padding:"30px 30px", color:"white"}}>
       <p>Title : {currentBook.title}</p> <br></br>
       <p>Author : {currentBook.author}</p> <br></br>
       <p>ISBN : {currentBook.isbn}</p> <br></br>
       <p>Publisher : {currentBook.publisher}</p> <br></br>
       <p>Published Date : {currentBook.published}</p> <br></br>
       <p>Description : {currentBook.description}</p> <br></br>
       <p>Genre : {currentBook.genre}</p> <br></br>

    </div>
    <div style={{textAlign:"center", marginLeft:"350px"}}>

    <button onClick={deletefunc}>Delete this book</button>    <button onClick={()=>setEditBook(true)}>Edit this book</button>
    </div>

        </>
        :
        <Editbook currentBook={currentBook} editBook= {editBook} setEditBook ={setEditBook} showbooklist={showbooklist} setshowbooklist={setshowbooklist}/>
     )
    
    }
  return (
    <>
    <h1 style={{textAlign:"center", color:"white"}}>Books List</h1>
    <div  style={{position:"absolute",right:"130px"}}>

    <button style={{marginRight:"30px"}} onClick={()=>navigate("/addBook")}> + Add New books</button>
    <button onClick={()=>{localStorage.clear(); navigate("/")}}>Log out</button>
    </div>
    <br></br>
    <div style={{display:'grid',color:"white", gridTemplateColumns:"auto auto auto auto", marginTop:"50px"}}>

    {   showbooklist ?
        mybooks.map((eachbook)=>{
            return(
                <span onClick={()=> {setshowbooklist(false); setcurrentBook(eachbook)}} style={{textAlign:"center" , display:'flex', flexDirection:"column",justifyContent:"space-around", border:"1px solid white", margin:"10px"}}>
                 <img style={{width:"300px", marginLeft:"auto",marginRight:"auto", marginTop:"5px"}} src={book}/>
                 <br></br>
                 Title :{eachbook.title}
                 <br>
                 </br>
                 Author : {eachbook.author}
                 <br>
                 </br>
                 Genre :{eachbook.genre}

                </span>
            )
        })
        :
        <div style={{display:'block'}}>
        {bookdetails()}
        </div>
    }
    
    </div>
        </>
  )
}

export default Home