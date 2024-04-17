import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-3 mb-5" style={{backgroundColor:"#373737"}}>
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
                <i class="bi bi-house text-success"/> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favoritos"
                className="nav-link active"
                aria-current="page"
              >
               <i class="bi bi-card-checklist text-success"></i> Favoritos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/filmes"
                className="nav-link active"
                aria-current="page"
              >
                <i class="bi bi-play-btn text-success"></i> Filmes
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
          <li className="nav-item">
              <Link
                to="/filmes"
                type="button" class="btn btn-success"
                aria-current="page"
              >
                <i class="bi bi-bookmark-dash"></i> Adicionar ao catalogo
              </Link>
            </li>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
