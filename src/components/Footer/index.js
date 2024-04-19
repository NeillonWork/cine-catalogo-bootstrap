import { Link } from "react-router-dom";
import "./footer.css";

function Rodape() {
  return (
    <footer className="d-flex justify-content-center">
      <span className="rodape">
        <img
          className="gitlogo"
          src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
          alt=""
        />
        <span className="feito-por">Feito por</span>
        <Link to="https://github.com/NeillonWork" className="autor">
          NeillonWork
        </Link>
      </span>
    </footer>
  );
}

export default Rodape;
