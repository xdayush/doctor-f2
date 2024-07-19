import React from 'react'
import './homepage2.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Homepage2() {
  return (
    <>
    <div className='main-div'>
        <div className="text-div container">
            <h6 style={{color:'grey'}}>Laboratory</h6>
            <h1 style={{fontSize:'50px'}} ><b>Medical Solutions</b></h1>
            <p style={{fontSize:'18px'}} >We are with you every step of the way: tour & project management, event conception. Mobile rooms for laboratories, blood donation rooms, doctors' clinics, showrooms.</p>
            <p style={{fontSize:'19px'}}>Book Lab test</p>
            <spam  className="  fa-solid fa-microscope fa-3x " style={{color:'#478ac9'}} > </spam ><spam style={{marginLeft:'30px', fontSize:'20px'}} >Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor.</spam>
            <br/><br/><br/><spam  className="  fa-solid fa-flask-vial fa-3x " style={{color:'#478ac9'}} > </spam ><spam style={{marginLeft:'30px', fontSize:'20px'}} >Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor.</spam>

        </div>
      <div className="img-div">
        <img className='img-img' src='./img/text-img.jpg'/>
      </div>
    </div>
       {/* <div class="container-1">
    <div class="color-box color1"></div>
    <div class="color-box color2"></div>
</div> */}
    <div className="bottom-div2">
    <div className="inner-bottom-div container">
      <div className="row ">
        <div className="col-md-3">
          <div className="card2 ">
            <div className="card-body2">
              <h2 className="card-title2">850</h2>
              <p className="card-text3">Happy Client</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card2">
            <div className="card-body2">
              <h2 className="card-title2">32</h2>
              <p className="card-text3">World Doctors</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card2">
            <div className="card-body2">
              <h2 className="card-title2">1k</h2>
              <p className="card-text3">Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card2">
            <div className="card-body2">
              <h2 className="card-title2">230</h2>
              <p className="card-text3">Medical Beds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    </>
  )
}
