import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from "../helpers";
import { AuthContext } from '../context/AuthContext';


function Nav() {
    const UserContext = useContext(AuthContext);

    console.log("contextUser: ",  UserContext);
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
                                    (UserContext.user !== null) ? UserContext.user.name : null
                                }
                            </li>

                            <li className="nav-item">
                                {
                                    (UserContext.user === null) ?  <Link className=" btn btn-dark mx-2" to="/login">Login</Link> : <Link className=" btn btn-dark mx-2" to="/logout">Logout</Link>
                                }
                            </li>
                            {
                                (UserContext.user === null ) ? <li className="nav-item"> <Link className=" btn btn-dark" to="/register">Register</Link></li> : null
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav