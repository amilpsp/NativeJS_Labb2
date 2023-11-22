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
function newPicture (src, alt, srcHD){
    let layoutUl = document.getElementById('photo-layout')
    let newLi = document.createElement('li')
    let newTextNode = document.createTextNode('')
    newLi.innerHTML=`<img class="layout-img" src="${src}" alt="${alt}">`

    newLi.appendChild(newTextNode)
    layoutUl.appendChild(newLi)
    newModal(srcHD, alt) 
    
    /* BUGGED making a new modal for each picture created 
    
    calling it directly from here because their creation depends on this

    [ominously religious phrasing aside]
    
    */
}

function newModal (srcHD,alt){
    let layoutModals = document.getElementById('modals-container')
    let newDiv = document.createElement('div')
    let newTextNode = document.createTextNode('')
    newDiv.innerHTML=`
<div   
class="photo-modal modal fade"
id="exampleModal1">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="ratio ratio-16x9">
                <img
                src="${srcHD}"
                alt="${alt}"
                allowfullscreen
                ></img>
            </div> <!-- end of ratio -->
        </div> <!-- end of modal-content -->
    </div> <!-- end of modal-dialog -->
</div> <!-- end of modal -->`
    newDiv.appendChild(newTextNode)
    layoutModals.appendChild(newDiv)
}

/* event listener for the modal display */
addEventListener('DOMContentLoaded', () => {
    function displayModal(e){
        e.style.display="float"
    }
    
    let layoutImages = document.querySelectorAll('.layout-img')
    layoutImages.addEventListener('click',displayModal(this))
    }
)