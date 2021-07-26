$(function () {
  barba.init({
    sync: true,
    transitions: [
      {
        async leave(data) {
          if (screen.width > 500) {
            const done = this.async();
            pageTransition();
            await delay(1300);
            done();
          } else {
            const done = this.async();
            data.current.container.childNodes[3].style.display = "block";
            // await delay(100);
            done();
          }
        },

        async enter(data) {
          if (data.next.namespace === "home") contentAnimation_Home();
          else if (data.next.namespace === "about") contentAnimation_About();
          else if (data.next.namespace === "skills") contentAnimation_Skills();
          else if (data.next.namespace === "contact")
            contentAnimation_Contact();
          else if (data.next.namespace === "work") contentAnimation_Work();

          // disableLoading();
        },

        async beforeEnter(data) {
          if (data.next.namespace === "home") {
            let style = document.createElement("link");
            style.setAttribute("rel", "stylesheet");
            style.setAttribute("href", "./css/index.css");
            data.next.container.appendChild(style);
          } else if (data.next.namespace === "about") {
            let style = document.createElement("link");
            style.setAttribute("rel", "stylesheet");
            style.setAttribute("href", "./css/about.css");
            data.next.container.appendChild(style);
          } else if (data.next.namespace === "skills") {
            let style = document.createElement("link");
            style.setAttribute("rel", "stylesheet");
            style.setAttribute("href", "./css/skills.css");
            data.next.container.appendChild(style);
          } else if (data.next.namespace === "contact") {
            let style = document.createElement("link");
            style.setAttribute("rel", "stylesheet");
            style.setAttribute("href", "./css/contact.css");
            data.next.container.appendChild(style);
          } else if (data.next.namespace === "work") {
            let style = document.createElement("link");
            style.setAttribute("rel", "stylesheet");
            style.setAttribute("href", "./css/work.css");
            data.next.container.appendChild(style);

            let script = document.createElement("script");
            script.src = "./js/work.js";
            data.next.container.appendChild(script);
          }
        },

        async beforeLeave(data) {
          if (screen.width <= 500)
            data.current.container.childNodes[3].style.display = "block";
        },

        async afterEnter(data) {
          hideLi();
          if (screen.width <= 500)
            data.current.container.childNodes[3].style.display = "none";
        },

        async once(data) {
          if (data.next.namespace === "home") contentAnimation_Home();
          else if (data.next.namespace === "about") contentAnimation_About();
          else if (data.next.namespace === "skills") contentAnimation_Skills();
          else if (data.next.namespace === "contact")
            contentAnimation_Contact();
          else if (data.next.namespace === "work") contentAnimation_Work();
        },
      },
    ],
  });
});

function hideLi() {
  let tl = gsap.timeline();
  tl.to("ul.transition li", {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.09,
  });
}

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
    duration: 0.8,
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

// enable loading
function enableLoading() {
  if (screen.width <= 500)
    document.getElementById("parent-loading").style.display = "block";
}

function contentAnimation_Home() {
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
  tl.to(".mobile_nav_circle", { display: "none" });

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
    "-=0.6"
  );
}

function toggleNav_Home() {
  if (document.getElementById("bar_icon").classList.contains("fa-bars")) {
    leftMove_Home();
  } else {
    rightMove_Home();
  }
}

function leftMove_Home() {
  let tl = gsap.timeline();

  document.getElementById("bar_icon").classList.remove("fa-bars");
  document.getElementById("bar_icon").classList.add("fa-times");
  document.getElementsByTagName("main")[0].style.display = "none";
  document.getElementById("mobile_nav_items").style.display = "block";
  document.getElementById("mobile_logo").style.display = "none";

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

function rightMove_Home() {
  document.getElementById("bar_icon").classList.add("fa-bars");
  document.getElementById("bar_icon").classList.remove("fa-times");
  document.getElementsByTagName("main")[0].style.display = "block";
  document.getElementById("mobile_nav_items").style.display = "none";
  document.getElementById("mobile_logo").style.display = "block";

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
// Home :end --------------------------------------------------------------------------------------//
//About section  start -----------------------------------------------------------------------------//

function contentAnimation_About() {
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
  tl.fromTo(
    ".about-me",
    { duration: 0.4, opacity: 0, y: 100, stagger: 0.1, ease: "Back.easeOut" },
    { duration: 0.4, opacity: 1, y: 0, stagger: 0.1, ease: "Back.easeOut" },
    "-=0.5"
  );
  tl.fromTo(
    ".l_list li",
    { duration: 0.4, opacity: 0, x: -50, stagger: 0.1, ease: "Back.easeOut" },
    { duration: 0.4, opacity: 1, x: 0, stagger: 0.1, ease: "Back.easeOut" }
  );
  tl.fromTo(
    ".r_list li",
    { duration: 0.4, opacity: 0, x: -50, stagger: 0.1, ease: "Back.easeOut" },
    { duration: 0.4, opacity: 1, x: 0, stagger: 0.1, ease: "Back.easeOut" },
    "-=0.3"
  );

  tl.to(".mobile_nav_circle", { display: "block" });
}

function toggleNav_About() {
  if (document.getElementById("bar_icon").classList.contains("fa-bars")) {
    leftMove_About();
  } else {
    rightMove_About();
  }
}

function leftMove_About() {
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

function rightMove_About() {
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
//About section  end -----------------------------------------------------------------------------//

//Skills section start ----------------------------------------------------------------------------//

function contentAnimation_Skills() {
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

  tl.fromTo(
    ".myskill",
    { duration: 0.4, opacity: 0, y: -50, ease: "Back.easeOut" },
    { duration: 0.4, opacity: 1, y: 0, ease: "Back.easeOut" },
    "-=0.3"
  );

  tl.fromTo(
    ".myskill_des h3, .myskill_des h2",
    { duration: 0.4, opacity: 0, y: -50, ease: "Back.easeOut", stagger: 0.1 },
    { duration: 0.4, opacity: 1, y: 0, ease: "Back.easeOut", stagger: 0.1 },
    "-=0.2"
  );
  tl.fromTo(
    ".myskill_proto h3,.myskill_proto h2",
    { duration: 0.35, opacity: 0, y: -50, ease: "Back.easeOut", stagger: 0.1 },
    { duration: 0.35, opacity: 1, y: 0, ease: "Back.easeOut", stagger: 0.1 },
    "-=0.2"
  );
  tl.fromTo(
    ".myskill_prod h3,.myskill_prod h2",
    { duration: 0.3, opacity: 0, y: -50, ease: "Back.easeOut", stagger: 0.1 },
    { duration: 0.3, opacity: 1, y: 0, ease: "Back.easeOut", stagger: 0.1 },
    "-=0.2"
  );
  tl.fromTo(
    ".myskill_animi h3,.myskill_animi h2",
    { duration: 0.25, opacity: 0, y: -50, ease: "Back.easeOut", stagger: 0.1 },
    { duration: 0.25, opacity: 1, y: 0, ease: "Back.easeOut", stagger: 0.1 },
    "-=0.2"
  );
  tl.fromTo(
    ".myskill_dev h3,.myskill_dev h2",
    { duration: 0.2, opacity: 0, y: -50, ease: "Back.easeOut", stagger: 0.1 },
    { duration: 0.2, opacity: 1, y: 0, ease: "Back.easeOut", stagger: 0.1 },
    "-=0.2"
  );
  tl.fromTo(
    ".tech_known",
    { duration: 0.25, opacity: 0, x: -50, ease: "Expo.easeOut" },
    { duration: 0.25, opacity: 1, x: 0, ease: "Expo.easeOut" },
    "-=0.2"
  );
  tl.fromTo(
    ".l_li li",
    { duration: 0.2, opacity: 0, x: -50, ease: "Expo.easeOut", stagger: 0.1 },
    { duration: 0.2, opacity: 1, x: 0, ease: "Expo.easeOut", stagger: 0.1 }
  );
  tl.fromTo(
    ".r_li li",
    { duration: 0.2, opacity: 0, x: -50, ease: "Expo.easeOut", stagger: 0.1 },
    { duration: 0.2, opacity: 1, x: 0, ease: "Expo.easeOut", stagger: 0.1 }
  );

  tl.to(".mobile_nav_circle", { display: "block" });
}

function toggleNav_Skills() {
  if (document.getElementById("bar_icon").classList.contains("fa-bars")) {
    leftMove_Skills();
  } else {
    rightMove_Skils();
  }
}

function leftMove_Skills() {
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

function rightMove_Skils() {
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

// Skills :end --------------------------------------------------------------------------------//

// Contact :start --------------------------------------------------------------------------------//
function contentAnimation_Contact() {
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

  tl.fromTo(
    ".outer_sec h1, .outer_sec h2",
    { duration: 0.4, opacity: 0, x: -100, ease: "Back.easeOut", stagger: 0.1 },
    { duration: 0.4, opacity: 1, x: 0, stagger: 0.1, ease: "Back.easeOut" },
    "-=0.7"
  );

  tl.fromTo(
    ".sec span,.sec input,.sec textarea , .sec button",
    { duration: 0.3, opacity: 0, y: -100, ease: "Back.easeOut" },
    { duration: 0.3, opacity: 1, y: 0, stagger: 0.1, ease: "Back.easeOut" },
    "-=0.5"
  );

  tl.fromTo(
    "#social_media div ul li",
    { duration: 0.4, opacity: 0, x: -100, ease: "Back.easeOut", stagger: 0.1 },
    { duration: 0.4, opacity: 1, x: 0, stagger: 0.1, ease: "Back.easeOut" },
    "-=0.3"
  );

  tl.to(".mobile_nav_circle", { display: "block" });
}

function toggleNav_Contact() {
  if (document.getElementById("bar_icon").classList.contains("fa-bars")) {
    leftMove_Contact();
  } else {
    rightMove_Contact();
  }
}

function leftMove_Contact() {
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

function rightMove_Contact() {
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

// Contact :end --------------------------------------------------------------------------------//

// Work :start --------------------------------------------------------------------------------//
function contentAnimation_Work() {
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

  tl.to(".mobile_nav_circle", { display: "block" });
}

function toggleNav_Work() {
  if (document.getElementById("bar_icon").classList.contains("fa-bars")) {
    leftMove_Work();
  } else {
    rightMove_Work();
  }
}

function leftMove_Work() {
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

function rightMove_Work() {
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

//Work :end -----------------------------------------------------------------------------------//
