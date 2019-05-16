import React, { useState } from 'react';
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
                    <NavItem>
                        <NavLink href="#" className='text-white'>List</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className='text-white'>Create</NavLink>
                    </NavItem>
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