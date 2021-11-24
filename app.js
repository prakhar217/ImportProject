const nav_slide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        nav.classList.style.display="flex";
    })

}

nav_slide();
// Automatic slideshow

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// Chat-box

document .querySelector(".openChatBtn") .addEventListener("click", openForm);
document.querySelector(".close").addEventListener("click", closeForm);
function openForm() {
   document.querySelector(".openChat").style.display = "block";
}
function closeForm() {
   document.querySelector(".openChat").style.display = "none";
}