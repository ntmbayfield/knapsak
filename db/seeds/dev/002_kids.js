
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kids').del()
    .then(function () {
      // Inserts seed entries
      return knex('kids').insert([
        {id: 1, name: 'Jessie', user_id: 3},
        {id: 2, name: 'Monica', user_id: 2},
        {id: 3, name: 'Louise', user_id: 1}
      ]);
    })
    .then( function() {
      return knex.raw(
        "SELECT setval('kids_id_seq', (SELECT MAX(id) FROM kids));"
      )
    })
};
