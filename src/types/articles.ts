import { Profile } from "./profile";

export interface ArticlesState {
    articles: Article[],
    loading: boolean,
    error: null | string
}

export interface Article {
    slug: string,
    title: string,
    description: string,
    body: string,
    tagList: string[],
    createdAt: string,
    updatedAt: string,
    favorited: boolean,
    favoritesCount: number,
    author: Profile
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