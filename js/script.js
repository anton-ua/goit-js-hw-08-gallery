import images from "./gallery-items.js";

const links = {
  gallery: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  lightboxImage: document.querySelector(".lightbox__image"),
  closeLightbox: document.querySelector(
    ".lightbox__button[data-action=close-lightbox]"
  )
};

createGallery(images);

links.gallery.addEventListener("click", openLightbox);

links.closeLightbox.addEventListener("click", closeLightbox);

function createGallery(images) {
  images.map(el => {
    links.gallery.insertAdjacentHTML(
      "beforeend",
      `<li class="gallery__item">
      <a
        class="gallery__link"
        href=${el.original}>
        <img
          class="gallery__image"
          src=${el.preview}
          data-source=${el.original}
          alt="${el.description}"
        />
      </a>
    </li>`
    );
  });
}

function openLightbox(event) {
  if (event.target.nodeName === "IMG") {
    event.preventDefault();
    links.lightbox.classList.add("is-open");
    links.lightboxImage.attributes.src.value =
      event.target.attributes["data-source"].value;
    links.lightboxImage.attributes.alt.value =
      event.target.attributes.alt.value;
  }
}

function closeLightbox(event) {
  links.lightbox.classList.remove("is-open");
  links.lightboxImage.attributes.src.value = "";
  links.lightboxImage.attributes.alt.value = "";
}
