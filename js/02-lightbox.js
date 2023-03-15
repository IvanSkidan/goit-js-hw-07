import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => {
  return `<li>
  <a class="gallery__item" href="${original}">
  <img class="gallery__image"
  src="${preview}" 
  alt="${description}"/>
  </a>
  </li>`
}).join('');

galleryContainer.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});



// Варіант 2
// const galleryContainer = document.querySelector('.gallery');
// const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

// galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

// function createGalleryItemsMarkup(galleryItems) {
//   return galleryItems.map(({ preview, original, description }) => {
//     return `<li>
//     <a class="gallery__item" href="${original}">
//     <img class="gallery__image" 
//     src="${preview}" 
//     alt="${description}"
//     />
//     </a>
//     </li>`
//   }).join('');
// }

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: 250,
// });
