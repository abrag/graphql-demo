const Base = require('../base');
const Post = require('../Post/schema');

const Auther = `
  extend type Query {
      Auther(firstName: String!, lastName: String!): Auther
  }
  type Auther {
    id: ID!
    firstName: String
    lastName: String
    fullName: String
    posts: [Post]
  }
`;

module.exports = () => [Auther, Post, Base];
