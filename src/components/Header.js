import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isOpen, setIsOpen]= useState(false);
    
    const toggling= ()=>{
        setIsOpen(!isOpen);
    };
    
  return (
    <div className='headerDiv'>
        <h1 className='head'>PASTELS</h1>
        <div className='programDiv'>
            <div>
                <h3 onMouseOver={toggling} onMouseOut={toggling}>Programs</h3>
                {isOpen && <ul>
                    <li>PlayGroup</li>
                    <li>Prenursery</li>
                    <li>LKG</li>
                    <li>UKG</li>
                    <li>Preschool</li>
                    <li>Daycare</li>
                    <li>Activity Center</li>
                </ul>}
                
            </div>
            <h3>Career</h3>
            <h3>Galary</h3>
            <button style={{width: "150px", style: "none", color: 'white', backgroundColor: 'turquoise' , border: "none"}}>Fee Structure</button>
            <Link to={{pathname: "mailto:pastels@gmail.com"}} target="_blank" style={{width: "150px", style: "none", color: 'white', backgroundColor: 'turquoise' , border: "none", textAlign:"center"}}> Email Us</Link>
        </div>
    </div>
  )
}

export default Header;