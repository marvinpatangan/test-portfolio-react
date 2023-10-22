import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css';
import ReorderIcon from "@mui/icons-material/Reorder"

function Navbar() {

  const location = useLocation();
  const [expandNavbar, setExpandNavbar] = useState(false)

  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}> 
        <div className='toggleButton'>
            <button 
              onClick={() => {
                setExpandNavbar((prev) => !prev)
                }}
            >
              <ReorderIcon/>
            </button>
        </div>
        <div className='links'>
            <Link to='/'> Home </Link>
            <Link to='/Projects'> Projects </Link>
            <Link to='/Experience'> Experience </Link>
        </div>
    </div>
  )

}

export default Navbar