import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <>
      {/* <div> */}

        {/* <h1>Main Website Page </h1>
        <h3>This is going to be the main webpgae of our website from where we will be redirecting to the other pages for example till now we will be redirecting to the Admin and manufacturer page.</h3> */}

        {/* 1.This will be the card for our admin from here we will be redirectig to our admin page and registering differnt users to their role */}
        {/* <div > */}
          {/* <div className="card" styles={{ "width": "18rem" }} >
            <div className="card-body">
              <h5 className="card-title">Admin</h5>
              <h6 className="card-subtitle mb-2 text-muted">This is for the admin who is responsible for mainting this DApp.</h6>
              <p className="card-text">Please click below to be redirected to the Admin Page.</p>
              <Link to="/Admin">
                <button className="btn-sm btn-success">Admin</button>
              </Link>
            </div>
          </div> */}


          {/* 2.This will be the card for our manufacturer from here we will be redirectig to our manufacturer page and registering differnt medicines and updainf 4 events */}
          {/* <br />
          <br /> */}

          {/* <div className="card" styles={{ "width": "18rem" }} >
            <div className="card-body">
              <h5 className="card-title">Manufacturer</h5>
              <h6 className="card-subtitle mb-2 text-muted">This for the various manufacturers those are attached to our Dapp.</h6>
              <p className="card-text">Please click below to be redirected to the Manufacturer Page</p>

              <Link to="/manufacturer">
                <button className="btn-sm btn-success">Manufacturer</button>
              </Link>
            </div>
          </div>
          <br />
          <br />
          <div className="card" styles={{ "width": "18rem" }} >
            <div className="card-body">
              <h5 className="card-title">Distributor </h5>
              <h6 className="card-subtitle mb-2 text-muted">This for the Distributor to set info about  medicines on blockchain .</h6>
              <p className="card-text">Please click below to be redirected to the Distributors Page</p>

              <Link to="/distributor">
                <button className="btn-sm btn-success">hello, Distributor</button>
              </Link>
            </div>
          </div>

          <br />
          <br />

          <div className="card" styles={{ "width": "18rem" }} >
            <div className="card-body">
              <h5 className="card-title">Pharamcist </h5>
              <h6 className="card-subtitle mb-2 text-muted">This for the Pharmacist to update about various medicines on blockchain .</h6>
              <p className="card-text">Please click below to be redirected to the Pharmacist Page</p>

              <Link to="/pharmacist">
                <button className="btn-sm btn-success">Pharmacist</button>
              </Link>
            </div>
          </div>

          <br />
          <br />

          <div className="card" styles={{ "width": "18rem" }} >
            <div className="card-body">
              <h5 className="card-title">Patient </h5>
              <h6 className="card-subtitle mb-2 text-muted">This for the patients to see Information about various medicines on blockchain .</h6>
              <p className="card-text">Please click below to be redirected to the Patient Page</p>

              <Link to="/patient">
                <button className="btn-sm btn-success">Patient</button>
              </Link>
            </div>
          </div>

        </div> */}

      {/* </div> */}

      {/* ===================================================================================================== */}



      <div class="u-body">
        {/* <header className="u-black u-clearfix u-header u-header" id="sec-9fb2"><div className="u-clearfix u-sheet u-sheet-1">
          <Link to="/" className="u-image u-logo u-image-1" data-image-width="212" data-image-height="159">
            <img src="images/logo.PNG" className="u-logo-image u-logo-image-1" />
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
                        <Link to="distributor" className="u-button-style u-nav-link u-white" >Distributor</Link>
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
                  <Link to="/" className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" styles="padding: 10px 20px;">Contact</Link>
                </li>
              </ul>
            </div>

            

        //     <div className="u-custom-menu u-nav-container-collapse">
        //       <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
        //         <div className="u-inner-container-layout u-sidenav-overflow">
        //           <div className="u-menu-close"></div>
        //           <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-3">
        //             <li className="u-nav-item">
        //               <a className="u-button-style u-nav-link" to="/" styles="padding: 10px 20px;">Home</a>
        //             </li>
        //             <li className="u-nav-item">
        //               <a className="u-button-style u-nav-link" to="/" styles="padding: 10px 20px;">Goto</a><div className="u-nav-popup">
        //                 <ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-4">
        //                   <li className="u-nav-item"><a className="u-button-style u-nav-link">Manufacturer</a>
        //                   </li><li className="u-nav-item"><a className="u-button-style u-nav-link" to="/">Distributor</a>
        //                   </li><li className="u-nav-item"><a className="u-button-style u-nav-link" to="/">Pharmacist</a>
        //                   </li><li className="u-nav-item"><a className="u-button-style u-nav-link" to="/">Patient</a>
        //                   </li>
        //                 </ul>
        //               </div>
        //             </li><li className="u-nav-item">
        //               <a className="u-button-style u-nav-link" to="Contact.html" styles="padding: 10px 20px;">Contact</a>
        //             </li></ul>
        //         </div>
        //       </div>

        //       <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
        //     </div>
        //   </nav>
        // </div>
        // </header> */}

        <section className="u-align-center u-clearfix u-image u-section-1" id="carousel_dac8" data-image-width="1600" data-image-height="1067">
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1">
              <div className="u-layout" styles="">
                <div className="u-layout-row" styles="">
                  <div className="u-container-style u-hover-feature u-layout-cell u-left-cell u-opacity u-opacity-40 u-shape-rectangle u-size-40 u-size-xs-60 u-layout-cell-1" src="" data-animation-name="" data-animation-duration="0" data-animation-direction="">
                    <div className="u-container-layout u-container-layout-1" src="">
                      <h2 className="u-custom-font u-text u-text-body-alt-color u-text-1" data-animation-name="zoomIn" data-animation-duration="1000" data-animation-direction="Down">Med. Chain</h2>
                      <h2 className="u-custom-font u-text u-text-body-alt-color u-text-2" data-animation-name="zoomIn" data-animation-duration="1000" data-animation-direction="Down">supplychain solutions</h2>
                      <p className="u-text u-text-body-alt-color u-text-3">Blockchain based medicine supply chain solution.</p>
                      <Link to="/about" className="u-btn u-button-style u-palette-4-base u-btn-1">learn more</Link>
                    </div>
                  </div>
                  <div className="u-align-left u-container-style u-effect-hover-zoom u-hover-feature u-layout-cell u-opacity u-opacity-35 u-right-cell u-size-20 u-size-xs-60 u-layout-cell-2" data-image-width="1119" data-image-height="1080" data-animation-name="zoomIn" data-animation-duration="500" data-animation-direction="Down">
                    <div className="u-background-effect u-expanded">
                      <div className="u-background-effect-image u-expanded u-image u-image-1" data-image-width="1119" data-image-height="1080"></div>
                    </div>
                    <div className="u-container-layout u-container-layout-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="u-align-center u-clearfix u-image u-section-2" id="carousel_1e0d" data-image-width="1600" data-image-height="1067">
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-gutter-18 u-layout-wrap u-layout-wrap-1">
              <div className="u-gutter-0 u-layout">
                <div className="u-layout-row">


                  <div className="u-container-style u-layout-cell u-size-12 u-layout-cell-1">
                    <div className="u-container-layout u-container-layout-1">
                      <div className="u-clearfix u-expanded-width u-gutter-16 u-layout-wrap u-layout-wrap-2">
                        <div className="u-gutter-0 u-layout">
                          <div className="u-layout-row">

                            <div className="u-black u-container-style u-layout-cell u-opacity u-opacity-40 u-radius-10 u-size-60 u-layout-cell-2" data-animation-name="slideIn" data-animation-duration="1000" data-animation-direction="Left" data-animation-delay="0">
                              <div className="u-border-2 u-border-grey-10 u-container-layout u-valign-top u-container-layout-2">
                                <h3 className="u-align-center u-text u-text-default u-text-1">ADMIN</h3>
                                <p className="u-text u-text-2"> This is for the admin who is responsible for mainting this DApp.</p><span className="u-file-icon u-icon u-icon-circle u-icon-1">
                                  <img src="images/business-men-office-cartoon-characters-people-sit-work-morning-illustration-vector-business-men-office-cartoon-characters-174502752.jpg" alt="" /></span>
                                <p className="u-text u-text-palette-1-light-2 u-text-3"> Please click below to be redirected to the Admin Page </p>
                                <Link to="/Signin"><button className="u-border-none u-btn u-btn-round u-button-style u-palette-1-dark-1 u-radius-50 u-btn-1" target="_blank">CLICK HERE</button>
                                </Link>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="u-align-center u-black u-container-style u-layout-cell u-opacity u-opacity-40 u-radius-10 u-size-12-lg u-size-12-xl u-size-14-sm u-size-14-xs u-size-30-md u-layout-cell-3" data-animation-name="slideIn" data-animation-duration="1000" data-animation-direction="Left" data-animation-delay="250">
                    <div className="u-border-2 u-border-grey-10 u-container-layout u-container-layout-3">
                      <h3 className="u-text u-text-4">MANUFACTURE​R</h3>
                      <p className="u-text u-text-5"> This for the various manufacturers those are attached to our Dapp.</p><span className="u-file-icon u-icon u-icon-circle u-icon-2">
                        <img src="images/manufacturer-flat-vector-illustration-man-monitoring-factory-production-line-counting-revenue-manufacturing-process-concept-178869482.jpg" alt="" /></span>
                      <p className="u-text u-text-palette-1-light-2 u-text-6"> Please click below to be redirected to the Manufacturer Page </p>
                      <Link to="/manufacturer"><button className="u-border-none u-btn u-btn-round u-button-style u-palette-1-dark-1 u-radius-50 u-btn-1" target="_blank">CLICK HERE</button>
                      </Link>                </div>
                  </div>


                  <div className="u-black u-container-style u-layout-cell u-opacity u-opacity-40 u-radius-10 u-size-12-lg u-size-12-xl u-size-14-sm u-size-14-xs u-size-30-md u-layout-cell-4" data-animation-name="slideIn" data-animation-duration="1000" data-animation-direction="Left" data-animation-delay="500">
                    <div className="u-border-2 u-border-grey-10 u-container-layout u-valign-top u-container-layout-4">
                      <h3 className="u-align-center u-text u-text-default u-text-7">DISTRIBUTOR</h3>
                      <p className="u-text u-text-8"> This for the Distributor to set info about  medicines on blockchain .</p><span className="u-file-icon u-hover-feature u-icon u-icon-circle u-spacing-10 u-text-palette-2-base u-icon-3">
                        <img src="images/dis.jpg" alt="" /></span>
                      <p className="u-text u-text-palette-1-light-2 u-text-9"> Please click below to be redirected to the Distributer Page </p>
                      <Link to="/distributor"><button className="u-border-none u-btn u-btn-round u-button-style u-palette-1-dark-1 u-radius-50 u-btn-1" target="_blank">CLICK HERE</button>
                      </Link>                </div>
                  </div>


                  <div className="u-black u-container-style u-layout-cell u-opacity u-opacity-40 u-radius-10 u-size-12-lg u-size-12-xl u-size-14-sm u-size-14-xs u-size-30-md u-layout-cell-5" data-animation-name="slideIn" data-animation-duration="1000" data-animation-direction="Left" data-animation-delay="750">
                    <div className="u-border-2 u-border-white u-container-layout u-valign-top u-container-layout-5">
                      <h3 className="u-align-center u-text u-text-default u-text-10">PHARMACIST</h3>
                      <p className="u-text u-text-11"> This for the Pharmacist to update about various medicines on blockchain .</p><span className="u-file-icon u-icon u-icon-circle u-icon-4">
                        <img src="images/141663155-vector-illustration-pharmacist-at-counter-in-pharmacy-pharmacy-with-pharmacist-in-counter-and-people.webp" alt="" /></span>
                      <p className="u-text u-text-palette-1-light-2 u-text-12"> Please click below to be redirected to the Pharmicist Page </p>
                      {/* <a to="https://nicepage.com/website-mockup" className="u-border-none u-btn u-btn-round u-button-style u-palette-4-dark-1 u-radius-50 u-btn-5" target="_blank">Purchase</a> */}
                      <Link to="/pharmacist"><button className="u-border-none u-btn u-btn-round u-button-style u-palette-1-dark-1 u-radius-50 u-btn-1" target="_blank">CLICK HERE</button>
                      </Link>                </div>
                  </div>


                  <div className="u-black u-container-style u-layout-cell u-opacity u-opacity-40 u-radius-10 u-shape-round u-size-12-lg u-size-12-xl u-size-14-sm u-size-14-xs u-size-30-md u-layout-cell-6" data-animation-name="slideIn" data-animation-duration="1000" data-animation-delay="1000" data-animation-direction="Left">
                    <div className="u-border-2 u-border-grey-10 u-container-layout u-container-layout-6">
                      <h3 className="u-text u-text-default u-text-13">PATIENT</h3>
                      <p className="u-text u-text-14"> This for the patients to see Information about various medicines on blockchain .</p><span className="u-file-icon u-icon u-icon-circle u-icon-5">
                        <img src="images/640891901.jpg" alt="" /></span>
                      <p className="u-text u-text-palette-1-light-2 u-text-15"> Please click below to be redirected to the Patien​t Page </p>
                      <Link to="/patient">
                        <button className="u-border-none u-btn u-btn-round u-button-style u-palette-1-dark-1 u-radius-50 u-btn-1" target="_blank">CLICK HERE</button>
                      </Link>                
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>


        {/* <footer className="u-clearfix u-footer u-grey-80" id="sec-ac42"><div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-row">
                <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-20 u-size-20-md u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <div data-position="" className="u-position">
                      <div className="u-block">
                        <div className="u-block-container u-clearfix">
                          <h5 className="u-block-header u-text">Block header </h5>
                          <div className="u-block-content u-text"> Block content. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-align-left u-container-style u-layout-cell u-size-20 u-size-20-md u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-2">
                    <div data-position="" className="u-position">
                      <div className="u-block">
                        <div className="u-block-container u-clearfix">
                          <h5 className="u-block-header u-text"> Block header </h5>
                          <div className="u-block-content u-text">Block content. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-layout-cell-3">
                  <div className="u-container-layout u-valign-top u-container-layout-3">
                    <div data-position="" className="u-position u-position-3">
                      <div className="u-block">
                        <div className="u-block-container u-clearfix">
                          <h5 className="u-block-header u-text">Block header </h5>
                          <div className="u-block-content u-text">Block content. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-border-1 u-border-white u-expanded-width u-line u-line-horizontal u-opacity u-opacity-50 u-line-1"></div>
          <Link to="/" className="u-image u-logo u-image-1" data-image-width="212" data-image-height="159">
            <img src="images/logo.PNG" className="u-logo-image u-logo-image-1" />
          </Link>
          <div className="u-social-icons u-spacing-10 u-social-icons-1">
            <a className="u-social-url" title="facebook" target="_blank" to="Home.html">
              <span className="u-icon u-social-facebook u-social-icon u-icon-1">
                <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" styles="">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-287e"></use>
                </svg>
                <svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-287e">
                  <circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle>
                  <path fill="#FFFFFF" d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"></path>
                </svg>
              </span>
            </a>
            <a className="u-social-url" title="twitter" target="_blank" to="Home.html"><span className="u-icon u-social-icon u-social-twitter u-icon-2"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" styles=""><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-0d29"></use></svg><svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-0d29"><circle fill="currentColor" className="st0" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
            c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
            c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
            c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
            c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"></path></svg></span>
            </a>
            <a className="u-social-url" title="instagram" target="_blank" to="Home.html"><span className="u-icon u-social-icon u-social-instagram u-icon-3"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" styles=""><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-b37b"></use></svg><svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-b37b"><circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
            z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"></path><path fill="#FFFFFF" d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"></path><path fill="#FFFFFF" d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
            C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
            c5.5,0,9.9,4.5,9.9,9.9V73.3z"></path></svg></span>
            </a>
            <a className="u-social-url" title="linkedin" target="_blank" to="Home.html"><span className="u-icon u-social-icon u-social-linkedin u-icon-4"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" styles=""><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-ceca"></use></svg><svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-ceca"><circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M41.3,83.7H27.9V43.4h13.4V83.7z M34.6,37.9L34.6,37.9c-4.6,0-7.5-3.1-7.5-7c0-4,3-7,7.6-7s7.4,3,7.5,7
            C42.2,34.8,39.2,37.9,34.6,37.9z M89.6,83.7H76.2V62.2c0-5.4-1.9-9.1-6.8-9.1c-3.7,0-5.9,2.5-6.9,4.9c-0.4,0.9-0.4,2.1-0.4,3.3v22.5
            H48.7c0,0,0.2-36.5,0-40.3h13.4v5.7c1.8-2.7,5-6.7,12.1-6.7c8.8,0,15.4,5.8,15.4,18.1V83.7z"></path></svg></span>
            </a>
          </div>
        </div>
        </footer> */}

      </div>
    </>
  )
}
