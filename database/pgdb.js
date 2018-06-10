const logger = require('../utils/logger');

module.exports = pgPool => ({
  getAuther(firstName, lastName) {
    //return { id: 6, first_name: 'Ada', last_name: 'Mukami' };
    return pgPool.query('select * from auther where first_name=$1 and last_name=$2', [firstName, lastName])
      .then((res) => {
        logger.info(res.rows[0]);
        return res.rows[0];
      })
      .catch(logger.error);
  },
});
