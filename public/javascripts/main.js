const baseURL = 'http://localhost:3333';


//GET A SINGLE USER BY ID
document.querySelector('#login-submit-button').addEventListener('click', () => {
  const userEmail = document.querySelector('#email-input').value;
  const userID;

  knex('users')
    .where({
      email: `${userEmail}`,
    })
    .select('id')
    .then((data) => {
      console.log('the specific user id is: ', data)
      userID = data;
      res.send(data);
    }

      router.get('/', (req, res, next) => {
        console.log('users knapsaks hit')
        knex('knapsaks')
        .where('user_id', req.params.`${userID}`)
        .then((data) => {
          console.log('data', data)
          res.send(data)
        })
      });

  axios.get(`${baseURL}/users/:${userID}`)
    .then(result => {
      console.log(result);
    })

})
