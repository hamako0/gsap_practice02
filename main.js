const hero = document.querySelector(".hero");
const header_title = document.querySelector(".header_title");
const header_nav = document.querySelector(".header_nav");
const hero_img = document.querySelector(".hero_img");
const hero_text = document.querySelector(".hero_text");
const bg_color = document.querySelector(".bg_color");

const tl = gsap.timeline();
tl.fromTo(
  hero,
  1,
  {
    height: "0%",
  },
  {
    height: "60vh",
    ease: Power2.easeInOut,
  }
)
  .fromTo(
    hero,
    1.2,
    {
      width: "100%",
    },
    {
      width: "90%",
      ease: Power2.easeInOut,
    }
  )
  .fromTo(
    bg_color,
    1,
    {
      y: "-100%",
    },
    {
      y: 0,
      ease: Power2.easeInOut,
    },
    "-=1.2"
  )
  .fromTo(
    header_title,
    .5,
    {
      x: 30,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      ease: Power2.easeInOut,

    }
  )
  .fromTo(
    header_nav,
    .5,
    {
      x: -30,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      ease: Power2.easeInOut,
    },
  )
  .fromTo(
    hero_text,
    .5,
    {
      x: 0,
      opacity: 0,
    },
    {
      x: 30,
      opacity: 1,
      ease: Power2.easeInOut,
    },
  );
