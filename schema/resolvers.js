const PostResolver = require('./Post/resolver');
const AutherResolver = require('./Auther/resolver');

module.exports = ({
  Query: Object.assign(
    {},
    PostResolver.Query,
    AutherResolver.Query,
  ),
  Mutation: Object.assign(
    {},
    PostResolver.Mutation,
  ),
  Post: PostResolver.Post,
  Auther: AutherResolver.Auther,
});

