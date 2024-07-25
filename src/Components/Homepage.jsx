import axios from "axios";
import {useState, useEffect, useContext } from "react";
import './style.css';
import { UserContext } from "./context/UserContext";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Homepage= ({ textData })=>{
    const [userData, setUserData]=useState([]);
    const {setData}= useContext(UserContext);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products?limit=20')
        .then((res)=>{setUserData(res.data);})
    },[]);

    const filterdata = userData.filter((item)=>
        item.category.toLowerCase().includes(textData.toLowerCase())
    );

    const Addcartdata= (item, id)=>{
        setData((prevdata)=> [...prevdata, item]);
        toast.success("Item Added to the Cart");
    }

    return(
        <>
        <ToastContainer  autoClose={1000}/>
        <div className="maincontainer">
        {filterdata.map((item, id)=>(
                <div key={id} className='usercomponent'>
                    <img src={item.image} />
                    <div className="productTitle"><b>Name: </b>{item.title}</div>
                    <p><b>Amount :</b> {item.price}</p>
                    <p><b>Category : </b>{item.category} </p>
                    {/* <p><b>Description: </b> {item.description}</p>  */}
                    <button className="addbtn" onClick={()=>{Addcartdata(item, id)}}>Add Button</button>
                </div>
        ))}
        </div>
        </>
    )
}

export default Homepage;