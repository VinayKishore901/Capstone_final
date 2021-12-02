// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {
  
  mapping (uint => Medicine) medicines;
  mapping (uint => string ) medicinehistory ; 

  address owner;

  // Define a variable called 'upc' for Universal Product Code (UPC)
  uint  upc;

  // Define a variable called 'sku' for Stock Keeping Unit (SKU)
  uint  sku;


  event Made(uint upc);
  event Packed(uint upc);
  event ForSale(uint upc);
  event Sold(uint upc);
  event Shipped(uint upc);
  event Received(uint upc);
  event Purchased(uint upc);

    // Define enum 'State' with the following values:
  enum State 
  { 
    Made,       // 0
    Packed,     // 1
    ForSale,    // 2
    Sold,       // 3
    Shipped,    // 4
    Received,   // 5
    Purchased   // 6
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
    uint    medicinePrice; // Product Price
    State   medicineState;  // Product State as represented in the enum above
    address distributorID;  // Metamask-Ethereum address of the Distributor
    address pharmacistID; // Metamask-Ethereum address of the Pharmacist
    address patientID; // Metamask-Ethereum address of the Patient
  }


  function makeMedicine(uint _upc, address _originManufacturerID, string memory _originFactoryName, string memory _originFactoryInformation, string  memory _originFactoryLatitude, string  memory _originFactoryLongitude, string  memory _medicineNotes) public
  


  {
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
      medicinePrice:0,
      distributorID:address(0),
      pharmacistID:address(0),
      patientID:address(0)

      });
    //string storage initial_history="This med is made by date will be passed by frontend" ;
    medicines[_upc] = temp_medicine;
    //medicinehistory[_upc]  =initial_history;

// uint    sku;  // Stock Keeping Unit (SKU)
//     uint    upc; // Universal Product Code (UPC), generated by the Manufacturer, goes on the package, can be verified by the Patient
//     address ownerID;  // Metamask-Ethereum address of the current owner as the medicine moves through 8 stages
//     address originManufacturerID; // Metamask-Ethereum address of the Manufacturer
//     string  originFactoryName; // Manufacturer Name
//     string  originFactoryInformation;  // Manufacturer Information
//     string  originFactoryLatitude; // Factory Latitude
//     string  originFactoryLongitude;  // Factory Longitude
//     uint    medicineID;  // Product ID potentially a combination of upc + sku
//     string  medicineNotes; // Product Notes
//     uint    medicinePrice; // Product Price
//     State   medicineState;  // Product State as represented in the enum above
//     address distributorID;  // Metamask-Ethereum address of the Distributor
//     address pharmacistID; // Metamask-Ethereum address of the Pharmacist
//     address patientID; // Metamask-Ethereum address of the Patient




    // Increment sku
    sku = sku + 1;
    // Emit the appropriate event

     
  }
  // function makeMedicine(uint _upc,uint _price ,string memory _name) public {
  //     Medicine memory temp_medicine = Medicine({
  //         upc : _upc,
  //         price : _price,
  //         name : _name
  //     });
  //     medicines[_upc] = temp_medicine;

  // }


  function packMedicine(uint _upc) public {
  // // Call modifier to check if upc has passed previous supply chain stage
  // Made(_upc);
  // Call modifier to verify caller of this function
  
    // Update the appropriate fields
    medicines[_upc].medicineState = State.Packed;
   // string memory history = medicinehistory[_upc];
    //history = history + " packed by manufacturer on date____";
    //medicinehistory[_upc] = history;
    // Emit the appropriate event
    emit Packed(_upc);
  }


  function fetchstate(uint _upc) public view returns (State _medicineState){
    return (
      medicines[_upc].medicineState
      );
  }

  function fetchMedicine(uint _upc) public view returns (uint upc_ , address ownerid , string memory manufacturername, string memory Latitude , string memory Longitude,string memory factoryinfo , string memory notes){
    return(
          _upc,
          medicines[_upc].ownerID,
          medicines[_upc].originFactoryName,
          medicines[_upc].originFactoryLatitude,
          medicines[_upc].originFactoryLongitude,
          medicines[_upc].originFactoryInformation,
          medicines[_upc].medicineNotes
    );
  }

}
