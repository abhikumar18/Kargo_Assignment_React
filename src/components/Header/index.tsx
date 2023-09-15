import React from "react";
import MenuItems from "./MenuItem";
import UserIcon from "../../assets/images/UserIcon";


import "./header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="brand text-white fixed-fs-24 font-weight-bold">
        <div className="text-uppercase">frontend school</div>
      </div>

      <div className="menu-items-wrapper">
        <MenuItems />
        <div className="user-img">
          <UserIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;