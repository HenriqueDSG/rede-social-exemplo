import React from 'react';
import Home from './pages/Home';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./mock";


function App() 
{
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/sign-in" element={<SignIn />}> </Route>
            <Route path="*" element={<h1> 404 - Page Not Found!</h1>}> </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;