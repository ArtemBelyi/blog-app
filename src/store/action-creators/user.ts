import { Dispatch } from "react"
import { UserActionTypes, UserAction } from "../../types/user";
import { ValuesForm } from "../../components/Forms/SignIn/FormSignIn";
import { ValuesFormEdit } from "../../components/Forms/EditProfile/FormEditProfile";
import { FormRegisterUser } from "../../components/Forms/CreateAccount/FormCreateAcc";
import axios from 'axios'

const API_URL = 'https://api.realworld.io/api/'

interface UserForm {
    user: ValuesForm
}

interface ProfileEdit {
    user: ValuesFormEdit
}

interface RegisterUser {
    user: FormRegisterUser
}

export const loginUser = (data: UserForm, route: Function) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await axios.post(`${API_URL}users/login`, data)
            sessionStorage.user = JSON.stringify(response.data.user)
            dispatch({type: UserActionTypes.LOGIN_USER_SUCCESS, payload: response.data.user})
            route()
        } catch (e) {
            dispatch({type: UserActionTypes.LOGIN_USER_ERROR, payload: 'Incorrect email or password'})
        }
    }
}

export const isLogged = () => {
    return (dispatch: Dispatch<UserAction>) => {
        if (sessionStorage.user) {
            dispatch({type: UserActionTypes.IS_LOGGED})
        } else {
            dispatch({type: UserActionTypes.IS_LOGGED_OUT})
        }
    }
}

export const editProfile = (data: ProfileEdit, message: Function, removeField: Function ) => {
    const TOKEN = `Token ${JSON.parse(sessionStorage.user).token}`
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await axios.put(`${API_URL}user`, data, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    'Authorization': TOKEN
                }
            })
            sessionStorage.user = JSON.stringify(response.data.user)
            dispatch({type: UserActionTypes.EDIT_PROFILE_SUCCESS, payload: response.data.user})
            message()
            removeField()
        } catch (e) {
            dispatch({type: UserActionTypes.EDIT_PROFILE_ERROR, payload: 'Error saving changes'})
        }
    }
}

export const registerUser = (data: RegisterUser, route: Function) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await axios.post(`${API_URL}users`, data)
            sessionStorage.user = JSON.stringify(response.data.user)
            dispatch({type: UserActionTypes.REGISTER_USER_SUCCESS, payload: response.data.user})
            route()
        } catch (e) {
            dispatch({type: UserActionTypes.REGISTER_USER_ERROR, payload: 'Error create new user'})
        }
    }
}

