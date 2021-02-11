import React from 'react'
import './App.css';
import Login from "./Login"
import Main from "./Main/Main"
import NotFound from "./Main/NotFound"
import './bootstrap.min.css';  

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <Router>
    
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/login/github/callback" component={Main}/>
        <Route component={NotFound}/>
      </Switch>
    
  </Router>
  );
}

export default App;
