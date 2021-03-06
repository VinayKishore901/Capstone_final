// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;
import "./Roles.sol";
import "./DistributorRole.sol";
import "./ManufacturerRole.sol";
import "./PatientRole.sol";
import "./PharmacistRole.sol";



contract SimpleStorage is PharmacistRole, PatientRole,ManufacturerRole , DistributorRole  {

  //debugging functions

  


  //basic functions

     


    function append(string memory a, string memory b) internal pure returns (string memory s) {

    return string(abi.encodePacked(a, b));

}



  //Functionalities functions         

   
  struct record{
    uint stock;
    bool flag;
  }


  
  mapping (uint => Medicine) medicines;
  mapping (uint => string ) medicinehistory ; 

  //records maps


  mapping(string => record) manufrec;
  mapping(string => record) distrec;
  mapping(string => record) pharmarec;
    

  address owner;

  // Define a variable called 'upc' for Universal Product Code (UPC)
  uint  upc;

  // Define a variable called 'sku' for Stock Keeping Unit (SKU)
  uint  sku;

  //manufacturer events
  event Made(uint upc);
  event Packed(uint upc);
  event ForSale(uint upc);
  event Soldtodistributor(uint upc);
  event shippedbymanufacturer(uint upc);
  //distributor events
  event recievedDistributor(uint upc);
  event soldtoPharma(uint upc);
  event shippedtoPharma(uint upc);
  //pharma events
  event recievedpharma(uint upc);
  event soldtopatient(uint upc);
  event shippedtopatient(uint upc);
  //Patientt event 
  event Purchased(uint upc);

    // Define enum 'State' with the following values:
  enum State 
  { 
    //manufacturer states
    Made,       // 0
    Packed,     // 1
    ForSale,    // 2
    Soldtodistributor, //3
    shippedbymanufacturer,//4
    //distributor states
    RecievedDistributor, //5
    SoldtoPharma, //6
    ShippedtoPharma,  //7
    //Pharmacist
    RecievedPharma, //8
    SoldtoPatient , //9
    ShippedtoPatient //10



  }

    

   struct Medicine {
    uint    sku;  // Stock Keeping Unit (SKU)
    uint    upc; // Universal Product Code (UPC), generated by the Manufacturer, goes on the package, can be verified by the Patient
    address ownerID;  // Metamask-Ethereum address of the current owner as the medicine moves through 8 stages
    address originManufacturerID; // Metamask-Ethereum address of the Manufacturer
    string  originFactoryName; // Manufacturer Name
    string  originFactoryInformation;  // Manufacturer Information
    string  originFactoryLatitude; // Factory Latitude
    string  originFactoryLongitude;  // Factory Longitude
    uint    medicineID;  // Product ID potentially a combination of upc + sku
    string  medicineNotes; // Product Notes
    string    medicineName; // Product Price
    State   medicineState;  // Product State as represented in the enum above 
    address distributorID;  // Metamask-Ethereum address of the Distributor
    address pharmacistID; // Metamask-Ethereum address of the Pharmacist
    address patientID; // Metamask-Ethereum address of the Patient
    string DistName;
    string PharamaName;
    string  DistLatitude; // Factory Latitude
    string  DistLongitude;  // Factory Longitude
    string  PharmaLatitude; // Factory Latitude
    string  PharmaLongitude;  // Factory Longitude
    bool onchain;
  }

  //modifiers for previous checking state
  // Define a modifier that checks if an medicine.state of a upc is Made
  modifier made(uint _upc) {
    require(medicines[_upc].medicineState == State.Made);
    _;
  }
  modifier packed(uint _upc) {
    require(medicines[_upc].medicineState == State.Packed);
    _;
  }
  modifier fsale(uint _upc) {
    require(medicines[_upc].medicineState == State.ForSale);
    _;
  }
  modifier soldtod(uint _upc) {
    require(medicines[_upc].medicineState == State.Soldtodistributor);
    _;
  }
  modifier shippedbym(uint _upc) {
    require(medicines[_upc].medicineState == State.shippedbymanufacturer);
    _;
  }
  modifier recivedD(uint _upc) {
    require(medicines[_upc].medicineState == State.RecievedDistributor);
    _;
  }
  modifier soldtoph(uint _upc) {
    require(medicines[_upc].medicineState == State.SoldtoPharma);
    _;
  }
  modifier shippedtoph(uint _upc) {
    require(medicines[_upc].medicineState == State.ShippedtoPharma);
    _;
  }
  modifier recivedPh(uint _upc) {
    require(medicines[_upc].medicineState == State.RecievedPharma);
    _;
  }
  modifier soldtop(uint _upc) {
    require(medicines[_upc].medicineState == State.SoldtoPatient);
    _;
  }
  modifier shippedtop(uint _upc) {
    require(medicines[_upc].medicineState == State.ShippedtoPatient);
    _;
  }




  function makeMedicine(string memory _name , uint _upc, address _originManufacturerID, string memory _originFactoryName, string memory _originFactoryInformation, string  memory _originFactoryLatitude, string  memory _originFactoryLongitude, string  memory _medicineNotes, string memory _history) public  onlyManufacturer {
    // Add the new medicine as part of medicines
    Medicine memory temp_medicine = Medicine({
      sku:sku + 1,
      upc:_upc,
      ownerID:_originManufacturerID,
      originManufacturerID:_originManufacturerID,
      originFactoryName:_originFactoryName,
      originFactoryInformation:_originFactoryInformation,
      originFactoryLatitude:_originFactoryLatitude,
      originFactoryLongitude:_originFactoryLongitude,
      medicineID:sku+_upc,
      medicineNotes:_medicineNotes,
      medicineState:State.Made,
      medicineName: _name,
      distributorID:address(0),
      pharmacistID:address(0),
      patientID:address(0),
      DistName: " ",
      PharamaName :" ",
      DistLongitude : " ",
      DistLatitude : " ",
      PharmaLatitude : " ",
      PharmaLongitude  : " ",
      onchain : true
      });

      string memory manustr = append(_originFactoryName,_name);
      if(manufrec[manustr].flag == true){
          manufrec[manustr].stock = manufrec[manustr].stock + 1;
      }
      else{
          record memory r = record({
              stock : 1,
              flag : true
          });
          manufrec[manustr] = r;
      }
 
 

    //string storage initial_history="This med is made by date will be passed by frontend" ;
    medicines[_upc] = temp_medicine;
    medicinehistory[_upc]  =_history;

   // Increment sku
    sku = sku + 1;
    // Emit the appropriate event

     emit Made(_upc);
  }

 



  // function makeMedicine(uint _upc,uint _price ,string memory _name) public {
  //     Medicine memory temp_medicine = Medicine({
  //         upc : _upc,
  //         price : _price,
  //         name : _name
  //     });
  //     medicines[_upc] = temp_medicine;

  // }

  //manufacturer sub events


  function checkstockmanuf (string memory _manuname,string memory _name) public view  onlyManufacturer returns (uint)  {
 
    string memory manustr = append(_manuname,_name);
    return manufrec[manustr].stock;
  }


  function checkstockdist (string memory _distname,string memory _name) public view  onlyDistributor returns (uint)  {
     
    string memory diststr = append(_distname,_name);
    return distrec[diststr].stock;
  }

  function checkstockpharma (string memory _pharmaname ,string memory _name) public view  onlyPharmacist returns (uint)  {
  
    string memory pharmastr = append(_pharmaname,_name);
    return pharmarec[pharmastr].stock;
  }


  function packMedicine(uint _upc,string memory _history) public made(_upc) onlyManufacturer {
  // // Call modifier to check if upc has passed previous supply chain stage
  // Made(_upc);
  // Call modifier to verify caller of this function
  
    // Update the appropriate fields
    medicines[_upc].medicineState = State.Packed;
    // string memory prevhis = medicinehistory[_upc];
    //string  memory t1= concatenate(prevhis,_history);
     string memory prevhis = medicinehistory[_upc];
     string memory temp =  append(prevhis,_history);
     medicinehistory[_upc]= temp;



   // string memory history = medicinehistory[_upc];
    //history = history + " packed by manufacturer on date____";
    //medicinehistory[_upc] = history;
    // Emit the appropriate event
    emit Packed(_upc);
  }

   function forSale_bymanuf(uint _upc,string memory _history) public  packed(_upc) onlyManufacturer{
  // // Call modifier to check if upc has passed previous supply chain stage
  // Made(_upc);
  // Call modifier to verify caller of this function
  
    // Update the appropriate fields
    medicines[_upc].medicineState = State.ForSale;
   // string memory history = medicinehistory[_upc];
    //history = history + " packed by manufacturer on date____";
    //medicinehistory[_upc] = history;
    
    string memory prevhis = medicinehistory[_upc];
     string memory temp =  append(prevhis,_history);
     medicinehistory[_upc]= temp;
    // Emit the appropriate event

    emit ForSale(_upc);
  }

   function soldToDistributor(uint _upc,string memory _history) public fsale(_upc) onlyManufacturer{
  // // Call modifier to check if upc has passed previous supply chain stage
  // Made(_upc);
  // Call modifier to verify caller of this function
  
    // Update the appropriate fields
    medicines[_upc].medicineState = State.Soldtodistributor;
   // string memory history = medicinehistory[_upc];
    //history = history + " packed by manufacturer on date____";
    //medicinehistory[_upc] = history;
    string memory prevhis = medicinehistory[_upc];
     string memory temp =  append(prevhis,_history);
     medicinehistory[_upc]= temp;
    // Emit the appropriate event
    emit Soldtodistributor(_upc);
  }




 function shippedByManufacturer(uint _upc,string memory _history) public soldtod(_upc) onlyManufacturer{
  // // Call modifier to check if upc has passed previous supply chain stage
  // Made(_upc);
  // Call modifier to verify caller of this function
  
    // Update the appropriate fields
    medicines[_upc].medicineState = State.shippedbymanufacturer;
   // string memory history = medicinehistory[_upc];
    //history = history + " packed by manufacturer on date____";
    //medicinehistory[_upc] = history;
    // Emit the appropriate event
    string memory prevhis = medicinehistory[_upc];
     string memory temp =  append(prevhis,_history);
     medicinehistory[_upc]= temp;
    emit shippedbymanufacturer(_upc);
  }

  //distributor controlled functions



  function RecievedDistributor(uint _upc,string memory _name,string memory _long,string memory _lat,address _address,string memory _history) public shippedbym(_upc) onlyDistributor{
  // // Call modifier to check if upc has passed previous supply chain stage
  // Made(_upc);
  // Call modifier to verify caller of this function
  
    // Update the appropriate fields


     
      medicines[_upc].medicineState = State.RecievedDistributor;
      medicines[_upc].DistName = _name;
      medicines[_upc].DistLongitude = _long;
      medicines[_upc].DistLatitude = _lat;
      medicines[_upc].distributorID = _address;
   // string memory history = medicinehistory[_upc];
    //history = history + " packed by manufacturer on date____";
    //medicinehistory[_upc] = history;
    string memory prevhis = medicinehistory[_upc];
     string memory temp =  append(prevhis,_history);
     medicinehistory[_upc]= temp;
     string memory manuf = medicines[_upc].originFactoryName;
     string memory medname =  medicines[_upc].medicineName;
     string memory manustr = append(manuf,medname);
     manufrec[manustr].stock = manufrec[manustr].stock - 1;

     string memory diststr = append(_name,medname);
      if(distrec[diststr].flag == true){
          distrec[diststr].stock = distrec[diststr].stock + 1;
      }
      else{
          record memory r = record({
              stock : 1,
              flag : true
          });
          distrec[diststr] = r;
      }


    // Emit the appropriate event
    emit recievedDistributor(_upc);
  }
  function SoldtoPharma(uint _upc , string memory _history) public recivedD(_upc) onlyDistributor{
  // // Call modifier to check if upc has passed previous supply chain stage
  // Made(_upc);
  // Call modifier to verify caller of this function
  
    // Update the appropriate fields
    medicines[_upc].medicineState = State.SoldtoPharma;
   // string memory history = medicinehistory[_upc];
    //history = history + " packed by manufacturer on date____";
    //medicinehistory[_upc] = history;
    string memory prevhis = medicinehistory[_upc];
     string memory temp =  append(prevhis,_history);
     medicinehistory[_upc]= temp;
    // Emit the appropriate event
    emit soldtoPharma(_upc);
  }
  function ShippedtoPharma(uint _upc, string memory _history) public soldtoph(_upc) onlyDistributor{
  // // Call modifier to check if upc has passed previous supply chain stage
  // Made(_upc);
  // Call modifier to verify caller of this function
  
    // Update the appropriate fields
    medicines[_upc].medicineState = State.ShippedtoPharma;
   // string memory history = medicinehistory[_upc];
    //history = history + " packed by manufacturer on date____";
    //medicinehistory[_upc] = history;
    string memory prevhis = medicinehistory[_upc];
     string memory temp =  append(prevhis,_history);
     medicinehistory[_upc]= temp;
    // Emit the appropriate event
    emit shippedtoPharma(_upc);
  }


  //Pharmacist functions 

  function Recieved_Pharma(uint _upc,string memory _name,string memory _long,string memory _lat,address _address,string memory _history) public shippedtoph(_upc) onlyPharmacist{
  // // Call modifier to check if upc has passed previous supply chain stage
  // Made(_upc);
  // Call modifier to verify caller of this function
  
    // Update the appropriate fields
    medicines[_upc].medicineState = State.RecievedPharma;
    medicines[_upc].PharamaName = _name;
      medicines[_upc].PharmaLongitude= _long;
      medicines[_upc].PharmaLatitude = _lat;
      medicines[_upc].pharmacistID = _address;
   // string memory history = medicinehistory[_upc];
    //history = history + " packed by manufacturer on date____";
    //medicinehistory[_upc] = history;
     string memory prevhis = medicinehistory[_upc];
     string memory temp =  append(prevhis,_history);
     medicinehistory[_upc]= temp;

     string memory distname  = medicines[_upc].DistName;
     string memory medname = medicines[_upc].medicineName;
     string memory diststr = append(distname , medname);
     distrec[diststr].stock = distrec[diststr].stock - 1;
     string memory pharmastr = append(_name,medname);
     pharmarec[pharmastr].stock = pharmarec[pharmastr].stock + 1;



    
    // Emit the appropriate event
    emit recievedpharma(_upc);
  }
  function Sold_to_Patient(uint _upc,string memory _history) public recivedPh(_upc) onlyPharmacist{
  // // Call modifier to check if upc has passed previous supply chain stage
  // Made(_upc);
  // Call modifier to verify caller of this function
  
    // Update the appropriate fields
    medicines[_upc].medicineState = State.SoldtoPatient;
   // string memory history = medicinehistory[_upc];
    //history = history + " packed by manufacturer on date____";
    //medicinehistory[_upc] = history;
     string memory prevhis = medicinehistory[_upc];
     string memory temp =  append(prevhis,_history);
     medicinehistory[_upc]= temp;
    // Emit the appropriate event
    emit soldtopatient(_upc);
  }
  function Shipped_to_Patient(uint _upc,string memory _history) public soldtop(_upc) onlyPharmacist{
  // // Call modifier to check if upc has passed previous supply chain stage
  // Made(_upc);
  // Call modifier to verify caller of this function
  
    // Update the appropriate fields
    medicines[_upc].medicineState = State.ShippedtoPatient;
   // string memory history = medicinehistory[_upc];
    //history = history + " packed by manufacturer on date____";
    //medicinehistory[_upc] = history;
     string memory prevhis = medicinehistory[_upc];
     string memory temp =  append(prevhis,_history);
     medicinehistory[_upc]= temp;
    // Emit the appropriate event
    emit shippedtopatient(_upc);
  }

  function checkmedicine(uint _upc) public view returns(bool){
      if(medicines[_upc].onchain == true){
        return true;
      }
      else{
        return false;
      }
  }

  function claim(uint _upc) public {
      medicines[_upc].onchain = false;
  }

  function fetchstate(uint _upc) public view onlyPatient returns (State _medicineState,string memory _history) {
    return (
      medicines[_upc].medicineState,
      medicinehistory[_upc]
      );
  }

   function fetchCordinates(uint _upc) public view onlyPatient returns (string memory manfcodlat,string memory manfcodlong,string memory distcodlat,string memory distcodlong,string memory phcodlat,string memory phcodlong) {
    return (
      medicines[_upc].originFactoryLatitude,
      medicines[_upc].originFactoryLongitude,
      medicines[_upc].DistLatitude,
      medicines[_upc].DistLongitude,
      medicines[_upc].PharmaLatitude,
      medicines[_upc].PharmaLongitude
      );
  }

  

  function fetchMedicine(uint _upc) public view onlyPatient returns (address mid,address did,address pid,string memory mname,string memory dname,string memory pname,string memory mnotes) {
    return(


    
     medicines[_upc].originManufacturerID, // Metamask-Ethereum address of the Manufacturer
     medicines[_upc].distributorID,  // Metamask-Ethereum address of the Distributor
     medicines[_upc].pharmacistID, // Metamask-Ethereum address of the Pharmacist
     medicines[_upc].originFactoryName, // Manufacturer Name
     medicines[_upc].DistName,
     medicines[_upc].PharamaName, 
     medicines[_upc].medicineNotes // Product Notes
    
    
           
    );
  }

}
