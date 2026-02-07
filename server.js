const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  await pool.query(
    "INSERT INTO contacts(name, email, message) VALUES($1,$2,$3)",
    [name, email, message]
  );

  res.json({ success: true });
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server started"));
