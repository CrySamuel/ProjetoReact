import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./EditarCarro.css";

function EditarCarro() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [carro, setCarro] = useState({
        nome: "",
        marca: "",
        modelo: "",
        ano: "",
        preco: "",
    });

    useEffect(() => {
        const fetchCarro = async () => {
            const resposta = await fetch(`http://localhost:8800/api/carros/${id}`);
            const dados = await resposta.json();
            setCarro(dados);
        };

        fetchCarro();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarro((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const resposta = await fetch(`http://localhost:8800/api/carros/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(carro),
        });

        const dados = await resposta.json();
        alert(dados.message);
        navigate("/home");
    };

    return (
        <div className="editar-container">
            <h2>Editar Carro</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={carro.nome}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="marca"
                    placeholder="Marca"
                    value={carro.marca}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="modelo"
                    placeholder="Modelo"
                    value={carro.modelo}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="ano"
                    placeholder="Ano"
                    value={carro.ano}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="preco"
                    placeholder="Preço"
                    value={carro.preco}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Salvar Alterações</button>
            </form>

            <Link to="/home">
                <button style={{ marginTop: '20px' }}>Voltar à Home</button>
            </Link>
        </div>
    );
}

export default EditarCarro;
