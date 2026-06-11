import gsap from "gsap";
import { lenis } from "../Navbar";

export function initialFX() {
  try {
    // Enable scroll
    document.body.style.overflowY = "auto";
    if (lenis) {
      lenis.start();
    }

    // Fade in main content
    const main = document.querySelector("main");
    if (main) {
      main.classList.add("main-active");
    }

    // Change background
    gsap.to("body", {
      backgroundColor: "#0b080c",
      duration: 0.5,
      delay: 1,
    });

    // Fade in header and nav
    gsap.fromTo(
      [".header", ".icons-section", ".nav-fade"],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power1.inOut",
        delay: 0.1,
      }
    );
  } catch (err) {
    console.warn("InitialFX error (non-blocking):", err);
    // Still proceed even if animations fail
    document.body.style.overflowY = "auto";
    if (lenis) lenis.start();
  }
}
