import { Link, useLocation, useLoaderData } from "react-router-dom";

import s from "./VanDetails.module.css";
import { getVan } from "../../api/api";

export function loader({ params }) {
  const res = getVan(params.id);

  return res;
}

const VanDetails = () => {
  const vanToRender = useLoaderData();

  const location = useLocation();

  const toBackPageString = location.state?.search
    ? `..?${location.state.search}`
    : "..";

  return (
    <>
      <div>
        <Link className={s.link} to={toBackPageString} relative="path">
          &larr;{" "}
          <span>
            Back to {location.state?.search ? `${location.state.type}` : "all"}{" "}
            vans
          </span>
        </Link>

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
    </>
  );
};

export default VanDetails;
