import db from "../db.js"; 

export const loginUser = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const [result] = await db.execute(
      "SELECT * FROM usuarios WHERE email = ? AND senha = ?",
      [email, senha]
    );

    if (result.length > 0) {
      return res.status(200).json({ message: "Login realizado com sucesso" });
    } else {
      return res.status(401).json({ message: "Email ou senha incorretos" });
    }
  } catch (erro) {
    console.error("Erro no login:", erro);
    return res.status(500).json({ message: "Erro no servidor" });
  }
};


export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const [result] = await db.execute(
      'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
      [name, email, password]
    );
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error during registration.' });
  }
};

export const getCarros = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM carros");
    res.status(200).json(rows);
  } catch (err) {
    console.error("Erro ao buscar carros:", err);
    res.status(500).json({ error: "Erro ao buscar carros." });
  }
};

export const getCarrosById = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.execute("SELECT * FROM carros WHERE id = ?", [id]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Carro não encontrado." });
    }
    res.status(200).json(result[0]);
  } catch (err) {
    console.error("Erro ao buscar carro:", err);
    res.status(500).json({ error: "Erro ao buscar o carro." });
  }
};

export const deleteCarro = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.execute("DELETE FROM carros WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Carro não encontrado." });
    }

    res.status(200).json({ message: "Carro excluído com sucesso!" });
  } catch (err) {
    console.error("Erro ao excluir carro:", err);
    res.status(500).json({ error: "Erro ao excluir carro." });
  }
};


export const updateCarro = async (req, res) => {
  const { id } = req.params;
  const { nome, marca, modelo, ano, preco } = req.body;

  if (!nome || !marca || !modelo || !ano || !preco) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios." });
  }

  if (isNaN(ano) || ano < 1900 || ano > new Date().getFullYear()) {
    return res.status(400).json({ message: "Ano inválido." });
  }

  if (isNaN(preco) || preco <= 0) {
    return res.status(400).json({ message: "Preço inválido." });
  }

  try {
    const [result] = await db.execute(
      "UPDATE carros SET nome = ?, marca = ?, modelo = ?, ano = ?, preco = ? WHERE id = ?",
      [nome, marca, modelo, ano, preco, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Carro não encontrado." });
    }

    res.status(200).json({ message: "Carro atualizado com sucesso!" });
  } catch (err) {
    console.error("Erro ao atualizar carro:", err);
    res.status(500).json({ error: "Erro ao atualizar carro." });
  }
};

export const createCarro = async (req, res) => {
  const { nome, marca, modelo, ano, preco } = req.body;

  if (!nome || !marca || !modelo || !ano || !preco) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios." });
  }

  const precoMaximo = 50000000;
  if (preco > precoMaximo) {
    return res.status(400).json({ message: `O valor do carro não pode exceder R$ ${precoMaximo.toLocaleString('pt-BR')}.` });
  }

  try {
    const [result] = await db.execute(
      "INSERT INTO carros (nome, marca, modelo, ano, preco) VALUES (?, ?, ?, ?, ?)",
      [nome, marca, modelo, ano, preco]
    );

    res.status(201).json({ message: "Carro cadastrado com sucesso!", id: result.insertId });
  } catch (err) {
    console.error("Erro ao cadastrar carro:", err);
    res.status(500).json({ error: "Erro ao cadastrar carro." });
  }
};

