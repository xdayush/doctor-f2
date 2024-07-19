import React from 'react'
import './homepage3.css'

export default function Homepage3() {
  return (
    <>
    <div className='main-div3'>
        <div >
        <h6 style={{fontSize:'20px', paddingTop: '50px'}}>Working process</h6> 
        </div>
      <div>
      <h1 style={{fontSize:'50px'}}><b>How it work</b></h1>
      </div>
      <div>
      <p style={{fontSize:'18x'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="image-main-div">
        <div className="row-image1-div">
          <div class="image-text-container">
          <img className='row-image img12' src='./img/4-2.jpg'></img>
          <h6><b>Appointment</b></h6>
        <p>Sample text. Click to select the Text Element.</p>
        </div>
          <div class="image-text-container">
          <img className='row-image img12' src='./img/4-1.jpg'></img>
          <h6><b>Satisfaction</b></h6>
        <p>Sample text. Click to select the Text Element.</p>
        </div>
        </div>
        
      <div className="middle-image">
        <img className='middle-image' src='./img/middle-image-pg3.png'></img>
      </div>
      <div className="row-image2-div">
      <div class="image-text-container">
      <img className='row-image img21' src='./img/4-4.jpg'></img>
      <h6><b>Happy Client</b></h6>
        <p>Sample text. Click to select the Text Element.</p>
        </div>
      <div class="image-text-container">
      <img className='row-image img22' src='./img/4-3.jpg'></img>
      <h6><b>Lab Tests</b></h6>
        <p>Sample text. Click to select the Text Element.</p>
        </div>
      </div>
      
    </div>
    </div>
    
    </>
  )
}
