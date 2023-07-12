import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {getToken} from "../helpers";
import { authContext } from '../App';


function Nav() {
    const token = getToken();
    const data = useContext(authContext);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {
                                    (data.isLoggedIn == false) ? <Link className=" btn btn-dark mx-2" to="/login">Login</Link> : <Link className=" btn btn-dark mx-2" to="/logout">Logout</Link>
                                }
                            </li>
                            <li className="nav-item">
                                <Link className=" btn btn-dark" to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav