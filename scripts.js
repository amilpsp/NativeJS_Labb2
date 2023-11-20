/* accdss the photo-layout ul, then for each item in the json file, create a li and innerhtml the info in the JSON into it */

fetch("http://localhost:3000/photo-layout-images")
  .then(res=>res.json())
  .then(json=> console.log(json))

let layoutUl = document.querySelector('photo-layout')