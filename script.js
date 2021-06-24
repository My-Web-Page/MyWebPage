let images = document.querySelectorAll(".project-image");


let popup = document.querySelector("#popup");
let popupImage = document.querySelector("#popup-img");

images.forEach((image) => {
    image.addEventListener("click", (e) => {
        console.log(e.target)
        popupImage.src = e.target.src;
        popup.style.display = "block";
    })
})



popupImage.addEventListener("click", (e) => {
    console.log(e.target)
    e.stopPropagation();
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
});