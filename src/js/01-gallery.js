// Add imports above this line
import { galleryItems } from './gallery-items.js';


// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);



const galleryCards = document.querySelector('.gallery');


const galleryMarkup = createGalleryMarkup(galleryItems);
galleryCards.insertAdjacentHTML('beforeend', galleryMarkup);

galleryCards.addEventListener('click', onClickImage);



function createGalleryMarkup(galleryItems) {
    return galleryItems.map (({ preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
        </div>`
    }).join('');
}



function onClickImage (evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')){

        return
    };



window.addEventListener('keydown', onEsckeyPress);
function onEsckeyPress (event) {
    

    if (event.code === 'Escape'){
       instance.close();
    }
}
}
let lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:'250'});