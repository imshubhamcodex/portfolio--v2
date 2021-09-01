if (screen.width < 500) {
  document.getElementById("streamer_img").src = "./img/streamer_mob.PNG";
  document.getElementById("roomlelo_img").src = "./img/roomlelo_mob.PNG";
  document.getElementById("edhusk_img").src = "./img/edhusk_mob.PNG";
  document.getElementById("tenbillion_img").src = "./img/tenbillion_mob.PNG";
  document.getElementById("blog_img").src = "./img/blog_mob.PNG";
  document.getElementById("provider_img").src = "./img/provider_mob.PNG";
  document.getElementById("weather_img").src = "./img/weather_mob.PNG";
  document.getElementById("h-care_img").src = "./img/h_care_mob.PNG";
}

function noGithub() {
  alert(
    "This repo contains sensitive data so it is under restricted access, please contact me via email: shubhamcontactmail@gmail.com"
  );
}

//animation for AOS initialization
AOS.init({
  offset: 150,
  duration: 600,
});

