const formatSelect = document.getElementById("format");
const toneSelect = document.getElementById("tone");
const button = document.getElementById("generateBtn");
const palette = document.getElementById("palette");

function randomRGB(tone) {
  let min = 0;
  let max = 255;

  if (tone == "light") {
    min = 150;
    max = 255;
  }

  if (tone == "dark") {
    min = 0;
    max = 150;
  }

  const r = Math.floor(Math.random() * (max - min + 1) + min);
  const g = Math.floor(Math.random() * (max - min + 1) + min);
  const b = Math.floor(Math.random() * (max - min + 1) + min);

  return { r, g, b };
}

function convertRGBToHex(r, g, b) {
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

function generatePalette() {
  const format = formatSelect.value;
  const tone = toneSelect.value;

  let color;

  function generateShades(hue, saturation, count) {
    const shades = [];
    const step = 100 / (count + 1); // Calculate even spacing for lightness

    for (let i = 1; i <= count; i++) {
      const lightness = Math.round(i * step);
      shades.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    }
    return shades;
  }
  console.log(generateShades(200,100,5));
  

  palette.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const { r, g, b } = randomRGB(tone);
    if (format === "hex") {
      color = convertRGBToHex(r, g, b);
    } else {
      color = `rgb(${r}, ${g}, ${b})`;
    }
    const div = document.createElement("div");
    div.classList.add("color");
    div.style.backgroundColor = color;
    div.textContent = color;
    palette.appendChild(div);
  }
}

button.addEventListener("click", generatePalette);

generatePalette();
