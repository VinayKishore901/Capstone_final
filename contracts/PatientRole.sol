// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;

// Import the library 'Roles'
import "./Roles.sol";

// Define a contract 'PatientRole' to manage this role - add, remove, check
contract PatientRole {
  using Roles for Roles.Role;

  // Define 2 events, one for Adding, and other for Removing
  event PatientAdded(address indexed account);
  event PatientRemoved(address indexed account);

  // Define a struct 'patients' by inheriting from 'Roles' library, struct Role
  Roles.Role private patients;

  // In the constructor make the address that deploys this contract the 1st patient
  constructor() public {
    _addPatient(msg.sender);
  }

  // Define a modifier that checks to see if msg.sender has the appropriate role
  modifier onlyPatient() {
    require(isPatient(msg.sender));
    _;
  }

  // Define a function 'isPatient' to check this role
  function isPatient(address account) public view returns (bool) {
    return Roles.has(patients, account);
  }

  // Define a function 'addPatient' that adds this role
  function addPatient(address account) public onlyPatient {
    _addPatient(account);
  }

  // Define a function 'renouncePatient' to renounce this role
  function renouncePatient() public {
    _removePatient(msg.sender);
  }

  // Define an internal function '_addPatient' to add this role, called by 'addPatient'
  function _addPatient(address account) internal {
    Roles.add(patients, account);
    emit PatientAdded(account);
  }

  // Define an internal function '_removePatient' to remove this role, called by 'removePatient'
  function _removePatient(address account) internal {
    Roles.remove(patients, account);
    emit PatientRemoved(account);
  }
}