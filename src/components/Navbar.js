import React from 'react'
import "../styles/navbar.scss"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg menus navbar-dark shadow fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            thecarloans.ca
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutus">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#works">
                  How it works
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Inventory
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li> */}
            </ul>
  
            <button type="button" className="btn rounded-pill btn-rounded">
              <a className="text-decoration-none text-black" href="tel:6477048938">+1-6477048938</a> 
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
