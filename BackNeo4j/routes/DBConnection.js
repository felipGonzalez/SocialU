module.exports = function (app) {

    const queryPerson = require('../query/userQuery');

    app.route('/saveUser')
        .post(queryPerson.saveUser);

    app.route('/followUser')
        .post(queryPerson.followUser);

    app.route('/deleteFollow')
        .post(queryPerson.deleteFollow);


    app.route('/userFollow')
        .post(queryPerson.userFollow);
};


