import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
        <div class="u-body">

        <header className="u-black u-clearfix u-header u-header" id="sec-9fb2"><div className="u-clearfix u-sheet u-sheet-1">
          <Link to="/" className="u-image u-logo u-image-1" data-image-width="212" data-image-height="159">
            <img src="/images/logo.PNG" className="u-logo-image u-logo-image-1" />
          </Link>
          <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
            <div className="menu-collapse" styles="font-size: 1rem; letter-spacing: 0px;">

              <Link to="/" className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" >
                <svg>
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#menu-hamburger"></use>
                </svg>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <symbol id="menu-hamburger" viewBox="0 0 16 16" styles="width: 16px; height: 16px;">
                      <rect y="1" width="16" height="2"></rect>
                      <rect y="7" width="16" height="2"></rect>
                      <rect y="13" width="16" height="2"></rect>
                    </symbol>
                  </defs>
                </svg>
              </Link>

            </div>
            <div className="u-custom-menu u-nav-container">
              <ul className="u-nav u-unstyled u-nav-1">
                <li className="u-nav-item">
                  <Link to="/" className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" styles="padding: 10px 20px;">Home</Link>
                </li>
                <li className="u-nav-item">
                  <Link to="/" className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" styles="padding: 10px 20px;">Goto</Link>
                  <div className="u-nav-popup">
                    <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-2">
                      <li className="u-nav-item">
                        <Link to="/manufacturer" className="u-button-style u-nav-link u-white" >Manufacturer</Link>
                      </li>
                      <li className="u-nav-item">
                        <Link to="/distributor" className="u-button-style u-nav-link u-white" >Distributor</Link>
                      </li>
                      <li className="u-nav-item">
                        <Link to="/pharmacist" className="u-button-style u-nav-link u-white" >Pharmacist</Link>
                      </li>
                      <li className="u-nav-item">
                        <Link to="/patient" className="u-button-style u-nav-link u-white" >Patient</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="u-nav-item">
                  <Link to="/team" className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" styles="padding: 10px 20px;">Contact</Link>
                </li>
              </ul>
            </div>

            {/* this further header code is for the mobile view */}

            <div className="u-custom-menu u-nav-container-collapse">
              <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                <div className="u-inner-container-layout u-sidenav-overflow">
                  <div className="u-menu-close"></div>
                  <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-3">
                    <li className="u-nav-item">
                      <a className="u-button-style u-nav-link" to="/" styles="padding: 10px 20px;">Home</a>
                    </li>
                    <li className="u-nav-item">
                      <a className="u-button-style u-nav-link" to="/" styles="padding: 10px 20px;">Goto</a><div className="u-nav-popup">
                        <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-4">
                          <li className="u-nav-item"><a className="u-button-style u-nav-link">Manufacturer</a>
                          </li><li className="u-nav-item"><a className="u-button-style u-nav-link" to="/">Distributor</a>
                          </li><li className="u-nav-item"><a className="u-button-style u-nav-link" to="/">Pharmacist</a>
                          </li><li className="u-nav-item"><a className="u-button-style u-nav-link" to="/">Patient</a>
                          </li>
                        </ul>
                      </div>
                    </li><li className="u-nav-item">
                      <a className="u-button-style u-nav-link" to="Contact.html" styles="padding: 10px 20px;">Contact</a>
                    </li></ul>
                </div>
              </div>

              <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
            </div>
          </nav>
        </div>
        </header>
            
        </div>
        </>
    )
}
