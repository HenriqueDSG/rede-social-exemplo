import mock from "../utils/mock"

const emailPadrao = "admin";
const senhaPadrao = "admin";

mock.onPost("/api/home/login")
    .reply((config) =>
    {
        const { email, senha } = JSON.parse(config.data);

        if (email !== emailPadrao || senha !== senhaPadrao) 
        {
            return [400, { message: "Email ou senha incorretos!"}]
        }

        const usuario = 
        {
            id: 1,
            name: "admin",
            userName: "admin",
            email: "admin",
            avatar: "/images/avatars/avatar.jpg"
        }

        return [200, { usuario }]
    });