import React, { useState } from 'react'

export const Admin = (props) => {

  const [Account, setAccount] = useState({
    acc: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setAccount({ ...Account, [name]: value })
  }

  const handleClick = (e) => {
      e.preventDefault();
      const newRecord = { ...Account, id: new Date().getTime().toString() }
      console.log(newRecord.medicineNotes);
      const id = e.target.dataset.mssg;
      { props.Add_Admin(id,Account.acc) };

  };

  return (

    <>

      {/* <div>
                <h1>Welcome to the admin page !!!</h1>



                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Add Account</label>
                    <input type ="text" className="form-control"  value={Account.account}  onChange = {handleInput} name="account"  id="account" aria-describedby="emailHelp"/>
                </div>

                
            </div> */}



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


                  <div className="u-form-group u-form-name u-form-group-1">
                    <label htmlFor="name-51ec" className="u-form-control-hidden u-label"></label>
                    <input type="text" placeholder="Enter Account Number you want to add" value={Account.acc} onChange={handleInput} name="acc" id="acc" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required="" />
                  </div>

                  <button onClick={handleClick} data-mssg="1" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">Manufacturer</button>
                  <br />
                  <button onClick={handleClick}  data-mssg="2" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">Distributor</button>
                  <br />
                  <button  onClick={handleClick} data-mssg="3" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">Pharmacist</button>
                  <br />
                  <button  onClick={handleClick} data-mssg="4" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">Patient</button>

                </div>




              </div>
            </div>
          </div>
        </section>
      </div>


    </>
  )
}
