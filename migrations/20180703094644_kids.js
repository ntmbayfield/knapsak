exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('kids', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('kids')
  ]);
};
