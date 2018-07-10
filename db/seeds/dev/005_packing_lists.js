
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('packing_lists').del()
    .then(function () {
      // Inserts seed entries
      return knex('packing_lists').insert([
        {id: 1, knapsak_id: 1, item_id: 1, quantity: 5},
        {id: 2, knapsak_id: 1, item_id: 2, quantity: 7},
        {id: 3, knapsak_id: 1, item_id: 3, quantity: 2},
        {id: 4, knapsak_id: 1, item_id: 4, quantity: 1},
        {id: 5, knapsak_id: 2, item_id: 1, quantity: 5},
        {id: 6, knapsak_id: 2, item_id: 2, quantity: 9},
        {id: 7, knapsak_id: 3, item_id: 3, quantity: 4},
        {id: 8, knapsak_id: 3, item_id: 4, quantity: 5},
        {id: 9, knapsak_id: 3, item_id: 1, quantity: 8},
        {id: 10, knapsak_id: 2, item_id: 2, quantity: 7},
        {id: 11, knapsak_id: 4, item_id: 3, quantity: 4},
        {id: 12, knapsak_id: 5, item_id: 4, quantity: 2},
        {id: 13, knapsak_id: 5, item_id: 1, quantity: 5},
        {id: 14, knapsak_id: 5, item_id: 2, quantity: 1},
      ]);
    })

    // {id: 1, itemName: 'socks'},
    // {id: 2, itemName: 'underwear'},
    // {id: 3, itemName: 'pajamas'},
    // {id: 4, itemName: 'shorts'},
    // {id: 5, itemName: 'jeans'},
    // {id: 6, itemName: 't-shirt'}

    .then( function() {
      return knex.raw(
        "SELECT setval('packing_lists_id_seq', (SELECT MAX(id) FROM packing_lists));"
      )
    })
};
