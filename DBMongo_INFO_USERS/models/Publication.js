var express = require('express');
var router = express.Router();
var dbConnection = require('../connection/Connection');
const collectionPublication = 'publication';
const { ObjectId } = require('mongodb');

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
  dbConnection.updateConsulta({ _id: ObjectId(req.body.id) }, req.body, collectionPublication, (documentos) => {
    console.log(documentos[0]);
    res.send(documentos[0]);
  });
});

//comentarios de la publicacion
router.post('/saveComments', function (req, res) {
  console.log("Entra a guardar comentario", req.body);
  dbConnection.updateConsulta({ _id: ObjectId(req.body.id) }, req.body, collectionPublication, (documentos) => {
    console.log(documentos[0]);
    res.send(documentos[0]);
  });
});

module.exports = router;