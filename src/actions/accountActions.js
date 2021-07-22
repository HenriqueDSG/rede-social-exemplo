const signIn = (usuario) => 
{
    return (dispatch) => 
    {
        dispatch(
            {
                type: "LOGIN_SUCESS",
                payload:
                {
                    usuario:
                    {
                        id: 1,
                        name: "admin",
                        userName: "admin",
                        email: "admin",
                        avatar: "/images/avatars/avatar.jpg"
                    }
                }
            }
        )
    };
}
 
export default signIn;