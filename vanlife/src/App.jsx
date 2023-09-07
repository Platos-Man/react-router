import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import HostLayout from "./components/HostLayout";
import Layout from "./components/Layout";
import Error from "./components/Error";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login, { loginAction } from "./pages/Login";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";

import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanInfo from "./pages/Host/HostVanInfo";

import {
  vansLoader,
  vanLoader,
  dashboardLoader,
  incomeLoader,
  reviewsLoader,
  hostVansLoader,
  hostVanLoader,
  loginLoader,
} from "./loaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} loader={loginLoader} action={loginAction} />

      <Route path="vans" element={<Vans />} errorElement={<Error />} loader={vansLoader} />
      <Route path="vans/:id" element={<VanDetail />} loader={vanLoader} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        <Route path="income" element={<Income />} loader={incomeLoader} />
        <Route path="reviews" element={<Reviews />} loader={reviewsLoader} />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route path="vans/:id" element={<HostVanDetail />} loader={hostVanLoader}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
