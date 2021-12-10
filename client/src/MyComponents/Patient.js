import React ,{useState} from 'react';
 

export const Patient = (props) => {
    
    const [result, setRes] = useState({
        res : "",
    })
     

    const [UPC, setUpc] = useState({
        upc: "",
    }); 

    // const [records,setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUpc({ ...UPC, [name]: value })
    }

    const handleClick = async(e) => {
         console.log("nothing happens for right now");
        const upc = UPC.upc;
         
        { var response =await  props.fetch_state(upc);
          setRes({ ...result, res :response  });
          console.log(response);
          
        };
        alert("checking");
         

       
         
    };





    return (
        <>
        {/* <div>
            <h1>This will be our Patient portal</h1>
            <h3>Here the patient can type upc to see various details (for now only state can be seen).</h3>


            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Enter upc you want to enquire</label>
                <input type ="text" className="form-control"   value={UPC.upc} onChange = {handleInput} name="upc"  id="upc"/>
            </div>  
            <button onClick={handleClick} className="btn-sm btn-primary">Submit Request</button>



            <p>The current state of the medicine is : {result.res}</p>
        </div> */}


        <div className="u-body">

    <section class="u-clearfix u-image u-section-10" id="carousel_604b" data-image-width="1600" data-image-height="1067">
      <div class="u-clearfix u-sheet u-sheet-1">
        <h1 class="u-align-center u-custom-font u-text u-text-body-alt-color u-text-1">PATIENT</h1>
        <img src="/images/63692673.jpg" alt="" class="u-image u-image-default u-image-1" data-image-width="450" data-image-height="360"/>
        <div class="u-align-center u-container-style u-group u-opacity u-opacity-20 u-white u-group-1">
          <div class="u-container-layout u-container-layout-1">
            <blockquote class="u-text u-text-2">Type UPC and Check various details</blockquote>
            <div class="u-align-left u-expanded-width-xs u-form u-form-1">

              {/* <form class="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form" styles="padding: 10px" source="custom" name="form"> */}
                <div class="u-form-group u-form-name u-form-group-1">
                  <label htmlFor="name-ffe5" class="u-form-control-hidden u-label"></label>
                  <input type="text" placeholder="Enter UPC you want to Enquire" value={UPC.upc} onChange = {handleInput} name="upc"  id="upc" class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""/>
                </div>

                <div class="u-align-left u-form-group u-form-submit u-form-group-2">
                <button onClick={handleClick} className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">Submit Request</button>
                  {/* <a href="#" class="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">Submit request</a> */}
                  <input type="submit" value="submit" class="u-form-control-hidden" wfd-invisible="true"/>
                </div>

                {/* <div class="u-form-send-message u-form-send-success" wfd-invisible="true"> Thank you! Your message has been sent. </div>
                <div class="u-form-send-error u-form-send-message" wfd-invisible="true"> Unable to send your message. Please fix errors then try again. </div>
                <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true"/> */}
              {/* </form> */}

            </div>
          </div>
        </div>
      </div>
    </section>


        </div>


        </>
    )
}
