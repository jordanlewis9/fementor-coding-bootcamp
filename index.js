const quote1 = document.querySelector('.testimonial__quote--1');
const quote2 = document.querySelector('.testimonial__quote--2');
const author1 = document.querySelector('.testimonial__quote--1-author');
const author2 = document.querySelector('.testimonial__quote--2-author');
const picContainer = document.querySelector('.testimonial__picture--container');
const pic1 = document.querySelector('.testimonial__picture--1');
const pic2 = document.querySelector('.testimonial__picture--2');
const nextSlider = document.querySelector('.slider__next');
const prevSlider = document.querySelector('.slider__prev');

const array1 = [quote1, author1, pic1];
const array2 = [quote2, author2, pic2];

let currentInfo = 1;

const handleKeyup = (e) => {
  if (e.keyCode === 39 && currentInfo === 1) {
    return handleNextTransition();
  } else if (e.keyCode === 37 && currentInfo === 2) {
    return handlePrevTransition();
  }
};

const handleNextTransition = () => {
  currentInfo = 2;
  array1.forEach(item => item.classList.add('hide'));
  array2.forEach(item => item.classList.remove('hide'));
  prevSlider.addEventListener('click', handlePrevTransition);
  nextSlider.removeEventListener('click', handleNextTransition);
};

const handlePrevTransition = () => {
  currentInfo = 1
  array1.forEach(item => item.classList.remove('hide'));
  array2.forEach(item => item.classList.add('hide'));
  nextSlider.addEventListener('click', handleNextTransition);
  prevSlider.removeEventListener('click', handlePrevTransition);
};

document.addEventListener('keydown', handleKeyup);
nextSlider.addEventListener('click', handleNextTransition);
