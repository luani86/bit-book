import React from 'react';
import { Link } from 'react-router-dom';

const FeedListPage = () => {
    return (
        <div className="container">
            <div className="row">
                <a className='dropdown-button btn' data-activates='dropdown1'><i className="material-icons">arrow_drop_down</i>All posts </a>

                <ul id='dropdown1' className='dropdown-content'>
                    <li><a >one</a></li>
                    <li><a >two</a></li>
                    <li className="divider"></li>
                    <li><a >three</a></li>
                    <li><a ><i className="material-icons">view_module</i>four</a></li>
                    <li><a ><i className="material-icons">cloud</i>five</a></li>
                </ul>

                <div className="col s12 m6 offset-m3">
                    <div className="card blue accent-2">
                        <div className="card-content white-text">
                            <span className="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                            <a className="title left">Video post</a>
                            <a className="title right">Comments</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6 offset-m3">
                    <div className="card deep-purple accent-1">
                        <div className="card-content white-text">
                            <span className="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                            <Link to="" className="title left">Text post</Link>
                            <a className="title right">Comments</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6 offset-m3">
                    <div className="card teal lighten-3">
                        <div className="card-content white-text">
                            <span className="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                        </div>

                        <div className="card-action">
                            <a className="title left">Image post</a>
                            <a className="title right">Comments</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed-action-btn">
            <a className="btn-floating btn-large red accent-1">
              <i className="large material-icons">add</i>
            </a>
            <ul>
              <li><a className="btn-floating light-blue lighten-1"><i className="material-icons"></i></a>Post</li>
              <li><a className="btn-floating green lighten-1"><i className="material-icons"></i></a>Image</li>
              <li><a className="btn-floating red darken-1"><i className="material-icons"></i></a>Video</li>
            </ul>
          </div>

        </div>
    )
}

export default FeedListPage;