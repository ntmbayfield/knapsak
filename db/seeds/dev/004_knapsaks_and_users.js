
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('knapsaks').del()
    .then(function () {
    // Inserts seed entries
      return knex('knapsaks').insert([
      {id: 1, description: 'sleepover', kid_id: 2},
      {id: 2, description: 'vacation to Europe', kid_id: 2},
      {id: 3, description: 'ski trip', kid_id: 1},
      {id: 4, description: 'desert hiking', kid_id: 3}
      ]);
    });
};
