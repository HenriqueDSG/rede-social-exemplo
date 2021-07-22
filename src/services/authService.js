import axios from "../utils/axios";

class AuthService
{
    signIn = (usuario) =>
    {
        return new Promise((resolve, reject) => 
        {
            axios.post("/api/home/login", usuario)
            .then(response => 
            {
                if(response.data.usuario)
                {
                    resolve(response.data.usuario)
                    //this.setUsuario(response.data.usuario)
                }
                else reject(response.data.error)
            })
            .catch(error => reject(error))
        })
    }

    setUsuario = (usuario) =>
    {
        const usuarioJson = JSON.stringify(usuario);
        localStorage.setItem("usuario", usuarioJson); // salva nos dados do navegador o usuario, para conferir se esta logado
    }

    getUsuario = () =>
    {
        const usuario = localStorage.getItem("usuario"); // pega os dados do navegador o usuario

        if(usuario)
        {
            return JSON.parse(usuario)
        }

        return usuario;
    }

    isAuthenticated = () => !!this.getUsuario();
}

const authService = new AuthService(); 

export default authService;