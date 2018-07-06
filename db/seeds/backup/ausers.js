
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'John Doe', email: 'jd@yahoo.com', password: 'pass1234'},
        {id: 2, name: 'Sally Smith', email: 'sallys@gmail.com', password: 'pass5678'},
        {id: 3, name: 'Sam Snow', email: 'ssnow@outlook.com', password: 'pass8765'}
      ]);
    });
};
