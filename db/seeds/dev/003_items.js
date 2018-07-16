
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, itemName: 'underwear - boys', category: 'basics'},
        {id: 2, itemName: 'underwear - girls', category: 'basics'},
        {id: 3, itemName: 'undershirts', category: 'basics'},
        {id: 4, itemName: 'socks', category: 'basics'},
        {id: 5, itemName: 'skirts', category: 'bottoms'},
        {id: 6, itemName: 'dresses', category: 'bottoms'},
        {id: 7, itemName: 'jeans', category: 'bottoms'},
        {id: 8, itemName: 'pants', category: 'bottoms'},
        {id: 9, itemName: 'shorts', category: 'bottoms'},
        {id: 10, itemName: 'jackets', category: 'tops'},
        {id: 11, itemName: 'tank tops', category: 'tops'},
        {id: 12, itemName: 't-shirts', category: 'tops'},
        {id: 13, itemName: 'long-sleeve shirts', category: 'tops'},
        {id: 14, itemName: 'sweaters', category: 'tops'},
        {id: 15, itemName: 'sweatshirts', category: 'tops'},
        {id: 16, itemName: 'dressy shirts', category: 'tops'},
        {id: 17, itemName: 'tennis shoes', category: 'shoes'},
        {id: 18, itemName: 'dressy shoes', category: 'shoes'},
        {id: 19, itemName: 'flip-flops', category: 'shoes'},
        {id: 20, itemName: 'toothbrush & toothpaste', category: 'personal'},
        {id: 21, itemName: 'comb/brush', category: 'personal'},
        {id: 22, itemName: 'stuffed animal', category: 'personal'},
        {id: 23, itemName: 'beach towel', category: 'swim stuff'},
        {id: 24, itemName: 'swimsuit', category: 'swim stuff'}
      ]);
    })
    .then( function() {
      return knex.raw(
        "SELECT setval('items_id_seq', (SELECT MAX(id) FROM items));"
      )
    })
};
