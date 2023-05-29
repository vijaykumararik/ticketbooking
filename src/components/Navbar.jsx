// import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  //  let navigate=useNavigate();
//  let [alter,setAlterd]=useState(0);
//  let [local,setLocal]=useState()

 
  return (
  
        <nav className="navbar">
        <div className='logo'>
            <Link to="/home">TRAvel</Link>
           </div>
            <ul className='nav-lists'>
              <li></li>
              <li ><Link to="/busbook"><button className='btn'>BUS</button></Link></li>
              <li ><Link to="/flightbook"><button className='btn' >FLIGHT</button></Link></li>
              <li><Link to="/active">ACTIVE</Link></li>
              <li><span className='nav_profile'><Link to="/profile">Profile <i className='bx bxs-user-account'></i></Link></span></li>
            </ul>
            
           </nav>
  
  )
}

export default Navbar