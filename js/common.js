const swiperJury = new Swiper(".swiper-jury", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 3.5,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperReviews = new Swiper(".swiper-reviews", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.95,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".custom-select").forEach((select) => {
	  const selected = select.querySelector(".select-selected");
	  const optionsContainer = select.querySelector(".select-items");
 
	  selected.addEventListener("click", () => {
		 optionsContainer.classList.toggle("select-hide");
		 selected.classList.toggle("active");
	  });
 
	  optionsContainer.querySelectorAll("div").forEach((option) => {
		 option.addEventListener("click", () => {
			selected.textContent = option.textContent;
			optionsContainer.classList.add("select-hide");
			selected.classList.remove("active");
		 });
	  });
 
	  document.addEventListener("click", function (e) {
		 if (!select.contains(e.target)) {
			optionsContainer.classList.add("select-hide");
			selected.classList.remove("active");
		 }
	  });
	});
 });

const buttons = document.querySelectorAll("button[data-modal]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("show");
    }
  });
});

document.querySelectorAll(".modal .close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    const modal = closeBtn.closest(".modal");
    modal.classList.remove("show");
  });
});

window.addEventListener("click", (event) => {
  document.querySelectorAll(".modal.show").forEach((modal) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
});
