 import Post from "./Post"

 class ImagetPost extends Post{
        constructor(imagePost){
            super(imagePost);
                this.imageUrl = imagePost.imageUrl;
        }
    }
    export default ImagePost;
