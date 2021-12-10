var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Roles = artifacts.require("./Roles.sol");
var Manufacturer = artifacts.require("./ManufacturerRole.sol");
var Distributor = artifacts.require("./DistributorRole.sol");
var Pharmacist = artifacts.require("./PharmacistRole.sol");
var Patient = artifacts.require("./PatientRole.sol");


module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Roles);
  deployer.deploy(Manufacturer);
  deployer.deploy(Distributor);
  deployer.deploy(Pharmacist);
  deployer.deploy(Patient);


};
