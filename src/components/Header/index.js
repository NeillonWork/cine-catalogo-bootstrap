import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark p-3 fixed-top"
      style={{ backgroundColor: "#373737" }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Cine Catalogo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                <i className="bi bi-house text-success" /> Home
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            <Link
              to="/favoritos"
              type="button"
              className="btn btn-success"
              aria-current="page"
            >
              <i className="bi bi-camera-reels"></i> Meus favoritos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
