// Making pictures black and white on hover
// var $root = $("html, body");
// import { animate, stagger } from "https://cdn.skypack.dev/motion";
import { inView, animate } from "https://cdn.skypack.dev/motion";

const work_1 = document.querySelectorAll(".work_image");

work_1.forEach((el) =>
  el.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("blackWhite");
  })
);
work_1.forEach((el) =>
  el.addEventListener("mouseleave", (event) => {
    event.target.classList.toggle("blackWhite");
  })
);

// ? title animation that adds blue to each word in the title

const hover_blue_1 = document.querySelectorAll(".hover_blue_1");

hover_blue_1.forEach((el) =>
  el.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("text_blue");
  })
);

//   animation that changes (Sporo Wody) next to my name

const littleSporoWody = document.querySelector("#title_sporo");

littleSporoWody.addEventListener("mouseover", (event) => {
  event.target.classList.toggle("text_blue");
});

//! function that scrolls to footer
// document.querySelector(".header_menu").addEventListener("onclick", (event) => {
//   document.querySelector("#footer").scrollIntoView();
// });

// function scrollToFooter() {
//   document.getElementsByTagName('h2').scrollIntoView();
//   // will scroll to 4th h3 element
// }

document.querySelector(".header_menu").addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector("#footer").scrollIntoView({
    behavior: "smooth",
  });
});

const aboutH = document.querySelector("#about");
inView(
  aboutH,
  () => {
    animate(
      document.querySelector("#about_title_wrapper"),
      { opacity: 1, transform: `translate(100vw, 0vw)` },
      { delay: 0, duration: 1.3, easing: [0.17, 0.55, 0.55, 1] }
    );
  },
  { amount: 0.3 }
);
const aboutP = document.querySelector("#about");
inView(
  aboutP,
  () => {
    animate(
      document.querySelector("#about p"),
      { opacity: 1, transform: `translate(-100vw, 0vw)` },
      { delay: 0, duration: 1.3, easing: [0.17, 0.55, 0.55, 1] }
    );
  },
  { amount: 0.5 }
);
