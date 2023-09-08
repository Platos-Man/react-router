import { Link, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";

const HostVans = () => {
  const dataPromise = useLoaderData();

  const hostVansEls = (vans) =>
    vans.map((van) => {
      console.log(van);
      return (
        <Link to={van.id} key={van.id} className="host-van-link-wrapper">
          <div className="host-van-single" key={van.id}>
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
            <div className="host-van-info">
              <h3>{van.name}</h3>
              <p>${van.price}/day</p>
            </div>
          </div>
        </Link>
      );
    });

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        <section>
          <Suspense fallback={<></>}>
            <Await resolve={dataPromise.vans}>{hostVansEls}</Await>
          </Suspense>
        </section>
      </div>
    </section>
  );
};

export default HostVans;
