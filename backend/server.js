const express = require('express');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.post('/api/auth/login', async (req, res) => {
  const { email } = req.body;
  try {
    const { rows } = await pool.query('SELECT * FROM workshops WHERE email = $1', [email]);
    if (rows.length > 0) {
      const token = jwt.sign({ id: rows[0].id }, process.env.JWT_SECRET, { expiresIn: '24h' });
      res.json({ token, workshop: rows[0].name });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  } catch (error) { res.status(500).json({ error: 'Error del servidor' }); }
});

app.get('/api/clients', authenticateToken, async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM clients WHERE workshop_id = $1', [req.user.id]);
    res.json(rows);
  } catch (error) { res.status(500).json({ error: 'Error al obtener clientes' }); }
});

app.listen(5000, () => console.log('Backend corriendo en puerto 5000'));
