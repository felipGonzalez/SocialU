var express = require('express');
var router = express.Router();
var dbConnection = require('../connection/Connection');
const collectionThemeInterest = 'themeInterest';

//Obtener Intereses
router.get('/', (req, res) => {
    dbConnection.getConsulta({},collectionThemeInterest, (documentos) => {
      res.send(documentos);
    })
})

//Guarda todos los Temas de interes
router.post('/themeInterest', function(req, res){
    console.log(req.body);
    saveConsulta(req.body, collectionThemeInterest, (documentos) => {
      res.send(documentos);
    })
});


module.exports = router;