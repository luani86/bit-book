import Post from "./Post"

class ImagePost extends Post {
    constructor(imagePost) {
        super(imagePost);
        this.imageUrl = imagePost.imageUrl;
    }
}
export default ImagePost;
