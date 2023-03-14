import { Routes, Route, Outlet } from "react-router-dom";
import Overview from "../modules/Host/Dashboard";
import Incomes from "../modules/Host/Incomes";
import Reviews from "../modules/Host/Reviews";

const Host = () => {
  return (
    <Route>
      <Route element={<Overview />} />
      <Route path="incomes" element={<Incomes />} />
      <Route path="reviews" element={<Reviews />} />
    </Route>
  );
};

export default Host;
