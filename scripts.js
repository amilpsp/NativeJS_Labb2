/* accdss the photo-layout ul, then for each item in the json file, create a li and innerhtml the info in the JSON into it */

let layoutUl = document.getElementsByClassName("photo-layout");

let promise = fetch('https://my-json-server.typicode.com/amilpsp/NativeJS_Labb2/db/', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET',
        mode: 'no-cors'
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