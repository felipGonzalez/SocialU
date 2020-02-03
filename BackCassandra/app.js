var express = require("express");
var cassandra = require('cassandra-driver');
var client = new cassandra.Client({ contactPoints: ['127.0.0.1:9042'], localDataCenter: 'datacenter1', keyspace: 'socialu' });
var cors = require('cors');
var axios = require('axios');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

client.connect(function (err, result) {
    console.log("connect");

});

var getPublications = 'SELECT * FROM publication';
var insertPublication = 'insert into publication (id, id_user, title, content, author, date, category, likes, comments) values (?,?,?,?,?,?,?,?,?)'
var insert = `INSERT INTO publication '`


app.get('/publication', (req, res) => {
    axios.get('http://localhost:3000/publication')
        .then(response => {
            console.log("respuesta desde mongo");
            saveInCassandra(response.data, res);
        })
        .catch(e => {
            console.log("error al cargar de mongo");
        });
});

function saveInCassandra(data, res) {
    data.forEach(element => {
        console.log(element);
        
        client.execute(insertPublication, [element._id, element.id_user, element.title, element.content, element.author, element.date, element.category, element.likes, element.comments], { prepare: true }, function (err, result) {
            if (err) {
                console.log(err);

            } else {
                console.log("sin error");
            }
        });
    });
    sendData(res);
}

function sendData(res) {
    client.execute(getPublications, [], function (err, result) {
        if (err) {
            res.status(404).send({ message: "error al cargar" });
        } else {
            res.send(result.rows);
        }
    });
}

/*
app.post('/savePublication', (req, res) => {
    console.log(req);
    let publication = req.body;
    client.execute(insertPublication, [publication.], function (err, result) {
        if (err) {
            res.status(404).send({ message: "error al cargar" });
        } else {
            console.log(result);
            res.send(result.rows);
        }
    });
});

*/

app.listen(3002, () => {
    console.log('Server listening on port: ', 3002)
});