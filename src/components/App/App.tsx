import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout/Layout';
import CardList from '../CardsList/CardList';
import FormCreateAcc from '../Forms/CreateAccount/FormCreateAcc';
import FormSignIn from '../Forms/SignIn/FormSignIn';
import FormEditProfile from '../Forms/EditProfile/FormEditProfile';
import BlogPage from '../BlogPage/BlogPage';
import CreateNewArticle from '../Forms/CreateArticle/NewArticle';

const App = () => {

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<CardList />} />
                    <Route path="articles" element={<CardList />} />
                    <Route path="articles/new" element={<CreateNewArticle />} />
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