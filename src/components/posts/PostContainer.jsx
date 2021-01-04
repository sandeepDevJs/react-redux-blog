import React from 'react'
import { connect } from "react-redux";
import SinglePost from "./SinglePost"
import { fetchPosts } from "../../actions"

class PostContainer extends React.Component {

    componentDidMount(){
        this.props.fetchPosts()
    }

    render(){
        let posts = this.props.posts.slice(0, 10)
        return (

            <div className="container">
                <div className="section">
                <h1 class="my-4">Posts</h1>
                    <div className="row">
                        <div class="col-md-10">
                            {
                                posts.map(post => <SinglePost key={post.id} id={post.id} title={post.title} body={post.body} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}

const mapStateToProps = state =>{
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostContainer)