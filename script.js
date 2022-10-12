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

//!   animation that changes (Sporo Wody) next to my name

const littleSporoWody = document.querySelector("#title_sporo");

littleSporoWody.addEventListener("mouseover", (event) => {
  event.target.classList.toggle("text_blue");
});

// ?  function that changes Kurkiewicz to sporo wody

const KurToSpor = document.querySelector(".hover_blue_2");

KurToSpor.addEventListener("mouseover", (event) => {
  event.target.innerHTML = "Sporo Wody";
});

// !  function that changes different words

const imgToIdeas = document.querySelector(".hover_3");

imgToIdeas.addEventListener("mouseover", (event) => {
  event.target.innerHTML = "ideas";
});
const soundToMem = document.querySelector(".hover_4");

soundToMem.addEventListener("mouseover", (event) => {
  event.target.innerHTML = "memories";
});
const interToInspir = document.querySelector(".hover_5");

interToInspir.addEventListener("mouseover", (event) => {
  event.target.innerHTML = "inspirations";
});
const instToFears = document.querySelector(".hover_6");

instToFears.addEventListener("mouseover", (event) => {
  event.target.innerHTML = "fears";
});

//? function that starts on the landing page

const heroDesc = document.querySelectorAll(".animation_2");
const heroTit = document.querySelectorAll(".animation_3");
const heroAKA = document.querySelectorAll(".aka");

inView("#hero", () => {
  heroDesc.forEach((el) =>
    animate(
      el,
      { opacity: 1, transform: "none" },
      { delay: 0.2, duration: 1.5 }
    )
  );
});
inView("#hero", () => {
  heroTit.forEach((el) =>
    animate(
      el,
      { opacity: 1, transform: "none" },
      { delay: 0.2, duration: 1.5 }
    )
  );
});

inView(
  ".latest_work",
  () => {
    animate(
      heroAKA,
      { opacity: 1 },
      { delay: 0.2, duration: 1, easing: [0.17, 0.55, 0.55, 1] }
    );
  },
  { amount: 0.001 }
);

// functions for latest work section that pull different content

inView(
  ".latest_work",
  ({ target }) => {
    animate(
      target.querySelector("h2"),
      { opacity: 1, transform: "none" },
      { delay: 0.2, duration: 1.5, easing: [0.17, 0.55, 0.55, 1] }
    );
    console.log("we there");
  },
  { amount: 0.15 }
);
inView(
  ".latest_work",
  ({ target }) => {
    animate(
      target.querySelector(".work_image"),
      { opacity: 1, transform: "none" },
      { delay: 0.2, duration: 1.5, easing: [0.17, 0.55, 0.55, 1] }
    );
    console.log("we there");
  },
  { amount: 0.4 }
);
inView(
  ".latest_work",
  ({ target }) => {
    animate(
      target.querySelector(".latest_work_text"),
      { opacity: 1, transform: "none" },
      { delay: 0.2, duration: 1.5, easing: [0.17, 0.55, 0.55, 1] }
    );
    console.log("we there");
  },
  { amount: 0.5 }
);
inView(
  ".latest_work2",
  ({ target }) => {
    animate(
      target.querySelector(".work_image"),
      { opacity: 1, transform: "none" },
      { delay: 0.2, duration: 1.5, easing: [0.17, 0.55, 0.55, 1] }
    );
    console.log("we there");
  },
  { amount: 0.4 }
);
inView(
  ".latest_work2",
  ({ target }) => {
    animate(
      target.querySelector(".latest_work_text"),
      { opacity: 1, transform: "none" },
      { delay: 0.2, duration: 1.5, easing: [0.17, 0.55, 0.55, 1] }
    );
    console.log("we there");
  },
  { amount: 0.5 }
);

// function that pulls content of about

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
      target.querySelector("#about_p"),
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
      target.querySelector("#about_break"),
      { opacity: 1, transform: "none" },
      { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
    );
    console.log("we there");
  },
  { amount: 0.6 }
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
