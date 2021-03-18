const slideBtn = document.querySelectorAll(".slide-btn");
const slideItem = document.querySelectorAll(".slide");

slideBtn[0].addEventListener("click", function() {
  slideBtn[0].classList.add("current");
  slideItem[0].classList.add("slide-current");
  slideBtn[1].classList.remove("current");
  slideItem[1].classList.remove("slide-current");
  slideBtn[2].classList.remove("current");
  slideItem[2].classList.remove("slide-current");
});

slideBtn[1].addEventListener("click", function() {
  slideBtn[1].classList.add("current");
  slideItem[1].classList.add("slide-current");
  slideBtn[0].classList.remove("current");
  slideItem[0].classList.remove("slide-current");
  slideBtn[2].classList.remove("current");
  slideItem[2].classList.remove("slide-current");
});

slideBtn[2].addEventListener("click", function() {
  slideBtn[2].classList.add("current");
  slideItem[2].classList.add("slide-current");
  slideBtn[1].classList.remove("current");
  slideItem[1].classList.remove("slide-current");
  slideBtn[0].classList.remove("current");
  slideItem[0].classList.remove("slide-current");
});
