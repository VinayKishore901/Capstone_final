import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import Roles from "./contracts/Roles.json";
import ManufacturerRole from "./contracts/ManufacturerRole.json";
import DistributorRole from "./contracts/DistributorRole.json";
import PharmacistRole from "./contracts/PatientRole.json";
import PatientRole from  "./contracts/PatientRole.json";
import getWeb3 from "./getWeb3";
import "./App.css";
import {Admin} from "./MyComponents/Admin"
import { Form } from "./MyComponents/Form";
import { BrowserRouter as Router, Routes, Route, Link , Switch} from 'react-router-dom';
import { MainPage } from "./MyComponents/MainPage";
import { MakeMedicine } from "./MyComponents/MakeMedicine";
import { UpdateMedic } from "./MyComponents/UpdateMedic";
import { Patient } from "./MyComponents/Patient";
import { Distributor } from "./MyComponents/Distributor";
import { Pharmacist } from "./MyComponents/Pharmacist";
import {  Signin } from "./MyComponents/Signin";
import {Navbar} from "./MyComponents/Navbar";
import {Footer} from "./MyComponents/Footer"; 
import { Team } from "./MyComponents/Team";
import { About } from "./MyComponents/About";

class App extends Component {
  state = { web3: null, accounts: null, contract: null , dist : null, 
    manu:null};

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


      // const ManufacturerData = ManufacturerRole.networks[networkId];
      // const manufacturer = new web3.eth.Contract(ManufacturerRole.abi, ManufacturerData.address);

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


  
  Add_Admin = async(btnid ,acc) => {
    const { accounts, contract } = this.state;
    if(btnid == 1){
        alert("working");
        await contract.methods.addManufacturer(acc).send({from : accounts[0]});
    }
    if(btnid == 2){
      alert("working");
      await contract.methods.addDistributor(acc).send({from : accounts[0]});
    }
    if(btnid == 3){
      alert("working");
      await contract.methods.addPharmacist(acc).send({from : accounts[0]});
    }
    if(btnid == 4){
      alert("working");
      await contract.methods.addPatient(acc).send({from : accounts[0]});
    }
  
  };

  UpdateMed_pharma = async(medname,upc,funcid,name,long,lat,_date) => {
    const { accounts, contract } = this.state;
    alert("working"); 
    console.log("this is for checking purpose");
    console.log(accounts[0]);

    if(funcid ==1) {
      console.log("recieved distributor");
      var history = "This medicine was recieved by pharmacist " + name +  "on" + _date+".";
      alert(history);
      console.log(history);
      await contract.methods.Recieved_Pharma(upc,name,long,lat,accounts[0],history).send({from : accounts[0]});
    }
    if(funcid ==2){
      console.log("sold to pharma ");
      var history = "This medicine was sold to patient by pharmacist on" + _date+".";
      alert(history);
      console.log(history);
      await contract.methods.Sold_to_Patient(upc,history).send({from : accounts[0]});
    }
    if(funcid ==3){
      console.log("shipped to pharma");
      var history = "This medicine was shipped to patient by pharmacist on" + _date+".";
      alert(history);
      console.log(history);
      await contract.methods.Shipped_to_Patient(upc,history).send({from : accounts[0]});

    }
    if(funcid == 4){
      const res = await contract.methods.checkstockpharma(name,medname).call();
      console.log(res);
      return res;
    }
  }



  UpdateMed_dist = async(medname ,upc,name,long,lat,funcid,_date) => {
    const { accounts, contract } = this.state;
    alert("working"); 
    console.log("this is for checking purpose");
    console.log(accounts[0]);

    if(funcid ==1) {
      console.log("recieved distributor");
      var history = "This medicine was recieved by distributor"+  name + "on" + _date+".";
       alert(history);
       console.log(history);
      await contract.methods.RecievedDistributor(upc,name,long,lat,accounts[0],history).send({from : accounts[0]});
    }
    if(funcid ==2){
      console.log("sold to pharma ");
      var history = "This medicine was sold to pharmacist by distributor on" + _date+".";
       alert(history);
       console.log(history);
      await contract.methods.SoldtoPharma(upc,history).send({from : accounts[0]});
    }
    if(funcid ==3){
      console.log("shipped to pharma");
      var history = "This medicine was shipped to pharmacist by distributor on" + _date+".";
       alert(history);
       console.log(history);
      await contract.methods.ShippedtoPharma(upc, history).send({from : accounts[0]});

    }
    if(funcid == 4){
      const res = await contract.methods.checkstockdist(name,medname).call();
      console.log(res);
      return res;
    }
  }

  UpdateMed = async(upc,manuname,name,funcid,_date) =>{
    const { accounts, contract } = this.state;
    alert("working");
    console.log("this is for checking purpose");
    console.log(accounts[0]);

    if(funcid == 1){
      alert("packed called");
       var history = "This medicine was packed by the manufacturer on" + _date+".";
       alert(history);
       console.log(history);
       await contract.methods.packMedicine(upc,history).send({from : accounts[0]});
    }
    if(funcid == 2){
      alert("For sale called");
      var history = "This medicine was marked on sale by the manufacturer on" + _date+".";
      alert(history);
      console.log(history);
       await contract.methods.forSale_bymanuf(upc,history).send({from : accounts[0]});
    }if(funcid == 3){
      alert("sold called");
      var history = "This medicine was sold by the manufacturer to distributor on" + _date+".";
      alert(history);
      console.log(history);
       await contract.methods.soldToDistributor(upc,history).send({from : accounts[0]});
    }if(funcid == 4){
      alert("shipped called");
      var history = "This medicine was shipped by the manufacturer on" + _date+".";
      alert(history);
      console.log(history);
       await contract.methods.shippedByManufacturer(upc,history).send({from : accounts[0]});
    }
    if(funcid == 5){
      const res = await contract.methods.checkstockmanuf(manuname,name).call()
      console.log(res);
      return res;
    }
    
  }




  claimed = async(upc) => {
    const { accounts, contract } = this.state;
    await contract.methods.claim(upc).send({from : accounts[0]});
  }

  checkauth = async(upc) =>{
    const { accounts, contract } = this.state;
    const res =  await contract.methods.checkmedicine(upc).call();
    console.log(res);
    return res;
  }

  fetch_cod = async(upc) => {
    const { accounts, contract } = this.state;
    alert("working");
    const c = await contract.methods.fetchCordinates(upc).call();
    // console.log(res);
    const manuflat = c.manfcodlat;
    const manuflong = c.manfcodlong;
    const distlat = c.distcodlat;
    const distlong = c.distcodlong;
    const pharmalat = c.phcodlat;
    const pharmalong = c.phcodlong;
    const resarr = [manuflat,manuflong,distlat,distlong,pharmalat,pharmalong];
    
    return resarr;
  }

  fetch_state = async(upc) =>{
    const { accounts, contract } = this.state;
    const response = await contract.methods.fetchstate(upc).call();


     console.log( response._history);     
    // console.log(response);
    var s = response._history;
    // console.log(s);

    const cord =await this.fetch_cod(upc);
    console.log(cord);

    const info = await contract.methods.fetchMedicine(upc).call();
    return {s,cord,info};
    
  }



  sendtochain = async (t,_history) => {
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
    console.log(_history);

    // alert("called");
    // const res = await contract.methods.addManufacturer(accounts[0]);
    // console.log(res);
    // const res2 = await contract.methods.isManuisfacturer(accounts[0]);
    // console.log(res2);
    await contract.methods.makeMedicine(name ,upc, accounts[0], manufacturername, factoryinfo, Latitude, Longitude, notes,_history).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    //const response = await contract.methods.get().call();

    // Update state with the result.
    // this.setState({ storageValue: response });
    //await contract.methods.set(1).send({from : account  s[0]});

    //  const response = await contract.methods.fetchMedicine(upc).call();

    //  this.setState({storageValue: response});
  };


  Admin_Add_Roles = async (id,acc) => {
    const { accounts, contract } = this.state;
    alert("working");
    console.log("this is for checking purpose");
    console.log(acc,id);
    
    if(id==1){
      console.log("entered");
      console.log(acc);
      const res = await contract.methods.addPatient(acc);
       console.log(res);
      console.log("code reached here");
    }
    if(id==2){
     const res =  await contract.methods.isManufacturer(acc);
     console.log(res);
    }
    if(id==3){
      await contract.methods.addPharmacist(acc);
    }
    if(id==4){
      await contract.methods.addPatient(acc);
    }


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

    <>
      <div className="App">

        <Navbar />

        
          <Routes>

          <Route path="/" element={<MainPage/>}> </Route> 
          <Route path="/team" element={<Team/>}> </Route>
          <Route path="/about" element={<About/>}></Route>
          <Route  path="/Signin" element={<Signin />}></Route>
          <Route path="/admin" element={<Admin Add_Admin={this.Add_Admin}/>}></Route>
          <Route path="/manufacturer" element={<Form />}></Route>
          <Route path="/manufacturer/makemedicine" element={<MakeMedicine sendtochain={this.sendtochain}/>}> </Route> 
          <Route path="/manufacturer/UpdateMedic" element={<UpdateMedic UpdateMed={this.UpdateMed}/>}> </Route> 
          <Route path ="distributor" element={<Distributor UpdateMed_dist={this.UpdateMed_dist}/>}></Route>
          <Route path="/pharmacist" element={<Pharmacist UpdateMed_pharma={this.UpdateMed_pharma}/> }></Route>
          <Route path="/patient" element={<Patient fetch_state={this.fetch_state} claimed={this.claimed} checkauth={this.checkauth}/>}></Route>
          

          </Routes>
          

         
        
     
        {/* <Form sendtochain={this.sendtochain}/> */}
        {/* <h3>Congratulations manufacturer following block has been created and fetched from ganache blockchain</h3> */}

      </div>

      <Footer />

      </>
    );
  }
}

export default App;
