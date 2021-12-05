import React from 'react';
import NavbarComponent from '../Navbar/Navbar';
import Layout from '../Layout/Layout';
import UserAvatar from '../UserAvatar/UserAvatar';
import Card from '../Card/Card';

const App = () => {

    return (
        <div className="app">
            <NavbarComponent />
            <Card />
        </div>
    )
}
export default App