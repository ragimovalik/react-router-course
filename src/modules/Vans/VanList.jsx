import { useState, Suspense } from "react";
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await
} from "react-router-dom";

import { getVans } from "../../api/api";

import s from "./VanList.module.css";

export function loader() {
  return defer({ vans: getVans() });
}

const VanList = () => {
  const dataPromise = useLoaderData();

  // const { vans } = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  return (
    <Suspense fallback={<h2>Loading vans...</h2>}>
      <Await resolve={dataPromise.vans}>
        {vans => {
          const pickedTypes = vans?.map(v => v.type);
          const uniqueTypes = new Set(pickedTypes);
          const types = Array.from(uniqueTypes);

          const displayedVans = typeFilter
            ? vans.filter(v => v.type.toLowerCase() === typeFilter)
            : vans;

          return (
            <>
              <ul className={s.filters}>
                {types.length >= 1 &&
                  types.map(van => {
                    return (
                      <li key={van}>
                        <button
                          style={
                            typeFilter === van
                              ? { backgroundColor: "green" }
                              : null
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
                          state={{
                            search: searchParams.toString(),
                            type: typeFilter
                          }}
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
        }}
      </Await>
    </Suspense>
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
  <>
      <div className="van-list-filter-buttons">
          <button
              onClick={() => handleFilterChange("type", "simple")}
              className={
                  `van-type simple 
              ${typeFilter === "simple" ? "selected" : ""}`
              }
          >Simple</button>
          <button
              onClick={() => handleFilterChange("type", "luxury")}
              className={
                  `van-type luxury 
              ${typeFilter === "luxury" ? "selected" : ""}`
              }
          >Luxury</button>
          <button
              onClick={() => handleFilterChange("type", "rugged")}
              className={
                  `van-type rugged 
              ${typeFilter === "rugged" ? "selected" : ""}`
              }
          >Rugged</button>

          {typeFilter ? (
              <button
                  onClick={() => handleFilterChange("type", null)}
                  className="van-type clear-filters"
              >Clear filter</button>
          ) : null}

      </div>
      <div className="van-list">
          {vanElements}
      </div>
  </>

// ================== OTHER EXMPLE ===================
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
