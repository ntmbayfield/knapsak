
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('knapsaks_items', function(table) {
      table.increments('id').primary();
      table.integer('knapsak_id').unsigned();
      table.foreign('knapsak_id')
        .references('knapsaks.id');
      //        .inTable('knapsaks');
      table.integer('item_id').unsigned();
      table.foreign('item_id')
        .references('items.id');
      //        .inTable('items');
      table.integer('quantity');

      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('knapsaks_items')
  ]);
};
