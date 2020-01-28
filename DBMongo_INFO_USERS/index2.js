var express = require('express');
var app = express();
const port = 3000;

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/';
const dbName = 'electiva2';
const dbCollectionUser = 'user';
const dbCollectionThemeInterest = 'themeInterest';



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

function getConsulta(query, collectionName,callback) {
  MongoClient.connect(url + dbName, function (err, client) {
    const db = client.db(dbName);
    findDocuments(query, db, collectionName, callback);
  })
}

function saveConsulta(query,collectionName, callback) {
  MongoClient.connect(url + dbName, function (err, client) {
    const db = client.db(dbName);
    saveDocuments(query, db, collectionName, callback)
  })
}


const findDocuments = function (query, db, collectionName, callback) {
  const collection = db.collection(collectionName);
  collection.find(query).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs.length)
    callback(docs);
  });
}



const saveDocuments = function(query, db, collectionName,callback) {
  const collection = db.collection(collectionName);
  collection.insert(query, function(err, docs) {
    // Tests unitarios
    assert.equal(err, null);
    console.log(docs.length)
    callback(docs);
  });
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});

//Retorna todos los Temas de interes
app.get('/themeInterest', (req, res) => {
  getConsulta('{}',dbCollectionThemeInterest, (documentos) => {
    res.send(documentos);
  })
})
//Guarda todos los Temas de interes
app.post('/themeInterest', function(req, res){
  console.log(req.body);
  saveConsulta(req.body, dbCollectionThemeInterest, (documentos) => {
    res.send(documentos);
  })
});

//Retorna todos los usuarios
app.get('/getUser', (req, res) => {
  console.log("entro" + req.params);
})


//Guarda todos los usuarios
app.post('/saveUser', function(req, res){
  console.log(req.body);
 /*saveConsulta(req.body, dbCollectionUser, (documentos) => {
    res.send(documentos);
  })*/
});


/*
app.get('/', (req, res) => {
  console.log("entro" + req.params.tipo);
  getConsulta({ "tipo": req.params.tipo }, (documentos) => {
    res.send(documentos);
  })
})
*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

