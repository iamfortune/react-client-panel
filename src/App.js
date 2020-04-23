import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/layout/AppNavbar';

function App() {
  return (
    <Router>
    <div className="App">
      <AppNavbar />
      <h1>Hello</h1>
    </div>
    </Router>
  );
}

export default App;
