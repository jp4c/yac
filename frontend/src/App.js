import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Room from './components/Room/Room';
import { Provider } from 'react-redux';
import rootReducer from './redux/store'
import { createStore } from 'redux';
const store = createStore(rootReducer)
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/chat" component={Room} />
      </Router>
    </Provider>
  );
}

export default App;
