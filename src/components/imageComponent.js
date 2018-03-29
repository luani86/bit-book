import React from 'react';


const ImageComponent = (props) => {
    return(

        <div className="row">
        <div className="col s12 m6 offset-m3">
            <div className="card red darken-1">
                <div className="card-content image"> 
                
                    <img width="100%" src={props.postImage.imageUrl} alt="img"/>
                </div>

                <div className="card-action">
                    <a className="title left">Image post</a>
                    <a className="title right">Comments</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ImageComponent;