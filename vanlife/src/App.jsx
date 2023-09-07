import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import HostLayout from "./components/HostLayout";
import Layout from "./components/Layout";
import Error from "./components/Error";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Vans, { vansLoader } from "./pages/Vans/Vans";
import VanDetail, { vanLoader } from "./pages/Vans/VanDetail";

import Dashboard, { dashboardLoader } from "./pages/Host/Dashboard";
import Income, { incomeLoader } from "./pages/Host/Income";
import Reviews, { reviewsLoader } from "./pages/Host/Reviews";
import HostVans, { hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetail, { hostVanLoader } from "./pages/Host/HostVanDetail";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanInfo from "./pages/Host/HostVanInfo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />

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
