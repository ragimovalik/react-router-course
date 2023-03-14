import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import s from "./VanDetails.module.css";

const VanDetails = () => {
  const { id } = useParams();
  const [vanToRender, setVanToRender] = useState(null);

  useEffect(() => {
    async function getVan(vanId) {
      const res = await fetch(`http://localhost:8000/api/vans/${vanId}`);

      const data = await res.json();

      setVanToRender(data.van);
    }

    getVan(id);
  }, [id]);

  return (
    <>
      {vanToRender ? (
        <div>
          <div className={s.flex}>
            <img src={vanToRender.imageUrl} alt="" />
            <div>
              <h2>{vanToRender.name}</h2>
              <p>{vanToRender.description}</p>
              <div>
                <span>{vanToRender.price}</span>
                <span> USD</span>
              </div>
              <p>{vanToRender.type}</p>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default VanDetails;
