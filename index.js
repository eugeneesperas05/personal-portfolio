// -----scroll up-------
window.onscroll = function () {
  scrollFunction();
};
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const scrollFunction = () => {
  const scrollToTopBtn = document.querySelector("#scrollToTop");
  scrollToTopBtn.style.display =
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      ? "block"
      : "none";
};
// -----end of sroll up------

// --------about----------
// start of button see more and show less
const seeMore = document.querySelector(".see-more");
const moreBtn = document.querySelector("#more-btn");
const lessBtn = document.querySelector("#less-btn");

moreBtn.addEventListener("click", () => {
  seeMore.style.display = "block";
  // seeMore.style.textIndent = "0";
  moreBtn.style.display = "none";
});

lessBtn.addEventListener("click", () => {
  seeMore.style.display = "none";
  moreBtn.style.display = "block";
});

// end of button see more and show less

// start of about me tabs for skills
const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

const openTab = (tabName) => {
  tabLinks.forEach((tabLink) => {
    tabLink.classList.remove("active-link");
  });

  tabContents.forEach((tabContent) => {
    tabContent.classList.remove("active-tab");
  });

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
};
// end of about me tabs for skills

// start of portfolio popUp see more button
const btnProject = document.querySelector("#btn-project");
const btnHide = document.querySelector("#btn-hide");
const portfolio = document.querySelector("#portfolio");

btnProject.addEventListener("click", () => {
  const popUpContainer = document.querySelector(".popUp-container");

  popUpContainer.style.display = "block";
  document.body.style.overflow = "hidden";
});

btnHide.addEventListener("click", () => {
  const popUpContainer = document.querySelector(".popUp-container");

  popUpContainer.style.display = "none";
  document.body.style.overflow = "auto";
  window.scrollTo(0, scrollTop);
});
// end of portfolio popUp see more button
