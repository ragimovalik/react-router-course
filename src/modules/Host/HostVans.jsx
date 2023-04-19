import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api/api";
import { requireAuth } from "../../utils/utils";

import s from "./HostVans.module.css";

export async function loader({ request }) {
  await requireAuth(request);

  const res = getHostVans();

  return res;
}

const HostVans = () => {
  const hostVans = useLoaderData();

  return (
    <div>
      <h2>Host Vans Page</h2>
      <ul className={s.box}>
        {hostVans.map(van => {
          return (
            <li key={van.id} className={s.flex}>
              <Link to={van.id}>
                <img src={van.imageUrl} />
                <div className={s.content}>
                  <h3>{van.name}</h3>
                  <p>Price: {van.price} USD</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HostVans;
