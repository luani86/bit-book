import Post from "./Post"

class TextPost extends Post{
       constructor(TextPost){
           super(TextPost);
               this.text = textPost.text;
       }
   }
   export default TextPost;