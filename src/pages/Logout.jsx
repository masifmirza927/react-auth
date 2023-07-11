import React, { useEffect } from 'react'
import {removeToken} from "../helpers";
import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigator = useNavigate();

useEffect( () => {
    removeToken();
    navigator("/");
}, [])

}

export default Logout