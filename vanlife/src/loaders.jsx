import { redirect } from "react-router-dom";
import { getVans, getHostVans } from "./api";
import { requireAuth } from "./utils";

// /vans loaders

export const vansLoader = async () => {
  return getVans();
};

export const vanLoader = async ({ params }) => {
  return getVans(params.id);
};

// /host loaders (protected)

export const dashboardLoader = async () => {
  await requireAuth();
  return null;
};

export const incomeLoader = async () => {
  await requireAuth();
  return null;
};

export const reviewsLoader = async () => {
  await requireAuth();
  return null;
};

export const hostVansLoader = async () => {
  await requireAuth();
  return getHostVans();
};

export const hostVanLoader = async ({ params }) => {
  await requireAuth();
  return getHostVans(params.id);
};

// /login loaders

export const loginLoader = async ({ request }) => {
  console.log(request);
  return null;
};
