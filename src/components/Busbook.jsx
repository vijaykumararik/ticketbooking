import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Ticketbookinfo from './Ticketbookinfo';
import Navbar from './Navbar';

function Busbook() {
    const destinations = ["Bangalore", "Belagavi", "Bidar", "Chamarajanagara", "Chikkamagaluru"
        , "Dakshina Kannada", "Dharwad", "Gulbarga", "Haveri", "Kolara", "Mandya", "Raichur"
        , "Shivamogga", "Udupi", "Vijayanagara", " Uttara Kannada"
        , "Yadgiri", "Tumakuru" , "Ramanagara", "Mysuru", "Koppala", "Kodagu", "Hassan", "Gadag", "Davanagere", "Chitradurga"
        , "Chikkaballapura", "Vijayapura", "Ballary", "Bengaluru Rural", "Bagalkote"]
    let from = useRef();
    let to = useRef();
    let naviagte=useNavigate();
    let date = useRef();
    let [searchedBus,setSearchedBus]=useState(null);
    // let [dos,setDos]=useState("false")
    // let [alterd,setAlterd]=useState(0);
    // useEffect(()=>{
    //     // setDos("false")
        

    // },[alterd])

    const handleSearchBus = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/bus")
        .then(res=> res.json())
        .then((allbus)=>{
            let filteredbus=allbus.filter((bus)=>{
                   return (bus.from===from.current.value)&&(bus.to===to.current.value)
            });
            setSearchedBus(filteredbus);
            console.log(filteredbus);
            localStorage.setItem("bookingdate" , JSON.stringify(date.current.value) )
            
        })}
        // const dofocus=()=>{
        //     setDos("true")
        //     // setAlterd(alterd+1)

        // }
    return (
        <div>
            <Navbar/>
            <div className="busbook">
                <div className="inputs">
                    <h1>Search for the bus</h1>
                    <form onSubmit={handleSearchBus} className='form'>
                        <select name="" id="from" ref={from}>
                            <option value="from">From</option>
                            {destinations.map((d)=>( <option value={d}>{d}</option> ))}
                        </select>
                        <select name="" id="to" ref={to}>
                            <option value="from">TO</option>
                            {destinations.map((d)=>( <option value={d}>{d}</option> ))}
                        </select>
                       
                        <input type="date" required  ref={date}/>
                        {/* <input type="text" onFocus={dofocus} /> */}
                        <input type="submit" value="Search bus" className='btn-searchbus' />
                    </form>
                    {/* <h1>{dos}</h1> */}
                </div>
                {searchedBus && <div className="bus-list">
                <hr />
                <h3>Journey from {from.current.value} to {to.current.value}</h3>
               { searchedBus.length>0 ? <table className='table' cellSpacing="30px" cellPadding="30px">
                    <thead >
                        <tr className='trhead'>
                        <th>Bus</th>
                        <th>Available</th>
                        <th>Departure</th>
                        <th>Araival</th>
                        <th>Duration</th>
                        <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchedBus.map((bus)=>( 
                        <tr className='trbody'> 
                            <td>{bus.busname}</td>
                            <td> 
                              <span style={{color:"green",fontSize:"30px"}}>{bus.seats - bus.booked_seats}  </span>
                               <span>/{bus.seats}</span> 
                          </td>
                                    <td>
                                       <span> {date.current.value} </span>
                                       <span> {bus.start} </span>
                                    </td>
                                    <td>
                                        <span> {date.current.value} </span>
                                       <span> {bus.end} </span>
                                    </td>
                                    <td>
                                        <span>{bus.journey_time}Hr</span>
                                        
                                    </td>
                                    <td>
                                    <Link to={`/ticketinfo/${bus.id}`}><button className='btn-book'>Book ticket</button></Link>
                                    </td>


                        </tr> ))}
                    </tbody>
                </table> : <h1>Sorry no buses is avalable for your route!!!!</h1> }
            </div>}
            </div>
        </div>
    )
}

export default Busbook