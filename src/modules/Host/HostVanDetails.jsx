import { NavLink, Link, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api/api";

export function loader({ params }) {
  const { id } = params;

  const res = getHostVans(id);

  return res;
}

import s from "./HostVanDetails.module.css";

const HostVanDetails = () => {
  const vanToRender = useLoaderData();

  const activeStyles = {
    textDecoration: "underline"
  };

  console.log(vanToRender);

  return (
    <section>
      <>
        <Link className={s.link} to=".." relative="path">
          &larr; <span>Back to all vans</span>
        </Link>
        <div className={s.flex}>
          <img src={vanToRender[0].imageUrl} alt="" />
          <div>
            <h3>{vanToRender[0].name}</h3>
            {/* <p>{vanToRender[0].description}</p> */}
            <div>
              <span>Price: {vanToRender[0].price}</span>
              <span> USD</span>
            </div>
            <p>{vanToRender[0].type}</p>
          </div>
        </div>

        <nav>
          <ul className={s.submenu}>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyles : null)}
                to="."
                end
              >
                Info
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyles : null)}
                to="pricing"
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyles : null)}
                to="photo"
              >
                Photo
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet context={{ vanToRender: vanToRender[0] }} />
      </>
    </section>
  );
};

export default HostVanDetails;
