module.exports = function (app) {

    const queryPerson = require('../query/userQuery');

    app.route('/saveUser')
        .post(queryPerson.saveUser);

    /*app.route('/follow')
        .post(queryPerson.followPerson);

    app.route('/unFollow')
        .post(queryPerson.unfollowPerson);

    app.route('/deletePerson')
        .post(queryPerson.deletePerson);

    app.route('/personsFollow')
        .post(queryPerson.personsFollow);*/
};


