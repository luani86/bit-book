import React from "react";
import { Link } from 'react-router-dom'
import formatDate from "../services/formatDate"

const VideoComponent = (props) => {
    return (
        <div className="row">
            <div className="col s12 m6 offset-m3">
                <div className="card light-blue lighten-1">
                    <div id='videoComp' className="card-content white-text">
                        <iframe width="100%" height='100%' src={props.postVideo.videoUrl} title="video"></iframe>
                        <div></div>
                    </div>
                    <div className="card-action">
                    <p>{formatDate(props.postVideo.date)}</p>
                        <Link to={`/VideoPosts/${props.postVideo.id}`} className="title left">Video post</Link>
                        <Link to="" className="title right">Comments <span>({props.postVideo.commentsNum})</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoComponent;