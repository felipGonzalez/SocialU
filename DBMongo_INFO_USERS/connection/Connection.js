const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = 'electiva2';
const assert = require('assert');
const objectId = require('mongodb').ObjectID;

var getConsulta = function (query, collectionName, callback) {
  MongoClient.connect(url + dbName, function (err, client) {
    const db = client.db(dbName);
    findDocuments(query, db, collectionName, callback);
  })
}

var saveConsulta = function (query, collectionName, callback) {
  MongoClient.connect(url + dbName, function (err, client) {
    const db = client.db(dbName);
    saveDocuments(query, db, collectionName, callback)
  })
}

var updateConsulta = function (query, newData, collectionName, callback) {
  MongoClient.connect(url + dbName, function (err, client) {
    
    const db = client.db(dbName);
    updateDocuments(query, newData, db, collectionName, callback);
  })
}

const updateDocuments = function (query, newData, db, collectionName, callback) {
  const collection = db.collection(collectionName);
  console.log("Query: ", query);
  console.log("Data: ", newData);
  
  
  collection.update(query, newData,{ upsert: true }, function (err, docs) {
    if (err) {
      console.log(err);
      
      console.log("error al actualizar");
    } else {
      console.log("actualiza");
      
      callback(docs);
    }
  });
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




const saveDocuments = function (query, db, collectionName, callback) {
  const collection = db.collection(collectionName);
  collection.insertOne(query, function (err, docs) {
    // Tests unitarios
    assert.equal(err, null);
    callback(docs);
  });
}

var agregation = function (collectionName, callback) {
  MongoClient.connect(url + dbName, function (err, client) {
    const db = client.db(dbName);
    aggregateOne(collectionName, db, callback)
  })
}

const aggregateOne = async function (col, db, callback) {
  const collection = db.collection(col);
  collection.aggregate([
    {
      $project: { _id: 0 }
    }
  ]
  ).toArray(function (err, docs) {
    callback(docs)
  });
}


module.exports.saveConsulta = saveConsulta;
module.exports.getConsulta = getConsulta;
module.exports.agregation = agregation;
module.exports.updateConsulta = updateConsulta;