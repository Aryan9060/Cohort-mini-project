// generateCSSUtility();

let allElement = document.querySelectorAll("*");

import color from "./utils/color.js";
import { direction, justify, align, flex, gap } from "./utils/flex.js";

const chaiStyle = [
  "chaiT",
  "chaiBg",
  "chaiP",
  "chaiPx",
  "chaiPy",
  "chaiMx",
  "chaiMy",
  "chaiM",
  "chaiB",
  "chaiBR",
  "chaiFlex",
  "block",
  "hidden",
  "inline",
  "inline-block",
  "chaiFS",
  "chaiFA",
];

function generateCSSUtility() {
  allElement.forEach((el) => {
    el.classList.forEach((className) => {
      let classProperty = className.split("-");
      if (!chaiStyle.includes(classProperty[0])) return;

      switch (classProperty[0]) {
        //text color
        case "chaiT": {
          if (
            color.hasOwnProperty(classProperty[1]) && classProperty.length > 2
          ) {
            if (color[classProperty[1]].hasOwnProperty(classProperty[2])) {
              el.style.color = color[classProperty[1]][classProperty[2]];
            } else {
              el.style.color = color[classProperty[1]];
            }
          } else {
            el.style.color = classProperty[1];
          }
          break;
        }
        //font size
        case "chaiFS": {
          el.style.fontSize = `${classProperty[1]}px`;
          break;
        }
        //font alignment
        case "chaiFA": {
          el.style.textAlign = classProperty[1];
          break;
        }
        //background color
        case "chaiBg": {
          if (
            color.hasOwnProperty(classProperty[1]) &&
            classProperty.length > 2
          ) {
            if (color[classProperty[1]].hasOwnProperty(classProperty[2])) {
              el.style.backgroundColor =
                color[classProperty[1]][classProperty[2]];
            } else {
              el.style.backgroundColor = color[classProperty[1]];
            }
          } else {
            el.style.backgroundColor = classProperty[1];
          }
        }
        //padding
        case "chaiP": {
          el.style.padding = `${classProperty[1]}px`;
          break;
        }
        //padding x
        case "chaiPx": {
          el.style.paddingLeft = `${classProperty[1]}px`;
          el.style.paddingRight = `${classProperty[1]}px`;
          break;
        }
        //padding y
        case "chaiPy": {
          el.style.paddingTop = `${classProperty[1]}px`;
          el.style.paddingBottom = `${classProperty[1]}px`;
          break;
        }
        //margin
        case "chaiM": {
          el.style.margin = `${classProperty[1]}px`;
          break;
        }
        //margin x
        case "chaiMx": {
          el.style.marginLeft = `${classProperty[1]}px`;
          el.style.marginRight = `${classProperty[1]}px`;
          break;
        }
        //margin y
        case "chaiMy": {
          el.style.marginTop = `${classProperty[1]}px`;
          el.style.marginBottom = `${classProperty[1]}px`;
          break;
        }
        //border
        case "chaiB": {
          if (classProperty[2]) {
            if (color.hasOwnProperty(classProperty[1])) {
              el.style.border = `${classProperty[2]}px solid ${classProperty[1]}`;
            }
          } else if (classProperty[1]) {
            el.style.border = `${classProperty[1]}px solid black`;
          }
          break;
        }
        //border radius
        case "chaiBR": {
          el.style.borderRadius = `${classProperty[1]}px`;
          break;
        }
        //Flex
        case "chaiFlex": {
          el.style.display = "flex";
          switch (classProperty[1]) {
            case "direction": {
              el.style.flexDirection = direction[classProperty[2]];
              break;
            }
            case "justify": {
              el.style.justifyContent = justify[classProperty[2]];
              break;
            }
            case "align": {
              el.style.alignItems = align[classProperty[2]];
              break;
            }
            case "flex": {
              el.style.flex = flex[classProperty[2]];
              break;
            }
            case "gap": {
              el.style.gap = gap[classProperty[2]];
              break;
            }
            default:
              break;
          }
          break;
        }
        //display block
        case "block": {
          el.style.display = "block";
          break;
        }
        //display hidden
        case "hidden": {
          el.style.display = "none";
          break;
        }
        //display inline
        case "inline": {
          el.style.display = "inline";
          break;
        }
        //display inline block
        case "inline-block": {
          el.style.display = "inline-block";
          break;
        }
        default:
          break;
      }
    });
  });
}
generateCSSUtility();

const obeserver = new MutationObserver((mutations) => {
  generateCSSUtility();
});

obeserver.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
});
