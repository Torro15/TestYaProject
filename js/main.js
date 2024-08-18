
window.addEventListener('load', function () {
    var plane = document.querySelector(".achievements__grid-img");
    plane.classList.add("plane-vis");
});


//Скрипт для карусели с командой
const slides = document.querySelectorAll('.team__box-item');
const totalSlides = slides.length;
let currentIndex = 0;

const updateIndicator = () => {
    const indicatorToShow = window.innerWidth > 540;
    const indicator = indicatorToShow ? document.querySelector('.count') : document.querySelector('.count-mobile');
    indicator.innerText = `${currentIndex + 1}/6`;
};
const showSlides = () => {
    const slidesToShow = window.innerWidth > 540; // Проверка ширины экрана
    const slidesVisible = slidesToShow ? 3 : 1; // Количество 
    const offset = -currentIndex * (100 / slidesVisible);
    const carouselInner = document.querySelector('.team__box');
    carouselInner.style.transform = `translateX(${offset}% )`; //Смещение

    updateIndicator();
};

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Зацикливание индекса
    showSlides();
};

showSlides(); // Отображаем первые слайды

setInterval(nextSlide, 4000); // Переключение каждые 4 секунды

//Карусель для карточек c достижениями


const images = document.querySelector('.achievements__grid-mobile').querySelectorAll('.achievements__grid-item');
const totalImages = images.length;
let i = 0;

// Функция для отображения слайда
const showSlide = (index) => {
    const displacement = index * -100; // Сдвигаем на 100% ширины слайда
    document.querySelector('.achievements__grid-mobile').style.transform = `translateX(${displacement}%)`;
};

// Обработчики событий для кнопок "вперед" и "назад"
document.getElementById('next-button').addEventListener('click', () => {
    i = (i + 1) % totalImages; // Переход к следующему слайду
    showSlide(i);
});

document.getElementById('prev-button').addEventListener('click', () => {
    i = (i - 1 + totalImages) % totalImages; // Переход к предыдущему слайду
    showSlide(i);
});

// Изначально показываем первый слайд
showSlide(i);