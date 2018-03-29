import ImagePost from "../entities/ImagePost"
import VideoPost from "../entities/VideoPost"
import TextPost from "../entities/TextPost"

class PostService {
    getPosts = () => {
        return fetch("http://bitbookapi.azurewebsites.net/api/Posts", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Key": "bitbook",
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
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
    }
    submitTextPost = (textPost) => {
        return fetch('http://bitbookapi.azurewebsites.net/api/TextPosts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
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
                'Key': 'bitbook',
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
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
                'Key': 'bitbook',
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
            },
            body: JSON.stringify({
               videoUrl: videoPost.videoContent 
            })
        })
    }
}

export const postService = new PostService(); 