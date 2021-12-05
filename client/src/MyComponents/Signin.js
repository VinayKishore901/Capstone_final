import React ,{useState} from 'react';
import {auth} from './firebase';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


 

export const Signin = (props) => {
    
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const history = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(email,password);
        try{
            console.log(email);
            console.log(password);  
            console.log("checking");
            const result = await auth.signInWithEmailAndPassword(email,password);
            //  window.M.toast({html : 'welcome admin' ,classes:"green"});
            toast.success('Successful', {
                // Set to 15sec
                position: toast.POSITION.BOTTOM_LEFT, autoClose:4500})
               toast('Hello Admin, Welcome You are logged in')// Default
            console.log("checking");
            history('/admin');

        }
        catch(err){
            // window.M.toast({html : 'welcome' ,classes:"green"});
            console.log("error occured");
            toast.error('Error', {
                // Set to 15sec
                position: toast.POSITION.BOTTOM_LEFT, autoClose:4500})
               toast('Some error occured either password or id is wrong');// Default
        }

    }
    return (
        <div>
        <form onSubmit={(e)=>handleSubmit(e)}></form>
        <div className="input-field">


            <h1>Firebase Signup page for admins</h1>
            <input type="email" placeholder="email id" onChange={(e)=>setEmail(e.target.value)}></input>
            <br/>
            <input type="password" placeholder="password" onChange={(e)=>setPass(e.target.value)}></input>
            <button type="submit" className="btn-blue" onClick={handleSubmit}>Login</button>
        </div>

    </div>
    )
}




 




 