const express = require('express');
const {
  convertidorTemp,
  resolvedor,
  mejorParidad,
  peorParidad,
} = require('../../taller-01');

const router = express.Router();

router.post('/convertidorTemp', (req, res) => {
  const { celsius } = req.body;
  if (typeof celsius !== 'number' || Number.isNaN(celsius)) {
    return res.status(400).json({ error: 'celsius debe ser un número' });
  }
  const fahrenheit = convertidorTemp(celsius);
  return res.json({ celsius, fahrenheit });
});

router.post('/resolvedor', (req, res) => {
  const { a, b, c, opt } = req.body;
  if (
    [a, b, c].some((v) => typeof v !== 'number' || Number.isNaN(v)) ||
    (opt !== 'p' && opt !== 'n')
  ) {
    return res.status(400).json({
      error: 'a, b, c deben ser números y opt debe ser "p" o "n"',
    });
  }
  const resultado = resolvedor(a, b, c, opt);
  return res.json({ a, b, c, opt, resultado });
});

router.post('/mejorParidad', (req, res) => {
  const { n } = req.body;
  if (typeof n !== 'number' || Number.isNaN(n)) {
    return res.status(400).json({ error: 'n debe ser un número' });
  }
  const r = mejorParidad(n); // 0 par, 1 impar
  return res.json({ n, esPar: r === 0, valor: r });
});

router.post('/peorParidad', (req, res) => {
  const { n } = req.body;
  if (typeof n !== 'number' || Number.isNaN(n)) {
    return res.status(400).json({ error: 'n debe ser un número' });
  }
  const r = peorParidad(n); // 0 par, 1 impar
  return res.json({ n, esPar: r === 0, valor: r });
});

module.exports = router;
