import { NavLink, useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const HostVanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState(null);
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`).then((res) => res.json().then((data) => setVan(data.vans)));
  }, [params.id]);
  console.log(van);

  if (!van) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={van.imageUrl} width={150} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${van.type}`}>{van.type}</i>
            <h3>{van.name}</h3>
            <h4>${van.price}/day</h4>
          </div>
        </div>
        <div>
          <NavLink end className={({ isActive }) => (isActive ? "active" : null)} to={"."}>
            Details
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : null)} to={"pricing"}>
            Pricing
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : null)} to={"photos"}>
            Photos
          </NavLink>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default HostVanDetail;
