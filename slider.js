const slides = document.getElementsByClassName("slide");
let currentSlide = 0;


function showSlide(slideNb) {
  // hide all other images
  Array.from(slides).forEach( slide => {
    slide.style.display = "none";
  })

  // show only current slide
  slides[slideNb].style.display = "block";
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



// add event listeners for arrows press
document.querySelector('.fa-chevron-right')
  .addEventListener("click", function(){
    currentSlide = nextSlide(currentSlide);
    showSlide(currentSlide);
})

document.querySelector('.fa-chevron-left')
  .addEventListener("click", function(){
    currentSlide = prevSlide(currentSlide);
    showSlide(currentSlide);
})


showSlide(0);