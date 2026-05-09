const form = document.querySelector("#formRegistro");
form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    const newUser = {
        id: Date.now(),
        email,
        password,
        role: "client"
    };
    const usersStorage = localStorage.getItem("users");
    const users = usersStorage
        ? JSON.parse(usersStorage)
        : [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Usuario registrado correctamente");
    form.reset();
});
export {};
//# sourceMappingURL=registro.js.map