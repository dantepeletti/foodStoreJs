import {
    getUserData,
    isAuthenticated,
    isAdmin
} from "./utils/auth.js";

const path = window.location.pathname;

const protectRoutes = () => {

    if(!isAuthenticated()){
        window.location.href =
        "/food_store/src/pages/auth/login/login.html";
        return;
    }

    if(
        path.includes("/admin") &&
        !isAdmin()
    ){
        window.location.href =
        "/food_store/src/pages/cliente.html";
    }
};
protectRoutes();