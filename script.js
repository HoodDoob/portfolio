// Making pictures black and white on hover
// var $root = $("html, body");
// import { animate, stagger } from "https://cdn.skypack.dev/motion";
import { inView, animate, scroll } from "https://cdn.skypack.dev/motion";

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

inView(
  "#about",
  ({ target }) => {
    animate(
      target.querySelector("#about_title_wrapper"),
      { opacity: 1, transform: "none" },
      { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
    );
    console.log("we there");
  },
  { amount: 0.3 }
);

inView(
  "#about",
  ({ target }) => {
    animate(
      target.querySelector("#about p"),
      { opacity: 1, transform: "none" },
      { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
    );
    console.log("we there");
  },
  { amount: 0.6 }
);
// const logo_shadow = [
//   [".header_logo", { style: "text-shadow: 2px 2px var(--color-blue)" }],
// ];
const progress = document.querySelector("header");
scroll(({ y }) => {
  progress.style.textShadow = `${y.progress.toFixed(2) * 3}px ${
    y.progress.toFixed(4) * 3
  }px var(--color-blue)`;
});
// const progress2 = document.querySelector(".header_menu");
// scroll(({ y }) => {
//   progress2.style.textShadow = `${y.progress2.toFixed(2) * 2.5}px ${
//     y.progress2.toFixed(4) * 2.5
//   }px var(--color-blue)`;
// });
