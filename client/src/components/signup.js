import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Signup = () => {
    let [email, setEmail]=useState("")
    let [password, setPassword]=useState("")
    let [confirmPassword, setConfirmPassword]=useState("")
    let navigate=useNavigate()
    function signup(){
        if(password!==confirmPassword){
            return alert("password and confirm password does not match")
        }
        fetch("/signup",{
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
            else alert(data.messagge)
            navigate("/")
        })
        
    }

  return (
    <div style={{border:"2px dashed white"}}>
        <h1>Sign Up Page</h1>
         <div>
        Email : <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <br></br>
        <br></br>
        <br></br>

       Password : <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
       <br></br>
        <br></br>
        <br></br>
        Confirm Password : <input type="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />
       <br></br>
        <br></br>
        <br></br>
       <button onClick={signup}>Sign UP</button>
    </div>
    <Link to="/"><h3 style={{color:"white"}}>Already have an account? Sign in here</h3></Link>
    </div>
  )
}

export default Signup