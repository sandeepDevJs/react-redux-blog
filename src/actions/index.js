import axios from "axios";
import { FETCH_POSTS, FETCH_SINGLE_POST, FETCH_SINGLE_USER } from "./type"

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
        axios.get(`https://https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            dispatch({type: FETCH_SINGLE_USER, payload:response.data})
        })
        .catch(err => console.log(err))
    }
}