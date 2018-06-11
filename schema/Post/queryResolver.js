const pgdb = require('../../database/pgdb');

module.exports = {
  Query: {
    Post: (obj, args, { pgPool }) => pgdb(pgPool).getPostsByUser(obj),
  },
};
