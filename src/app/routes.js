const express = require('express');
const router = express.Router();

const ImportacaoController = require('./controllers/ImportacaoController');

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', async function(req, res) {res.status(200).json({message: "Hello Word!"})});
router.get('/marca', async function(req, res) {await ImportacaoController.importarMarca(req,res)});
router.get('/modelo', async function(req, res) {await ImportacaoController.importarModelo(req,res)});

router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;