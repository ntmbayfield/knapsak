
const baseURL = 'http://localhost:3333';
var itemsArray;
var knapsaksArray;
var uidFromDb;
var name4greeting;
var usersArray;
var packingListObj = {};
var kidsName = "";
var tripTitle = "";

axios.get(`${baseURL}/items`)
  .then(result => {
    console.log(result);
    itemsArray = result.data

    //dynamically creating cards for entries on items table


    for (let i=0; i < itemsArray.length; i++) {
      let cardsDiv = document.getElementById('cards-div');
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
      cardsDiv.appendChild(card);

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
  console.log('clicked on createKnapsakButton');
  kidsName = document.querySelector('#name-input').value
  tripTitle = document.querySelector('#knapsak-description-input').value

  localStorage.setItem('kidsName', JSON.stringify(kidsName));
  console.log(kidsName);
  localStorage.setItem('tripTitle', JSON.stringify(tripTitle));
  console.log(tripTitle);

  $("#index-div").hide();
  $("#header-element-div").show();
  $("#create-knapsak-div").show();

  console.log('hide and show executed');


    let allcards = document.querySelectorAll('div.card');

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
    };
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

document.getElementById('logIntoMyAccountButtonInLoginDiv').addEventListener('click', () => {
  let loginEmailVal = document.getElementById('login-email').value;
  let hiMessage = document.getElementById('dashboard-greeting');
  let loginErrorMessage = document.getElementById('login-error-message');

  axios.get(`${baseURL}/users`)
    .then(result => {
      console.log(result)
      usersArray = result.data
    })

    for (let i=0; i < usersArray.length; i++) {
      if (loginEmailVal === usersArray[i].email) {
        console.log('that user has a user_id of ', usersArray[i].id);
        uidFromDb = usersArray[i].id;
        name4greeting = usersArray[i].name;
        hiMessage.innerHTMl = `Hi, ${name4greeting}!`;
        $("#user-login-div").hide();
        $("#user-dashboard-div").show();
      } else {
        loginErrorMessage.innerHTMl = "There is no user wth that email address in our system.  Please try again.";
      }
    };
  //
  // $("#user-login-div").hide();
  // $("#user-dashboard-div").show();

document.getElementById('signIntoMyAccountButtonOnHeader').addEventListener('click', () => {
  $("#header-element-div").hide();
  $("#create-knapsak-div").hide();
  $("#user-login-div").show();
});

document.getElementById('createKnapsakForRegisteredUserButton').addEventListener('click', () => {
  $("#user-dashboard-div").hide();
  $("#create-knapsak-div").show();
});

document.getElementById('goToDashboardButton').addEventListener('click', () => {
  $("#signup-div").hide();
  $("#success-signup-div").hide();
  $("#user-dashboard-div").show();
});

document.getElementById('displaySavedKnapsaksButton').addEventListener('click', () => {
    //To Do: what if there is no userId in localStorage
    let savedKnapsaksDiv = document.getElementById('hidden-knapsak-area');

    // let uid = localStorage.getItem('userID');
    axios.get(`${baseURL}/users/${uidFromDb}/knapsaks`)
    .then(result => {
      console.log(`user${uidFromDb} knapsaks`)
      console.log(result)
      knapsaksArray = result.data

      for (let i = 0; i < knapsaksArray.length; i++) {
        console.log('inside knapsaksArray');
        console.log(knapsaksArray[i].description);
        let savedKnapsakCard = document.createElement('div');
            savedKnapsakCard.className = 'svdknskcard';
        let savedImageNode = document.createElement('img');
            savedImageNode.className = 'svdimgnode';
            savedImageNode.src = 'https://image.ibb.co/fRZ7Ry/knapsak_green.png';
        let savedTextNode = document.createElement('p');
            savedTextNode.className = 'svdtxtnode';
            savedTextNode.innerHTML = knapsaksArray[i].description;
        savedKnapsakCard.appendChild(savedImageNode);
        savedKnapsakCard.appendChild(savedTextNode);
        savedKnapsaksDiv.appendChild(savedKnapsakCard);
      }
    });
});
});

// document.getElementById('').addEventListener('click', () => {
//   $("#").hide();
//   $("#").show();
// });

// document.getElementById('').addEventListener('click', () => {
//   $("#").hide();
//   $("#").show();
// });

// document.getElementById('').addEventListener('click', () => {
//   $("#").hide();
//   $("#").show();
// });

// document.getElementById('').addEventListener('click', () => {
//   $("#").hide();
//   $("#").show();
// });
