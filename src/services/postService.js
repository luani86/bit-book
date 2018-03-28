import Post from "../entities/Post"
import ImagePost from "../entities/ImagePost"
import VideoPost from "../entities/VideoPost"
import TextPost from "../entities/TextPost"

class PostService {
    getPosts = () => {
        return fetch("http://bitbookapi.azurewebsites.net/api/Posts", {
            method: "GET",
            headers: {
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
    submitPost = (textPost) => {
        return fetch('http://bitbookapi.azurewebsites.net/api/TextPosts', {
            method: "POST",
            headers: {
                'Key': 'bitbook',
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
            },
            body: JSON.stringify({
                text: textPost.text,
                
            })
        })
    }
}

export const postService = new PostService(); 