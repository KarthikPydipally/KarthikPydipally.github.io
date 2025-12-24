const images = [
    "imgs/KarP_Portfolio_01.jpg",
    "imgs/KarP_Portfolio_02.jpg",
    "imgs/KarP_Portfolio_03.jpg",
    "imgs/KarP_Portfolio_04.jpg",
    "imgs/KarP_Portfolio_05.jpg",
    "imgs/KarP_Portfolio_06.jpg",
    "imgs/KarP_Portfolio_07.jpg",
    "imgs/KarP_Portfolio_08.jpg",
    "imgs/KarP_Portfolio_09.jpg",
    "imgs/KarP_Portfolio_10.jpg",
    "imgs/KarP_Portfolio_11.jpg",
    "imgs/KarP_Portfolio_12.jpg",
    "imgs/KarP_Portfolio_13.jpg"
];

let currentIndex = 0;

const mainImage = document.getElementById("main-image");
const counter = document.getElementById("image-counter");

function updateGallery() {
    // Update the image source
    mainImage.src = images[currentIndex];
    // Update the counter text
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
}

function changeImage(direction) {
    currentIndex += direction;

    // Loop back to the start or end
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    updateGallery();
}

// Initialize the display
updateGallery();

