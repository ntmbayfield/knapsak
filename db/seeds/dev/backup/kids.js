
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kids').del()
    .then(function () {
      // Inserts seed entries
      return knex('kids').insert([
        {id: 1, name: 'Jessie', description: 'boy, age 7'},
        {id: 2, name: 'Monica', description: 'girl, age 3'},
        {id: 3, name: 'Louise', description: 'girl, age 5'}
      ]);
    });
};
