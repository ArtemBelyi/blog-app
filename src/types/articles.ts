import { Article } from "./blog"

export interface ArticlesState {
    articles: Article[],
    loading: boolean,
    error: null | string
}

export enum ArticlesActionTypes {
    FETCH_ARTICLES = 'FETCH_ARTICLES',
    FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
    FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR',
}

interface FetchArticlesAction {
    type: ArticlesActionTypes.FETCH_ARTICLES
}

interface FetchArticlesSuccessAction {
    type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS
    payload: Article[]
}

interface FetchArticlessErrorAction {
    type: ArticlesActionTypes.FETCH_ARTICLES_ERROR
    payload: string
}

export type ArticlesAction = FetchArticlesAction
    | FetchArticlesSuccessAction
    | FetchArticlessErrorAction