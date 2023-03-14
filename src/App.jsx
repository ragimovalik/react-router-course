import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanDetails from "./modules/Vans/VanDetails";
// import Host from "./pages/Host";
import Layout from "./components/Layout";
import Dashboard from "./modules/Host/Dashboard";
import Incomes from "./modules/Host/Incomes";
import Reviews from "./modules/Host/Reviews";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
          <Route path="/host" element={<Dashboard />}>
            <Route path="/host/incomes" element={<Incomes />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
