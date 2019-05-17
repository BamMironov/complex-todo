import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export function MainScreen() {
    return (
        <Jumbotron>
            <Container>
                <h1 className="display-3">Complex TODO</h1>
                <p className="lead">This is a complex TODO app written with the modern React hooks.</p>
                <p className="lead">Please test it. Let's get started with creating some tasks. <NavLink to='/create'>Go here.</NavLink></p>
            </Container>
        </Jumbotron>
    );
}