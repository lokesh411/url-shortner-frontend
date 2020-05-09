import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import Login from './routes/Login';
import Shortner from './routes/Shortner';
import Home from './routes/Home'
import Register from './routes/Register'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact>
          <Home {...this.props} />
        </Route>
        <Route path='/register' exact>
          <Register {...this.props}/>
        </Route>
        <Route path='/login' exact {...this.props}>
          <Login {...this.props} />
        </Route>
        <Route path='/home' exact component={Shortner}>
          <Shortner {...this.props} />
        </Route>
      </Switch>
    )
  }
}

export default connect((state) => {
  console.log(state);
  return state;
})(App);

// export default App;
