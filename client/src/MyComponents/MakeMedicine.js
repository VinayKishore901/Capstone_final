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
        myCurrentTime : new Date().toLocaleString(),
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
        var history = "This medicine was made by manufaturer"+ "->" + newRecord.manufacturername + "on" + MedReg.myCurrentTime +".";
        alert(history);
        console.log(history);
        { props.sendtochain(newRecord,history) };
        // setRecords([...records,newRecord]);
    };


    return (

        <>

        {/* <div>
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
                </div> 

                <div className="mb-3">
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






                <button onClick={handleclick} type ="submit" className="btn btn-sm btn-success">Load on blockchain</button>
            </form>

            
        </div> */}


        {/* ============================================================== */}

    <div className="u-body">

        <section className="u-clearfix u-image u-section-6" id="carousel_7801" data-image-width="1600" data-image-height="1067">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h1 className="u-custom-font u-text u-text-body-alt-color u-text-1">MANUFACTURER</h1>
                <img src="/images/medicine_manufacturer.jpg" alt="" className="u-image u-image-default u-image-1" data-image-width="612" data-image-height="408"/>
                <div className="u-align-center u-container-style u-group u-opacity u-opacity-20 u-white u-group-1">
                <div className="u-container-layout u-container-layout-1">
                    <blockquote className="u-text u-text-2">Registration of new medicine</blockquote>
                    <div className="u-align-left u-expanded-width-xs u-form u-form-1">


                        
                    <form action="#" method="POST" className="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form" styles="padding: 10px" source="custom" name="form">



                        <div className="u-form-group u-form-name u-form-group-1">
                            <label htmlFor="name-5a14" className="u-form-control-hidden u-label" wfd-invisible="true"></label>
                            <input type="text" placeholder="UPC" value={MedReg.UPC} onChange={handleInput} name="UPC" id="UPC" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""/>
                        </div>

                        <div className="u-form-email u-form-group u-form-group-2">
                            <label htmlFor="email-5a14" className="u-form-control-hidden u-label" wfd-invisible="true"></label>
                            <input type="text" placeholder="Owner ID" value={MedReg.OwnerID} onChange={handleInput} name="OwnerID" id="OwnerID" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""/>
                        </div>

                        <div className="u-form-address u-form-group u-form-group-3">
                        <label htmlFor="address-ac84" className="u-form-control-hidden u-label"></label>
                        <input type="text" placeholder="Origin Manufacturer Name" value={MedReg.manufacturername} onChange={handleInput} name="manufacturername" id="manufacturername" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""/>
                        </div>

                        <div className="u-form-group u-form-group-4">
                        <label htmlFor="text-c098" className="u-form-control-hidden u-label"></label>
                        <input type="text" placeholder="Origin Factory Information" value={MedReg.originFactoryInformation} onChange={handleInput} name="originFactoryInformation" id="originFactoryInformation" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white"/>
                        </div>

                        <div className="u-form-group u-form-group-5">
                        <label htmlFor="text-5f9d" className="u-form-control-hidden u-label"></label>
                        <input type="text" placeholder="Origin Factory Latitude" value={MedReg.originFactoryLatitude} onChange={handleInput} name="originFactoryLatitude" id="originFactoryLatitude" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white"/>
                        </div>

                        <div className="u-form-email u-form-group u-form-group-6">
                        <label htmlFor="email-8c4f" className="u-form-control-hidden u-label"></label>
                        <input type="text" placeholder="Origin Factory Longitude" value={MedReg.originFactoryLongitude}  onChange = {handleInput} name="originFactoryLongitude"  id="originFactoryLongitude" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""/>
                        </div>

                        <div className="u-form-group u-form-name u-form-group-7">
                        <label htmlFor="name-fad7" className="u-form-control-hidden u-label"></label>
                        <input type="text" placeholder="Medicine Name" value={MedReg.Name}  onChange = {handleInput} name="Name"  id="Name" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""/>
                        </div>

                        <div className="u-form-group u-form-group-8">
                        <label htmlFor="text-1c79" className="u-form-control-hidden u-label"></label>
                        <input type="text" placeholder="Medicine Notes" value={MedReg.medicineNotes}  onChange = {handleInput} name="medicineNotes"  id="medicineNotes" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white"/>
                        </div>

                        <div className="u-align-center u-form-group u-form-submit u-form-group-9">
                            <button onClick={handleclick} type ="submit" className="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">Load on blockchain</button>
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
};
