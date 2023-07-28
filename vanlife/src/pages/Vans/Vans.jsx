import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  console.log(typeFilter);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayedVans = typeFilter ? vans.filter((van) => van.type.toLowerCase() === typeFilter) : vans;

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button onClick={() => setSearchParams({ type: "simple" })} className="van-type simple">
          Simple
        </button>
        <button onClick={() => setSearchParams({ type: "rugged" })} className="van-type rugged">
          Rugged
        </button>
        <button onClick={() => setSearchParams({ type: "luxury" })} className="van-type luxury">
          Luxury
        </button>
        <button onClick={() => setSearchParams({})} className="van-type clear-filters">
          Clear filter
        </button>
      </div>
      <div className="van-list">
        {displayedVans.map((van) => (
          <Van key={van.id} van={van} />
        ))}
      </div>
    </div>
  );
};

const Van = ({ van }) => {
  return (
    <div className="van-tile">
      <Link to={`/vans/${van.id}`}>
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
