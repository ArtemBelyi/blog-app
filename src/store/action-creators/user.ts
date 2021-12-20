import { Dispatch } from "react"
import { UserActionTypes, UserAction } from "../../types/user";
import { ValuesForm } from "../../components/Forms/SignIn/FormSignIn";
import axios from 'axios'

const API_URL = 'http://kata.academy:8022/'

interface UserForm {
    user: ValuesForm
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
        }
    }
}
