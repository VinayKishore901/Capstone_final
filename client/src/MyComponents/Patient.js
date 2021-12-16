import React ,{useState} from 'react';
import "./Modal.css"; 
 


export const Patient = (props) => {
  var val = 55;


 
    const [result, setRes] = useState({
        res : "",
        linkmanf : "",
        linkdist : "",
        linkpharma : "",
        did : "",
        pid : "",
        mid : "",
        mname :"",
        dname :"",
        pname :"",
        mnotes :"",
    })
     

    const [UPC, setUpc] = useState({
        upc: "",
    }); 

    // const [records,setRecords] = useState([]);

    const [modal, setModal] = useState(false);



    const claim = () => {
        const upc = UPC.upc;
        props.claimed(upc);
        alert("claimed");
    };

    const checkauth = async() => {
      {
      const upc = UPC.upc;
      var res = await  props.checkauth(upc);
      console.log(res);
      if(res == true){
        alert("It is authentic and you can have it");
      }
      else{
        alert("It is not authentic , please complaint to us with upc regarding the same on admin@med.chain");
      }
    };
    
    }  



    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

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
          console.log(response);
          const hist = await response.s;
          const c = await response.cord;
          const info = await response.info;
          console.log(info);
          const mid = info.mid;
          const did = info.did;
          const pid = info.pid;
          const mname = info.mname;
          const dname = info.dname;
          const pname = info.pname;
          const mnotes = info.mnotes;

          console.log(hist);
          //fetching cordinates from blockchain 
        
          console.log(c);
          //manuf link 
          const manuflat = c[0];
          const manuflong = c[1];
          const manuflink = "http://maps.google.com/maps?q="+manuflat+","+manuflong;
          //distlink 
          const distlat = c[2];
          const distlong = c[3];
          const distlink = "http://maps.google.com/maps?q="+distlat+","+distlong;
          //pharmalink
          const pharmalat = c[4];
          const pharmalong = c[5];
          const pharmalink = "http://maps.google.com/maps?q="+pharmalat+","+pharmalong;

          console.log(manuflink);
          console.log(distlink);
          console.log(pharmalink);
          
          const arr = hist.split("."); 
          console.log(arr);
           
          // console.log(arr.join('\r\n'));
          


          setRes({ ...result,res : arr ,linkmanf : manuflink , linkdist : distlink , linkpharma : pharmalink ,mid: mid, did :did, pid:pid ,mname:mname,dname:dname,pname:pname,mnotes:mnotes  });
          
          


        };
        toggleModal();
        // alert("checking");
         

       
         
    };

    function ReptileListItems() {
      const reptiles = result.res;
    
      return reptiles.map((reptile) => <li>{reptile}</li>);
    }





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
                <div class="u-align-left u-form-group u-form-submit u-form-group-2">
                <button onClick={claim} className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">Claim medicine</button>
                  {/* <a href="#" class="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">Submit request</a> */}
                  <input type="submit" value="submit" class="u-form-control-hidden" wfd-invisible="true"/>
                </div>
                <div class="u-align-left u-form-group u-form-submit u-form-group-2">
                <button onClick={checkauth} className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">Check Authenticity</button>
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
    {/* <button onClick={toggleModal} className="btn-modal">
        Open
      </button> */}

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <h2>Medicine Details</h2>
            <p>Metamask address of manufacturer - {result.mid} <br/>Manufacturer name- {result.mname} <br/>
            Metamask address of distributor - {result.did}<br/> Distrinutor name- {result.dname}<br/>
            Metamask address of pharmacist  - {result.pid} <br/>Pharmacist name- {result.pname}<br/>
            Medicine Notes -{result.mnotes}</p>
            
            
            <h2>History of your Medicine</h2>
             {ReptileListItems()}
             <a href={result.linkmanf}>Manufacturer Location</a> <br/> 
             <a href={result.linkdist}>Distributor Location</a> <br/>
             <a href={result.linkpharma}>Pharmacist Location</a>
            
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}

    
 
 
  

        </div>


        </>
    )
}
