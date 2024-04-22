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
                <i class="bi bi-house text-success" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favoritos"
                className="nav-link disabled"
                aria-current="page"
              >
                <i class="bi bi-card-checklist text-success"></i> Favoritos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/filmes"
                className="nav-link disabled"
                aria-current="page"
              >
                <i class="bi bi-play-btn text-success"></i> Filme
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            <Link
              to="/filmes"
              type="button"
              class="btn btn-success"
              aria-current="page"
            >
              <i class="bi bi-camera-reels"></i> Meus favoritos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
