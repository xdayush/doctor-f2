import React from 'react';
import  './navbar.css';
export default function Navbar() {
  return (  
    <div>
      <nav className="navbar navbar-expand-lg "style={{ backgroundColor: '#478ac9' }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img style={{height:'80px'}} src='./img/F2-Fintech-logoblack.png'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
  </div>
  <div className="collapse navbar-collapse navbar-main" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active mx-3 text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-3 text-white" href="#">Buy Insaurance</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active mx-3 text-white" href="#" role="button">
            Find Doctor
          </a>
        
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-3 text-white">Contact</a>
        </li>
      </ul>
      
    </div>
</nav>
    </div>
  )
}
