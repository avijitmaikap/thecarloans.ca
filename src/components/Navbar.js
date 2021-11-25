import React from 'react'
import "../styles/navbar.scss"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg menus navbar-dark shadow fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#"> 
            TheCarLoans.ca
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Credit Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Inventory
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQ
                </a>
              </li>
            </ul>
  
            <button type="button" className="btn rounded-pill btn-rounded">
              +1 6477048938
              <span>
                <i className="fas fa-phone-alt"></i>
              </span>
            </button>
          </div>
        </div>
      </nav>
    )
}

export default NavBar
