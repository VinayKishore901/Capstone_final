 import React from 'react'
 import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
 
 export const About = () => {
     return (
        <div class="demo10">
            <div class="container">
                <h4 class="py-4 text-center">BLOCKCHAIN BASED MEDICAL SUPPLY CHAIN</h4>
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="pricingTable10">
                            <div class="pricingTable-header">
                                <h3 class="heading">ADMIN</h3>
                                 
                            </div>
                            <div class="pricing-content">
                                <ul>
                                    <li>Deploy Smart Contracts</li>
                                    <li>Add Other Roles</li>
                                    <li>Check for point of failures</li>
                                    <li>Regulates Frontend</li>
                                    <li>Regulates Backend</li>
                                </ul>
                                
                                <Link to="/admin"><button className="read" target="_blank">ADMIN</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="pricingTable10">
                            <div class="pricingTable-header">
                                <h3 class="heading">MANUFACTURER</h3>
                                 
                            </div>
                            <div class="pricing-content">
                                <ul>
                                    <li>Make New Medicine</li>
                                    <li>Mark it for Packed</li>
                                    <li>Mark it for Forsale</li>
                                    <li>Mark it for Sold to Dist</li>
                                    <li>Mark it for Shipped to Dist</li>
                                </ul>
                                <Link to="/manufacturer"><button className="read" target="_blank">MANUFACTURER</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="pricingTable10">
                            <div class="pricingTable-header">
                                <h3 class="heading">DISTRIBUTOR</h3>
                            
                            </div>
                            <div class="pricing-content">
                                <ul>
                                    <li>Recieve Medicine</li>
                                    <li>Mark it for Packed</li>
                                    <li>Mark it for Forsale</li>
                                    <li>Mark it for Sold to Pharma</li>
                                    <li>Regulates Chain</li>
                                </ul>
                                <Link to="/distributor"><button className="read" target="_blank">DISTRIBUTOR</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="pricingTable10">
                            <div class="pricingTable-header">
                                <h3 class="heading">PHARMACIST</h3>
                                 
                            </div>
                            <div class="pricing-content">
                                <ul>
                                    <li>Recieve Medicine</li>
                                    <li>Mark it for Packed</li>
                                    <li>Mark it for Forsale</li>
                                    <li>Mark it for Sold to Patient</li>
                                    <li>Regulates Chain</li>
                                </ul>
                                <Link to="/manufacturer"><button className="read" target="_blank">PHARMACIST</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="pricingTable10">
                            <div class="pricingTable-header">
                                <h3 class="heading">PATIENT</h3>
                                
                            </div>
                            <div class="pricing-content">
                                <ul>
                                    <li>Recieve Medicine</li>
                                    <li>Enter UPC</li>
                                    <li>Gets the history</li>
                                    <li>Gets location</li>
                                    <li>Regulates Chain</li>
                                </ul>
                                <Link to="/manufacturer"><button className="read" target="_blank">PATIENT</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
 }
 