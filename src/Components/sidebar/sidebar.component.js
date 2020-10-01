import React from "react";

import "./Sidebar.styles.css";

import SidebarRow from "../sidebarRow/SidebarRow.component";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
// import { useStateValue } from "../StateProvider";
// import { Collapse } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/13483253_1746586338896289_439733790313300243_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=kF4iYJhfwUsAX8edMK_&_nc_ht=scontent-waw1-1.xx&oh=fcc5f3e1520d82564e31d3b6f3e37f1c&oe=5F99C016"
        title="Sergio"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="More" />
    </div>
  );
};

export default Sidebar;
