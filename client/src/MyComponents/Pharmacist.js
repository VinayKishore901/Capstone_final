import React,{useState}from 'react'

export const Pharmacist = (props) => {
    const [UPC, setUpc] = useState({
        upc: "",
        myCurrentTime : new Date().toLocaleString(),
    }); 

    // const [records,setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUpc({ ...UPC, [name]: value })
    }

    const handleClick =  (e) => {
        // console.log(e.target.dataset);
        const btnid = e.target.dataset.mssg;
        console.log(btnid);
        e.preventDefault();
        const temp = { ...UPC, id: new Date().getTime().toString() }
        console.log(temp.upc);
        const date = UPC.myCurrentTime;
          { props.UpdateMed_pharma(temp.upc,btnid,date) };
        // setRecords([...records,newRecord]);
    };
    return (
        <>
        {/* <div>
             <h1>This will be our Pharmacist portal</h1>
            <h3>Here the pharmacist can type upc and update various details.</h3>


            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">UPC to update </label>
                <input type ="text" className="form-control"  value={UPC.upc} onChange = {handleInput}   name="upc"  id="upc"/>
            </div>

            <button onClick={handleClick} data-mssg="1" className="btn-sm btn-success"> Recieved </button>
            <button onClick={handleClick} data-mssg="2" className="btn-sm btn-success"> Sold </button>
            <button onClick={handleClick} data-mssg="3" className="btn-sm btn-success"> Shipped </button> 
           
             
            
        </div> */}

        <div>

    <section className="u-clearfix u-image u-section-9" id="carousel_49c7" data-image-width="1600" data-image-height="1067">
      <div className="u-clearfix u-sheet u-sheet-1">
        <h1 className="u-align-center u-custom-font u-text u-text-body-alt-color u-text-1">PHARMACIST</h1>
        <img src="/images/medicine_pharmacist.jpg" alt="" className="u-image u-image-default u-image-1" data-image-width="700" data-image-height="400" />
        <div className="u-align-center u-container-styles= u-group u-opacity u-opacity-20 u-white u-group-1">
          <div className="u-container-layout u-container-layout-1">
            <blockquote className="u-text u-text-2">Type UPC and Update various details</blockquote>
            <div className="u-align-left u-expanded-width-xs u-form u-form-1">
              <form action="#" method="POST" className="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form" styles="padding: 10px" source="custom" name="form">
                <div className="u-form-group u-form-name u-form-group-1">
                  <label for="name-ac65" className="u-form-control-hidden u-label"></label>
                  <input type="text" placeholder="Enter your Name" id="name-ac65" name="name-1" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""/>
                </div>
                <div className="u-form-group u-form-name u-form-group-2">
                  <label for="name-ffe5" className="u-form-control-hidden u-label"></label>
                  <input type="text" placeholder="UPC to Update" value={UPC.upc} onChange = {handleInput}   name="upc"  id="upc" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""/>
                </div>
                <div className="u-form-group u-form-name u-form-group-3">
                  <label for="name-0050" className="u-form-control-hidden u-label"></label>
                  <input type="text" placeholder="Latitude" id="name-0050" name="name-2" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""/>
                </div>
                <div className="u-form-group u-form-group-4">
                  <label for="text-c14e" className="u-form-control-hidden u-label"></label>
                  <input type="text" placeholder="Longitude" id="text-c14e" name="text" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white"/>
                </div>
                <div className="u-align-left u-form-group u-form-submit u-form-group-5">

                    <button onClick={handleClick} data-mssg="1" className="u-border-2 u-border-black u-btn u-btn-submit u-button-styles= u-hover-black u-none u-text-black u-text-hover-white u-btn-1"> Recieved </button>
                    <button onClick={handleClick} data-mssg="2" className="u-border-2 u-border-black u-btn u-btn-submit u-button-styles= u-hover-black u-none u-text-black u-text-hover-white u-btn-2"> Sold </button>
                    <button onClick={handleClick} data-mssg="3" className="u-border-2 u-border-black u-btn u-btn-submit u-button-styles= u-hover-black u-none u-text-black u-text-hover-white u-btn-3"> Shipped </button>


                  {/* <a href="#" className="u-border-2 u-border-black u-btn u-btn-submit u-button-styles= u-hover-black u-none u-text-black u-text-hover-white u-btn-1">received</a>
                  <input type="submit" value="submit" className="u-form-control-hidden" wfd-invisible="true"/> */}
                </div>
                {/* <div className="u-form-send-message u-form-send-success" wfd-invisible="true"> Thank you! Your message has been sent. </div>
                <div className="u-form-send-error u-form-send-message" wfd-invisible="true"> Unable to send your message. Please fix errors then try again. </div>
                <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true"/> */}
              </form>
            </div>
            {/* <div className="u-align-left u-expanded-width-xs u-form u-form-2">
              <form action="#" method="POST" className="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form" styles="padding: 10px" source="custom" name="form">
                
                
                <div className="u-align-left u-form-group u-form-submit u-form-group-6">

                  <a href="#" className="u-border-2 u-border-black u-btn u-btn-submit u-button-styles= u-hover-black u-none u-text-black u-text-hover-white u-btn-2">sold</a>
                  <input type="submit" value="submit" className="u-form-control-hidden" wfd-invisible="true"/>
                </div>
                <div className="u-form-send-message u-form-send-success" wfd-invisible="true"> Thank you! Your message has been sent. </div>
                <div className="u-form-send-error u-form-send-message" wfd-invisible="true"> Unable to send your message. Please fix errors then try again. </div>
                <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true"/>
              </form>
            </div>


            <div class="u-align-left u-expanded-width-xs u-form u-form-3">
              <form action="#" method="POST" class="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form" styles="padding: 10px" source="custom" name="form">
                <div class="u-align-left u-form-group u-form-submit u-form-group-7">
                  <a href="#" class="u-border-2 u-border-black u-btn u-btn-submit u-button-styles= u-hover-black u-none u-text-black u-text-hover-white u-btn-3">shipped</a>
                  <input type="submit" value="submit" class="u-form-control-hidden" wfd-invisible="true"/>
                </div>
                <div class="u-form-send-message u-form-send-success" wfd-invisible="true"> Thank you! Your message has been sent. </div>
                <div class="u-form-send-error u-form-send-message" wfd-invisible="true"> Unable to send your message. Please fix errors then try again. </div>
                <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true"/>
              </form>
            </div> */}

          </div>
        </div>
      </div>
    </section>

        </div>

        </>


    )
}
