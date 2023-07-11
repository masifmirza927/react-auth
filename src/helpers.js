
export const getToken = () => {
    const token  = localStorage.getItem("ssid");
    return token;
}

export const setToken = (token) => {
    localStorage.setItem("ssid", token);
}

export const removeToken = () => {
    localStorage.removeItem("ssid");
    return true;
}