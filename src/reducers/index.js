import { isInaccessible } from '@testing-library/react'
import { FETCH_POSTS, FETCH_SINGLE_POST, FETCH_SINGLE_USER } from '../actions/type'

let postInitialState = [
    {
        userId: 1,
        id: 1,
        title: "hello",
        body: "hello"
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