import React from "react";

class User {
    constructor(user) {
       this.name = user.name;
            this.userId = user.id;
            this.avatar =user.avatarUrl;
            this.description = user.aboutShort;
            this.postsCount = user.postsCount;
            this.commentsCount = user.commentsCount;
    }
}

export default User;