const modalLink = document.querySelector(".btn-write-us");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const modalLogin = document.querySelector(".modal-login");
const modalPassword = document.querySelector(".modal-pass");
const modalText = document.querySelector(".modal-text");
const modalForm = document.querySelector(".modal-form");

modalLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  modalLogin.focus();
});

modalClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function(evt) {
  if (!modalLogin.value || !modalPassword.value || !modalText.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  }
})

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if(modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
})
