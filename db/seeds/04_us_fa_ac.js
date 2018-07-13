const TABLE_NAME = 'us_fa_ac'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, activId: 1, userId: 1, parkId: 'ChIJPUN72LpqkFQRCP8C8t0okEw'},
        {id: 2, activId: 2, userId: 2, parkId: 'ChIJSx5JLLRqkFQRwnvCxhDzA3o'},
        {id: 3, activId: 3, userId: 1, parkId: 'ChIJPUN72LpqkFQRCP8C8t0okEw'}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
})
};
