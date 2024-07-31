import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';
import logo from '../assets/logo.jpg';
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const Navbar = ({setTextData})=>{

    const [searchText, setSearchText]=useState('');
    const {data} = useContext(UserContext);
     
    return(
        <div>
            <ul>
                <div className="logocontainer"><img src={logo} className="logoComponent"/></div>
                    <div className="searchcomponent">
                        <input  className="inputComponent" onChange={(e)=>{setTextData(e.target.value)}}/>
                        <button className="searchbtn" >Search</button>
                    </div>
                    
                        <button className="loginbtn">
                            <Link to="/signup">Signup</Link>
                        </button>

                        <button className="loginbtn">
                            <Link to="/login">Login</Link>
                        </button>
                    
                    <div className="navbarcompo">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/cart">
                        Cart 
                        {data.length > 0 &&
                        <span className="cartCount">{data.length}</span>
                        }
                        </Link>
                        </li>
                    </div>
            </ul>

        </div>
    )
}

export default Navbar;