import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { HomeScreen } from './utils';


import './App.css';

function App() {
  return (
    <div className="App">

        <Router>
      
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
      
         </Router>

    </div>
  );
}

export default App;
