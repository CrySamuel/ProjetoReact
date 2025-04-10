import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import carro from "../../Assets/carroBg.png";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch("http://localhost:8800/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        alert(dados.message);
        navigate("/home");
      } else {
        alert(dados.message || "Erro no login.");
      }
    } catch (erro) {
      console.error("Erro ao fazer login:", erro);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <img src={carro} alt="Logo" className="icon-center" />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
          <p className="link-text">
            Não tem uma conta? <Link to="/register">Registre-se aqui</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
