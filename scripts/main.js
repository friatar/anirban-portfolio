document.addEventListener("DOMContentLoaded", () => {
  const typewriterSections = document.querySelectorAll(".typewriter");

  const typeLineByLine = (element, delay = 30) => {
    const lines = Array.from(element.querySelectorAll("div"));
    element.innerHTML = ""; // Clear old content

    let lineIndex = 0;

    const typeLine = () => {
      if (lineIndex >= lines.length) return;

      const fullLine = lines[lineIndex].innerHTML;
      const newLine = document.createElement("div");
      let charIndex = 0;

      const typeChar = () => {
        newLine.innerHTML = fullLine.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex < fullLine.length) {
          setTimeout(typeChar, delay);
        } else {
          element.appendChild(newLine);
          lineIndex++;
          setTimeout(typeLine, 150);
        }
      };

      typeChar();
    };

    typeLine();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.getAttribute("data-typed")) {
        typeLineByLine(entry.target);
        entry.target.setAttribute("data-typed", "true");
      }
    });
  }, { threshold: 0.5 });

  typewriterSections.forEach(section => observer.observe(section));
});
