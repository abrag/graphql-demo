const Base = require('../base');

const Post = `
  extend type Query {
      Post(id: ID!): Post
  }
  type Post {
    id: ID!
    auther: Auther
    title: String
    autherId: Int
  }
`;

module.exports = () => [Post, Base];
