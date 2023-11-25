/* accessing the photo-layout ul, then itterating through and creating a li and inner-HTMLing the info in the JSON into it */

fetch("http://localhost:3000/photo-layout-images")
  .then(res=>res.json())
  .then(json=> {
    json.map(data=>{ 
        /* .map() built-in function itterates through the objects in the json */
        
        newPicture(data.src, data.alt, data.srcHD)
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
    function onClick(button, paragraph){
        button.innerHTML="Read Less"
        paragraph.classList.remove('hidden') /* !!!!!!!!!!!!!!!!!!!!!! */
        /* I'm having the same damn problem I was having with the modals: I'M FAILING AT CHANGING THE DAMN DISPLAY*/
        console.log(paragraph)
    }

    let buttons = document.querySelectorAll('.read-more-btn')
    
    
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
          onClick(button, button.previousSibling.previousSibling);
        });
      });
    }
  )