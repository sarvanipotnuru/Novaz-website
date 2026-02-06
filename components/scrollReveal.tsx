"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const reveal = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    reveal(); // run immediately on route change
    window.addEventListener("scroll", reveal);

    return () => window.removeEventListener("scroll", reveal);
  }, [pathname]); // 🔥 THIS IS THE FIX

  return null;
}
