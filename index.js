// start of GSAP
// Select all navigation items
const navItems = document.querySelectorAll("nav");

// Create a GSAP timeline
const tl = gsap.timeline({});

// Add animations to the timeline
tl.staggerFrom(
  navItems,
  1,
  {
    y: -70,
    repeat: 0,
    ease: "myBounce-squash",
  },
  0.1
);

// edd of GSAP

// -----scroll up-------
window.onscroll = function () {
  scrollFunction();
};
function scrollToTop() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.body.scrollTop = 0; // For Safari
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

// --for my kodego button to show certifate---
const certificateBtn = document.querySelector("#certificate-btn");
const certiContainer = document.querySelector(".cert-container");
certificateBtn.addEventListener("click", () => {
  certiContainer.style.display = "block";
});

const closeBtn = document.querySelector("#close");

closeBtn.addEventListener("click", () => {
  certiContainer.style.display = "none";
});

// end of about me tabs for skills

// start of portfolio popUp see more button

const modalData = [
  {
    src: "pawfriend-template.png",
    title: "PawFriend",
  },
  {
    src: "pawfriend-template.png",
    title: "TravelPh",
  },
  {
    src: "pawfriend-template.png",
    title: "tictactoe",
  },
  {
    src: "pawfriend-template.png",
    title: "PawFriend",
  },
  {
    src: "pawfriend-template.png",
    title: "TravelPh",
  },
  {
    src: "pawfriend-template.png",
    title: "tictactoe",
  },
  {
    src: "pawfriend-template.png",
    title: "PawFriend",
  },
  {
    src: "pawfriend-template.png",
    title: "TravelPh",
  },
  {
    src: "pawfriend-template.png",
    title: "tictactoe",
  },
  {
    src: "pawfriend-template.png",
    title: "PawFriend",
  },
];

modalData.map((item) => {
  const modalContainer = document.querySelector(".modal-content-container");

  // new div for modal
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modalContainer.appendChild(modal);
  // images
  const createdImage = document.createElement("img");
  createdImage.src = `modal-images/${item.src}`;
  createdImage.classList.add("modalImg");
  modal.appendChild(createdImage);

  // title p
  const pTitle = document.createElement("p");
  pTitle.textContent = item.title;
  pTitle.classList.add("modalP");
  modal.appendChild(pTitle);

  console.log(item);
});

const btnProject = document.querySelector("#btn-project");
const btnX = document.querySelector("#x-btn");
const popupModal = document.querySelector(".popup-container");

btnProject.addEventListener("click", () => {
  popupModal.style.display = "block";
  document.body.style.overflow = "hidden";
  body.style.display = "none";
});

btnX.addEventListener("click", () => {
  popupModal.style.display = "none";
  document.body.style.overflow = "auto";
  body.style.display = "block";
});
// end of portfolio popUp see more button
