class Post {
    constructor(post) {
            this.id = post.id;
            this.date = post.dateCreated;
            this.userId = post.userId;
            this.type = post.type;
            this.commentsNum = post.commentsNum
        }
    }

export default Post;

    // class TextPost extends Post{
    //     constructor(imagePost){
    //         super(imagePost);
    //             this.imageUrl = imagePost.imageUrl;
    //     }
    // }
