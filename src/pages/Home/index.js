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

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "bd87ec7688f77cd16be1c6ecd91de7b2",
          language: "pt-BR",
          page: 1,
        },
      });

      setFilmes(response.data.results.slice(0, 10));
      console.log(response.data.results.slice(0, 10));
    }

    loadFilmes();
  }, []);

  function truncateText(text, maxLength) {
    const words = text.split(' ');
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(' ') + '...';
    } else {
      return text;
    }
  }


  return (
    <div className="container">
      <div className="row">
        {filmes.map((filme) => {
          return (
            <div key={filme.id} className="col-sm-3 mb-3">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                  className="card-img-top"
                  alt={filme.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{filme.title}</h5>
                  <p className="card-text">{truncateText(filme.overview, 50)}</p>
                </div>
                <div
                  className="card-footer text-center"
                  style={{ backgroundColor: "#8db986" }}
                >
                  <Link
                    to={`/filmes/${filmes.id}`}
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
