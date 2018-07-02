
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('email');
      table.string('password');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('kids', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.text('description');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('knapsaks', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.integer('user_id').unsigned();
      table.foreign('user_id')
        .references('users.id')
//        .inTable('users');
      table.integer('kid_id').unsigned();
      table.foreign('kid_id')
        .references('kids.id')
//        .inTable('kids');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('items', function(table) {
      table.increments('id').primary();
      table.string('itemName');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('knapsaks_items', function(table) {
      table.increments('id').primary();
      table.integer('knapsak_id').unsigned();
      table.foreign('knapsak_id')
        .references('knapsaks.id')
//        .inTable('knapsaks');
      table.integer('item_id').unsigned();
      table.foreign('item_id')
        .references('items.id')
//        .inTable('items');
      table.integer('quantity');

      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('knapsaks_items'),
    knex.schema.dropTable('items'),
    knex.schema.dropTable('knapsaks'),
    knex.schema.dropTable('kids'),
    knex.schema.dropTable('users')
  ]);
};
