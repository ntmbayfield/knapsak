
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('knapsaks', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.integer('user_id').unsigned();
      table.foreign('user_id')
        .references('users.id');
      //       .inTable('users');
      table.integer('kid_id').unsigned();
      table.foreign('kid_id')
        .references('kids.id');
      //        .inTable('kids');
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('knapsaks')
  ]);
};
