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
  pic2.classList.add('picture-slide-in-right');
  document.removeEventListener('keydown', handleKeyup);
  nextSlider.removeEventListener('click', handleNextTransition);
  nextSlider.classList.remove('pointer');
  setTimeout(() => {
    prevSlider.addEventListener('click', handlePrevTransition);
    prevSlider.classList.add('pointer');
    pic2.classList.remove('picture-slide-in-right');
    document.addEventListener('keydown', handleKeyup);
  }, 500);
};

const handlePrevTransition = () => {
  currentInfo = 1
  array1.forEach(item => item.classList.remove('hide'));
  array2.forEach(item => item.classList.add('hide'));
  pic1.classList.add('picture-slide-in-left');
  document.removeEventListener('keydown', handleKeyup);
  prevSlider.removeEventListener('click', handlePrevTransition);
  prevSlider.classList.remove('pointer');
  setTimeout(() => {
    nextSlider.addEventListener('click', handleNextTransition);
    nextSlider.classList.add('pointer');
    pic1.classList.remove('picture-slide-in-left');
    document.addEventListener('keydown', handleKeyup);
    }, 500);
};

document.addEventListener('keydown', handleKeyup);
nextSlider.addEventListener('click', handleNextTransition);