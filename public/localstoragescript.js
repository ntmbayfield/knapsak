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
  localStorage.setItem('kidName_localstorage', JSON.stringify(input.value));
  console.log('Json stringify>>', JSON.stringify(input.value));

  //log value from local storage
  console.log('local storage>>', JSON.parse(localStorage.getItem('kidName_localstorage')));
});
