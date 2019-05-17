import React from 'react';
import { ListScreen, CreateScreen, MainScreen } from './screens';
import { AppHeader } from './shared';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateProvider } from "./store";
import { FormTypes } from './enums';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import './App.scss';

function App() {
  return (
    <StateProvider>
      <Router>
        <AppHeader />
        <Switch>
          <Route exact path='/' component={MainScreen} />
          <Route path='/tasks' component={ListScreen} />
          <Route path='/create' render={props => <CreateScreen {...props} type={FormTypes.New} />} />
          <Route path='/edit' render={props => <CreateScreen {...props} type={FormTypes.Edit} />} />
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
