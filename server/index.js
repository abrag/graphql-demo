const graphqlHTTP = require('express-graphql');
const pg = require('pg');
const schema = require('../schema/index');
const config = require('../config');
const logger = require('../utils/logger');

const pgPool = new pg.Pool(config.PG);
const app = require('express')();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  context: {
    pgPool,
  },
}));

app.listen(4444, () => logger.info('server is listening on port 4444'));
