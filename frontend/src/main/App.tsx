import React, {useCallback, useEffect} from 'react';
import {BrowserRouter, Switch, Route, useLocation, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Navigation from '../components/Navigation';
import { AppContainer } from "./App.styles";
import {onCheckLogin} from "../pages/Login/redux";
import {RootState} from "../config/store";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    performCheckLogin();
  }, [location]);
  const performCheckLogin = useCallback(() => {
    dispatch(onCheckLogin());
  }, [dispatch]);

  const user = useSelector((state: RootState) => state.user);

  return (
    <AppContainer>
      <Navigation/>
      {!user.loggedIn ? (
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Redirect to={'/login'} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path='/' component={Home}/>
          <Redirect to={'/'} />
        </Switch>
      )}
    </AppContainer>
  );
}

export default App;
