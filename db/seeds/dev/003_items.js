
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, itemName: 'underwear', category: 'basics'},
        {id: 2, itemName: 'socks', category: 'basics'},
        {id: 3, itemName: 'undershirts', category: 'basics'},
        {id: 4, itemName: 'bras', category: 'basics'},
        {id: 5, itemName: 'tights/stockings', category: 'basics'},
        {id: 6, itemName: 'pajamas', category: 'basics'},
        {id: 7, itemName: 'robe', category: 'basics'},
        {id: 8, itemName: 'dressy shirts', category: 'dressy'},
        {id: 9, itemName: 'dressy sweaters', category: 'dressy'},
        {id: 10, itemName: 'dressy jackets', category: 'dressy'},
        {id: 11, itemName: 'dressy pants', category: 'dressy'},
        {id: 12, itemName: 'dressy skirts', category: 'dressy'},
        {id: 13, itemName: 'dressy dresses', category: 'dressy'},
        {id: 14, itemName: 'jackets', category: 'outerwear'},
        {id: 15, itemName: 'coats', category: 'outerwear'},
        {id: 16, itemName: 'raincoats', category: 'outerwear'},
        {id: 17, itemName: 'gloves', category: 'outerwear'},
        {id: 18, itemName: 'scarves', category: 'outerwear'},
        {id: 19, itemName: 't-shirts', category: 'tops'},
        {id: 20, itemName: 'long-sleeve shirts', category: 'tops'},
        {id: 21, itemName: 'sweaters', category: 'tops'},
        {id: 22, itemName: 'sweatshirts', category: 'tops'},
        {id: 23, itemName: 'jeans', category: 'bottoms'},
        {id: 24, itemName: 'pants', category: 'bottoms'},
        {id: 25, itemName: 'shorts', category: 'bottoms'},
        {id: 26, itemName: 'shoes', category: 'shoes'},
        {id: 27, itemName: 'tennis shoes', category: 'shoes'},
        {id: 28, itemName: 'dressy shoes', category: 'shoes'},
        {id: 29, itemName: 'flip-flops', category: 'shoes'},
        {id: 30, itemName: 'slippers', category: 'shoes'},
        {id: 31, itemName: 'toothbrush', category: 'hygiene'},
        {id: 32, itemName: 'toothpaste', category: 'hygiene'},
        {id: 33, itemName: 'floss', category: 'hygiene'},
        {id: 34, itemName: 'mouthwash', category: 'hygiene'},
        {id: 35, itemName: 'soap/body wash', category: 'hygiene'},
        {id: 36, itemName: 'deodorant', category: 'hygiene'},
        {id: 37, itemName: 'shampoo', category: 'hygiene'},
        {id: 38, itemName: 'conditioner', category: 'hygiene'},
        {id: 39, itemName: 'brush', category: 'hygiene'},
        {id: 40, itemName: 'sunscreen', category: 'hygiene'},
        {id: 41, itemName: 'lotion', category: 'hygiene'},
        {id: 42, itemName: 'backpack', category: 'personal'},
        {id: 43, itemName: 'stuffed animal', category: 'personal'},
        {id: 44, itemName: 'blanket', category: 'personal'},
        {id: 45, itemName: 'pillow', category: 'personal'},
        {id: 46, itemName: 'coloring books', category: 'entertainment'},
        {id: 47, itemName: 'crayons', category: 'entertainment'},
        {id: 48, itemName: 'games', category: 'entertainment'},
        {id: 49, itemName: 'gaming system', category: 'entertainment'},
        {id: 50, itemName: 'headphones', category: 'entertainment'},
        {id: 51, itemName: 'tablet', category: 'entertainment'},
        {id: 52, itemName: 'charging cords', category: 'entertainment'},
        {id: 53, itemName: 'books', category: 'entertainment'},
        {id: 54, itemName: 'swimsuit', category: 'swim stuff'},
        {id: 55, itemName: 'cover-up', category: 'swim stuff'},
        {id: 56, itemName: 'swim shoes', category: 'swim stuff'},
        {id: 57, itemName: 'beach towel', category: 'swim stuff'},
        {id: 58, itemName: 'goggles', category: 'swim stuff'},
        {id: 59, itemName: 'kickboard', category: 'swim stuff'},
        {id: 60, itemName: 'floaties/vest', category: 'swim stuff'},
        {id: 61, itemName: 'pool toys/inflatables', category: 'swim stuff'},
        {id: 62, itemName: 'air pump', category: 'swim stuff'},

      ]);
    })
    .then( function() {
      return knex.raw(
        "SELECT setval('items_id_seq', (SELECT MAX(id) FROM items));"
      )
    })
};
