import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import Host from "./pages/Host";
import Login from "./pages/Login";
import FourOFour from "./pages/FourOFour";
import VanDetails from "./modules/Vans/VanDetails";
import Layout from "./components/Layout";
import AuthRequired from "./components/AuthRequired";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />

          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetails />} />
          </Route>
          <Route element={<AuthRequired />}>
            <Route path="host/*" element={<Host />} />
          </Route>

          <Route path="*" element={<FourOFour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
