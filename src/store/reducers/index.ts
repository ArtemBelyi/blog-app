import { combineReducers } from "redux";
import { blogReducer } from "./blogReducer";
import { articlesReducer } from "./articlesReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    articles: articlesReducer,
    blog: blogReducer,
    user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>