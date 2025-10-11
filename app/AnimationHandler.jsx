"use client";

import { useEffect } from "react";

export default function AnimationHandler() {
  useEffect(() => {
    const logoWrapper = document.querySelector(".main_logo_wrapper");
    const contentWrapper = document.querySelector(".main_content");
    const navigationType = performance.getEntriesByType("navigation")[0]?.type;
    let animationShown = sessionStorage.getItem("logoAnimationShown");

    if (navigationType === "reload") {
      sessionStorage.removeItem("logoAnimationShown");
      animationShown = null;
    }

    if (!animationShown) {
      sessionStorage.setItem("logoAnimationShown", "true");
      if (logoWrapper) {
        logoWrapper.classList.add("animate");
        logoWrapper.addEventListener("animationend", () => {
          logoWrapper.style.display = "none";
        });
      }
      if (contentWrapper) {
        contentWrapper.classList.add("animate");
      }
    } else {
      if (logoWrapper) logoWrapper.style.display = "none";
      if (contentWrapper) contentWrapper.classList.remove("animate");
    }
  }, []);

  return null;
}
