import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <>
            <form style={{ width: "600px", margin: "20px auto" }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Already registered? 
                    </label>
                    <Link to="/login" className='mx-2 link'>Login</Link>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </>
    )
}

export default Register