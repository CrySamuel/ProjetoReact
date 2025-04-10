import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import carro from "../../Assets/carroBg.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const resposta = await fetch("http://localhost:8800/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        alert(dados.message);
        navigate("/home");
      } else {
        alert(dados.error || "Erro ao registrar usuário.");
      }
    } catch (error) {
      console.error("Erro no registro:", error);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <img src={carro} alt="Ícone" className="icon-center" />
        <h2>Registro</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Registrar</button>
          <p className="link-text">
            Já tem uma conta? <Link to="/">Faça login aqui</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
