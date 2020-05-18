import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import Login from './routes/Login';
import Shortner from './routes/Shortner';
import Home from './routes/Home'
import Register from './routes/Register'

const NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact>
          <Home {...this.props} />
        </Route>
        <Route path='/register' >
          <Register {...this.props} />
        </Route>
        <Route path='/login'>
          <Login {...this.props} />
        </Route>
        <Route path='/home'>
          <Shortner {...this.props} />
        </Route>
        <Route>
          <NoMatchPage />
        </Route>
      </Switch>
    )
  }
}

export default connect((state) => {
  console.log(state);
  return state;
})(App);