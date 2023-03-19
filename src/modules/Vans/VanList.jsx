import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { getVans } from "../../api/api";

import s from "./VanList.module.css";

const VanList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter(v => v.type.toLowerCase() === typeFilter)
    : vans;

  useEffect(() => {
    async function loadVans() {
      setLoading(true);

      try {
        const data = await getVans();
        const types = data?.map(v => v.type);
        const uniqueTypes = new Set(types);
        setVans(data);
        setTypes(Array.from(uniqueTypes));
      } catch (err) {
        console.log("There was an error");
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <>
      <ul className={s.filters}>
        {types.length >= 1 &&
          types.map(van => {
            return (
              <li key={van}>
                <button
                  style={
                    typeFilter === van ? { backgroundColor: "green" } : null
                  }
                  onClick={() => setSearchParams({ type: van })}
                >
                  {van}
                </button>
              </li>
            );
          })}
        {typeFilter && (
          <li key="clear">
            <Link to="">Clear all</Link>
          </li>
        )}
      </ul>

      <ul className={s.list}>
        {displayedVans &&
          displayedVans.map(van => {
            return (
              <li key={van.id}>
                <Link
                  to={van.id}
                  state={{ search: searchParams.toString(), type: typeFilter }}
                >
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

/*
// One more possible way to manage routing

  <li key={van}>
    <Link to={`?type=${van}`}>{van}</Link>
  </li>

  // Example for generating query string - could merge different queries
  // Function
    function genNewSearchParamString(key, value) {
      const sp = new URLSearchParams(searchParams)
      if (value === null) {
        sp.delete(key)
      } else {
        sp.set(key, value)
      }
    return `?{sp.toString()}`
  }

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  // Using
  <div>
    <Link to={genNewSearchParamString("type", "jedi")}>Jedi</Link>
    <Link to={genNewSearchParamString("type", "sith")}>Sith</Link>
    <Link to={genNewSearchParamString("type", null)}>Clear</Link>
  </div>
  <div>
    <button onClick={() => handleFilterChange("type", "jedi")}>Jedi</button>
    <button onClick={() => handleFilterChange("type", "sith")}>Sith</button>
    <button onClick={() => handleFilterChange("type", null)}>Clear</button>
  </div>

*/
