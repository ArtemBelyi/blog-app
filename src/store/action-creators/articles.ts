import { Dispatch } from "react"
import { ArticlesActionTypes, ArticlesAction } from "../../types/articles"
import axios from 'axios'

const API_URL = 'https://api.realworld.io/api/'

export const fetchArticlesNoAuth = () => {
    return async (dispatch: Dispatch<ArticlesAction>) => {
        try {
            dispatch({type: ArticlesActionTypes.FETCH_ARTICLES})
            const response = await axios.get(`${API_URL}articles?limit=100`)
            dispatch({type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS, payload: response.data.articles})
        } catch (e) {
            dispatch({type: ArticlesActionTypes.FETCH_ARTICLES_ERROR, payload: 'Что-то пошло не так!'})
        }
    }
}
export const fetchArticlesAuth = () => {
    const TOKEN = `Token ${JSON.parse(sessionStorage.user).token}`
    return async (dispatch: Dispatch<ArticlesAction>) => {
        try {
            dispatch({type: ArticlesActionTypes.FETCH_ARTICLES})
            const response = await axios.get(`${API_URL}articles?limit=100`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    'Authorization': TOKEN
                }
            })
            dispatch({type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS, payload: response.data.articles})
        } catch (e) {
            dispatch({type: ArticlesActionTypes.FETCH_ARTICLES_ERROR, payload: 'Что-то пошло не так!'})
        }
    }
}