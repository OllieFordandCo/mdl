// node_modules/@shoelace-style/localize/dist/index.js
var connectedElements = /* @__PURE__ */ new Set();
var documentElementObserver = new MutationObserver(update);
var translations = /* @__PURE__ */ new Map();
var documentDirection = document.documentElement.dir || "ltr";
var documentLanguage = document.documentElement.lang || navigator.language;
var fallback;
documentElementObserver.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["dir", "lang"]
});
function registerTranslation(...translation2) {
  translation2.map((t) => {
    const code = t.$code.toLowerCase();
    if (translations.has(code)) {
      translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t));
    } else {
      translations.set(code, t);
    }
    if (!fallback) {
      fallback = t;
    }
  });
  update();
}
function update() {
  documentDirection = document.documentElement.dir || "ltr";
  documentLanguage = document.documentElement.lang || navigator.language;
  [...connectedElements.keys()].map((el) => {
    if (typeof el.requestUpdate === "function") {
      el.requestUpdate();
    }
  });
}
var LocalizeController = class {
  constructor(host) {
    this.host = host;
    this.host.addController(this);
  }
  hostConnected() {
    connectedElements.add(this.host);
  }
  hostDisconnected() {
    connectedElements.delete(this.host);
  }
  dir() {
    return `${this.host.dir || documentDirection}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || documentLanguage}`.toLowerCase();
  }
  term(key, ...args) {
    var _a, _b;
    const locale = new Intl.Locale(this.lang());
    const language = locale === null || locale === void 0 ? void 0 : locale.language.toLowerCase();
    const region = (_b = (_a = locale === null || locale === void 0 ? void 0 : locale.region) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : "";
    const primary = translations.get(`${language}-${region}`);
    const secondary = translations.get(language);
    let term;
    if (primary && primary[key]) {
      term = primary[key];
    } else if (secondary && secondary[key]) {
      term = secondary[key];
    } else if (fallback && fallback[key]) {
      term = fallback[key];
    } else {
      console.error(`No translation found for: ${String(key)}`);
      return key;
    }
    if (typeof term === "function") {
      return term(...args);
    }
    return term;
  }
  date(dateToFormat, options) {
    dateToFormat = new Date(dateToFormat);
    return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
  }
  number(numberToFormat, options) {
    numberToFormat = Number(numberToFormat);
    return isNaN(numberToFormat) ? "" : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
  }
  relativeTime(value, unit, options) {
    return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
  }
};

// src/utilities/localize.ts
var LocalizeController2 = class extends LocalizeController {
};

// src/translations/en.ts
var translation = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  clearEntry: "Clear entry",
  close: "Close",
  copy: "Copy",
  currentValue: "Current value",
  hidePassword: "Hide password",
  loading: "Loading",
  progress: "Progress",
  remove: "Remove",
  resize: "Resize",
  scrollToEnd: "Scroll to end",
  scrollToStart: "Scroll to start",
  selectAColorFromTheScreen: "Select a color from the screen",
  showPassword: "Show password",
  toggleColorFormat: "Toggle color format"
};
registerTranslation(translation);
var en_default = translation;

export {
  registerTranslation,
  en_default,
  LocalizeController2 as LocalizeController
};
