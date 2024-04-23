import { useEffect, useState } from "react";
import "../../services/api";
import api from "../../services/api";
import { Link } from "react-router-dom";

//.color1 { #373737 }; escuro
//.color2 { #8db986 };
//.color3 { #acce91 }; medio verde
//.color4 { #badb73 };
//.color5 { #efeae4 }; claro

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "bd87ec7688f77cd16be1c6ecd91de7b2",
          language: "pt-BR",
          page: 1,
        },
      });

      setFilmes(response.data.results.slice(0, 12));
      console.log(response.data.results.slice(0, 12));
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <h1 className="">Carreagando Filmes...</h1>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5" style={{ paddingTop: "4rem" }}>
      <h1 className="mb-5"><i className="bi bi-house text-success"></i> Catalogo de filmes</h1>
      <div className="row">
        {filmes.map((filme) => {
          return (
            <div key={filme.id} className="col-sm-3 mb-3">
              <div className="card" >
                <img
                  src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                  className="card-img-top"
                  alt={filme.title}
                />
                <div
                  className="card-footer text-center"
                  style={{ backgroundColor: "#8db986" }}
                >
                  <Link
                    to={`/filme/${filme.id}`}
                    className="btn btn-success justify-content-md-end"
                  >
                    Ver detalhes
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
