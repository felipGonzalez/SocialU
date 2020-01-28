var express = require("express");
var cassandra = require('cassandra-driver');
var client = new cassandra.Client({ contactPoints: ['127.0.0.1:9042'],localDataCenter: 'datacenter1', keyspace: 'socialu' });

const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

client.connect(function (err, result) {
    console.log("connect");

});

var getPublications = 'SELECT * FROM publication';

client.execute(getPublications, [])
  .then(result => console.log('User with email %s', result));

app.get('/', (req, res) => {
    client.execute(getPublications, [], function (err, result) {
        if (err) {
            res.status(404).send({ message: "paila" });
        } else {
            console.log(result);
            res.send(result.rows);
        }
    });
});

app.listen(3002, () => {
    console.log('Server listening on port: ', 3002)
});