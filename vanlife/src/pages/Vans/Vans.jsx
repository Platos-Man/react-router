import { useState } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export const vansLoader = async () => {
  return getVans();
};

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const vans = useLoaderData();

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter ? vans.filter((van) => van.type.toLowerCase() === typeFilter) : vans;

  const handleFilterChange = (key, value) => {
    setSearchParams((prev) => {
      if (!value) {
        prev.delete(key);
      } else {
        prev.set(key, value);
      }
      return prev;
    });
  };

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-type button simple ${typeFilter === "simple" ? "selected" : ""}`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`van-type button rugged ${typeFilter === "rugged" ? "selected" : ""}`}
        >
          Rugged
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`van-type button luxury ${typeFilter === "luxury" ? "selected" : ""}`}
        >
          Luxury
        </button>
        {typeFilter ? (
          <button onClick={() => handleFilterChange("type", null)} className="van-type clear-filters">
            Clear filter
          </button>
        ) : null}
      </div>
      <div className="van-list">
        {displayedVans.map((van) => (
          <Van key={van.id} van={van} searchParams={searchParams} typeFilter={typeFilter} />
        ))}
      </div>
    </div>
  );
};

const Van = ({ van, searchParams, typeFilter }) => {
  return (
    <div className="van-tile">
      <Link to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  );
};

export default Vans;
