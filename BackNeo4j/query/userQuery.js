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
/*
exports.followPerson = (req, res) => {
    const session = driver.session();
    const {nickname, followNickname, knowDate, likes} = req.body;
    session.run(`MATCH (a:Person {nickname: $nickname}), (b:Person {nickname: $followNickname})
                        CREATE (a)-[f:Follow {knowDate: $knowDate, likes: $likes}]->(b)
                        RETURN f`,
        {nickname: nickname, followNickname: followNickname , knowDate: knowDate, likes: likes})
        .then(result => {
            res.json(result.records);
        }).catch(err => {
        console.log(err);
        res.json({message: 'Error en la inserción de la relación'})
    });
};

exports.unfollowPerson = (req, res) => {
    const session = driver.session();
    const {nickname, followNickname} = req.body;
    session.run(`MATCH (:Person {nickname: $nickname})-[r:Follow]->(:Person {nickname: $followNickname})
                        DELETE r`,
        {nickname: nickname, followNickname: followNickname})
        .then(result => {
            res.json(result.records);
        }).catch(err => {
        console.log(err);
        res.json({message: 'Error en la eliminación de la relación'})
    });
};

exports.personsFollow = (req, res) => {
    const session = driver.session();
    const {nickname} = req.body;
    session.run(`MATCH (a:Person {nickname: $nickname})-->(persons:Person)
                        RETURN persons`,
        {nickname: nickname})
        .then(result => {
            res.json(result.records);
        }).catch(err => {
        console.log(err);
        res.json({message: 'Error en la consultar los seguidos'})
    });
};

exports.deletePerson = (req, res) => {
    const session = driver.session();
    const nickname = req.body.nickname;
    session.run(`MATCH (a:Person {nickname: $nickname})
                        DETACH DELETE a`,
        {nickname: nickname})
        .then(result => {
            res.json(result.records);
        }).catch(err => {
        console.log(err);
        res.json({message: 'Error al eliminar'})
    });
};*/