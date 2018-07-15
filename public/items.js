// let itemsToPack = document.querySelectorAll(.itemCard)
// for (var i = 0; i < table_Items.length; i++) {
// create card box
// create a badge
// create a description (item)
// GET ID from database
// GET Image from database
// NEW -> Qty = 0
// UPDATE -> GET quanity from DB
// Button onclick qty[i] ++
// Button onclick qty[i] --

// array of items. for each {id: #, qty[i]:#}
// save to local storage

// addEventListener on button click
// increase qty[i] ++

// addEventListener on button click
// increase qty[i] --

// ===================================================

// onclick button id "shirtAdd" qty ++
// { 1:shirt, 2:shorts, 3:socks, 4:undies}
// NEW KNAPSAK =========
  // badge[i] = 0


// EXISTING KNAPSAk ========
 // badge[i] = GET QTY from DB and populate badges


// for each item, update badge
// let shirtAdd = document.getElementById('shirtAdd')

 // <button onclick="myFunction()">Click me</button>

let items = {
  shirts: 0,
  shorts: 0,
  socks: 0,
  undies: 0
}

function addItems() {
  // for item[id], increase qty ++
  if (event.target.id === 'shirts') {
    items.shirts++
    document.getElementById('shirtsCount').innerText = items.shirts
    console.log('items shirts', items.shirts);
  } if (event.target.id === 'shorts') {
    items.shorts++
    document.getElementById('shortsCount').innerText = items.shorts
  } if (event.target.id === 'socks') {
    items.socks++
    document.getElementById('socksCount').innerText = items.socks
  } if (event.target.id === 'undies') {
    items.undies++
    document.getElementById('undiesCount').innerText = items.undies
  }
  console.log('quanity shirt', items.shirts);
  console.log('quanity shorts', items.shorts);
  console.log('quanity socks', items.socks);
  console.log('quanity undies', items.undies);

  // document.getElementById('shirtCount').value = items.shirts
}

function removeItems() {
  // for item[id], increase qty ++
  console.log('events target', event.target.id);
  console.log('items.shirts', items.shirt);
  if (event.target.id === 'shirts' && items.shirts > 0) {
    items.shirts--
    console.log('shirt check');
    document.getElementById('shirtsCount').innerText = items.shirts
  } if (event.target.id === 'shorts' && items.shorts > 0) {
    items.shorts--
    document.getElementById('shortsCount').innerText = items.shorts
  } if (event.target.id === 'socks' && items.socks > 0) {
    items.socks--
    document.getElementById('socksCount').innerText = items.socks
  } if (event.target.id === 'undies' && items.undies > 0) {
    items.undies--
    document.getElementById('undiesCount').innerText = items.undies
  }
  console.log('quanity shirt', items.shirts);
  console.log('quanity shorts', items.shorts);
  console.log('quanity socks', items.socks);
  console.log('quanity undies', items.undies);

  // document.getElementById('shirtCount').value = items.shirts
}

function onSave() {
//get values of all items {}
//save to items to local storage - stringify
console.log('reaching onSave');
localStorage.setItem('items', JSON.stringify(items))
let localStorageItems = localStorage.getItem('items')
console.log(localStorageItems);
}
