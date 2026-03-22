// generateCSSUtility();

let allElement = document.querySelectorAll("*");

import color from "./utils/color.js";
import { cursor } from "./utils/cursor.js";
import { direction, justify, align, flex, gap } from "./utils/flex.js";
import { shadow } from "./utils/shadow.js";

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
          if (classProperty.length < 2) return; //if only chaiT

          if (
            color.hasOwnProperty(classProperty[1]) &&
            classProperty.length > 2
          ) {
            if (color[classProperty[1]].hasOwnProperty(classProperty[2])) {
              el.style.color = color[classProperty[1]][classProperty[2]]; //chaiT-orange-500
            }
          } else {
            el.style.color = classProperty[1]; //chaiT-orange
          }
          break;
        }
        //font size
        case "chaiFS": {
          if (classProperty.length < 2) return; //if only chaiFS

          el.style.fontSize = `${classProperty[1]}px`; //chaiFS-8
          break;
        }
        //font alignment
        case "chaiFA": {
          if (classProperty.length < 2) return; //if only chaiFA

          el.style.textAlign = classProperty[1]; //chaiFA-center
          break;
        }
        //font weight
        case "chaiFW": {
          if (classProperty.length < 2) return; //if only chaiFW

          el.style.fontWeight = classProperty[1]; //chaiFW-bold
          break;
        }
        //background color
        case "chaiBg": {
          if (classProperty.length < 2) return; //if only chaiBg

          if (
            color.hasOwnProperty(classProperty[1]) &&
            classProperty.length > 2
          ) {
            if (color[classProperty[1]].hasOwnProperty(classProperty[2])) {
              el.style.backgroundColor =
                color[classProperty[1]][classProperty[2]]; //chaiBg-orange-500
            }
          } else {
            el.style.backgroundColor = classProperty[1]; //chaiBg-orange
          }
        }
        //padding
        case "chaiP": {
          if (classProperty.length < 2) return; //if only chaiP

          el.style.padding = `${classProperty[1]}px`; //chaiP-8
          break;
        }
        //padding x
        case "chaiPX": {
          if (classProperty.length < 2) return; //if only chaiPx

          el.style.paddingLeft = `${classProperty[1]}px`; //chaiPX-8
          el.style.paddingRight = `${classProperty[1]}px`;
          break;
        }

        //padding y
        case "chaiPY": {
          if (classProperty.length < 2) return; //if only chaiPy

          el.style.paddingTop = `${classProperty[1]}px`; //chaiPY-8
          el.style.paddingBottom = `${classProperty[1]}px`;
          break;
        }
        //padding left
        case "chaiPL": {
          if (classProperty.length < 2) return; //if only chaiPL
          el.style.paddingLeft = `${classProperty[1]}px`; //chaiPL-8
          break;
        }
        //padding right
        case "chaiPR": {
          if (classProperty.length < 2) return; //if only chaiPR
          el.style.paddingRight = `${classProperty[1]}px`; //chaiPR-8
          break;
        }
        //margin
        case "chaiM": {
          if (classProperty.length < 2) return; //if only chaiM

          el.style.margin = `${classProperty[1]}px`; //chaiM-8
          break;
        }
        //margin x
        case "chaiMX": {
          if (classProperty.length < 2) return; //if only chaiMx

          el.style.marginLeft = `${classProperty[1]}px`; //chaiMX-8
          el.style.marginRight = `${classProperty[1]}px`;
          break;
        }
        //margin y
        case "chaiMY": {
          if (classProperty.length < 2) return; //if only chaiMy

          el.style.marginTop = `${classProperty[1]}px`; //chaiMY-8
          el.style.marginBottom = `${classProperty[1]}px`;
          break;
        }
        //margin Left

        //border
        case "chaiB": {
          if (classProperty.length < 2) {
            if (classProperty[2]) {
              if (color.hasOwnProperty(classProperty[1])) {
                el.style.border = `${classProperty[2]}px solid ${classProperty[1]}`; //chaiB-orange-2
              }
            } else if (classProperty[1]) {
              el.style.border = `${classProperty[1]}px solid black`; //chaiB-2
            }
          } else {
            el.style.border = "1px solid black"; //chaiB
          }
          break;
        }
        //border radius
        case "chaiBR": {
          if (classProperty.length < 2) return; //if only chaiBR

          el.style.borderRadius = `${classProperty[1]}px`; //chaiBR-8
          break;
        }
        //Flex
        case "chaiFlex": {
          el.style.display = "flex"; //chaiFlex
          if (classProperty.length < 3) return; //if only chaiFlex

          switch (classProperty[1]) {
            //direction
            case "direction": {
              el.style.flexDirection = direction[classProperty[2]]; //chaiFlex-direction-row
              break;
            }
            //justify
            case "justify": {
              el.style.justifyContent = justify[classProperty[2]]; //chaiFlex-justify-center
              break;
            }
            //align
            case "align": {
              el.style.alignItems = align[classProperty[2]]; //chaiFlex-align-center
              break;
            }
            //flex
            case "flex": {
              el.style.flex = flex[classProperty[2]]; //chaiFlex-flex-4
              break;
            }
            //gap
            case "gap": {
              el.style.gap = gap[classProperty[2]]; //chaiFlex-gap-4
              break;
            }
            default:
              break;
          }
          break;
        }
        //display block
        case "chaiD": {
          if (classProperty.length < 2) return; //if only chaiD

          switch (classProperty[1]) {
            //display block
            case "block": {
              el.style.display = "block"; //chaiD-block
              break;
            }
            //display hidden
            case "hidden": {
              el.style.display = "none"; //chaiD-hidden
              break;
            }
            //display inline
            case "inline": {
              el.style.display = "inline"; //chaiD-inline
              break;
            }
            //display inline block
            case "inlineBlock": {
              el.style.display = "inline-block"; //chaiD-inlineBlock
              break;
            }
            default:
              break;
          }
        }
        //width
        case "chaiW": {
          if (classProperty.lengrh < 2) return; //if only chaiW

          if (classProperty.lengrh > 2) {
            //                   values(4,6,7...)   parameter (vw,%,em,ram)
            el.style.width = `${classProperty[1]} ${classProperty[2]}`; //cahiW-100-vw
          } else {
            el.style.width = `${classProperty[1]}px`; //cahiW-250
          }
          break;
        }
        //height
        case "chaiH": {
          if (classProperty.lengrh < 2) return; //if only chaiH

          if (classProperty.lengrh > 2) {
            //                   values(4,6,7...)   parameter (vh,%,em,ram)
            el.style.height = `${classProperty[1]} ${classProperty[2]}`; //cahiH-100-vh
          } else {
            el.style.height = `${classProperty[1]}px`; //cahiH-250
          }
          break;
        }
        //box shadow
        case "chaiS": {
          if (
            classProperty.length > 1 &&
            shadow.hasOwnProperty(classProperty[1])
          ) {
            el.style.boxShadow = `${classProperty[1]}px`; //chaiS-xl
          } else {
            el.style.boxShadow = `5px 5px 10px rgb(0,0,0,1)`; //chaiS
          }
          break;
        }
        //cursor
        case "chaiC": {
          if (classProperty.length < 2) return; //if only chaiC

          if (cursor.hasOwnProperty(classProperty[1])) {
            el.style.cursor = cursor[classProperty[1]]; //chaiC-pointer
          }
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
