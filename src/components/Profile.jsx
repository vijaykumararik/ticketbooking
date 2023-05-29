import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import {  useNavigate } from 'react-router-dom'
  
function Profile() {
    let navigate =useNavigate();
   let [userinfo,setUserinfo]=useState(null)
   useEffect(()=>{
    setUserinfo( JSON.parse(localStorage.getItem("userdetails")))
   },[])
   const handleDeleteAccount=()=>{
    let pas=prompt("are you sure to delete account if yes enter password");
    if(pas!=userinfo.password)
    {
      return alert("invalid password")
    }
    localStorage.removeItem("userdetails");
    fetch(` http://localhost:4000/users/${userinfo.id}`,{method:"DELETE"})
    
    .then(navigate("/")) 
   }
   function handleLogoutAccount(){
    localStorage.removeItem("userdetails");
   
    navigate( "/login")
   
   
   }
   
  return (
    <div className='profilepage'>
      <Navbar/>
      {userinfo!=null && <div className="user__details">
        <p>UserName:{userinfo.name}</p>
        <p>Phone Number:{userinfo.phno}</p>
        <p>DOB:{userinfo.dob}</p>
        <p> <button className='nav_btn_logout' onClick={handleLogoutAccount}>Logout</button></p>
       <p> <button onClick={handleDeleteAccount} >DELET ACCOUNT</button></p>
      </div>}
    </div>
  )
}

export default Profile