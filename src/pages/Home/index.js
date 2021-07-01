import React from 'react';
import Header from './components/Header';
import { makeStyles } from '@material-ui/core/styles';
//import "./style.css"
import NavBar from './components/NavBar';
import Feed from './components/Feed';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(
    {
        root: 
        {
            display: 'flex',
            flexDirection: 'column'
        },
        main:
        {
            height: '100vh',
            padding: 24
        },
        toolBar:
        {
            height: 64,
        }
    })

const Home = () => 
{
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.toolBar}> toolBar </div>
            <Header />
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Box display='flex'>
                        <NavBar />
                        <Feed />
                    </Box>
                </Container>
            </main>
        </div>
    );
}
 
export default Home;