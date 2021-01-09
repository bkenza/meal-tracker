import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import CreateMeal from './components/CreateMeal';

function App () {
  return (
    <Router>
      <div className='main' >
        <Switch>
          <Route path='/' component={Home} exact={true}></Route>
          <Route path='/dashboard' component={Dashboard} exact />
          <Route path='/create-meal' component={CreateMeal} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
