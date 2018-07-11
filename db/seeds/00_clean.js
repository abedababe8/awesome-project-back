exports.seed = function(knex, Promise) {

  const tablesToClean = ['users_activs', 'favs', 'activs', 'users']

  return tablesToClean.reduce((acc, ele) => acc.then(() => knex(ele).del()), Promise.resolve())

};
