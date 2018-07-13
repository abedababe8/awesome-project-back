const TABLE_NAME = 'activs'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: 'Run', iconName: 'directions-run', pts: 10},
        {id: 2, name: 'Meditate', type: 'font-awesome', iconName: 'hand-peace-o', pts: 7},
        {id: 3, name: 'Swim', type: 'material-community', iconName: 'swim', pts: 15},
        {id: 4, name: 'Workout', type: 'material-community', iconName: 'weight', pts: 20},
        {id: 5, name: 'Read', type: 'entypo', iconName: 'open-book', pts: 7},
        {id: 6, name: 'Listen', iconName: 'headset', pts: 5},
        {id: 7, name: 'Bike', type: 'material-community', iconName: 'bike', pts: 15},
        {id: 8, name: 'Write', type: 'feather', iconName: 'edit-3', pts: 5},
        {id: 9, name: 'Hike', type: 'foundation', iconName: 'mountains', pts: 20},
        {id: 10, name: 'Fish', type: 'material-community', iconName: 'fish', pts: 10},
        {id: 11, name: 'Boat', iconName: 'directions-boat', pts: 10 },
        {id: 12, name: 'Picnic', type: 'ionicon', iconName: 'ios-basket', pts: 10},
        {id: 13, name: 'Team Sport', type: 'font-awesome', iconName: 'soccer-ball-o', pts: 10},
        {id: 14, name: 'Camp', type: 'material-community', iconName: 'tent', pts: 25},
        {id: 15, name: 'Campfire', type: 'ionicon', iconName: 'ios-bonfire', pts: 5},
        {id: 16, name: 'Dog Walk', type: 'foundation', iconName: 'guide-dog', pts: 5},
        {id: 17, name: 'Walk', iconName: 'directions-walk', pts: 5},
        {id: 18, name: 'TreeClimb', type: 'foundation', iconName: 'trees', pts: 50},
        {id: 19, name: 'Drive', type: 'material-community', iconName: 'steering', pts: 10},
        {id: 20, name: 'Wildflowers', type: 'material-community', iconName: 'flower', pts: 2}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
})
};
