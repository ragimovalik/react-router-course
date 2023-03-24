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
import Host from "./pages/Host";
import FourOFour from "./pages/FourOFour";
import VanDetails from "./modules/Vans/VanDetails";
import Layout from "./components/Layout";
import Error from "./components/Error";

import { loader as vansLoader } from "./modules/Vans/VanList";

import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />

      <Route path="vans">
        const [loading, setLoading] = useState(false);
        <Route
          index
          element={<Vans />}
          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route path=":id" element={<VanDetails />} />
      </Route>

      <Route path="host/*" element={<Host />} />

      <Route path="*" element={<FourOFour />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
