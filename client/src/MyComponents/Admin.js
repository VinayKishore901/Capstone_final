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
        
        <div>
            <h1>Welcome to the admin page !!!</h1>



            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Add Account</label>
                <input type ="text" className="form-control"  value={Account.account}  onChange = {handleInput} name="account"  id="account" aria-describedby="emailHelp"/>
            </div>

            
        </div>
    )
}
