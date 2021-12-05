const faders = document.querySelectorAll(".aboutText, .aboutImage");
const faders2 = document.querySelectorAll("#topText");

const appearOptions = {
  threshold: 1,
  rootMargin: "200px 0px 300px 0px",
};

const appearOptions2 = {
  threshold: 1,
  rootMargin: "1000px 1000px 2000px 1000px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

const appearOnScroll2 = new IntersectionObserver(function (
  entries,
  appearOnScroll2
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll2.unobserve(entry.target);
    }
  });
},
appearOptions2);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

faders2.forEach((fader) => {
  appearOnScroll2.observe(fader);
});
