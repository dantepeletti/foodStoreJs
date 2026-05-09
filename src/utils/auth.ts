export const getUserData = () => {

    return JSON.parse(
        localStorage.getItem("userData") || "null"
    );

};

export const isAuthenticated = () => {

    return !!getUserData();

};

export const logout = () => {

    localStorage.removeItem("userData");

};

export const isAdmin = () => {

    const user = getUserData();

    return user?.role === "admin";

};