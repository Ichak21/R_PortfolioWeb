import PhotoSwipeLightbox from "/module/photoswipe/photoswipe-lightbox.esm.js";

const galleries = document.querySelectorAll(".pswp-gallery");

galleries.forEach((gallery) => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: "#" + gallery.id,
    children: "a",
    pswpModule: () => import("/module/photoswipe/photoswipe.esm.js"),
  });
  lightbox.init();
});
