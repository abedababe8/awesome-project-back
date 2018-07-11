const TABLE_NAME = 'activs'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: 'Run', iconName: 'directions-run', pts: 10},
        {id: 2, name: 'Meditate', type: 'font-awesome', iconName: 'hand-peace-o', pts: 7},
        {id: 3, name: 'Swim', type: 'material-community', iconName: 'swim', pts: 5},
        {id: 4, name: 'Workout', type: 'material-community', iconName: 'weight', pts: 5},
        {id: 5, name: 'Read', type: 'entypo', iconName: 'open-book', pts: 5},
        {id: 6, name: 'Listen', iconName: 'headset', pts: 5},
        {id: 7, name: 'CYO', type: 'feather', iconName: 'edit-3', pts: 5},

      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
})
};
