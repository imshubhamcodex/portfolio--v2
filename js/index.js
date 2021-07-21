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
            stagger: 0.06,
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

  tl.to("#wrapper", { display: "block" });

  tl.fromTo(
    "#social div ul li",
    { duration: 0.6, opacity: 0, x: -100, ease: "Back.easeOut" },
    { duration: 0.6, opacity: 1, x: 0, stagger: 0.1, ease: "Back.easeOut" },
    "-=0.7"
  );

  tl.fromTo(
    ".intro_parts",
    { duration: 0.7, opacity: 0, x: -100, ease: "Expo.easeOut" },
    { duration: 0.7, opacity: 1, x: 0, stagger: 0.1, ease: "Expo.easeOut" },
    "-=0.8"
  );

  tl.fromTo(
    "#bottom_text p",
    { duration: 0.7, opacity: 0, x: -100, ease: "Expo.easeOut" },
    { duration: 0.7, opacity: 1, x: 0, stagger: 0.1, ease: "Expo.easeOut" },
    "-=0.3"
  );
}

function toggleNav() {
  if (document.getElementById("bar_icon").classList.contains("fa-bars")) {
    leftMove();
  } else {
    rightMove();
  }
}

function leftMove() {
  document.getElementById("bar_icon").classList.remove("fa-bars");
  document.getElementById("bar_icon").classList.add("fa-times");

  let tl = gsap.timeline();
  tl.fromTo(
    ".loading-screen_0",
    {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: "Expo.easeOut",
    },
    {
      duration: 1.2,
      width: "0%",
      left: "0%",
      ease: "Expo.easeOut",
    }
  );

  tl.fromTo(
    ".loading-screen",
    {
      duration: 1.1,
      width: "100%",
      left: "0%",
      ease: "Expo.easeOut",
    },
    {
      duration: 1.1,
      width: "7%",
      left: "0%",
      ease: "Expo.easeOut",
    },
    "-=.85"
  );
}

function rightMove() {
  document.getElementById("bar_icon").classList.add("fa-bars");
  document.getElementById("bar_icon").classList.remove("fa-times");

  let tl = gsap.timeline();
  tl.fromTo(
    ".loading-screen_0",
    {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: "Expo.easeOut",
    },
    {
      duration: 1.2,
      width: "0%",
      left: "100%",
      ease: "Expo.easeOut",
    }
  );

  tl.fromTo(
    ".loading-screen",
    {
      duration: 1.1,
      width: "100%",
      left: "0%",
      ease: "Expo.easeOut",
    },
    {
      duration: 1.1,
      width: "0%",
      left: "100%",
      ease: "Expo.easeOut",
    },
    "-=.85"
  );
}
