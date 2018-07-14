exports.seed = function(knex, Promise) {

  const tablesToClean = ['us_fa_pho','us_fa_ac', 'favs', 'activs', 'users']

  return tablesToClean.reduce((acc, ele) => acc.then(() => knex(ele).del()), Promise.resolve())

};
