var express = require('express');
var router = express.Router();
var dbConnection = require('../connection/Connection');
const collectionPublication = 'publication';

//Obtener Intereses
router.get('/', (req, res) => {
    dbConnection.getConsulta({},collectionPublication, (documentos) => {
      res.send(documentos);
    })
})

//Guarda todos los Temas de interes
router.post('/savePublication', function(req, res){
    console.log(req.body);
    dbConnection.saveConsulta(req.body, collectionPublication, (documentos) => {
      res.send(documentos);
    })
});


module.exports = router;