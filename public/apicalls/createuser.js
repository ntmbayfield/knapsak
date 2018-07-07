// window.onload = function() {
//   // console.log('hellooooo!!!')
//   createUser(userInfo);
// }

const apiUrl = 'http://localhost:8000';
////change to http://  heroku
const usersUrl = apiUrl + '/users';


function createUser(){
  event.preventDefault()
//fetch
  console.log('in create user');
  // let userName = document.querySelector('#userName').value
  let name = document.getElementById('userName').value
  // console.log('userName', userName);
  console.log('name', name);

  return fetch(usersUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username: name,
      email: "test@gmail.com",
      password: "12345"
    })
  }).then(response => response.json())
  .catch(error => console.log(error))
}
