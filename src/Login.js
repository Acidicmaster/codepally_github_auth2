import React from 'react';
import GitHubLogin from 'react-github-login';
import Main from "./Main/Main"
import NotFound from "./Main/NotFound"

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const onSuccess = response => {
  window.open("http://localhost:3000/login/github/callback")
  window.localStorage.setItem("code", response.code)
  console.log(response)
};
const onFailure = response => console.error(response);

function Login() {
  return (
    <Router>
      <Switch>
    <GitHubLogin clientId="Iv1.bf885e361764b117"
      redirectUri=''
      onSuccess={onSuccess}
      onFailure={onFailure}/>
  
  <Route path="/login/github/callback" component={Main}/>
  <Route component={NotFound}/>
  </Switch>
  </Router>
  );
}

export default Login;
