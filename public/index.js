
const baseURL = 'http://localhost:3333';
var itemsArray;
var packingListObj = {};
var kidsName = "";
var tripTitle = "";

axios.get(`${baseURL}/items`)
  .then(result => {
    console.log(result);
    itemsArray = result.data

    //dynamically creating cards for entries on items table


    for (let i=0; i < itemsArray.length; i++) {
      let createKnapsakArea = document.getElementById('create-knapsak-div');
      let card = document.createElement('div');
        card.className = "card";
        card.setAttribute.display = "inline";

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

      //defining packingListObj to hold Knapsak contents
      for (let i = 0; i < itemsArray.length; i++) {
        packingListObj[itemsArray[i].itemName] = {
          id: itemsArray[i].id,
          quantity: 0
        };
      }
    }
});

document.getElementById('createKnapsakButton').addEventListener('click', () => {
  kidsName = document.querySelector('#name-input').value
  tripTitle = document.querySelector('#knapsak-description-input').value

  localStorage.setItem('kidsName', JSON.stringify(kidsName));
  console.log(kidsName);
  localStorage.setItem('tripTitle', JSON.stringify(tripTitle));
  console.log(tripTitle);

  $("#index-container").hide();
  $("#create-knapsak-div").show();

  console.log('hide and show executed');


    let allcards = document.querySelectorAll('div.card');


    //@ time of creation generate packingListObj with the keys that correspond to card.p.innerHTML and values===0

    for (let i =0; i < allcards.length; i++) {
      let clothingItemName = allcards[i].querySelector("p[class=name_of_clothing_item]").innerHTML;


      let countEl = allcards[i].querySelector("input[type=text]");

      let plusBtn = allcards[i].querySelector('[value="+"]');
      plusBtn.addEventListener('click', () => {
          countEl.value++;
          packingListObj[clothingItemName].quantity = countEl.value;
          console.log(packingListObj);
          localStorage.setItem('packingListObj', JSON.stringify(packingListObj));
      });

      let minusBtn = allcards[i].querySelector('[value="-"]');
      minusBtn.addEventListener('click', () => {
        if (countEl.value > 0) {
          countEl.value--;
          packingListObj[clothingItemName].quantity = countEl.value;
          console.log(packingListObj);
          localStorage.setItem('packingListObj', JSON.stringify(packingListObj));
        }
      });

    //  console.log(countEl);
    }
  });


document.getElementById('reviewKnapsakButton').addEventListener('click', () => {
  let tripInfo = document.getElementById('tripInfo');
  tripInfo.innerHTML = `${kidsName}\'s Packing List for trip to ${tripTitle}`;

  let listOfItemsToPack = document.getElementById('list-of-items-to-pack');
  listOfItemsToPack.innerHTML = "";

  for (let key in packingListObj) {
    if (packingListObj[key].quantity > 0) {
      let itemToPack = document.createElement('li');
      itemToPack.innerHTML = `${key}: ${packingListObj[key].quantity}`;
      console.log(itemToPack);
      listOfItemsToPack.appendChild(itemToPack);
    };
  };

  $("#create-knapsak-div").hide();
  $("#review-knapsak-div").show();
});

document.getElementById('editPackingListButton').addEventListener('click', () => {
  $("#review-knapsak-div").hide();
  $("#create-knapsak-div").show();
});

document.getElementById('createAccountButton').addEventListener('click', () => {
  $("#review-knapsak-div").hide();
  $("#signup-div").show();
});

document.getElementById('logInButtonInReviewKnapsakDiv').addEventListener('click', () => {
  $("#review-knapsak-div").hide();
  $("#user-login-div").show();
});

document.getElementById('createMyFreeAccountButton').addEventListener('click', () => {
  $("#user-login-div").hide();
  $("#success-signup-div").show();
});

document.getElementById('goToDashboardButton').addEventListener('click', () => {
  $("#success-signup-div").hide();
  $("#user-dashboard-div").show();
});

document.getElementById('logIntoMyAccountButtonInLoginDiv').addEventListener('click', () => {
  $("#user-login-div").hide();
  $("#user-dashboard-div").show();
});

document.getElementById('logInButtonOnNavBar').addEventListener('click', () => {
  $("#index-container").hide();
  $("#nav-bar-div").hide();
  $("#user-login-div").show();
});

// document.getElementById('').addEventListener('click', () => {
//   $("#").hide();
//   $("#").show();
// });
//
// document.getElementById('').addEventListener('click', () => {
//   $("#").hide();
//   $("#").show();
// });

// document.getElementById('').addEventListener('click', () => {
//   $("#").hide();
//   $("#").show();
// });

//add event listeners for createMyFreeAccountButton, goToDashboardButton, logIntoMyAccountButton, logInButtonOnNavBar
