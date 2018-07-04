
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('packing_lists').del()
    .then(function () {
      // Inserts seed entries
      return knex('packing_lists').insert([
        {id: 1, knapsak_id: 1, item_id: 1, quantity: 5},
        {id: 2, knapsak_id: 2, item_id: 2, quantity: 7},
        {id: 3, knapsak_id: 3, item_id: 3, quantity: 4},
        {id: 4, knapsak_id: 4, item_id: 4, quantity: 5}
      ]);
    });
};
