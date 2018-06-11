const graphqlHTTP = require('express-graphql');
const pg = require('pg');
const DataLoader = require('dataloader');
const schema = require('../schema/index');
const config = require('../config');
const logger = require('../utils/logger');
const pgdb = require('../database/pgdb');

const pgPool = new pg.Pool(config.PG);
const app = require('express')();

app.use('/graphql', (req, res) => {
  const loaders = {
    authesByIds: new DataLoader(pgdb(pgPool).getAuthersByIds),
  };
  graphqlHTTP({
    schema,
    graphiql: true,
    context: {
      pgPool,
      loaders,
    },
  })(req, res);
});


app.listen(4444, () => logger.info('server is listening on port 4444'));
