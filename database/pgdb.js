const logger = require('../utils/logger');
const humps = require('humps');

module.exports = pgPool => ({
  getAuther(firstName, lastName) {
    return pgPool.query('select * from auther where first_name=$1 and last_name=$2', [firstName, lastName])
      .then((res) => {
        logger.info(res.rows[0]);
        return humps.camelizeKeys(res.rows[0]);
      })
      .catch(logger.error);
  },
});
