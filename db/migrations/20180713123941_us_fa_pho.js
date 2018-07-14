const TABLE_NAME = 'us_fa_pho'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.integer('userId').notNullable().references('users.id')
    table.text('uri', 'longtext').notNullable()
    table.string('parkId').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
