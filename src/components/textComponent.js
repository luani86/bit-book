import React from 'react'
import {Link} from 'react-router-dom'


const TextComponent = (props) => {

    return(
        <div className="row">
        <div className="col s12 m6 offset-m3">
            <div className="card orange darken-4">
                <div className="card-content white-text">

                    <p>{props.stagodhocu.text}</p>
                </div>
                <div className="card-action">
                   <Link to={`/TextPosts/${props.stagodhocu.id}`}> <span className="title left">Text post</span></Link>
                    <Link to="" className="title right">Comments <span>({props.stagodhocu.commentsNum})</span></Link>
                </div>
            </div>
        </div>
     </div>

    )
}

export default TextComponent;

