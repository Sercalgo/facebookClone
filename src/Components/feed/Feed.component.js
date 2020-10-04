import React from "react";
import StoryReel from "../storyReel/StoryReel.component";
import MessageSender from "../MessageSender/MessageSender.component";
import "./Feed.styles.css";
import Post from "../Post/Post.component";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic=""
        message="hey"
        timestamp="1601493943737"
        imgName="imgName"
        username="Sergio"
      />
    </div>
  );
};

export default Feed;
