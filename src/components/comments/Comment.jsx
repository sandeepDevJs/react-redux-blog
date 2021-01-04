import React from 'react'

export default function Comment(props) {
    return (
        <div className="media mb-4">
          <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
          <div className="media-body">
            <h5 className="mt-0">{props.name}</h5>
            {props.body}
          </div>
        </div>
    )
}
