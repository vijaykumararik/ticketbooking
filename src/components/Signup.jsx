import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Signup() {
    let navigate=useNavigate();
    let name =useRef();
    let email =useRef();
    let password =useRef();
    let conformpassword=useRef();
    let dob =useRef();
    let phno=useRef();
    let [passwordmismatch,setPasswordmismatch]=useState(false);
    let [emailstatus,setEmailstatus]=useState(false);
    let [flag,setFlag]=useState(true);
    let [dobmismatch,setDobmismatch]=useState(false)

    useEffect(()=>{
      if(localStorage.getItem("userdetails")!=null){
        navigate("/home")
      }
    },[])
   
    const handleSubmit=(e)=>{
     e.preventDefault();
        let newUser={
            name:name.current.value,
            email:email.current.value,
            password:password.current.value,
            dob:dob.current.value,
            phno:phno.current.value

        }
        if(password.current.value!==conformpassword.current.value){
          return setPasswordmismatch(true);  
          
        }
        if(new Date < new Date(dob.current.value)){
          return setDobmismatch(true);

        }
        fetch("http://localhost:4000/users",{method:"POST",
                                             headers:{"Content-Type":"application/json"},
                                             body:JSON.stringify(newUser)})
        .then(()=>{
            alert("Sign up succesful")
            navigate("/login")
        })
        
    }
    const handleEmailvarify=()=>{

      
// const url = `https://zerobounce1.p.rapidapi.com/v2/validate?api_key=df0a83e43ede4d889bb741a24f857030&email=${email.current.value}`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'bd2f912becmshc287c75fdeacdc7p1d15d5jsn97db6b6f5e12',
// 		'X-RapidAPI-Host': 'zerobounce1.p.rapidapi.com'
// 	}
// };

// fetch(url,options)
// .then(res=>res.json())
// .then((data)=>{setEmailstatus(data.status);
//   console.log(data.status);


// })
  setFlag(false)
  setEmailstatus("email id varified")
}

  return (<div className='singuppage'>
    <h1>Sign up Here</h1>
    <form action='' className="signup" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter full name' required  ref={name}/>
        <input type="email" placeholder='Enter email' ref={email} required />
        <input type="password" placeholder='Enter password'ref={password} required />
        <input type="text" placeholder='Conform password' ref={conformpassword} required />
        {passwordmismatch===true&&<span style={{color:"red",fontWeight:"bold",backgroundColor:"white"}}>{"Password is not matching"}</span> }
        <span>DOB &nbsp;<input type="date" placeholder='Enter DOB' ref={dob} required/></span> 
        {dobmismatch===true&&<span style={{color:"red",fontWeight:"bold",backgroundColor:"white"}}>{"Invalid date of birth"}</span> }
        <input type="tel" placeholder='Enter Phonenumber'min="10" max="10" ref={phno} required/>
        <input type="submit" disabled={flag} />
    </form>
    <div className='verifybtn'><button onClick={handleEmailvarify} >Verify emailid</button>
       <span style={{color:"green",margin:"10px",fontSize:"20px"}}>{emailstatus}</span> 
       <p>Already have an account?<Link to="/login"><button>Login</button></Link></p>
       </div>
  </div>
    
  )
}

export default Signup