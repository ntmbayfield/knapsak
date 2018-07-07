// *****************************************************
// TAKE INPUT for who's going. Put into local storage
// *****************************************************

const form = document.querySelector('form');
const input = document.getElementById('kidsName');
const button = document.querySelector('button');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  //get value from input and place in local storage
  console.log('input.value', input.value)

  localStorage.setItem('kids', JSON.stringify(input.value));
  JSON.parse(localStorage.getItem('kids'))

  //log to see values stored in local storage
  console.log('Json stringify', JSON.stringify(input.value));
  console.log('local storage', JSON.parse(localStorage.getItem('kids')));
});
