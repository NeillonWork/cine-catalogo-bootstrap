import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Error from "./pages/Error";
import Favoritos from "./pages/Favoritos";
import Filmes from "./pages/Filmes";

function RoutesApp() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/favoritos" element={<Favoritos / >} />
          <Route path="/filmes" element={<Filmes/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesApp;
