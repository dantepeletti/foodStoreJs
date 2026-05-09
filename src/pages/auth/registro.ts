import type { IUser } from "../../types/IUsers";

const form = document.querySelector<HTMLFormElement>("#formRegistro");

form?.addEventListener("submit", (event) => {

    event.preventDefault();

    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const newUser: IUser = {
        id: Date.now(),
        email,
        password,
        role: "client"
    };

    const usersStorage = localStorage.getItem("users");

    const users: IUser[] = usersStorage
        ? JSON.parse(usersStorage)
        : [];

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Usuario registrado correctamente");

    form.reset();
});