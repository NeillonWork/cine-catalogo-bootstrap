import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="container d-flex justify-content-center">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">404 - Essa pagina nao existe</h1>
          <p class="lead">Links disponiveis:</p>
          <ul className="pb-5">
            <li>
              <Link className="text-decoration-none" to="/">
                Catalogo de FIlmes
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none" to="/favoritos">
                Favoritos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Error;
