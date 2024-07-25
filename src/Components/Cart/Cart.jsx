import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import "./style.css";

const Cart = ()=>{
        const {data} = useContext(UserContext);

        const subtotal = data.reduce((total, item) => total + item.price, 0);
    return(
        <>
        <h1>cart Component</h1>
        <div className="classContainer">
            <div className="maincomponent">
             {data.map((item, index)=>(
                <div key={index} className="cartcomponent">
                    <img src={item.image} />
                    <div className="productbox">
                    <div className="productNmae"><b>Name: </b>{item.title}</div>
                    <p><b>Amount :</b> {item.price}</p>
                    <p><b>Category : </b>{item.category} </p>
                    <p><b>Description : </b>{item.description}</p> 
                    <button className="paybtn">Pay</button>
                    </div>
                </div>
            ))}
        </div>
        <div className="CardCostComponent">
            <h1>Your Order Summary</h1>
            <hr/>
            <div className="cartTable">
                <p className="carttableDescription">Item Description</p>
                <p>Quantity</p>
                <p>Price</p>
            </div>
            <div>
                {data.map((item, id)=>(
                    <div key={id} className="cartitem">
                    <p className="carttableDescription">{item.title}</p>
                    <p className="ItemQuantity">{item.quantity || 1}</p>
                    <p>Rs.{item.price}</p>
                    </div>
                ))}
            </div> 
            <hr />
            <div className="cartitemsubtotal">
                {subtotal > 0 &&
                <p>subTotal: Rs.{subtotal.toFixed(2)}</p>
                }
            </div>
        </div>
        </div>
        </>
    )
}

export default Cart;