// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const listEl = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

listEl.insertAdjacentHTML('beforeend', markup);

function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item" data-name="${description}">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  aptionPosition: 'bottom',
  captionDelay: 250,
});
