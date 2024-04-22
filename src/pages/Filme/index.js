import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  const navegate = useNavigate();

  useEffect(() => {
    async function loadFilme() {
      const response = await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "bd87ec7688f77cd16be1c6ecd91de7b2",
            language: "pt-BR",
          },
        })

        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          navegate("/", { replace: true });
        });
    }

    loadFilme();
  }, [id, navegate]);

  function filmesSalvos() {
    const minhaLista = localStorage.getItem("@cineCatalogo");
    let filmeSalvo = JSON.parse(minhaLista) || [];

    const verificaLista = filmeSalvo.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );

    if (verificaLista) {
      Swal.fire({
        title: `${filme.title}`,
        text: "Já existe em sua lista",
        icon: "error",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    filmeSalvo.push(filme);
    localStorage.setItem("@cineCatalogo", JSON.stringify(filmeSalvo));

    Swal.fire({
      title: `${filme.title}`,
      text: "Salvo em sua lista de favoritos!",
      icon: "success",
      showConfirmButton: false,
      timer: 3000,
    });
  }

  if (loading) {
    return (
      <div className="container mt-5 mb-5">
        <h1>Carregando informações do filme ... </h1>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5" style={{ paddingTop: "4rem" }}>
      <h1 className="mb-5"><i class="bi bi-search text-success"></i> Detalhes - {filme.title}</h1>
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
          alt={filme.title}
        />
        <div className="card-body">
          <h5 className="card-title">{filme.title}</h5>
          <p className="card-text">{filme.overview}</p>
          <p className="card-text">
            <small className="text-muted">
              Avaliação: <i className="bi bi-emoji-smile text-success"></i>{" "}
              {filme.vote_average} /10
            </small>
          </p>

          <div className="d-grid gap-2 d-md-block">
            <button
              onClick={filmesSalvos}
              className="btn btn-outline-success"
              type="button"
            >
              <i class="bi bi-check-lg"></i> Salvar
            </button>
            <a
              target="blank"
              rel="external"
              className="btn btn-outline-primary m-1"
              href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
            >
              <i class="bi bi-youtube text-danger"></i> Trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filme;
