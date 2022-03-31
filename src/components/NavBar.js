import React from 'react'
import NavImg from '../images/troll-face.png'
const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={NavImg} className='nav--img' alt='navimg'/>
        <h2 className='nav--title'>Meme Generator</h2>
        <h4 className='nav--text'>React App</h4>
    </div>
  )
}

export default NavBar