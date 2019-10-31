import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Component Imports
import Landing from './components/layout/Landing';
import Dashboard from './components/layout/Dashboard';
import Search from './components/feature/Search';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/search" exact component={Search} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
