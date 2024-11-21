import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Images/e2ce925ca4d482785f3bfe305765579a.jpg'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

const Header = () => {
  // Toggle the menu
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth >800 ? true : false);
  return (
    <nav>
      <div className="container nav__container">
       <Link to="/" className="nav__logo" onClick={() => setIsNavShowing(false)}>
       <img src={Logo} alt=""  style={{borderRadius:"50%"}}/>
       </Link>
      { isNavShowing &&
        <ul className="nav__menu">
        <li><Link to="/profile/dggdhd">Donald Trump</Link></li>
        <li><Link to="/create" onClick={() => setIsNavShowing(false)}>Create Post</Link></li>
        <li><Link to="/authors" onClick={() => setIsNavShowing(false)}>Authors</Link></li>
        <li><Link to="/logout" onClick={() => setIsNavShowing(false)}>Logout</Link></li>
       </ul>
      } 
       <button className='nav__toggle-btn'>
       {
        isNavShowing ? <IoClose onClick={() => setIsNavShowing(false)} /> : <FaBars onClick={() => setIsNavShowing(true)} />
       }
    
       </button>

      </div>
    </nav>
  )
}

export default Header