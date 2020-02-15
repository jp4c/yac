import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Room from './components/Room';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/chat" component={Room} />
    </Router>
  );
}

export default App;
