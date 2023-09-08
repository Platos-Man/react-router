import { defer } from "react-router-dom";
import { getVans, getHostVans } from "./api";
import { requireAuth } from "./utils";

// /vans loaders

export const vansLoader = () => {
  return defer({ vans: getVans() });
};

export const vanLoader = ({ params }) => {
  return defer({ van: getVans(params.id) });
};

// /host loaders (protected)

export const dashboardLoader = async ({ request }) => {
  console.log(request, "dash");
  await requireAuth(request);
  return null;
};

export const incomeLoader = async ({ request }) => {
  await requireAuth(request);
  return null;
};

export const reviewsLoader = async ({ request }) => {
  await requireAuth(request);
  return null;
};

export const hostVansLoader = async ({ request }) => {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
};

export const hostVanLoader = async ({ params, request }) => {
  await requireAuth(request);
  return defer({ van: getHostVans(params.id) });
};

// /login loaders

export const loginLoader = async ({ request }) => {
  return new URL(request.url).searchParams.get("message");
};
