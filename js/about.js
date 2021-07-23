$(function () {
  barba.init({
    sync: true,
    transitions: [
      {
        async leave() {
          const done = this.async();
          pageTransition();
          await delay(900);
          done();
        },

        async enter() {
          // contentAnimation();
        },

        async afterEnter() {
          let tl = gsap.timeline();
          tl.to("ul.transition li", {
            duration: 0.4,
            scaleY: 0,
            transformOrigin: "bottom left",
            stagger: 0.095,
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
  if (
    screen.width < 500 &&
    document.getElementsByClassName("load-container").length > 0
  ) {
    document.getElementsByClassName("load-container")[0].style.display = "none";
    document.getElementsByClassName("load-container_0")[0].style.display =
      "none";
  }

  let tl = gsap.timeline();
  tl.to("ul.transition li", {
    duration: 0.4,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.09,
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
  console.log('ccontent')
  tl.fromTo(
    ".about-me",
    { duration: 0.4, opacity: 0, y: 100, stagger: 0.1, ease: "Back.easeOut" },
    { duration: 0.4, opacity: 1, y: 0, stagger: 0.1, ease: "Back.easeOut" }
  );

  // tl.to("#wrapper", { display: "block" });
  tl.to(".mobile_nav_circle", { display: "none" });
}

function toggleNav() {
  if (document.getElementById("bar_icon").classList.contains("fa-bars")) {
    leftMove();
  } else {
    rightMove();
  }
}

function leftMove() {
  let tl = gsap.timeline();

  document.getElementById("bar_icon").classList.remove("fa-bars");
  document.getElementById("bar_icon").classList.add("fa-times");
  document.getElementsByTagName("main")[0].style.display = "none";
  document.getElementById("mobile_nav_items").style.display = "block";
  document.getElementById("mobile_logo").style.display = "none";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";

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

  tl.to(".mobile_nav_circle", { display: "block" }, "-=2.1");

  tl.fromTo(
    ".icon_mob i",
    { duration: 1, opacity: 0, x: -30, ease: "Expo.easeOut" },
    { duration: 1, opacity: 1, x: 0, ease: "Back.easeOut", stagger: 0.1 },
    "-=1"
  );

  tl.fromTo(
    "#bar_icon",
    { duration: 0.5, opacity: 0, y: -40, ease: "Back.easeOut" },
    { duration: 0.5, opacity: 1, y: 0, ease: "Back.easeOut" },
    "-=0.8"
  );
}

function rightMove() {
  document.getElementById("bar_icon").classList.add("fa-bars");
  document.getElementById("bar_icon").classList.remove("fa-times");
  document.getElementsByTagName("main")[0].style.display = "block";
  document.getElementById("mobile_nav_items").style.display = "none";
  document.getElementById("mobile_logo").style.display = "block";
  document.getElementsByTagName("body")[0].style.overflow = "visible";

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

  tl.fromTo(
    "#bar_icon",
    { duration: 0.5, opacity: 0, y: -40, ease: "Back.easeOut" },
    { duration: 0.5, opacity: 1, y: 0, ease: "Back.easeOut" },
    "-=0.8"
  );
}
