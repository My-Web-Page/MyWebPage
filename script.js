let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");
let image3 = document.querySelector(".img3");
let image4 = document.querySelector(".img4");

let popup1 = document.querySelector(".wrapper1");
let popup2 = document.querySelector(".wrapper2");
let popup3 = document.querySelector(".wrapper3");
let popup4 = document.querySelector(".wrapper4");

let closeBtn1 = document.querySelector(".close1");
let closeBtn2 = document.querySelector(".close2");
let closeBtn3 = document.querySelector(".close3");
let closeBtn4 = document.querySelector(".close4");


image1.addEventListener("click", () => {
    popup1.style.display = "block";
})

image2.addEventListener("click", () => {
    popup2.style.display = "block";
})

image3.addEventListener("click", () => {
    popup3.style.display = "block";
})

image4.addEventListener("click", () => {
    popup4.style.display = "block";
})


closeBtn1.addEventListener("click", () => {
    popup1.style.display = "none";
})
closeBtn2.addEventListener("click", () => {
    popup2.style.display = "none";
})
closeBtn3.addEventListener("click", () => {
    popup3.style.display = "none";
})
closeBtn4.addEventListener("click", () => {
    popup4.style.display = "none";
})