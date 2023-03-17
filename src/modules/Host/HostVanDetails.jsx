import { useEffect, useState } from "react";
import { useParams, NavLink, Link, Outlet } from "react-router-dom";

import s from "./HostVanDetails.module.css";

const HostVanDetails = () => {
  const { id } = useParams();
  const [vanToRender, setVanToRender] = useState(null);

  useEffect(() => {
    async function getVan(vanId) {
      const res = await fetch(`http://localhost:8000/api/host/vans/${vanId}`);
      const data = await res.json();

      setVanToRender(data.van);
    }

    getVan(id);
  }, [id]);

  const activeStyles = {
    textDecoration: "underline"
  };

  return (
    <section>
      {vanToRender ? (
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
          <Outlet context={{ vanToRender }} />
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
};

export default HostVanDetails;
