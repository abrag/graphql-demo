const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');
const pgdb = require('../database/pgdb');
const Auther = require('./Auther/type');
const logger = require('../utils/logger');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'a root query type',
  fields: () => ({
    auther: {
      type: Auther,
      description: 'our auther identified by first and last name',
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (obj, args, { pgPool }) => pgdb(pgPool).getAuther(args.firstName, args.lastName),
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  // mutation: ...
});

module.exports = schema;
