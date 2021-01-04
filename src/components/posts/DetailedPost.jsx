import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchSinglePost, fetchUserInfo } from "../../actions";
import DetailedPage from "./DetailedPage";

class DetailedPost extends Component {

    componentDidMount(){
        let postId = this.props.match.params.id
        this.props.fetchSinglePost(postId)
        this.props.fetchUserInfo(this.props.post.userId)
    }

    render() {
        return (
            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="col-md-10">
                            <DetailedPage body={this.props.post.body} username={this.props.userData.name} title={this.props.post.title} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        post: state.singlePost,
        userData: state.userAssociatedToSelectedPost
    }
}

export default connect(mapStateToProps, {fetchSinglePost, fetchUserInfo})(DetailedPost)