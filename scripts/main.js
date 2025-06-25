const text = "Hello, I'm Anirban Tarafdar";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed-name").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
window.onload = typeWriter;
