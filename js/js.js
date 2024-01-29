let sliderImages = document.querySelectorAll('.slider img');
let prevButton = document.querySelector('.button-prev');
let nextButton = document.querySelector('.button-next');
let currentIndex = 0;

sliderImages[currentIndex].style.display = 'block';

// Обработчик клика на кнопку Prev
prevButton.addEventListener('click', function () {
    sliderImages[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    sliderImages[currentIndex].style.display = 'block';
});

// Обработчик клика на кнопку Next
nextButton.addEventListener('click', function () {
    sliderImages[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % sliderImages.length;
    sliderImages[currentIndex].style.display = 'block';
});