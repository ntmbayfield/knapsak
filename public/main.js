const baseURL = 'http://localhost:3333';

//GET A SINGLE USER BY ID
document.querySelector('#login-submit-button').addEventListener('click', () => {
  const userName = document.querySelector('#get-one-id-input').value

  axios.get(`${baseURL}/users/${userid}`)
    .then(result => {
      console.log(result);
    })
    knex.('users')
})
