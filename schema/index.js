const { makeExecutableSchema } = require('graphql-tools');
const Base = require('./base');
const Post = require('./Post/schema');
const Auther = require('./Auther/schema');
const Resolvers = require('./resolvers.js');

module.exports = makeExecutableSchema({
  typeDefs: [Base,
    Post,
    Auther,
  ],
  resolvers: Resolvers,
});
