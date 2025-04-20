const images = ['004.jpg', '001.JPG', '002.JPG', '003.JPG'];
const targetImage = document.querySelector('.image-my-photo img');
let i = 1;

targetImage.addEventListener("click", () => {

    targetImage.computedStyleMap.opacity = '0';
    setTimeout(() => {

        if (i === images.length - 1) {
            i = 0
        }
        targetImage.src = 'images/' + images[i];
        i++;
        targetImage.computedStyleMap.opacity = '1';
    }, 500);
}
);
