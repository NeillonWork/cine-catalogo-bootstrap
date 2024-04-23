import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    function ListaFilmes() {
      const recuperaLista = localStorage.getItem("@cineCatalogo");
      setFilmes(JSON.parse(recuperaLista) || []);
    }

    ListaFilmes();
  }, []);

  function removeFilme(id) {
    let verificaFilme = filmes.filter((filme) => {
      return filme.id !== id;
    });
    setFilmes(verificaFilme);

    Swal.fire({
      title: "Filme removido dos favoritos",
      icon: "error",
      showConfirmButton: false,
      timer: 3000,
    });

    localStorage.setItem("@cineCatalogo", JSON.stringify(verificaFilme));
  }

  return (
    <div className="container mt-5 mb-5" style={{ paddingTop: "4rem" }}>
      <h1 className="mb-5">
        <i className="bi bi-camera-reels text-success"></i> Meus favoritos
      </h1>
      <div className="row">
        <table className="table table-dark table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>Titulo</th>
              <th className="text-center" >Ações</th>
            </tr>
          </thead>
          <tbody>
            {filmes.map((filme) => {
              return (
                <tr key={filme.id}>
                  <th>{filme.title}</th>
                  <th>
                    <div className="d-grid d-md-flex justify-content-md-center gap-2">
                      <Link
                      to={`/filme/${filme.id}`}
                        className="btn btn-outline-success btn-sm me-md-2"
                        type="button"
                      >
                        Detalhes
                      </Link>
                      <button
                      onClick={()=> removeFilme(filme.id)}
                        className="btn btn-outline-danger btn-sm"
                        type="button"
                      >
                        Excluir
                      </button>
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Favoritos;
