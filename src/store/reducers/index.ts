import { combineReducers } from "redux";
import { blogReducer } from "./blogReducer";
import { articlesReducer } from "./articlesReducer";

export const rootReducer = combineReducers({
    articles: articlesReducer,
    blog: blogReducer
})

export type RootState = ReturnType<typeof rootReducer>