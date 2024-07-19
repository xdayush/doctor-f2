import React from 'react';
import  './homepage.css';

export default function Homepage() {
  return (
    <>
      <div className=" top-div">
    <div className="row justify-content-left card-div ">
      <div className="col-md-6">
        <div className="card custom-card">
          <div className="card-body">
            <h5 className="card-title">F2 Fintech</h5>
            <h1 className="card-text2">Healthcare Meets Innovation:</h1>
            <p className="card-text">Empowering Doctors, Simplifying Lives</p>
            <a href="#" className="btn btn-primary">See Features</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='bottom-div text-center'>
    <h1><b>The platform you trust to<br/>care for those you love</b></h1>
    <button className='btn-home'><b>Explore Features</b></button>
    <button className=' btn-home'><b>Our Contacts</b></button>
  </div>

  </>
  )
}
