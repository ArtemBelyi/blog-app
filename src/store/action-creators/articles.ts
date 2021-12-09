import { Dispatch } from "react"
import { ArticlesActionTypes, ArticlesAction } from "../../types/articles"
import axios from 'axios'

const API_URL = 'http://kata.academy:8022/'

export const fetchArticlesNoAuth = () => {
    return async (dispatch: Dispatch<ArticlesAction>) => {
        try {
            dispatch({type: ArticlesActionTypes.FETCH_ARTICLES})
            const response = await axios.get(`${API_URL}articles`)
            dispatch({type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS, payload: response.data.articles})
        } catch (e) {
            dispatch({type: ArticlesActionTypes.FETCH_ARTICLES_ERROR, payload: 'Что-то пошло не так!'})
        }
    }
}