import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postService } from '../../services/postService';
import TextPost from '../../entities/TextPost';
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
            comment: ""
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


    render() {
return (
    <div>
        {this.renderPost()}
        <div className="col s12 m7">
    
    
    
    {this.state.comments.map(comment => {
        return <SingleComment commentInfo={comment} />
    })
    }


</div>
    </div>
);
       


                            


        // console.log(this.state.post)
        // if(this.props.match.params.type === "TextPosts") {
        //     return (
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col s12 m6 offset-m3">
        //                     <div className="card green lighten-1">
        //                         <div className="card-content white-text">
                                    
        //                             <p>{this.state.post.text}</p>
        //                         </div>
        //                         <div className="card-action">
    
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
    
        //             <div className="col s12 m7">
    
    
    
        //                 {this.state.comments.map(comment => {
        //                     return <SingleComment commentInfo={comment} />
        //                 })
        //                 }
    
    
        //             </div>
        //         </div>
        //     )
        // } else if (this.props.match.params.type === "ImagePosts") {
        //     return (
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col s12 m6 offset-m3">
        //                     <div className="card green lighten-1">
        //                         <div className="card-content white-text">
                                    
        //                             <img src={this.state.post.imageUrl}></img>
        //                         </div>
        //                         <div className="card-action">
    
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
    
        //             <div className="col s12 m7">
    
    
    
        //                 {this.state.comments.map(comment => {
        //                     return <SingleComment commentInfo={comment} />
        //                 })
        //                 }
    
    
        //             </div>
        //         </div>
        //     )
        // }
        // else {
        //     return (
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col s12 m6 offset-m3">
        //                     <div className="card green lighten-1">
        //                         <div className="card-content white-text">
                                    
        //                             <p>{this.state.post.video}</p>
        //                         </div>
        //                         <div className="card-action">
    
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
    
        //             <div className="col s12 m7">
    
    
    
        //                 {this.state.comments.map(comment => {
        //                     return <SingleComment commentInfo={comment} />
        //                 })
        //                 }
    
    
        //             </div>
        //         </div>
        //     )
        // }
        
    }
}

export default SingleFeedPage;