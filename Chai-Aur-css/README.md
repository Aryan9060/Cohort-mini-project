# Chai-Aur-css

**Chai-Aur-css** is a lightweight, utility-first CSS engine built entirely in JavaScript. It allows developers to style HTML elements using descriptive class names directly in the DOM, which are then parsed and applied as inline styles in real-time.

---

## 🚀 How It Works

Chai-Aur-css bypasses traditional CSS files by using a JavaScript-driven approach to styling:

1.  **DOM Scanning**: The engine scans all elements within the document.
2.  **Class Parsing**: It identifies classes with the `chai` prefix and splits them into properties and values.
3.  **Style Injection**: It maps these classes to specific CSS properties and applies them as inline styles.
4.  **Reactive Updates**: Using a `MutationObserver`, the engine automatically detects changes to the DOM—such as new elements or modified attributes—and applies styles dynamically.

---

## 💻 Usage Example

You can apply styles directly in your HTML or via JavaScript:

### HTML Implementation

```html
<div class="chaiFlex-justify-center chaiP-20 chaiBg-blue-500">
  <h1 class="chaiT-white chaiFs-24">Hello Chai-Aur-css!</h1>
</div>
```

### Dynamic JavaScript Implementation

```javascript
const box = document.createElement("div");
box.className = "chaiBg-green-500 chaiP-10 chaiBr-8";
box.innerText = "Dynamic Styled Box";
document.body.appendChild(box);
// MutationObserver will automatically catch this and apply styles!
```

---

## 🛠 Features & Syntax

### Colors

-   `chaiT-{color}`: Sets the text color.
-   `chaiT-{color}-{shade}`: Sets the text color with a specific shade.
-   `chaiBg-{color}`: Sets the background color.
-   `chaiBg-{color}-{shade}`: Sets the background color with a specific shade.

**Available Colors:** `red`, `lime`, `yellow`, `green`, `orange`, `magenta`, `purple`, `violet`, `fuchsia`, `blue`, `teal`, `cyan`, `gray`, `black`, `white`.

**Available Shades:** `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`.

### Spacing

-   `chaiP-{value}`: Sets padding.
-   `chaiPx-{value}`: Sets horizontal padding.
-   `chaiPy-{value}`: Sets vertical padding.
-   `chaiPl-{value}`: Sets left padding.
-   `chaiPr-{value}`: Sets right padding.
-   `chaiM-{value}`: Sets margin.
-   `chaiMx-{value}`: Sets horizontal margin.
-   `chaiMy-{value}`: Sets vertical margin.
-   `chaiMl-{value}`: Sets left margin.
-   `chaiMr-{value}`: Sets right margin.

### Sizing

-   `chaiW-{value}`: Sets width in pixels.
-   `chaiW-{value}{unit}`: Sets width with a specific unit (e.g., `vw`, `%`, `em`, `rem`).
-   `chaiH-{value}`: Sets height in pixels.
-   `chaiH-{value}{unit}`: Sets height with a specific unit (e.g., `vh`, `%`, `em`, `rem`).

### Typography

-   `chaiFs-{value}`: Sets font size in pixels.
-   `chaiFa-{value}`: Sets text alignment (`left`, `center`, `right`, `justify`).
-   `chaiFw-{value}`: Sets font weight (`normal`, `bold`, `100`, `200`, ... `900`).

### Borders

-   `chaiB`: Sets a 1px solid black border.
-   `chaiB-{width}`: Sets a border with the specified width in pixels and solid black color.
-   `chaiB-{color}-{width}`: Sets a border with the specified color and width.
-   `chaiBr-{value}`: Sets border radius in pixels.

### Flexbox

-   `chaiFlex`: Sets `display: flex`.
-   `chaiFlex-direction-{value}`: Sets `flex-direction`. Values: `row`, `col`.
-   `chaiFlex-justify-{value}`: Sets `justify-content`. Values: `start`, `end`, `center`, `between`, `around`, `evenly`.
-   `chaiFlex-align-{value}`: Sets `align-items`. Values: `start`, `end`, `center`, `baseline`, `stretch`.
-   `chaiFlex-gap-{value}`: Sets gap in rem.
-   `chaiFlex-wrap-{value}`: Sets `flex-wrap`. Values: `wrap`, `nowrap`, `reverse`.
-   `chaiFlex-flex-{value}`: Sets `flex`. Values: `1`, `auto`, `initial`, `none`.

### Display

-   `chaiD-block`: Sets `display: block`.
-   `chaiD-inline`: Sets `display: inline`.
-   `chaiD-inline-block`: Sets `display: inline-block`.
-   `chaiD-hidden`: Sets `display: none`.

### Shadow

-   `chaiS-{size}`: Applies a box shadow. Sizes: `s`, `m`, `l`, `xl`, `xxl`, `inner`.

### Cursor

-   `chaiC-{type}`: Sets the cursor type. Examples: `pointer`, `default`, `text`, `wait`, `move`.
