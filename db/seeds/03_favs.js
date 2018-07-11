const TABLE_NAME = 'favs'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, parkId: 'ChIJPUN72LpqkFQRCP8C8t0okEw', parkUrl:'https://lh3.googleusercontent.com/p/AF1QipMUi3WJEM5aL4FLGMksg5eazzSG2rkIbEk7Eczu=s1600-w400', userId: 1},
        {id: 2, parkId: 'ChIJSx5JLLRqkFQRwnvCxhDzA3o', parkUrl:'https://lh3.googleusercontent.com/p/AF1QipPWkMmmtIr-Cx8rOH3FAcrse-tTfX8hnIZkrgwT=s1600-w400', userId: 2}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
})
};
