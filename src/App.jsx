import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ListScreen } from './screens';
import { AppHeader } from './shared';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Fragment>
      <AppHeader />
      <ListScreen />
    </Fragment>
  );
}

export default App;
