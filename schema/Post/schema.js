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
  
  input PostInput {
    title: String!
    autherId: ID!
  }
  
  extend type Mutation {
      addPost (title: String!, autherId: ID!): Post
      addPostWithInput (input: PostInput!): Post
  }
`;

module.exports = () => [Post, Base];
