const PostResolver = require('./Post/queryResolver');
const AutherResolver = require('./Auther/queryResolver');

module.exports = ({
  Query: Object.assign(
    {},
    PostResolver.Query,
    AutherResolver.Query,
  ),
  Post: PostResolver.Post,
  Auther: AutherResolver.Auther,
});

