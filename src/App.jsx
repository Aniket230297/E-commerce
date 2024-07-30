import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar.jsx"
import {Routes, Route} from 'react-router-dom'
// import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

const App = ()=>{
  const [textData, setTextData]=useState("");

  return(
    <>
   <Navbar setTextData={setTextData} />
      <Routes>
        <Route path='/' element={<Homepage textData={textData} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/login" element={<SignUp />} />
      </Routes>
  
    </>
  )
}
export default App;