import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/Homepage'
import './App.css';

var http = require("http");
setInterval(function() {
    http.get("http://www.racheltezzadev.com/");
}, 1800000);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
