
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('knapsaks').del() // delete all footnotes first
    .then(() => knex('kids').del()) // delete all papers
    .then(() => knex('users').del()) // delete all papers
      return Promise.all([

        // Insert a single paper, return the paper ID, insert 2 footnotes
        Promise.all([
          knex('users').insert({
            name: 'John Doe', email: 'jd@yahoo.com', password: 'pass1234'
          }, 'id'),
          knex('kids').insert({
            name: 'Jessie', description: 'boy, age 7'
          }, 'id'),
          knex('kids').insert({
            name: 'Joey', description: 'boy, age 2'
          }, 'id')])
        .then(results => {
          const user = results[0]
          const kid = results[1]
          const kid2 = results[2]

          return knex('knapsaks').insert([
            { id: 1, title: 'sleepover', user_id: user[0], kid_id: results[1][0]},
            { id: 2, title: 'trip to Yosemite', user_id: user[0], kid_id: results[1][0] },
            { id: 2, title: 'trip to Yosemite', user_id: user[0], kid_id: results[2][0] }
          ])
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ]) // end return Promise.all
    }
    .catch(error => console.log(`Error seeding data: ${error}`));
};
