import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.config.js';
import { UserContext } from '../../../App.js';
import Navbar from '../Navbar/Navbar';
const Login = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
      if (firebase.apps.length === 0) {

          firebase.initializeApp(firebaseConfig);

    }
    
      var provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {
                    displayName,
                    email
                } = result.user;
                const signedInUser = {
                    name: displayName,
                    email
                };
              
                setLoggedInUser(signedInUser);
                history.replace(from);
       
            }).catch((error) => {
 
                var errorMessage = error.message;
    
            });
    }
    return (
        <div>
            <Navbar></Navbar>
              <div style={{textAlign: 'center'}}>
            
            <h1>hello{ }</h1>
             <button onClick={handleSignIn}>Log In Using Google </button>
            
            
        
             </div>
       </div>
    );
}

export default Login;
