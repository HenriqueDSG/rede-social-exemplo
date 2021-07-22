import React from 'react';
import Home from './pages/Home';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./mock";
import GuestRoute from "../src/routes/GuestRoute"
import { Provider } from "react-redux";
import store from './store';

function App() 
{
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home /> }> </Route>
            <GuestRoute path="/sign-in" element={ <SignIn /> } /> 
            <Route path="*" element={ <h1> 404 - Page Not Found!</h1> }> </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;