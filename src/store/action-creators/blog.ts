import { Dispatch } from "react"
import { BlogActionTypes, BlogAction } from "../../types/blog"
import axios from 'axios'

const API_URL = 'https://api.realworld.io/api/'

export const fetchBlog = (slug: string | undefined) => {
    return async (dispatch: Dispatch<BlogAction>) => {
        try {
            dispatch({type: BlogActionTypes.FETCH_BLOG})
            const response = await axios.get(`${API_URL}articles/${slug}`)
            dispatch({type: BlogActionTypes.FETCH_BLOG_SUCCESS, payload: response.data.article})
        } catch (e) {
            dispatch({type: BlogActionTypes.FETCH_BLOG_ERROR, payload: 'Что-то пошло не так!'})
        }
    }
}