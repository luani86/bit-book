import React from 'react';
import M from "materialize-css"
import { postService } from '../../services/postService'
import VideoComponent from '../../components/videoComponent'
import TextComponent from '../../components/textComponent'
import ImageComponent from '../../components/imageComponent'

class FeedListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            content: "",
            imageContent: "",
            videoContent: "",
            selectedValue: ""
        }
    }

    componentDidMount() {
        this.fetchPosts();

        const elem = document.querySelector('.fixed-action-btn');
        const instance = M.FloatingActionButton.init(elem);

        var elem1 = document.querySelector('#modal1');
        this.instance1 = M.Modal.init(elem1);

        var elem2 = document.querySelector('#modal2');
        this.instance2 = M.Modal.init(elem2);

        var elem3 = document.querySelector('#modal3');
        this.instance3 = M.Modal.init(elem3);

        var elem4 = document.querySelector('.dropdown-trigger');
        var instance4 = M.Dropdown.init(elem4);
    }

    clearTextInput = () => {
        this.setState({ inputValue: "" })
    }

    fetchPosts = () => {
        postService.getPosts()
            .then((posts) => {
                this.setState({
                    posts: posts,
                });
            });
    }

    showTextModal = () => {
        this.instance1.open();
    }
    showImageModal = () => {

        this.instance2.open();
    }
    showVideoModal = () => {
        this.instance3.open();
    }

    handleSendText = (event) => {
        this.setState({ content: event.target.value })
    }

    handleSendImage = (event) => {
        this.setState({ imageContent: event.target.value })
    }

    handleSendVideo = (event) => {
        this.setState({ videoContent: event.target.value })
    }

    submit = () => {
        postService.submitTextPost({
            content: this.state.content
        })
            .then(response => {
                this.fetchPosts();

            })
    }

    submitImg = () => {
        postService.submitImagePost({
            imageContent: this.state.imageContent
        })
            .then(response => {
                this.fetchPosts();
            })
    }
    submitVideo = () => {
        postService.submitVideoPost({
            videoContent: this.state.videoContent
        })
            .then(response => {
                this.fetchPosts();
            })
    }



    showAllPosts = () => {
        this.setState({ selectedValue: "" })
    }

    filterVideoPosts = () => {
        this.setState({ selectedValue: "video" })
    }
    filterImagePosts = () => {
        this.setState({ selectedValue: "image" })
    }
    filterTextPosts = () => {
        this.setState({ selectedValue: "text" })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.posts.length !== 0
                        ? this.state.posts.filter((post) => {
                            if (post.type === this.state.selectedValue || this.state.selectedValue === "") {
                                return true;
                            }
                            return false;
                        }).map((post) => {
                            if (post.type === "text") {
                                return <TextComponent stagodhocu={post} key={post.id} />
                            } else if (post.type === "image") {
                                return <ImageComponent postImage={post} key={post.id} />
                            } else if (post.type === "video") {
                                return <VideoComponent postVideo={post} key={post.id} />
                            }
                        })
                        : <h3>There are no posts at this time</h3>}
                    <div id="all_post_btn">

                        <a className='dropdown-trigger btn' data-target='dropdown1'>Filter Posts</a>

                        <ul id='dropdown1' className='dropdown-content'>

                            <li><a onClick={this.showAllPosts} >Show All</a></li>
                            <li><a onClick={this.filterVideoPosts} >Videos</a></li>
                            <li><a onClick={this.filterImagePosts}>Images</a></li>
                            <li><a onClick={this.filterTextPosts}>Text</a></li>
                        </ul>
                    </div>
                </div>

                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red accent-1">
                        <i className="large material-icons">add</i>
                    </a>
                    <ul>
                        <li><a className="btn-floating orange darken-4 btn modal-trigger" onClick={this.showTextModal} id="#modal1">Post</a>
                            <div id="modal1" className="modal">
                                <div className="modal-content">

                                    <div className="row">
                                        <h4>New post</h4>
                                        <div className="input-field col s6">
                                            <input id="first_name2" type="text" className="validate" onChange={this.handleSendText} value={this.state.inputValue} />
                                            <label className="active" htmlFor="first_name2 ">Post content</label>
                                        </div>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type='submit' onClick={this.submit} className="modal-action modal-close waves-effect waves-green btn-flat red accent-1">POST</button>
                                </div>
                            </div>

                        </li>

                        <li><a className="btn-floating teal lighten-4 btn modal-trigger" onClick={this.showImageModal} id="#modal2">Image</a>

                            <div id="modal2" className="modal">
                                <div className="modal-content">
                                    <h4>New image</h4>
                                    <input id="first_name2" type="text" className="validate" onChange={this.handleSendImage} value={this.state.inputValue} />
                                </div>
                                <div className="modal-footer">
                                    <button type='submit' className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.submitImg}>Send</button>
                                </div>
                            </div>
                        </li>

                        <li><a className="btn-floating light-blue lighten-1 btn modal-trigger" onClick={this.showVideoModal} id="#modal3">Video</a>

                            <div id="modal3" className="modal">
                                <div className="modal-content">
                                    <h4>New video post</h4>
                                    <div className="input-field col s6">
                                        <input id="first_name2" type="text" className="validate" onChange={this.handleSendVideo} value={this.state.inputValue} />
                                        <label className="active" htmlFor="first_name2 ">YouTube video link</label>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type='submit' className="modal-action modal-close waves-effect waves-green btn-flat red accent-1" onClick={this.submitVideo}>Agree</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default FeedListPage;