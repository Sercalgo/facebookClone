import React from "react";
import StoryReel from "../storyReel/StoryReel.component";
import MessageSender from "../MessageSender/MessageSender.component";
import "./Feed.styles.css";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
    </div>
  );
};

export default Feed;
