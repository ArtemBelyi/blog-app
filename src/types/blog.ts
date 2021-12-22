import { Profile } from "./user";

export interface BlogState {
    article: Article,
    loading: boolean,
    error: null | string
}

export interface dataShow {
    show: boolean,
    handleClose: Function,
    heading: string,
    body: string
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

export interface NewArticle {
    title: string,
    description: string,
    body: string,
    tagList: string[]
}

export enum BlogActionTypes {
    FETCH_BLOG = 'FETCH_BLOG',
    FETCH_BLOG_SUCCESS = 'FETCH_BLOG_SUCCESS',
    FETCH_BLOG_ERROR = 'FETCH_BLOG_ERROR',
    ADD_LIKE = 'ADD_LIKE',
    REMOVE_LIKE = 'REMOVE_LIKE'
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

interface AddLikeAction {
    type: BlogActionTypes.ADD_LIKE
    payload: Article
}

interface RemoveLikeAction {
    type: BlogActionTypes.REMOVE_LIKE
    payload: Article
}
export type BlogAction = FetchBlogAction
    | FetchBlogSuccessAction
    | FetchBlogErrorAction
    | AddLikeAction
    | RemoveLikeAction