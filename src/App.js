import React, { Component } from 'react';
import Home from './screens/Home';
// import Explore from './screens/Explore';
// import Notification from './screens/Notification';
import NewEvent from './screens/NewEvent';
// import Login from './screens/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <Home />
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/newevent' component={NewEvent} />
            {/* <Route path='/login' component={Login} /> */}
            {/* <Route component={FourOFour} /> */}
          </Switch>
        </div>
      </Router>
  );
}

export default App;
