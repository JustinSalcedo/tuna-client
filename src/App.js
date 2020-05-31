import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { TemplateDashboard } from './components/templates/TemplateDashboard'
import { ModelDashboard } from './components/models/ModelDashboard'
import { SectionDashboard } from './components/sections/SectionDashboard'

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/templates" component={TemplateDashboard} />
      <Route path="/models" component={ModelDashboard} />
      <Route path="/sections" component={SectionDashboard} />
    </Router>
  );
}

export default App;
