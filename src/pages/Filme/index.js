import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`/movie/${id}`, {
        params: {
          api_key: "bd87ec7688f77cd16be1c6ecd91de7b2",
          language: "pt-BR",
        },
      });
      setFilme(response.data);
    }

    loadFilme();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="container mt-5 mb-5">
        <h1>Carregando informações do filme ... </h1>
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ paddingTop: "4rem" }}>
      <div class="card mb-3">
        <img
          class="card-img-top"
          src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
          alt={filme.title}
        />
        <div class="card-body">
          <h5 class="card-title">{filme.title}</h5>
          <p class="card-text">{filme.overview}</p>
          <p class="card-text">
            <small class="text-muted">
              Avaliação: <i class="bi bi-emoji-smile text-success"></i> {filme.vote_average} /10
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Filme;
