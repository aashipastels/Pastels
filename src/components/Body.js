import React from 'react';
import './Body.css';
import img1 from '../photo/img1.jpeg';
import wtsp from '../photo/wtsp.png';
import fb from '../photo/fb.png';
import { Link, Redirect } from 'react-router-dom';

function Body() {
  return (
    <div className='bodyDiv'>
        <div className='imgDiv'>
            <Link style={{ margin: "5px"}} to={{pathname: "https://wa.me/18860291841"}} target="_blank" rel="noopener noreferrer" >
            <img src={wtsp}  style={{height: "50px", width: "50px", marginLeft: "0px", margin: "5px"}} alt=""></img>
            </Link>
            <Link  style={{ margin: "5px"}} to= {{ pathname: "https://www.facebook.com/PLS456/" }}target="_blank">
            <img src={fb} style={{height: "50px", width: "5, 0px", marginLeft: "0px", margin: "5px"}} alt=""></img>
            </Link>
        </div>
        <div style={{flex: "1 1 0" ,textAlign: "center" }}>
            <h1 >PreSchool & Day Care</h1>  
        </div>
        <div style={{flex: "1 1 0"}}>
            <img className='bodyImg' src= {img1} alt='img1'  ></img>
           
        </div>

    </div>
  )
}

export default Body;