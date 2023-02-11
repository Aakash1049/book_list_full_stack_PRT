// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/signup';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import AddBook from './components/AddBook';
import BookDetails from './components/BookDetails';
import Editbook from './components/Editbook';

function App() {
  let [user,setUser]=useState({})
  useEffect(()=>{

  },[])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login user={user} setUser={setUser}/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home user={user} setUser={setUser}/>}/>
          <Route path="/addBook" element={<AddBook user={user} setUser={setUser}/>}/>
          <Route path="/bookInfo" element={<BookDetails/>}/>
          <Route path="/editBook" element={<Editbook/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
