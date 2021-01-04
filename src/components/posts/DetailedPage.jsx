import React from 'react'
import Comments from "../comments/Comment"
import { connect } from "react-redux";
import { fetchComments } from "../../actions";

class DetailedPage extends React.Component {

    componentDidMount(){
        this.props.fetchComments(this.props.postId)
    }

    render(){
        return (
            <div>
                <h1 className="mt-4">{this.props.title}</h1>
                <hr/>
                <p className="lead">
                    by<br/>
                    {this.props.username}
                </p>
                <img className="img-fluid rounded" src="http://placehold.it/900x300" alt=""/>
                <hr/>
                <p className="lead">{this.props.body}</p>
                <hr/>
                <br/>
                <h2>Comments</h2>
                <br/>
                {
                    this.props.comments.map( comment => <Comments key={comment.id} name={comment.name} body={comment.body}/> )
                }
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        comments: state.commentsAssociatedToPost
    }
}

export default connect (mapStateToProps, {fetchComments})(DetailedPage)
