import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.styles.css";
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import AccountCircleIclon from "@material-ui/icons/AccountCircle";

const Post = ({ profilePic, imgName, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar stc={profilePic} className="post__avatar" />
        <div className="post_topInfo">
          <h3>{username}</h3>
          <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
        </div>
      </div>

    <div className="post__bottom">
        <p>{message}</p>
    </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpOutlinedIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIclon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
};
export default Post;
