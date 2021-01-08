import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App () {
  return (
    <Router>
      <div className='main' >
        <Switch>
          <Route path='/' component={Home} exact={true}></Route>
          <Route path='/dashboard' component={Dashboard} exact></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
