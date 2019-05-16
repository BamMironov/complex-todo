import React from 'react';
import { ListScreen } from './screens';
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
      </Router>
    </StateProvider>
  );
}

export default App;
