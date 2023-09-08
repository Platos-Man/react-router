import { Link, useLocation, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
const VanDetail = () => {
  const location = useLocation();
  const dataPromise = useLoaderData();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  const vanElement = (van) => (
    <div className="van-detail">
      <img src={van.imageUrl} />
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
      <h2>{van.name}</h2>
      <p className="van-price">
        <span>${van.price}</span>/day
      </p>
      <p>{van.description}</p>
      <button className="link-button">Rent this van</button>
    </div>
  );

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={dataPromise.van}>{vanElement}</Await>
      </Suspense>
    </div>
  );
};

export default VanDetail;
