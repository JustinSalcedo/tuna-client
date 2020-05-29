import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { TemplateDashboard } from './components/templates/TemplateDashboard'

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/templates" component={TemplateDashboard} />
    </Router>
  );
}

export default App;
