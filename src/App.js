import React, {useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { HomeScreen, LoginScreen, ProfileScreen } from './utils';
import {auth} from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from "./features/userSlice";
import './App.css';

function App() {

  const user = useSelector(selectUser); //we use the selector made in userSlice to get the user info. from the store

  const dispatch = useDispatch(); //to dispatch actions into the global store

/* Listens to authenticated state change: */
  useEffect( () => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //Logged in - dispatches user object into global store
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }) 
        )
        console.log(userAuth)
      } else {
        //logged out - dispatched logout into store
        dispatch(logout())
      }
    })

    return unsubscribe;
  }, [dispatch])

  return (
    <div className="App">

        <Router>

          {!user ? (
            <LoginScreen />
          ) : (
            <Switch>

            <Route path='/profile'>
              <ProfileScreen />
            </Route>

            <Route exact path="/">
              <HomeScreen />
            </Route>
            
          </Switch>

          )}
    
      
         </Router>

    </div>
  );
}

export default App;
