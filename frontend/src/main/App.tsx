import React from 'react';
import {BrowserRouter, Switch, Route, useLocation} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { AppContainer } from "./App.styles";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
