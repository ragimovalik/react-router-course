import { Routes, Route } from "react-router-dom";

import HostLayout from "../modules/Host/HostLayout";
import Dashboard from "../modules/Host/Dashboard";
import Incomes from "../modules/Host/Incomes";
import Reviews from "../modules/Host/Reviews";
import HostVans from "../modules/Host/HostVans";
import HostVanDetails from "../modules/Host/HostVanDetails";
import HostVanPricing from "../modules/Host/HostVanPricing";
import HostVanPhoto from "../modules/Host/HostVanPhoto";
import HostVanInfo from "../modules/Host/HostVanInfo";

const Host = () => {
  return (
    <Routes>
      <Route element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="incomes" element={<Incomes />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetails />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photo" element={<HostVanPhoto />} />
        </Route>

        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Routes>
  );
};

export default Host;
