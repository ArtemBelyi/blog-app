import { NewArticle } from '../../../types/blog';

const API_URL = 'http://kata.academy:8022/'
const TOKEN = 'Token eyJhbGciOiJIUzI1NiIsInR5cGUiOiJKV1QifQ.eyJzdWIiOjE5MiwibmFtZSI6ImFiZWw0NThAZ21haWwuY29tIiwiaWF0IjoxNjM5MzMzNzk2fQ.VLogwg2-v0PWf3MIQqclSTSiTe3t3wbrCFFMECJbcWg'

interface FetchArticle {
    article: NewArticle
}

export const createFetchNewArticle = async (data: FetchArticle) => {
    console.log(JSON.stringify(data, null, 2))
    const response = await fetch(`${API_URL}articles`, {
        method: 'POST',
        body: JSON.stringify(data, null, 2),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'Authorization': TOKEN
        }
    })
    console.log(response)
}