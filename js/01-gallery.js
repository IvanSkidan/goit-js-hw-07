import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

galleryContainer.addEventListener('click', handleClick);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
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

function handleClick(event) {
  // Скасування дії браузера за замовчуванням
  event.preventDefault();

  // Перевірка чи клік був на зображення
  if (event.target.nodeName !== "IMG") {
    return;
  };

  const source = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${source}" width="800" height="600">`);

  instance.show(window.addEventListener("keydown", onKeydownEsc));

  // Перевірка натиску клавіші Escape
  function onKeydownEsc(event) {
    if (event.code === "Escape") {
      instance.close(window.removeEventListener("keydown", onKeydownEsc));
    };
  }
}



// Варіант 2
// function handleClick(event) {
//   // Скасування дії браузера за замовчуванням
//   event.preventDefault();

//   // Перевірка чи клік був на зображення
//   if (event.target.nodeName !== "IMG") {
//     return;
//   };

//   const instance = basicLightbox.create(`
//   <img src="${event.target.dataset.source}" width="800" height="600">`,
//     {
//       onShow: (instance) => {
//         window.addEventListener("keydown", onKeydownEsc);
//       },

//       onClose: (instance) => {
//         window.removeEventListener("keydown", onKeydownEsc);
//       },
//     }
//   );
  
//   instance.show();

//   // Перевірка натиску клавіші Escape
//   function onKeydownEsc(event) {
//     if (event.code === "Escape") {
//       instance.close();
//     };
//   }
// }



// Варіант 3 (Без закриття на клавішу Escape)
// function handleClick(event) {
//   // Скасування дії браузера за замовчуванням
//   event.preventDefault();
  
//   // Перевірка чи клік був на зображення
//   if (event.target.nodeName !== "IMG") {
//     return;
//   };

//   const instance = basicLightbox.create(`
//   <img src="${event.target.dataset.source}"width="800" height="600">`);

//   instance.show();
// };
