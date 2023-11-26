/* accessing the photo-layout ul, then itterating through and creating a li and inner-HTMLing the info in the JSON into it */

fetch("http://localhost:3000/photo-layout-images")
  .then(res=>res.json())
  .then(json=> {
    json.map(data=>{ 
        /* .map() built-in function itterates through the objects in the json */
        newPicture(data.src, data.alt)
    })
  });

  /* creating a new li, putting the image in it, and appending it to the list */
function newPicture (src, alt){
    let layoutUl = document.getElementById('photo-layout')
    let newLi = document.createElement('li')
    let newTextNode = document.createTextNode('')
    newLi.innerHTML=`<img class="layout-img" src="${src}" alt="${alt}">`

    newLi.appendChild(newTextNode)
    layoutUl.appendChild(newLi)
}

/* Learned how to itterate through a NodeList, syntax was tricky. I can now have unlimited "read-more-btn" */
addEventListener('DOMContentLoaded', () => {
  
  let readMoreButtons = document.querySelectorAll('.card-read-more-btn')

    function onClick(button, paragraph){
      paragraph.classList.toggle('hidden')
        if (button.innerHTML=="Read more"){
          button.innerHTML="Read Less"
        }
        else{
          button.innerHTML="Read more"
        }
    }/* end of on Click */
    
    readMoreButtons.forEach((button) => {
        button.addEventListener('click', () => {
          onClick(button, button.previousSibling.previousSibling); /* I thought it'd be the sibling direcly up, but it's not. I have to look into the node-layout rules */
        });
      });/* end of forEach */
    }
  ) /* end of DOMContentLoaded */

addEventListener('DOMContentLoaded',() =>{
  
  let consentButtons = document.querySelectorAll('.consent-btn')
  let consentModal = document.querySelector('#data-consent')
  let modalBackground = document.querySelector('#modal-background')

  /* if the choice hasn't been stored, display the choice modal */
  if (localStorage.getItem('choice') == null || localStorage.getItem('choice') == undefined){
    displayModal()
    cookiesChoice()
  }
  /* creates event listeners for each of the buttons, calls the storing function, and hides the modal */
  function cookiesChoice(){
    consentButtons.forEach((button)=>{
      button.addEventListener('click', () => {
        storeCookieChoice(button)
        hideModal()
      })
    })
  }
  /* storing the choice */
  function storeCookieChoice (button){
    localStorage.setItem('choice', `${button}`)
  }
  function hideModal(){
    consentModal.classList.add('hidden')
    modalBackground.classList.add('hidden')
  }
  function displayModal(){
    consentModal.classList.remove('hidden')
    modalBackground.classList.remove('hidden')
  }
})

/* learned that for the .classList.add() function to work there has to be an existing class list, even if it's empty. Otherwise I won't get any errors, but it won't work. */