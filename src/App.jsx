import React from 'react';
import { ListScreen, CreateScreen } from './screens';
import { AppHeader } from './shared';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateProvider } from "./store";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <StateProvider>
      <Router>
        <AppHeader />
        <Route path='/tasks' component={ListScreen} />
        <Route path='/create' component={CreateScreen} />
      </Router>
    </StateProvider>
  );
}

export default App;
