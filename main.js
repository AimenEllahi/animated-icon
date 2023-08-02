// Import GSAP
import gsap from "gsap";

// Get the necessary elements
const submitButton = document.querySelector(".submit");
const submitLoader = document.querySelector(".submit_loader");
const submitLoader2 = document.querySelector(".submit_loader_2");
const submitArrow = document.querySelector(".submit_arrow");
const backArrow = document.querySelector(".bg_arrow");
const submitText = document.querySelector("button");
const sentText = document.querySelector(".send");

// Create a GSAP timeline
const timeline = gsap.timeline({ paused: true });



// State 1: Static
timeline.to(submitText, { y: 0, duration: 1 })
        .to(submitArrow, { y: 0, duration: 1 }, "<")
        

// // State 2: Loading
timeline.to(submitText, { y: "100%", duration: 1, })
        .to(submitArrow, { x: 140, duration: 1,delay: 1 }, ">") 
        .to(submitLoader, { width: 190, duration: 0.3, delay: 1 }, ">")
        .to(submitLoader2, { width: 190, duration: 0.1, delay: 5 }, ">");
        // .to(backArrow, { x: 140, duration: 4, delay: 2 }, "<")
        
        // .to(backArrow, { x: 0, duration: 4, delay: 0.3, opacity: 0 }, "<")
      
// State 3: Sent
timeline.to(submitLoader, { x: 180, duration: 1 })
        .to(submitLoader2, { x: 180, duration: 1 }, "<")
        .to(submitArrow, { x: 180, duration: 1, opacity: 0 }, "<")
        .to(backArrow, { x: 180, duration: 1, opacity:0 }, "<")
        .to(sentText, { y: 0, duration: .7 })
        .to(submitArrow, { width:0 , x: 0, duration: 0.3 }, "<");


// State 4: Reset
timeline.to(sentText, { y: "100%", duration: 0.5 })
        .to(submitText, { y: 0, duration: 0.5, delay: .5 })
        .to(submitArrow, { x: 0, duration: 0.3,opacity: 1 }, "<")
        .to(submitLoader, { width: 0, duration: 0.3 }, "<")
        .to(submitLoader2, {width: 0, duration: 0.3 }, "<");


// Add a click event listener to the button
submitButton.addEventListener("click", function () {
  timeline.restart();
});


