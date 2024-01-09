const img = document.querySelectorAll(".demo");
const imageView = document.querySelector(".galerija-image-view");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const imageBox = document.querySelector(".galerija-image-box");

let currentImageIdx = 0;

imageView.addEventListener("click", () => {
    console.log("nazad");
    imageView.style.display = "none";
    imageBox.style.display = "none";
})

console.log(img);
img.forEach((element, index) => {
    element.addEventListener("click", () => {
        console.log("kliknuta slika");
        imageView.style.display = "block";
        imageBox.style.display = "block";
        currentImageIdx = index + 1;
        currentImageDisplay(currentImageIdx);
    })
});

function currentImageDisplay(position) {
    imageBox.style.backgroundImage = `url(img/galerija/${currentImageIdx}.png)`;
}

prevBtn.addEventListener("click", () => {
    currentImageIdx--;
    if (currentImageIdx === img.length + 1) {
        currentImageIdx = 1;
    }
    currentImageDisplay(currentImageIdx);
});
nextBtn.addEventListener("click", () => {
    currentImageIdx++;
    if (currentImageIdx === img.length + 1) {
        currentImageIdx = 1;
    }
    console.log(currentImageIdx);
    currentImageDisplay(currentImageIdx);
});
