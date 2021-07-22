import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => 
({
    root:
    {
        padding: theme.spacing(2),
        width: 275,
        marginRight: theme.spacing(2),
        height: 400
    },
    button:
    {
        width: "100%"
    }
}))

const tags = [
    { id: 1, name: "React.JS" },
    { id: 2, name: "JavaScript" },
    { id: 3, name: "dotNet" },
    { id: 4, name: "PHP" },
    { id: 5, name: "CSharp" },
    { id: 6, name: "Python" }
]

const NavBar = () => 
{
    const classes = useStyles();

    return ( 
        
        <Paper className={classes.root}>
            <Button className={classes.button} variant="outlined" color="secondary" href="/sign-in">Registrar Gratis</Button>
            <ListSubheader>{`Tags em Alta`}</ListSubheader>
            {
                tags.map((item) =>
                (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`}></ListItemText>
                    </ListItem>
                ))
            }
            <ListItem button>Exibir mais Tags</ListItem>
        </Paper>
     );
}
 
export default NavBar;