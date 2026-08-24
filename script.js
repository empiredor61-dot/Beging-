const images = document.querySelectorAll(".image-produit");
const lightbox = document.getElementById("lightbox");
const imageLightbox = document.getElementById("image-lightbox");
const fermerLightbox = document.getElementById("fermer-lightbox");

if (images.length && lightbox && imageLightbox && fermerLightbox) {
    images.forEach(function (image) {
        image.addEventListener("click", function () {
            lightbox.style.display = "flex";
            imageLightbox.src = image.src;
            imageLightbox.alt = image.alt;
        });
    });

    fermerLightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            lightbox.style.display = "none";
        }
    });
}
