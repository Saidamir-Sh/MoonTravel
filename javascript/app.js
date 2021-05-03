

/* -/-/-/-/ VARIABLES -/-/-/-/-/-/ */
const bg = document.querySelector(".sky");
const moon = document.querySelector(".moon");
const mountain = document.querySelector(".mountain");
const road = document.querySelector(".road");
const bannerTitle = document.querySelector(".banner__title");


/* /-/-/-/ PARALLAX EFFECT -/-/-/-/-/-/-/  */
window.addEventListener("scroll", ()=> {
  var value = window.scrollY;
  console.log(value)
  /* adding scroll effect to elements */
  bg.style.top = value * 0.5 + 'px';
  moon.style.right = value * 0.5 + 'px';
  mountain.style.bottom = value * 0.5 + 'px';
  /*road.style.bottom = value * 0.2 + 'px';*/
  bannerTitle.style.top = value * 1.3 + 'px';
})