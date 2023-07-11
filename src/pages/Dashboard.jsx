import React, { useEffect } from 'react'
import { getToken } from "../helpers";
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigator = useNavigate();
  const token = getToken();

  console.log(token)


  useEffect(() => {
    if (token === null) {
      navigator("/login");
    }
  }, [])

  if (token !== null) {
    return (
      <div>Dashboard</div>
    )
  }

}

export default Dashboard