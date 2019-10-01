const slides = document.getElementsByClassName('slide');
const cirlces = document.getElementsByClassName('circle');
let currentSlide = 0;


function showSlide(slideNb) {
  // hide all other images
  Array.from(slides).forEach( slide => {
    slide.style.display = 'none';
    slide.style.opacity = 0;
    slide.classList.remove('transition');
  })

  // show only current slide
  slides[slideNb].style.display = 'block';
  slides[slideNb].classList.add('transition');
  window.setTimeout( function(){
    slides[slideNb].style.opacity = 1;
   
  }, 1)
 
}

function nextSlide(currentSlide){
  // if on the last slide go back to first
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
    return currentSlide
  } else {
    return currentSlide + 1;
  }  
}

function prevSlide(currentSlide){
  // if on the first slide go to the last
  if (currentSlide === 0 ) { 
    currentSlide = slides.length - 1;
    return currentSlide
  } else {
    return currentSlide - 1;
  }
}

function updateCircleColour(cirlces, circleNb){
  // clear background colour of all elements
  Array.from(cirlces).forEach(circle => {
    circle.style.background = 'none';
  })
  // change background colour of the next circle  to grey
  cirlces[circleNb].style.background = 'grey'
}

// add event listeners 
//for arrows press
document.querySelector('.fa-chevron-right')
  .addEventListener('click', function(){
    currentSlide = nextSlide(currentSlide);
    showSlide(currentSlide);
    // update circles indecator
    updateCircleColour(cirlces, currentSlide);
})

document.querySelector('.fa-chevron-left')
  .addEventListener('click', function(){
    currentSlide = prevSlide(currentSlide);
    showSlide(currentSlide);
    // update circles indecator
    updateCircleColour(cirlces, currentSlide);
})

// for circle press
for (let i =0; i < cirlces.length; i++){
  cirlces[i].addEventListener('click', function(e){
    // clear background colour of all elements
    Array.from(cirlces).forEach(circle => {
      circle.style.background = 'none';
    })
    // change background colour of the clicked element to grey
    e.target.style.background = 'grey';
    // update current slide
    let innerSlide = parseInt(e.target.dataset.id);
    currentSlide = innerSlide;
    // show current slide
    showSlide(innerSlide);
  })
}

  
showSlide(0);
updateCircleColour(cirlces, 0);