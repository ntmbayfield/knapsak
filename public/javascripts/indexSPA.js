const baseURL = 'http://localhost:3333';

axios.get(`${baseURL}/items`)
  .then(result => {
    console.log(result);
    let itemsArray = result.data

    //dynamically creating cards for entries on items table
    let createKnapsakArea = document.getElementById('create-knapsak-div');

    for (let i=0; i < itemsArray.length; i++) {
      let card = document.createElement('div');
      let quantity = document.createElement('p');
      let image = document.createElement('img');
      let itemNameNode = document.createElement('p');
        quantity.innerHTML = 0;
        itemNameNode.innerHTML = itemsArray[i].itemName
      card.appendChild(itemNameNode);
      // card.appendChild(itemsArray[i].image);
      createKnapsakArea.appendChild(card);
    }
});

document.getElementById('createKnapsakButton').addEventListener('click', () => {
  let kidsName = document.querySelector('#name-input').value
  let tripTitle = document.querySelector('#knapsak-description-input').value

  localStorage.setItem('kidsName', JSON.stringify(kidsName));
  console.log(kidsName);
  localStorage.setItem('tripTitle', JSON.stringify(tripTitle));
  console.log(tripTitle);

  $("#index-container").hide();
  $("#create-knapsak-div").show();

  console.log('hide and show executed');
})


document.getElementById('reviewKnapsakButton').addEventListener('click', () => {
  let knapsakContents = {
    item1: 5,
    item2: 7,
    item3: 29
  }

  localStorage.setItem('knapsakContents', JSON.stringify(knapsakContents));

  $("#create-knapsak-div").hide();
  $("#review-knapsak-div").show();
})


//add event listener to id="createKnapsakButton" that hides indexDiv and changes visibility for createKnapsakDiv to show from hide and routes to GET '/new' and


//add event listener to the id="reviewKnapsakButton" that hides createKnapsakDiv and changes visibility for reviewKnapsakDiv

//add event listener to saveKnapsakButton that stores newKnapsak object to local storage,  and hides reviewKnapsakDiv and shows loginDiv

//add event listener to loginButton that checks if there is a newKnapsak object stored in local storage and if there is it saves it to the database
