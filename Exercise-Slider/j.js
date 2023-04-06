let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');
let wrapper = document.querySelectorAll('.wrapper');
let images = wrapper[0].querySelectorAll('img');
let images2 = wrapper[1].querySelectorAll('img');
let currentPosition = 0;
let currentPosition2 = 0;


nextButton.addEventListener('click', () => {

  wrapper[0].appendChild(images[0]);
  images = wrapper[0].querySelectorAll('img');

  wrapper[1].appendChild(images2[0]);
  images2 = wrapper[1].querySelectorAll('img');

});

prevButton.addEventListener('click', () => {

  wrapper[0].insertBefore(images[images.length - 1], images[0]);
  images = wrapper[0].querySelectorAll('img');

  wrapper[1].insertBefore(images2[images2.length - 1], images2[0]);
  images2 = wrapper[1].querySelectorAll('img');
});


