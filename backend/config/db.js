const nano = require('nano')('http://admin:admin@localhost:5984');

const dbName = 'reviews';
const db = nano.db.use(dbName);

module.exports = db;