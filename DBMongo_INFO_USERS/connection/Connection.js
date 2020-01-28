const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = 'electiva2';
const assert = require('assert');

var getConsulta = function (query, collectionName,callback) {
   
    
    
    MongoClient.connect(url + dbName, function (err, client) {
      const db = client.db(dbName);
      findDocuments(query, db, collectionName, callback);
    })
  }
  
var saveConsulta = function (query,collectionName, callback) {
    MongoClient.connect(url + dbName, function (err, client) {
      const db = client.db(dbName);
      saveDocuments(query, db, collectionName, callback)
    })
  }
  
  
  const findDocuments = function (query, db, collectionName, callback) {
    const collection = db.collection(collectionName);
    console.log("Consulta   " + query);
    collection.find(query).toArray(function (err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      
      callback(docs);
    });
  }
  
  
  
  const saveDocuments = function(query, db, collectionName,callback) {
    const collection = db.collection(collectionName);
    collection.insertOne(query, function(err, docs) {
      // Tests unitarios
      assert.equal(err, null);
      callback(docs);
    });
  }


  module.exports.saveConsulta = saveConsulta;
  module.exports.getConsulta = getConsulta;