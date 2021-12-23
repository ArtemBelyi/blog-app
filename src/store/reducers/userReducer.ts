import { UserActionTypes, UserAction, UserState } from "../../types/user";

const initialState: UserState = {
    user: {
        email: '',
        username: '',
        token: '',
        bio: '',
        image: ''
    },
    isAuth: false,
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.LOGIN_USER:
            return {...state, loading: true}
        case UserActionTypes.LOGIN_USER_SUCCESS:
            return {isAuth: true, loading: false, error: null, user: action.payload}
        case UserActionTypes.LOGIN_USER_ERROR:
            return {...state, loading: false, error: action.payload}
        case UserActionTypes.IS_LOGGED:
            return {...state, isAuth: true}
        case UserActionTypes.IS_LOGGED_OUT:
            return {...state, isAuth: false}
        case UserActionTypes.EDIT_PROFILE_SUCCESS:
            return {...state, isAuth: true, user: action.payload}
        case UserActionTypes.EDIT_PROFILE_ERROR:
            return {...state, loading: false, error: action.payload}
        case UserActionTypes.REGISTER_USER_SUCCESS:
            return {...state, isAuth: true, user: action.payload}
        case UserActionTypes.REGISTER_USER_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}