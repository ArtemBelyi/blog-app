import React from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';
const styles = require('./Navbar.module.scss')

const NavbarComponent = () => {

    return (
        <Navbar collapseOnSelect expand="lg" >
            <Container>
            <Navbar.Brand><NavLink className={styles['link-title']} to ="/articles">Realworld Blog</NavLink> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end m-2'>
                <Nav>
                    <NavLink className={({isActive}) => isActive ? styles['link'] + ' ' + styles['link_active'] : styles['link']} to ="/signin">Sign In</NavLink> 
                    <NavLink className={({isActive}) => isActive ? styles['link'] + ' ' + styles['link_active'] : styles['link']} to ="/signup">Sign Up</NavLink> 
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavbarComponent