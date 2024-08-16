
window.addEventListener('load', function() {
    var plane = document.querySelector(".achievements__grid-img");
    plane.classList.add("plane-vis");
});

//Карусель для карточек

const images = document.querySelector('.achievements__grid-mobile').querySelectorAll('.achievements__grid-item');
let i= 0;

function showImage(index) {
    images[i].classList.remove('active');
    images[index].classList.add('active');
    i = index;
}

document.querySelector('.achievements__grid-mobile').addEventListener('click', function (event) {
        if (event.target.classList.contains('prev-button')) {
            let index = i- 1;
            if (index < 0) {
                index = images.length - 1;
            }
            showImage(index);
        } else if (event.target.classList.contains('next-button')) {
            let index = i + 1;
            if (index >= images.length) {
                index = 0;
            }
            showImage(index);
        }
    });

showImage(i);

