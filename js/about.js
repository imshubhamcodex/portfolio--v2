$(function () {
  barba.init({
    sync: true,
    transitions: [
      {
        async leave() {
          const done = this.async();

          pageTransition();
          await delay(800);
          done();
        },

        async enter() {
          contentAnimation();
        },

        async afterEnter() {
          let tl = gsap.timeline();
          tl.to("ul.transition li", {
            duration: 0.5,
            scaleY: 0,
            transformOrigin: "bottom left",
            stagger: 0.05,
            delay: 0.05,
          });
        },

        async once() {
          contentAnimation();
        },
      },
    ],
  });
});

// function for page transition
function pageTransition() {
  let tl = gsap.timeline();
  tl.to("ul.transition li", {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.06,
  });

  // tl.to("ul.transition li", {
  //   duration: 0.5,
  //   scaleY: 0,
  //   transformOrigin: "bottom left",
  //   stagger: 0.05,
  //   delay: 0.05,
  // });
}

// delay function
function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function contentAnimation() {
  let tl = gsap.timeline();
  tl.fromTo(
    ".nav_text",
    {
      duration: 0.6,
      opacity: 0,
      y: -100,
      transformOrigin: "left",
      stagger: 0.1,
      ease: "Expo.easeOut",
    },
    {
      duration: 0.6,
      opacity: 1,
      y: 0,
      transformOrigin: "left",
      stagger: 0.1,
      ease: "Expo.easeOut",
    }
  );

  // tl.to("#wrapper", { display: "block" });
}
