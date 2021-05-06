let images = document.querySelectorAll(".project-image");


let popup = document.querySelector("#popup");
let closeBtn = document.querySelector(".popup-close");
let popupImage = document.querySelector("#popup-img");

images.forEach((image) => {
    image.addEventListener("click", (e) => {
        popupImage.src = e.target.src;
        popup.style.display = "block";
    })
})

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
})