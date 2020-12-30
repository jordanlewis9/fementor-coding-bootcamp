const quote1 = document.querySelector('.testimonial__quote--1');
const quote2 = document.querySelector('.testimonial__quote--2');
const author1 = document.querySelector('.testimonial__quote--1-author')
const author2 = document.querySelector('.testimonial__quote--2-author')
const pic1 = document.querySelector('.testimonial__picture--1');
const pic2 = document.querySelector('.testimonial__picture--2');
const nextSlider = document.querySelector('.slider__next');
const prevSlider = document.querySelector('.slider__prev');

const array1 = [quote1, author1, pic1, nextSlider];
const array2 = [quote2, author2, pic2, prevSlider];


const handleNextTransition = () => {
  array1.forEach(item => item.classList.add('hide'));
  array2.forEach(item => item.classList.remove('hide'));
  prevSlider.addEventListener('click', handlePrevTransition);
  nextSlider.removeEventListener('click', handleNextTransition);
};

const handlePrevTransition = () => {
  array1.forEach(item => item.classList.remove('hide'));
  array2.forEach(item => item.classList.add('hide'));
  nextSlider.addEventListener('click', handleNextTransition);
  prevSlider.removeEventListener('click', handlePrevTransition);
}


nextSlider.addEventListener('click', handleNextTransition);
