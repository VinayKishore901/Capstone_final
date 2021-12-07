import React ,{ useState } from 'react'

export const Admin = () => {

    const [Account, setAccount] = useState({
        account: "",
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setAccount({ ...Account, [name]: value })
    }

    // const handleclick = (e) => {
    //     e.preventDefault();
    //     const newRecord = { ...MedReg, id: new Date().getTime().toString() }
    //     console.log(newRecord.medicineNotes);
    //     { props.sendtochain(newRecord) };
    //     // setRecords([...records,newRecord]);
    // };

    return (

        <>
        
            <div>
                <h1>Welcome to the admin page !!!</h1>



                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Add Account</label>
                    <input type ="text" className="form-control"  value={Account.account}  onChange = {handleInput} name="account"  id="account" aria-describedby="emailHelp"/>
                </div>

                
            </div>



            {/* ========================================================================= */}

<div className="u-body">
    <section className="u-clearfix u-image u-section-4" id="carousel_3509" data-image-width="1600" data-image-height="1067">
      <div className="u-clearfix u-sheet u-sheet-1">
        <h1 className="u-align-center u-custom-font u-text u-text-body-alt-color u-text-1">ADMIN</h1>
        <img src="images/680px-Professiya-sistemnyj-administrator-3.jpg" alt="" className="u-hover-feature u-image u-image-default u-image-1" data-image-width="680" data-image-height="383" />
        <div className="u-align-center u-container-style u-group u-opacity u-opacity-20 u-white u-group-1">
          <div className="u-container-layout u-container-layout-1">
            <blockquote className="u-text u-text-2">Account Registration</blockquote>

            <div className="u-align-left u-expanded-width-xs u-form u-form-1">

            {/* 1st Form */}

              <form action="#" method="POST" className="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form" styles="padding: 10px" source="custom" name="form">
                
                <div className="u-form-group u-form-name u-form-group-1">
                  <label htmlFor="name-51ec" className="u-form-control-hidden u-label"></label>
                  <input type="text" placeholder="Enter your Name" value={Account.account}  onChange = {handleInput} name="account"  id="account" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""/>
                </div>

                <div className="u-align-left u-form-group u-form-submit u-form-group-2">
                  <a href="#" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">MANUFACTURER</a>
                  <input type="submit" value="submit" className="u-form-control-hidden" wfd-invisible="true" />
                </div>

                <div className="u-form-send-message u-form-send-success" wfd-invisible="true"> Thank you! Your message has been sent. </div>
                <div className="u-form-send-error u-form-send-message" wfd-invisible="true"> Unable to send your message. Please fix errors then try again. </div>
                <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true"/>
              </form>
            </div>

            <div className="u-align-left u-expanded-width-xs u-form u-form-2">
              <form action="#" method="POST" className="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form" styles="padding: 10px" source="custom" name="form">
                <div className="u-align-left u-form-group u-form-submit u-form-group-3">
                  <a href="#" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-2">DISTRIBUTOR</a>
                  <input type="submit" value="submit" className="u-form-control-hidden" wfd-invisible="true"/>
                </div>
                <div className="u-form-send-message u-form-send-success" wfd-invisible="true"> Thank you! Your message has been sent. </div>
                <div className="u-form-send-error u-form-send-message" wfd-invisible="true"> Unable to send your message. Please fix errors then try again. </div>
                <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true"/>
              </form>
            </div>

            <div className="u-align-left u-expanded-width-xs u-form u-form-3">
              <form action="#" method="POST" className="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form" styles="padding: 10px" source="custom" name="form">
                <div className="u-align-left u-form-group u-form-submit u-form-group-4">
                  <a href="#" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-3">PHARMACIST</a>
                  <input type="submit" value="submit" className="u-form-control-hidden" wfd-invisible="true"/>
                </div>
                <div className="u-form-send-message u-form-send-success" wfd-invisible="true"> Thank you! Your message has been sent. </div>
                <div className="u-form-send-error u-form-send-message" wfd-invisible="true"> Unable to send your message. Please fix errors then try again. </div>
                <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true"/>
              </form>
            </div>

            <div className="u-align-left u-expanded-width-xs u-form u-form-4">
              <form action="#" method="POST" className="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form" styles="padding: 10px" source="custom" name="form">
                <div className="u-align-left u-form-group u-form-submit u-form-group-5">
                  <a href="#" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-4">PATIENT</a>
                  <input type="submit" value="submit" className="u-form-control-hidden" wfd-invisible="true"/>
                </div>
                <div className="u-form-send-message u-form-send-success" wfd-invisible="true"> Thank you! Your message has been sent. </div>
                <div className="u-form-send-error u-form-send-message" wfd-invisible="true"> Unable to send your message. Please fix errors then try again. </div>
                <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true"/>
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
