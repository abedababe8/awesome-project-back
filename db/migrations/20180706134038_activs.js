const TABLE_NAME = 'activs'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.string('name')
    table.string('type').defaultsTo(null)
    table.string('iconName').defaultsTo(null)
    table.integer('pts')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
