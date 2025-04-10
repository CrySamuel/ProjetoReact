import mysql from 'mysql2/promise';

const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2810leticia",
    database: "expcriativa"
});

export default db;