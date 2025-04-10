import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CadastroCarro.css";

function CadastrarCarro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [preco, setPreco] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resposta = await fetch("http://localhost:8800/api/carros", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, marca, modelo, ano, preco }),
    });

    const dados = await resposta.json();
    alert(dados.message);
    if (resposta.ok) navigate("/home");
  };

  return (
    <div className="form-carro-container">
      <h2>Cadastrar Novo Carro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Ano"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/home">
        <button style={{ marginTop: "20px" }}>Voltar à Home</button>
      </Link>
    </div>
  );
}

export default CadastrarCarro;
