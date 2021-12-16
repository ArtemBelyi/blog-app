import { Dispatch } from "react"
import { UserActionTypes, UserAction } from "../../types/user";
import { ValuesForm } from "../../components/Forms/SignIn/FormSignIn";
import axios from 'axios'

const API_URL = 'http://kata.academy:8022/'

interface UserForm {
    user: ValuesForm
}

export const loginUser = (data: UserForm, fn: Function) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await axios.post(`${API_URL}users/login`, data)
            dispatch({type: UserActionTypes.LOGIN_USER_SUCCESS, payload: response.data.user})
            fn()
        } catch (e) {
            dispatch({type: UserActionTypes.LOGIN_USER_ERROR, payload: 'Incorrect email or password'})
        }
    }
}
