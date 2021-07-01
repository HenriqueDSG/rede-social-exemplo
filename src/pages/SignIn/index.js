import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => 
({
    root:
    {
        display: 'flex',
        height: '100vh'
    },
    left:
    {
        background: 'blue',
        flexBasis: '58%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    right:
    {
        background: 'yellow',
        flexBasis: '42%'
    }
}))

const SignIn = () => 
{
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}> 
                <div className={classes.left}>
                    <h2>Titulo</h2>
                    <h4>sub Titulo</h4>
                </div>
                <div className={classes.right}>Form</div>
            </div>
        </>
      );
}
 
export default SignIn;