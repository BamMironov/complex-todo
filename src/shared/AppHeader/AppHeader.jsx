import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
    Nav,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse,
    Container
} from 'reactstrap';
import './AppHeader.scss';

export function AppHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const CollapsedMenu = () => {
        return (
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        routes.map(route => {
                            return (
                                <NavItem key={route.id}>
                                    <NavLink tag={RRNavLink} to={route.url} className='text-white'>{route.name}</NavLink>
                                </NavItem>
                            )
                        })
                    }
                </Nav>
            </Collapse>
        )
    }

    return (
        <Navbar color="dark" light expand="md">
            <Container>
                <NavbarBrand href={githubLink} target='_blank' className='text-white'>Complex TODO</NavbarBrand>
                <NavbarToggler onClick={toggle} className='navbar-dark' />
                <CollapsedMenu />
            </Container>
        </Navbar>
    );
}

const githubLink = 'https://github.com/BamMironov/complex-todo';

const routes = [
    {
        name: 'Tasks',
        url: '/tasks',
        id: 1
    },
    {
        name: 'Create',
        url: '/create',
        id: 2
    }
];