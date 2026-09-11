import { useEffect } from "react";

// Mount once at the app root. Fades/slides in any element with className "reveal" as it enters
// the viewport, and keeps watching for new .reveal elements added later (route changes, modals).
// Pure native IntersectionObserver/MutationObserver — no animation library needed.
export function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => io.observe(el));
    };

    observeAll();
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
