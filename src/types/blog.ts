import { Profile } from "./profile";

export interface BlogState {
    article: Article,
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

export enum BlogActionTypes {
    FETCH_BLOG = 'FETCH_BLOG',
    FETCH_BLOG_SUCCESS = 'FETCH_BLOG_SUCCESS',
    FETCH_BLOG_ERROR = 'FETCH_BLOG_ERROR',
}

interface FetchBlogAction {
    type: BlogActionTypes.FETCH_BLOG
}

interface FetchBlogSuccessAction {
    type: BlogActionTypes.FETCH_BLOG_SUCCESS
    payload: Article
}

interface FetchBlogErrorAction {
    type: BlogActionTypes.FETCH_BLOG_ERROR
    payload: string
}

export type BlogAction = FetchBlogAction
    | FetchBlogSuccessAction
    | FetchBlogErrorAction