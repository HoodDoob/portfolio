// Making pictures black and white on hover
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

//? function that pulls content of about

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
  { amount: 0.4 }
);

//! function that adds blue shadow to the header

const header = document.querySelector("header");
scroll(({ y }) => {
  header.style.textShadow = `${y.progress.toFixed(1) * 3}px ${
    y.progress.toFixed(1) * 3
  }px var(--color-blue)`;
});

//! function that hides the logo from the landing page
const hero = document.querySelector(".latest_work");
const logo = document.querySelector(".header_logo");

const scrollOptions = {
  target: hero,
  offset: ["start end", "0 0.5"],
};
scroll(({ y }) => (logo.style.opacity = y.progress.toFixed(2)), scrollOptions);

const topBlur = document.querySelector("#header_blur");
scroll(({ y }) => {
  topBlur.style.boxShadow = `#fff 0px -20px 150px ${
    y.progress.toFixed(2) * 120
  }px`;
});
