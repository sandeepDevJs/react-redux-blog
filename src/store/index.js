import { combineReducers, createStore, applyMiddleware } from "redux"
import { fetchPostsReducer, fetchSingleReducer, fetchSingleUserReducer, fetchCommentsReducer } from "../reducers";
import thunk from "redux-thunk";
let rootReducer = combineReducers({
    posts : fetchPostsReducer,
    singlePost: fetchSingleReducer,
    userAssociatedToSelectedPost:fetchSingleUserReducer,
    commentsAssociatedToPost: fetchCommentsReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))