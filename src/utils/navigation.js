/**
 * Central navigation helper to handle both page route transitions
 * and smooth hash scrolling from any page in the application.
 * 
 * @param {Event|null} e - Click event (optional)
 * @param {string} pathOrHash - Path (e.g. "/my-story", "/speaking", "/1to1", "/") or Hash (e.g. "#programs", "#what-i-do", "#results", "#faq")
 */
export const navigateTo = (e, pathOrHash) => {
  if (e && typeof e.preventDefault === "function") {
    e.preventDefault();
  }

  if (!pathOrHash) return;

  const isHash = pathOrHash.startsWith("#");

  if (!isHash) {
    // Dedicated page route navigation
    if (window.location.pathname !== pathOrHash) {
      window.history.pushState({}, "", pathOrHash);
      window.dispatchEvent(new Event("popstate"));
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // Hash section navigation on Homepage
    const targetHash = pathOrHash;
    const currentPath = window.location.pathname;

    const scrollToElement = () => {
      const element = document.querySelector(targetHash);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        return true;
      }
      return false;
    };

    if (currentPath !== "/") {
      window.history.pushState({}, "", "/" + targetHash);
      window.dispatchEvent(new Event("popstate"));

      // Poll until the element is mounted in DOM on the homepage
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        const found = scrollToElement();
        if (found || attempts >= 20) {
          clearInterval(interval);
        }
      }, 100);
    } else {
      window.history.pushState({}, "", "/" + targetHash);
      scrollToElement();
    }
  }
};
