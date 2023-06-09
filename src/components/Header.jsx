import { Link, NavLink } from "react-router-dom";

import avatar from "../assets/avatar.png";

import s from "./Header.module.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
    fontSize: "1.2rem"
  };

  return (
    <header className={s.box}>
      <Link to="/" className="site-logo">
        #VanLife
      </Link>
      <nav>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host"
        >
          Host
        </NavLink>
        <Link to="login" className={s.link}>
          <img src={avatar} className={s.icon} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
