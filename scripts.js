/* accdss the photo-layout ul, then for each item in the json file, create a li and innerhtml the info in the JSON into it */

let layoutUl = document.getElementsByClassName("photo-layout");

let promise = fetch('http://localhost:3000/photo-layout-images', {
        headers: {
          'Access-Control-Allow-Origin': 'http://127.0.0.1:5500/index.html',
          'Content-Type': 'application/json'
        },
        method: 'GET',
})

promise
  .then(response => {
    console.log(response)

    let someOtherPromise = response.text()

    return someOtherPromise
  })
  .then(result => {
    console.log(result)
  })