import { Avatar, Input } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.styles.css";

import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log("submitting");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/13483253_1746586338896289_439733790313300243_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=kF4iYJhfwUsAX8edMK_&_nc_ht=scontent-waw1-1.xx&oh=fcc5f3e1520d82564e31d3b6f3e37f1c&oe=5F99C016" />
        <form>
          <input
            type="button"
            className="messageSender__input"
            placeholder="What's on your mind"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Input
            type="file"
            className="messageSender__fileSelector"
            onChange={handleChange}
          />
          <button onCLick={handleSubmit} type="submit" hidden>
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "yellow" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
