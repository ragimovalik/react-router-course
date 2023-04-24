import { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../api/api";
import { requireAuth } from "../../utils/utils";

import s from "./HostVans.module.css";

export async function loader({ request }) {
  await requireAuth(request);

  return defer({ vans: getHostVans() });
}

const HostVans = () => {
  const dataPromise = useLoaderData();

  function renderVanEls(hostVans) {
    const hostVansEls = hostVans.map(van => (
      <li key={van.id} className={s.flex}>
        <Link to={van.id}>
          <img src={van.imageUrl} />
          <div className={s.content}>
            <h3>{van.name}</h3>
            <p>Price: {van.price} USD</p>
          </div>
        </Link>
      </li>
    ));
    return <ul className={s.box}>{hostVansEls}</ul>;
  }

  return (
    <div>
      <h2>Host Vans Page</h2>
      <Suspense fallback={<h2>Loading vans...</h2>}>
        <Await resolve={dataPromise.vans}>{renderVanEls}</Await>
      </Suspense>
    </div>
  );
};

export default HostVans;
