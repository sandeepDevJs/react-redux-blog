import React from 'react'

export default function DetailedPage(props) {
    return (
        <div>
            <h1 className="mt-4">{props.title}</h1>
            <hr/>
            <p class="lead">
            by<br/>
            {props.username}
            </p>
            <img className="img-fluid rounded" src="http://placehold.it/900x300" alt=""/>
            <hr/>
            <p className="lead">{props.body}</p>
            <hr/>
        </div>
    )
}
