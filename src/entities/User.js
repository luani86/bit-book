import React from "react";

class User {
    constructor(user) {
       this.name = user.name;
            this.userId = user.id;
            this.avatar =user.avatarUrl;
    }
}

export default User;