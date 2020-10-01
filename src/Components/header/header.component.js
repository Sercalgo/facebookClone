import React from "react";

import SearchIcon from "@material-ui/icons/Search";

import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";

import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./Header.styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/220px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook Logo"
        />
      </div>
      <div className="header__input">
        <SearchIcon />
        <input placeholder="Search Facebook" type="text" />
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontsize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontsize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontsize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontsize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleRoundedIcon fontsize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src="https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/13483253_1746586338896289_439733790313300243_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=kF4iYJhfwUsAX8edMK_&_nc_ht=scontent-waw1-1.xx&oh=fcc5f3e1520d82564e31d3b6f3e37f1c&oe=5F99C016" />
          <h4> Sergio </h4>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
