import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export const MainPage = () => {
    return (
        <div>
        
            <h1>Main Website Page </h1>
            <h3>This is going to be the main webpgae of our website from where we will be redirecting to the other pages for example till now we will be redirecting to the Admin and manufacturer page.</h3>

            {/* 1.This will be the card for our admin from here we will be redirectig to our admin page and registering differnt users to their role */}
            <div >
                <div className="card" style={{ "width": "18rem" }} >
                    <div className="card-body">
                        <h5 className="card-title">Admin</h5>
                        <h6 className="card-subtitle mb-2 text-muted">This is for the admin who is responsible for mainting this DApp.</h6>
                        <p className="card-text">Please click below to be redirected to the Admin Page.</p>
                        <Link to="/Admin">
                            <button className="btn-sm btn-success">Admin</button>
                        </Link>
                    </div>
                </div>


                {/* 2.This will be the card for our manufacturer from here we will be redirectig to our manufacturer page and registering differnt medicines and updainf 4 events */}
                <br />
                <br />

                <div className="card" style={{ "width": "18rem" }} >
                    <div className="card-body">
                        <h5 className="card-title">Manufacturer</h5>
                        <h6 className="card-subtitle mb-2 text-muted">This for the various manufacturers those are attached to our Dapp.</h6>
                        <p className="card-text">Please click below to be redirected to the Manufacturer Page</p>

                        <Link to="/manufacturer">
                            <button className="btn-sm btn-success">Manufacturer</button>
                        </Link>
                    </div>
                </div>
                <br />
                <br />
                <div className="card" style={{ "width": "18rem" }} >
                    <div className="card-body">
                        <h5 className="card-title">Distributor </h5>
                        <h6 className="card-subtitle mb-2 text-muted">This for the Distributor to set info about  medicines on blockchain .</h6>
                        <p className="card-text">Please click below to be redirected to the Distributors Page</p>

                        <Link to="/distributor">
                            <button className="btn-sm btn-success">Distributor</button>
                        </Link>
                    </div>
                </div>

                <br />
                <br />

                <div className="card" style={{ "width": "18rem" }} >
                    <div className="card-body">
                        <h5 className="card-title">Pharamcist </h5>
                        <h6 className="card-subtitle mb-2 text-muted">This for the Pharmacist to update about various medicines on blockchain .</h6>
                        <p className="card-text">Please click below to be redirected to the Pharmacist Page</p>

                        <Link to="/pharmacist">
                            <button className="btn-sm btn-success">Pharmacist</button>
                        </Link>
                    </div>
                </div>

                <br />
                <br />

                <div className="card" style={{ "width": "18rem" }} >
                    <div className="card-body">
                        <h5 className="card-title">Patient </h5>
                        <h6 className="card-subtitle mb-2 text-muted">This for the patients to see Information about various medicines on blockchain .</h6>
                        <p className="card-text">Please click below to be redirected to the Patient Page</p>

                        <Link to="/patient">
                            <button className="btn-sm btn-success">Patient</button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}
