import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigator = useNavigate();

    const handleLogin = () => {
        setIsLoading(true);
        axios.post("http://localhost:3003/login", {
            email: email,
            password: password
        }).then((response) => {
            console.log(response.data);
            if (response.data.status === false) {
                setError(response.data.message);
            }
            if (response.data.status === true) {
                setError(null);
                localStorage.setItem("ssid", response.data.token);
                navigator("/");
            }
            setIsLoading(false);
        }).catch( (err) => {
            setIsLoading(false);
            console.log(err.message)
        })
    }

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()} style={{ width: "600px", margin: "20px auto" }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Don't have account?
                    </label>
                    <Link to="/register" className='mx-2 link'>Register</Link>
                </div>
                <div>
                    {
                        (error !== null) ? <div className='alert alert-danger'>{error}</div> : null
                    }
                </div>
                <button type="submit" onClick={handleLogin} className="btn btn-dark" disabled={(isLoading == true) ? true: false}> {isLoading ? "Loading...": "Login"}</button>
            </form>
        </>
    )
}

export default Login