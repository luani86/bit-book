import React from 'react';

const SingleComment = (props) => {
    return (
        <div className="col s12 m7">
            <div className="card-stacked">
                <div className="card-content">
                    <ul className="collection">
                    <div>
                        <li className="collection-item avatar">
                            <img  src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" alt="" className="circle col-12" />
                           <div className="title left"> {props.commentInfo.comment} </div>
                           </li>
                           </div>
                            <p className = "comment-profile-name">{props.commentInfo.authorName}</p>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default SingleComment;