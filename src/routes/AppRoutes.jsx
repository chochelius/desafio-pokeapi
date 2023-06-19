import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Pokemones from "../pages/Pokemones";
import Pokemon from "../pages/Pokemon";

const AppRoutes = () => {
    return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
    );
}

export default AppRoutes;
