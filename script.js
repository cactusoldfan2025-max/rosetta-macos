// just a fun hover animation on the title
const title = document.querySelector("h1");
title.style.transition = "transform 0.3s ease";
title.addEventListener("mouseover", () => {
  title.style.transform = "scale(1.05)";
});
title.addEventListener("mouseout", () => {
  title.style.transform = "scale(1)";
});
