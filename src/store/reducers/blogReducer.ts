import { BlogState, BlogAction, BlogActionTypes } from "../../types/blog";

const initialState: BlogState = {
    article: {
        slug: "",
        title: "",
        description: "",
        body: "",
        tagList: [],
        createdAt: "",
        updatedAt: "",
        favorited: false,
        favoritesCount: 0,
        author: {
            username: "",
            bio: null,
            image: "",
            following: false
        }
    },
    loading: false, 
    error: null
}

export const blogReducer = (state = initialState, action: BlogAction): BlogState => {
    switch (action.type) {
        case BlogActionTypes.FETCH_BLOG:
            return {...state, loading: true}
        case BlogActionTypes.FETCH_BLOG_SUCCESS:
            return {...state, loading: false, error: null, article: action.payload}
        case BlogActionTypes.FETCH_BLOG_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}