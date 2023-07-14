import React, { useState } from 'react'
import "./styles.css";
import { Link } from 'react-router-dom';


function InputField() {
  const [inputTxt, setInputTxt] = useState("");
  const [price, setPrice] = useState(null);

  return (
    <div className='inputFiledBox'>
      <input onChange={(e) => setInputTxt(e.target.value)} type='text' className='inputField' />
      <select onChange={(e) => setPrice(e.target.value)} class="form-select" style={{ width: "20%" }}>
        <option selected value="0">Select Price</option>
        <option value="10000-20000">10000 - 20000</option>
        <option value="21000-30000">21000 - 30000</option>
        <option value="30000-">30000+</option>
      </select>
      <Link to={`/search?q=${inputTxt}&price=${price}`} className='btn  btn-dark' style={{ width: '140px' }}>Search</Link>
    </div>
  )
}

export default InputField