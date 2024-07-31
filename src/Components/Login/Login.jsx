import { useState } from "react";
import "./style.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../../firebase.js'
import { toast , ToastContainer} from "react-toastify";
import { Link , useNavigate} from "react-router-dom";

const auth = getAuth(app);
const Login = ()=>{
    const [email , setEmail]=useState("");
    const [password , setPassword]=useState("");

    const navigate = useNavigate();

    const loginUser = ()=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    toast.success("User Logged In Successfully.")
    navigate('/');
  })
  .catch((err)=>{
    toast.error("Login Failed!")
  })
    }

    return (
        <div>
            <ToastContainer autoClose={1000}/>
            <div className="maincomponent">
                <div className="loginform">
                    <h1 className="headline">Login </h1>
                    <label>E-mail</label>
                    <input type="email" 
                    placeholder="Please Type E-mail" 
                    className="emaillogin"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />

                    <label>Password</label>
                    <input type="password" 
                    placeholder="please type password" 
                    className="passwordlogin"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />

                    <button 
                    className="loginbutton"
                    onClick={loginUser}
                    >Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;