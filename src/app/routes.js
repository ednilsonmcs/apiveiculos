const express = require('express');
const router = express.Router();

const ImportacaoController = require('./controllers/ImportacaoController');
const ControllerVeiculos = require('./controllers/ControllerVeiculos');

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  res.json({"created by":"Ednilson Messias", "routes": {"1":"/getVeiculos"}});
});

//Veiculos
router.get('/getVeiculos', function(req, res) {ControllerVeiculos.getVeiculos(req,res)});
router.get('/getVeiculoByName', function(req, res) {res.json({"message":"empty"})});

//Marcas
router.get('/getMarcas', function(req, res) {res.json({"message":"empty"})});


module.exports = router;