const driver = require('../db');

exports.saveUser = (req, res) => {
    const session = driver.session();
    console.log(req.body)
    const {_id, nameUser,firtsName,lastName,gender,dateBirth,career} = req.body;
    session.run(`CREATE (u:User {_id: $_id,nameUser : $nameUser,firtsName: $firtsName,lastName: $lastName,gender: $gender,dateBirth: $dateBirth,career: $career})
                            RETURN u`,
        {_id: _id, nameUser : nameUser,firtsName: firtsName,lastName: lastName,gender: gender,dateBirth: dateBirth,career: career})
        .then(result => {
            res.json(result.records);
        }).catch(err => {
        console.log(err);
        res.json([{message: 'Error en la inserción'}])
    });
    
};

exports.followUser = (req, res) => {
    
    const session = driver.session();
    const {nameUser, followNameUser, followDate} = req.body;
    session.run(`MATCH (a:User {nameUser: $nameUser}), (b:User {nameUser: $followNameUser})
                        CREATE (a)-[f:Follow {followDate: $followDate}]->(b)
                        RETURN f`,
        {nameUser: nameUser, followNameUser: followNameUser , followDate: followDate})
        .then(result => {
            res.json(result.records);
        }).catch(err => {
        console.log(err);
        res.json({message: 'Error en la inserción de la relación'})
    });
};

exports.userFollow = (req, res) => {
    const session = driver.session();
    const {nameUser} = req.body;
    console.log(nameUser);
    
    session.run(`match (u1:User)-[f:Follow]->(u2:User) where u1.nameUser = $nameUser return u2`,
        {nameUser: nameUser})
        .then(result => {
            console.log("Seguidos");
            console.log(result);
                      
            res.json(result.records);
        }).catch(err => {
        console.log(err);
        res.json({message: 'Error en la consultar los seguidos'})
    });
};

exports.deleteFollow = (req, res) => {
    const session = driver.session();
    const {nameUser, followNameUser} = req.body;
    session.run(`MATCH (:User {nameUser: $nameUser})-[r:Follow]->(:User {nameUser: $followNameUser})
                        DELETE r`,
        {nameUser: nameUser, followNameUser: followNameUser})
        .then(result => {
            res.json(result.records);
        }).catch(err => {
        console.log(err);
        res.json({message: 'Error en la eliminación de la relación'})
    });
};

