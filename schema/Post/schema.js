const Base = require('../base');

const Post = `
  extend type Query {
      Post(id: ID!): Post
  }
  type Post {
    id: ID!
    autherId: Int
    title: String
  }
`;

module.exports = () => [Post, Base];
