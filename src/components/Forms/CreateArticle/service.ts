import { NewArticle } from '../../../types/blog';

const API_URL = 'http://kata.academy:8022/'

interface FetchArticle {
    article: NewArticle
}

export const createFetchNewArticle = async (data: FetchArticle) => {
    const TOKEN = `Token ${JSON.parse(sessionStorage.user).token}`
    const response = await fetch(`${API_URL}articles`, {
        method: 'POST',
        body: JSON.stringify(data, null, 2),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'Authorization': TOKEN
        }
    })
    return response
}