var express = require('express');
var router = express.Router();
var dbConnection = require('../connection/Connection');
const dbCollectionUser = 'user';
var listUser;

//Retorna todos los usuarios
router.get('/', (req, res) => {
  console.log("Obtener todos los usuarios");
  dbConnection.getConsulta({}, dbCollectionUser, (documents) => {
    res.send(documents);
  });
});


//Guarda todos los usuarios
router.post('/saveUser', function (req, res) {
  console.log("Guardar usuario");
  user = req.body;
  console.log(user);
  var userExist = false;
  dbConnection.getConsulta({}, dbCollectionUser, (documents) => {
    
    for (let i = 0; i < documents.length; i++) {
      console.log(documents[i].email === user.email);
      
      if(documents[i].email === user.email){
        userExist = true;
      }
    }
    console.log(userExist);
    
    if(!userExist) {
      dbConnection.saveConsulta(req.body, dbCollectionUser, (documents) => {
        res.send(documents);
      })
    }else {
      console.log("Usuario ya existente");
      res.send([]);
    }
  });
});

//cargar usuario {name: 'Tom'}, {_id: 0, age: 1})

//Retorna todos los usuarios
router.post('/initSesion', (req, res) => {
  console.log("Logear usuario");
  
  console.log(req.body);
  dbConnection.getConsulta({ "email": req.body.email,"password": req.body.password}, dbCollectionUser, (documents) => {
    console.log(documents);
    
    res.send(documents[0]);
  });
});

router.put('/updateUser', (req, res) =>{
  console.log(req.body);
  dbConnection.updateConsulta({"_id":req.body._id},req.body,dbCollectionUser,(documents) =>{
    res.send(documents[0]);
  })
});

module.exports = router;