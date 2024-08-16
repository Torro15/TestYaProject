
// const slides = document.querySelectorAll('.team__box-item');
// const totalSlides = slides.length;
// let currentIndex = 0;

// const updateIndicator = () => {
//     const indicator = document.querySelector('.count');
//     indicator.innerText = `${currentIndex + 1}/6`;
// };

// const showSlides = () => {
//     const slidesToShow = 3;
//     const offset = (currentIndex % totalSlides) * -100 / slidesToShow;
//     const carouselInner = document.querySelector('.team__box');
//     carouselInner.style.transform = `translateX(${offset}%)`;

//     updateIndicator();
// };

// const nextSlide = () => {
//     currentIndex = (currentIndex + 1) % totalSlides; // Зацикливание индекса
//     showSlides();
// };

// showSlides(); // Отображаем первые слайды

// setInterval(nextSlide, 4000); // Переключение каждые 4 секунды

       
        const sliders = document.querySelectorAll('.slide');
        const totalSliders = sliders.length;
        let curIndex = 0;

        // Функция для отображения слайда
        const showSlide = (index) => {
            const offset = index * -100; // Сдвигаем на 100% ширины слайда
            document.querySelector('.slides').style.transform = 'translateX(${offset}%)';
        };

        // Обработчики событий для кнопок "вперед" и "назад"
        document.getElementById('next-button').addEventListener('click', () => {
            curIndex = (curIndex + 1) % totalSliders; // Переход к следующему слайду
            showSlide(curIndex);
        });

        document.getElementById('prev-button').addEventListener('click', () => {
            curIndex = (curIndex - 1 + totalSliders) % totalSliders; // Переход к предыдущему слайду
            showSlide(curIndex);
        });
           
        showSlide();
    