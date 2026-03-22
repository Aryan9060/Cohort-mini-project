# ☕ Chai Aur CSS

**Chai Aur CSS** is a lightweight, utility-first CSS engine built entirely in Vanilla JavaScript. It allows developers to style HTML elements using descriptive class names directly in the DOM, which are then parsed and applied as inline styles dynamically—without needing external CSS files or preprocessors.

## 🚀 How It Works

Chai Aur CSS bypasses traditional CSS files by using a JavaScript-driven approach to styling:
1. **DOM Scanning**: The engine scans all elements within the document on initial load.
2. **Class Parsing**: It identifies classes starting with the `chai` prefix and splits them into properties, values, and units.
3. **Style Injection**: It maps these classes to specific CSS properties via helper functions and injects them as inline styles.
4. **Reactive Updates**: Powered by a `MutationObserver`, the engine automatically detects changes to the DOM—like newly appended elements or dynamically modified class attributes—and applies styles on the fly.

## 📦 Getting Started

To use **Chai Aur CSS** in your project, simply import the `main.js` engine into your HTML file format as a module:

```html
<!-- Import as a module -->
<script type="module" src="./main.js"></script>
```

## 💻 Usage Examples

You can apply styles directly in your HTML or dynamically via JavaScript:

### HTML Implementation
```html
<div class="chaiFlex chaiFlex-justify-center chaiP-20 chaiBg-orange-500">
  <h1 class="chaiT-white chaiFs-24">Hello Chai Aur CSS!</h1>
</div>
```

### Dynamic JavaScript Implementation
```javascript
const box = document.createElement("div");
box.className = "chaiBg-blue-600 chaiP-15 chaiBr-8 chaiT-white";
box.innerText = "Dynamically Styled Element";
document.body.appendChild(box);
// The MutationObserver automatically catches this and applies the new styles!
```

## 🛠 Supported Features & Syntax Reference

### 🎨 Colors & Backgrounds
We provide a rich palette inspired by modern frameworks, supporting colors like `red`, `lime`, `yellow`, `green`, `orange`, `magenta`, `purple`, `violet`, `fuchsia`, `blue`, `teal`, `cyan`, `gray`, `black`, and `white`. The scale for colors ranges from `50` to `950`.

- **Text Color:** 
  - `chaiT-{color}-{shade}` (e.g., `chaiT-gray-800`, `chaiT-orange-500`)
  - Absolute colors: `chaiT-{color}` (e.g., `chaiT-black`, `chaiT-white`)
- **Background Color:** 
  - `chaiBg-{color}-{shade}` (e.g., `chaiBg-blue-600`)
  - Absolute colors: `chaiBg-{color}` (e.g., `chaiBg-white`)

### 📐 Spacing (Padding & Margin)
Space your elements natively with pixel values or any custom CSS units like `rem`, `vw`, `%`, etc.

- **Padding Syntax:** 
  - Base: `chaiP` (All), `chaiPx` (Left & Right), `chaiPy` (Top & Bottom), `chaiPt` (Top), `chaiPb` (Bottom), `chaiPl` (Left), `chaiPr` (Right)
  - Pixel Default: `[prefix]-{value}` (e.g., `chaiP-20` applied as 20px, `chaiPx-15` applied as 15px L/R)
  - Custom Units: `[prefix]-{value}-{unit}` (e.g., `chaiP-2-rem` applied as 2rem, `chaiPt-5-vh` applied as 5vh)
- **Margin Syntax:** 
  - Base: `chaiM` (All), `chaiMx` (Left & Right), `chaiMy` (Top & Bottom), `chaiMt` (Top), `chaiMb` (Bottom), `chaiMl` (Left), `chaiMr` (Right)
  - Pixel Default: `[prefix]-{value}` (e.g., `chaiM-15` applied as 15px, `chaiMx-auto` applied as auto)
  - Custom Units: `[prefix]-{value}-{unit}` (e.g., `chaiMb-3-rem` applied as 3rem)

### 🖋 Typography
- **Font Size:** `chaiFs-{px}` (e.g., `chaiFs-24`, `chaiFs-16` -> sizes in px)
- **Font Weight:** `chaiFw-{weight}` (e.g., `chaiFw-bold`, `chaiFw-600`)
- **Text Align:** `chaiTa-{align}` (e.g., `chaiTa-center`, `chaiTa-right`, `chaiTa-justify`)

### 📏 Layout & Sizing
- **Dimensions:** 
  - Width: `chaiW-{px}`, or `chaiW-{value}-{unit}` (e.g., `chaiW-300`, `chaiW-100-%`, `chaiW-50-vw`)
  - Height: `chaiH-{px}`, or `chaiH-{value}-{unit}` (e.g., `chaiH-50`, `chaiH-100-vh`)
- **Display Status:** `chaiD-{mode}` (Modes supported: `block`, `inline`, `inline-block`, `hidden` via none)

### 🗂 Flexbox
- **Flex Container:** `chaiFlex` (Creates a flexbox)
- **Direction:** `chaiFlex-direction-{row|col}`
- **Justify Content:** `chaiFlex-justify-{start|center|end|between|around|evenly}`
- **Align Items:** `chaiFlex-align-{start|center|end|stretch}`
- **Flex Wrap:** `chaiFlex-wrap-{wrap|nowrap}`
- **Flex Item Prop:** `chaiFlex-flex-{1|auto|initial|none}`
- **Gap:** `chaiFlex-gap-{value}` (e.g., `chaiFlex-gap-20`)

### 🔲 Borders & Effects
- **Borders:** 
  - Default (1px solid black): `chaiB`
  - Custom Width: `chaiB-{width}` (e.g., `chaiB-2`)
  - Configurable Color (non-shaded variant): `chaiB-{color}-{width}` (e.g., `chaiB-black-2`)
- **Border Radius:** `chaiBr-{px}` (e.g., `chaiBr-10`, `chaiBr-50`)
- **Shadows:** `chaiS-{size}` (Sizes supported: `s`, `m`, `l`, `xl`, `xxl`, `inner` - default `chaiS` applies standard drop shadow).
- **Cursors:** `chaiC-{type}` (Values passed to CSS `cursor`: `pointer`, `default`, `text`, `wait`, `move`, etc.).

## 💡 Why Chai Aur CSS?
Built as an educational mini-project by removing traditional CSS limits! **Chai Aur CSS** showcases the incredible power of JavaScript’s direct DOM control and the robustness of modern web APIs like `MutationObserver`, generating pure and reactive inline properties directly.
