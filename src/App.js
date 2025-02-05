import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './style.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import CreateMeal from './components/CreateMeal';
import EditMeal from './components/EditMeal';
import NotFoundPage from './components/NotFoundPage';
import LoginRegisterContainer from './components/LoginRegisterContainer';
import React from 'react';

function App () {
  return (
    <Router>
      <div className='main' >
        <Switch>
          <Route path='/' component={Home} exact={true}></Route>
          <Route path='/login-register' component={LoginRegisterContainer} />
          <Route path='/dashboard' component={Dashboard} exact />
          <Route path='/create-meal' component={CreateMeal} exact />
          <Route path='/edit-meal/:id' component={EditMeal} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
