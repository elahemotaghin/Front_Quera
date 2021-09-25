const sliderImages = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg",
  "./images/image4.jpg",
];
const sliderDom = document.getElementById("slider");

let currentImage = 0;

function renderImages() {
  sliderImages.forEach((image) => {
    sliderDom.innerHTML += "<img src='" + image + "' />";
  });
}

function clearImages() {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].style.opacity = 0;
  }
}

function showImage(image) {
  clearImages();
  document.getElementsByTagName("img")[image].style.opacity = 1;
}

function init() {
  renderImages();
  showImage(currentImage);
  let nexButton = document.getElementById('nextButton');
  let prevButton = document.getElementById('prevButton');
  nexButton.addEventListener('click', nextImage)
  prevButton.addEventListener('click', prevImage)
}

function nextImage(){
  if(currentImage == sliderImages.length - 1)
    currentImage = 0;
  else
    currentImage ++;
  clearImages();
  showImage(currentImage);
}

function prevImage(){
  if(currentImage == 0)
    currentImage = sliderImages.length - 1;
  else
    currentImage --;
  clearImages();
  showImage(currentImage);
}

init();
