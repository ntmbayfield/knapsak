const baseURL = 'http://localhost:3333';

//use ajax to query the database and get array of all entries in the items table
axios.get(`${baseURL}/items`)
.then(result => {
  console.log(result);
  let itemsArray = result.data;

  let createKnapsakArea = document.querySelector('create-knapsak-div');


  for (let i=0; i < itemsArray.length; i++) {

    //create 'card' div for index in itemsArray
    let card = document.createElement('div');

    //Create plus/minus buttons and area to display quantity for each card
    let counterNode = document.createElement('div');
      counterNode.className = 'btn_container';
    let plusInput = document.createElement('input');
      plusInput.type="button";
      plusInput.value="+";
      plusInput.id="plus";
    let minusInput = document.createElement('input');
      minusInput.type="button";
      minusInput.value="-";
      minusInput.id="minus";
    let countDisplay = document.createElement('input');
      countDisplay.type="text";
      countDisplay.size="3";
      countDisplay.value="0";
    counterNode.appendChild(minusInput);
    counterNode.appendChild(countDisplay);
    counterNode.appendChild(plusInput);

    //create imageNode and itemNameNode for each card)
    let imageNode = document.createElement('img');
    let itemNameNode = document.createElement('p');
      itemNameNode.className = "name_of_clothing_item";
      itemNameNode.innerHTML = itemsArray[i].itemName;
      imageNode.src = itemsArray[i].image;
      imageNode.setAttribute('height', '210');
      imageNode.setAttribute('width', '210');

    //append itemNameNode, imageNode and counterNode to each card
    createKnapsakArea.appendChild(card);
    card.appendChild(itemNameNode);
    card.appendChild(imageNode);
    card.appendChild(counterNode);
  } //closes for loop


  let allcards = document.querySelectorAll('div.card');
  let packingListObj = {};


  //@ time of creation generate packingListObj with the keys that correspond to card.p.innerHTML and values===0

  for (let i =0; i < allcards.length; i++) {
    let clothingItemName = allcards[i].querySelector("p[class=name_of_clothing_item]").innerHTML;


    let countEl = allcards[i].querySelector("input[type=text]");

    let plusBtn = allcards[i].querySelector('[value="+"]');
    plusBtn.addEventListener('click', () => {
        countEl.value++;
        packingListObj[clothingItemName] = countEl.value;
    });

    let minusBtn = allcards[i].querySelector('[value="-"]');
    minusBtn.addEventListener('click', () => {
      if (countEl.value > 0) {
        countEl.value--;
        packingListObj[clothingItemName] = countEl.value;
        console.log(packingListObj);
      }
    });

  //  console.log(countEl);
  }
});



//add event listener to createKnapsakButton that saves trip details to local storage and hides the index div and makes the create knapsak div
//document.getElementById('createKnapsakButton').addEventListener('click', () => {
  //create tripInfoObj and save user input values to Obj in local storage
  // let tripInfoObj = {};
  // tripInfo[kidsName] = document.querySelector('name-input').value
  // tripInfo[tripTitle] = document.querySelector('knapsak-description-input').value
  // localStorage.setItem('tripInfoObj', JSON.stringify(tripInfoObj));
  // console.log(tripInfoObj);

  //hide the index container and show the create-knapsak-div



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

document.getElementById('createKnapsakButton').addEventListener('click', () => {
  $("#index-container").hide();
  $("#create-knapsak-div").show();
  console.log("hide and shiow executed");
});


document.getElementById('reviewKnapsakButton').addEventListener('click', () => {
  let knapsakContents = {
    item1: 5,
    item2: 7,
    item3: 29
  }

  localStorage.setItem('packingListObj', JSON.stringify(packingListObj));

  $("#create-knapsak-div").hide();
  $("#review-knapsak-div").show();
});


//add event listener to id="createKnapsakButton" that hides indexDiv and changes visibility for createKnapsakDiv to show from hide and routes to GET '/new' and


//add event listener to the id="reviewKnapsakButton" that hides createKnapsakDiv and changes visibility for reviewKnapsakDiv

//add event listener to saveKnapsakButton that stores newKnapsak object to local storage,  and hides reviewKnapsakDiv and shows loginDiv

//add event listener to loginButton that checks if there is a newKnapsak object stored in local storage and if there is it saves it to the database


      // let upButton = document.createElement('button');
      //   upButton.className = 'btn';
      //   upButton.setAttribute.display = "inline";
      // let upIcon = document.createElement('i');
      //     upIcon.className = 'far fa-arrow-alt-circle-up';
      // upButton.appendChild(upIcon);
      // let downButton = document.createElement('button');
      //   downButton.className = 'btn';
      //   downButton.setAttribute.display = "inline";
      // let downIcon = document.createElement('i');
      //   downIcon.className = 'far fa-arrow-alt-circle-down';
      //   downButton.appendChild(downIcon);
      // let quantityPara = document.createElement('p');
      //   quantityPara.className = "q";
      //   quantityPara.innerHTML = "Quantity: ";
      //   quantityPara.setAttribute.display = "inline";
      // let amountPara = document.createElement('p');
      //   amountPara.className = "amount";
      //   amountPara.innerHTML = 0;
      //   quantityPara.appendChild(amountPara);
      // counterNode.appendChild(downButton);
      // counterNode.appendChild(quantityPara);
      // counterNode.appendChild(upButton);
      //
