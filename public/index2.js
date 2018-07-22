
const baseURL = 'http://localhost:3333';

axios.get(`${baseURL}/items`)
  .then(result => {
    console.log(result);
    let itemsArray = result.data

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
          console.log(packingListObj);
          localStorage.setItem('packingListObj', JSON.stringify(packingListObj));
      });

      let minusBtn = allcards[i].querySelector('[value="-"]');
      minusBtn.addEventListener('click', () => {
        if (countEl.value > 0) {
          countEl.value--;
          packingListObj[clothingItemName] = countEl.value;
          console.log(packingListObj);
          localStorage.setItem('packingListObj', JSON.stringify(packingListObj));
        }
      });

    //  console.log(countEl);
    }
  });


document.getElementById('reviewKnapsakButton').addEventListener('click', () => {
  let knapsakContents = localStorage.getItem('packingListObj', JSON.parse(packingListObj));
  console.log(knapsakContents);

  localStorage.setItem('knapsakContents', JSON.stringify(knapsakContents));

  $("#create-knapsak-div").hide();
  $("#review-knapsak-div").show();
})
