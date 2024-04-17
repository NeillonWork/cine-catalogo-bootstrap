import { useEffect, useState } from "react";
import "../../services/api";
import api from "../../services/api";
import { Link } from "react-router-dom";

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "bd87ec7688f77cd16be1c6ecd91de7b2",
          language: "pt-BR",
          page: 1,
        },
      });
      //console.log(response.data.results.slice(0, 10));

      setFilmes(response.data.results.slice(0, 10));
     // console.log(response.data.results.slice(0, 2));
    }

    loadFilmes();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {filmes.map((filme) => {
          return (
            <div key={filme.id} className="col-sm-3">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                  className="card-img-top"
                  alt={filme.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{filme.title}</h5>
                  <p className="card-text">{filme.overview}</p>

                
                  <Link to={`/filmes/${filmes.id}`} className="btn btn-primary">
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
