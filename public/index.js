

const baseURL = 'http://localhost:3333';

axios.get(`${baseURL}/items`)
  .then(result => {
    console.log(result);
    let itemsArray = result.data

    //dynamically creating cards for entries on items table
    let createKnapsakArea = document.getElementById('create-knapsak-div');

    for (let i=0; i < itemsArray.length; i++) {
      let card = document.createElement('div');
        card.className = "card";
        card.setAttribute.display = "inline";

      let counterNode = document.createElement('div');
        counterNode.className = 'btn_container';
      let upButton = document.createElement('button');
        upButton.className = 'btn';
        upButton.setAttribute.display = "inline";
      let upIcon = document.createElement('i');
          upIcon.className = 'far fa-arrow-alt-circle-up';
      upButton.appendChild(upIcon);
      let downButton = document.createElement('button');
        downButton.className = 'btn';
        downButton.setAttribute.display = "inline";
      let downIcon = document.createElement('i');
        downIcon.className = 'far fa-arrow-alt-circle-down';
        downButton.appendChild(downIcon);
      let quantityPara = document.createElement('p');
        quantityPara.className = "q";
        quantityPara.innerHTML = "Quantity: ";
        quantityPara.setAttribute.display = "inline";
      let amountPara = document.createElement('p');
        amountPara.className = "amount";
        amountPara.innerHTML = 0;
        quantityPara.appendChild(amountPara);
      counterNode.appendChild(downButton);
      counterNode.appendChild(quantityPara);
      counterNode.appendChild(upButton);

  

      let imageNode = document.createElement('img');
      let itemNameNode = document.createElement('p');
        itemNameNode.className = "name_of_clothing_item";
        itemNameNode.innerHTML = itemsArray[i].itemName;
        imageNode.src = itemsArray[i].image;
        imageNode.setAttribute('height', '210');
        imageNode.setAttribute('width', '210');
      card.appendChild(itemNameNode);
      card.appendChild(imageNode);
      card.appendChild(counterNode);
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

// document.getElementById('createKnapsakButton').addEventListener('click', () => {
// //save user input to variables
//   let kidsName = document.querySelector('#name-input').value
//   let tripTitle = document.querySelector('#knapsak-description-input').value
// //store variables in locL STORAGE
//   localStorage.setItem('kidsName', JSON.stringify(kidsName));
//   localStorage.setItem('tripTitle', JSON.stringify(tripTitle));
//
// //HIDE INDEX DIV AND SHOW CREATE KNAPSAK DIV
//   $("#index-container").hide();
//   $("#create-knapsak-div").show();
//
//   axios.get(`${baseURL}/items`)
//     .then(result => {
//       console.log(result);
//       let itemsArray = result.data
//
//       //dynamically creating cards for entries on items table
//       let createKnapsakArea = document.getElementById('create-knapsak-div');
//
//
//       for (let i=0; i < itemsArray.length; i++) {
//         let card = document.createElement('div');
//
//         let counterNode = document.createElement('div');
//           counterNode.className = 'btn_container';
//         let upButton = document.createElement('button');
//           upButton.className = 'btn';
//         let upIcon = document.createElement('i');
//             upIcon.className = 'far fa-arrow-alt-circle-up';
//         upButton.appendChild(upIcon);
//         let downButton = document.createElement('button');
//           downButton.className = 'btn';
//         let downIcon = document.createElement('i');
//           downIcon.className = 'far fa-arrow-alt-circle-down';
//         downButton.appendChild(downIcon);
//         let quantityPara = document.createElement('p');
//           quanityPara.innerHTML = "Quantity: 0";
//         counterNode.appendChild(downButton);
//         counterNode.appendChild(quanityPara);
//         counterNode.appendChild(upButton);
//
//         let imageNode = document.createElement('img');
//           imageNode.src = itemsArray[i].image;
//           imageNode.setAttribute('height', '210');
//           imageNode.setAttribute('width', '210');
//         let itemNameNode = document.createElement('p');
//           itemNameNode.innerHTML = itemsArray[i].itemName;
//
//         card.appendChild(itemNameNode);
//         card.appendChild(imageNode);
//         card.appendChild(counterNode);
//         createKnapsakArea.appendChild(card);
//       }
//   });




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
