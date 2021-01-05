import axios from "axios";
import { FETCH_POSTS, 
        FETCH_SINGLE_POST, 
        FETCH_SINGLE_USER, 
        FETCH_POSTS_COMMENTS,
        POST_COMMENT
    } from "./type"

export function fetchPosts(){
    return (dispatch) =>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
             .then(response => {
                 dispatch({type: FETCH_POSTS, payload:response.data})
             })
             .catch(err => console.log(err))
    }
}

export function fetchSinglePost(id=1) {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            dispatch({type: FETCH_SINGLE_POST, payload:response.data})
        })
        .catch(err => console.log(err))
    }
}

export function fetchUserInfo(userId) {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            dispatch({type: FETCH_SINGLE_USER, payload:response.data})
        })
        .catch(err => console.log(err))
    }
}

export function fetchComments(postId) {
    return (dispatch) =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => {
            dispatch({type: FETCH_POSTS_COMMENTS, payload:response.data})
        })
        .catch(err => console.log(err))
    }
}

export function createComment(comment, postId=1) {
    return (dispatch) =>{
        axios.post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`,{
            method: 'P0ST',
            body: JSON.stringify({
                ...comment
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => dispatch({type:POST_COMMENT, payload: response.data}))

    }
}