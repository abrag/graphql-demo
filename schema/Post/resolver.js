const pgdb = require('../../database/pgdb');

module.exports = {
  Query: {
    Post: (obj, args, { pgPool }) => pgdb(pgPool).getPostsById(args.id),
  },
  Mutation: {
    addPost: (obj, args, { pgPool }) => pgdb(pgPool).addNewContest(args),
    addPostWithInput: (obj, args, { pgPool }) => pgdb(pgPool).addNewContest(args.input),
  },
  Post: {
    auther: (obj, args, { loaders }) => loaders.authesByIds.load(obj.autherId),
  },
};
