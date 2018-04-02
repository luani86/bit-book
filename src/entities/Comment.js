class Comment {
    constructor(commentInfo) {
        this.comment = commentInfo.body;
        this.authorId = commentInfo.authorId;
        this.authorName = commentInfo.authorName;
        this.postId = commentInfo.postId;
    }
}

export default Comment;