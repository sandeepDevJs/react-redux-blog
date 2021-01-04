import { combineReducers, createStore, applyMiddleware } from "redux"
import { fetchPostsReducer, fetchSingleReducer, fetchSingleUserReducer } from "../reducers";
import thunk from "redux-thunk";
let rootReducer = combineReducers({
    posts : fetchPostsReducer,
    singlePost: fetchSingleReducer,
    userAssociatedToSelectedPost:fetchSingleUserReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))