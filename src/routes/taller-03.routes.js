const express = require('express');
const {
  desglosarString,
  twoSum,
  conversionRomana,
  descomposicion,
} = require('../../taller-03');

const router = express.Router();

router.post('/desglosarString', (req, res) => {
  const { texto, tipo } = req.body;
  if (typeof texto !== 'string' || !texto.length) {
    return res.status(400).json({ error: 'texto debe ser una string no vacía' });
  }
  if (tipo !== 'vocales' && tipo !== 'consonantes') {
    return res
      .status(400)
      .json({ error: 'tipo debe ser "vocales" o "consonantes"' });
  }
  const cantidad = desglosarString(texto, tipo);
  return res.json({ texto, tipo, cantidad });
});

router.post('/twoSum', (req, res) => {
  const { numbers, target } = req.body;
  if (!Array.isArray(numbers) || numbers.some((n) => typeof n !== 'number')) {
    return res.status(400).json({ error: 'numbers debe ser un arreglo numérico' });
  }
  if (typeof target !== 'number' || Number.isNaN(target)) {
    return res.status(400).json({ error: 'target debe ser un número' });
  }
  const indices = twoSum(numbers, target) ?? null;
  return res.json({ numbers, target, indices });
});

router.post('/conversionRomana', (req, res) => {
  const { romano } = req.body;
  if (typeof romano !== 'string' || !romano.length) {
    return res.status(400).json({ error: 'romano debe ser una string no vacía' });
  }
  const valor = conversionRomana(romano);
  return res.json({ romano, valor });
});

router.post('/descomposicion', (req, res) => {
  const { cadena } = req.body;
  if (typeof cadena !== 'string' || !cadena.length) {
    return res.status(400).json({ error: 'cadena debe ser una string no vacía' });
  }
  const pares = descomposicion(cadena);
  return res.json({ cadena, pares });
});

module.exports = router;
