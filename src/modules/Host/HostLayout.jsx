import { NavLink, Outlet } from "react-router-dom";

import s from "./HostLayout.module.css";

const HostLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  };

  return (
    <>
      <ul className={s.host_menu}>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="."
            end
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="incomes"
          >
            Incomes
          </NavLink>
        </li>

        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="vans"
          >
            Vans
          </NavLink>
        </li>

        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default HostLayout;
