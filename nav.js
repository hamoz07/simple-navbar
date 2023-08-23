let toggle = document.getElementsByClassName("toggle")[0];
let close = document.getElementsByClassName("close")[0];
let nav = document.getElementsByTagName("nav")[0];

// when clicking on the toggle the nav should be visible by sty;eing from -100% to 100%

toggle.addEventListener("click", () => {
  nav.style.cssText = "transform:translateY(0) ;";
});

close.addEventListener("click", () => {
  nav.style.cssText = "transform:translateY(100%) !important;";
});

document.onkeyup = (e) => {
  if (e.code === "Escape") {
    nav.style.cssText = "transform:translateY(100) ;";
  }
};

document.onkeyup = function (e__) {
  console.log(e__);
  if (e__.key === "k") {
    close.style.cssText = "color: indianred;border-color: indianred;";
  }
};
