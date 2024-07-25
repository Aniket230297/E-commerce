
import './style.css';

const Button = ({text}) =>{
    return (
        <>
            <button className="ButtonComponent">
                {text}
            </button>
        </>
    )
}

export default Button;