const pgdb = require('../../database/pgdb');

module.exports = {
  Query: {
    Auther: (obj, args, { pgPool }) => pgdb(pgPool).getAuther(args.firstName, args.lastName),
  },
  Auther: {
    fullName: obj => `${obj.firstName} ${obj.lastName}`,
    posts: (obj, args, { pgPool }) => pgdb(pgPool).getPostsByUser(obj),
  },
};
