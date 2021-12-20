import React from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import UserAvatar from '../UserAvatar/UserAvatar';
const styles = require('./Navbar.module.scss')

const NavbarComponent = () => {
    const {user, isAuth} = useTypedSelector(state => state.user)

    const sign = !isAuth ? <NavLink className={styles['link'] + ' ' + styles['link_active']} to ="/signup">Sign Up</NavLink>
        : <NavLink className={styles['link-out'] + ' ' + styles['link-out_active']} to ="/signup">Sign Out</NavLink>
    const avatar = !isAuth ? <NavLink className={styles['link-in']} to ="/signin">Sign In</NavLink> 
        : <NavLink className={styles['link-profile']}to ="/profile"><UserAvatar author={ JSON.parse(sessionStorage.user) || user} /></NavLink>
    const createArticle = <NavLink className={styles['link'] + ' ' + styles['link_active']} to ="articles/new">Create article</NavLink>

    return (
        <Navbar collapseOnSelect expand="lg" >
            <Container>
            <Navbar.Brand><NavLink className={styles['link-title']} to ="/articles">Realworld Blog</NavLink> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end m-2'>
                <Nav>
                    {isAuth && createArticle}
                    {avatar}
                    {sign}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavbarComponent