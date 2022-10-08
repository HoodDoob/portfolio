// Making pictures black and white on hover

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
