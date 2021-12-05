import React from 'react';
import NavbarComponent from '../Navbar/Navbar';
import Layout from '../Layout/Layout';
import UserAvatar from '../UserAvatar/UserAvatar';
import CardList from '../CardsList/CardList';
import FormCreateAcc from '../Forms/CreateAccount/FormCreateAcc';

const App = () => {

    return (
        <div className="app">
            <NavbarComponent />
            <FormCreateAcc />
        </div>
    )
}
export default App