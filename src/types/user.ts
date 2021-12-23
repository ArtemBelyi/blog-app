export interface UserState {
    user: User,
    isAuth: boolean,
    loading: boolean,
    error: null | string
}

export interface Profile {
    username: string,
    bio: null,
    image: string,
    following: boolean
}

export interface User {
    email: string,
    username: string,
    token: string,
    bio: string,
    image: string
}

export enum UserActionTypes {
    REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS',
    REGISTER_USER_ERROR = 'REGISTER_USER_ERROR',
    LOGIN_USER = 'LOGIN_USER',
    LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
    LOGIN_USER_ERROR = 'LOGIN_USER_ERROR',
    IS_LOGGED = 'IS_LOGGED',
    IS_LOGGED_OUT = 'IS_LOGGED_OUT',
    EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS',
    EDIT_PROFILE_ERROR = 'EDIT_PROFILE_ERROR'
}
interface RegisterUserSuccessAction {
    type: UserActionTypes.REGISTER_USER_SUCCESS
    payload: User
}

interface RegisterUserErrorAction {
    type: UserActionTypes.REGISTER_USER_ERROR
    payload: string
}

interface LoginUserAction {
    type: UserActionTypes.LOGIN_USER
}

interface LoginUserSuccessAction {
    type: UserActionTypes.LOGIN_USER_SUCCESS
    payload: User
}

interface LoginUserErrorAction {
    type: UserActionTypes.LOGIN_USER_ERROR
    payload: string
}

interface IsLoggedAction {
    type: UserActionTypes.IS_LOGGED
}

interface IsLoggedOutAction {
    type: UserActionTypes.IS_LOGGED_OUT
}

interface EditProfileAction {
    type: UserActionTypes.EDIT_PROFILE_SUCCESS
    payload: User
}

interface EditProfileErrorAction {
    type: UserActionTypes.EDIT_PROFILE_ERROR
    payload: string
}

export type UserAction = LoginUserAction 
    | LoginUserSuccessAction
    | LoginUserErrorAction
    | IsLoggedAction
    | EditProfileAction
    | EditProfileErrorAction
    | RegisterUserSuccessAction
    | RegisterUserErrorAction
    | IsLoggedOutAction