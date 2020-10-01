import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarRow.styles.css";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />} {Icon && <Icon />}
      <p> {title} </p>
    </div>
  );
};
export default SidebarRow;
