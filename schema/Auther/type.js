const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require('graphql');

const Auther = new GraphQLObjectType({
  name: 'Auther',
  description: 'Auther data type',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: {
      type: GraphQLString,
      resolve: obj => obj.first_name,
    },
    lastName: {
      type: GraphQLString,
      resolve: obj => obj.last_name,
    },
  }),
});

module.exports = Auther;
