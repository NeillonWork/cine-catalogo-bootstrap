import { useEffect, useState } from "react";

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
    alert(`FILME ${id} retirado da lista`);

    localStorage.setItem("@cineCatalogo", JSON.stringify(verificaFilme));
  }

  return (
    <div className="container mt-5 mb-5" style={{ paddingTop: "4rem" }}>
      <h1 className="mb-5">
        <i className="bi bi-camera-reels text-success"></i> Meus favoritos
      </h1>
      <div className="row">
        {filmes.map((filme) => {
          return (
            <div key={filme.id} className="col-sm-3 mb-3">
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                  className="card-img-top"
                  alt={filme.title}
                />
                <div className="card-body">
                  <p>.....</p>
                </div>
                <div className="card-footer d-grid gap-2 d-md-flex justify-content-md-end">
                  <a
                    href={`/filme/${filme.id}`}
                    className="btn btn-outline-success btn-sm justify-end"
                  >
                    Ver detalhes
                  </a>
                  <button
                    onClick={() => {
                      removeFilme(filme.id);
                    }}
                    className="btn btn-outline-danger btn-sm justify-end"
                  >
                    Remover
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favoritos;
