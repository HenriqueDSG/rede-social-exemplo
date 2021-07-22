import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FormHelperText, Grid, Link } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import  LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import authService from '../../services/authService';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => 
({
    root:
    {
        height: '100vh'
    },

    image:
    {
        backgroundImage: 'url(/images/fundo.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        padding: theme.spacing(2),
        textAlign: "center"
    },

    avatar:
    {
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1)
    },

    button:
    {
        marginTop: theme.spacing(1)
    },

    form:
    {
        margin: theme.spacing(2, 4)
    },

    grow:
    {
        flexGrow: 1
    }
}));

function CopyRight () 
{
    return(
        <Typography variant="body2" align="center" style={{position: "absolute", bottom: 0}}>
             {'CopyRight @ '} 
             <a color="inherit" href="/">Henrique Garcia</a> 
             {" " + new Date().getFullYear() }
        </Typography>
    )
}

const SignIn = () => 
{
    const classes = useStyles();
    const navigate = useNavigate();
    const [campoEmail, setCampoEmail] = useState([]);
    const [campoSenha, setCampoSenha] = useState([]);
    const [mensagemErro, setMensagemErro] = useState([]);
    const dispatch = useDispatch();
    const account = useSelector(state => state);
    console.log(account);

    const pegarCampoEmail = (evento) => 
    {
        setCampoEmail(evento.target.value);
        setMensagemErro("");
    }

    const pegarCampoSenha = (evento) => 
    {
        setCampoSenha(evento.target.value);
        setMensagemErro("");
    }

    const handleSignIn = async () =>
    {
        try 
        {
            const usuario = { email: campoEmail, senha: campoSenha };

            await authService.signIn(usuario);
            navigate("/");
        } 
        catch (error) 
        {
            setMensagemErro(error.response.data.message);
        }
    }

    return (
        <Grid className={classes.root} container>
            <Grid 
                item
                container 
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.image}
                md={7}>
                <Typography style={{color: '#fff', fontSize: 35, lineHeight: '45px'}}>
                    <strong> Titulo em destaque teste </strong>
                </Typography>
                <Typography variant="body2" style={{color: 'rgb(255,255,255,0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px'}}> 
                    Subtitulo teste
                </Typography>
            </Grid>
            <Grid item md={5}>
                <Box display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt={8}>
                    <Avatar className={classes.avatar}> <LockOutlinedIcon /> </Avatar>
                    <Typography variant="h5"> Acesso </Typography>
                    <form className={classes.form}>
                        <TextField 
                            variant="outlined" 
                            margin="normal" 
                            required 
                            fullWidth 
                            id="email" 
                            autoComplete="email" 
                            name="email" 
                            label="E-mail" 
                            autoFocus 
                            onChange={e => pegarCampoEmail(e)} />
                        <TextField 
                            variant="outlined" 
                            margin="normal" 
                            required 
                            fullWidth 
                            type="password" 
                            id="password" 
                            autoComplete="current-password" 
                            name="password" 
                            label="Senha" 
                            onChange={e => pegarCampoSenha(e)} />
                            { mensagemErro && <FormHelperText error>{ mensagemErro }</FormHelperText> }
                        <Button 
                            className={classes.button} 
                            fullWidth 
                            variant="contained" 
                            color="primary" 
                            onClick={handleSignIn}> Entrar </Button>
                        <Grid container>
                            <Grid item> <Link> Esqueceu sua senha? </Link> </Grid>
                            <div className={classes.grow}></div>
                            <Grid item> <Link> Não tem uma conta? Registre-se! </Link> </Grid>
                        </Grid>
                    </form>
                    <CopyRight />
                </Box>
            </Grid>
        </Grid>
      );
}
 
export default SignIn;