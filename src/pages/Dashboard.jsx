import React, { useContext, useEffect } from 'react'
import { getToken } from "../helpers";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';


function Dashboard() {
  const navigator = useNavigate();

const UserContext = useContext(AuthContext);

  useEffect(() => {
    if (UserContext.user?.role !== "admin") {
      navigator("/");
    }
  }, []);

  // if (token !== null) {
    return (
      <div>
        <button onClick={ () => navigator(-1) }>Back</button>
        Dashboard
      </div>
    )
  // }

}

export default Dashboard