const express = require('express');
const cors = require('cors');

const taller1Routes = require('./routes/taller-01.routes');
const taller2Routes = require('./routes/taller-02.routes');
const taller3Routes = require('./routes/taller-03.routes');

const app = express();

app.use(cors());
app.use(express.json());

// montar rutas
app.use('/api/taller-01', taller1Routes);
app.use('/api/taller-02', taller2Routes);
app.use('/api/taller-03', taller3Routes);

// endpoint de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API Funcionando' });
});

module.exports = app;
