import React from "react";
import "./StoryReel.styles.css";
import Story from "../story/Story.component";
import stories from "./StoryReel.data";

const StoryReel = () => {
  const storyReelStories = stories.map((story) => (
    <Story
      key={story.id}
      image={story.image}
      profileSrc={story.profileSrc}
      title={story.title}
    />
  ));

  return <div className="storyReel">{storyReelStories}</div>;
};

export default StoryReel;
