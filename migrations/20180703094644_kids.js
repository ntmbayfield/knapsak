exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('kids', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.text('description');
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('kids')
  ]);
};
