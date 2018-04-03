import React from 'react';
import {Link} from 'react-router-dom';


const ImageComponent = (props) => {
    return(

        <div className="row">
        <div className="col s12 m6 offset-m3">
            <div className="card teal lighten-4">
                <div className="card-content image"> 
                
                    <img width="100%" src={props.postImage.imageUrl} alt="img"/>
                </div>

                <div className="card-action">
                    <Link to={`/ImagePosts/${props.postImage.id}`}><a className="title left">Image post</a></Link>
                    <Link to="" className="title right">Comments <span>({props.postImage.commentsNum})</span></Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ImageComponent;