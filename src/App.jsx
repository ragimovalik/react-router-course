import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import Login from "./pages/Login";
import FourOFour from "./pages/FourOFour";
import VanDetails, {
  loader as vanDetailsLoader
} from "./modules/Vans/VanDetails";
import Layout from "./components/Layout";
import Error from "./components/Error";

import HostLayout from "./modules/Host/HostLayout";
import Dashboard from "./modules/Host/Dashboard";
import Incomes from "./modules/Host/Incomes";
import Reviews from "./modules/Host/Reviews";
import HostVans, { loader as hostVansLoader } from "./modules/Host/HostVans";
import HostVanDetails, {
  loader as hostVanDetailLoader
} from "./modules/Host/HostVanDetails";
import HostVanPricing from "./modules/Host/HostVanPricing";
import HostVanPhoto from "./modules/Host/HostVanPhoto";
import HostVanInfo from "./modules/Host/HostVanInfo";

import { loader as vansLoader } from "./modules/Vans/VanList";

import { requireAuth } from "./utils/utils";

import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />

      <Route path="vans">
        <Route
          index
          element={<Vans />}
          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route path=":id" element={<VanDetails />} loader={vanDetailsLoader} />
      </Route>

      <Route
        path="host"
        element={<HostLayout />}
        loader={async () => await requireAuth()}
      >
        <Route
          index
          element={<Dashboard />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="incomes"
          element={<Incomes />}
          loader={async () => await requireAuth()}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={hostVanDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="photo"
            element={<HostVanPhoto />}
            loader={async () => await requireAuth()}
          />
        </Route>
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => await requireAuth()}
        />
      </Route>

      <Route path="*" element={<FourOFour />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/*
<Route
   element={<AuthRequired />}
   loader={async () => {
     return null;
   }}
 >
</Route> 
*/
