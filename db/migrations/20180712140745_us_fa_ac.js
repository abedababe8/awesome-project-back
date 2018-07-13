const TABLE_NAME = 'us_fa_ac'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.integer('activId').notNullable().references('activs.id')
    table.integer('userId').notNullable().references('users.id')
    table.string('parkId').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
