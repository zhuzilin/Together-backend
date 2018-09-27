const cdo = require('./customers');

let dao = new cdo.CustomersDAO();

// for the first time of testing, uncomment following lines.

dao.create({
    id: "123",
    username: "sherlock",
    email: "SH@221B.backer.street",
    status: "addicted",
    pw: "I'm Sherlocked",
}, {tenant: "Mr. Watson"});


dao.retrieveById("123").then((result) => {
    console.log(`I'm ${result.dataValues.username}.`);
});