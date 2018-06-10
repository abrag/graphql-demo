const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
} = require('graphql');

const Post = new GraphQLObjectType({
  name: 'Post',
  description: 'Post made by user',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    AutherId: { type: GraphQLInt },
  }),
});

module.exports = Post;
