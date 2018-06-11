const logger = require('../utils/logger');
const humps = require('humps');

const orderedFor = (rows, collection, field, singleObject) => {
  const data = humps.camelizeKeys(rows);
  const inGroupsOfField = _.groupBy(data, field);
  return collection.map(element => {
    const elementArray = inGroupsOfField[element];
    if (elementArray) {
      return singleObject ? elementArray[0] : elementArray;
    }
    return singleObject ? {} : [];
  });
};

module.exports = pgPool => ({
  getAuther(firstName, lastName) {
    return pgPool.query('select * from auther where first_name=$1 and last_name=$2', [firstName, lastName])
      .then((res) => {
        logger.info(res.rows[0]);
        return humps.camelizeKeys(res.rows[0]);
      })
      .catch(logger.error);
  },
  getAutherById(id) {
    return pgPool.query('select * from auther where id=$1', [id])
      .then((res) => {
        logger.info(res.rows[0]);
        return humps.camelizeKeys(res.rows[0]);
      })
      .catch(logger.error);
  },
  getPostsByUser(auther) {
    return pgPool.query('select * from post where auther_id=$1', [auther.id])
      .then((res) => {
        logger.info(res.rows);
        return humps.camelizeKeys(res.rows);
      })
      .catch(logger.error);
  },
  getPostsById(id) {
    return pgPool.query('select * from post where id=$1', [id])
      .then((res) => {
        logger.info(res.rows);
        return humps.camelizeKeys(res.rows);
      })
      .catch(logger.error);
  },
});
