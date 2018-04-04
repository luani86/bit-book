class MyProfile {
    constructor(profile) {
        this.profileName = profile.name;
        this.profileId = profile.userId;
        this.profileAbout = profile.about;
        this.profileAboutShort = profile.aboutShort;
        this.profileEmail = profile.email;
        this.profilePosts = profile.postsCount;
        this.profileComments = profile.commentsCount;
    }
}

export default MyProfile;