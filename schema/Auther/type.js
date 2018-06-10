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
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    fullName: {
      type: GraphQLString,
      resolve: obj => (`${obj.firstName} ${obj.lastName}`),
    },
  }),
});

module.exports = Auther;
