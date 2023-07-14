import jwtDecode from "jwt-decode";

// signout the user
export const removeToken = () => {
    localStorage.removeItem("token");
    return true;
}

// get the user details
export const getUser = () => {
    const token = localStorage.getItem("token");
    if(token) {
        return jwtDecode(token);
    }
    return null;
}
