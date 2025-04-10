import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import CarroDetalhes from "./Pages/Carro Detalhe/CarroDetalhe";
import EditarCarro from "./Pages/Editar Carro/EditarCarro";
import CadastrarCarro from "./Pages/Cadastro Carro/CadastroCarro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/carro/:id" element={<CarroDetalhes />} />
        <Route path="/editar/:id" element={<EditarCarro />} />
        <Route path="/cadastrar" element={<CadastrarCarro />} />
      </Routes>
    </Router>
  );
}

export default App;
