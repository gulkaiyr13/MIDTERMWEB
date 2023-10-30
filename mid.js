//navigation bar effects on scroll//
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//portfolio Modal//
const worksModals = document.querySelectorAll(".works-model");
const imgCards = document.querySelectorAll(".img-card");
const worksCloseBtns = document.querySelectorAll(".works-close-btn");

var worksModal = function (modalClick) {
    worksModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        worksModal(i);
    });
});

worksCloseBtns.forEach((worksCloseBtn) => {
    worksCloseBtn.addEventListener("click", () => {
        worksModals.forEach((worksModalView) => {
            worksModalView.classList.remove("active");
        });
    });
});




