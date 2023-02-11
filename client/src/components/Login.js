import React, { useState } from 'react'
import { Navigate, useNavigate,Link } from 'react-router-dom'

const Login = ({user, setUser}) => {
    let [email, setEmail]=useState("")
    let [password, setPassword]=useState("")
    const navigate=useNavigate()
    function logIn(){
        fetch("/signin",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                email, password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                alert(data.error)
            }
            else {
                localStorage.setItem("user", JSON.stringify(data.user))
                setUser(data.user)
                alert(data.messagge)
                navigate("/home")
            }
        })
        
    }


  return (
    <div style={{border:"2px dashed white"}}>
        <h1>Login page</h1>
        Email : <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <br></br>
        <br></br>
        <br></br>

       Password : <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
       <br></br>
        <br></br>
        <br></br>
       <button onClick={logIn}>Log in</button>
       <br></br>
       <br></br>
       <Link to="/signup"><h3 style={{color:"white"}}>Don't have an account? Sign up here</h3> </Link>
    </div>
  )
}

export default Login