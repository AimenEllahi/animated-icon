// Import GSAP
import gsap from "gsap";

// Get the necessary elements
const submitButton = document.querySelector(".submit");
const submitLoader = document.querySelector(".submit_loader");
const submitLoader2 = document.querySelector(".submit_loader_2");
const submitArrow = document.querySelector(".submit_arrow");
const submitText = document.querySelector("button");
const sentText = document.querySelector(".send");

// Create a GSAP timeline
const timeline = gsap.timeline({ stop: true });

const startAnimation = () => {
  submitLoader.style.opacity = 1;
  submitLoader2.style.opacity = 1;
  // State 1: Static
  timeline
    .to(submitText, { y: "100%", duration: 0.5 })
    .to(submitArrow, {
      x: 140,
      duration: 0.5,

      ease: "power2.out",
    })
    .to(submitLoader, { width: 140, duration: 0.1 })
    .to(submitLoader, {
      transformOrigin: "right",
      scaleX: 0,
      delay: 1,
      duration: 0.1,
      onComplete: () => {
        submitLoader.style.opacity = 0;
        gsap.to(submitLoader, { scaleX: 1, width: 0 });
      },
    })
    .to(submitLoader2, { width: 140, duration: 0.1 })
    .to(submitLoader2, {
      transformOrigin: "right",
      scaleX: 0,
      delay: 1,
      duration: 0.1,
      onComplete: () => {
        submitLoader2.style.opacity = 0;
        gsap.to(submitLoader2, { scaleX: 1, width: 0 });
      },
    })
    .to(submitArrow, {
      opacity: 0,
      duration: 0.01,
      x: 200,
    })
    //use from to to slide text from top only
    .fromTo(
      sentText,
      { y: "-100%" },
      {
        y: 0,
        duration: 0.7,
      }
    )
    .to(submitArrow, {
      x: 0,
    })
  
    .to(submitArrow, {
      opacity: 1,
      onStart: () => {
        gsap.to(sentText, { y: "100%", duration: 0.7 });
        gsap.fromTo(
          submitText,
          { y: "-100%" },
          {
            y: 0,
            duration: 1.2,
            delay: 0.5,
          }
        )
      },
    });
};

// Add a click event listener to the button
submitButton.addEventListener("click", function () {
  startAnimation();
});
