var express = require("express");
var cassandra = require('cassandra-driver');
var client = new cassandra.Client({ contactPoints: ['127.0.0.1:9042'],localDataCenter: 'datacenter1', keyspace: 'socialu' });
var cors = require('cors');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

client.connect(function (err, result) {
    console.log("connect");

});

var getPublications = 'SELECT * FROM publication';
var insertPublication = 'insert into publication (id, id_user, title, content, author, date, category) values (?,?,?,?,?,?,?)'


app.get('/publication', (req, res) => {

    client.execute(getPublications, [], function (err, result) {
        if (err) {
            res.status(404).send({ message: "error al cargar" });
        } else {
            res.send(result.rows);
        }
    });
});

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