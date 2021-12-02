import React, { useState } from 'react'

export const MakeMedicine = (props) => {


    const [MedReg, setMedReg] = useState({
        Name: "",
        Price: "",
        UPC: "",
        OwnerID: "",
        manufacturername : "",
        OriginManufacturerID: "",
        originFactoryLatitude: "",
        originFactoryLongitude: "",
        originFactoryInformation: "",
        medicineNotes: "",
    });

    // const [records,setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setMedReg({ ...MedReg, [name]: value })
    }

    const handleclick = (e) => {
        e.preventDefault();
        const newRecord = { ...MedReg, id: new Date().getTime().toString() }
        console.log(newRecord.medicineNotes);
        { props.sendtochain(newRecord) };
        // setRecords([...records,newRecord]);
    };


    return (
        <div>
            <h1>Manufacturer Page</h1>
            <h3>For registration of  a medicine</h3>
            <form className="container center">




                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">UPC</label>
                    <input type="text" className="form-control" value={MedReg.UPC} onChange={handleInput} name="UPC" id="UPC" aria-describedby="emailHelp" />
                </div>


                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Owner ID</label>
                    <input type="text" className="form-control" value={MedReg.OwnerID} onChange={handleInput} name="OwnerID" id="OwnerID" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Origin Manufacturer Name</label>
                    <input type="text" className="form-control" value={MedReg.manufacturername} onChange={handleInput} name="manufacturername" id="manufacturername" aria-describedby="emailHelp" />
                </div> <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Origin Factory Information</label>
                    <input type="text" className="form-control" value={MedReg.originFactoryInformation} onChange={handleInput} name="originFactoryInformation" id="originFactoryInformation" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Origin Factory Latitude</label>
                    <input type="text" className="form-control" value={MedReg.originFactoryLatitude} onChange={handleInput} name="originFactoryLatitude" id="originFactoryLatitude" aria-describedby="emailHelp" />
                </div>  


                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Origin Factory Longitude</label>
                <input type ="text" className="form-control"  value={MedReg.originFactoryLongitude}  onChange = {handleInput} name="originFactoryLongitude"  id="originFactoryLongitude" aria-describedby="emailHelp"/>
                </div> <div className="mb-3">

                <label htmlFor="exampleInputEmail1" className="form-label">Medicine Notes</label>
                <input type ="text" className="form-control"  value={MedReg.medicineNotes}  onChange = {handleInput} name="medicineNotes"  id="medicineNotes" aria-describedby="emailHelp"/>
                </div>
                 





                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Medicine Name</label>
                <input type ="text" className="form-control"  value={MedReg.Name}  onChange = {handleInput} name="Name"  id="Name" aria-describedby="emailHelp"/>
                </div>






                <button onClick={handleclick}type ="submit" className="btn btn-sm btn-success">Load on blockchain</button>
            </form>

            
        </div>
    )
};
