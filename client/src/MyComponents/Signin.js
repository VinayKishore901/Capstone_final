import React ,{useState} from 'react';
import {auth} from './firebase';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from '../App';
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
        <>
        {/* <div>
            <form onSubmit={(e)=>handleSubmit(e)}></form>
            <div className="input-field">


                <h1>Firebase Signup page for admins</h1>
                <input type="email" placeholder="email id" onChange={(e)=>setEmail(e.target.value)}></input>
                <br/>
                <input type="password" placeholder="password" onChange={(e)=>setPass(e.target.value)}></input>
                <button type="submit" className="btn-blue" onClick={handleSubmit}>Login</button>
            </div>

        </div> */}


        <section className="u-clearfix u-image u-section-3" id="carousel_a3af" data-image-width="1600" data-image-height="1067">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-align-center u-black u-container-style u-group u-opacity u-opacity-40 u-radius-50 u-shape-round u-group-1">
                <div className="u-container-layout u-container-layout-1">
                    <h2 className="u-custom-font u-text u-text-default u-text-1">LOGIN</h2>
                    <div className="u-form u-form-1">




                    <form onSubmit={(e)=>handleSubmit(e)} className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form" styles="padding: 0;" source="custom" name="form">
                        <div className="u-form-email u-form-group">
                            <label for="email-daf4" className="u-label">Email</label>
                            <input type="email" placeholder="Enter a valid email address" onChange={(e)=>setEmail(e.target.value)} id="email-daf4" name="email" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white" required=""/>
                        </div>
                        <div className="u-form-group u-form-group-2">
                        <label for="text-eef4" className="u-form-control-hidden u-label"></label>
                        <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Enter your password" id="text-eef4" name="text" className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white"/>
                        </div>

                        <div className="u-align-center u-form-group u-form-submit">

                            <button type="submit" onClick={handleSubmit} className="u-active-palette-5-dark-2 u-border-none u-btn u-btn-submit u-button-style u-hover-black u-palette-1-dark-1 u-btn-1">Login</button>

                        {/* <a href="#" className="u-active-palette-5-dark-2 u-border-none u-btn u-btn-submit u-button-style u-hover-black u-palette-1-dark-1 u-btn-1">login</a>
                        <input type="submit" onClick={handleSubmit} className="u-form-control-hidden"/> */}
                        </div>

                        <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                        <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                        <input type="hidden" value="" name="recaptchaResponse"/>
                    </form>




                    </div>
                </div>
                </div>
            </div>
        </section>


        </>
    )
}




 




 