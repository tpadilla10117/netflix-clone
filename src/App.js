import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { HomeScreen, LoginScreen } from './utils';

import './App.css';

function App() {

  const user = null;

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
