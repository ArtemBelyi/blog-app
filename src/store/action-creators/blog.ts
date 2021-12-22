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

export const addLike = (slug: string | undefined) => {
    const TOKEN = `Token ${JSON.parse(sessionStorage.user).token}`
    console.log(TOKEN)
    return async (dispatch: Dispatch<BlogAction>) => {
        try {
            const response = await axios.post(`${API_URL}articles/${slug}/favorite`, 
                {user: {email: 'abelyi467@gmail.com' }}, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    'Authorization': TOKEN
                }
            })
            dispatch({type: BlogActionTypes.ADD_LIKE, payload: response.data.article})
            console.log('Add like')
        } catch (e) {
            console.log(e)
        }
    }

}

export const removeLike = (slug: string | undefined) => {
    const TOKEN = `Token ${JSON.parse(sessionStorage.user).token}`
    return async (dispatch: Dispatch<BlogAction>) => {
        try {
            const response = await axios.delete(`${API_URL}articles/${slug}/favorite`, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    'Authorization': TOKEN
                }
            })
            dispatch({type: BlogActionTypes.REMOVE_LIKE, payload: response.data.article})
        } catch (e) {
            console.log(e)
        }
    }

}