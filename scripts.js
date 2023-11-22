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
    newLi.innerHTML=`<img src="${src}" alt="${alt}">`
    newLi.appendChild(newTextNode)
    layoutUl.appendChild(newLi)
}
    