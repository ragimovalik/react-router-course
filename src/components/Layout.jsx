import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

import s from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={s.container}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
