const TABLE_NAME = 'users'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: 'Abe', username:'abe', password:'$2a$10$ppwBpRIwQuK0f2NJSuJk8elro3nRhJpbpQWqS27rD0yEsqC.O3Qqy'},
        {id: 2, name: 'Mark', username:'mark', password:'$2a$10$y/6QmRfnpJK1grIqJLX/j.ZEsf.Cx3af07trw3ySAt57mKKOhamQS'}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
})
};
