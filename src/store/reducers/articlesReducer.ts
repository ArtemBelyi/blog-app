import { ArticlesState, ArticlesAction, ArticlesActionTypes } from "../../types/articles";

const initialState: ArticlesState = {
    articles: [],
    loading: false, 
    error: null
}

export const articlesReducer = (state = initialState, action: ArticlesAction): ArticlesState => {
    switch (action.type) {
        case ArticlesActionTypes.FETCH_ARTICLES:
            return {...state, loading: true, error: null, articles: []}
        case ArticlesActionTypes.FETCH_ARTICLES_SUCCESS:
            return {...state, loading: false, error: null, articles: action.payload}
        case ArticlesActionTypes.FETCH_ARTICLES_ERROR:
            return {...state, loading: false, error: action.payload, articles: []}
        default:
            return state
    }
}