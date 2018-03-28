import React from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css"
import { postService } from '../../services/postService'
import TextPost from "../../entities/TextPost"
import VideoComponent from '../../components/videoComponent'
import TextComponent from '../../components/textComponent'
import ImageComponent from '../../components/imageComponent'

class FeedListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {



        postService.getPosts()
            .then((posts) => {
                this.setState({
                    posts: posts,
                });
            });


        const elem = document.querySelector('.fixed-action-btn');
        const instance = M.FloatingActionButton.init(elem);

        var elem1 = document.querySelector('#modal1');
        var instance1 = M.Modal.init(elem1);

        var elem2 = document.querySelector('#modal2');
        var instance2 = M.Modal.init(elem2);

        var elem3 = document.querySelector('#modal3');
        var instance3 = M.Modal.init(elem3);

        var elem4 = document.querySelector('.dropdown-trigger');
        var instance4 = M.Dropdown.init(elem4);


    }

    render() {
        return (
            <div className="container">
                <div className="row">

                    {this.state.posts.map((post) => {
                        if (post.type === "text") {
                            return <TextComponent stagodhocu={post} />
                        }
                        else if (post.type === "image") {
                            return <ImageComponent postImage={post} />
                        }
                        else { return <VideoComponent postVideo={post} /> }


                    })}



                    <div id="all_post_btn">

                        <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>


                        {/* <a className='dropdown-button btn red accent-1' data-activates='dropdown1'><i className="material-icons">arrow_drop_down</i>All posts </a> */}

                        <ul id='dropdown1' className='dropdown-content'>
                            <li><a >Videos</a></li>
                            <li><a >Images</a></li>
                            <li><a >Text</a></li>
                        </ul>
                    </div>
                </div>





                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red accent-1">
                        <i className="large material-icons">add</i>
                    </a>
                    <ul>
                        <li><a className="btn-floating light-blue lighten-1 btn modal-trigger" id="#modal1">Post</a>

                            <div id="modal1" className="modal">
                                <div className="modal-content">

                                    <div class="row">
                                        <h4>New post</h4>
                                        <div className="input-field col s6">
                                            <input id="first_name2" type="text" class="validate" />
                                            <label className="active" for="first_name2 ">Post content</label>
                                        </div>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <a className="modal-action modal-close waves-effect waves-green btn-flat red accent-1">POST</a>
                                </div>
                            </div>
                        </li>

                        <li><a className="btn-floating green lighten-1 btn modal-trigger" href="#modal2">Image</a>


                            <div id="modal2" className="modal">
                                <div className="modal-content">
                                    <h4>New image</h4>
                                    <p>A bunch of text</p>
                                </div>
                                <div className="modal-footer">
                                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                                </div>
                            </div>
                        </li>


                        <li><a className="btn-floating red darken-1 btn modal-trigger" href="#modal3">Video</a>


                            <div id="modal3" className="modal">
                                <div className="modal-content">
                                    <h4>New video post</h4>
                                    <div class="input-field col s6">
                                        <input id="first_name2" type="text" class="validate" />
                                        <label class="active" for="first_name2 ">YouTube video link</label>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat red accent-1">Agree</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}
// onClick={postService.submitPost(post)}
// onChange={} value={}

export default FeedListPage;