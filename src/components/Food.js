import React from 'react';
import './Food.css';
import img2 from '../photo/img2.jpg';
import img3 from '../photo/img3.jpg';
import img4 from '../photo/img4.jfif';
import img5 from '../photo/img5.jfif';

function Food() {
  return (
    <div className='foodDiv'>
        <h1>Nutritious Food</h1>
        <div className='foodFeatures'>
            <div>
                <img src={img4}></img>
                <h2>Fruit Incorporated In Meals</h2>
            </div>
            <div>
                <img src={img3}></img>
                <h2>Taken Care of Hygiene</h2>
            </div>
            <div>
                <img src={img2}></img> 
                <h2>Menu Designed By Nutritionist</h2>
            </div>
            <div>
                <img src={img5}></img>
                <h2>No Junk</h2>
            </div>
        </div>
    </div>
  )
}

export default Food