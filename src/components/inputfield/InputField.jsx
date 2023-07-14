import React, { useState } from 'react'
import "./styles.css";
import { Link } from 'react-router-dom';


function InputField() {
    const [inputTxt, setInputTxt] = useState("");

 
  return (
    <div>
        <input onChange={ (e) => setInputTxt(e.target.value)} type='text' className='inputField' />
        <Link to={`/search?q=${inputTxt}`}  className='btn  btn-dark' style={{ width: '140px' }}>Search</Link>
    </div>
  )
}

export default InputField