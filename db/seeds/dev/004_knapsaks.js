
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('knapsaks').del()
    .then(function () {
    // Inserts seed entries
      return knex('knapsaks').insert([
      {id: 1, user_id: 2, description: 'sleepover2', kid_id: 2},
      {id: 2, user_id: 2, description: 'vacation to Europe2', kid_id: 2},
      {id: 3, user_id: 1, description: 'ski trip1', kid_id: 1},
      {id: 4, user_id: 3, description: 'desert hiking3', kid_id: 3},
      {id: 5, user_id: 3, description: 'sleepover3', kid_id: 2},
      {id: 6, user_id: 1, description: 'vacation to Europe1', kid_id: 2},
      {id: 7, user_id: 3, description: 'ski trip3', kid_id: 1},
      {id: 8, user_id: 2, description: 'desert hiking2', kid_id: 3}
      ]);
    })
    .then( function() {
      return knex.raw(
        "SELECT setval('knapsaks_id_seq', (SELECT MAX(id) FROM knapsaks));"
      )
    })
};
