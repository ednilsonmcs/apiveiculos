const express = require('express');
const router = express.Router();

const ImportacaoController = require('./controllers/ImportacaoController');

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {ImportacaoController.importarMarca(req,res)});

router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;