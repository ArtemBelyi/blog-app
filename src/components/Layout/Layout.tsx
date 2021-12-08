import React from 'react';
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../Navbar/Navbar';

const Layout = () => {

    return (
        <>
        <header>
            <NavbarComponent />
        </header>
            <Outlet />
        </>
    )   
}
export default Layout