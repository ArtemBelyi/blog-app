import { NewArticle } from '../../../types/blog';

const API_URL = 'https://api.realworld.io/api/'

interface EditArticle {
    article: NewArticle
}

export const editArticle = async (data: EditArticle, slug: string) => {
    const TOKEN = `Token ${JSON.parse(sessionStorage.user).token}`
    const response = await fetch(`${API_URL}articles/${slug}`, {
        method: 'PUT',
        body: JSON.stringify(data, null, 2),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'Authorization': TOKEN
        }
    })
    return response
}

export const deleteArticle = async (slug: string) => {
    const TOKEN = `Token ${JSON.parse(sessionStorage.user).token}`
    const response = await fetch(`${API_URL}articles/${slug}`, {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'Authorization': TOKEN
        }
    })
    return response
}