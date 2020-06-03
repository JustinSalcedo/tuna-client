import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { TemplateDashboard } from './components/templates/TemplateDashboard'
import { ModelDashboard } from './components/models/ModelDashboard'
import { SectionDashboard } from './components/sections/SectionDashboard'
import { ComponentDashboard } from './components/components/ComponentDashboard'
import { StylesMenu } from './components/styles/StylesMenu'

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/templates" component={TemplateDashboard} />
      <Route path="/models" component={ModelDashboard} />
      <Route path="/sections" component={SectionDashboard} />
      <Route path="/components" component={ComponentDashboard} />
      <Route path="/styles" component={StylesMenu} />
    </Router>
  );
}

export default App;
