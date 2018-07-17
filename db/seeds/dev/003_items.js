
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, itemName: 'underwear - boys', image: "https://image.ibb.co/ef03Gy/001_underwear_boys.png"},
        {id: 2, itemName: 'underwear - girls', image: "https://image.ibb.co/de3epJ/002_underwear_girls.png"},
        {id: 3, itemName: 'undershirts', image: "https://image.ibb.co/huWM3d/003_undershirt.png"},
        {id: 4, itemName: 'socks', image: "https://image.ibb.co/nCe8id/004_socks.png"},
        {id: 5, itemName: 'skirts', image: "https://image.ibb.co/k9y13d/005_skirt.png"},
        {id: 6, itemName: 'dresses', image: "https://image.ibb.co/hxqEOd/006_dress.png"},
        {id: 7, itemName: 'jeans', image: "https://image.ibb.co/nyX5UJ/007_jeans.png"},
        {id: 8, itemName: 'pants', image: "https://image.ibb.co/i8pVwy/008_pants.png"},
        {id: 9, itemName: 'shorts', image: "https://image.ibb.co/fB8epJ/009_shorts.png"},
        {id: 10, itemName: 'jackets', image: "https://image.ibb.co/mFKVwy/010_jacket.png"},
        {id: 11, itemName: 'tank tops', image: "https://image.ibb.co/dY813d/011_tank_top.png"},
        {id: 12, itemName: 't-shirts', image: "https://image.ibb.co/fEHTid/012_tshirt.png"},
        {id: 13, itemName: 'long-sleeve shirts', image: "https://image.ibb.co/hZx5UJ/013_longsleeve.png"},
        {id: 14, itemName: 'sweaters', image: "https://image.ibb.co/eE6M3d/014_sweaters.png"},
        {id: 15, itemName: 'sweatshirts', image: "https://image.ibb.co/cBQEOd/015_sweatshirt.png"},
        {id: 16, itemName: 'dressy shirts', image: "https://image.ibb.co/eW5s9J/016_dressyshirt.png"},
        {id: 17, itemName: 'tennis shoes', image: "https://image.ibb.co/dOBoid/017_tennisshoes.png"},
        {id: 18, itemName: 'dressy shoes', image: "https://image.ibb.co/mcpKpJ/018_dressyshoes.png"},
        {id: 19, itemName: 'flip-flops', image: "https://image.ibb.co/gs6zpJ/019_flipflops.png"},
        {id: 20, itemName: 'toothbrush & toothpaste', image: "https://image.ibb.co/mnwoid/020_toothbrush.png"},
        {id: 21, itemName: 'comb/brush', image: "https://image.ibb.co/ebNTid/021_comb_and_brush.png"},
        {id: 22, itemName: 'swimsuit', image: "https://image.ibb.co/ggbAwy/022_swimsuit.png"},
        {id: 23, itemName: 'beach towel', image: "https://image.ibb.co/gMiZOd/023_beach_towel.png"},
        {id: 24, itemName: 'stuffed animal', image: "https://image.ibb.co/eYTOGy/024_stuffed_animal.png"}
      ]);
    })
    .then( function() {
      return knex.raw(
        "SELECT setval('items_id_seq', (SELECT MAX(id) FROM items));"
      )
    })
};
