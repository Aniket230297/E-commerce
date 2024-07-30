import { useState } from "react";
import "./style.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase.js'
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const auth = getAuth(app);

const SignUp = ()=>{
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState("");

    const signUpButton= ()=>{
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    toast.success('User Created Successfully.');
  })
  .catch((error)=>{
        alert("user cannot create");
  })
    }

    return (
        <div>
             <ToastContainer  autoClose={1000}/>
            <div className="maincomponent">
                <div className="signupform">
                    <h1 className="headline">SignUp </h1>
                    <label>E-mail</label>
                    <input type="email" 
                    placeholder="Please Type E-mail" 
                    className="emailsignup" 
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />

                    <label>Password</label>
                    <input type="password" 
                    placeholder="please type password" 
                    className="passwordsignup"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />

                    <button className="signupbutton" onClick={signUpButton}>SignUp</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;