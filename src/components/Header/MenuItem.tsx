import React from "react";
import { Link } from "react-router-dom";

const MenuItems: React.FC = () => {
  return (
    <ul className="header-menu fixed-fs-16 font-weight-medium h-100">
      <Link className="menu-item text-white text-decoration-none" to={"/"}>
        HTML & CSS
      </Link>
      <Link className="menu-item text-white text-decoration-none" to={"/"}>
        JavaScript
      </Link>
      <Link className="menu-item text-white text-decoration-none" to={"/"}>
        React
      </Link>
      <Link className="menu-item text-white text-decoration-none" to={"/"}>
        Angular
      </Link>
      <Link className="menu-item text-white text-decoration-none" to={"/"}>
        Vue
      </Link>
      <Link className="menu-item text-white text-decoration-none" to={"/"}>
        Svelte
      </Link>
    </ul>
  );
};

export default MenuItems;
