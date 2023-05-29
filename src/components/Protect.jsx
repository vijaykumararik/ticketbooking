import React from 'react'

import { Navigate } from 'react-router-dom';

function Protect({Child}) {
 
    const varify=()=>{
        if(localStorage.getItem("userdetails")==null){
            return false;
        }else{
            return true;
        }
    }
  return (
    <div>
        {
            varify()? <Child/>: <Navigate to="/login" />
        }

    </div>
  )
}

export default Protect