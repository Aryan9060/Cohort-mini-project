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
    if (classSubArray.length < 2) return;//if the class is just chaiT
    if (color.hasOwnProperty(classSubArray[1]) && classSubArray.length > 2) {
      if (color[classSubArray[1]].hasOwnProperty(classSubArray[2])) {
        el.style.color = color[classSubArray[1]][classSubArray[2]];//chaiT-gray-500
      }
    } else {
      el.style.color = classSubArray[1];//chaiT-red
    }
  },
  //chaiBg:background color
  chaiBg: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiBg
    if (color.hasOwnProperty(classSubArray[1]) && classSubArray.length > 2) {//chaiBg-gray-500
      if (color[classSubArray[1]].hasOwnProperty(classSubArray[2])) {
        el.style.backgroundColor = color[classSubArray[1]][classSubArray[2]];
      }
    } else {
      el.style.backgroundColor = classSubArray[1];//chaiBg-red
    }
  },
  //chaiP:padding
  chaiP: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiP
    el.style.padding = `${classSubArray[1]}px`;//chaiP-10
  },
  //chaiPx:padding left and right
  chaiPx: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiPx
    el.style.paddingLeft = `${classSubArray[1]}px`;//chaiPx-10
    el.style.paddingRight = `${classSubArray[1]}px`;//chaiPx-10
  },
  //chaiPy:padding top and bottom
  chaiPy: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiPy
    el.style.paddingTop = `${classSubArray[1]}px`;//chaiPy-10
    el.style.paddingBottom = `${classSubArray[1]}px`;//chaiPy-10
  },
  //chaiPl:padding left
  chaiPl: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiPl
    el.style.paddingLeft = `${classSubArray[1]}px`;//chaiPl-10
  },
  //chaiPr:padding right
  chaiPr: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiPr
    el.style.paddingRight = `${classSubArray[1]}px`;//chaiPr-10
  },
  //chaiPt:padding top
  chaiPt: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiPt
    el.style.paddingTop = `${classSubArray[1]}px`;//chaiPt-10
  },
  //chaiPb:padding bottom
  chaiPb: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiPb
    el.style.paddingBottom = `${classSubArray[1]}px`;//chaiPb-10
  },
  //chaiM:margin
  chaiM: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiM
    el.style.margin = `${classSubArray[1]}px`;//chaiM-10
  },
  //chaiMx:margin left and right
  chaiMx: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiMx
    el.style.marginLeft = `${classSubArray[1]}px`;//chaiMx-10
    el.style.marginRight = `${classSubArray[1]}px`;//chaiMx-10
  },
  //chaiMy:margin top and bottom
  chaiMy: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiMy
    el.style.marginTop = `${classSubArray[1]}px`;//chaiMy-10
    el.style.marginBottom = `${classSubArray[1]}px`;//chaiMy-10
  },
  //chaiMl:margin left
  chaiMl: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiMl
    el.style.marginLeft = `${classSubArray[1]}px`;//chaiMl-10
  },
  //chaiMr:margin right
  chaiMr: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiMr
    el.style.marginRight = `${classSubArray[1]}px`;//chaiMr-10
  },
  //chaiMt:margin top
  chaiMt: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiMt
    el.style.marginTop = `${classSubArray[1]}px`;//chaiMt-10
  },
  //chaiMb:margin bottom
  chaiMb: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiMb
    el.style.marginBottom = `${classSubArray[1]}px`;//chaiMb-10
  },
  //chaiB:border
  chaiB: (el, classSubArray) => {
    if (classSubArray.length > 2) {
      if (color.hasOwnProperty(classSubArray[1])) {
        el.style.border = `${classSubArray[2]}px solid ${
          color[classSubArray[1]]
        }`;//chaiB-gray-10
      }
    } else if (classSubArray.length > 1) {
      el.style.border = `${classSubArray[1]}px solid black`;//chaiB-10
    } else {
      el.style.border = "1px solid black";//chaiB
    }
  },
  //chaiBr:border radius
  chaiBr: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiBr
    el.style.borderRadius = `${classSubArray[1]}px`;//chaiBr-10
  },
  //chaiFlex:flex
  chaiFlex: (el, classSubArray) => {
    el.style.display = "flex";
    if (classSubArray.length < 3) return;//if the class is just chaiFlex
    const flexProps = {
      direction: "flexDirection",//chaiFlex-direction-row
      justify: "justifyContent",//chaiFlex-justify-center
      align: "alignItems",//chaiFlex-align-center
      flex: "flex",//chaiFlex-flex-1
      gap: "gap",//chaiFlex-gap-10
      wrap: "flexWrap",//chaiFlex-wrap-wrap
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
    if (classSubArray.length < 2) return;//if the class is just chaiD
    const displayMap = {
      block: "block",//chaiD-block
      hidden: "none",//chaiD-hidden
      inline: "inline",//chaiD-inline
      "inline-block": "inline-block",//chaiD-inline-block
    };
    if (displayMap[classSubArray[1]]) {
      el.style.display = displayMap[classSubArray[1]];
    }
  },
  //chaiW:width
  chaiW: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiW
    if (classSubArray.length > 2) {
      el.style.width = `${classSubArray[1]}${classSubArray[2]}`;//chaiW-100-vw
    } else {
      el.style.width = `${classSubArray[1]}px`;//chaiW-10
    }
  },
  //chaiH:height
  chaiH: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiH
    if (classSubArray.length > 2) {
      el.style.height = `${classSubArray[1]}${classSubArray[2]}`;//chaiH-100-vh
    } else {
      el.style.height = `${classSubArray[1]}px`;//chaiH-10
    }
  },
  //chaiS:shadow
  chaiS: (el, classSubArray) => {
    if (classSubArray.length > 1 && shadow.hasOwnProperty(classSubArray[1])) {
      el.style.boxShadow = shadow[classSubArray[1]];//chaiS-sm
    } else {
      el.style.boxShadow = "5px 5px 10px rgb(0,0,0,0.1)";//chaiS
    }
  },
  //chaiC:cursor
  chaiC: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiC
    if (cursor.hasOwnProperty(classSubArray[1])) {
      el.style.cursor = cursor[classSubArray[1]];//chaiC-pointer
    }
  },
  //chaiFs:font size
  chaiFs: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiFs
    el.style.fontSize = `${classSubArray[1]}px`;//chaiFs-10
  },
  //chaiTa:text align
  chaiTa: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiTa
    el.style.textAlign = classSubArray[1];//chaiTa-center
  },
  //chaiFw:font weight
  chaiFw: (el, classSubArray) => {
    if (classSubArray.length < 2) return;//if the class is just chaiFw
    el.style.fontWeight = classSubArray[1];//chaiFw-bold
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
