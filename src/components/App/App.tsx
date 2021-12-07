import React from 'react';
import NavbarComponent from '../Navbar/Navbar';
import Layout from '../Layout/Layout';
import UserAvatar from '../UserAvatar/UserAvatar';
import CardList from '../CardsList/CardList';
import FormCreateAcc from '../Forms/CreateAccount/FormCreateAcc';
import FormSignIn from '../Forms/SignIn/FormSignIn';
import FormEditProfile from '../Forms/EditProfile/FormEditProfile';

const App = () => {

    return (
        <div className="app">
            <NavbarComponent />
            <CardList />
        </div>
    )
}
export default App