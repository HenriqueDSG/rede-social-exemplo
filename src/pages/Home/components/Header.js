import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(
    {
       appBar:
       {
           boxShadow: 'none'
       },

       img:
       {
           maxHeight: 55,
       },

       grow:
       {
           flexGrow: 1
       },

       userSection:
       {
            display: 'flex',
            alignItems: 'center'
       },

       button:
       {
           //marginRight: 10
       },
       
       bell:
       {
            marginRight: 10,
            marginLeft: 10
       }
    })

const Header = () => 
{
    const classes = useStyles();
    const usuario = null;

    return ( 
        <AppBar className={classes.appBar} position="fixed" color="inherit">
            <Toolbar>
                <img src="/images/logo.png" alt="logo" className={classes.img}/>
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <Button variant="contained" color="primary" className={classes.button}> Novo Post </Button>
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="Usuario" src={usuario && usuario.avatar} />
                </div>
                {/* <div>
                    <a href="/"> Conecta Dev </a>
                </div>
                <div>
                    
                    <span> img1 </span>
                    <span> img2 </span>
                </div> */}
            </Toolbar>
        </AppBar>
     );
}
 
export default Header;