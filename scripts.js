/* accdss the photo-layout ul, then for each item in the json file, create a li and innerhtml the info in the JSON into it */

fetch("http://localhost:3000/photo-layout-images")
  .then(res=>res.json())
  .then(json=> console.log(json));

  /* creating a new li, putting the image in it, and appending it to the list */
let layoutUl = document.getElementById('photo-layout')
let newLi = document.createElement('li')
let newTextNode = document.createTextNode('')
newLi.innerHTML=`<img src="img/compressed_buildings-1836478_1920.jpg" alt="brick facade and the entrance of a caffee">`
newLi.appendChild(newTextNode)
layoutUl.appendChild(newLi)
