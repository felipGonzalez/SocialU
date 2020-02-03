var express = require('express');
var router = express.Router();
var dbConnection = require('../connection/Connection');
const collectionPublication = 'publication';


router.get('/', (req, res) => {
  dbConnection.getConsulta({}, collectionPublication, (documentos) => {
    res.send(documentos);
  })
})
/*
router.get('/', (req, res) => {
  dbConnection.agregation(collectionPublication, (documentos) => {
    res.send(documentos);
  })
})
*/

//Guarda la publicacion
router.post('/savePublication', function (req, res) {
  console.log("Entra a guardar publicacion", req.body);
  dbConnection.saveConsulta(req.body, collectionPublication, (documentos) => {
    res.send(documentos);
  })
});


//like de la publicacion
router.post('/sendLike', function (req, res) {
  console.log("Entra a guardar like", req.body);
  dbConnection.updateConsulta(`_id:${req.body.id}`, `$set : {${req.body.likes}}`, collectionPublication, (documentos) => {
    res.send(documentos);
  });
});

module.exports = router;