import React , {useState}from 'react'

export const UpdateMedic = (props) => {

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
        const date = UPC.myCurrentTime;
        console.log(temp.upc);
        { props.UpdateMed(temp.upc,btnid,date) };
        // setRecords([...records,newRecord]);
    };



    return (
        <div>
            <h1>This page is for updating already made med</h1>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">UPC to update </label>
                <input type ="text" className="form-control"   value={UPC.upc} onChange = {handleInput} name="upc"  id="upc"/>
            </div>
            <button onClick={handleClick} data-mssg="1" className="btn-sm btn-success"> Packed </button>
            <button onClick={handleClick} data-mssg="2" className="btn-sm btn-success"> ForSale </button>
            <button onClick={handleClick} data-mssg="3" className="btn-sm btn-success"> Sold </button> 
            <button onClick={handleClick} data-mssg="4" className="btn-sm btn-success"> Shipped </button>           
            

        </div>
    )
}
