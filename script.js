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
    console.log(event.target.classList.toggle("text_blue"));
  })
);

// hover_blue_1.forEach((el) =>
//   el.addEventListener("mouseover", (event) => {
//     console.log((event.target.style.color = "var(--color-blue)"));
//   })
// );

// const title_blue_1 = document.querySelector(".hover_blue_1");
// const title_blue_2 = document.querySelector(".hover_blue_2");
// title_blue_1.addEventListener("mouseover", titleBlueON);
// title_blue_1.addEventListener("mouseleave", titleBlueOFF);
// title_blue_2.addEventListener("mouseover", titleBlueON);
// title_blue_2.addEventListener("mouseleave", titleBlueOFF);

// function titleBlueON(evt) {
//   evt.target.style.color = "var(--color-blue)";
//   console.log("unhovered");
// }
