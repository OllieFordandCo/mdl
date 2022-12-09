import {
  popup_styles_default
} from "./chunk.CWYY5SM3.js";
import {
  o
} from "./chunk.3TBY3BXC.js";
import {
  ShoelaceElement,
  e,
  e2,
  i
} from "./chunk.H63YSOTP.js";
import {
  y
} from "./chunk.XS52R447.js";
import {
  __decorateClass,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk.WN26B4OP.js";

// node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs
function t(t2) {
  return t2.split("-")[0];
}
function e3(t2) {
  return t2.split("-")[1];
}
function n(e4) {
  return ["top", "bottom"].includes(t(e4)) ? "x" : "y";
}
function i2(t2) {
  return "y" === t2 ? "height" : "width";
}
function r(r3, o4, a3) {
  let { reference: l3, floating: s3 } = r3;
  const c3 = l3.x + l3.width / 2 - s3.width / 2, f3 = l3.y + l3.height / 2 - s3.height / 2, u3 = n(o4), m3 = i2(u3), g3 = l3[m3] / 2 - s3[m3] / 2, d3 = "x" === u3;
  let p3;
  switch (t(o4)) {
    case "top":
      p3 = { x: c3, y: l3.y - s3.height };
      break;
    case "bottom":
      p3 = { x: c3, y: l3.y + l3.height };
      break;
    case "right":
      p3 = { x: l3.x + l3.width, y: f3 };
      break;
    case "left":
      p3 = { x: l3.x - s3.width, y: f3 };
      break;
    default:
      p3 = { x: l3.x, y: l3.y };
  }
  switch (e3(o4)) {
    case "start":
      p3[u3] -= g3 * (a3 && d3 ? -1 : 1);
      break;
    case "end":
      p3[u3] += g3 * (a3 && d3 ? -1 : 1);
  }
  return p3;
}
var o2 = async (t2, e4, n3) => {
  const { placement: i4 = "bottom", strategy: o4 = "absolute", middleware: a3 = [], platform: l3 } = n3, s3 = a3.filter(Boolean), c3 = await (null == l3.isRTL ? void 0 : l3.isRTL(e4));
  let f3 = await l3.getElementRects({ reference: t2, floating: e4, strategy: o4 }), { x: u3, y: m3 } = r(f3, i4, c3), g3 = i4, d3 = {}, p3 = 0;
  for (let n4 = 0; n4 < s3.length; n4++) {
    const { name: a4, fn: h3 } = s3[n4], { x: y4, y: x3, data: w3, reset: v3 } = await h3({ x: u3, y: m3, initialPlacement: i4, placement: g3, strategy: o4, middlewareData: d3, rects: f3, platform: l3, elements: { reference: t2, floating: e4 } });
    u3 = null != y4 ? y4 : u3, m3 = null != x3 ? x3 : m3, d3 = __spreadProps(__spreadValues({}, d3), { [a4]: __spreadValues(__spreadValues({}, d3[a4]), w3) }), v3 && p3 <= 50 && (p3++, "object" == typeof v3 && (v3.placement && (g3 = v3.placement), v3.rects && (f3 = true === v3.rects ? await l3.getElementRects({ reference: t2, floating: e4, strategy: o4 }) : v3.rects), { x: u3, y: m3 } = r(f3, g3, c3)), n4 = -1);
  }
  return { x: u3, y: m3, placement: g3, strategy: o4, middlewareData: d3 };
};
function a(t2) {
  return "number" != typeof t2 ? function(t3) {
    return __spreadValues({ top: 0, right: 0, bottom: 0, left: 0 }, t3);
  }(t2) : { top: t2, right: t2, bottom: t2, left: t2 };
}
function l(t2) {
  return __spreadProps(__spreadValues({}, t2), { top: t2.y, left: t2.x, right: t2.x + t2.width, bottom: t2.y + t2.height });
}
async function s(t2, e4) {
  var n3;
  void 0 === e4 && (e4 = {});
  const { x: i4, y: r3, platform: o4, rects: s3, elements: c3, strategy: f3 } = t2, { boundary: u3 = "clippingAncestors", rootBoundary: m3 = "viewport", elementContext: g3 = "floating", altBoundary: d3 = false, padding: p3 = 0 } = e4, h3 = a(p3), y4 = c3[d3 ? "floating" === g3 ? "reference" : "floating" : g3], x3 = l(await o4.getClippingRect({ element: null == (n3 = await (null == o4.isElement ? void 0 : o4.isElement(y4))) || n3 ? y4 : y4.contextElement || await (null == o4.getDocumentElement ? void 0 : o4.getDocumentElement(c3.floating)), boundary: u3, rootBoundary: m3, strategy: f3 })), w3 = "floating" === g3 ? __spreadProps(__spreadValues({}, s3.floating), { x: i4, y: r3 }) : s3.reference, v3 = await (null == o4.getOffsetParent ? void 0 : o4.getOffsetParent(c3.floating)), b3 = await (null == o4.isElement ? void 0 : o4.isElement(v3)) && await (null == o4.getScale ? void 0 : o4.getScale(v3)) || { x: 1, y: 1 }, R2 = l(o4.convertOffsetParentRelativeRectToViewportRelativeRect ? await o4.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w3, offsetParent: v3, strategy: f3 }) : w3);
  return { top: (x3.top - R2.top + h3.top) / b3.y, bottom: (R2.bottom - x3.bottom + h3.bottom) / b3.y, left: (x3.left - R2.left + h3.left) / b3.x, right: (R2.right - x3.right + h3.right) / b3.x };
}
var c = Math.min;
var f = Math.max;
function u(t2, e4, n3) {
  return f(t2, c(e4, n3));
}
var m = (t2) => ({ name: "arrow", options: t2, async fn(r3) {
  const { element: o4, padding: l3 = 0 } = null != t2 ? t2 : {}, { x: s3, y: c3, placement: f3, rects: m3, platform: g3 } = r3;
  if (null == o4)
    return {};
  const d3 = a(l3), p3 = { x: s3, y: c3 }, h3 = n(f3), y4 = e3(f3), x3 = i2(h3), w3 = await g3.getDimensions(o4), v3 = "y" === h3 ? "top" : "left", b3 = "y" === h3 ? "bottom" : "right", R2 = m3.reference[x3] + m3.reference[h3] - p3[h3] - m3.floating[x3], A2 = p3[h3] - m3.reference[h3], P2 = await (null == g3.getOffsetParent ? void 0 : g3.getOffsetParent(o4));
  let T3 = P2 ? "y" === h3 ? P2.clientHeight || 0 : P2.clientWidth || 0 : 0;
  0 === T3 && (T3 = m3.floating[x3]);
  const O3 = R2 / 2 - A2 / 2, E3 = d3[v3], L3 = T3 - w3[x3] - d3[b3], D3 = T3 / 2 - w3[x3] / 2 + O3, k2 = u(E3, D3, L3), B = ("start" === y4 ? d3[v3] : d3[b3]) > 0 && D3 !== k2 && m3.reference[x3] <= m3.floating[x3];
  return { [h3]: p3[h3] - (B ? D3 < E3 ? E3 - D3 : L3 - D3 : 0), data: { [h3]: k2, centerOffset: D3 - k2 } };
} });
var g = { left: "right", right: "left", bottom: "top", top: "bottom" };
function d(t2) {
  return t2.replace(/left|right|bottom|top/g, (t3) => g[t3]);
}
function p(t2, r3, o4) {
  void 0 === o4 && (o4 = false);
  const a3 = e3(t2), l3 = n(t2), s3 = i2(l3);
  let c3 = "x" === l3 ? a3 === (o4 ? "end" : "start") ? "right" : "left" : "start" === a3 ? "bottom" : "top";
  return r3.reference[s3] > r3.floating[s3] && (c3 = d(c3)), { main: c3, cross: d(c3) };
}
var h = { start: "end", end: "start" };
function y2(t2) {
  return t2.replace(/start|end/g, (t3) => h[t3]);
}
var x = ["top", "right", "bottom", "left"];
var w = x.reduce((t2, e4) => t2.concat(e4, e4 + "-start", e4 + "-end"), []);
var b = function(e4) {
  return void 0 === e4 && (e4 = {}), { name: "flip", options: e4, async fn(n3) {
    var i4;
    const { placement: r3, middlewareData: o4, rects: a3, initialPlacement: l3, platform: c3, elements: f3 } = n3, _a = e4, { mainAxis: u3 = true, crossAxis: m3 = true, fallbackPlacements: g3, fallbackStrategy: h3 = "bestFit", flipAlignment: x3 = true } = _a, w3 = __objRest(_a, ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "flipAlignment"]), v3 = t(r3), b3 = g3 || (v3 === l3 || !x3 ? [d(l3)] : function(t2) {
      const e5 = d(t2);
      return [y2(t2), e5, y2(e5)];
    }(l3)), R2 = [l3, ...b3], A2 = await s(n3, w3), P2 = [];
    let T3 = (null == (i4 = o4.flip) ? void 0 : i4.overflows) || [];
    if (u3 && P2.push(A2[v3]), m3) {
      const { main: t2, cross: e5 } = p(r3, a3, await (null == c3.isRTL ? void 0 : c3.isRTL(f3.floating)));
      P2.push(A2[t2], A2[e5]);
    }
    if (T3 = [...T3, { placement: r3, overflows: P2 }], !P2.every((t2) => t2 <= 0)) {
      var O3, E3;
      const t2 = (null != (O3 = null == (E3 = o4.flip) ? void 0 : E3.index) ? O3 : 0) + 1, e5 = R2[t2];
      if (e5)
        return { data: { index: t2, overflows: T3 }, reset: { placement: e5 } };
      let n4 = "bottom";
      switch (h3) {
        case "bestFit": {
          var L3;
          const t3 = null == (L3 = T3.map((t4) => [t4, t4.overflows.filter((t5) => t5 > 0).reduce((t5, e6) => t5 + e6, 0)]).sort((t4, e6) => t4[1] - e6[1])[0]) ? void 0 : L3[0].placement;
          t3 && (n4 = t3);
          break;
        }
        case "initialPlacement":
          n4 = l3;
      }
      if (r3 !== n4)
        return { reset: { placement: n4 } };
    }
    return {};
  } };
};
var T = function(i4) {
  return void 0 === i4 && (i4 = 0), { name: "offset", options: i4, async fn(r3) {
    const { x: o4, y: a3 } = r3, l3 = await async function(i5, r4) {
      const { placement: o5, platform: a4, elements: l4 } = i5, s3 = await (null == a4.isRTL ? void 0 : a4.isRTL(l4.floating)), c3 = t(o5), f3 = e3(o5), u3 = "x" === n(o5), m3 = ["left", "top"].includes(c3) ? -1 : 1, g3 = s3 && u3 ? -1 : 1, d3 = "function" == typeof r4 ? r4(i5) : r4;
      let { mainAxis: p3, crossAxis: h3, alignmentAxis: y4 } = "number" == typeof d3 ? { mainAxis: d3, crossAxis: 0, alignmentAxis: null } : __spreadValues({ mainAxis: 0, crossAxis: 0, alignmentAxis: null }, d3);
      return f3 && "number" == typeof y4 && (h3 = "end" === f3 ? -1 * y4 : y4), u3 ? { x: h3 * g3, y: p3 * m3 } : { x: p3 * m3, y: h3 * g3 };
    }(r3, i4);
    return { x: o4 + l3.x, y: a3 + l3.y, data: l3 };
  } };
};
function O(t2) {
  return "x" === t2 ? "y" : "x";
}
var E = function(e4) {
  return void 0 === e4 && (e4 = {}), { name: "shift", options: e4, async fn(i4) {
    const { x: r3, y: o4, placement: a3 } = i4, _a = e4, { mainAxis: l3 = true, crossAxis: c3 = false, limiter: f3 = { fn: (t2) => {
      let { x: e5, y: n3 } = t2;
      return { x: e5, y: n3 };
    } } } = _a, m3 = __objRest(_a, ["mainAxis", "crossAxis", "limiter"]), g3 = { x: r3, y: o4 }, d3 = await s(i4, m3), p3 = n(t(a3)), h3 = O(p3);
    let y4 = g3[p3], x3 = g3[h3];
    if (l3) {
      const t2 = "y" === p3 ? "bottom" : "right";
      y4 = u(y4 + d3["y" === p3 ? "top" : "left"], y4, y4 - d3[t2]);
    }
    if (c3) {
      const t2 = "y" === h3 ? "bottom" : "right";
      x3 = u(x3 + d3["y" === h3 ? "top" : "left"], x3, x3 - d3[t2]);
    }
    const w3 = f3.fn(__spreadProps(__spreadValues({}, i4), { [p3]: y4, [h3]: x3 }));
    return __spreadProps(__spreadValues({}, w3), { data: { x: w3.x - r3, y: w3.y - o4 } });
  } };
};
var D = function(n3) {
  return void 0 === n3 && (n3 = {}), { name: "size", options: n3, async fn(i4) {
    const { placement: r3, rects: o4, platform: a3, elements: l3 } = i4, _a = n3, { apply: c3 = () => {
    } } = _a, u3 = __objRest(_a, ["apply"]), m3 = await s(i4, u3), g3 = t(r3), d3 = e3(r3);
    let p3, h3;
    "top" === g3 || "bottom" === g3 ? (p3 = g3, h3 = d3 === (await (null == a3.isRTL ? void 0 : a3.isRTL(l3.floating)) ? "start" : "end") ? "left" : "right") : (h3 = g3, p3 = "end" === d3 ? "top" : "bottom");
    const y4 = f(m3.left, 0), x3 = f(m3.right, 0), w3 = f(m3.top, 0), v3 = f(m3.bottom, 0), b3 = { availableHeight: o4.floating.height - (["left", "right"].includes(r3) ? 2 * (0 !== w3 || 0 !== v3 ? w3 + v3 : f(m3.top, m3.bottom)) : m3[p3]), availableWidth: o4.floating.width - (["top", "bottom"].includes(r3) ? 2 * (0 !== y4 || 0 !== x3 ? y4 + x3 : f(m3.left, m3.right)) : m3[h3]) };
    await c3(__spreadValues(__spreadValues({}, i4), b3));
    const R2 = await a3.getDimensions(l3.floating);
    return o4.floating.width !== R2.width || o4.floating.height !== R2.height ? { reset: { rects: true } } : {};
  } };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
var n2 = Math.min;
var o3 = Math.max;
var i3 = Math.round;
function r2(t2, e4) {
  const n3 = e4 || t2.getBoundingClientRect();
  return { x: t2.offsetWidth > 0 && i3(n3.width) / t2.offsetWidth || 1, y: t2.offsetHeight > 0 && i3(n3.height) / t2.offsetHeight || 1 };
}
function l2(t2) {
  var e4;
  return (null == (e4 = t2.ownerDocument) ? void 0 : e4.defaultView) || window;
}
function c2(t2) {
  return l2(t2).getComputedStyle(t2);
}
function s2(t2) {
  return d2(t2) ? (t2.nodeName || "").toLowerCase() : "";
}
function f2() {
  const t2 = navigator.userAgentData;
  return t2 && Array.isArray(t2.brands) ? t2.brands.map((t3) => t3.brand + "/" + t3.version).join(" ") : navigator.userAgent;
}
function u2(t2) {
  return t2 instanceof l2(t2).HTMLElement;
}
function a2(t2) {
  return t2 instanceof l2(t2).Element;
}
function d2(t2) {
  return t2 instanceof l2(t2).Node;
}
function h2(t2) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  return t2 instanceof l2(t2).ShadowRoot || t2 instanceof ShadowRoot;
}
function g2(t2) {
  const { overflow: e4, overflowX: n3, overflowY: o4, display: i4 } = c2(t2);
  return /auto|scroll|overlay|hidden/.test(e4 + o4 + n3) && !["inline", "contents"].includes(i4);
}
function m2(t2) {
  return ["table", "td", "th"].includes(s2(t2));
}
function p2(t2) {
  const e4 = /firefox/i.test(f2()), n3 = c2(t2), o4 = n3.backdropFilter || n3.WebkitBackdropFilter;
  return "none" !== n3.transform || "none" !== n3.perspective || !!o4 && "none" !== o4 || e4 && "filter" === n3.willChange || e4 && !!n3.filter && "none" !== n3.filter || ["transform", "perspective"].some((t3) => n3.willChange.includes(t3)) || ["paint", "layout", "strict", "content"].some((t3) => {
    const e5 = n3.contain;
    return null != e5 && e5.includes(t3);
  });
}
function y3() {
  return !/^((?!chrome|android).)*safari/i.test(f2());
}
function w2(t2) {
  return ["html", "body", "#document"].includes(s2(t2));
}
function x2(t2, e4, n3) {
  var o4, i4, c3, s3;
  void 0 === e4 && (e4 = false), void 0 === n3 && (n3 = false);
  const f3 = t2.getBoundingClientRect();
  let d3 = f3, h3 = t2, g3 = { x: 1, y: 1 };
  !a2(t2) && t2.contextElement && (d3 = t2.contextElement.getBoundingClientRect(), h3 = t2.contextElement), e4 && u2(h3) && (g3 = r2(h3, d3));
  const m3 = a2(t2) ? l2(t2) : window, p3 = !y3() && n3, w3 = (f3.left + (p3 && null != (o4 = null == (i4 = m3.visualViewport) ? void 0 : i4.offsetLeft) ? o4 : 0)) / g3.x, x3 = (f3.top + (p3 && null != (c3 = null == (s3 = m3.visualViewport) ? void 0 : s3.offsetTop) ? c3 : 0)) / g3.y, v3 = f3.width / g3.x, b3 = f3.height / g3.y;
  return { width: v3, height: b3, top: x3, right: w3 + v3, bottom: x3 + b3, left: w3, x: w3, y: x3 };
}
function v2(t2) {
  return ((d2(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
}
function b2(t2) {
  return a2(t2) ? { scrollLeft: t2.scrollLeft, scrollTop: t2.scrollTop } : { scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset };
}
function L2(t2) {
  return x2(v2(t2)).left + b2(t2).scrollLeft;
}
function E2(t2, e4, n3) {
  const o4 = u2(e4), r3 = v2(e4), l3 = x2(t2, o4 && function(t3) {
    const e5 = x2(t3);
    return i3(e5.width) !== t3.offsetWidth || i3(e5.height) !== t3.offsetHeight;
  }(e4), "fixed" === n3);
  let c3 = { scrollLeft: 0, scrollTop: 0 };
  const f3 = { x: 0, y: 0 };
  if (o4 || !o4 && "fixed" !== n3)
    if (("body" !== s2(e4) || g2(r3)) && (c3 = b2(e4)), u2(e4)) {
      const t3 = x2(e4, true);
      f3.x = t3.x + e4.clientLeft, f3.y = t3.y + e4.clientTop;
    } else
      r3 && (f3.x = L2(r3));
  return { x: l3.left + c3.scrollLeft - f3.x, y: l3.top + c3.scrollTop - f3.y, width: l3.width, height: l3.height };
}
function R(t2) {
  if ("html" === s2(t2))
    return t2;
  const e4 = t2.assignedSlot || t2.parentNode || (h2(t2) ? t2.host : null) || v2(t2);
  return h2(e4) ? e4.host : e4;
}
function T2(t2) {
  return u2(t2) && "fixed" !== c2(t2).position ? t2.offsetParent : null;
}
function W(t2) {
  const e4 = l2(t2);
  let n3 = T2(t2);
  for (; n3 && m2(n3) && "static" === c2(n3).position; )
    n3 = T2(n3);
  return n3 && ("html" === s2(n3) || "body" === s2(n3) && "static" === c2(n3).position && !p2(n3)) ? e4 : n3 || function(t3) {
    let e5 = R(t3);
    for (; u2(e5) && !w2(e5); ) {
      if (p2(e5))
        return e5;
      e5 = R(e5);
    }
    return null;
  }(t2) || e4;
}
function H(t2) {
  const e4 = R(t2);
  return w2(e4) ? t2.ownerDocument.body : u2(e4) && g2(e4) ? e4 : H(e4);
}
function C(t2, e4) {
  var n3;
  void 0 === e4 && (e4 = []);
  const o4 = H(t2), i4 = o4 === (null == (n3 = t2.ownerDocument) ? void 0 : n3.body), r3 = l2(o4);
  return i4 ? e4.concat(r3, r3.visualViewport || [], g2(o4) ? o4 : []) : e4.concat(o4, C(o4));
}
function D2(e4, n3, i4) {
  return "viewport" === n3 ? l(function(t2, e5) {
    const n4 = l2(t2), o4 = v2(t2), i5 = n4.visualViewport;
    let r3 = o4.clientWidth, c3 = o4.clientHeight, s3 = 0, f3 = 0;
    if (i5) {
      r3 = i5.width, c3 = i5.height;
      const t3 = y3();
      (t3 || !t3 && "fixed" === e5) && (s3 = i5.offsetLeft, f3 = i5.offsetTop);
    }
    return { width: r3, height: c3, x: s3, y: f3 };
  }(e4, i4)) : a2(n3) ? function(t2, e5) {
    const n4 = x2(t2, true, "fixed" === e5), o4 = n4.top + t2.clientTop, i5 = n4.left + t2.clientLeft, l3 = u2(t2) ? r2(t2) : { x: 1, y: 1 }, c3 = t2.clientWidth * l3.x, s3 = t2.clientHeight * l3.y, f3 = i5 * l3.x, a3 = o4 * l3.y;
    return { top: a3, left: f3, right: f3 + c3, bottom: a3 + s3, x: f3, y: a3, width: c3, height: s3 };
  }(n3, i4) : l(function(t2) {
    var e5;
    const n4 = v2(t2), i5 = b2(t2), r3 = null == (e5 = t2.ownerDocument) ? void 0 : e5.body, l3 = o3(n4.scrollWidth, n4.clientWidth, r3 ? r3.scrollWidth : 0, r3 ? r3.clientWidth : 0), s3 = o3(n4.scrollHeight, n4.clientHeight, r3 ? r3.scrollHeight : 0, r3 ? r3.clientHeight : 0);
    let f3 = -i5.scrollLeft + L2(t2);
    const u3 = -i5.scrollTop;
    return "rtl" === c2(r3 || n4).direction && (f3 += o3(n4.clientWidth, r3 ? r3.clientWidth : 0) - l3), { width: l3, height: s3, x: f3, y: u3 };
  }(v2(e4)));
}
var A = { getClippingRect: function(t2) {
  let { element: e4, boundary: i4, rootBoundary: r3, strategy: l3 } = t2;
  const f3 = "clippingAncestors" === i4 ? function(t3) {
    let e5 = C(t3).filter((t4) => a2(t4) && "body" !== s2(t4)), n3 = null;
    const o4 = "fixed" === c2(t3).position;
    let i5 = o4 ? R(t3) : t3;
    for (; a2(i5) && !w2(i5); ) {
      const t4 = c2(i5), r4 = p2(i5);
      (o4 ? r4 || n3 : r4 || "static" !== t4.position || !n3 || !["absolute", "fixed"].includes(n3.position)) ? n3 = t4 : e5 = e5.filter((t5) => t5 !== i5), i5 = R(i5);
    }
    return e5;
  }(e4) : [].concat(i4), u3 = [...f3, r3], d3 = u3[0], h3 = u3.reduce((t3, i5) => {
    const r4 = D2(e4, i5, l3);
    return t3.top = o3(r4.top, t3.top), t3.right = n2(r4.right, t3.right), t3.bottom = n2(r4.bottom, t3.bottom), t3.left = o3(r4.left, t3.left), t3;
  }, D2(e4, d3, l3));
  return { width: h3.right - h3.left, height: h3.bottom - h3.top, x: h3.left, y: h3.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t2) {
  let { rect: e4, offsetParent: n3, strategy: o4 } = t2;
  const i4 = u2(n3), l3 = v2(n3);
  if (n3 === l3)
    return e4;
  let c3 = { scrollLeft: 0, scrollTop: 0 }, f3 = { x: 1, y: 1 };
  const a3 = { x: 0, y: 0 };
  if ((i4 || !i4 && "fixed" !== o4) && (("body" !== s2(n3) || g2(l3)) && (c3 = b2(n3)), u2(n3))) {
    const t3 = x2(n3);
    f3 = r2(n3), a3.x = t3.x + n3.clientLeft, a3.y = t3.y + n3.clientTop;
  }
  return { width: e4.width * f3.x, height: e4.height * f3.y, x: e4.x * f3.x - c3.scrollLeft * f3.x + a3.x, y: e4.y * f3.y - c3.scrollTop * f3.y + a3.y };
}, isElement: a2, getDimensions: function(t2) {
  if (u2(t2))
    return { width: t2.offsetWidth, height: t2.offsetHeight };
  const e4 = x2(t2);
  return { width: e4.width, height: e4.height };
}, getOffsetParent: W, getDocumentElement: v2, getScale: r2, async getElementRects(t2) {
  let { reference: e4, floating: n3, strategy: o4 } = t2;
  const i4 = this.getOffsetParent || W, r3 = this.getDimensions;
  return { reference: E2(e4, await i4(n3), o4), floating: __spreadValues({ x: 0, y: 0 }, await r3(n3)) };
}, getClientRects: (t2) => Array.from(t2.getClientRects()), isRTL: (t2) => "rtl" === c2(t2).direction };
function S(t2, e4, n3, o4) {
  void 0 === o4 && (o4 = {});
  const { ancestorScroll: i4 = true, ancestorResize: r3 = true, elementResize: l3 = true, animationFrame: c3 = false } = o4, s3 = i4 && !c3, f3 = s3 || r3 ? [...a2(t2) ? C(t2) : t2.contextElement ? C(t2.contextElement) : [], ...C(e4)] : [];
  f3.forEach((t3) => {
    s3 && t3.addEventListener("scroll", n3, { passive: true }), r3 && t3.addEventListener("resize", n3);
  });
  let u3, d3 = null;
  if (l3) {
    let o5 = true;
    d3 = new ResizeObserver(() => {
      o5 || n3(), o5 = false;
    }), a2(t2) && !c3 && d3.observe(t2), a2(t2) || !t2.contextElement || c3 || d3.observe(t2.contextElement), d3.observe(e4);
  }
  let h3 = c3 ? x2(t2) : null;
  return c3 && function e5() {
    const o5 = x2(t2);
    !h3 || o5.x === h3.x && o5.y === h3.y && o5.width === h3.width && o5.height === h3.height || n3();
    h3 = o5, u3 = requestAnimationFrame(e5);
  }(), n3(), () => {
    var t3;
    f3.forEach((t4) => {
      s3 && t4.removeEventListener("scroll", n3), r3 && t4.removeEventListener("resize", n3);
    }), null == (t3 = d3) || t3.disconnect(), d3 = null, c3 && cancelAnimationFrame(u3);
  };
}
var O2 = (t2, n3, o4) => o2(t2, n3, __spreadValues({ platform: A }, o4));

// src/components/popup/popup.ts
var SlPopup = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.placement = "top";
    this.strategy = "absolute";
    this.distance = 0;
    this.skidding = 0;
    this.arrow = false;
    this.arrowPlacement = "anchor";
    this.arrowPadding = 10;
    this.flip = false;
    this.flipFallbackPlacements = "";
    this.flipFallbackStrategy = "best-fit";
    this.flipPadding = 0;
    this.shift = false;
    this.shiftPadding = 0;
    this.autoSizePadding = 0;
  }
  async connectedCallback() {
    super.connectedCallback();
    await this.updateComplete;
    this.start();
  }
  disconnectedCallback() {
    this.stop();
  }
  async handleAnchorChange() {
    await this.stop();
    if (this.anchor && typeof this.anchor === "string") {
      const root = this.getRootNode();
      this.anchorEl = root.getElementById(this.anchor);
    } else if (this.anchor instanceof HTMLElement) {
      this.anchorEl = this.anchor;
    } else {
      this.anchorEl = this.querySelector('[slot="anchor"]');
    }
    if (this.anchorEl instanceof HTMLSlotElement) {
      this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
    }
    if (!this.anchorEl) {
      throw new Error(
        "Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute."
      );
    }
    this.start();
  }
  start() {
    if (!this.anchorEl) {
      return;
    }
    this.cleanup = S(this.anchorEl, this.popup, () => {
      this.reposition();
    });
  }
  async stop() {
    return new Promise((resolve) => {
      if (this.cleanup) {
        this.cleanup();
        this.cleanup = void 0;
        this.removeAttribute("data-current-placement");
        this.style.removeProperty("--auto-size-available-width");
        this.style.removeProperty("--auto-size-available-height");
        requestAnimationFrame(() => resolve());
      } else {
        resolve();
      }
    });
  }
  async updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("active")) {
      if (this.active) {
        this.start();
      } else {
        this.stop();
      }
    }
    if (changedProps.has("anchor")) {
      this.handleAnchorChange();
    }
    if (this.active) {
      await this.updateComplete;
      this.reposition();
    }
  }
  reposition() {
    if (!this.active || !this.anchorEl) {
      return;
    }
    const middleware = [
      T({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    if (this.sync) {
      middleware.push(
        D({
          apply: ({ rects }) => {
            const syncWidth = this.sync === "width" || this.sync === "both";
            const syncHeight = this.sync === "height" || this.sync === "both";
            this.popup.style.width = syncWidth ? `${rects.reference.width}px` : "";
            this.popup.style.height = syncHeight ? `${rects.reference.height}px` : "";
          }
        })
      );
    } else {
      this.popup.style.width = "";
      this.popup.style.height = "";
    }
    if (this.flip) {
      middleware.push(
        b({
          boundary: this.flipBoundary,
          fallbackPlacements: this.flipFallbackPlacements,
          fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
          padding: this.flipPadding
        })
      );
    }
    if (this.shift) {
      middleware.push(
        E({
          boundary: this.shiftBoundary,
          padding: this.shiftPadding
        })
      );
    }
    if (this.autoSize) {
      middleware.push(
        D({
          boundary: this.autoSizeBoundary,
          padding: this.autoSizePadding,
          apply: ({ availableWidth, availableHeight }) => {
            if (this.autoSize === "vertical" || this.autoSize === "both") {
              this.style.setProperty("--auto-size-available-height", `${availableHeight}px`);
            } else {
              this.style.removeProperty("--auto-size-available-height");
            }
            if (this.autoSize === "horizontal" || this.autoSize === "both") {
              this.style.setProperty("--auto-size-available-width", `${availableWidth}px`);
            } else {
              this.style.removeProperty("--auto-size-available-width");
            }
          }
        })
      );
    } else {
      this.style.removeProperty("--auto-size-available-width");
      this.style.removeProperty("--auto-size-available-height");
    }
    if (this.arrow) {
      middleware.push(
        m({
          element: this.arrowEl,
          padding: this.arrowPadding
        })
      );
    }
    O2(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware,
      strategy: this.strategy
    }).then(({ x: x3, y: y4, middlewareData, placement }) => {
      const isRtl = getComputedStyle(this).direction === "rtl";
      const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
      this.setAttribute("data-current-placement", placement);
      Object.assign(this.popup.style, {
        left: `${x3}px`,
        top: `${y4}px`
      });
      if (this.arrow) {
        const arrowX = middlewareData.arrow.x;
        const arrowY = middlewareData.arrow.y;
        let top = "";
        let right = "";
        let bottom = "";
        let left = "";
        if (this.arrowPlacement === "start") {
          const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          top = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          right = isRtl ? value : "";
          left = isRtl ? "" : value;
        } else if (this.arrowPlacement === "end") {
          const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          right = isRtl ? "" : value;
          left = isRtl ? value : "";
          bottom = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
        } else if (this.arrowPlacement === "center") {
          left = typeof arrowX === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
          top = typeof arrowY === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
        } else {
          left = typeof arrowX === "number" ? `${arrowX}px` : "";
          top = typeof arrowY === "number" ? `${arrowY}px` : "";
        }
        Object.assign(this.arrowEl.style, {
          top,
          right,
          bottom,
          left,
          [staticSide]: "calc(var(--arrow-size-diagonal) * -1)"
        });
      }
    });
    this.emit("sl-reposition");
  }
  render() {
    return y`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${o({
      popup: true,
      "popup--active": this.active,
      "popup--fixed": this.strategy === "fixed",
      "popup--has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? y`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
SlPopup.styles = popup_styles_default;
__decorateClass([
  i(".popup")
], SlPopup.prototype, "popup", 2);
__decorateClass([
  i(".popup__arrow")
], SlPopup.prototype, "arrowEl", 2);
__decorateClass([
  e2()
], SlPopup.prototype, "anchor", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlPopup.prototype, "active", 2);
__decorateClass([
  e2({ reflect: true })
], SlPopup.prototype, "placement", 2);
__decorateClass([
  e2({ reflect: true })
], SlPopup.prototype, "strategy", 2);
__decorateClass([
  e2({ type: Number })
], SlPopup.prototype, "distance", 2);
__decorateClass([
  e2({ type: Number })
], SlPopup.prototype, "skidding", 2);
__decorateClass([
  e2({ type: Boolean })
], SlPopup.prototype, "arrow", 2);
__decorateClass([
  e2({ attribute: "arrow-placement" })
], SlPopup.prototype, "arrowPlacement", 2);
__decorateClass([
  e2({ attribute: "arrow-padding", type: Number })
], SlPopup.prototype, "arrowPadding", 2);
__decorateClass([
  e2({ type: Boolean })
], SlPopup.prototype, "flip", 2);
__decorateClass([
  e2({
    attribute: "flip-fallback-placements",
    converter: {
      fromAttribute: (value) => {
        return value.split(" ").map((p3) => p3.trim()).filter((p3) => p3 !== "");
      },
      toAttribute: (value) => {
        return value.join(" ");
      }
    }
  })
], SlPopup.prototype, "flipFallbackPlacements", 2);
__decorateClass([
  e2({ attribute: "flip-fallback-strategy" })
], SlPopup.prototype, "flipFallbackStrategy", 2);
__decorateClass([
  e2({ type: Object })
], SlPopup.prototype, "flipBoundary", 2);
__decorateClass([
  e2({ attribute: "flip-padding", type: Number })
], SlPopup.prototype, "flipPadding", 2);
__decorateClass([
  e2({ type: Boolean })
], SlPopup.prototype, "shift", 2);
__decorateClass([
  e2({ type: Object })
], SlPopup.prototype, "shiftBoundary", 2);
__decorateClass([
  e2({ attribute: "shift-padding", type: Number })
], SlPopup.prototype, "shiftPadding", 2);
__decorateClass([
  e2({ attribute: "auto-size" })
], SlPopup.prototype, "autoSize", 2);
__decorateClass([
  e2()
], SlPopup.prototype, "sync", 2);
__decorateClass([
  e2({ type: Object })
], SlPopup.prototype, "autoSizeBoundary", 2);
__decorateClass([
  e2({ attribute: "auto-size-padding", type: Number })
], SlPopup.prototype, "autoSizePadding", 2);
SlPopup = __decorateClass([
  e("sl-popup")
], SlPopup);

export {
  SlPopup
};
