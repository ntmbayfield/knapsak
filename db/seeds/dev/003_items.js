
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, itemName: 'underwear - boys', image: 'img src="https://image.ibb.co/ef03Gy/001_underwear_boys.png" alt="001_underwear_boys" border="0"'},
        {id: 2, itemName: 'underwear - girls', image: 'img src="https://image.ibb.co/de3epJ/002_underwear_girls.png" alt="002_underwear_girls" border="0"'},
        {id: 3, itemName: 'undershirts', image: 'img src="https://image.ibb.co/huWM3d/003_undershirt.png" alt="003_undershirt" border="0"'},
        {id: 4, itemName: 'socks', image: 'img src="https://image.ibb.co/nCe8id/004_socks.png" alt="004_socks" border="0"'},
        {id: 5, itemName: 'skirts', image: 'img src="https://image.ibb.co/k9y13d/005_skirt.png" alt="005_skirt" border="0"'},
        {id: 6, itemName: 'dresses', image: 'img src="https://image.ibb.co/hxqEOd/006_dress.png" alt="006_dress" border="0"'},
        {id: 7, itemName: 'jeans', image: 'img src="https://image.ibb.co/nyX5UJ/007_jeans.png" alt="007_jeans" border="0"'},
        {id: 8, itemName: 'pants', image: 'img src="https://image.ibb.co/i8pVwy/008_pants.png" alt="008_pants" border="0"'},
        {id: 9, itemName: 'shorts', image: 'img src="https://image.ibb.co/fB8epJ/009_shorts.png" alt="009_shorts" border="0"'},
        {id: 10, itemName: 'jackets', image: 'public/images/jacket.png', category: 'tops'},
        {id: 11, itemName: 'tank tops', image: 'img src="https://image.ibb.co/dY813d/011_tank_top.png" alt="011_tank_top" border="0"'},
        {id: 12, itemName: 't-shirts', image: 'img src="https://image.ibb.co/fEHTid/012_tshirt.png" alt="012_tshirt" border="0"'},
        {id: 13, itemName: 'long-sleeve shirts', image: 'img src="https://image.ibb.co/hZx5UJ/013_longsleeve.png" alt="013_longsleeve" border="0"'},
        {id: 14, itemName: 'sweaters', image: 'img src="https://image.ibb.co/eE6M3d/014_sweaters.png" alt="014_sweaters" border="0"'},
        {id: 15, itemName: 'sweatshirts', image: 'img src="https://image.ibb.co/cBQEOd/015_sweatshirt.png" alt="015_sweatshirt" border="0"'},
        {id: 16, itemName: 'dressy shirts', image: 'img src="https://image.ibb.co/eW5s9J/016_dressyshirt.png" alt="016_dressyshirt" border="0"'},
        {id: 17, itemName: 'tennis shoes', image: 'img src="https://image.ibb.co/dOBoid/017_tennisshoes.png" alt="017_tennisshoes" border="0"'},
        {id: 18, itemName: 'dressy shoes', image: 'img src="https://image.ibb.co/mcpKpJ/018_dressyshoes.png" alt="018_dressyshoes" border="0"'},
        {id: 19, itemName: 'flip-flops', image: 'img src="https://image.ibb.co/gs6zpJ/019_flipflops.png" alt="019_flipflops" border="0"'},
        {id: 20, itemName: 'toothbrush & toothpaste', image: 'img src="https://image.ibb.co/mnwoid/020_toothbrush.png" alt="020_toothbrush" border="0"'},
        {id: 21, itemName: 'comb/brush', image: 'img src="https://image.ibb.co/ebNTid/021_comb_and_brush.png" alt="021_comb_and_brush" border="0"'},
        {id: 22, itemName: 'swimsuit', image: 'img src="https://image.ibb.co/ebNTid/021_comb_and_brush.png" alt="021_comb_and_brush" border="0" src="https://image.ibb.co/ggbAwy/022_swimsuit.png" alt="022_swimsuit" border="0"'},
        {id: 23, itemName: 'beach towel', image: 'img src="https://image.ibb.co/gMiZOd/023_beach_towel.png" alt="023_beach_towel" border="0"'},
        {id: 24, itemName: 'stuffed animal', image: 'img src="https://image.ibb.co/eYTOGy/024_stuffed_animal.png" alt="024_stuffed_animal" border="0"'} 
      ]);
    })
    .then( function() {
      return knex.raw(
        "SELECT setval('items_id_seq', (SELECT MAX(id) FROM items));"
      )
    })
};
