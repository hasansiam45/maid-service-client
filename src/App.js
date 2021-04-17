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
import AddReview from './components/Home/AddReview/AddReview';

import { createContext, useState } from 'react';
import Login from './components/Home/Login/Login';
import Navbar from './components/Home/Navbar/Navbar';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';
import Book from './components/Home/Book/Book';
import Bookings from './components/Dashboard/Bookings/Bookings';
import AllBookings from './components/Dashboard/AllBookings/AllBookings';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
  
   <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
       
      <Switch>
         
          
          <Route path="/home">
          <Home></Home>
          </Route>
          
         <Route path="/dashboard">
          <Dashboard></Dashboard>
          </Route>
          
          <PrivateRoute path="/addServices">
          <AddServices></AddServices>
          </PrivateRoute>

          <PrivateRoute path="/addReview">
          <AddReview></AddReview>
          </PrivateRoute>
          
          <Route path="/login">
           <Login></Login>
          </Route>
          
          <PrivateRoute path="/book/:id">
           <Book></Book>
          </PrivateRoute>
          
           <PrivateRoute path="/bookings">
          <Bookings></Bookings>
          </PrivateRoute>
          
           <PrivateRoute path="/allBookings">
          <AllBookings></AllBookings>
          </PrivateRoute>

          <PrivateRoute path="/manageServices">
          <ManageServices></ManageServices>
          </PrivateRoute>

        <Route exact path="/">
          <Home></Home>
          </Route>
       
      </Switch>
    
      </Router>
      
      </UserContext.Provider>
      
  );
}

export default App;
