import React , {useState}from 'react'

export const UpdateMedic = (props) => {

    const [UPC, setUpc] = useState({
        upc: "",
        manuname : "",
        name: "",
        myCurrentTime : new Date().toLocaleString(),
    }); 

    // const [records,setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUpc({ ...UPC, [name]: value })
    }

    const handleClick =  async(e) => {
        // console.log(e.target.dataset);
        const btnid = e.target.dataset.mssg;
        console.log(btnid);
        e.preventDefault();
        const temp = { ...UPC, id: new Date().getTime().toString() }
        const name = UPC.name;
        const manuname = UPC.manuname;
        const date = UPC.myCurrentTime;
        console.log(temp.upc);
        { 

          if(btnid == 5){
            const res = await props.UpdateMed(temp.upc,manuname , name,btnid,date); 
            alert("There are " + res + " medicines of this type present in your stock"); 
          }
          else{
          props.UpdateMed(temp.upc,manuname , name,btnid,date);
          }
        };
        // setRecords([...records,newRecord]);
    };



    return (
        <>
        {/* <div>
            <h1>This page is for updating already made med</h1>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">UPC to update </label>
                <input type ="text" className="form-control"   value={UPC.upc} onChange = {handleInput} name="upc"  id="upc"/>
            </div>
            <button onClick={handleClick} data-mssg="1" className="btn-sm btn-success"> Packed </button>
            <button onClick={handleClick} data-mssg="2" className="btn-sm btn-success"> ForSale </button>
            <button onClick={handleClick} data-mssg="3" className="btn-sm btn-success"> Sold </button> 
            <button onClick={handleClick} data-mssg="4" className="btn-sm btn-success"> Shipped </button>           
            

        </div> */}


<div className="u-body">

    <section className="u-clearfix u-image u-section-7" id="carousel_738a" data-image-width="1600" data-image-height="1067">
      <div className="u-clearfix u-sheet u-sheet-1">
        <h1 className="u-custom-font u-text u-text-body-alt-color u-text-1">MANUFACTURER</h1>
        <img src="/images/medicine_manufacturer_2.jpg" alt="" className="u-image u-image-default u-image-1" data-image-width="750" data-image-height="500"/>
        <div className="u-align-center u-container-style u-group u-opacity u-opacity-20 u-white u-group-1">
          <div className="u-container-layout u-container-layout-1">
            <blockquote className="u-text u-text-2">Updating already made medicine</blockquote>


            <div className="u-align-left u-expanded-width-xs u-form u-form-1">
              <form action="#" method="POST" className="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form" styles="padding: 10px" source="custom" name="form">
                
                <div className="u-form-group u-form-name u-form-group-1">
                  <label htmlFor="name-5a14" className="u-form-control-hidden u-label" wfd-invisible="true">Name</label>
                  <input type="text" placeholder="UPC to Update"onChange={handleInput}  id="upc" name="upc" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""/>
                </div>

                <div className="u-form-group u-form-name u-form-group-1">
                  <label htmlFor="name-5a14" className="u-form-control-hidden u-label" wfd-invisible="true">Name</label>
                  <input type="text" placeholder="Manufacturer Name(To check stock) "onChange={handleInput}  id="manuname" name="manuname" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""/>
                </div>

                <div className="u-form-group u-form-name u-form-group-1">
                  <label htmlFor="name-5a14" className="u-form-control-hidden u-label" wfd-invisible="true">Name</label>
                  <input type="text" placeholder="Medicine name(To check stock) "onChange={handleInput}  id="name" name="name" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""/>
                </div>

                <div className="u-align-left u-form-group u-form-submit u-form-group-2">

                <button onClick={handleClick} data-mssg="1" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1"> Packed </button>
                <br/>
                <button onClick={handleClick} data-mssg="2" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1"> For Sale </button>
                <br/>
                <button onClick={handleClick} data-mssg="3" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1"> Sold </button> 
                <br/>
                <button onClick={handleClick} data-mssg="4" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1"> Shipped </button>
                 
               

                <br/>
                <button onClick={handleClick} data-mssg="5" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1"> CkeckStock </button>

                  {/* <a href="#" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">packed</a>
                  <a href="#" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">for sale</a>
                  <a href="#" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">sold</a>
                  <a href="#" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">shipped</a> */}
                </div>

                
                <div className="u-form-send-message u-form-send-success" wfd-invisible="true"> Thank you! Your message has been sent. </div>
                <div className="u-form-send-error u-form-send-message" wfd-invisible="true"> Unable to send your message. Please fix errors then try again. </div>
                <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true"/>




              </form>
            </div>

            {/* <div className="u-align-left u-expanded-width-xs u-form u-form-2">
              <form action="#" method="POST" className="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form" styles="padding: 10px" source="custom" name="form">
                <div className="u-align-left u-form-group u-form-submit u-form-group-3">
                  <a href="#" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-2">for sale</a>
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
                  <a href="#" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-3">sold</a>
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
                  <a href="#" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-4">shipped</a>
                  <input type="submit" value="submit" className="u-form-control-hidden" wfd-invisible="true"/>
                </div>
                <div className="u-form-send-message u-form-send-success" wfd-invisible="true"> Thank you! Your message has been sent. </div>
                <div className="u-form-send-error u-form-send-message" wfd-invisible="true"> Unable to send your message. Please fix errors then try again. </div>
                <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true"/>
              </form>
            </div>
             */}
          </div>
        </div>
      </div>
    </section>


</div>



        </>
    )
}
