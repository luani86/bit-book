import Post from "./Post"

class TextPost extends Post {
    constructor(textPost) {
        super(textPost);
        this.text = textPost.text;
    }
}
export default TextPost;