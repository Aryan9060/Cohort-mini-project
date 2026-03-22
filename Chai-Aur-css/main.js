import color from "./utils/color.js";
import { cursor } from "./utils/cursor.js";
import {
  direction,
  justify,
  align,
  flex,
  gap,
  wrap,
} from "./utils/flex.js";
import { shadow } from "./utils/shadow.js";

const styleHandlers = {
  //chaiT:text color
  chaiT: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    if (color.hasOwnProperty(classSubArray[1]) && classSubArray.length > 2) {
      if (color[classSubArray[1]].hasOwnProperty(classSubArray[2])) {
        el.style.color = color[classSubArray[1]][classSubArray[2]];
      }
    } else {
      el.style.color = classSubArray[1];
    }
  },
  //chaiBg:background color
  chaiBg: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    if (color.hasOwnProperty(classSubArray[1]) && classSubArray.length > 2) {
      if (color[classSubArray[1]].hasOwnProperty(classSubArray[2])) {
        el.style.backgroundColor = color[classSubArray[1]][classSubArray[2]];
      }
    } else {
      el.style.backgroundColor = classSubArray[1];
    }
  },
  //chaiP:padding
  chaiP: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.padding = `${classSubArray[1]}px`;
  },
  //chaiPx:padding left and right
  chaiPx: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.paddingLeft = `${classSubArray[1]}px`;
    el.style.paddingRight = `${classSubArray[1]}px`;
  },
  //chaiPy:padding top and bottom
  chaiPy: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.paddingTop = `${classSubArray[1]}px`;
    el.style.paddingBottom = `${classSubArray[1]}px`;
  },
  //chaiPl:padding left
  chaiPl: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.paddingLeft = `${classSubArray[1]}px`;
  },
  //chaiPr:padding right
  chaiPr: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.paddingRight = `${classSubArray[1]}px`;
  },
  //chaiPt:padding top
  chaiPt: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.paddingTop = `${classSubArray[1]}px`;
  },
  //chaiPb:padding bottom
  chaiPb: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.paddingBottom = `${classSubArray[1]}px`;
  },
  //chaiM:margin
  chaiM: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.margin = `${classSubArray[1]}px`;
  },
  //chaiMx:margin left and right
  chaiMx: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.marginLeft = `${classSubArray[1]}px`;
    el.style.marginRight = `${classSubArray[1]}px`;
  },
  //chaiMy:margin top and bottom
  chaiMy: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.marginTop = `${classSubArray[1]}px`;
    el.style.marginBottom = `${classSubArray[1]}px`;
  },
  //chaiMl:margin left
  chaiMl: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.marginLeft = `${classSubArray[1]}px`;
  },
  //chaiMr:margin right
  chaiMr: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.marginRight = `${classSubArray[1]}px`;
  },
  //chaiMt:margin top
  chaiMt: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.marginTop = `${classSubArray[1]}px`;
  },
  //chaiMb:margin bottom
  chaiMb: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.marginBottom = `${classSubArray[1]}px`;
  },
  //chaiB:border
  chaiB: (el, classSubArray) => {
    if (classSubArray.length > 2) {
      if (color.hasOwnProperty(classSubArray[1])) {
        el.style.border = `${classSubArray[2]}px solid ${
          color[classSubArray[1]][500]
        }`;
      }
    } else if (classSubArray.length > 1) {
      el.style.border = `${classSubArray[1]}px solid black`;
    } else {
      el.style.border = "1px solid black";
    }
  },
  //chaiBr:border radius
  chaiBr: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.borderRadius = `${classSubArray[1]}px`;
  },
  //chaiFlex:flex
  chaiFlex: (el, classSubArray) => {
    el.style.display = "flex";
    if (classSubArray.length < 3) return;
    const flexProps = {
      direction: "flexDirection",
      justify: "justifyContent",
      align: "alignItems",
      flex: "flex",
      gap: "gap",
      wrap: "flexWrap",
    };
    const propMap = {
      direction, //col,row
      justify, //center,start,end,between,around
      align, //center,start,end,between,around
      flex, //1,2,3
      gap, //1,2,3
      wrap, //wrap,nowrap
    };
    const cssProp = flexProps[classSubArray[1]];
    if (cssProp && propMap[classSubArray[1]][classSubArray[2]]) {
      el.style[cssProp] = propMap[classSubArray[1]][classSubArray[2]];
    }
  },
  //chaiD:display
  chaiD: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    const displayMap = {
      block: "block",
      hidden: "none",
      inline: "inline",
      "inline-block": "inline-block",
    };
    if (displayMap[classSubArray[1]]) {
      el.style.display = displayMap[classSubArray[1]];
    }
  },
  //chaiW:width
  chaiW: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    if (classSubArray.length > 2) {
      el.style.width = `${classSubArray[1]}${classSubArray[2]}`;
    } else {
      el.style.width = `${classSubArray[1]}px`;
    }
  },
  //chaiH:height
  chaiH: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    if (classSubArray.length > 2) {
      el.style.height = `${classSubArray[1]}${classSubArray[2]}`;
    } else {
      el.style.height = `${classSubArray[1]}px`;
    }
  },
  //chaiS:shadow
  chaiS: (el, classSubArray) => {
    if (classSubArray.length > 1 && shadow.hasOwnProperty(classSubArray[1])) {
      el.style.boxShadow = shadow[classSubArray[1]];
    } else {
      el.style.boxShadow = "5px 5px 10px rgb(0,0,0,0.1)";
    }
  },
  //chaiC:cursor
  chaiC: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    if (cursor.hasOwnProperty(classSubArray[1])) {
      el.style.cursor = cursor[classSubArray[1]];
    }
  },
  //chaiFs:font size
  chaiFs: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.fontSize = `${classSubArray[1]}px`;
  },
  //chaiFa:text align
  chaiFa: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.textAlign = classSubArray[1];
  },
  //chaiFw:font weight
  chaiFw: (el, classSubArray) => {
    if (classSubArray.length < 2) return;
    el.style.fontWeight = classSubArray[1];
  },
};
function generateCSSUtility() {
  const allElements = document.querySelectorAll("*");
  allElements.forEach((el) => {
    el.classList.forEach((className) => {
      const classSubArray = className.split("-");
      const handler = styleHandlers[classSubArray[0]];
      if (handler) {
        handler(el, classSubArray);
      }
    });
  });
}

generateCSSUtility();

const observer = new MutationObserver(() => {
  generateCSSUtility();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
});
