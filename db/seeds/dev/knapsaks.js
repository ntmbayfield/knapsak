
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('knapsaks').del()
    .then(function () {
      // Inserts seed entries
      return knex('knapsaks').insert([
        {id: 1, title: 'sleepover', user_id: 2, kid_id: 2},
        {id: 2, title: 'weekend at Grandparents', user_id: 1, kid_id: 1},
        {id: 3, title: 'overnight camp', user_id: 3, kid_id: 2}
      ]);
    });
};
