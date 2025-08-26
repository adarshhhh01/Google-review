import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: "neondb_owner",
  host: "ep-quiet-moon-a1o5mmf4-pooler.ap-southeast-1.aws.neon.tech",
  database: "neondb",
  password: "npg_YXlOcikmDv41",
  port: 5432,
  ssl: true, // Neon requires SSL
});

const result = await pool.query("SELECT * FROM articles;");
console.log(result.rows);


export default pool