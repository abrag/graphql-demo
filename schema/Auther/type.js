const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = require('graphql');
const Post = require('../Post/type');
const pgdb = require('../../database/pgdb');

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
    posts: {
      type: new GraphQLList(Post),
      resolve(obj, args, { pgPool }) {
        return pgdb(pgPool).getPostsByUser(obj);
      },
    },
  }),
});

module.exports = Auther;
