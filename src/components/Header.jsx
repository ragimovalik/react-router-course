import { Link } from "react-router-dom";

import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.box}>
      <Link to="/" className="site-logo">
        #VanLife
      </Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
        <Link to="/host">Host</Link>
      </nav>
    </header>
  );
};

export default Header;
