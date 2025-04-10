CREATE DATABASE IF NOT EXISTS expCriativa;
USE expCriativa;

	CREATE TABLE IF NOT EXISTS usuarios (
	  id INT AUTO_INCREMENT PRIMARY KEY,
	  nome VARCHAR(100),
	  email VARCHAR(100) UNIQUE,
	  senha VARCHAR(100)
	);

INSERT INTO usuarios (nome, email, senha) VALUES
('Marisol', 'Elisa_Von4@hotmail.com', 'teste123'),
('Alfred', 'Jenifer_Ebert@hotmail.com', 'teste123'),
('Elias', 'Alfreda.Hettinger@hotmail.com', 'teste123'),
('crystofer', 'crystofer@gmail.com', '123');

SELECT * FROM usuarios WHERE email = 'crystofer@gmail.com' AND senha = '123';

CREATE TABLE IF NOT EXISTS carros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  marca VARCHAR(100) NOT NULL,
  modelo VARCHAR(100) NOT NULL,
  ano INT NOT NULL,
  preco DECIMAL(10, 2) NOT NULL
);

INSERT INTO carros (nome, marca, modelo, ano, preco) VALUES
('Corolla Sedan', 'Toyota', 'Corolla', 2020, 85000.00),
('Civic Sport', 'Honda', 'Civic', 2019, 83000.00),
('HB20 Comfort', 'Hyundai', 'HB20', 2021, 65000.00),
('Onix LTZ', 'Chevrolet', 'Onix', 2022, 72000.00),
('Argo Drive', 'Fiat', 'Argo', 2021, 61000.00),
('Gol Trendline', 'Volkswagen', 'Gol', 2018, 47000.00),
('Compass Limited', 'Jeep', 'Compass', 2020, 125000.00),
('Tracker Turbo', 'Chevrolet', 'Tracker', 2021, 98000.00),
('Renegade Sport', 'Jeep', 'Renegade', 2019, 87000.00),
('Ka SE', 'Ford', 'Ka', 2018, 46000.00),
('Cronos Precision', 'Fiat', 'Cronos', 2022, 78000.00),
('Sandero Stepway', 'Renault', 'Sandero', 2020, 69000.00),
('Etios XS', 'Toyota', 'Etios', 2019, 56000.00),
('C3 Urban Trail', 'Citroën', 'C3', 2018, 52000.00),
('Versa SL', 'Nissan', 'Versa', 2021, 69000.00);

