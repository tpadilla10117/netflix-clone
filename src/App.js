import React, {useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { HomeScreen, LoginScreen } from './utils';
import {auth} from './firebase';

import './App.css';

function App() {

  const user = null;

/* Listens to authenticated state change: */
  useEffect( () => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //Logged in
        console.log(userAuth)
      } else {
        //logged out
      }
    })

    return unsubscribe;
  }, [])

  return (
    <div className="App">

        <Router>

          {!user ? (
            <LoginScreen />
          ) : (
            <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/test">
              <h1>Test Route</h1>
            </Route>
          </Switch>

          )}
    
      
         </Router>

    </div>
  );
}

export default App;
