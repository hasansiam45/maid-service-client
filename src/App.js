import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddServices from './components/Dashboard/AddServices/AddServices';
function App() {
  return (
    <div className="App">
    <Router>
      
      <Switch>
        
        <Route exact path="/">
          <Home></Home>
          </Route>
          
        <Route path="/dashboard">
          <Dashboard></Dashboard>
          </Route>
          
          <Route path="/addServices">
          <AddServices></AddServices>
          </Route>
      
      </Switch>
    
    </Router>
    </div>
  );
}

export default App;
