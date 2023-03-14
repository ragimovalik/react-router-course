import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import s from "./VanList.module.css";

const VanList = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    async function getVans() {
      const res = await fetch("http://localhost:8000/api/vans");
      const data = await res.json();

      setVans(data.vans);
    }

    getVans();
  }, []);

  return (
    <>
      <ul className={s.list}>
        {vans &&
          vans.map(van => {
            return (
              <li key={van.id}>
                <Link to={`/vans/${van.id}`}>
                  <h3>{van.name}</h3>
                  <img src={van.imageUrl} alt="" />
                  <p>{van.description}</p>
                  <div>
                    <span>{van.price}</span>
                    <span> USD</span>
                  </div>
                  <p>{van.type}</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default VanList;
