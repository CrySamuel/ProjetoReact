import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./CarroDetalhe.css";

function CarroDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [carro, setCarro] = useState(null);

  useEffect(() => {
    const fetchCarro = async () => {
      try {
        const resposta = await fetch(`http://localhost:8800/api/carros/${id}`);
        const dados = await resposta.json();
        setCarro(dados);
      } catch (error) {
        console.error("Erro ao buscar detalhes do carro:", error);
      }
    };

    fetchCarro();
  }, [id]);

  const handleExcluir = async () => {
    const confirmar = window.confirm("Tem certeza que deseja excluir este carro?");
    if (!confirmar) return;

    try {
      const resposta = await fetch(`http://localhost:8800/api/carros/${id}`, {
        method: "DELETE",
      });

      const dados = await resposta.json();
      alert(dados.message);
      navigate("/home");
    } catch (error) {
      alert("Erro ao excluir o carro.");
      console.error("Erro ao excluir carro:", error);
    }
  };

  if (!carro) return <p>Carregando detalhes do carro...</p>;

  return (
    <div className="detalhes-container">
      <h2>Detalhes do Carro</h2>
      <div className="info-bloco">
        <p><strong>Nome:</strong> {carro.nome}</p>
        <p><strong>Marca:</strong> {carro.marca}</p>
        <p><strong>Modelo:</strong> {carro.modelo}</p>
        <p><strong>Ano:</strong> {carro.ano}</p>
        <p><strong>Preço:</strong> R$ {Number(carro.preco).toFixed(2)}</p>
      </div>

      <div className="botoes-detalhes">
        <Link to={`/editar/${id}`}>
          <button className="botao-editar">Editar</button>
        </Link>
        <button className="botao-excluir" onClick={handleExcluir}>Excluir</button>
      </div>

      <Link to="/home">
        <button style={{ marginTop: '20px' }}>Voltar à Home</button>
      </Link>
    </div>
  );
}

export default CarroDetalhes;
