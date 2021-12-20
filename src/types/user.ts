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
    LOGIN_USER = 'LOGIN_USER',
    LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
    LOGIN_USER_ERROR = 'LOGIN_USER_ERROR',
    IS_LOGGED = 'IS_LOGGED'
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

export type UserAction = LoginUserAction 
    | LoginUserSuccessAction
    | LoginUserErrorAction
    | IsLoggedAction