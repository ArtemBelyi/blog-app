import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavbarComponent = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
            <Container>
            <Navbar.Brand>Realworld Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end m-2'>
                <Nav>
                    <Button className='m-2' variant="light">Sign In</Button> 
                    <Button className='m-2' variant="outline-success">Sign Up</Button>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavbarComponent