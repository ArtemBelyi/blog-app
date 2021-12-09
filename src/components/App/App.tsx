import React from 'react';
import { Routes, Route } from 'react-router-dom'
import NavbarComponent from '../Navbar/Navbar';
import Layout from '../Layout/Layout';
import UserAvatar from '../UserAvatar/UserAvatar';
import CardList from '../CardsList/CardList';
import FormCreateAcc from '../Forms/CreateAccount/FormCreateAcc';
import FormSignIn from '../Forms/SignIn/FormSignIn';
import FormEditProfile from '../Forms/EditProfile/FormEditProfile';
import BlogPage from '../BlogPage/BlogPage';

const App = () => {

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<CardList />} />
                    <Route path="articles" element={<CardList />} />
                    <Route path="articles/:slug" element={<BlogPage />} />
                    <Route path="signup" element={<FormCreateAcc />} />
                    <Route path="signin" element={<FormSignIn />} />
                    <Route path="*" element={<FormEditProfile />} />
                </Route>
            </Routes>
        </div>
    )
}
export default App