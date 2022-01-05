import React from 'react'
import { ReactComponent as Logo } from '../images/logo.svg';
import '../index.css'

function Navbar() {
    return (
        <nav><Logo style={{width:"100px",height:"45px"}}/><h3>About</h3><h2>Contact</h2></nav>
            
    
    )
}

export default Navbar
