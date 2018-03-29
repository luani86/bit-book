import React from "react";
import {Link} from 'react-router-dom'


const VideoComponent = (props) => {
    return (
<div className="col s12 m6 offset-m3">
    <div className="card light-blue lighten-1">
        <div className="card-content white-text">
        <iframe width="100%" src={props.postVideo.videoUrl} title="video"></iframe>
            <div></div>
        </div>
        <div className="card-action">
            <Link to='/' className="title left">Video post</Link>
            <a className="title right">Comments</a>
        </div>
    </div>
</div>
  )
}

export default VideoComponent;