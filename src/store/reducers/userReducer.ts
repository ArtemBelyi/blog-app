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
        default:
            return state
    }
}