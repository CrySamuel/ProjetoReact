import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [carros, setCarros] = useState([]);
  const [carroSelecionado, setCarroSelecionado] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const buscarCarros = async () => {
      try {
        const resposta = await fetch("http://localhost:8800/api/carros");
        const dados = await resposta.json();
        setCarros(dados);
      } catch (error) {
        console.error("Erro ao buscar carros:", error);
      }
    };

    buscarCarros();
  }, []);

  const verDetalhes = () => {
    if (carroSelecionado) {
      navigate(`/carro/${carroSelecionado}`);
    } else {
      alert("Selecione um carro primeiro!");
    }
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Bem-vindo à Home</h1>
        <Link to="/cadastrar">
          <button className="botao-adicionar">Adicionar Carro</button>
        </Link>
      </div>

      <div className="select-box">
        <h2>Escolha um carro:</h2>
        <select
          value={carroSelecionado || ""}
          onChange={(e) => setCarroSelecionado(e.target.value)}
        >
          <option value="">-- Selecione um carro --</option>
          {carros.map((carro) => (
            <option key={carro.id} value={carro.id}>
              {carro.nome} ({carro.ano})
            </option>
          ))}
        </select>

        <button className="botao-detalhes" onClick={verDetalhes}>
          Mais detalhes
        </button>
      </div>
    </div>
  );
}

export default Home;
