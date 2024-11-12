let carouselInner = document.querySelector('.carousel-inner');
let carouselItems = carouselInner.querySelectorAll('.carousel-item');
let playBtn = document.getElementById('play-btn');
let stopBtn = document.getElementById('stop-btn');
let currentCarouselItemIndex = 0;
let intervalId = null;

function cycleCarouselItems() {
  carouselItems[currentCarouselItemIndex].classList.remove('active');
  currentCarouselItemIndex = (currentCarouselItemIndex + 1) % carouselItems.length;
  carouselItems[currentCarouselItemIndex].classList.add('active');
}

playBtn.addEventListener('click', () => {
  intervalId = setInterval(cycleCarouselItems, 2000); // cycle every 3 seconds
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
});

carouselItems[0].classList.add('active');