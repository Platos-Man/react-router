import { Suspense } from "react";
import { NavLink, Link, Outlet, useLoaderData, Await } from "react-router-dom";

const HostVanDetail = () => {
  const dataPromise = useLoaderData();

  return (
    <section>
      <Link to="../vans" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <Suspense fallback={<></>}>
        <Await resolve={dataPromise.van}>
          {(van) => (
            <div className="host-van-detail-layout-container">
              <div className="host-van-detail">
                <img src={van.imageUrl} width={150} />
                <div className="host-van-detail-info-text">
                  <i className={`van-type van-type-${van.type}`}>{van.type}</i>
                  <h3>{van.name}</h3>
                  <h4>${van.price}/day</h4>
                </div>
              </div>
              <nav className="host-van-detail-nav">
                <NavLink end className={({ isActive }) => (isActive ? "active" : null)} to={"."}>
                  Details
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active" : null)} to={"pricing"}>
                  Pricing
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active" : null)} to={"photos"}>
                  Photos
                </NavLink>
              </nav>
              <Outlet context={van} />
            </div>
          )}
        </Await>
      </Suspense>
    </section>
  );
};

export default HostVanDetail;
