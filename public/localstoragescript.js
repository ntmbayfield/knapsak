const form = document.querySelector('form');
const input = document.getElementById('kidsName');
const button = document.querySelector('button');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  //get value from input and place in local storage
  localStorage.setItem('items', input.value);
  console.log('localstorage ', localStorage.getItem('items'));
});
