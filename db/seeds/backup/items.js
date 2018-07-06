
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, itemName: 'socks'},
        {id: 2, itemName: 'underwear'},
        {id: 3, itemName: 'pajamas'},
        {id: 4, itemName: 'shorts'},
        {id: 5, itemName: 'jeans'},
        {id: 6, itemName: 'tShirt'}
      ]);
    });
};
