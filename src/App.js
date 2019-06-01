import React from 'react';
import Home from './screens/Home';
import NewEvent from './screens/NewEvent';
import Swapi from './screens/Swapi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/newevent' component={NewEvent} />
            <Route path='/swapi' component={Swapi} />
            {/* <Route path='/login' component={Login} /> */}
            {/* <Route component={FourOFour} /> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
