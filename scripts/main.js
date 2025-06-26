document.addEventListener("DOMContentLoaded", () => {
  const typewriterSections = document.querySelectorAll(".typewriter");

  const typeLineByLine = (element, lines, delay = 30) => {
    let lineIndex = 0;
    element.innerHTML = "";

    const typeLine = () => {
      if (lineIndex >= lines.length) return;

      let charIndex = 0;
      const line = lines[lineIndex];
      const lineDiv = document.createElement("div");

      const typeChar = () => {
        if (charIndex <= line.length) {
          lineDiv.innerHTML = line.substring(0, charIndex);
          charIndex++;
          setTimeout(typeChar, delay);
        } else {
          element.appendChild(lineDiv);
          lineIndex++;
          setTimeout(typeLine, 100);
        }
      };
      typeChar();
    };

    typeLine();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const lines = JSON.parse(el.getAttribute("data-lines"));
        if (!el.getAttribute("data-typed")) {
          typeLineByLine(el, lines);
          el.setAttribute("data-typed", "true");
        }
      }
    });
  }, { threshold: 0.5 });

  typewriterSections.forEach(section => observer.observe(section));
});
