import Post from "./Post"

class VideoPost extends Post{
       constructor(videoPost){
           super(videoPost);
               this.videoUrl = videoPost.videoUrl;
       }
   }
   export default VideoPost;
