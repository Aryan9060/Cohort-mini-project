# ChaiTailwind

**ChaiTailwind** is a lightweight, utility-first CSS engine built entirely in JavaScript. It allows developers to style HTML elements using descriptive class names directly in the DOM, which are then parsed and applied as inline styles in real-time.

---

## 🚀 How It Works

ChaiTailwind bypasses traditional CSS files by using a JavaScript-driven approach to styling:

1.  **DOM Scanning**: The engine scans all elements within the document.
2.  **Class Parsing**: It identifies classes with the `chai` prefix and splits them into properties and values.
3.  **Style Injection**: It maps these classes to specific CSS properties and applies them as inline styles.
4.  **Reactive Updates**: Using a `MutationObserver`, the engine automatically detects changes to the DOM—such as new elements or modified attributes—and applies styles dynamically.


---

## 🛠 Features & Syntax

ChaiTailwind uses a concise naming convention to handle various layout and design needs.

### Typography & Colors
* **Text Color**: `chaiT-{color}-{shade}` (e.g., `chaiT-red-500`).
* **Font Size**: `chaiFS-{pixels}` (e.g., `chaiFS-16`).
* **Text Alignment**: `chaiFA-{align}` (e.g., `chaiFA-center`).
* **Background**: `chaiBg-{color}-{shade}`.

### Box Model (Spacing & Borders)
* **Padding**: `chaiP-{px}`, `chaiPx-{px}`, `chaiPy-{px}`.
* **Margin**: `chaiM-{px}`, `chaiMx-{px}`, `chaiMy-{px}`.
* **Borders**: `chaiB-{color}-{width}` or `chaiB-{width}`.
* **Border Radius**: `chaiBR-{px}`.

### Layout & Flexbox
* **Flexbox**: Initialize with `chaiFlex`.
* **Direction**: `chaiFlex-direction-{value}`.
* **Justification**: `chaiFlex-justify-{value}`.
* **Alignment**: `chaiFlex-align-{value}`.
* **Display**: Supports `block`, `hidden`, `inline`, and `inline-block`.

---

## 💻 Usage Example

You can apply styles directly in your HTML or via JavaScript:

### HTML Implementation
```html
<div class="chaiFlex chaiFlex-justify-center chaiP-20 chaiBg-blue-500">
  <h1 class="chaiT-white chaiFS-24">Hello ChaiTailwind!</h1>
</div>
```

### Dynamic JavaScript Implementation
```javascript
const box = document.createElement("div");
box.className = "chaiBg-green-500 chaiP-10 chaiBR-8";
box.innerText = "Dynamic Styled Box";
document.body.appendChild(box); 
// MutationObserver will automatically catch this and apply styles!
```

---

## ⚙️ Technical Details

### MutationObserver
The engine stays "always-on" by observing the `document.body`. It listens for:
* `childList`: When new elements are added.
* `attributes`: When class names are modified on existing elements.
* `subtree`: Monitoring the entire DOM tree.

### Dependencies
The core logic relies on external utility maps for complex properties:
* `./utils/color.js`: Color palette definitions.
* `./utils/flex.js`: Mappings for flex properties like `justify`, `align`, and `gap`.

