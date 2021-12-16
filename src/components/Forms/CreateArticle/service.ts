import { NewArticle } from '../../../types/blog';

const API_URL = 'http://kata.academy:8022/'
const TOKEN = 'Token eyJhbGciOiJIUzI1NiIsInR5cGUiOiJKV1QifQ.eyJzdWIiOjIwNiwibmFtZSI6Inlha292bGV2YUBtYWlsLnJ1IiwiaWF0IjoxNjM5NDAyMDIwfQ.BL_kCk-XrQTEzCtwvRu-0O1faiYc9WfZIq6DHauMAVs'

interface FetchArticle {
    article: NewArticle
}

export const createFetchNewArticle = async (data: FetchArticle) => {
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