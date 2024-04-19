import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Favoritos from "./pages/Favoritos";
import Filme from "./pages/Filme";
import Footer from "./components/Footer";

function RoutesApp() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos / >} />
          <Route path="/filme/:id" element={<Filme/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default RoutesApp;
