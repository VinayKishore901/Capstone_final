import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MakeMedicine } from './MakeMedicine';



export const Form = (props) => {
     
    return (
        <>
            {/* <div>
                <h1>This is Manufacturer page </h1>
                <br></br>
                <Link to="/manufacturer/makemedicine">
                <button  className="btn-sm btn-success"> Make new medicine</button>
                </Link>

                <Link to="/manufacturer/updateMedic">
                <button  className="btn-sm btn-success"> Update exisitng medicine</button>
                </Link>

            </div> */}

            <div className="u-body">

            <section className="u-clearfix u-image u-section-5" id="carousel_fc2b" data-image-width="1600" data-image-height="1067">
      <div className="u-clearfix u-sheet u-sheet-1">
        <h1 className="u-align-center u-custom-font u-text u-text-body-alt-color u-text-1">MANUFACTURER</h1>
        <img src="/images/medicine_manufacturer_3.jpg" alt="" className="u-image u-image-default u-image-1" data-image-width="612" data-image-height="344"/>
        <div className="u-align-center u-container-style u-group u-opacity u-opacity-20 u-white u-group-1">
          <div className="u-container-layout u-container-layout-1">
            <blockquote className="u-text u-text-2">Choose according to Requirement</blockquote>
            <div className="u-align-left u-expanded-width-xs u-form u-form-1">



              <form  className="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form" styles="padding: 10px" source="custom" name="form">
                
                
                <div className="u-align-left u-form-group u-form-submit u-form-group-1">

                <Link to="/manufacturer/makemedicine">
                <button  className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1"> Make new medicine</button>
                </Link>

                  {/* <a href="#" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">create new medicine</a>
                  <input type="submit" value="submit" className="u-form-control-hidden" wfd-invisible="true"/> */}
                </div>

                

                    


                {/* <div className="u-form-send-message u-form-send-success" wfd-invisible="true"> Thank you! Your message has been sent. </div>
                <div className="u-form-send-error u-form-send-message" wfd-invisible="true"> Unable to send your message. Please fix errors then try again. </div>
                <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true"/> */}
              </form>


            </div>
            <div className="u-align-left u-expanded-width-xs u-form u-form-2">


              <form className="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form" styles="padding: 10px" source="custom" name="form">
                <div className="u-align-left u-form-group u-form-submit u-form-group-2">

                <Link to="/manufacturer/updateMedic">
                <button  className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1"> Update exisitng medicine</button>
                </Link>

                  {/* <a href="#" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">update new medicine</a>
                  <input type="submit" value="submit" className="u-form-control-hidden" wfd-invisible="true"/> */}
                </div>
                {/* <div className="u-form-send-message u-form-send-success" wfd-invisible="true"> Thank you! Your message has been sent. </div>
                <div className="u-form-send-error u-form-send-message" wfd-invisible="true"> Unable to send your message. Please fix errors then try again. </div>
                <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true"/> */}
              </form>


            </div>
          </div>
        </div>
      </div>
    </section>

            </div>

        </>
    )
}
