import "./style.css";

const Login = ()=>{

    return (
        <div>
            <div className="maincomponent">
                <div className="loginform">
                    <h1 className="headline">SignUp </h1>
                    <label>E-mail</label>
                    <input type="email" placeholder="Please Type E-mail" className="emaillogin"/>

                    <label>Password</label>
                    <input type="password" placeholder="please type password" className="passwordlogin"/>

                    <button className="loginbuttton">SignUp</button>
                </div>
            </div>
        </div>
    )
}

export default Login;