import { 
        FETCH_POSTS, 
        FETCH_SINGLE_POST, 
        FETCH_SINGLE_USER, 
        FETCH_POSTS_COMMENTS, 
        POST_COMMENT 
    } from '../actions/type'

let postInitialState = [
    {
        userId: 1,
        id: 1,
        title: "hello",
        body: "hello"
    }
]

let commentInitialState = [
    {
        name:"loading ..",
        body:"loading .."
    }
]
export const fetchPostsReducer = (state=postInitialState, action) =>{
    switch (action.type) {
        case FETCH_POSTS:return action.payload
    
        default: return state
    }
}

export const fetchSingleReducer  = (state=postInitialState, action) => {
    switch (action.type) {
        case FETCH_SINGLE_POST: return action.payload
    
        default: return state
    }
}

export const fetchSingleUserReducer = (state={name:"joey"}, action) =>{

    switch (action.type) {
        case FETCH_SINGLE_USER:return action.payload
    
        default: return state
    }
}

export const fetchCommentsReducer = (state=commentInitialState, action) =>{

    switch (action.type) {
        case FETCH_POSTS_COMMENTS :return action.payload
    
        default: return state
    }
}

export const createdComment = (state={postId: 0}, action) =>{

    switch (action.type) {
        case POST_COMMENT:return action.payload
    
        default:return state
    }

} 