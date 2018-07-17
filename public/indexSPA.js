const baseURL = 'http://localhost:3333';

document.querySelector('#createKnapsakButton').addEventListener('click', () => {
  let kidsName = document.querySelector('#name-input').value
  console.log('hello world');
  let tripTitle = document.querySelector('#knapsak-description-input').value

  localStorage.setItem('kidsName', JSON.stringify(kidsName));
  localStorage.setItem('tripTitle', JSON.stringify(tripTitle));

  $("#index-container").hide();
  $("#create-knapsak-div").show();
})

document.querySelector('#review-knapsak-button').addEventListener('click', () => {
  $("#create-knapsak-div").hide();
  $("#review-knapsak-div").show();

  localStorage.setItem('knapsakContents', JSON.stringify(knapsakContents));
})


//add event listener to id="createKnapsakButton" that hides indexDiv and changes visibility for createKnapsakDiv to show from hide and routes to GET '/new' and


//add event listener to the id="reviewKnapsakButton" that hides createKnapsakDiv and changes visibility for reviewKnapsakDiv

//add event listener to saveKnapsakButton that stores newKnapsak object to local storage,  and hides reviewKnapsakDiv and shows loginDiv

//add event listener to loginButton that checks if there is a newKnapsak object stored in local storage and if there is it saves it to the database
