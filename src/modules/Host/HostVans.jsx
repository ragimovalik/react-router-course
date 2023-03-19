import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import s from "./HostVans.module.css";

const HostVans = () => {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    async function getHostVans() {
      const res = await fetch("http://localhost:8000/api/host/vans");
      const data = await res.json();

      setHostVans(data.vans);
    }

    getHostVans();
  }, []);

  return (
    <div>
      <h2>Host Vans Page</h2>
      <ul className={s.box}>
        {hostVans &&
          hostVans.map(van => {
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
