"use strict";

(function () {
  const categories = ["supplies", "kitchen"];
  const options = {
    type: "carousel",
    gap: 0,
    autoplay: 2000,
  };

  for (let category of categories) {
    new Glide(`#${category}Carousel`, options).mount();
  }
})();
