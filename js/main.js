
const images = document.querySelectorAll('.achievements__grid-mobile .slide');
let curIndex = 0;

function showImage(index) {
    images[curIndex].classList.remove('active');
    images[index].classList.add('active');
    curIndex = index;
}

document
    .querySelector('.achievements__grid-mobile.controlls')
    .addEventListener('click', function (event) {
        if (event.target.classList.contains('prev-button')) {
            let index = curIndex - 1;
            if (index < 0) {
                index = images.length - 1;
            }
            showImage(index);
        } else if (event.target.classList.contains('next-button')) {
            let index = curIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            showImage(index);
        }
    });

showImage(curIndex);