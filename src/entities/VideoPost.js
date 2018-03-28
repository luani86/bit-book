import Post from "./Post"

class VideotPost extends Post{
       constructor(videoPost){
           super(videoPost);
               this.videoUrl = videoPost.videoUrl;
       }
   }
   export default VideoPost;
