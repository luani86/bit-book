import React from 'react';
import { Link } from 'react-router-dom';
import { postService } from '../../services/postService';
import SingleComment from '../../components/SingleComment';
import VideoComponent from '../../components/videoComponent'
import TextComponent from '../../components/textComponent'
import ImageComponent from '../../components/imageComponent'

class SingleFeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            comments: [],
            comment: "",
            commentText: ""
        }
    }

    componentDidMount() {
        this.getPostById();
        this.getComments();
    }

    getPostById = () => {
        postService.getPostById(this.props.match.params.id, this.props.match.params.type)
            .then((post) => {
                this.setState({
                    post: post,
                });
            });
    }

    // getImagePostById = () => {
    //     postService.getImagePostById(this.props.match.params.id, this.props.match.params.type)
    //         .then((ImagePost) => {
    //             this.setState({
    //                 ImagePost: ImagePost,
    //             });
    //         });

    // }

    getComments = () => {
        postService.getComments(this.props.match.params.id, this.props.match.params.type)
            .then((comments) => {
                this.setState({
                    comments
                });
            });
    }

    renderPost() {
        if (this.props.match.params.type === "TextPosts") {
            return <TextComponent stagodhocu={this.state.post} />
        }
        else if (this.props.match.params.type === "ImagePosts") {
            return <ImageComponent postImage={this.state.post} />
        }
        else { return <VideoComponent postVideo={this.state.post} /> }
    }

    handlePostComments = (event) => {
        this.setState({ commentText: event.target.value })
    }

    submitComment = () => {
        postService.postComments(this.state.commentText, this.props.match.params.id)
            .then((response => {
                this.getComments()
                this.clearInput()
            }))

    }

    renderComments = () => {
        if (this.state.comments.length !== 0) {
            return this.state.comments.map(comment => {
                return <SingleComment commentInfo={comment} />
            });
        } else {
            return (
                <div>
                    <h3>There are no comments for this post.</h3>
                </div>
            )
        }
    }

    clearInput = () => {
        this.setState({ commentText: "" })
    }

    removePost = () => {
        postService.deletingPosts(this.props.match.params.id);
    }

    

    render() {
        return (

            <div>
                <Link to="/FeedListPage" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons" onClick={this.removePost}>content_cut</i></Link>
                {this.renderPost()}

                <div className="col s12 m7">

                </div>
                {this.renderComments()}
                <div className="row">
                    <div className="input-field col s10 ">
                        <textarea id="textarea1" className="materialize-textarea" onChange={this.handlePostComments} value={this.state.commentText}></textarea>
                        <label htmlFor="textarea1">Post comment</label>
                        <button className="col s2 btn waves-effect waves-light" type="submit" name="action" onClick={this.submitComment} disabled={!this.state.commentText}>Submit<i className="material-icons right">send</i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleFeedPage;