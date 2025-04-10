# 🚗 Projeto CRUD de Carros - React + Node.js + MySQL

Este projeto é um sistema de gerenciamento de carros desenvolvido com as seguintes tecnologias:

- **Frontend:** React.js  
- **Backend:** Node.js + Express  
- **Banco de Dados:** MySQL  

---

## ✨ Funcionalidades

- ✅ Cadastro de carros (nome, marca, modelo, ano e preço)  
- ✅ Listagem de todos os carros disponíveis  
- ✅ Visualização de detalhes de um carro específico  
- ✅ Atualização de dados de um carro  
- ✅ Exclusão de carros  
- ✅ Validação simples de login  
- ✅ Interface amigável e responsiva com tema escuro  

---

## 🛠️ Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2. Configurar o Backend

- Instale as dependências:

```bash
cd BackEnd
npm install
```

- Configure o banco de dados MySQL:

```sql
CREATE DATABASE carros_db;

USE carros_db;

CREATE TABLE IF NOT EXISTS carros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  marca VARCHAR(100) NOT NULL,
  modelo VARCHAR(100) NOT NULL,
  ano INT NOT NULL,
  preco DECIMAL(10, 2) NOT NULL
);
```

- Adicione dados com os inserts fornecidos no projeto.

- Inicie o servidor:

```bash
npm start
```

### 3. Configurar o Frontend

- Vá para a pasta do frontend:

```bash
cd ../FrontEnd/projetoreact
npm install
npm start
```

---

## 🌐 Rotas da API

| Método | Rota                | Descrição                |
|--------|---------------------|--------------------------|
| GET    | /api/carros         | Lista todos os carros    |
| GET    | /api/carros/:id     | Detalhes de um carro     |
| POST   | /api/carros         | Cadastra novo carro      |
| PUT    | /api/carros/:id     | Atualiza dados do carro  |
| DELETE | /api/carros/:id     | Remove um carro          |

---

## 📁 Estrutura de Pastas

```
Projeto/
│
├── BackEnd/
│   ├── Controllers/
│   ├── Routes/
│   └── index.js
│
├── FrontEnd/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── Detalhes.jsx
│   │   ├── components/
│   │   └── App.jsx
│   └── public/
│
└── README.md
```

---

## 🎨 Estilo

- Tema escuro  
- Cores principais: preto (`#0e0e0e`) com detalhes em vermelho (`#ff0000`)  
- Estilizado com CSS puro, responsivo e elegante  

---

## 📌 Requisitos

- Node.js  
- MySQL  
- npm  

---

## 🙋‍♂️ Autor

**Crystofer Samuel Demetino Dos Santos**  
📧 demetinocrystofer@gmail.com  

---
