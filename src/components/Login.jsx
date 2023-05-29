import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Login() {
  let navigate=useNavigate()
 let email=useRef();
 let password=useRef();
 let [users,setUsers]=useState([]);
 useEffect(()=>{
  fetch("http://localhost:4000/users")
  .then(res=>res.json())
  .then((data)=>{setUsers(data);console.log(data);})

 },[])
  
 const hanldeSubmit=(e)=>{
  e.preventDefault();
  let flag=false;
  users.forEach((u)=>{
    if(u.email===email.current.value){
      flag=true;
      if(u.password===password.current.value){
        console.log(u);
        
        localStorage.setItem("userdetails",JSON.stringify(u))
        alert("login succesful")
        
        return navigate("/home");
      }
      else{
        return alert("invalid password")
      }
    }
  })
  if(flag===false){
    alert("user not exit please do Registration")
  }

 }

  return (
    <div className='loginpage'>
        <h1>Login here</h1>
        <form action="" className="login " onSubmit={hanldeSubmit}>
            <input type="email tel"  placeholder='Enter Email or Phonenumber' required ref={email}/>
            <input type="password" placeholder='Enter Password' required ref={password} />
            <button>Login</button>
            <span>Not have Account?<Link to="/"><button>Create </button></Link></span>
            <span><a href="/forgotpassword">Forgot password</a></span>
        </form>
    </div>
  )
}

export default Login