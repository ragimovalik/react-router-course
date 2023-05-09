import { NavLink, Link, Outlet, useLoaderData } from "react-router-dom";
import { getVan } from "../../api/api";

import { requireAuth } from "../../utils/utils";

export async function loader({ params, request }) {
  await requireAuth(request);
  return getVan(params.id);
}

import s from "./HostVanDetails.module.css";

const HostVanDetails = () => {
  const vanToRender = useLoaderData();

  const activeStyles = {
    textDecoration: "underline"
  };

  return (
    <section>
      <>
        <Link className={s.link} to=".." relative="path">
          &larr; <span>Back to all vans</span>
        </Link>
        <div className={s.flex}>
          <img src={vanToRender.imageUrl} alt="" />
          <div>
            <h3>{vanToRender.name}</h3>
            {/* <p>{vanToRender.description}</p> */}
            <div>
              <span>Price: {vanToRender.price}</span>
              <span> USD</span>
            </div>
            <p>{vanToRender.type}</p>
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
        <Outlet context={{ vanToRender: vanToRender }} />
      </>
    </section>
  );
};

export default HostVanDetails;
