import React ,{useState} from 'react'

export const Patient = (props) => {
    
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
        var res = "";
        { res = props.fetch_state(upc);
          
        };
        
       
         
    };





    return (
        <div>
            <h1>This will be our Patient portal</h1>
            <h3>Here the patient can type upc to see various details (for now only state can be seen).</h3>


            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Enter upc you want to enquire</label>
                <input type ="text" className="form-control"   value={UPC.upc} onChange = {handleInput} name="upc"  id="upc"/>
            </div>  
            <button onClick={handleClick} className="btn-sm btn-primary">Submit Request</button>
        </div>
    )
}
