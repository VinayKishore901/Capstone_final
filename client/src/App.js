import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import "./App.css";
import {Admin} from "./MyComponents/Admin"
import { Form } from "./MyComponents/Form";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MainPage } from "./MyComponents/MainPage";
import { MakeMedicine } from "./MyComponents/MakeMedicine";
import { UpdateMedic } from "./MyComponents/UpdateMedic";
import { Patient } from "./MyComponents/Patient";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });
       
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };


  UpdateMed = async(upc) =>{
    const { accounts, contract } = this.state;
    alert("working");
    console.log("this is for checking purpose");
    console.log(accounts[0]);

    // if(funcid == 1){
      await contract.methods.packMedicine(upc).send({from : accounts[0]});
    
  }

  

  fetch_state = async(upc) =>{
    const { accounts, contract } = this.state;
    alert("working");
    const response = await contract.methods.fetchstate(upc).call();

    // console.log( response);     
    // console.log(response);
    var t = response;
    console.log(t);
    return t;
    
  }



  sendtochain = async (t) => {
    const { accounts, contract } = this.state;
    alert("working");
    console.log("this is for checking purpose");
    console.log(accounts[0]);
    const name = t.Name;
    const price = t.Price;
    const upc = t.UPC;
    const ownerid = t.OwnerID;
    const manufacturername = t.manufacturername;
    const Latitude = t.originFactoryLatitude;
    const Longitude = t.originFactoryLongitude;
    const factoryinfo = t.originFactoryInformation;
    const notes = t.medicineNotes;


    console.log(name);
    console.log(upc);
    console.log(price);
    console.log(ownerid);
    console.log(manufacturername);
    console.log(Latitude);
    console.log(Longitude);
    console.log(factoryinfo);
    console.log(notes);


    await contract.methods.makeMedicine(upc, accounts[0], manufacturername, factoryinfo, Latitude, Longitude, notes).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    //const response = await contract.methods.get().call();

    // Update state with the result.
    // this.setState({ storageValue: response });
    //await contract.methods.set(1).send({from : account  s[0]});

    //  const response = await contract.methods.fetchMedicine(upc).call();

    //  this.setState({storageValue: response});
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    alert("called");
    // Stores a given value, 5 by default.

  };

  render() {

     

    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">

       
        
          <Routes>
          <Route path="/" element={<MainPage/>}> </Route>
          <Route  path="/admin" element={<Admin/>}></Route>
          <Route path="/manufacturer" element={<Form />}></Route>
          <Route path="/manufacturer/makemedicine" element={<MakeMedicine sendtochain={this.sendtochain}/>}> </Route> 
          <Route path="/manufacturer/UpdateMedic" element={<UpdateMedic UpdateMed={this.UpdateMed}/>}> </Route> 
          <Route path="/patient" element={<Patient fetch_state={this.fetch_state}/>}></Route>
          </Routes>
          
         
        
     
        {/* <Form sendtochain={this.sendtochain}/> */}
        {/* <h3>Congratulations manufacturer following block has been created and fetched from ganache blockchain</h3> */}

       



       
      
        

  
      
    

      </div>

    );
  }
}

export default App;
