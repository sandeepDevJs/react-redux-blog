import React, { Component } from 'react'
import { createComment } from "../../actions";
import { connect } from "react-redux"

class CommentBox extends Component {

    constructor(props){
        super(props)
        this.state = {
            text: ""
        }
    }

    formHandler = (e) =>{
        e.preventDefault()
        let commentBody = {
            postId : this.props.postId,
            name:"john",
            email:"Elesh",
            body: this.state.text
        }
        this.props.createComment(commentBody, this.props.postId)
        if (this.props.createComment) {
            alert("Comment Posted!!")
        }
    }

    render() {
        return (
            <div className="card my-4">
                <h5 className="card-header">Leave a Comment:</h5>
                <div className="card-body">
                    <form>
                    <div className="form-group">
                        <textarea 
                            className="form-control" 
                            rows="3"
                            onChange={ e =>  this.setState({text :  e.target.value})}

                        ></textarea>
                    </div>
                    <button type="submit" onClick={this.formHandler} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        createdComment:state.createdComment
    }
}

export default connect(mapStateToProps, { createComment })(CommentBox)