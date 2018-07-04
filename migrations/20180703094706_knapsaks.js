exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('knapsaks', function(table) {
      table.increments('id').primary();
      table.string('title').notNullable();

      table.integer('user_id').unsigned();
      table.foreign('user_id')
           .references('users.id')
           .onDelete('CASCADE')
        // .inTable('users');

      table.integer('kid_id').unsigned();
      table.foreign('kid_id')
           .references('kids.id')
           .onDelete('CASCADE');
      //        .inTable('kids');
      
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('knapsaks')
  ]);
};
