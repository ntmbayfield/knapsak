
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('knapsaks').del()
    .then(function () {
      // Inserts seed entries
      return knex('knapsaks').insert([
        {id: 1, title: 'sleepover', user_id: 3, kid_id: 2},
        {id: 2, title: 'vacation to Europe', user_id: 2, kid_id: 2},
        {id: 3, title: 'ski trip', user_id: 2, kid_id: 1},
        {id: 4, title: 'desert hiking', user_id: 1, kid_id: 3}
      ]);
    });
};
