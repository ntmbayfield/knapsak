exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('packing_lists', function(table) {
      table.increments('id').primary();

      table.integer('knapsak_id').unsigned();
      table.foreign('knapsak_id')
           .references('knapsaks.id')
           .onDelete('CASCADE');

      table.integer('item_id').unsigned();
      table.foreign('item_id')
           .references('items.id')
           .onDelete('CASCADE');

      table.integer('quantity');

      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('packing_lists')
  ]);
};
