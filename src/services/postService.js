import ImagePost from "../entities/ImagePost";
import VideoPost from "../entities/VideoPost";
import TextPost from "../entities/TextPost";
import Comment from "../entities/Comment";

class PostService {
    getPosts = () => {
        return fetch("http://bitbookapi.azurewebsites.net/api/Posts", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Key": "E23584A",
                "SessionId": "00000000-0000-0000-0000-000000000000"
            }
        }).then((response) => {
            return response.json();
        }).then((results) => {
            return results.map((post) => {
                if (post.type === "image") {
                    return new ImagePost(post);
                }
                else if (post.type === "text") {
                    return new TextPost(post);
                }
                else {
                    return new VideoPost(post);
                }

            })
        })
        // .catch((error) => {
        //     console.log("error")
        // })
    }

    getComments = (id) => {
        return fetch(`http://bitbookapi.azurewebsites.net/api/Comments?postId=${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Key": "E23584A",
                "SessionId": "00000000-0000-0000-0000-000000000000"
            }
        })
            .then((response) => {
                return response.json();

            })
            .then((comments) => {
                return comments.map((comment) => {
                    // console.log(comment)
                    return new Comment(comment);
                })
            })
    }

    postComments = (commentText, id) => {
        return fetch("http://bitbookapi.azurewebsites.net/api/Comments", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Key": "E23584A",
                "SessionId": "00000000-0000-0000-0000-000000000000"
            },
             body: JSON.stringify({
                body: commentText,
                postId: id
        })
    })
    }

    getTextPostById = (id) => {
        return fetch("http://bitbookapi.azurewebsites.net/api/TextPosts/" + id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Key": "E23584A",
                "SessionId": "00000000-0000-0000-0000-000000000000"
            }
        }).then((response) => {
            return response.json();
        })
            .then((post) => {
                return new TextPost(post);
            })
    }

    getPostById = (id, type) => {
        return fetch(`http://bitbookapi.azurewebsites.net/api/${type}/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Key": "E23584A",
                "SessionId": "00000000-0000-0000-0000-000000000000"
            }
            })
            .then((response) => {
                return response.json();
            })
            .then(post => {
                if(post.type === "text") {
                    return new TextPost (post);
                } else if (post.type === "image") {
                    return new ImagePost (post);
                } else {
                    return new VideoPost (post);
                }
            })
    }

    submitTextPost = (textPost) => {
        return fetch('http://bitbookapi.azurewebsites.net/api/TextPosts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Key': 'E23584A',
                "SessionId": "00000000-0000-0000-0000-000000000000"
            },
            body: JSON.stringify({
                text: textPost.content
            })
        })
    }
    submitImagePost = (imagePost) => {
        return fetch('http://bitbookapi.azurewebsites.net/api/ImagePosts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Key': 'E23584A',
                "SessionId": "00000000-0000-0000-0000-000000000000"
            },
            body: JSON.stringify({
                imageUrl: imagePost.imageContent
            })
        })
    }

    submitVideoPost = (videoPost) => {
        return fetch("http://bitbookapi.azurewebsites.net/api/VideoPosts", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Key': 'E23584A',
                "SessionId": "00000000-0000-0000-0000-000000000000"
            },
            body: JSON.stringify({
                videoUrl: videoPost.videoContent
            })
        })
    }

    deletingPosts = (id) => {
        return fetch(`http://bitbookapi.azurewebsites.net/api/Posts/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Key': 'E23584A',
                "SessionId": "00000000-0000-0000-0000-000000000000"
            }
        })
            
    }
}

export const postService = new PostService(); 