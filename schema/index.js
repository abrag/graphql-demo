// Import type helpers from graphql-js
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'a root query type',
  fields: () => ({
    hello: {
      description: 'helloworld test query',
      type: GraphQLString,
      resolve: () => 'world',
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  // mutation: ...
});

module.exports = schema;
