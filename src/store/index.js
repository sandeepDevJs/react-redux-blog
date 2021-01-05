import { combineReducers, createStore, applyMiddleware } from "redux"
import { fetchPostsReducer, 
        fetchSingleReducer, 
        fetchSingleUserReducer, 
        fetchCommentsReducer,
        createdComment
    } from "../reducers";

import thunk from "redux-thunk";

let rootReducer = combineReducers({
    posts : fetchPostsReducer,
    singlePost: fetchSingleReducer,
    userAssociatedToSelectedPost:fetchSingleUserReducer,
    commentsAssociatedToPost: fetchCommentsReducer,
    createdComment
})

export default createStore(rootReducer, applyMiddleware(thunk))