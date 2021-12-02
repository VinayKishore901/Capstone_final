import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MakeMedicine } from './MakeMedicine';



export const Form = (props) => {
     
    return (
        <div>
            <h1>This is Manufacturer page </h1>
            <br></br>
             <Link to="/manufacturer/makemedicine">
             <button  className="btn-sm btn-success"> Make new medicine</button>
             </Link>

             <Link to="/manufacturer/updateMedic">
             <button  className="btn-sm btn-success"> Update exisitng medicine</button>
             </Link>

        </div>
    )
}
