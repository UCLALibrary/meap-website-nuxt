/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../Library/Caches/Cypress/15.10.0/Cypress.app/Contents/Resources/app/node_modules/process/browser.js":
/*!************************************************************************************************************!*\
  !*** ../Library/Caches/Cypress/15.10.0/Cypress.app/Contents/Resources/app/node_modules/process/browser.js ***!
  \************************************************************************************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./cypress/support/commands.js":
/*!*************************************!*\
  !*** ./cypress/support/commands.js ***!
  \*************************************/
/***/ (() => {

"use strict";


Cypress.Commands.add('visualSnapshot', name => {
  const provider = Cypress.env('VISUAL_PROVIDER'); // "chromatic" | "percy" | undefined

  if (provider === 'chromatic') {
    // Chromatic snapshot at the CURRENT test viewport (set by describe/it config)
    const w = Cypress.config('viewportWidth');
    const h = Cypress.config('viewportHeight');
    cy.takeSnapshot(`${name} - ${w}x${h}`);
    return;
  }
  if (provider === 'percy') {
    cy.percySnapshot(name);
  }
  // else: do nothing locally
});

/***/ }),

/***/ "./node_modules/.pnpm/@chromatic-com+cypress@0.11.8_@types+react@19.2.14_esbuild@0.25.12_typescript@5.9.3/node_modules/@chromatic-com/cypress/dist/support.js":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@chromatic-com+cypress@0.11.8_@types+react@19.2.14_esbuild@0.25.12_typescript@5.9.3/node_modules/@chromatic-com/cypress/dist/support.js ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var rrwebSnapshot = __webpack_require__(/*! @chromaui/rrweb-snapshot */ "./node_modules/.pnpm/@chromaui+rrweb-snapshot@2.0.0-alpha.18-noAbsolute_3ddec632fb2cc69254e7c9bd38205118/node_modules/@chromaui/rrweb-snapshot/dist/rrweb-snapshot.umd.cjs");

var m=Object.defineProperty;var a=(e,t)=>m(e,"name",{value:t,configurable:!0});var n=a((e,t)=>new Promise(r=>{!t&&Cypress.env("disableAutoSnapshot")&&r(null);let o=rrwebSnapshot.snapshot(e,{recordCanvas:!0}),d=a(async p=>{let c=await(await fetch(p)).blob();return new Promise((h,f)=>{let i=new FileReader;i.onloadend=()=>h(i.result),i.onerror=f,i.readAsDataURL(c);})},"toDataURL"),l=a(async p=>{await Promise.all(p.childNodes.map(async s=>{if(s.tagName==="img"&&s.attributes.src?.startsWith("blob:")){let c=await d(s.attributes.src);s.attributes.src=c;}s.childNodes?.length&&await l(s);}));},"replaceBlobUrls");l(o).then(()=>{r({snapshot:o});});}),"takeSnapshot");Cypress.Commands.add("takeSnapshot",e=>{Cypress.config("isTextTerminal")&&cy.document().then(t=>{cy.wrap(n(t,!0)).then(r=>{cy.get("@manualSnapshots").then(o=>[...o,{...r,name:e}]).as("manualSnapshots");});});});var y=a(e=>({...e("diffThreshold")&&{diffThreshold:e("diffThreshold")},...e("delay")&&{delay:e("delay")},...e("diffIncludeAntiAliasing")&&{diffIncludeAntiAliasing:e("diffIncludeAntiAliasing")},...e("diffThreshold")&&{diffThreshold:e("diffThreshold")},...e("forcedColors")&&{forcedColors:e("forcedColors")},...e("pauseAnimationAtEnd")&&{pauseAnimationAtEnd:e("pauseAnimationAtEnd")},...e("prefersReducedMotion")&&{prefersReducedMotion:e("prefersReducedMotion")},...e("cropToViewport")&&{cropToViewport:e("cropToViewport")},...e("ignoreSelectors")&&{ignoreSelectors:e("ignoreSelectors")}}),"buildChromaticParams");beforeEach(()=>{Cypress.config("isTextTerminal")&&(cy.wrap([]).as("manualSnapshots"),cy.task("prepareArchives",{action:"setup-network-listener",payload:{allowedDomains:Cypress.env("assetDomains")}}));});afterEach(()=>{Cypress.config("isTextTerminal")&&cy.document().then(e=>{cy.wrap(n(e)).then(t=>{cy.get("@manualSnapshots").then((r=[])=>{cy.url().then(o=>{cy.task("prepareArchives",{action:"save-archives",payload:{testTitlePath:[Cypress.spec.relativeToCommonRoot,...Cypress.currentTest.titlePath],domSnapshots:[...r,...t?[t]:[]],chromaticStorybookParams:y(Cypress.env),pageUrl:o,viewport:{height:Cypress.config("viewportHeight"),width:Cypress.config("viewportWidth")},outputDir:Cypress.config("downloadsFolder")}});});});});});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=support.js.map

/***/ }),

/***/ "./node_modules/.pnpm/@chromaui+rrweb-snapshot@2.0.0-alpha.18-noAbsolute_3ddec632fb2cc69254e7c9bd38205118/node_modules/@chromaui/rrweb-snapshot/dist/rrweb-snapshot.umd.cjs":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@chromaui+rrweb-snapshot@2.0.0-alpha.18-noAbsolute_3ddec632fb2cc69254e7c9bd38205118/node_modules/@chromaui/rrweb-snapshot/dist/rrweb-snapshot.umd.cjs ***!
  \**********************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/.pnpm/buffer@5.7.1/node_modules/buffer/index.js")["Buffer"];
/* provided dependency */ var process = __webpack_require__(/*! ../Library/Caches/Cypress/15.10.0/Cypress.app/Contents/Resources/app/node_modules/process/browser.js */ "../Library/Caches/Cypress/15.10.0/Cypress.app/Contents/Resources/app/node_modules/process/browser.js");
(function (g, f) {
    if (true) {
      module.exports = f();
    } else {}
  }(this, () => {
var exports = {};
var module = { exports };
"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __defProp2 = Object.defineProperty;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var NodeType = /* @__PURE__ */ ((NodeType2) => {
  NodeType2[NodeType2["Document"] = 0] = "Document";
  NodeType2[NodeType2["DocumentType"] = 1] = "DocumentType";
  NodeType2[NodeType2["Element"] = 2] = "Element";
  NodeType2[NodeType2["Text"] = 3] = "Text";
  NodeType2[NodeType2["CDATA"] = 4] = "CDATA";
  NodeType2[NodeType2["Comment"] = 5] = "Comment";
  return NodeType2;
})(NodeType || {});
const testableAccessors = {
  Node: ["childNodes", "parentNode", "parentElement", "textContent"],
  ShadowRoot: ["host", "styleSheets"],
  Element: ["shadowRoot", "querySelector", "querySelectorAll"],
  MutationObserver: []
};
const testableMethods = {
  Node: ["contains", "getRootNode"],
  ShadowRoot: ["getSelection"],
  Element: [],
  MutationObserver: ["constructor"]
};
const untaintedBasePrototype = {};
const isAngularZonePresent = () => {
  return !!globalThis.Zone;
};
function getUntaintedPrototype(key) {
  if (untaintedBasePrototype[key])
    return untaintedBasePrototype[key];
  const defaultObj = globalThis[key];
  const defaultPrototype = defaultObj.prototype;
  const accessorNames = key in testableAccessors ? testableAccessors[key] : void 0;
  const isUntaintedAccessors = Boolean(
    accessorNames && // @ts-expect-error 2345
    accessorNames.every(
      (accessor) => {
        var _a, _b;
        return Boolean(
          (_b = (_a = Object.getOwnPropertyDescriptor(defaultPrototype, accessor)) == null ? void 0 : _a.get) == null ? void 0 : _b.toString().includes("[native code]")
        );
      }
    )
  );
  const methodNames = key in testableMethods ? testableMethods[key] : void 0;
  const isUntaintedMethods = Boolean(
    methodNames && methodNames.every(
      // @ts-expect-error 2345
      (method) => {
        var _a;
        return typeof defaultPrototype[method] === "function" && ((_a = defaultPrototype[method]) == null ? void 0 : _a.toString().includes("[native code]"));
      }
    )
  );
  if (isUntaintedAccessors && isUntaintedMethods && !isAngularZonePresent()) {
    untaintedBasePrototype[key] = defaultObj.prototype;
    return defaultObj.prototype;
  }
  try {
    const iframeEl = document.createElement("iframe");
    document.body.appendChild(iframeEl);
    const win = iframeEl.contentWindow;
    if (!win) return defaultObj.prototype;
    const untaintedObject = win[key].prototype;
    document.body.removeChild(iframeEl);
    if (!untaintedObject) return defaultPrototype;
    return untaintedBasePrototype[key] = untaintedObject;
  } catch (e) {
    return defaultPrototype;
  }
}
const untaintedAccessorCache = {};
function getUntaintedAccessor(key, instance, accessor) {
  var _a;
  const cacheKey = `${key}.${String(accessor)}`;
  if (untaintedAccessorCache[cacheKey])
    return untaintedAccessorCache[cacheKey].call(
      instance
    );
  const untaintedPrototype = getUntaintedPrototype(key);
  const untaintedAccessor = (_a = Object.getOwnPropertyDescriptor(
    untaintedPrototype,
    accessor
  )) == null ? void 0 : _a.get;
  if (!untaintedAccessor) return instance[accessor];
  untaintedAccessorCache[cacheKey] = untaintedAccessor;
  return untaintedAccessor.call(instance);
}
const untaintedMethodCache = {};
function getUntaintedMethod(key, instance, method) {
  const cacheKey = `${key}.${String(method)}`;
  if (untaintedMethodCache[cacheKey])
    return untaintedMethodCache[cacheKey].bind(
      instance
    );
  const untaintedPrototype = getUntaintedPrototype(key);
  const untaintedMethod = untaintedPrototype[method];
  if (typeof untaintedMethod !== "function") return instance[method];
  untaintedMethodCache[cacheKey] = untaintedMethod;
  return untaintedMethod.bind(instance);
}
function childNodes(n) {
  return getUntaintedAccessor("Node", n, "childNodes");
}
function parentNode(n) {
  return getUntaintedAccessor("Node", n, "parentNode");
}
function parentElement(n) {
  return getUntaintedAccessor("Node", n, "parentElement");
}
function textContent(n) {
  return getUntaintedAccessor("Node", n, "textContent");
}
function contains(n, other) {
  return getUntaintedMethod("Node", n, "contains")(other);
}
function getRootNode(n) {
  return getUntaintedMethod("Node", n, "getRootNode")();
}
function host(n) {
  if (!n || !("host" in n)) return null;
  return getUntaintedAccessor("ShadowRoot", n, "host");
}
function styleSheets(n) {
  return n.styleSheets;
}
function shadowRoot(n) {
  if (!n || !("shadowRoot" in n)) return null;
  return getUntaintedAccessor("Element", n, "shadowRoot");
}
function querySelector(n, selectors) {
  return getUntaintedAccessor("Element", n, "querySelector")(selectors);
}
function querySelectorAll(n, selectors) {
  return getUntaintedAccessor("Element", n, "querySelectorAll")(selectors);
}
function mutationObserverCtor() {
  return getUntaintedPrototype("MutationObserver").constructor;
}
function patch(source, name, replacement) {
  try {
    if (!(name in source)) {
      return () => {
      };
    }
    const original = source[name];
    const wrapped = replacement(original);
    if (typeof wrapped === "function") {
      wrapped.prototype = wrapped.prototype || {};
      Object.defineProperties(wrapped, {
        __rrweb_original__: {
          enumerable: false,
          value: original
        }
      });
    }
    source[name] = wrapped;
    return () => {
      source[name] = original;
    };
  } catch (e) {
    return () => {
    };
  }
}
const index = {
  childNodes,
  parentNode,
  parentElement,
  textContent,
  contains,
  getRootNode,
  host,
  styleSheets,
  shadowRoot,
  querySelector,
  querySelectorAll,
  mutationObserver: mutationObserverCtor,
  patch
};
function isElement(n) {
  return n.nodeType === n.ELEMENT_NODE;
}
function isShadowRoot(n) {
  const hostEl = (
    // anchor and textarea elements also have a `host` property
    // but only shadow roots have a `mode` property
    n && "host" in n && "mode" in n && index.host(n) || null
  );
  return Boolean(
    hostEl && "shadowRoot" in hostEl && index.shadowRoot(hostEl) === n
  );
}
function isNativeShadowDom(shadowRoot2) {
  return Object.prototype.toString.call(shadowRoot2) === "[object ShadowRoot]";
}
function fixBrowserCompatibilityIssuesInCSS(cssText) {
  if (cssText.includes(" background-clip: text;") && !cssText.includes(" -webkit-background-clip: text;")) {
    cssText = cssText.replace(
      /\sbackground-clip:\s*text;/g,
      " -webkit-background-clip: text; background-clip: text;"
    );
  }
  return cssText;
}
function escapeImportStatement(rule2) {
  const { cssText } = rule2;
  if (cssText.split('"').length < 3) return cssText;
  const statement = ["@import", `url(${JSON.stringify(rule2.href)})`];
  if (rule2.layerName === "") {
    statement.push(`layer`);
  } else if (rule2.layerName) {
    statement.push(`layer(${rule2.layerName})`);
  }
  if (rule2.supportsText) {
    statement.push(`supports(${rule2.supportsText})`);
  }
  if (rule2.media.length) {
    statement.push(rule2.media.mediaText);
  }
  return statement.join(" ") + ";";
}
function stringifyStylesheet(s) {
  try {
    const rules = s.rules || s.cssRules;
    if (!rules) {
      return null;
    }
    let sheetHref = s.href;
    if (!sheetHref && s.ownerNode && s.ownerNode.ownerDocument) {
      sheetHref = s.ownerNode.ownerDocument.location.href;
    }
    const stringifiedRules = Array.from(
      rules,
      (rule2) => stringifyRule(rule2, sheetHref)
    ).join("");
    return fixBrowserCompatibilityIssuesInCSS(stringifiedRules);
  } catch (error) {
    return null;
  }
}
function stringifyRule(rule2, sheetHref) {
  if (isCSSImportRule(rule2)) {
    let importStringified;
    try {
      importStringified = // for same-origin stylesheets,
      // we can access the imported stylesheet rules directly
      stringifyStylesheet(rule2.styleSheet) || // work around browser issues with the raw string `@import url(...)` statement
      escapeImportStatement(rule2);
    } catch (error) {
      importStringified = rule2.cssText;
    }
    if (rule2.styleSheet.href) {
      return absolutifyURLs(importStringified, rule2.styleSheet.href);
    }
    return importStringified;
  } else {
    let ruleStringified = rule2.cssText;
    if (isCSSStyleRule(rule2) && rule2.selectorText.includes(":")) {
      ruleStringified = fixSafariColons(ruleStringified);
    }
    if (sheetHref) {
      return absolutifyURLs(ruleStringified, sheetHref);
    }
    return ruleStringified;
  }
}
function fixSafariColons(cssStringified) {
  const regex = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return cssStringified.replace(regex, "$1\\$2");
}
function isCSSImportRule(rule2) {
  return "styleSheet" in rule2;
}
function isCSSStyleRule(rule2) {
  return "selectorText" in rule2;
}
class Mirror {
  constructor() {
    __publicField(this, "idNodeMap", /* @__PURE__ */ new Map());
    __publicField(this, "nodeMetaMap", /* @__PURE__ */ new WeakMap());
  }
  getId(n) {
    var _a;
    if (!n) return -1;
    const id = (_a = this.getMeta(n)) == null ? void 0 : _a.id;
    return id != null ? id : -1;
  }
  getNode(id) {
    return this.idNodeMap.get(id) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(n) {
    return this.nodeMetaMap.get(n) || null;
  }
  // removes the node from idNodeMap
  // doesn't remove the node from nodeMetaMap
  removeNodeFromMap(n) {
    const id = this.getId(n);
    this.idNodeMap.delete(id);
    if (n.childNodes) {
      n.childNodes.forEach(
        (childNode) => this.removeNodeFromMap(childNode)
      );
    }
  }
  has(id) {
    return this.idNodeMap.has(id);
  }
  hasNode(node2) {
    return this.nodeMetaMap.has(node2);
  }
  add(n, meta) {
    const id = meta.id;
    this.idNodeMap.set(id, n);
    this.nodeMetaMap.set(n, meta);
  }
  replace(id, n) {
    const oldNode = this.getNode(id);
    if (oldNode) {
      const meta = this.nodeMetaMap.get(oldNode);
      if (meta) this.nodeMetaMap.set(n, meta);
    }
    this.idNodeMap.set(id, n);
  }
  reset() {
    this.idNodeMap = /* @__PURE__ */ new Map();
    this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
  }
}
function createMirror() {
  return new Mirror();
}
function maskInputValue({
  element,
  maskInputOptions,
  tagName,
  type,
  value,
  maskInputFn
}) {
  let text = value || "";
  const actualType = type && toLowerCase(type);
  if (maskInputOptions[tagName.toLowerCase()] || actualType && maskInputOptions[actualType]) {
    if (maskInputFn) {
      text = maskInputFn(text, element);
    } else {
      text = "*".repeat(text.length);
    }
  }
  return text;
}
function toLowerCase(str) {
  return str.toLowerCase();
}
const ORIGINAL_ATTRIBUTE_NAME = "__rrweb_original__";
function is2DCanvasBlank(canvas) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return true;
  const chunkSize = 50;
  for (let x2 = 0; x2 < canvas.width; x2 += chunkSize) {
    for (let y = 0; y < canvas.height; y += chunkSize) {
      const getImageData = ctx.getImageData;
      const originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData ? getImageData[ORIGINAL_ATTRIBUTE_NAME] : getImageData;
      const pixelBuffer = new Uint32Array(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        originalGetImageData.call(
          ctx,
          x2,
          y,
          Math.min(chunkSize, canvas.width - x2),
          Math.min(chunkSize, canvas.height - y)
        ).data.buffer
      );
      if (pixelBuffer.some((pixel) => pixel !== 0)) return false;
    }
  }
  return true;
}
function isNodeMetaEqual(a, b) {
  if (!a || !b || a.type !== b.type) return false;
  if (a.type === NodeType.Document)
    return a.compatMode === b.compatMode;
  else if (a.type === NodeType.DocumentType)
    return a.name === b.name && a.publicId === b.publicId && a.systemId === b.systemId;
  else if (a.type === NodeType.Comment || a.type === NodeType.Text || a.type === NodeType.CDATA)
    return a.textContent === b.textContent;
  else if (a.type === NodeType.Element)
    return a.tagName === b.tagName && JSON.stringify(a.attributes) === JSON.stringify(b.attributes) && a.isSVG === b.isSVG && a.needBlock === b.needBlock;
  return false;
}
function getInputType(element) {
  const type = element.type;
  return element.hasAttribute("data-rr-is-password") ? "password" : type ? (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    toLowerCase(type)
  ) : null;
}
function extractFileExtension(path, baseURL) {
  var _a;
  let url;
  try {
    url = new URL(path, baseURL != null ? baseURL : window.location.href);
  } catch (err) {
    return null;
  }
  const regex = /\.([0-9a-z]+)(?:$)/i;
  const match = url.pathname.match(regex);
  return (_a = match == null ? void 0 : match[1]) != null ? _a : null;
}
function extractOrigin(url) {
  let origin = "";
  if (url.indexOf("//") > -1) {
    origin = url.split("/").slice(0, 3).join("/");
  } else {
    origin = url.split("/")[0];
  }
  origin = origin.split("?")[0];
  return origin;
}
const URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
const URL_PROTOCOL_MATCH = /^(?:[a-z+]+:)?\/\//i;
const URL_WWW_MATCH = /^www\..*/i;
const DATA_URI = /^(data:)([^,]*),(.*)/i;
function absolutifyURLs(cssText, href) {
  return (cssText || "").replace(
    URL_IN_CSS_REF,
    (origin, quote1, path1, quote2, path2, path3) => {
      const filePath = path1 || path2 || path3;
      const maybeQuote = quote1 || quote2 || "";
      if (!filePath) {
        return origin;
      }
      if (URL_PROTOCOL_MATCH.test(filePath) || URL_WWW_MATCH.test(filePath)) {
        return `url(${maybeQuote}${filePath}${maybeQuote})`;
      }
      if (DATA_URI.test(filePath)) {
        return `url(${maybeQuote}${filePath}${maybeQuote})`;
      }
      if (filePath[0] === "/") {
        return `url(${maybeQuote}${extractOrigin(href) + filePath}${maybeQuote})`;
      }
      const stack = href.split("/");
      const parts = filePath.split("/");
      stack.pop();
      for (const part of parts) {
        if (part === ".") {
          continue;
        } else if (part === "..") {
          stack.pop();
        } else {
          stack.push(part);
        }
      }
      return `url(${maybeQuote}${stack.join("/")}${maybeQuote})`;
    }
  );
}
function normalizeCssString(cssText, _testNoPxNorm = false) {
  if (_testNoPxNorm) {
    return cssText.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "");
  } else {
    return cssText.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "").replace(/0px/g, "0");
  }
}
function splitCssText(cssText, style, _testNoPxNorm = false) {
  const childNodes2 = Array.from(style.childNodes);
  const splits = [];
  let iterCount = 0;
  if (childNodes2.length > 1 && cssText && typeof cssText === "string") {
    let cssTextNorm = normalizeCssString(cssText, _testNoPxNorm);
    const normFactor = cssTextNorm.length / cssText.length;
    for (let i = 1; i < childNodes2.length; i++) {
      if (childNodes2[i].textContent && typeof childNodes2[i].textContent === "string") {
        const textContentNorm = normalizeCssString(
          childNodes2[i].textContent,
          _testNoPxNorm
        );
        const jLimit = 100;
        let j = 3;
        for (; j < textContentNorm.length; j++) {
          if (
            // keep consuming css identifiers (to get a decent chunk more quickly)
            textContentNorm[j].match(/[a-zA-Z0-9]/) || // substring needs to be unique to this section
            textContentNorm.indexOf(textContentNorm.substring(0, j), 1) !== -1
          ) {
            continue;
          }
          break;
        }
        for (; j < textContentNorm.length; j++) {
          let startSubstring = textContentNorm.substring(0, j);
          let cssNormSplits = cssTextNorm.split(startSubstring);
          let splitNorm = -1;
          if (cssNormSplits.length === 2) {
            splitNorm = cssNormSplits[0].length;
          } else if (cssNormSplits.length > 2 && cssNormSplits[0] === "" && childNodes2[i - 1].textContent !== "") {
            splitNorm = cssTextNorm.indexOf(startSubstring, 1);
          } else if (cssNormSplits.length === 1) {
            startSubstring = startSubstring.substring(
              0,
              startSubstring.length - 1
            );
            cssNormSplits = cssTextNorm.split(startSubstring);
            if (cssNormSplits.length <= 1) {
              splits.push(cssText);
              return splits;
            }
            j = jLimit + 1;
          } else if (j === textContentNorm.length - 1) {
            splitNorm = cssTextNorm.indexOf(startSubstring);
          }
          if (cssNormSplits.length >= 2 && j > jLimit) {
            const prevTextContent = childNodes2[i - 1].textContent;
            if (prevTextContent && typeof prevTextContent === "string") {
              const prevMinLength = normalizeCssString(prevTextContent).length;
              splitNorm = cssTextNorm.indexOf(startSubstring, prevMinLength);
            }
            if (splitNorm === -1) {
              splitNorm = cssNormSplits[0].length;
            }
          }
          if (splitNorm !== -1) {
            let k = Math.floor(splitNorm / normFactor);
            for (; k > 0 && k < cssText.length; ) {
              iterCount += 1;
              if (iterCount > 50 * childNodes2.length) {
                splits.push(cssText);
                return splits;
              }
              const normPart = normalizeCssString(
                cssText.substring(0, k),
                _testNoPxNorm
              );
              if (normPart.length === splitNorm) {
                splits.push(cssText.substring(0, k));
                cssText = cssText.substring(k);
                cssTextNorm = cssTextNorm.substring(splitNorm);
                break;
              } else if (normPart.length < splitNorm) {
                k += Math.max(
                  1,
                  Math.floor((splitNorm - normPart.length) / normFactor)
                );
              } else {
                k -= Math.max(
                  1,
                  Math.floor((normPart.length - splitNorm) * normFactor)
                );
              }
            }
            break;
          }
        }
      }
    }
  }
  splits.push(cssText);
  return splits;
}
function markCssSplits(cssText, style) {
  return splitCssText(cssText, style).join("/* rr_split */");
}
let _id = 1;
const tagNameRegex = new RegExp("[^a-z0-9-_:]");
const IGNORED_NODE = -2;
function genId() {
  return _id++;
}
function getValidTagName(element) {
  if (element instanceof HTMLFormElement) {
    return "form";
  }
  const processedTagName = toLowerCase(element.tagName);
  if (tagNameRegex.test(processedTagName)) {
    return "div";
  }
  return processedTagName;
}
let canvasService;
let canvasCtx;
const SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
const SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
  if (attributeValue.trim() === "") {
    return attributeValue;
  }
  let pos = 0;
  function collectCharacters(regEx) {
    let chars;
    const match = regEx.exec(attributeValue.substring(pos));
    if (match) {
      chars = match[0];
      pos += chars.length;
      return chars;
    }
    return "";
  }
  const output = [];
  while (true) {
    collectCharacters(SRCSET_COMMAS_OR_SPACES);
    if (pos >= attributeValue.length) {
      break;
    }
    let url = collectCharacters(SRCSET_NOT_SPACES);
    if (url.slice(-1) === ",") {
      url = absoluteToDoc(doc, url.substring(0, url.length - 1));
      output.push(url);
    } else {
      let descriptorsStr = "";
      url = absoluteToDoc(doc, url);
      let inParens = false;
      while (true) {
        const c = attributeValue.charAt(pos);
        if (c === "") {
          output.push((url + descriptorsStr).trim());
          break;
        } else if (!inParens) {
          if (c === ",") {
            pos += 1;
            output.push((url + descriptorsStr).trim());
            break;
          } else if (c === "(") {
            inParens = true;
          }
        } else {
          if (c === ")") {
            inParens = false;
          }
        }
        descriptorsStr += c;
        pos += 1;
      }
    }
  }
  return output.join(", ");
}
const cachedDocument = /* @__PURE__ */ new WeakMap();
function absoluteToDoc(doc, attributeValue) {
  if (!attributeValue || attributeValue.trim() === "") {
    return attributeValue;
  }
  return getHref(doc, attributeValue);
}
function isSVGElement(el) {
  return Boolean(el.tagName === "svg" || el.ownerSVGElement);
}
function getHref(doc, customHref) {
  let a = cachedDocument.get(doc);
  if (!a) {
    a = doc.createElement("a");
    cachedDocument.set(doc, a);
  }
  if (!customHref) {
    customHref = "";
  } else if (customHref.startsWith("blob:") || customHref.startsWith("data:")) {
    return customHref;
  }
  a.setAttribute("href", customHref);
  return a.href;
}
function transformAttribute(doc, tagName, name, value) {
  if (!value) {
    return value;
  }
  if (name === "src" || name === "href" && !(tagName === "use" && value[0] === "#")) {
    return absoluteToDoc(doc, value);
  } else if (name === "xlink:href" && value[0] !== "#") {
    return absoluteToDoc(doc, value);
  } else if (name === "background" && (tagName === "table" || tagName === "td" || tagName === "th")) {
    return absoluteToDoc(doc, value);
  } else if (name === "srcset") {
    return getAbsoluteSrcsetString(doc, value);
  } else if (name === "style") {
    return absolutifyURLs(value, getHref(doc));
  } else if (tagName === "object" && name === "data") {
    return absoluteToDoc(doc, value);
  }
  return value;
}
function ignoreAttribute(tagName, name, _value) {
  return (tagName === "video" || tagName === "audio") && name === "autoplay";
}
function _isBlockedElement(element, blockClass, blockSelector) {
  try {
    if (typeof blockClass === "string") {
      if (element.classList.contains(blockClass)) {
        return true;
      }
    } else {
      for (let eIndex = element.classList.length; eIndex--; ) {
        const className = element.classList[eIndex];
        if (blockClass.test(className)) {
          return true;
        }
      }
    }
    if (blockSelector) {
      return element.matches(blockSelector);
    }
  } catch (e) {
  }
  return false;
}
function classMatchesRegex(node2, regex, checkAncestors) {
  if (!node2) return false;
  if (node2.nodeType !== node2.ELEMENT_NODE) {
    if (!checkAncestors) return false;
    return classMatchesRegex(index.parentNode(node2), regex, checkAncestors);
  }
  for (let eIndex = node2.classList.length; eIndex--; ) {
    const className = node2.classList[eIndex];
    if (regex.test(className)) {
      return true;
    }
  }
  if (!checkAncestors) return false;
  return classMatchesRegex(index.parentNode(node2), regex, checkAncestors);
}
function needMaskingText(node2, maskTextClass, maskTextSelector, checkAncestors) {
  let el;
  if (isElement(node2)) {
    el = node2;
    if (!index.childNodes(el).length) {
      return false;
    }
  } else if (index.parentElement(node2) === null) {
    return false;
  } else {
    el = index.parentElement(node2);
  }
  try {
    if (typeof maskTextClass === "string") {
      if (checkAncestors) {
        if (el.closest(`.${maskTextClass}`)) return true;
      } else {
        if (el.classList.contains(maskTextClass)) return true;
      }
    } else {
      if (classMatchesRegex(el, maskTextClass, checkAncestors)) return true;
    }
    if (maskTextSelector) {
      if (checkAncestors) {
        if (el.closest(maskTextSelector)) return true;
      } else {
        if (el.matches(maskTextSelector)) return true;
      }
    }
  } catch (e) {
  }
  return false;
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
  const win = iframeEl.contentWindow;
  if (!win) {
    return;
  }
  let fired = false;
  let readyState;
  try {
    readyState = win.document.readyState;
  } catch (error) {
    return;
  }
  if (readyState !== "complete") {
    const timer = setTimeout(() => {
      if (!fired) {
        listener();
        fired = true;
      }
    }, iframeLoadTimeout);
    iframeEl.addEventListener("load", () => {
      clearTimeout(timer);
      fired = true;
      listener();
    });
    return;
  }
  const blankUrl = "about:blank";
  if (win.location.href !== blankUrl || iframeEl.src === blankUrl || iframeEl.src === "") {
    setTimeout(listener, 0);
    return iframeEl.addEventListener("load", listener);
  }
  iframeEl.addEventListener("load", listener);
}
function onceStylesheetLoaded(link, listener, styleSheetLoadTimeout) {
  let fired = false;
  let styleSheetLoaded;
  try {
    styleSheetLoaded = link.sheet;
  } catch (error) {
    return;
  }
  if (styleSheetLoaded) return;
  const timer = setTimeout(() => {
    if (!fired) {
      listener();
      fired = true;
    }
  }, styleSheetLoadTimeout);
  link.addEventListener("load", () => {
    clearTimeout(timer);
    fired = true;
    listener();
  });
}
function serializeNode(n, options) {
  const {
    doc,
    mirror,
    blockClass,
    blockSelector,
    needsMask,
    inlineStylesheet,
    maskInputOptions = {},
    maskTextFn,
    maskInputFn,
    dataURLOptions = {},
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement = false,
    cssCaptured = false
  } = options;
  const rootId = getRootId(doc, mirror);
  switch (n.nodeType) {
    case n.DOCUMENT_NODE:
      if (n.compatMode !== "CSS1Compat") {
        return {
          type: NodeType.Document,
          childNodes: [],
          compatMode: n.compatMode
          // probably "BackCompat"
        };
      } else {
        return {
          type: NodeType.Document,
          childNodes: []
        };
      }
    case n.DOCUMENT_TYPE_NODE:
      return {
        type: NodeType.DocumentType,
        name: n.name,
        publicId: n.publicId,
        systemId: n.systemId,
        rootId
      };
    case n.ELEMENT_NODE:
      return serializeElementNode(n, {
        doc,
        blockClass,
        blockSelector,
        inlineStylesheet,
        maskInputOptions,
        maskInputFn,
        dataURLOptions,
        inlineImages,
        recordCanvas,
        keepIframeSrcFn,
        newlyAddedElement,
        rootId
      });
    case n.TEXT_NODE:
      return serializeTextNode(n, {
        doc,
        needsMask,
        maskTextFn,
        rootId,
        cssCaptured
      });
    case n.CDATA_SECTION_NODE:
      return {
        type: NodeType.CDATA,
        textContent: "",
        rootId
      };
    case n.COMMENT_NODE:
      return {
        type: NodeType.Comment,
        textContent: index.textContent(n) || "",
        rootId
      };
    default:
      return false;
  }
}
function getRootId(doc, mirror) {
  if (!mirror.hasNode(doc)) return void 0;
  const docId = mirror.getId(doc);
  return docId === 1 ? void 0 : docId;
}
function serializeTextNode(n, options) {
  const { needsMask, maskTextFn, rootId, cssCaptured } = options;
  const parent = index.parentNode(n);
  const parentTagName = parent && parent.tagName;
  let textContent2 = "";
  const isStyle = parentTagName === "STYLE" ? true : void 0;
  const isScript = parentTagName === "SCRIPT" ? true : void 0;
  if (isScript) {
    textContent2 = "SCRIPT_PLACEHOLDER";
  } else if (!cssCaptured) {
    textContent2 = index.textContent(n);
    if (isStyle && textContent2) {
      textContent2 = absolutifyURLs(textContent2, getHref(options.doc));
    }
  }
  if (!isStyle && !isScript && textContent2 && needsMask) {
    textContent2 = maskTextFn ? maskTextFn(textContent2, index.parentElement(n)) : textContent2.replace(/[\S]/g, "*");
  }
  return {
    type: NodeType.Text,
    textContent: textContent2 || "",
    rootId
  };
}
function serializeElementNode(n, options) {
  const {
    doc,
    blockClass,
    blockSelector,
    inlineStylesheet,
    maskInputOptions = {},
    maskInputFn,
    dataURLOptions = {},
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement = false,
    rootId
  } = options;
  const needBlock = _isBlockedElement(n, blockClass, blockSelector);
  const tagName = getValidTagName(n);
  let attributes = {};
  const len = n.attributes.length;
  for (let i = 0; i < len; i++) {
    const attr = n.attributes[i];
    if (!ignoreAttribute(tagName, attr.name, attr.value)) {
      attributes[attr.name] = transformAttribute(
        doc,
        tagName,
        toLowerCase(attr.name),
        attr.value
      );
    }
  }
  if (tagName === "link" && inlineStylesheet) {
    const stylesheet = Array.from(doc.styleSheets).find((s) => {
      return s.href === n.href;
    });
    let cssText = null;
    if (stylesheet) {
      cssText = stringifyStylesheet(stylesheet);
    }
    if (cssText) {
      delete attributes.rel;
      delete attributes.href;
      attributes._cssText = cssText;
    }
  }
  if (tagName === "style" && n.sheet) {
    let cssText = stringifyStylesheet(
      n.sheet
    );
    if (cssText) {
      if (n.childNodes.length > 1) {
        cssText = markCssSplits(cssText, n);
      }
      attributes._cssText = cssText;
    }
  }
  if (tagName === "input" || tagName === "textarea" || tagName === "select") {
    const value = n.value;
    const checked = n.checked;
    if (attributes.type !== "radio" && attributes.type !== "checkbox" && attributes.type !== "submit" && attributes.type !== "button" && value) {
      attributes.value = maskInputValue({
        element: n,
        type: getInputType(n),
        tagName,
        value,
        maskInputOptions,
        maskInputFn
      });
    } else if (checked) {
      attributes.checked = checked;
    }
  }
  if (tagName === "option") {
    if (n.selected && !maskInputOptions["select"]) {
      attributes.selected = true;
    } else {
      delete attributes.selected;
    }
  }
  if (tagName === "dialog" && n.open) {
    attributes.rr_open_mode = n.matches("dialog:modal") ? "modal" : "non-modal";
  }
  if (tagName === "canvas" && recordCanvas) {
    if (n.__context === "2d") {
      if (!is2DCanvasBlank(n)) {
        attributes.rr_dataURL = n.toDataURL(
          dataURLOptions.type,
          dataURLOptions.quality
        );
      }
    } else if (!("__context" in n)) {
      const canvasDataURL = n.toDataURL(
        dataURLOptions.type,
        dataURLOptions.quality
      );
      const blankCanvas = doc.createElement("canvas");
      blankCanvas.width = n.width;
      blankCanvas.height = n.height;
      const blankCanvasDataURL = blankCanvas.toDataURL(
        dataURLOptions.type,
        dataURLOptions.quality
      );
      if (canvasDataURL !== blankCanvasDataURL) {
        attributes.rr_dataURL = canvasDataURL;
      }
    }
  }
  if (tagName === "img" && inlineImages) {
    if (!canvasService) {
      canvasService = doc.createElement("canvas");
      canvasCtx = canvasService.getContext("2d");
    }
    const image = n;
    const imageSrc = image.currentSrc || image.getAttribute("src") || "<unknown-src>";
    const priorCrossOrigin = image.crossOrigin;
    const recordInlineImage = () => {
      image.removeEventListener("load", recordInlineImage);
      try {
        canvasService.width = image.naturalWidth;
        canvasService.height = image.naturalHeight;
        canvasCtx.drawImage(image, 0, 0);
        attributes.rr_dataURL = canvasService.toDataURL(
          dataURLOptions.type,
          dataURLOptions.quality
        );
      } catch (err) {
        if (image.crossOrigin !== "anonymous") {
          image.crossOrigin = "anonymous";
          if (image.complete && image.naturalWidth !== 0)
            recordInlineImage();
          else image.addEventListener("load", recordInlineImage);
          return;
        } else {
          console.warn(
            `Cannot inline img src=${imageSrc}! Error: ${err}`
          );
        }
      }
      if (image.crossOrigin === "anonymous") {
        priorCrossOrigin ? attributes.crossOrigin = priorCrossOrigin : image.removeAttribute("crossorigin");
      }
    };
    if (image.complete && image.naturalWidth !== 0) recordInlineImage();
    else image.addEventListener("load", recordInlineImage);
  }
  if (tagName === "audio" || tagName === "video") {
    const mediaAttributes = attributes;
    mediaAttributes.rr_mediaState = n.paused ? "paused" : "played";
    mediaAttributes.rr_mediaCurrentTime = n.currentTime;
    mediaAttributes.rr_mediaPlaybackRate = n.playbackRate;
    mediaAttributes.rr_mediaMuted = n.muted;
    mediaAttributes.rr_mediaLoop = n.loop;
    mediaAttributes.rr_mediaVolume = n.volume;
  }
  if (!newlyAddedElement) {
    if (n.scrollLeft) {
      attributes.rr_scrollLeft = n.scrollLeft;
    }
    if (n.scrollTop) {
      attributes.rr_scrollTop = n.scrollTop;
    }
  }
  if (needBlock) {
    const { width, height } = n.getBoundingClientRect();
    attributes = {
      class: attributes.class,
      rr_width: `${width}px`,
      rr_height: `${height}px`
    };
  }
  if (tagName === "iframe" && !keepIframeSrcFn(attributes.src)) {
    if (!n.contentDocument) {
      attributes.rr_src = attributes.src;
    }
    delete attributes.src;
  }
  let isCustomElement;
  try {
    if (customElements.get(tagName)) isCustomElement = true;
  } catch (e) {
  }
  return {
    type: NodeType.Element,
    tagName,
    attributes,
    childNodes: [],
    isSVG: isSVGElement(n) || void 0,
    needBlock,
    rootId,
    isCustom: isCustomElement
  };
}
function lowerIfExists(maybeAttr) {
  if (maybeAttr === void 0 || maybeAttr === null) {
    return "";
  } else {
    return maybeAttr.toLowerCase();
  }
}
function slimDOMExcluded(sn, slimDOMOptions) {
  if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
    return true;
  } else if (sn.type === NodeType.Element) {
    if (slimDOMOptions.script && // script tag
    (sn.tagName === "script" || // (module)preload link
    sn.tagName === "link" && (sn.attributes.rel === "preload" && sn.attributes.as === "script" || sn.attributes.rel === "modulepreload") || // prefetch link
    sn.tagName === "link" && sn.attributes.rel === "prefetch" && typeof sn.attributes.href === "string" && extractFileExtension(sn.attributes.href) === "js")) {
      return true;
    } else if (slimDOMOptions.headFavicon && (sn.tagName === "link" && sn.attributes.rel === "shortcut icon" || sn.tagName === "meta" && (lowerIfExists(sn.attributes.name).match(
      /^msapplication-tile(image|color)$/
    ) || lowerIfExists(sn.attributes.name) === "application-name" || lowerIfExists(sn.attributes.rel) === "icon" || lowerIfExists(sn.attributes.rel) === "apple-touch-icon" || lowerIfExists(sn.attributes.rel) === "shortcut icon"))) {
      return true;
    } else if (sn.tagName === "meta") {
      if (slimDOMOptions.headMetaDescKeywords && lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
        return true;
      } else if (slimDOMOptions.headMetaSocial && (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) || // og = opengraph (facebook)
      lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) || lowerIfExists(sn.attributes.name) === "pinterest")) {
        return true;
      } else if (slimDOMOptions.headMetaRobots && (lowerIfExists(sn.attributes.name) === "robots" || lowerIfExists(sn.attributes.name) === "googlebot" || lowerIfExists(sn.attributes.name) === "bingbot")) {
        return true;
      } else if (slimDOMOptions.headMetaHttpEquiv && sn.attributes["http-equiv"] !== void 0) {
        return true;
      } else if (slimDOMOptions.headMetaAuthorship && (lowerIfExists(sn.attributes.name) === "author" || lowerIfExists(sn.attributes.name) === "generator" || lowerIfExists(sn.attributes.name) === "framework" || lowerIfExists(sn.attributes.name) === "publisher" || lowerIfExists(sn.attributes.name) === "progid" || lowerIfExists(sn.attributes.property).match(/^article:/) || lowerIfExists(sn.attributes.property).match(/^product:/))) {
        return true;
      } else if (slimDOMOptions.headMetaVerification && (lowerIfExists(sn.attributes.name) === "google-site-verification" || lowerIfExists(sn.attributes.name) === "yandex-verification" || lowerIfExists(sn.attributes.name) === "csrf-token" || lowerIfExists(sn.attributes.name) === "p:domain_verify" || lowerIfExists(sn.attributes.name) === "verify-v1" || lowerIfExists(sn.attributes.name) === "verification" || lowerIfExists(sn.attributes.name) === "shopify-checkout-api-token")) {
        return true;
      }
    }
  }
  return false;
}
function serializeNodeWithId(n, options) {
  const {
    doc,
    mirror,
    blockClass,
    blockSelector,
    maskTextClass,
    maskTextSelector,
    skipChild = false,
    inlineStylesheet = true,
    maskInputOptions = {},
    maskTextFn,
    maskInputFn,
    slimDOMOptions,
    dataURLOptions = {},
    inlineImages = false,
    recordCanvas = false,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout = 5e3,
    onStylesheetLoad,
    stylesheetLoadTimeout = 5e3,
    keepIframeSrcFn = () => false,
    newlyAddedElement = false,
    cssCaptured = false
  } = options;
  let { needsMask } = options;
  let { preserveWhiteSpace = true } = options;
  if (!needsMask) {
    const checkAncestors = needsMask === void 0;
    needsMask = needMaskingText(
      n,
      maskTextClass,
      maskTextSelector,
      checkAncestors
    );
  }
  const _serializedNode = serializeNode(n, {
    doc,
    mirror,
    blockClass,
    blockSelector,
    needsMask,
    inlineStylesheet,
    maskInputOptions,
    maskTextFn,
    maskInputFn,
    dataURLOptions,
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement,
    cssCaptured
  });
  if (!_serializedNode) {
    console.warn(n, "not serialized");
    return null;
  }
  let id;
  if (mirror.hasNode(n)) {
    id = mirror.getId(n);
  } else if (slimDOMExcluded(_serializedNode, slimDOMOptions) || !preserveWhiteSpace && _serializedNode.type === NodeType.Text && !_serializedNode.textContent.replace(/^\s+|\s+$/gm, "").length) {
    id = IGNORED_NODE;
  } else {
    id = genId();
  }
  const serializedNode = Object.assign(_serializedNode, { id });
  mirror.add(n, serializedNode);
  if (id === IGNORED_NODE) {
    return null;
  }
  if (onSerialize) {
    onSerialize(n);
  }
  let recordChild = !skipChild;
  if (serializedNode.type === NodeType.Element) {
    recordChild = recordChild && !serializedNode.needBlock;
    delete serializedNode.needBlock;
    const shadowRootEl = index.shadowRoot(n);
    if (shadowRootEl && isNativeShadowDom(shadowRootEl)) {
      serializedNode.isShadowHost = true;
      if (shadowRootEl.adoptedStyleSheets.length > 0) {
        serializedNode.chromaticAdoptedStylesheets = shadowRootEl.adoptedStyleSheets.map(
          (stylesheet) => stringifyStylesheet(stylesheet)
        );
      }
    }
  }
  if ((serializedNode.type === NodeType.Document || serializedNode.type === NodeType.Element) && recordChild) {
    if (slimDOMOptions.headWhitespace && serializedNode.type === NodeType.Element && serializedNode.tagName === "head") {
      preserveWhiteSpace = false;
    }
    const bypassOptions = {
      doc,
      mirror,
      blockClass,
      blockSelector,
      needsMask,
      maskTextClass,
      maskTextSelector,
      skipChild,
      inlineStylesheet,
      maskInputOptions,
      maskTextFn,
      maskInputFn,
      slimDOMOptions,
      dataURLOptions,
      inlineImages,
      recordCanvas,
      preserveWhiteSpace,
      onSerialize,
      onIframeLoad,
      iframeLoadTimeout,
      onStylesheetLoad,
      stylesheetLoadTimeout,
      keepIframeSrcFn,
      cssCaptured: false
    };
    if (serializedNode.type === NodeType.Element && serializedNode.tagName === "textarea" && serializedNode.attributes.value !== void 0) ;
    else {
      if (serializedNode.type === NodeType.Element && serializedNode.attributes._cssText !== void 0 && typeof serializedNode.attributes._cssText === "string") {
        bypassOptions.cssCaptured = true;
      }
      for (const childN of Array.from(index.childNodes(n))) {
        const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
        if (serializedChildNode) {
          serializedNode.childNodes.push(serializedChildNode);
        }
      }
    }
    let shadowRootEl = null;
    if (isElement(n) && (shadowRootEl = index.shadowRoot(n))) {
      for (const childN of Array.from(index.childNodes(shadowRootEl))) {
        const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
        if (serializedChildNode) {
          isNativeShadowDom(shadowRootEl) && (serializedChildNode.isShadow = true);
          serializedNode.childNodes.push(serializedChildNode);
        }
      }
    }
  }
  const parent = index.parentNode(n);
  if (parent && isShadowRoot(parent) && isNativeShadowDom(parent)) {
    serializedNode.isShadow = true;
  }
  if (serializedNode.type === NodeType.Element && serializedNode.tagName === "iframe") {
    onceIframeLoaded(
      n,
      () => {
        const iframeDoc = n.contentDocument;
        if (iframeDoc && onIframeLoad) {
          const serializedIframeNode = serializeNodeWithId(iframeDoc, {
            doc: iframeDoc,
            mirror,
            blockClass,
            blockSelector,
            needsMask,
            maskTextClass,
            maskTextSelector,
            skipChild: false,
            inlineStylesheet,
            maskInputOptions,
            maskTextFn,
            maskInputFn,
            slimDOMOptions,
            dataURLOptions,
            inlineImages,
            recordCanvas,
            preserveWhiteSpace,
            onSerialize,
            onIframeLoad,
            iframeLoadTimeout,
            onStylesheetLoad,
            stylesheetLoadTimeout,
            keepIframeSrcFn
          });
          if (serializedIframeNode) {
            onIframeLoad(
              n,
              serializedIframeNode
            );
          }
        }
      },
      iframeLoadTimeout
    );
  }
  if (serializedNode.type === NodeType.Element && serializedNode.tagName === "link" && typeof serializedNode.attributes.rel === "string" && (serializedNode.attributes.rel === "stylesheet" || serializedNode.attributes.rel === "preload" && typeof serializedNode.attributes.href === "string" && extractFileExtension(serializedNode.attributes.href) === "css")) {
    onceStylesheetLoaded(
      n,
      () => {
        if (onStylesheetLoad) {
          const serializedLinkNode = serializeNodeWithId(n, {
            doc,
            mirror,
            blockClass,
            blockSelector,
            needsMask,
            maskTextClass,
            maskTextSelector,
            skipChild: false,
            inlineStylesheet,
            maskInputOptions,
            maskTextFn,
            maskInputFn,
            slimDOMOptions,
            dataURLOptions,
            inlineImages,
            recordCanvas,
            preserveWhiteSpace,
            onSerialize,
            onIframeLoad,
            iframeLoadTimeout,
            onStylesheetLoad,
            stylesheetLoadTimeout,
            keepIframeSrcFn
          });
          if (serializedLinkNode) {
            onStylesheetLoad(
              n,
              serializedLinkNode
            );
          }
        }
      },
      stylesheetLoadTimeout
    );
  }
  return serializedNode;
}
function snapshot(n, options) {
  const {
    mirror = new Mirror(),
    blockClass = "rr-block",
    blockSelector = null,
    maskTextClass = "rr-mask",
    maskTextSelector = null,
    inlineStylesheet = true,
    inlineImages = false,
    recordCanvas = false,
    maskAllInputs = false,
    maskTextFn,
    maskInputFn,
    slimDOM = false,
    dataURLOptions,
    preserveWhiteSpace,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout,
    onStylesheetLoad,
    stylesheetLoadTimeout,
    keepIframeSrcFn = () => false
  } = options || {};
  const maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true,
    password: true
  } : maskAllInputs === false ? {
    password: true
  } : maskAllInputs;
  const slimDOMOptions = slimDOM === true || slimDOM === "all" ? (
    // if true: set of sensible options that should not throw away any information
    {
      script: true,
      comment: true,
      headFavicon: true,
      headWhitespace: true,
      headMetaDescKeywords: slimDOM === "all",
      // destructive
      headMetaSocial: true,
      headMetaRobots: true,
      headMetaHttpEquiv: true,
      headMetaAuthorship: true,
      headMetaVerification: true
    }
  ) : slimDOM === false ? {} : slimDOM;
  return serializeNodeWithId(n, {
    doc: n,
    mirror,
    blockClass,
    blockSelector,
    maskTextClass,
    maskTextSelector,
    skipChild: false,
    inlineStylesheet,
    maskInputOptions,
    maskTextFn,
    maskInputFn,
    slimDOMOptions,
    dataURLOptions,
    inlineImages,
    recordCanvas,
    preserveWhiteSpace,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout,
    onStylesheetLoad,
    stylesheetLoadTimeout,
    keepIframeSrcFn,
    newlyAddedElement: false
  });
}
function visitSnapshot(node2, onVisit) {
  function walk(current) {
    onVisit(current);
    if (current.type === NodeType.Document || current.type === NodeType.Element) {
      current.childNodes.forEach(walk);
    }
  }
  walk(node2);
}
function cleanupSnapshot() {
  _id = 1;
}
const MEDIA_SELECTOR = /(max|min)-device-(width|height)/;
const MEDIA_SELECTOR_GLOBAL = new RegExp(MEDIA_SELECTOR.source, "g");
const mediaSelectorPlugin = {
  postcssPlugin: "postcss-custom-selectors",
  prepare() {
    return {
      postcssPlugin: "postcss-custom-selectors",
      AtRule: function(atrule) {
        if (atrule.params.match(MEDIA_SELECTOR_GLOBAL)) {
          atrule.params = atrule.params.replace(MEDIA_SELECTOR_GLOBAL, "$1-$2");
        }
      }
    };
  }
};
const pseudoClassPlugin = {
  postcssPlugin: "postcss-hover-classes",
  prepare: function() {
    const fixed = [];
    return {
      Rule: function(rule2) {
        if (fixed.indexOf(rule2) !== -1) {
          return;
        }
        fixed.push(rule2);
        rule2.selectors.forEach(function(selector) {
          if (selector.includes(":hover")) {
            rule2.selector += ",\n" + selector.replace(/:hover/g, ".\\:hover");
          }
        });
      }
    };
  }
};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var picocolors_browser = { exports: {} };
var x = String;
var create = function() {
  return { isColorSupported: false, reset: x, bold: x, dim: x, italic: x, underline: x, inverse: x, hidden: x, strikethrough: x, black: x, red: x, green: x, yellow: x, blue: x, magenta: x, cyan: x, white: x, gray: x, bgBlack: x, bgRed: x, bgGreen: x, bgYellow: x, bgBlue: x, bgMagenta: x, bgCyan: x, bgWhite: x };
};
picocolors_browser.exports = create();
picocolors_browser.exports.createColors = create;
var picocolors_browserExports = picocolors_browser.exports;
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
let pico = picocolors_browserExports;
let terminalHighlight$1 = require$$2;
let CssSyntaxError$3 = class CssSyntaxError extends Error {
  constructor(message, line, column, source, file, plugin2) {
    super(message);
    this.name = "CssSyntaxError";
    this.reason = message;
    if (file) {
      this.file = file;
    }
    if (source) {
      this.source = source;
    }
    if (plugin2) {
      this.plugin = plugin2;
    }
    if (typeof line !== "undefined" && typeof column !== "undefined") {
      if (typeof line === "number") {
        this.line = line;
        this.column = column;
      } else {
        this.line = line.line;
        this.column = line.column;
        this.endLine = column.line;
        this.endColumn = column.column;
      }
    }
    this.setMessage();
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CssSyntaxError);
    }
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "";
    this.message += this.file ? this.file : "<css input>";
    if (typeof this.line !== "undefined") {
      this.message += ":" + this.line + ":" + this.column;
    }
    this.message += ": " + this.reason;
  }
  showSourceCode(color) {
    if (!this.source) return "";
    let css = this.source;
    if (color == null) color = pico.isColorSupported;
    if (terminalHighlight$1) {
      if (color) css = terminalHighlight$1(css);
    }
    let lines = css.split(/\r?\n/);
    let start = Math.max(this.line - 3, 0);
    let end = Math.min(this.line + 2, lines.length);
    let maxWidth = String(end).length;
    let mark, aside;
    if (color) {
      let { bold, gray, red } = pico.createColors(true);
      mark = (text) => bold(red(text));
      aside = (text) => gray(text);
    } else {
      mark = aside = (str) => str;
    }
    return lines.slice(start, end).map((line, index2) => {
      let number = start + 1 + index2;
      let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
      if (number === this.line) {
        let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return mark(">") + aside(gutter) + line + "\n " + spacing + mark("^");
      }
      return " " + aside(gutter) + line;
    }).join("\n");
  }
  toString() {
    let code = this.showSourceCode();
    if (code) {
      code = "\n\n" + code + "\n";
    }
    return this.name + ": " + this.message + code;
  }
};
var cssSyntaxError = CssSyntaxError$3;
CssSyntaxError$3.default = CssSyntaxError$3;
var symbols = {};
symbols.isClean = Symbol("isClean");
symbols.my = Symbol("my");
const DEFAULT_RAW = {
  after: "\n",
  beforeClose: "\n",
  beforeComment: "\n",
  beforeDecl: "\n",
  beforeOpen: " ",
  beforeRule: "\n",
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: false
};
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
let Stringifier$2 = class Stringifier {
  constructor(builder) {
    this.builder = builder;
  }
  atrule(node2, semicolon) {
    let name = "@" + node2.name;
    let params = node2.params ? this.rawValue(node2, "params") : "";
    if (typeof node2.raws.afterName !== "undefined") {
      name += node2.raws.afterName;
    } else if (params) {
      name += " ";
    }
    if (node2.nodes) {
      this.block(node2, name + params);
    } else {
      let end = (node2.raws.between || "") + (semicolon ? ";" : "");
      this.builder(name + params + end, node2);
    }
  }
  beforeAfter(node2, detect) {
    let value;
    if (node2.type === "decl") {
      value = this.raw(node2, null, "beforeDecl");
    } else if (node2.type === "comment") {
      value = this.raw(node2, null, "beforeComment");
    } else if (detect === "before") {
      value = this.raw(node2, null, "beforeRule");
    } else {
      value = this.raw(node2, null, "beforeClose");
    }
    let buf = node2.parent;
    let depth = 0;
    while (buf && buf.type !== "root") {
      depth += 1;
      buf = buf.parent;
    }
    if (value.includes("\n")) {
      let indent = this.raw(node2, null, "indent");
      if (indent.length) {
        for (let step = 0; step < depth; step++) value += indent;
      }
    }
    return value;
  }
  block(node2, start) {
    let between = this.raw(node2, "between", "beforeOpen");
    this.builder(start + between + "{", node2, "start");
    let after;
    if (node2.nodes && node2.nodes.length) {
      this.body(node2);
      after = this.raw(node2, "after");
    } else {
      after = this.raw(node2, "after", "emptyBody");
    }
    if (after) this.builder(after);
    this.builder("}", node2, "end");
  }
  body(node2) {
    let last = node2.nodes.length - 1;
    while (last > 0) {
      if (node2.nodes[last].type !== "comment") break;
      last -= 1;
    }
    let semicolon = this.raw(node2, "semicolon");
    for (let i = 0; i < node2.nodes.length; i++) {
      let child = node2.nodes[i];
      let before = this.raw(child, "before");
      if (before) this.builder(before);
      this.stringify(child, last !== i || semicolon);
    }
  }
  comment(node2) {
    let left = this.raw(node2, "left", "commentLeft");
    let right = this.raw(node2, "right", "commentRight");
    this.builder("/*" + left + node2.text + right + "*/", node2);
  }
  decl(node2, semicolon) {
    let between = this.raw(node2, "between", "colon");
    let string = node2.prop + between + this.rawValue(node2, "value");
    if (node2.important) {
      string += node2.raws.important || " !important";
    }
    if (semicolon) string += ";";
    this.builder(string, node2);
  }
  document(node2) {
    this.body(node2);
  }
  raw(node2, own, detect) {
    let value;
    if (!detect) detect = own;
    if (own) {
      value = node2.raws[own];
      if (typeof value !== "undefined") return value;
    }
    let parent = node2.parent;
    if (detect === "before") {
      if (!parent || parent.type === "root" && parent.first === node2) {
        return "";
      }
      if (parent && parent.type === "document") {
        return "";
      }
    }
    if (!parent) return DEFAULT_RAW[detect];
    let root2 = node2.root();
    if (!root2.rawCache) root2.rawCache = {};
    if (typeof root2.rawCache[detect] !== "undefined") {
      return root2.rawCache[detect];
    }
    if (detect === "before" || detect === "after") {
      return this.beforeAfter(node2, detect);
    } else {
      let method = "raw" + capitalize(detect);
      if (this[method]) {
        value = this[method](root2, node2);
      } else {
        root2.walk((i) => {
          value = i.raws[own];
          if (typeof value !== "undefined") return false;
        });
      }
    }
    if (typeof value === "undefined") value = DEFAULT_RAW[detect];
    root2.rawCache[detect] = value;
    return value;
  }
  rawBeforeClose(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length > 0) {
        if (typeof i.raws.after !== "undefined") {
          value = i.raws.after;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      }
    });
    if (value) value = value.replace(/\S/g, "");
    return value;
  }
  rawBeforeComment(root2, node2) {
    let value;
    root2.walkComments((i) => {
      if (typeof i.raws.before !== "undefined") {
        value = i.raws.before;
        if (value.includes("\n")) {
          value = value.replace(/[^\n]+$/, "");
        }
        return false;
      }
    });
    if (typeof value === "undefined") {
      value = this.raw(node2, null, "beforeDecl");
    } else if (value) {
      value = value.replace(/\S/g, "");
    }
    return value;
  }
  rawBeforeDecl(root2, node2) {
    let value;
    root2.walkDecls((i) => {
      if (typeof i.raws.before !== "undefined") {
        value = i.raws.before;
        if (value.includes("\n")) {
          value = value.replace(/[^\n]+$/, "");
        }
        return false;
      }
    });
    if (typeof value === "undefined") {
      value = this.raw(node2, null, "beforeRule");
    } else if (value) {
      value = value.replace(/\S/g, "");
    }
    return value;
  }
  rawBeforeOpen(root2) {
    let value;
    root2.walk((i) => {
      if (i.type !== "decl") {
        value = i.raws.between;
        if (typeof value !== "undefined") return false;
      }
    });
    return value;
  }
  rawBeforeRule(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && (i.parent !== root2 || root2.first !== i)) {
        if (typeof i.raws.before !== "undefined") {
          value = i.raws.before;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      }
    });
    if (value) value = value.replace(/\S/g, "");
    return value;
  }
  rawColon(root2) {
    let value;
    root2.walkDecls((i) => {
      if (typeof i.raws.between !== "undefined") {
        value = i.raws.between.replace(/[^\s:]/g, "");
        return false;
      }
    });
    return value;
  }
  rawEmptyBody(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length === 0) {
        value = i.raws.after;
        if (typeof value !== "undefined") return false;
      }
    });
    return value;
  }
  rawIndent(root2) {
    if (root2.raws.indent) return root2.raws.indent;
    let value;
    root2.walk((i) => {
      let p = i.parent;
      if (p && p !== root2 && p.parent && p.parent === root2) {
        if (typeof i.raws.before !== "undefined") {
          let parts = i.raws.before.split("\n");
          value = parts[parts.length - 1];
          value = value.replace(/\S/g, "");
          return false;
        }
      }
    });
    return value;
  }
  rawSemicolon(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length && i.last.type === "decl") {
        value = i.raws.semicolon;
        if (typeof value !== "undefined") return false;
      }
    });
    return value;
  }
  rawValue(node2, prop) {
    let value = node2[prop];
    let raw = node2.raws[prop];
    if (raw && raw.value === value) {
      return raw.raw;
    }
    return value;
  }
  root(node2) {
    this.body(node2);
    if (node2.raws.after) this.builder(node2.raws.after);
  }
  rule(node2) {
    this.block(node2, this.rawValue(node2, "selector"));
    if (node2.raws.ownSemicolon) {
      this.builder(node2.raws.ownSemicolon, node2, "end");
    }
  }
  stringify(node2, semicolon) {
    if (!this[node2.type]) {
      throw new Error(
        "Unknown AST node type " + node2.type + ". Maybe you need to change PostCSS stringifier."
      );
    }
    this[node2.type](node2, semicolon);
  }
};
var stringifier = Stringifier$2;
Stringifier$2.default = Stringifier$2;
let Stringifier$1 = stringifier;
function stringify$4(node2, builder) {
  let str = new Stringifier$1(builder);
  str.stringify(node2);
}
var stringify_1 = stringify$4;
stringify$4.default = stringify$4;
let { isClean: isClean$2, my: my$2 } = symbols;
let CssSyntaxError$2 = cssSyntaxError;
let Stringifier2 = stringifier;
let stringify$3 = stringify_1;
function cloneNode(obj, parent) {
  let cloned = new obj.constructor();
  for (let i in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
      continue;
    }
    if (i === "proxyCache") continue;
    let value = obj[i];
    let type = typeof value;
    if (i === "parent" && type === "object") {
      if (parent) cloned[i] = parent;
    } else if (i === "source") {
      cloned[i] = value;
    } else if (Array.isArray(value)) {
      cloned[i] = value.map((j) => cloneNode(j, cloned));
    } else {
      if (type === "object" && value !== null) value = cloneNode(value);
      cloned[i] = value;
    }
  }
  return cloned;
}
let Node$4 = class Node {
  constructor(defaults = {}) {
    this.raws = {};
    this[isClean$2] = false;
    this[my$2] = true;
    for (let name in defaults) {
      if (name === "nodes") {
        this.nodes = [];
        for (let node2 of defaults[name]) {
          if (typeof node2.clone === "function") {
            this.append(node2.clone());
          } else {
            this.append(node2);
          }
        }
      } else {
        this[name] = defaults[name];
      }
    }
  }
  addToError(error) {
    error.postcssNode = this;
    if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
      let s = this.source;
      error.stack = error.stack.replace(
        /\n\s{4}at /,
        `$&${s.input.from}:${s.start.line}:${s.start.column}$&`
      );
    }
    return error;
  }
  after(add) {
    this.parent.insertAfter(this, add);
    return this;
  }
  assign(overrides = {}) {
    for (let name in overrides) {
      this[name] = overrides[name];
    }
    return this;
  }
  before(add) {
    this.parent.insertBefore(this, add);
    return this;
  }
  cleanRaws(keepBetween) {
    delete this.raws.before;
    delete this.raws.after;
    if (!keepBetween) delete this.raws.between;
  }
  clone(overrides = {}) {
    let cloned = cloneNode(this);
    for (let name in overrides) {
      cloned[name] = overrides[name];
    }
    return cloned;
  }
  cloneAfter(overrides = {}) {
    let cloned = this.clone(overrides);
    this.parent.insertAfter(this, cloned);
    return cloned;
  }
  cloneBefore(overrides = {}) {
    let cloned = this.clone(overrides);
    this.parent.insertBefore(this, cloned);
    return cloned;
  }
  error(message, opts = {}) {
    if (this.source) {
      let { end, start } = this.rangeBy(opts);
      return this.source.input.error(
        message,
        { column: start.column, line: start.line },
        { column: end.column, line: end.line },
        opts
      );
    }
    return new CssSyntaxError$2(message);
  }
  getProxyProcessor() {
    return {
      get(node2, prop) {
        if (prop === "proxyOf") {
          return node2;
        } else if (prop === "root") {
          return () => node2.root().toProxy();
        } else {
          return node2[prop];
        }
      },
      set(node2, prop, value) {
        if (node2[prop] === value) return true;
        node2[prop] = value;
        if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || /* c8 ignore next */
        prop === "text") {
          node2.markDirty();
        }
        return true;
      }
    };
  }
  markDirty() {
    if (this[isClean$2]) {
      this[isClean$2] = false;
      let next = this;
      while (next = next.parent) {
        next[isClean$2] = false;
      }
    }
  }
  next() {
    if (!this.parent) return void 0;
    let index2 = this.parent.index(this);
    return this.parent.nodes[index2 + 1];
  }
  positionBy(opts, stringRepresentation) {
    let pos = this.source.start;
    if (opts.index) {
      pos = this.positionInside(opts.index, stringRepresentation);
    } else if (opts.word) {
      stringRepresentation = this.toString();
      let index2 = stringRepresentation.indexOf(opts.word);
      if (index2 !== -1) pos = this.positionInside(index2, stringRepresentation);
    }
    return pos;
  }
  positionInside(index2, stringRepresentation) {
    let string = stringRepresentation || this.toString();
    let column = this.source.start.column;
    let line = this.source.start.line;
    for (let i = 0; i < index2; i++) {
      if (string[i] === "\n") {
        column = 1;
        line += 1;
      } else {
        column += 1;
      }
    }
    return { column, line };
  }
  prev() {
    if (!this.parent) return void 0;
    let index2 = this.parent.index(this);
    return this.parent.nodes[index2 - 1];
  }
  rangeBy(opts) {
    let start = {
      column: this.source.start.column,
      line: this.source.start.line
    };
    let end = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line
    } : {
      column: start.column + 1,
      line: start.line
    };
    if (opts.word) {
      let stringRepresentation = this.toString();
      let index2 = stringRepresentation.indexOf(opts.word);
      if (index2 !== -1) {
        start = this.positionInside(index2, stringRepresentation);
        end = this.positionInside(index2 + opts.word.length, stringRepresentation);
      }
    } else {
      if (opts.start) {
        start = {
          column: opts.start.column,
          line: opts.start.line
        };
      } else if (opts.index) {
        start = this.positionInside(opts.index);
      }
      if (opts.end) {
        end = {
          column: opts.end.column,
          line: opts.end.line
        };
      } else if (typeof opts.endIndex === "number") {
        end = this.positionInside(opts.endIndex);
      } else if (opts.index) {
        end = this.positionInside(opts.index + 1);
      }
    }
    if (end.line < start.line || end.line === start.line && end.column <= start.column) {
      end = { column: start.column + 1, line: start.line };
    }
    return { end, start };
  }
  raw(prop, defaultType) {
    let str = new Stringifier2();
    return str.raw(this, prop, defaultType);
  }
  remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
    this.parent = void 0;
    return this;
  }
  replaceWith(...nodes) {
    if (this.parent) {
      let bookmark = this;
      let foundSelf = false;
      for (let node2 of nodes) {
        if (node2 === this) {
          foundSelf = true;
        } else if (foundSelf) {
          this.parent.insertAfter(bookmark, node2);
          bookmark = node2;
        } else {
          this.parent.insertBefore(bookmark, node2);
        }
      }
      if (!foundSelf) {
        this.remove();
      }
    }
    return this;
  }
  root() {
    let result2 = this;
    while (result2.parent && result2.parent.type !== "document") {
      result2 = result2.parent;
    }
    return result2;
  }
  toJSON(_, inputs) {
    let fixed = {};
    let emitInputs = inputs == null;
    inputs = inputs || /* @__PURE__ */ new Map();
    let inputsNextIndex = 0;
    for (let name in this) {
      if (!Object.prototype.hasOwnProperty.call(this, name)) {
        continue;
      }
      if (name === "parent" || name === "proxyCache") continue;
      let value = this[name];
      if (Array.isArray(value)) {
        fixed[name] = value.map((i) => {
          if (typeof i === "object" && i.toJSON) {
            return i.toJSON(null, inputs);
          } else {
            return i;
          }
        });
      } else if (typeof value === "object" && value.toJSON) {
        fixed[name] = value.toJSON(null, inputs);
      } else if (name === "source") {
        let inputId = inputs.get(value.input);
        if (inputId == null) {
          inputId = inputsNextIndex;
          inputs.set(value.input, inputsNextIndex);
          inputsNextIndex++;
        }
        fixed[name] = {
          end: value.end,
          inputId,
          start: value.start
        };
      } else {
        fixed[name] = value;
      }
    }
    if (emitInputs) {
      fixed.inputs = [...inputs.keys()].map((input2) => input2.toJSON());
    }
    return fixed;
  }
  toProxy() {
    if (!this.proxyCache) {
      this.proxyCache = new Proxy(this, this.getProxyProcessor());
    }
    return this.proxyCache;
  }
  toString(stringifier2 = stringify$3) {
    if (stringifier2.stringify) stringifier2 = stringifier2.stringify;
    let result2 = "";
    stringifier2(this, (i) => {
      result2 += i;
    });
    return result2;
  }
  warn(result2, text, opts) {
    let data = { node: this };
    for (let i in opts) data[i] = opts[i];
    return result2.warn(text, data);
  }
  get proxyOf() {
    return this;
  }
};
var node = Node$4;
Node$4.default = Node$4;
let Node$3 = node;
let Declaration$4 = class Declaration extends Node$3 {
  constructor(defaults) {
    if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") {
      defaults = __spreadProps(__spreadValues({}, defaults), { value: String(defaults.value) });
    }
    super(defaults);
    this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var declaration = Declaration$4;
Declaration$4.default = Declaration$4;
let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let customAlphabet = (alphabet, defaultSize = 21) => {
  return (size = defaultSize) => {
    let id = "";
    let i = size;
    while (i--) {
      id += alphabet[Math.random() * alphabet.length | 0];
    }
    return id;
  };
};
let nanoid$1 = (size = 21) => {
  let id = "";
  let i = size;
  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};
var nonSecure = { nanoid: nanoid$1, customAlphabet };
let { SourceMapConsumer: SourceMapConsumer$2, SourceMapGenerator: SourceMapGenerator$2 } = require$$2;
let { existsSync, readFileSync } = require$$2;
let { dirname: dirname$1, join } = require$$2;
function fromBase64(str) {
  if (Buffer) {
    return Buffer.from(str, "base64").toString();
  } else {
    return window.atob(str);
  }
}
let PreviousMap$2 = class PreviousMap {
  constructor(css, opts) {
    if (opts.map === false) return;
    this.loadAnnotation(css);
    this.inline = this.startWith(this.annotation, "data:");
    let prev = opts.map ? opts.map.prev : void 0;
    let text = this.loadMap(opts.from, prev);
    if (!this.mapFile && opts.from) {
      this.mapFile = opts.from;
    }
    if (this.mapFile) this.root = dirname$1(this.mapFile);
    if (text) this.text = text;
  }
  consumer() {
    if (!this.consumerCache) {
      this.consumerCache = new SourceMapConsumer$2(this.text);
    }
    return this.consumerCache;
  }
  decodeInline(text) {
    let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
    let baseUri = /^data:application\/json;base64,/;
    let charsetUri = /^data:application\/json;charset=utf-?8,/;
    let uri = /^data:application\/json,/;
    if (charsetUri.test(text) || uri.test(text)) {
      return decodeURIComponent(text.substr(RegExp.lastMatch.length));
    }
    if (baseCharsetUri.test(text) || baseUri.test(text)) {
      return fromBase64(text.substr(RegExp.lastMatch.length));
    }
    let encoding = text.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + encoding);
  }
  getAnnotationURL(sourceMapString) {
    return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(map) {
    if (typeof map !== "object") return false;
    return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
  }
  loadAnnotation(css) {
    let comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
    if (!comments) return;
    let start = css.lastIndexOf(comments.pop());
    let end = css.indexOf("*/", start);
    if (start > -1 && end > -1) {
      this.annotation = this.getAnnotationURL(css.substring(start, end));
    }
  }
  loadFile(path) {
    this.root = dirname$1(path);
    if (existsSync(path)) {
      this.mapFile = path;
      return readFileSync(path, "utf-8").toString().trim();
    }
  }
  loadMap(file, prev) {
    if (prev === false) return false;
    if (prev) {
      if (typeof prev === "string") {
        return prev;
      } else if (typeof prev === "function") {
        let prevPath = prev(file);
        if (prevPath) {
          let map = this.loadFile(prevPath);
          if (!map) {
            throw new Error(
              "Unable to load previous source map: " + prevPath.toString()
            );
          }
          return map;
        }
      } else if (prev instanceof SourceMapConsumer$2) {
        return SourceMapGenerator$2.fromSourceMap(prev).toString();
      } else if (prev instanceof SourceMapGenerator$2) {
        return prev.toString();
      } else if (this.isMap(prev)) {
        return JSON.stringify(prev);
      } else {
        throw new Error(
          "Unsupported previous source map format: " + prev.toString()
        );
      }
    } else if (this.inline) {
      return this.decodeInline(this.annotation);
    } else if (this.annotation) {
      let map = this.annotation;
      if (file) map = join(dirname$1(file), map);
      return this.loadFile(map);
    }
  }
  startWith(string, start) {
    if (!string) return false;
    return string.substr(0, start.length) === start;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
};
var previousMap = PreviousMap$2;
PreviousMap$2.default = PreviousMap$2;
let { SourceMapConsumer: SourceMapConsumer$1, SourceMapGenerator: SourceMapGenerator$1 } = require$$2;
let { fileURLToPath, pathToFileURL: pathToFileURL$1 } = require$$2;
let { isAbsolute, resolve: resolve$1 } = require$$2;
let { nanoid } = nonSecure;
let terminalHighlight = require$$2;
let CssSyntaxError$1 = cssSyntaxError;
let PreviousMap$1 = previousMap;
let fromOffsetCache = Symbol("fromOffsetCache");
let sourceMapAvailable$1 = Boolean(SourceMapConsumer$1 && SourceMapGenerator$1);
let pathAvailable$1 = Boolean(resolve$1 && isAbsolute);
let Input$4 = class Input {
  constructor(css, opts = {}) {
    if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) {
      throw new Error(`PostCSS received ${css} instead of CSS string`);
    }
    this.css = css.toString();
    if (this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE") {
      this.hasBOM = true;
      this.css = this.css.slice(1);
    } else {
      this.hasBOM = false;
    }
    if (opts.from) {
      if (!pathAvailable$1 || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) {
        this.file = opts.from;
      } else {
        this.file = resolve$1(opts.from);
      }
    }
    if (pathAvailable$1 && sourceMapAvailable$1) {
      let map = new PreviousMap$1(this.css, opts);
      if (map.text) {
        this.map = map;
        let file = map.consumer().file;
        if (!this.file && file) this.file = this.mapResolve(file);
      }
    }
    if (!this.file) {
      this.id = "<input css " + nanoid(6) + ">";
    }
    if (this.map) this.map.file = this.from;
  }
  error(message, line, column, opts = {}) {
    let result2, endLine, endColumn;
    if (line && typeof line === "object") {
      let start = line;
      let end = column;
      if (typeof start.offset === "number") {
        let pos = this.fromOffset(start.offset);
        line = pos.line;
        column = pos.col;
      } else {
        line = start.line;
        column = start.column;
      }
      if (typeof end.offset === "number") {
        let pos = this.fromOffset(end.offset);
        endLine = pos.line;
        endColumn = pos.col;
      } else {
        endLine = end.line;
        endColumn = end.column;
      }
    } else if (!column) {
      let pos = this.fromOffset(line);
      line = pos.line;
      column = pos.col;
    }
    let origin = this.origin(line, column, endLine, endColumn);
    if (origin) {
      result2 = new CssSyntaxError$1(
        message,
        origin.endLine === void 0 ? origin.line : { column: origin.column, line: origin.line },
        origin.endLine === void 0 ? origin.column : { column: origin.endColumn, line: origin.endLine },
        origin.source,
        origin.file,
        opts.plugin
      );
    } else {
      result2 = new CssSyntaxError$1(
        message,
        endLine === void 0 ? line : { column, line },
        endLine === void 0 ? column : { column: endColumn, line: endLine },
        this.css,
        this.file,
        opts.plugin
      );
    }
    result2.input = { column, endColumn, endLine, line, source: this.css };
    if (this.file) {
      if (pathToFileURL$1) {
        result2.input.url = pathToFileURL$1(this.file).toString();
      }
      result2.input.file = this.file;
    }
    return result2;
  }
  fromOffset(offset) {
    let lastLine, lineToIndex;
    if (!this[fromOffsetCache]) {
      let lines = this.css.split("\n");
      lineToIndex = new Array(lines.length);
      let prevIndex = 0;
      for (let i = 0, l = lines.length; i < l; i++) {
        lineToIndex[i] = prevIndex;
        prevIndex += lines[i].length + 1;
      }
      this[fromOffsetCache] = lineToIndex;
    } else {
      lineToIndex = this[fromOffsetCache];
    }
    lastLine = lineToIndex[lineToIndex.length - 1];
    let min = 0;
    if (offset >= lastLine) {
      min = lineToIndex.length - 1;
    } else {
      let max = lineToIndex.length - 2;
      let mid;
      while (min < max) {
        mid = min + (max - min >> 1);
        if (offset < lineToIndex[mid]) {
          max = mid - 1;
        } else if (offset >= lineToIndex[mid + 1]) {
          min = mid + 1;
        } else {
          min = mid;
          break;
        }
      }
    }
    return {
      col: offset - lineToIndex[min] + 1,
      line: min + 1
    };
  }
  mapResolve(file) {
    if (/^\w+:\/\//.test(file)) {
      return file;
    }
    return resolve$1(this.map.consumer().sourceRoot || this.map.root || ".", file);
  }
  origin(line, column, endLine, endColumn) {
    if (!this.map) return false;
    let consumer = this.map.consumer();
    let from = consumer.originalPositionFor({ column, line });
    if (!from.source) return false;
    let to;
    if (typeof endLine === "number") {
      to = consumer.originalPositionFor({ column: endColumn, line: endLine });
    }
    let fromUrl;
    if (isAbsolute(from.source)) {
      fromUrl = pathToFileURL$1(from.source);
    } else {
      fromUrl = new URL(
        from.source,
        this.map.consumer().sourceRoot || pathToFileURL$1(this.map.mapFile)
      );
    }
    let result2 = {
      column: from.column,
      endColumn: to && to.column,
      endLine: to && to.line,
      line: from.line,
      url: fromUrl.toString()
    };
    if (fromUrl.protocol === "file:") {
      if (fileURLToPath) {
        result2.file = fileURLToPath(fromUrl);
      } else {
        throw new Error(`file: protocol is not available in this PostCSS build`);
      }
    }
    let source = consumer.sourceContentFor(from.source);
    if (source) result2.source = source;
    return result2;
  }
  toJSON() {
    let json = {};
    for (let name of ["hasBOM", "css", "file", "id"]) {
      if (this[name] != null) {
        json[name] = this[name];
      }
    }
    if (this.map) {
      json.map = __spreadValues({}, this.map);
      if (json.map.consumerCache) {
        json.map.consumerCache = void 0;
      }
    }
    return json;
  }
  get from() {
    return this.file || this.id;
  }
};
var input = Input$4;
Input$4.default = Input$4;
if (terminalHighlight && terminalHighlight.registerInput) {
  terminalHighlight.registerInput(Input$4);
}
let { SourceMapConsumer, SourceMapGenerator } = require$$2;
let { dirname, relative, resolve, sep } = require$$2;
let { pathToFileURL } = require$$2;
let Input$3 = input;
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(dirname && resolve && relative && sep);
let MapGenerator$2 = class MapGenerator {
  constructor(stringify2, root2, opts, cssString) {
    this.stringify = stringify2;
    this.mapOpts = opts.map || {};
    this.root = root2;
    this.opts = opts;
    this.css = cssString;
    this.originalCSS = cssString;
    this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
    this.memoizedFileURLs = /* @__PURE__ */ new Map();
    this.memoizedPaths = /* @__PURE__ */ new Map();
    this.memoizedURLs = /* @__PURE__ */ new Map();
  }
  addAnnotation() {
    let content;
    if (this.isInline()) {
      content = "data:application/json;base64," + this.toBase64(this.map.toString());
    } else if (typeof this.mapOpts.annotation === "string") {
      content = this.mapOpts.annotation;
    } else if (typeof this.mapOpts.annotation === "function") {
      content = this.mapOpts.annotation(this.opts.to, this.root);
    } else {
      content = this.outputFile() + ".map";
    }
    let eol = "\n";
    if (this.css.includes("\r\n")) eol = "\r\n";
    this.css += eol + "/*# sourceMappingURL=" + content + " */";
  }
  applyPrevMaps() {
    for (let prev of this.previous()) {
      let from = this.toUrl(this.path(prev.file));
      let root2 = prev.root || dirname(prev.file);
      let map;
      if (this.mapOpts.sourcesContent === false) {
        map = new SourceMapConsumer(prev.text);
        if (map.sourcesContent) {
          map.sourcesContent = null;
        }
      } else {
        map = prev.consumer();
      }
      this.map.applySourceMap(map, from, this.toUrl(this.path(root2)));
    }
  }
  clearAnnotation() {
    if (this.mapOpts.annotation === false) return;
    if (this.root) {
      let node2;
      for (let i = this.root.nodes.length - 1; i >= 0; i--) {
        node2 = this.root.nodes[i];
        if (node2.type !== "comment") continue;
        if (node2.text.indexOf("# sourceMappingURL=") === 0) {
          this.root.removeChild(i);
        }
      }
    } else if (this.css) {
      this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, "");
    }
  }
  generate() {
    this.clearAnnotation();
    if (pathAvailable && sourceMapAvailable && this.isMap()) {
      return this.generateMap();
    } else {
      let result2 = "";
      this.stringify(this.root, (i) => {
        result2 += i;
      });
      return [result2];
    }
  }
  generateMap() {
    if (this.root) {
      this.generateString();
    } else if (this.previous().length === 1) {
      let prev = this.previous()[0].consumer();
      prev.file = this.outputFile();
      this.map = SourceMapGenerator.fromSourceMap(prev, {
        ignoreInvalidMapping: true
      });
    } else {
      this.map = new SourceMapGenerator({
        file: this.outputFile(),
        ignoreInvalidMapping: true
      });
      this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    }
    if (this.isSourcesContent()) this.setSourcesContent();
    if (this.root && this.previous().length > 0) this.applyPrevMaps();
    if (this.isAnnotation()) this.addAnnotation();
    if (this.isInline()) {
      return [this.css];
    } else {
      return [this.css, this.map];
    }
  }
  generateString() {
    this.css = "";
    this.map = new SourceMapGenerator({
      file: this.outputFile(),
      ignoreInvalidMapping: true
    });
    let line = 1;
    let column = 1;
    let noSource = "<no source>";
    let mapping = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    };
    let lines, last;
    this.stringify(this.root, (str, node2, type) => {
      this.css += str;
      if (node2 && type !== "end") {
        mapping.generated.line = line;
        mapping.generated.column = column - 1;
        if (node2.source && node2.source.start) {
          mapping.source = this.sourcePath(node2);
          mapping.original.line = node2.source.start.line;
          mapping.original.column = node2.source.start.column - 1;
          this.map.addMapping(mapping);
        } else {
          mapping.source = noSource;
          mapping.original.line = 1;
          mapping.original.column = 0;
          this.map.addMapping(mapping);
        }
      }
      lines = str.match(/\n/g);
      if (lines) {
        line += lines.length;
        last = str.lastIndexOf("\n");
        column = str.length - last;
      } else {
        column += str.length;
      }
      if (node2 && type !== "start") {
        let p = node2.parent || { raws: {} };
        let childless = node2.type === "decl" || node2.type === "atrule" && !node2.nodes;
        if (!childless || node2 !== p.last || p.raws.semicolon) {
          if (node2.source && node2.source.end) {
            mapping.source = this.sourcePath(node2);
            mapping.original.line = node2.source.end.line;
            mapping.original.column = node2.source.end.column - 1;
            mapping.generated.line = line;
            mapping.generated.column = column - 2;
            this.map.addMapping(mapping);
          } else {
            mapping.source = noSource;
            mapping.original.line = 1;
            mapping.original.column = 0;
            mapping.generated.line = line;
            mapping.generated.column = column - 1;
            this.map.addMapping(mapping);
          }
        }
      }
    });
  }
  isAnnotation() {
    if (this.isInline()) {
      return true;
    }
    if (typeof this.mapOpts.annotation !== "undefined") {
      return this.mapOpts.annotation;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.annotation);
    }
    return true;
  }
  isInline() {
    if (typeof this.mapOpts.inline !== "undefined") {
      return this.mapOpts.inline;
    }
    let annotation = this.mapOpts.annotation;
    if (typeof annotation !== "undefined" && annotation !== true) {
      return false;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.inline);
    }
    return true;
  }
  isMap() {
    if (typeof this.opts.map !== "undefined") {
      return !!this.opts.map;
    }
    return this.previous().length > 0;
  }
  isSourcesContent() {
    if (typeof this.mapOpts.sourcesContent !== "undefined") {
      return this.mapOpts.sourcesContent;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.withContent());
    }
    return true;
  }
  outputFile() {
    if (this.opts.to) {
      return this.path(this.opts.to);
    } else if (this.opts.from) {
      return this.path(this.opts.from);
    } else {
      return "to.css";
    }
  }
  path(file) {
    if (this.mapOpts.absolute) return file;
    if (file.charCodeAt(0) === 60) return file;
    if (/^\w+:\/\//.test(file)) return file;
    let cached = this.memoizedPaths.get(file);
    if (cached) return cached;
    let from = this.opts.to ? dirname(this.opts.to) : ".";
    if (typeof this.mapOpts.annotation === "string") {
      from = dirname(resolve(from, this.mapOpts.annotation));
    }
    let path = relative(from, file);
    this.memoizedPaths.set(file, path);
    return path;
  }
  previous() {
    if (!this.previousMaps) {
      this.previousMaps = [];
      if (this.root) {
        this.root.walk((node2) => {
          if (node2.source && node2.source.input.map) {
            let map = node2.source.input.map;
            if (!this.previousMaps.includes(map)) {
              this.previousMaps.push(map);
            }
          }
        });
      } else {
        let input2 = new Input$3(this.originalCSS, this.opts);
        if (input2.map) this.previousMaps.push(input2.map);
      }
    }
    return this.previousMaps;
  }
  setSourcesContent() {
    let already = {};
    if (this.root) {
      this.root.walk((node2) => {
        if (node2.source) {
          let from = node2.source.input.from;
          if (from && !already[from]) {
            already[from] = true;
            let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
            this.map.setSourceContent(fromUrl, node2.source.input.css);
          }
        }
      });
    } else if (this.css) {
      let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(from, this.css);
    }
  }
  sourcePath(node2) {
    if (this.mapOpts.from) {
      return this.toUrl(this.mapOpts.from);
    } else if (this.usesFileUrls) {
      return this.toFileUrl(node2.source.input.from);
    } else {
      return this.toUrl(this.path(node2.source.input.from));
    }
  }
  toBase64(str) {
    if (Buffer) {
      return Buffer.from(str).toString("base64");
    } else {
      return window.btoa(unescape(encodeURIComponent(str)));
    }
  }
  toFileUrl(path) {
    let cached = this.memoizedFileURLs.get(path);
    if (cached) return cached;
    if (pathToFileURL) {
      let fileURL = pathToFileURL(path).toString();
      this.memoizedFileURLs.set(path, fileURL);
      return fileURL;
    } else {
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
    }
  }
  toUrl(path) {
    let cached = this.memoizedURLs.get(path);
    if (cached) return cached;
    if (sep === "\\") {
      path = path.replace(/\\/g, "/");
    }
    let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent);
    this.memoizedURLs.set(path, url);
    return url;
  }
};
var mapGenerator = MapGenerator$2;
let Node$2 = node;
let Comment$4 = class Comment extends Node$2 {
  constructor(defaults) {
    super(defaults);
    this.type = "comment";
  }
};
var comment = Comment$4;
Comment$4.default = Comment$4;
let { isClean: isClean$1, my: my$1 } = symbols;
let Declaration$3 = declaration;
let Comment$3 = comment;
let Node$1 = node;
let parse$4;
let Rule$4;
let AtRule$4;
let Root$6;
function cleanSource(nodes) {
  return nodes.map((i) => {
    if (i.nodes) i.nodes = cleanSource(i.nodes);
    delete i.source;
    return i;
  });
}
function markDirtyUp(node2) {
  node2[isClean$1] = false;
  if (node2.proxyOf.nodes) {
    for (let i of node2.proxyOf.nodes) {
      markDirtyUp(i);
    }
  }
}
let Container$7 = class Container extends Node$1 {
  append(...children) {
    for (let child of children) {
      let nodes = this.normalize(child, this.last);
      for (let node2 of nodes) this.proxyOf.nodes.push(node2);
    }
    this.markDirty();
    return this;
  }
  cleanRaws(keepBetween) {
    super.cleanRaws(keepBetween);
    if (this.nodes) {
      for (let node2 of this.nodes) node2.cleanRaws(keepBetween);
    }
  }
  each(callback) {
    if (!this.proxyOf.nodes) return void 0;
    let iterator = this.getIterator();
    let index2, result2;
    while (this.indexes[iterator] < this.proxyOf.nodes.length) {
      index2 = this.indexes[iterator];
      result2 = callback(this.proxyOf.nodes[index2], index2);
      if (result2 === false) break;
      this.indexes[iterator] += 1;
    }
    delete this.indexes[iterator];
    return result2;
  }
  every(condition) {
    return this.nodes.every(condition);
  }
  getIterator() {
    if (!this.lastEach) this.lastEach = 0;
    if (!this.indexes) this.indexes = {};
    this.lastEach += 1;
    let iterator = this.lastEach;
    this.indexes[iterator] = 0;
    return iterator;
  }
  getProxyProcessor() {
    return {
      get(node2, prop) {
        if (prop === "proxyOf") {
          return node2;
        } else if (!node2[prop]) {
          return node2[prop];
        } else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) {
          return (...args) => {
            return node2[prop](
              ...args.map((i) => {
                if (typeof i === "function") {
                  return (child, index2) => i(child.toProxy(), index2);
                } else {
                  return i;
                }
              })
            );
          };
        } else if (prop === "every" || prop === "some") {
          return (cb) => {
            return node2[prop](
              (child, ...other) => cb(child.toProxy(), ...other)
            );
          };
        } else if (prop === "root") {
          return () => node2.root().toProxy();
        } else if (prop === "nodes") {
          return node2.nodes.map((i) => i.toProxy());
        } else if (prop === "first" || prop === "last") {
          return node2[prop].toProxy();
        } else {
          return node2[prop];
        }
      },
      set(node2, prop, value) {
        if (node2[prop] === value) return true;
        node2[prop] = value;
        if (prop === "name" || prop === "params" || prop === "selector") {
          node2.markDirty();
        }
        return true;
      }
    };
  }
  index(child) {
    if (typeof child === "number") return child;
    if (child.proxyOf) child = child.proxyOf;
    return this.proxyOf.nodes.indexOf(child);
  }
  insertAfter(exist, add) {
    let existIndex = this.index(exist);
    let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
    existIndex = this.index(exist);
    for (let node2 of nodes) this.proxyOf.nodes.splice(existIndex + 1, 0, node2);
    let index2;
    for (let id in this.indexes) {
      index2 = this.indexes[id];
      if (existIndex < index2) {
        this.indexes[id] = index2 + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  insertBefore(exist, add) {
    let existIndex = this.index(exist);
    let type = existIndex === 0 ? "prepend" : false;
    let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
    existIndex = this.index(exist);
    for (let node2 of nodes) this.proxyOf.nodes.splice(existIndex, 0, node2);
    let index2;
    for (let id in this.indexes) {
      index2 = this.indexes[id];
      if (existIndex <= index2) {
        this.indexes[id] = index2 + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  normalize(nodes, sample) {
    if (typeof nodes === "string") {
      nodes = cleanSource(parse$4(nodes).nodes);
    } else if (typeof nodes === "undefined") {
      nodes = [];
    } else if (Array.isArray(nodes)) {
      nodes = nodes.slice(0);
      for (let i of nodes) {
        if (i.parent) i.parent.removeChild(i, "ignore");
      }
    } else if (nodes.type === "root" && this.type !== "document") {
      nodes = nodes.nodes.slice(0);
      for (let i of nodes) {
        if (i.parent) i.parent.removeChild(i, "ignore");
      }
    } else if (nodes.type) {
      nodes = [nodes];
    } else if (nodes.prop) {
      if (typeof nodes.value === "undefined") {
        throw new Error("Value field is missed in node creation");
      } else if (typeof nodes.value !== "string") {
        nodes.value = String(nodes.value);
      }
      nodes = [new Declaration$3(nodes)];
    } else if (nodes.selector) {
      nodes = [new Rule$4(nodes)];
    } else if (nodes.name) {
      nodes = [new AtRule$4(nodes)];
    } else if (nodes.text) {
      nodes = [new Comment$3(nodes)];
    } else {
      throw new Error("Unknown node type in node creation");
    }
    let processed = nodes.map((i) => {
      if (!i[my$1]) Container.rebuild(i);
      i = i.proxyOf;
      if (i.parent) i.parent.removeChild(i);
      if (i[isClean$1]) markDirtyUp(i);
      if (typeof i.raws.before === "undefined") {
        if (sample && typeof sample.raws.before !== "undefined") {
          i.raws.before = sample.raws.before.replace(/\S/g, "");
        }
      }
      i.parent = this.proxyOf;
      return i;
    });
    return processed;
  }
  prepend(...children) {
    children = children.reverse();
    for (let child of children) {
      let nodes = this.normalize(child, this.first, "prepend").reverse();
      for (let node2 of nodes) this.proxyOf.nodes.unshift(node2);
      for (let id in this.indexes) {
        this.indexes[id] = this.indexes[id] + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  push(child) {
    child.parent = this;
    this.proxyOf.nodes.push(child);
    return this;
  }
  removeAll() {
    for (let node2 of this.proxyOf.nodes) node2.parent = void 0;
    this.proxyOf.nodes = [];
    this.markDirty();
    return this;
  }
  removeChild(child) {
    child = this.index(child);
    this.proxyOf.nodes[child].parent = void 0;
    this.proxyOf.nodes.splice(child, 1);
    let index2;
    for (let id in this.indexes) {
      index2 = this.indexes[id];
      if (index2 >= child) {
        this.indexes[id] = index2 - 1;
      }
    }
    this.markDirty();
    return this;
  }
  replaceValues(pattern, opts, callback) {
    if (!callback) {
      callback = opts;
      opts = {};
    }
    this.walkDecls((decl) => {
      if (opts.props && !opts.props.includes(decl.prop)) return;
      if (opts.fast && !decl.value.includes(opts.fast)) return;
      decl.value = decl.value.replace(pattern, callback);
    });
    this.markDirty();
    return this;
  }
  some(condition) {
    return this.nodes.some(condition);
  }
  walk(callback) {
    return this.each((child, i) => {
      let result2;
      try {
        result2 = callback(child, i);
      } catch (e) {
        throw child.addToError(e);
      }
      if (result2 !== false && child.walk) {
        result2 = child.walk(callback);
      }
      return result2;
    });
  }
  walkAtRules(name, callback) {
    if (!callback) {
      callback = name;
      return this.walk((child, i) => {
        if (child.type === "atrule") {
          return callback(child, i);
        }
      });
    }
    if (name instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "atrule" && name.test(child.name)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "atrule" && child.name === name) {
        return callback(child, i);
      }
    });
  }
  walkComments(callback) {
    return this.walk((child, i) => {
      if (child.type === "comment") {
        return callback(child, i);
      }
    });
  }
  walkDecls(prop, callback) {
    if (!callback) {
      callback = prop;
      return this.walk((child, i) => {
        if (child.type === "decl") {
          return callback(child, i);
        }
      });
    }
    if (prop instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "decl" && prop.test(child.prop)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "decl" && child.prop === prop) {
        return callback(child, i);
      }
    });
  }
  walkRules(selector, callback) {
    if (!callback) {
      callback = selector;
      return this.walk((child, i) => {
        if (child.type === "rule") {
          return callback(child, i);
        }
      });
    }
    if (selector instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "rule" && selector.test(child.selector)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "rule" && child.selector === selector) {
        return callback(child, i);
      }
    });
  }
  get first() {
    if (!this.proxyOf.nodes) return void 0;
    return this.proxyOf.nodes[0];
  }
  get last() {
    if (!this.proxyOf.nodes) return void 0;
    return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
};
Container$7.registerParse = (dependant) => {
  parse$4 = dependant;
};
Container$7.registerRule = (dependant) => {
  Rule$4 = dependant;
};
Container$7.registerAtRule = (dependant) => {
  AtRule$4 = dependant;
};
Container$7.registerRoot = (dependant) => {
  Root$6 = dependant;
};
var container = Container$7;
Container$7.default = Container$7;
Container$7.rebuild = (node2) => {
  if (node2.type === "atrule") {
    Object.setPrototypeOf(node2, AtRule$4.prototype);
  } else if (node2.type === "rule") {
    Object.setPrototypeOf(node2, Rule$4.prototype);
  } else if (node2.type === "decl") {
    Object.setPrototypeOf(node2, Declaration$3.prototype);
  } else if (node2.type === "comment") {
    Object.setPrototypeOf(node2, Comment$3.prototype);
  } else if (node2.type === "root") {
    Object.setPrototypeOf(node2, Root$6.prototype);
  }
  node2[my$1] = true;
  if (node2.nodes) {
    node2.nodes.forEach((child) => {
      Container$7.rebuild(child);
    });
  }
};
let Container$6 = container;
let LazyResult$4;
let Processor$3;
let Document$3 = class Document extends Container$6 {
  constructor(defaults) {
    super(__spreadValues({ type: "document" }, defaults));
    if (!this.nodes) {
      this.nodes = [];
    }
  }
  toResult(opts = {}) {
    let lazy = new LazyResult$4(new Processor$3(), this, opts);
    return lazy.stringify();
  }
};
Document$3.registerLazyResult = (dependant) => {
  LazyResult$4 = dependant;
};
Document$3.registerProcessor = (dependant) => {
  Processor$3 = dependant;
};
var document$1 = Document$3;
Document$3.default = Document$3;
let printed = {};
var warnOnce$2 = function warnOnce(message) {
  if (printed[message]) return;
  printed[message] = true;
  if (typeof console !== "undefined" && console.warn) {
    console.warn(message);
  }
};
let Warning$2 = class Warning {
  constructor(text, opts = {}) {
    this.type = "warning";
    this.text = text;
    if (opts.node && opts.node.source) {
      let range = opts.node.rangeBy(opts);
      this.line = range.start.line;
      this.column = range.start.column;
      this.endLine = range.end.line;
      this.endColumn = range.end.column;
    }
    for (let opt in opts) this[opt] = opts[opt];
  }
  toString() {
    if (this.node) {
      return this.node.error(this.text, {
        index: this.index,
        plugin: this.plugin,
        word: this.word
      }).message;
    }
    if (this.plugin) {
      return this.plugin + ": " + this.text;
    }
    return this.text;
  }
};
var warning = Warning$2;
Warning$2.default = Warning$2;
let Warning$1 = warning;
let Result$3 = class Result {
  constructor(processor2, root2, opts) {
    this.processor = processor2;
    this.messages = [];
    this.root = root2;
    this.opts = opts;
    this.css = void 0;
    this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(text, opts = {}) {
    if (!opts.plugin) {
      if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
        opts.plugin = this.lastPlugin.postcssPlugin;
      }
    }
    let warning2 = new Warning$1(text, opts);
    this.messages.push(warning2);
    return warning2;
  }
  warnings() {
    return this.messages.filter((i) => i.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var result = Result$3;
Result$3.default = Result$3;
const SINGLE_QUOTE = "'".charCodeAt(0);
const DOUBLE_QUOTE = '"'.charCodeAt(0);
const BACKSLASH = "\\".charCodeAt(0);
const SLASH = "/".charCodeAt(0);
const NEWLINE = "\n".charCodeAt(0);
const SPACE = " ".charCodeAt(0);
const FEED = "\f".charCodeAt(0);
const TAB = "	".charCodeAt(0);
const CR = "\r".charCodeAt(0);
const OPEN_SQUARE = "[".charCodeAt(0);
const CLOSE_SQUARE = "]".charCodeAt(0);
const OPEN_PARENTHESES = "(".charCodeAt(0);
const CLOSE_PARENTHESES = ")".charCodeAt(0);
const OPEN_CURLY = "{".charCodeAt(0);
const CLOSE_CURLY = "}".charCodeAt(0);
const SEMICOLON = ";".charCodeAt(0);
const ASTERISK = "*".charCodeAt(0);
const COLON = ":".charCodeAt(0);
const AT = "@".charCodeAt(0);
const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
const RE_BAD_BRACKET = /.[\r\n"'(/\\]/;
const RE_HEX_ESCAPE = /[\da-f]/i;
var tokenize = function tokenizer(input2, options = {}) {
  let css = input2.css.valueOf();
  let ignore = options.ignoreErrors;
  let code, next, quote, content, escape;
  let escaped, escapePos, prev, n, currentToken;
  let length = css.length;
  let pos = 0;
  let buffer = [];
  let returned = [];
  function position() {
    return pos;
  }
  function unclosed(what) {
    throw input2.error("Unclosed " + what, pos);
  }
  function endOfFile() {
    return returned.length === 0 && pos >= length;
  }
  function nextToken(opts) {
    if (returned.length) return returned.pop();
    if (pos >= length) return;
    let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
    code = css.charCodeAt(pos);
    switch (code) {
      case NEWLINE:
      case SPACE:
      case TAB:
      case CR:
      case FEED: {
        next = pos;
        do {
          next += 1;
          code = css.charCodeAt(next);
        } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
        currentToken = ["space", css.slice(pos, next)];
        pos = next - 1;
        break;
      }
      case OPEN_SQUARE:
      case CLOSE_SQUARE:
      case OPEN_CURLY:
      case CLOSE_CURLY:
      case COLON:
      case SEMICOLON:
      case CLOSE_PARENTHESES: {
        let controlChar = String.fromCharCode(code);
        currentToken = [controlChar, controlChar, pos];
        break;
      }
      case OPEN_PARENTHESES: {
        prev = buffer.length ? buffer.pop()[1] : "";
        n = css.charCodeAt(pos + 1);
        if (prev === "url" && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
          next = pos;
          do {
            escaped = false;
            next = css.indexOf(")", next + 1);
            if (next === -1) {
              if (ignore || ignoreUnclosed) {
                next = pos;
                break;
              } else {
                unclosed("bracket");
              }
            }
            escapePos = next;
            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
              escapePos -= 1;
              escaped = !escaped;
            }
          } while (escaped);
          currentToken = ["brackets", css.slice(pos, next + 1), pos, next];
          pos = next;
        } else {
          next = css.indexOf(")", pos + 1);
          content = css.slice(pos, next + 1);
          if (next === -1 || RE_BAD_BRACKET.test(content)) {
            currentToken = ["(", "(", pos];
          } else {
            currentToken = ["brackets", content, pos, next];
            pos = next;
          }
        }
        break;
      }
      case SINGLE_QUOTE:
      case DOUBLE_QUOTE: {
        quote = code === SINGLE_QUOTE ? "'" : '"';
        next = pos;
        do {
          escaped = false;
          next = css.indexOf(quote, next + 1);
          if (next === -1) {
            if (ignore || ignoreUnclosed) {
              next = pos + 1;
              break;
            } else {
              unclosed("string");
            }
          }
          escapePos = next;
          while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
            escapePos -= 1;
            escaped = !escaped;
          }
        } while (escaped);
        currentToken = ["string", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      case AT: {
        RE_AT_END.lastIndex = pos + 1;
        RE_AT_END.test(css);
        if (RE_AT_END.lastIndex === 0) {
          next = css.length - 1;
        } else {
          next = RE_AT_END.lastIndex - 2;
        }
        currentToken = ["at-word", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      case BACKSLASH: {
        next = pos;
        escape = true;
        while (css.charCodeAt(next + 1) === BACKSLASH) {
          next += 1;
          escape = !escape;
        }
        code = css.charCodeAt(next + 1);
        if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
          next += 1;
          if (RE_HEX_ESCAPE.test(css.charAt(next))) {
            while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
              next += 1;
            }
            if (css.charCodeAt(next + 1) === SPACE) {
              next += 1;
            }
          }
        }
        currentToken = ["word", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      default: {
        if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
          next = css.indexOf("*/", pos + 2) + 1;
          if (next === 0) {
            if (ignore || ignoreUnclosed) {
              next = css.length;
            } else {
              unclosed("comment");
            }
          }
          currentToken = ["comment", css.slice(pos, next + 1), pos, next];
          pos = next;
        } else {
          RE_WORD_END.lastIndex = pos + 1;
          RE_WORD_END.test(css);
          if (RE_WORD_END.lastIndex === 0) {
            next = css.length - 1;
          } else {
            next = RE_WORD_END.lastIndex - 2;
          }
          currentToken = ["word", css.slice(pos, next + 1), pos, next];
          buffer.push(currentToken);
          pos = next;
        }
        break;
      }
    }
    pos++;
    return currentToken;
  }
  function back(token) {
    returned.push(token);
  }
  return {
    back,
    endOfFile,
    nextToken,
    position
  };
};
let Container$5 = container;
let AtRule$3 = class AtRule extends Container$5 {
  constructor(defaults) {
    super(defaults);
    this.type = "atrule";
  }
  append(...children) {
    if (!this.proxyOf.nodes) this.nodes = [];
    return super.append(...children);
  }
  prepend(...children) {
    if (!this.proxyOf.nodes) this.nodes = [];
    return super.prepend(...children);
  }
};
var atRule = AtRule$3;
AtRule$3.default = AtRule$3;
Container$5.registerAtRule(AtRule$3);
let Container$4 = container;
let LazyResult$3;
let Processor$2;
let Root$5 = class Root extends Container$4 {
  constructor(defaults) {
    super(defaults);
    this.type = "root";
    if (!this.nodes) this.nodes = [];
  }
  normalize(child, sample, type) {
    let nodes = super.normalize(child);
    if (sample) {
      if (type === "prepend") {
        if (this.nodes.length > 1) {
          sample.raws.before = this.nodes[1].raws.before;
        } else {
          delete sample.raws.before;
        }
      } else if (this.first !== sample) {
        for (let node2 of nodes) {
          node2.raws.before = sample.raws.before;
        }
      }
    }
    return nodes;
  }
  removeChild(child, ignore) {
    let index2 = this.index(child);
    if (!ignore && index2 === 0 && this.nodes.length > 1) {
      this.nodes[1].raws.before = this.nodes[index2].raws.before;
    }
    return super.removeChild(child);
  }
  toResult(opts = {}) {
    let lazy = new LazyResult$3(new Processor$2(), this, opts);
    return lazy.stringify();
  }
};
Root$5.registerLazyResult = (dependant) => {
  LazyResult$3 = dependant;
};
Root$5.registerProcessor = (dependant) => {
  Processor$2 = dependant;
};
var root = Root$5;
Root$5.default = Root$5;
Container$4.registerRoot(Root$5);
let list$2 = {
  comma(string) {
    return list$2.split(string, [","], true);
  },
  space(string) {
    let spaces = [" ", "\n", "	"];
    return list$2.split(string, spaces);
  },
  split(string, separators, last) {
    let array = [];
    let current = "";
    let split = false;
    let func = 0;
    let inQuote = false;
    let prevQuote = "";
    let escape = false;
    for (let letter of string) {
      if (escape) {
        escape = false;
      } else if (letter === "\\") {
        escape = true;
      } else if (inQuote) {
        if (letter === prevQuote) {
          inQuote = false;
        }
      } else if (letter === '"' || letter === "'") {
        inQuote = true;
        prevQuote = letter;
      } else if (letter === "(") {
        func += 1;
      } else if (letter === ")") {
        if (func > 0) func -= 1;
      } else if (func === 0) {
        if (separators.includes(letter)) split = true;
      }
      if (split) {
        if (current !== "") array.push(current.trim());
        current = "";
        split = false;
      } else {
        current += letter;
      }
    }
    if (last || current !== "") array.push(current.trim());
    return array;
  }
};
var list_1 = list$2;
list$2.default = list$2;
let Container$3 = container;
let list$1 = list_1;
let Rule$3 = class Rule extends Container$3 {
  constructor(defaults) {
    super(defaults);
    this.type = "rule";
    if (!this.nodes) this.nodes = [];
  }
  get selectors() {
    return list$1.comma(this.selector);
  }
  set selectors(values) {
    let match = this.selector ? this.selector.match(/,\s*/) : null;
    let sep2 = match ? match[0] : "," + this.raw("between", "beforeOpen");
    this.selector = values.join(sep2);
  }
};
var rule = Rule$3;
Rule$3.default = Rule$3;
Container$3.registerRule(Rule$3);
let Declaration$2 = declaration;
let tokenizer2 = tokenize;
let Comment$2 = comment;
let AtRule$2 = atRule;
let Root$4 = root;
let Rule$2 = rule;
const SAFE_COMMENT_NEIGHBOR = {
  empty: true,
  space: true
};
function findLastWithPosition(tokens) {
  for (let i = tokens.length - 1; i >= 0; i--) {
    let token = tokens[i];
    let pos = token[3] || token[2];
    if (pos) return pos;
  }
}
let Parser$1 = class Parser {
  constructor(input2) {
    this.input = input2;
    this.root = new Root$4();
    this.current = this.root;
    this.spaces = "";
    this.semicolon = false;
    this.createTokenizer();
    this.root.source = { input: input2, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(token) {
    let node2 = new AtRule$2();
    node2.name = token[1].slice(1);
    if (node2.name === "") {
      this.unnamedAtrule(node2, token);
    }
    this.init(node2, token[2]);
    let type;
    let prev;
    let shift;
    let last = false;
    let open = false;
    let params = [];
    let brackets = [];
    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken();
      type = token[0];
      if (type === "(" || type === "[") {
        brackets.push(type === "(" ? ")" : "]");
      } else if (type === "{" && brackets.length > 0) {
        brackets.push("}");
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop();
      }
      if (brackets.length === 0) {
        if (type === ";") {
          node2.source.end = this.getPosition(token[2]);
          node2.source.end.offset++;
          this.semicolon = true;
          break;
        } else if (type === "{") {
          open = true;
          break;
        } else if (type === "}") {
          if (params.length > 0) {
            shift = params.length - 1;
            prev = params[shift];
            while (prev && prev[0] === "space") {
              prev = params[--shift];
            }
            if (prev) {
              node2.source.end = this.getPosition(prev[3] || prev[2]);
              node2.source.end.offset++;
            }
          }
          this.end(token);
          break;
        } else {
          params.push(token);
        }
      } else {
        params.push(token);
      }
      if (this.tokenizer.endOfFile()) {
        last = true;
        break;
      }
    }
    node2.raws.between = this.spacesAndCommentsFromEnd(params);
    if (params.length) {
      node2.raws.afterName = this.spacesAndCommentsFromStart(params);
      this.raw(node2, "params", params);
      if (last) {
        token = params[params.length - 1];
        node2.source.end = this.getPosition(token[3] || token[2]);
        node2.source.end.offset++;
        this.spaces = node2.raws.between;
        node2.raws.between = "";
      }
    } else {
      node2.raws.afterName = "";
      node2.params = "";
    }
    if (open) {
      node2.nodes = [];
      this.current = node2;
    }
  }
  checkMissedSemicolon(tokens) {
    let colon = this.colon(tokens);
    if (colon === false) return;
    let founded = 0;
    let token;
    for (let j = colon - 1; j >= 0; j--) {
      token = tokens[j];
      if (token[0] !== "space") {
        founded += 1;
        if (founded === 2) break;
      }
    }
    throw this.input.error(
      "Missed semicolon",
      token[0] === "word" ? token[3] + 1 : token[2]
    );
  }
  colon(tokens) {
    let brackets = 0;
    let token, type, prev;
    for (let [i, element] of tokens.entries()) {
      token = element;
      type = token[0];
      if (type === "(") {
        brackets += 1;
      }
      if (type === ")") {
        brackets -= 1;
      }
      if (brackets === 0 && type === ":") {
        if (!prev) {
          this.doubleColon(token);
        } else if (prev[0] === "word" && prev[1] === "progid") {
          continue;
        } else {
          return i;
        }
      }
      prev = token;
    }
    return false;
  }
  comment(token) {
    let node2 = new Comment$2();
    this.init(node2, token[2]);
    node2.source.end = this.getPosition(token[3] || token[2]);
    node2.source.end.offset++;
    let text = token[1].slice(2, -2);
    if (/^\s*$/.test(text)) {
      node2.text = "";
      node2.raws.left = text;
      node2.raws.right = "";
    } else {
      let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
      node2.text = match[2];
      node2.raws.left = match[1];
      node2.raws.right = match[3];
    }
  }
  createTokenizer() {
    this.tokenizer = tokenizer2(this.input);
  }
  decl(tokens, customProperty) {
    let node2 = new Declaration$2();
    this.init(node2, tokens[0][2]);
    let last = tokens[tokens.length - 1];
    if (last[0] === ";") {
      this.semicolon = true;
      tokens.pop();
    }
    node2.source.end = this.getPosition(
      last[3] || last[2] || findLastWithPosition(tokens)
    );
    node2.source.end.offset++;
    while (tokens[0][0] !== "word") {
      if (tokens.length === 1) this.unknownWord(tokens);
      node2.raws.before += tokens.shift()[1];
    }
    node2.source.start = this.getPosition(tokens[0][2]);
    node2.prop = "";
    while (tokens.length) {
      let type = tokens[0][0];
      if (type === ":" || type === "space" || type === "comment") {
        break;
      }
      node2.prop += tokens.shift()[1];
    }
    node2.raws.between = "";
    let token;
    while (tokens.length) {
      token = tokens.shift();
      if (token[0] === ":") {
        node2.raws.between += token[1];
        break;
      } else {
        if (token[0] === "word" && /\w/.test(token[1])) {
          this.unknownWord([token]);
        }
        node2.raws.between += token[1];
      }
    }
    if (node2.prop[0] === "_" || node2.prop[0] === "*") {
      node2.raws.before += node2.prop[0];
      node2.prop = node2.prop.slice(1);
    }
    let firstSpaces = [];
    let next;
    while (tokens.length) {
      next = tokens[0][0];
      if (next !== "space" && next !== "comment") break;
      firstSpaces.push(tokens.shift());
    }
    this.precheckMissedSemicolon(tokens);
    for (let i = tokens.length - 1; i >= 0; i--) {
      token = tokens[i];
      if (token[1].toLowerCase() === "!important") {
        node2.important = true;
        let string = this.stringFrom(tokens, i);
        string = this.spacesFromEnd(tokens) + string;
        if (string !== " !important") node2.raws.important = string;
        break;
      } else if (token[1].toLowerCase() === "important") {
        let cache = tokens.slice(0);
        let str = "";
        for (let j = i; j > 0; j--) {
          let type = cache[j][0];
          if (str.trim().indexOf("!") === 0 && type !== "space") {
            break;
          }
          str = cache.pop()[1] + str;
        }
        if (str.trim().indexOf("!") === 0) {
          node2.important = true;
          node2.raws.important = str;
          tokens = cache;
        }
      }
      if (token[0] !== "space" && token[0] !== "comment") {
        break;
      }
    }
    let hasWord = tokens.some((i) => i[0] !== "space" && i[0] !== "comment");
    if (hasWord) {
      node2.raws.between += firstSpaces.map((i) => i[1]).join("");
      firstSpaces = [];
    }
    this.raw(node2, "value", firstSpaces.concat(tokens), customProperty);
    if (node2.value.includes(":") && !customProperty) {
      this.checkMissedSemicolon(tokens);
    }
  }
  doubleColon(token) {
    throw this.input.error(
      "Double colon",
      { offset: token[2] },
      { offset: token[2] + token[1].length }
    );
  }
  emptyRule(token) {
    let node2 = new Rule$2();
    this.init(node2, token[2]);
    node2.selector = "";
    node2.raws.between = "";
    this.current = node2;
  }
  end(token) {
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }
    this.semicolon = false;
    this.current.raws.after = (this.current.raws.after || "") + this.spaces;
    this.spaces = "";
    if (this.current.parent) {
      this.current.source.end = this.getPosition(token[2]);
      this.current.source.end.offset++;
      this.current = this.current.parent;
    } else {
      this.unexpectedClose(token);
    }
  }
  endFile() {
    if (this.current.parent) this.unclosedBlock();
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }
    this.current.raws.after = (this.current.raws.after || "") + this.spaces;
    this.root.source.end = this.getPosition(this.tokenizer.position());
  }
  freeSemicolon(token) {
    this.spaces += token[1];
    if (this.current.nodes) {
      let prev = this.current.nodes[this.current.nodes.length - 1];
      if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
        prev.raws.ownSemicolon = this.spaces;
        this.spaces = "";
      }
    }
  }
  // Helpers
  getPosition(offset) {
    let pos = this.input.fromOffset(offset);
    return {
      column: pos.col,
      line: pos.line,
      offset
    };
  }
  init(node2, offset) {
    this.current.push(node2);
    node2.source = {
      input: this.input,
      start: this.getPosition(offset)
    };
    node2.raws.before = this.spaces;
    this.spaces = "";
    if (node2.type !== "comment") this.semicolon = false;
  }
  other(start) {
    let end = false;
    let type = null;
    let colon = false;
    let bracket = null;
    let brackets = [];
    let customProperty = start[1].startsWith("--");
    let tokens = [];
    let token = start;
    while (token) {
      type = token[0];
      tokens.push(token);
      if (type === "(" || type === "[") {
        if (!bracket) bracket = token;
        brackets.push(type === "(" ? ")" : "]");
      } else if (customProperty && colon && type === "{") {
        if (!bracket) bracket = token;
        brackets.push("}");
      } else if (brackets.length === 0) {
        if (type === ";") {
          if (colon) {
            this.decl(tokens, customProperty);
            return;
          } else {
            break;
          }
        } else if (type === "{") {
          this.rule(tokens);
          return;
        } else if (type === "}") {
          this.tokenizer.back(tokens.pop());
          end = true;
          break;
        } else if (type === ":") {
          colon = true;
        }
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop();
        if (brackets.length === 0) bracket = null;
      }
      token = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile()) end = true;
    if (brackets.length > 0) this.unclosedBracket(bracket);
    if (end && colon) {
      if (!customProperty) {
        while (tokens.length) {
          token = tokens[tokens.length - 1][0];
          if (token !== "space" && token !== "comment") break;
          this.tokenizer.back(tokens.pop());
        }
      }
      this.decl(tokens, customProperty);
    } else {
      this.unknownWord(tokens);
    }
  }
  parse() {
    let token;
    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken();
      switch (token[0]) {
        case "space":
          this.spaces += token[1];
          break;
        case ";":
          this.freeSemicolon(token);
          break;
        case "}":
          this.end(token);
          break;
        case "comment":
          this.comment(token);
          break;
        case "at-word":
          this.atrule(token);
          break;
        case "{":
          this.emptyRule(token);
          break;
        default:
          this.other(token);
          break;
      }
    }
    this.endFile();
  }
  precheckMissedSemicolon() {
  }
  raw(node2, prop, tokens, customProperty) {
    let token, type;
    let length = tokens.length;
    let value = "";
    let clean = true;
    let next, prev;
    for (let i = 0; i < length; i += 1) {
      token = tokens[i];
      type = token[0];
      if (type === "space" && i === length - 1 && !customProperty) {
        clean = false;
      } else if (type === "comment") {
        prev = tokens[i - 1] ? tokens[i - 1][0] : "empty";
        next = tokens[i + 1] ? tokens[i + 1][0] : "empty";
        if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
          if (value.slice(-1) === ",") {
            clean = false;
          } else {
            value += token[1];
          }
        } else {
          clean = false;
        }
      } else {
        value += token[1];
      }
    }
    if (!clean) {
      let raw = tokens.reduce((all, i) => all + i[1], "");
      node2.raws[prop] = { raw, value };
    }
    node2[prop] = value;
  }
  rule(tokens) {
    tokens.pop();
    let node2 = new Rule$2();
    this.init(node2, tokens[0][2]);
    node2.raws.between = this.spacesAndCommentsFromEnd(tokens);
    this.raw(node2, "selector", tokens);
    this.current = node2;
  }
  spacesAndCommentsFromEnd(tokens) {
    let lastTokenType;
    let spaces = "";
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0];
      if (lastTokenType !== "space" && lastTokenType !== "comment") break;
      spaces = tokens.pop()[1] + spaces;
    }
    return spaces;
  }
  // Errors
  spacesAndCommentsFromStart(tokens) {
    let next;
    let spaces = "";
    while (tokens.length) {
      next = tokens[0][0];
      if (next !== "space" && next !== "comment") break;
      spaces += tokens.shift()[1];
    }
    return spaces;
  }
  spacesFromEnd(tokens) {
    let lastTokenType;
    let spaces = "";
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0];
      if (lastTokenType !== "space") break;
      spaces = tokens.pop()[1] + spaces;
    }
    return spaces;
  }
  stringFrom(tokens, from) {
    let result2 = "";
    for (let i = from; i < tokens.length; i++) {
      result2 += tokens[i][1];
    }
    tokens.splice(from, tokens.length - from);
    return result2;
  }
  unclosedBlock() {
    let pos = this.current.source.start;
    throw this.input.error("Unclosed block", pos.line, pos.column);
  }
  unclosedBracket(bracket) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: bracket[2] },
      { offset: bracket[2] + 1 }
    );
  }
  unexpectedClose(token) {
    throw this.input.error(
      "Unexpected }",
      { offset: token[2] },
      { offset: token[2] + 1 }
    );
  }
  unknownWord(tokens) {
    throw this.input.error(
      "Unknown word",
      { offset: tokens[0][2] },
      { offset: tokens[0][2] + tokens[0][1].length }
    );
  }
  unnamedAtrule(node2, token) {
    throw this.input.error(
      "At-rule without name",
      { offset: token[2] },
      { offset: token[2] + token[1].length }
    );
  }
};
var parser = Parser$1;
let Container$2 = container;
let Parser2 = parser;
let Input$2 = input;
function parse$3(css, opts) {
  let input2 = new Input$2(css, opts);
  let parser2 = new Parser2(input2);
  try {
    parser2.parse();
  } catch (e) {
    if (true) {
      if (e.name === "CssSyntaxError" && opts && opts.from) {
        if (/\.scss$/i.test(opts.from)) {
          e.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
        } else if (/\.sass/i.test(opts.from)) {
          e.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
        } else if (/\.less$/i.test(opts.from)) {
          e.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
        }
      }
    }
    throw e;
  }
  return parser2.root;
}
var parse_1 = parse$3;
parse$3.default = parse$3;
Container$2.registerParse(parse$3);
let { isClean, my } = symbols;
let MapGenerator$1 = mapGenerator;
let stringify$2 = stringify_1;
let Container$1 = container;
let Document$2 = document$1;
let warnOnce$1 = warnOnce$2;
let Result$2 = result;
let parse$2 = parse_1;
let Root$3 = root;
const TYPE_TO_CLASS_NAME = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
};
const PLUGIN_PROPS = {
  AtRule: true,
  AtRuleExit: true,
  Comment: true,
  CommentExit: true,
  Declaration: true,
  DeclarationExit: true,
  Document: true,
  DocumentExit: true,
  Once: true,
  OnceExit: true,
  postcssPlugin: true,
  prepare: true,
  Root: true,
  RootExit: true,
  Rule: true,
  RuleExit: true
};
const NOT_VISITORS = {
  Once: true,
  postcssPlugin: true,
  prepare: true
};
const CHILDREN = 0;
function isPromise(obj) {
  return typeof obj === "object" && typeof obj.then === "function";
}
function getEvents(node2) {
  let key = false;
  let type = TYPE_TO_CLASS_NAME[node2.type];
  if (node2.type === "decl") {
    key = node2.prop.toLowerCase();
  } else if (node2.type === "atrule") {
    key = node2.name.toLowerCase();
  }
  if (key && node2.append) {
    return [
      type,
      type + "-" + key,
      CHILDREN,
      type + "Exit",
      type + "Exit-" + key
    ];
  } else if (key) {
    return [type, type + "-" + key, type + "Exit", type + "Exit-" + key];
  } else if (node2.append) {
    return [type, CHILDREN, type + "Exit"];
  } else {
    return [type, type + "Exit"];
  }
}
function toStack(node2) {
  let events;
  if (node2.type === "document") {
    events = ["Document", CHILDREN, "DocumentExit"];
  } else if (node2.type === "root") {
    events = ["Root", CHILDREN, "RootExit"];
  } else {
    events = getEvents(node2);
  }
  return {
    eventIndex: 0,
    events,
    iterator: 0,
    node: node2,
    visitorIndex: 0,
    visitors: []
  };
}
function cleanMarks(node2) {
  node2[isClean] = false;
  if (node2.nodes) node2.nodes.forEach((i) => cleanMarks(i));
  return node2;
}
let postcss$2 = {};
let LazyResult$2 = class LazyResult {
  constructor(processor2, css, opts) {
    this.stringified = false;
    this.processed = false;
    let root2;
    if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) {
      root2 = cleanMarks(css);
    } else if (css instanceof LazyResult || css instanceof Result$2) {
      root2 = cleanMarks(css.root);
      if (css.map) {
        if (typeof opts.map === "undefined") opts.map = {};
        if (!opts.map.inline) opts.map.inline = false;
        opts.map.prev = css.map;
      }
    } else {
      let parser2 = parse$2;
      if (opts.syntax) parser2 = opts.syntax.parse;
      if (opts.parser) parser2 = opts.parser;
      if (parser2.parse) parser2 = parser2.parse;
      try {
        root2 = parser2(css, opts);
      } catch (error) {
        this.processed = true;
        this.error = error;
      }
      if (root2 && !root2[my]) {
        Container$1.rebuild(root2);
      }
    }
    this.result = new Result$2(processor2, root2, opts);
    this.helpers = __spreadProps(__spreadValues({}, postcss$2), { postcss: postcss$2, result: this.result });
    this.plugins = this.processor.plugins.map((plugin2) => {
      if (typeof plugin2 === "object" && plugin2.prepare) {
        return __spreadValues(__spreadValues({}, plugin2), plugin2.prepare(this.result));
      } else {
        return plugin2;
      }
    });
  }
  async() {
    if (this.error) return Promise.reject(this.error);
    if (this.processed) return Promise.resolve(this.result);
    if (!this.processing) {
      this.processing = this.runAsync();
    }
    return this.processing;
  }
  catch(onRejected) {
    return this.async().catch(onRejected);
  }
  finally(onFinally) {
    return this.async().then(onFinally, onFinally);
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(error, node2) {
    let plugin2 = this.result.lastPlugin;
    try {
      if (node2) node2.addToError(error);
      this.error = error;
      if (error.name === "CssSyntaxError" && !error.plugin) {
        error.plugin = plugin2.postcssPlugin;
        error.setMessage();
      } else if (plugin2.postcssVersion) {
        if (true) {
          let pluginName = plugin2.postcssPlugin;
          let pluginVer = plugin2.postcssVersion;
          let runtimeVer = this.result.processor.version;
          let a = pluginVer.split(".");
          let b = runtimeVer.split(".");
          if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
            console.error(
              "Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below."
            );
          }
        }
      }
    } catch (err) {
      if (console && console.error) console.error(err);
    }
    return error;
  }
  prepareVisitors() {
    this.listeners = {};
    let add = (plugin2, type, cb) => {
      if (!this.listeners[type]) this.listeners[type] = [];
      this.listeners[type].push([plugin2, cb]);
    };
    for (let plugin2 of this.plugins) {
      if (typeof plugin2 === "object") {
        for (let event in plugin2) {
          if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
            throw new Error(
              `Unknown event ${event} in ${plugin2.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          }
          if (!NOT_VISITORS[event]) {
            if (typeof plugin2[event] === "object") {
              for (let filter in plugin2[event]) {
                if (filter === "*") {
                  add(plugin2, event, plugin2[event][filter]);
                } else {
                  add(
                    plugin2,
                    event + "-" + filter.toLowerCase(),
                    plugin2[event][filter]
                  );
                }
              }
            } else if (typeof plugin2[event] === "function") {
              add(plugin2, event, plugin2[event]);
            }
          }
        }
      }
    }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  async runAsync() {
    this.plugin = 0;
    for (let i = 0; i < this.plugins.length; i++) {
      let plugin2 = this.plugins[i];
      let promise = this.runOnRoot(plugin2);
      if (isPromise(promise)) {
        try {
          await promise;
        } catch (error) {
          throw this.handleError(error);
        }
      }
    }
    this.prepareVisitors();
    if (this.hasListener) {
      let root2 = this.result.root;
      while (!root2[isClean]) {
        root2[isClean] = true;
        let stack = [toStack(root2)];
        while (stack.length > 0) {
          let promise = this.visitTick(stack);
          if (isPromise(promise)) {
            try {
              await promise;
            } catch (e) {
              let node2 = stack[stack.length - 1].node;
              throw this.handleError(e, node2);
            }
          }
        }
      }
      if (this.listeners.OnceExit) {
        for (let [plugin2, visitor] of this.listeners.OnceExit) {
          this.result.lastPlugin = plugin2;
          try {
            if (root2.type === "document") {
              let roots = root2.nodes.map(
                (subRoot) => visitor(subRoot, this.helpers)
              );
              await Promise.all(roots);
            } else {
              await visitor(root2, this.helpers);
            }
          } catch (e) {
            throw this.handleError(e);
          }
        }
      }
    }
    this.processed = true;
    return this.stringify();
  }
  runOnRoot(plugin2) {
    this.result.lastPlugin = plugin2;
    try {
      if (typeof plugin2 === "object" && plugin2.Once) {
        if (this.result.root.type === "document") {
          let roots = this.result.root.nodes.map(
            (root2) => plugin2.Once(root2, this.helpers)
          );
          if (isPromise(roots[0])) {
            return Promise.all(roots);
          }
          return roots;
        }
        return plugin2.Once(this.result.root, this.helpers);
      } else if (typeof plugin2 === "function") {
        return plugin2(this.result.root, this.result);
      }
    } catch (error) {
      throw this.handleError(error);
    }
  }
  stringify() {
    if (this.error) throw this.error;
    if (this.stringified) return this.result;
    this.stringified = true;
    this.sync();
    let opts = this.result.opts;
    let str = stringify$2;
    if (opts.syntax) str = opts.syntax.stringify;
    if (opts.stringifier) str = opts.stringifier;
    if (str.stringify) str = str.stringify;
    let map = new MapGenerator$1(str, this.result.root, this.result.opts);
    let data = map.generate();
    this.result.css = data[0];
    this.result.map = data[1];
    return this.result;
  }
  sync() {
    if (this.error) throw this.error;
    if (this.processed) return this.result;
    this.processed = true;
    if (this.processing) {
      throw this.getAsyncError();
    }
    for (let plugin2 of this.plugins) {
      let promise = this.runOnRoot(plugin2);
      if (isPromise(promise)) {
        throw this.getAsyncError();
      }
    }
    this.prepareVisitors();
    if (this.hasListener) {
      let root2 = this.result.root;
      while (!root2[isClean]) {
        root2[isClean] = true;
        this.walkSync(root2);
      }
      if (this.listeners.OnceExit) {
        if (root2.type === "document") {
          for (let subRoot of root2.nodes) {
            this.visitSync(this.listeners.OnceExit, subRoot);
          }
        } else {
          this.visitSync(this.listeners.OnceExit, root2);
        }
      }
    }
    return this.result;
  }
  then(onFulfilled, onRejected) {
    if (true) {
      if (!("from" in this.opts)) {
        warnOnce$1(
          "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
        );
      }
    }
    return this.async().then(onFulfilled, onRejected);
  }
  toString() {
    return this.css;
  }
  visitSync(visitors, node2) {
    for (let [plugin2, visitor] of visitors) {
      this.result.lastPlugin = plugin2;
      let promise;
      try {
        promise = visitor(node2, this.helpers);
      } catch (e) {
        throw this.handleError(e, node2.proxyOf);
      }
      if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
        return true;
      }
      if (isPromise(promise)) {
        throw this.getAsyncError();
      }
    }
  }
  visitTick(stack) {
    let visit2 = stack[stack.length - 1];
    let { node: node2, visitors } = visit2;
    if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
      stack.pop();
      return;
    }
    if (visitors.length > 0 && visit2.visitorIndex < visitors.length) {
      let [plugin2, visitor] = visitors[visit2.visitorIndex];
      visit2.visitorIndex += 1;
      if (visit2.visitorIndex === visitors.length) {
        visit2.visitors = [];
        visit2.visitorIndex = 0;
      }
      this.result.lastPlugin = plugin2;
      try {
        return visitor(node2.toProxy(), this.helpers);
      } catch (e) {
        throw this.handleError(e, node2);
      }
    }
    if (visit2.iterator !== 0) {
      let iterator = visit2.iterator;
      let child;
      while (child = node2.nodes[node2.indexes[iterator]]) {
        node2.indexes[iterator] += 1;
        if (!child[isClean]) {
          child[isClean] = true;
          stack.push(toStack(child));
          return;
        }
      }
      visit2.iterator = 0;
      delete node2.indexes[iterator];
    }
    let events = visit2.events;
    while (visit2.eventIndex < events.length) {
      let event = events[visit2.eventIndex];
      visit2.eventIndex += 1;
      if (event === CHILDREN) {
        if (node2.nodes && node2.nodes.length) {
          node2[isClean] = true;
          visit2.iterator = node2.getIterator();
        }
        return;
      } else if (this.listeners[event]) {
        visit2.visitors = this.listeners[event];
        return;
      }
    }
    stack.pop();
  }
  walkSync(node2) {
    node2[isClean] = true;
    let events = getEvents(node2);
    for (let event of events) {
      if (event === CHILDREN) {
        if (node2.nodes) {
          node2.each((child) => {
            if (!child[isClean]) this.walkSync(child);
          });
        }
      } else {
        let visitors = this.listeners[event];
        if (visitors) {
          if (this.visitSync(visitors, node2.toProxy())) return;
        }
      }
    }
  }
  warnings() {
    return this.sync().warnings();
  }
  get content() {
    return this.stringify().content;
  }
  get css() {
    return this.stringify().css;
  }
  get map() {
    return this.stringify().map;
  }
  get messages() {
    return this.sync().messages;
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    return this.sync().root;
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
};
LazyResult$2.registerPostcss = (dependant) => {
  postcss$2 = dependant;
};
var lazyResult = LazyResult$2;
LazyResult$2.default = LazyResult$2;
Root$3.registerLazyResult(LazyResult$2);
Document$2.registerLazyResult(LazyResult$2);
let MapGenerator2 = mapGenerator;
let stringify$1 = stringify_1;
let warnOnce2 = warnOnce$2;
let parse$1 = parse_1;
const Result$1 = result;
let NoWorkResult$1 = class NoWorkResult {
  constructor(processor2, css, opts) {
    css = css.toString();
    this.stringified = false;
    this._processor = processor2;
    this._css = css;
    this._opts = opts;
    this._map = void 0;
    let root2;
    let str = stringify$1;
    this.result = new Result$1(this._processor, root2, this._opts);
    this.result.css = css;
    let self = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return self.root;
      }
    });
    let map = new MapGenerator2(str, root2, this._opts, css);
    if (map.isMap()) {
      let [generatedCSS, generatedMap] = map.generate();
      if (generatedCSS) {
        this.result.css = generatedCSS;
      }
      if (generatedMap) {
        this.result.map = generatedMap;
      }
    } else {
      map.clearAnnotation();
      this.result.css = map.css;
    }
  }
  async() {
    if (this.error) return Promise.reject(this.error);
    return Promise.resolve(this.result);
  }
  catch(onRejected) {
    return this.async().catch(onRejected);
  }
  finally(onFinally) {
    return this.async().then(onFinally, onFinally);
  }
  sync() {
    if (this.error) throw this.error;
    return this.result;
  }
  then(onFulfilled, onRejected) {
    if (true) {
      if (!("from" in this._opts)) {
        warnOnce2(
          "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
        );
      }
    }
    return this.async().then(onFulfilled, onRejected);
  }
  toString() {
    return this._css;
  }
  warnings() {
    return [];
  }
  get content() {
    return this.result.css;
  }
  get css() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get messages() {
    return [];
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    if (this._root) {
      return this._root;
    }
    let root2;
    let parser2 = parse$1;
    try {
      root2 = parser2(this._css, this._opts);
    } catch (error) {
      this.error = error;
    }
    if (this.error) {
      throw this.error;
    } else {
      this._root = root2;
      return root2;
    }
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
};
var noWorkResult = NoWorkResult$1;
NoWorkResult$1.default = NoWorkResult$1;
let NoWorkResult2 = noWorkResult;
let LazyResult$1 = lazyResult;
let Document$1 = document$1;
let Root$2 = root;
let Processor$1 = class Processor {
  constructor(plugins = []) {
    this.version = "8.4.38";
    this.plugins = this.normalize(plugins);
  }
  normalize(plugins) {
    let normalized = [];
    for (let i of plugins) {
      if (i.postcss === true) {
        i = i();
      } else if (i.postcss) {
        i = i.postcss;
      }
      if (typeof i === "object" && Array.isArray(i.plugins)) {
        normalized = normalized.concat(i.plugins);
      } else if (typeof i === "object" && i.postcssPlugin) {
        normalized.push(i);
      } else if (typeof i === "function") {
        normalized.push(i);
      } else if (typeof i === "object" && (i.parse || i.stringify)) {
        if (true) {
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
        }
      } else {
        throw new Error(i + " is not a PostCSS plugin");
      }
    }
    return normalized;
  }
  process(css, opts = {}) {
    if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) {
      return new NoWorkResult2(this, css, opts);
    } else {
      return new LazyResult$1(this, css, opts);
    }
  }
  use(plugin2) {
    this.plugins = this.plugins.concat(this.normalize([plugin2]));
    return this;
  }
};
var processor = Processor$1;
Processor$1.default = Processor$1;
Root$2.registerProcessor(Processor$1);
Document$1.registerProcessor(Processor$1);
let Declaration$1 = declaration;
let PreviousMap2 = previousMap;
let Comment$1 = comment;
let AtRule$1 = atRule;
let Input$1 = input;
let Root$1 = root;
let Rule$1 = rule;
function fromJSON$1(json, inputs) {
  if (Array.isArray(json)) return json.map((n) => fromJSON$1(n));
  let _a = json, { inputs: ownInputs } = _a, defaults = __objRest(_a, ["inputs"]);
  if (ownInputs) {
    inputs = [];
    for (let input2 of ownInputs) {
      let inputHydrated = __spreadProps(__spreadValues({}, input2), { __proto__: Input$1.prototype });
      if (inputHydrated.map) {
        inputHydrated.map = __spreadProps(__spreadValues({}, inputHydrated.map), {
          __proto__: PreviousMap2.prototype
        });
      }
      inputs.push(inputHydrated);
    }
  }
  if (defaults.nodes) {
    defaults.nodes = json.nodes.map((n) => fromJSON$1(n, inputs));
  }
  if (defaults.source) {
    let _b = defaults.source, { inputId } = _b, source = __objRest(_b, ["inputId"]);
    defaults.source = source;
    if (inputId != null) {
      defaults.source.input = inputs[inputId];
    }
  }
  if (defaults.type === "root") {
    return new Root$1(defaults);
  } else if (defaults.type === "decl") {
    return new Declaration$1(defaults);
  } else if (defaults.type === "rule") {
    return new Rule$1(defaults);
  } else if (defaults.type === "comment") {
    return new Comment$1(defaults);
  } else if (defaults.type === "atrule") {
    return new AtRule$1(defaults);
  } else {
    throw new Error("Unknown node type: " + json.type);
  }
}
var fromJSON_1 = fromJSON$1;
fromJSON$1.default = fromJSON$1;
let CssSyntaxError2 = cssSyntaxError;
let Declaration2 = declaration;
let LazyResult2 = lazyResult;
let Container2 = container;
let Processor2 = processor;
let stringify = stringify_1;
let fromJSON = fromJSON_1;
let Document2 = document$1;
let Warning2 = warning;
let Comment2 = comment;
let AtRule2 = atRule;
let Result2 = result;
let Input2 = input;
let parse = parse_1;
let list = list_1;
let Rule2 = rule;
let Root2 = root;
let Node2 = node;
function postcss(...plugins) {
  if (plugins.length === 1 && Array.isArray(plugins[0])) {
    plugins = plugins[0];
  }
  return new Processor2(plugins);
}
postcss.plugin = function plugin(name, initializer) {
  let warningPrinted = false;
  function creator(...args) {
    if (console && console.warn && !warningPrinted) {
      warningPrinted = true;
      console.warn(
        name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"
      );
      if (process.env.LANG && process.env.LANG.startsWith("cn")) {
        console.warn(
          name + ": \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"
        );
      }
    }
    let transformer = initializer(...args);
    transformer.postcssPlugin = name;
    transformer.postcssVersion = new Processor2().version;
    return transformer;
  }
  let cache;
  Object.defineProperty(creator, "postcss", {
    get() {
      if (!cache) cache = creator();
      return cache;
    }
  });
  creator.process = function(css, processOpts, pluginOpts) {
    return postcss([creator(pluginOpts)]).process(css, processOpts);
  };
  return creator;
};
postcss.stringify = stringify;
postcss.parse = parse;
postcss.fromJSON = fromJSON;
postcss.list = list;
postcss.comment = (defaults) => new Comment2(defaults);
postcss.atRule = (defaults) => new AtRule2(defaults);
postcss.decl = (defaults) => new Declaration2(defaults);
postcss.rule = (defaults) => new Rule2(defaults);
postcss.root = (defaults) => new Root2(defaults);
postcss.document = (defaults) => new Document2(defaults);
postcss.CssSyntaxError = CssSyntaxError2;
postcss.Declaration = Declaration2;
postcss.Container = Container2;
postcss.Processor = Processor2;
postcss.Document = Document2;
postcss.Comment = Comment2;
postcss.Warning = Warning2;
postcss.AtRule = AtRule2;
postcss.Result = Result2;
postcss.Input = Input2;
postcss.Rule = Rule2;
postcss.Root = Root2;
postcss.Node = Node2;
LazyResult2.registerPostcss(postcss);
var postcss_1 = postcss;
postcss.default = postcss;
const postcss$1 = /* @__PURE__ */ getDefaultExportFromCjs(postcss_1);
postcss$1.stringify;
postcss$1.fromJSON;
postcss$1.plugin;
postcss$1.parse;
postcss$1.list;
postcss$1.document;
postcss$1.comment;
postcss$1.atRule;
postcss$1.rule;
postcss$1.decl;
postcss$1.root;
postcss$1.CssSyntaxError;
postcss$1.Declaration;
postcss$1.Container;
postcss$1.Processor;
postcss$1.Document;
postcss$1.Comment;
postcss$1.Warning;
postcss$1.AtRule;
postcss$1.Result;
postcss$1.Input;
postcss$1.Rule;
postcss$1.Root;
postcss$1.Node;
const tagMap = {
  script: "noscript",
  // camel case svg element tag names
  altglyph: "altGlyph",
  altglyphdef: "altGlyphDef",
  altglyphitem: "altGlyphItem",
  animatecolor: "animateColor",
  animatemotion: "animateMotion",
  animatetransform: "animateTransform",
  clippath: "clipPath",
  feblend: "feBlend",
  fecolormatrix: "feColorMatrix",
  fecomponenttransfer: "feComponentTransfer",
  fecomposite: "feComposite",
  feconvolvematrix: "feConvolveMatrix",
  fediffuselighting: "feDiffuseLighting",
  fedisplacementmap: "feDisplacementMap",
  fedistantlight: "feDistantLight",
  fedropshadow: "feDropShadow",
  feflood: "feFlood",
  fefunca: "feFuncA",
  fefuncb: "feFuncB",
  fefuncg: "feFuncG",
  fefuncr: "feFuncR",
  fegaussianblur: "feGaussianBlur",
  feimage: "feImage",
  femerge: "feMerge",
  femergenode: "feMergeNode",
  femorphology: "feMorphology",
  feoffset: "feOffset",
  fepointlight: "fePointLight",
  fespecularlighting: "feSpecularLighting",
  fespotlight: "feSpotLight",
  fetile: "feTile",
  feturbulence: "feTurbulence",
  foreignobject: "foreignObject",
  glyphref: "glyphRef",
  lineargradient: "linearGradient",
  radialgradient: "radialGradient"
};
function getTagName(n) {
  let tagName = tagMap[n.tagName] ? tagMap[n.tagName] : n.tagName;
  if (tagName === "link" && n.attributes._cssText) {
    tagName = "style";
  }
  return tagName;
}
function adaptCssForReplay(cssText, cache) {
  const cachedStyle = cache == null ? void 0 : cache.stylesWithHoverClass.get(cssText);
  if (cachedStyle) return cachedStyle;
  let result2 = cssText;
  try {
    const ast = postcss$1([
      mediaSelectorPlugin,
      pseudoClassPlugin
    ]).process(cssText);
    result2 = ast.css;
  } catch (error) {
    console.warn("Failed to adapt css for replay", error);
  }
  cache == null ? void 0 : cache.stylesWithHoverClass.set(cssText, result2);
  return result2;
}
function createCache() {
  const stylesWithHoverClass = /* @__PURE__ */ new Map();
  return {
    stylesWithHoverClass
  };
}
function applyCssSplits(n, cssText, hackCss, cache) {
  const childTextNodes = [];
  for (const scn of n.childNodes) {
    if (scn.type === NodeType.Text) {
      childTextNodes.push(scn);
    }
  }
  const cssTextSplits = cssText.split("/* rr_split */");
  while (cssTextSplits.length > 1 && cssTextSplits.length > childTextNodes.length) {
    cssTextSplits.splice(-2, 2, cssTextSplits.slice(-2).join(""));
  }
  let adaptedCss = "";
  if (hackCss) {
    adaptedCss = adaptCssForReplay(cssTextSplits.join(""), cache);
  }
  let startIndex = 0;
  for (let i = 0; i < childTextNodes.length; i++) {
    if (i === cssTextSplits.length) {
      break;
    }
    const childTextNode = childTextNodes[i];
    if (!hackCss) {
      childTextNode.textContent = cssTextSplits[i];
    } else if (i < cssTextSplits.length - 1) {
      let endIndex = startIndex;
      let endSearch = cssTextSplits[i + 1].length;
      endSearch = Math.min(endSearch, 30);
      let found = false;
      for (; endSearch > 2; endSearch--) {
        const searchBit = cssTextSplits[i + 1].substring(0, endSearch);
        const searchIndex = adaptedCss.substring(startIndex).indexOf(searchBit);
        found = searchIndex !== -1;
        if (found) {
          endIndex += searchIndex;
          break;
        }
      }
      if (!found) {
        endIndex += cssTextSplits[i].length;
      }
      childTextNode.textContent = adaptedCss.substring(startIndex, endIndex);
      startIndex = endIndex;
    } else {
      childTextNode.textContent = adaptedCss.substring(startIndex);
    }
  }
}
function buildStyleNode(n, styleEl, cssText, options) {
  const { doc, hackCss, cache } = options;
  if (n.childNodes.length) {
    applyCssSplits(n, cssText, hackCss, cache);
  } else {
    if (hackCss) {
      cssText = adaptCssForReplay(cssText, cache);
    }
    styleEl.appendChild(doc.createTextNode(cssText));
  }
}
function buildNode(n, options) {
  var _a, _b;
  const { doc, hackCss, cache } = options;
  switch (n.type) {
    case NodeType.Document:
      return doc.implementation.createDocument(null, "", null);
    case NodeType.DocumentType:
      return doc.implementation.createDocumentType(
        n.name || "html",
        n.publicId,
        n.systemId
      );
    case NodeType.Element: {
      const tagName = getTagName(n);
      let node2;
      if (n.isSVG) {
        node2 = doc.createElementNS("http://www.w3.org/2000/svg", tagName);
      } else {
        if (
          // If the tag name is a custom element name
          n.isCustom && // If the browser supports custom elements
          ((_a = doc.defaultView) == null ? void 0 : _a.customElements) && // If the custom element hasn't been defined yet
          !doc.defaultView.customElements.get(n.tagName)
        )
          doc.defaultView.customElements.define(
            n.tagName,
            class extends doc.defaultView.HTMLElement {
            }
          );
        node2 = doc.createElement(tagName);
      }
      const specialAttributes = {};
      for (const name in n.attributes) {
        if (!Object.prototype.hasOwnProperty.call(n.attributes, name)) {
          continue;
        }
        let value = n.attributes[name];
        if (tagName === "option" && name === "selected" && value === false) {
          continue;
        }
        if (value === null) {
          continue;
        }
        if (value === true) value = "";
        if (name.startsWith("rr_")) {
          specialAttributes[name] = value;
          continue;
        }
        if (typeof value !== "string") ;
        else if (tagName === "style" && name === "_cssText") {
          buildStyleNode(n, node2, value, options);
          continue;
        } else if (tagName === "textarea" && name === "value") {
          node2.appendChild(doc.createTextNode(value));
          n.childNodes = [];
          continue;
        }
        try {
          if (n.isSVG && name === "xlink:href") {
            node2.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              name,
              value.toString()
            );
          } else if (name === "onload" || name === "onclick" || name.substring(0, 7) === "onmouse") {
            node2.setAttribute("_" + name, value.toString());
          } else if (tagName === "meta" && n.attributes["http-equiv"] === "Content-Security-Policy" && name === "content") {
            node2.setAttribute("csp-content", value.toString());
            continue;
          } else if (tagName === "link" && (n.attributes.rel === "preload" && n.attributes.as === "script" || n.attributes.rel === "modulepreload")) {
          } else if (tagName === "link" && n.attributes.rel === "prefetch" && typeof n.attributes.href === "string" && extractFileExtension(n.attributes.href) === "js") {
          } else if (tagName === "img" && n.attributes.srcset && n.attributes.rr_dataURL) {
            node2.setAttribute(
              "rrweb-original-srcset",
              n.attributes.srcset
            );
          } else {
            node2.setAttribute(name, value.toString());
          }
        } catch (error) {
        }
      }
      for (const name in specialAttributes) {
        const value = specialAttributes[name];
        if (tagName === "canvas" && name === "rr_dataURL") {
          const image = doc.createElement("img");
          image.onload = () => {
            const ctx = node2.getContext("2d");
            if (ctx) {
              ctx.drawImage(image, 0, 0, image.width, image.height);
            }
          };
          image.src = value.toString();
          if (node2.RRNodeType)
            node2.rr_dataURL = value.toString();
        } else if (tagName === "img" && name === "rr_dataURL") {
          const image = node2;
          if (!image.currentSrc.startsWith("data:")) {
            image.setAttribute(
              "rrweb-original-src",
              n.attributes.src
            );
            image.src = value.toString();
          }
        }
        if (name === "rr_width") {
          node2.style.setProperty("width", value.toString());
        } else if (name === "rr_height") {
          node2.style.setProperty("height", value.toString());
        } else if (name === "rr_mediaCurrentTime" && typeof value === "number") {
          node2.currentTime = value;
        } else if (name === "rr_mediaState") {
          switch (value) {
            case "played":
              node2.play().catch((e) => console.warn("media playback error", e));
              break;
            case "paused":
              node2.pause();
              break;
          }
        } else if (name === "rr_mediaPlaybackRate" && typeof value === "number") {
          node2.playbackRate = value;
        } else if (name === "rr_mediaMuted" && typeof value === "boolean") {
          node2.muted = value;
        } else if (name === "rr_mediaLoop" && typeof value === "boolean") {
          node2.loop = value;
        } else if (name === "rr_mediaVolume" && typeof value === "number") {
          node2.volume = value;
        } else if (name === "rr_open_mode") {
          node2.setAttribute(
            "rr_open_mode",
            value
          );
        }
      }
      if (n.isShadowHost) {
        if (!node2.shadowRoot) {
          node2.attachShadow({ mode: "open" });
          (_b = n.chromaticAdoptedStylesheets) == null ? void 0 : _b.forEach(
            (chromaticAdoptedStylesheet) => {
              var _a2;
              const styleSheet = new CSSStyleSheet();
              styleSheet.replaceSync(chromaticAdoptedStylesheet);
              (_a2 = node2.shadowRoot) == null ? void 0 : _a2.adoptedStyleSheets.push(styleSheet);
            }
          );
        } else {
          while (node2.shadowRoot.firstChild) {
            node2.shadowRoot.removeChild(node2.shadowRoot.firstChild);
          }
        }
      }
      return node2;
    }
    case NodeType.Text:
      if (n.isStyle && hackCss) {
        return doc.createTextNode(adaptCssForReplay(n.textContent, cache));
      }
      return doc.createTextNode(n.textContent);
    case NodeType.CDATA:
      return doc.createCDATASection(n.textContent);
    case NodeType.Comment:
      return doc.createComment(n.textContent);
    default:
      return null;
  }
}
function buildNodeWithSN(n, options) {
  const {
    doc,
    mirror,
    skipChild = false,
    hackCss = true,
    afterAppend,
    cache
  } = options;
  if (mirror.has(n.id)) {
    const nodeInMirror = mirror.getNode(n.id);
    const meta = mirror.getMeta(nodeInMirror);
    if (isNodeMetaEqual(meta, n)) return mirror.getNode(n.id);
  }
  let node2 = buildNode(n, { doc, hackCss, cache });
  if (!node2) {
    return null;
  }
  if (n.rootId && mirror.getNode(n.rootId) !== doc) {
    mirror.replace(n.rootId, doc);
  }
  if (n.type === NodeType.Document) {
    doc.close();
    doc.open();
    if (n.compatMode === "BackCompat" && n.childNodes && n.childNodes[0].type !== NodeType.DocumentType) {
      if (n.childNodes[0].type === NodeType.Element && "xmlns" in n.childNodes[0].attributes && n.childNodes[0].attributes.xmlns === "http://www.w3.org/1999/xhtml") {
        doc.write(
          '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">'
        );
      } else {
        doc.write(
          '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">'
        );
      }
    }
    node2 = doc;
  }
  mirror.add(node2, n);
  if ((n.type === NodeType.Document || n.type === NodeType.Element) && !skipChild) {
    for (const childN of n.childNodes) {
      const childNode = buildNodeWithSN(childN, {
        doc,
        mirror,
        skipChild: false,
        hackCss,
        afterAppend,
        cache
      });
      if (!childNode) {
        console.warn("Failed to rebuild", childN);
        continue;
      }
      if (childN.isShadow && isElement(node2) && node2.shadowRoot) {
        node2.shadowRoot.appendChild(childNode);
      } else if (n.type === NodeType.Document && childN.type == NodeType.Element) {
        const htmlElement = childNode;
        let body = null;
        htmlElement.childNodes.forEach((child) => {
          if (child.nodeName === "BODY") body = child;
        });
        if (body) {
          htmlElement.removeChild(body);
          node2.appendChild(childNode);
          htmlElement.appendChild(body);
        } else {
          node2.appendChild(childNode);
        }
      } else {
        node2.appendChild(childNode);
      }
      if (afterAppend) {
        afterAppend(childNode, childN.id);
      }
    }
  }
  return node2;
}
function visit(mirror, onVisit) {
  function walk(node2) {
    onVisit(node2);
  }
  for (const id of mirror.getIds()) {
    if (mirror.has(id)) {
      walk(mirror.getNode(id));
    }
  }
}
function handleScroll(node2, mirror) {
  const n = mirror.getMeta(node2);
  if ((n == null ? void 0 : n.type) !== NodeType.Element) {
    return;
  }
  const el = node2;
  for (const name in n.attributes) {
    if (!(Object.prototype.hasOwnProperty.call(n.attributes, name) && name.startsWith("rr_"))) {
      continue;
    }
    const value = n.attributes[name];
    if (name === "rr_scrollLeft") {
      el.scrollLeft = value;
    }
    if (name === "rr_scrollTop") {
      el.scrollTop = value;
    }
  }
}
function rebuild(n, options) {
  const {
    doc,
    onVisit,
    hackCss = true,
    afterAppend,
    cache,
    mirror = new Mirror()
  } = options;
  const node2 = buildNodeWithSN(n, {
    doc,
    mirror,
    skipChild: false,
    hackCss,
    afterAppend,
    cache
  });
  visit(mirror, (visitedNode) => {
    if (onVisit) {
      onVisit(visitedNode);
    }
    handleScroll(visitedNode, mirror);
  });
  return node2;
}
exports.IGNORED_NODE = IGNORED_NODE;
exports.Mirror = Mirror;
exports.absolutifyURLs = absolutifyURLs;
exports.adaptCssForReplay = adaptCssForReplay;
exports.buildNodeWithSN = buildNodeWithSN;
exports.classMatchesRegex = classMatchesRegex;
exports.cleanupSnapshot = cleanupSnapshot;
exports.createCache = createCache;
exports.createMirror = createMirror;
exports.escapeImportStatement = escapeImportStatement;
exports.extractFileExtension = extractFileExtension;
exports.fixSafariColons = fixSafariColons;
exports.genId = genId;
exports.getInputType = getInputType;
exports.ignoreAttribute = ignoreAttribute;
exports.is2DCanvasBlank = is2DCanvasBlank;
exports.isCSSImportRule = isCSSImportRule;
exports.isCSSStyleRule = isCSSStyleRule;
exports.isElement = isElement;
exports.isNativeShadowDom = isNativeShadowDom;
exports.isNodeMetaEqual = isNodeMetaEqual;
exports.isShadowRoot = isShadowRoot;
exports.markCssSplits = markCssSplits;
exports.maskInputValue = maskInputValue;
exports.needMaskingText = needMaskingText;
exports.normalizeCssString = normalizeCssString;
exports.rebuild = rebuild;
exports.serializeNodeWithId = serializeNodeWithId;
exports.snapshot = snapshot;
exports.splitCssText = splitCssText;
exports.stringifyRule = stringifyRule;
exports.stringifyStylesheet = stringifyStylesheet;
exports.toLowerCase = toLowerCase;
exports.transformAttribute = transformAttribute;
exports.visitSnapshot = visitSnapshot;
if (typeof module.exports == "object" && typeof exports == "object") {
  var __cp = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function") {
      for (let key of Object.getOwnPropertyNames(from)) {
        if (!Object.prototype.hasOwnProperty.call(to, key) && key !== except)
        Object.defineProperty(to, key, {
          get: () => from[key],
          enumerable: !(desc = Object.getOwnPropertyDescriptor(from, key)) || desc.enumerable,
        });
      }
    }
    return to;
  };
  module.exports = __cp(module.exports, exports);
}
return module.exports;
}))
//# sourceMappingURL=rrweb-snapshot.umd.cjs.map


/***/ }),

/***/ "./node_modules/.pnpm/@percy+cypress@3.1.7_cypress@15.10.0/node_modules/@percy/cypress/createRegion.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@percy+cypress@3.1.7_cypress@15.10.0/node_modules/@percy/cypress/createRegion.js ***!
  \*************************************************************************************************************/
/***/ ((module) => {

const createRegion = function({
  boundingBox = null,
  elementXpath = null,
  elementCSS = null,
  padding = null,
  algorithm = 'ignore',
  diffSensitivity = null,
  imageIgnoreThreshold = null,
  carouselsEnabled = null,
  bannersEnabled = null,
  adsEnabled = null,
  diffIgnoreThreshold = null
} = {}) {
  const elementSelector = {};
  if (boundingBox) elementSelector.boundingBox = boundingBox;
  if (elementXpath) elementSelector.elementXpath = elementXpath;
  if (elementCSS) elementSelector.elementCSS = elementCSS;

  const region = {
    algorithm,
    elementSelector
  };

  if (padding) {
    region.padding = padding;
  }

  const configuration = {};
  if (['standard', 'intelliignore'].includes(algorithm)) {
    if (diffSensitivity) configuration.diffSensitivity = diffSensitivity;
    if (imageIgnoreThreshold) configuration.imageIgnoreThreshold = imageIgnoreThreshold;
    if (carouselsEnabled) configuration.carouselsEnabled = carouselsEnabled;
    if (bannersEnabled) configuration.bannersEnabled = bannersEnabled;
    if (adsEnabled) configuration.adsEnabled = adsEnabled;
  }

  if (Object.keys(configuration).length > 0) {
    region.configuration = configuration;
  }

  const assertion = {};
  if (diffIgnoreThreshold) {
    assertion.diffIgnoreThreshold = diffIgnoreThreshold;
  }

  if (Object.keys(assertion).length > 0) {
    region.assertion = assertion;
  }

  return region;
};

module.exports = { createRegion };


/***/ }),

/***/ "./node_modules/.pnpm/@percy+cypress@3.1.7_cypress@15.10.0/node_modules/@percy/cypress/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@percy+cypress@3.1.7_cypress@15.10.0/node_modules/@percy/cypress/index.js ***!
  \******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const utils = __webpack_require__(/*! @percy/sdk-utils */ "./node_modules/.pnpm/@percy+sdk-utils@1.31.4/node_modules/@percy/sdk-utils/dist/bundle.js");
const { createRegion } = __webpack_require__(/*! ./createRegion */ "./node_modules/.pnpm/@percy+cypress@3.1.7_cypress@15.10.0/node_modules/@percy/cypress/createRegion.js");

// Collect client and environment information
const sdkPkg = __webpack_require__(/*! ./package.json */ "./node_modules/.pnpm/@percy+cypress@3.1.7_cypress@15.10.0/node_modules/@percy/cypress/package.json");
const CLIENT_INFO = `${sdkPkg.name}/${sdkPkg.version}`;
const ENV_INFO = `cypress/${Cypress.version}`;
// asset discovery should timeout before this
// 1.5 times the 30 second nav timeout
const CY_TIMEOUT = 30 * 1000 * 1.5;

// Maybe set the CLI API address from the environment
utils.percy.address = Cypress.env('PERCY_SERVER_ADDRESS');

// Use Cypress's http:request backend task
utils.request.fetch = async function fetch(url, options) {
  options = { url, retryOnNetworkFailure: false, ...options };
  return Cypress.backend('http:request', options);
};

// Create Cypress log messages
function cylog(message, meta) {
  Cypress.log({
    name: 'percySnapshot',
    displayName: 'percy',
    consoleProps: () => meta,
    message
  });
}

// Take a DOM snapshot and post it to the snapshot endpoint
Cypress.Commands.add('percySnapshot', (name, options = {}) => {
  let log = utils.logger('cypress');

  // if name is not passed
  if (typeof name === 'object') {
    options = name;
    name = undefined;
  }
  // Default name to test title
  name = name || cy.state('runnable').fullTitle();

  const meta = {
    snapshot: {
      name: name,
      testCase: options.testCase
    }
  };

  const withLog = async (func, context, _throw = true) => {
    try {
      return await func();
    } catch (error) {
      log.error(`Got error while ${context}`, meta);
      log.error(error, meta);
      log.error(error.stack, meta);
      if (_throw) throw error;
      return error;
    }
  };

  const withRetry = async (func) => {
    let num = 1;
    const maxNum = 3;
    const sleepTime = 1000;
    let error;

    while (num <= maxNum) {
      try {
        return await func();
      } catch (e) {
        error = e;
        log.error(`Retrying... (${num}/${maxNum})`);
        await new Promise((res) => setTimeout(res, sleepTime));
      }
      num += 1;
    }
    throw error;
  };

  return cy.then({ timeout: CY_TIMEOUT }, async () => {
    if (Cypress.config('isInteractive') &&
        !Cypress.config('enablePercyInteractiveMode')) {
      return cylog('Disabled in interactive mode', {
        details: 'use "cypress run" instead of "cypress open"',
        name
      });
    }

    // Check if Percy is enabled
    if (!await utils.isPercyEnabled()) {
      return cylog('Not running', { name });
    }

    await withLog(async () => {
      // Inject @percy/dom
      if (!window.PercyDOM) {
        // eslint-disable-next-line no-eval
        eval(await utils.fetchPercyDOM());
      }
    }, 'injecting @percy/dom');

    // Serialize and capture the DOM
    return cy.document({ log: false }).then({ timeout: CY_TIMEOUT }, async (dom) => {
      /* istanbul ignore next: no instrumenting injected code */
      let domSnapshot = await withLog(() => {
        return window.PercyDOM.serialize({ ...options, dom });
      }, 'taking dom snapshot');

      // Capture cookies
      return cy.getCookies({ log: false }).then(async (cookies) => {
        if (cookies && cookies.length > 0) {
          domSnapshot.cookies = cookies;
        }

        const throwConfig = Cypress.config('percyThrowErrorOnFailure');
        const _throw = throwConfig === undefined ? false : throwConfig;

        // Post the DOM snapshot to Percy
        let response = await withRetry(async () => await withLog(async () => {
          return await utils.postSnapshot({
            ...options,
            environmentInfo: ENV_INFO,
            clientInfo: CLIENT_INFO,
            domSnapshot,
            url: dom.URL,
            name
          });
        }, 'posting dom snapshot', _throw));

        // Log the snapshot name on success
        cylog(name, meta);

        return response;
      });
    });
  });
});

module.exports = { createRegion };


/***/ }),

/***/ "./node_modules/.pnpm/@percy+cypress@3.1.7_cypress@15.10.0/node_modules/@percy/cypress/package.json":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@percy+cypress@3.1.7_cypress@15.10.0/node_modules/@percy/cypress/package.json ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"@percy/cypress","description":"Cypress client library for visual testing with Percy","version":"3.1.7","license":"MIT","author":"Perceptual Inc.","repository":"https://github.com/percy/percy-cypress","keywords":["cypress","percy","visual testing"],"publishConfig":{"access":"public","tag":"latest"},"main":"index.js","types":"types/index.d.ts","files":["index.js","createRegion.js","types/index.d.ts"],"scripts":{"lint":"eslint --ignore-path .gitignore .","test":"percy exec --testing -- cypress run","coverage":"nyc report --check-coverage","test:coverage":"yarn test && yarn coverage","test:types":"tsd"},"dependencies":{"@percy/sdk-utils":"1.31.4"},"peerDependencies":{"cypress":">=3"},"devDependencies":{"@cypress/code-coverage":"^3.14.7","@percy/cli":"1.31.4","babel-loader":"^10.0.0","babel-plugin-istanbul":"^7.0.1","cypress":"^15.6.0","eslint":"^7.22.0","eslint-config-standard":"^16.0.2","eslint-plugin-cypress":"^2.11.2","eslint-plugin-import":"^2.22.0","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^5.1.0","eslint-plugin-standard":"^5.0.0","nyc":"^17.1.0","tsd":"^0.33.0","webpack":"^5.102.1"}}');

/***/ }),

/***/ "./node_modules/.pnpm/@percy+sdk-utils@1.31.4/node_modules/@percy/sdk-utils/dist/bundle.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@percy+sdk-utils@1.31.4/node_modules/@percy/sdk-utils/dist/bundle.js ***!
  \*************************************************************************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  (function (exports) {
    'use strict';

    const process = (typeof globalThis !== "undefined" && globalThis.process) || {};
    process.env = process.env || {};
    process.env.__PERCY_BROWSERIFIED__ = true;

    // helper to create a version object from a string
    function toVersion(str) {
      str || (str = '0.0.0');
      return str.split(/\.|-/).reduce((version, part, i) => {
        let v = parseInt(part, 10);
        version[i] = isNaN(v) ? part : v;
        return version;
      }, {
        get major() {
          return this[0] || 0;
        },
        get minor() {
          return this[1] || 0;
        },
        get patch() {
          return this[2] || 0;
        },
        get prerelease() {
          return this[3];
        },
        get build() {
          return this[4];
        },
        toString() {
          return str;
        }
      });
    }

    // private version cache
    let version = toVersion();
    let type;

    // contains local percy info
    const info = {
      // get or set the CLI API address via the environment
      get address() {
        return process.env.PERCY_SERVER_ADDRESS || 'http://localhost:5338';
      },
      set address(addr) {
        return process.env.PERCY_SERVER_ADDRESS = addr;
      },
      // version information
      get version() {
        return version;
      },
      set version(v) {
        return version = toVersion(v);
      },
      get type() {
        return type;
      },
      set type(t) {
        return type = t;
      }
    };

    // Helper to send a request to the local CLI API
    async function request(path, options = {}) {
      let url = path.startsWith('http') ? path : `${info.address}${path}`;
      let response = await request.fetch(url, options);

      // maybe parse response body as json
      if (typeof response.body === 'string' && response.headers['content-type'] === 'application/json') {
        try {
          response.body = JSON.parse(response.body);
        } catch (e) {}
      }

      // throw an error if status is not ok
      if (!(response.status >= 200 && response.status < 300)) {
        throw Object.assign(new Error(), {
          message: response.body.error || /* istanbul ignore next: in tests, there's always an error message */
          `${response.status} ${response.statusText}`,
          response
        });
      }
      return response;
    }
    request.post = function post(url, json) {
      return request(url, {
        method: 'POST',
        body: JSON.stringify(json),
        timeout: 600000
      });
    };

    // environment specific implementation
    if (process.env.__PERCY_BROWSERIFIED__) {
      // use window.fetch in browsers
      const winFetch = window.fetch;
      request.fetch = async function fetch(url, options) {
        let response = await winFetch(url, options);
        return {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          body: await response.text()
        };
      };
    } else {
      // use http.request in node
      request.fetch = async function fetch(url, options) {
        let {
          protocol
        } = new URL(url);
        // rollup throws error for -> await ({})
        let {
          default: http
        } = protocol === 'https:' ? await ({}) : await ({});
        const requestOptions = {
          ...options
        };
        try {
          const {
            proxyAgentFor
          } = await ({});
          const agent = proxyAgentFor(url);
          if (agent) {
            requestOptions.agent = agent;
          }
        } catch (error) {
          // Failed to load proxy module or create proxy agent (e.g., missing proxy.js, invalid proxy config)
          // Continue without proxy support - requests will go directly without proxy
          /* istanbul ignore next */
          logger('sdk-utils:request').debug(`Proxy agent unavailable: ${error.message}`);
        }
        return new Promise((resolve, reject) => {
          http.request(url, requestOptions).on('response', response => {
            let body = '';
            response.on('data', chunk => body += chunk.toString());
            response.on('end', () => resolve({
              status: response.statusCode,
              statusText: response.statusMessage,
              headers: response.headers,
              body
            }));
          }).on('error', reject).end(options.body);
        });
      };
    }

    // Used when determining if a message should be logged
    const LOG_LEVELS = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
    };

    // Create a small logger util using the specified namespace
    function logger(namespace) {
      return Object.keys(LOG_LEVELS).reduce((ns, lvl) => Object.assign(ns, {
        [lvl]: (...a) => logger.log(namespace, lvl, ...a)
      }), {});
    }
    Object.assign(logger, {
      // Set and/or return the local loglevel
      loglevel: (lvl = logger.loglevel.lvl) => {
        return logger.loglevel.lvl = lvl || process.env.PERCY_LOGLEVEL || 'info';
      },
      // Track and send/write logs for the specified namespace and log level
      // remote should only be false in case of sensitive/self call for errors
      log: (ns, lvl, msg, meta, remote = true) => {
        let err = typeof msg !== 'string' && (lvl === 'error' || lvl === 'debug');

        // check if the specific level is within the local loglevel range
        if (LOG_LEVELS[lvl] != null && LOG_LEVELS[lvl] >= LOG_LEVELS[logger.loglevel()]) {
          let debug = logger.loglevel() === 'debug';
          let label = debug ? `percy:${ns}` : 'percy';

          // colorize the label when possible for consistency with the CLI logger
          if (!process.env.__PERCY_BROWSERIFIED__) label = `\u001b[95m${label}\u001b[39m`;
          msg = `[${label}] ${err && debug && msg.stack || msg}`;
          if (process.env.__PERCY_BROWSERIFIED__) {
            // use console[warn|error|log] in browsers
            console[['warn', 'error'].includes(lvl) ? lvl : 'log'](msg);
          } else {
            // use process[stdout|stderr].write in node
            process[lvl === 'info' ? 'stdout' : 'stderr'].write(msg + '\n');
          }
          if (remote && (lvl === 'error' || debug)) {
            return request.post('/percy/log', {
              level: lvl,
              message: msg,
              meta
            }).catch(_ => {
              logger.log(ns, 'error', 'Could not send logs to cli', meta, false);
            });
          }
        }
      }
    });

    // Check if Percy is enabled using the healthcheck endpoint
    async function isPercyEnabled() {
      if (info.enabled == null) {
        let log = logger('utils');
        let error;
        try {
          let response = await request('/percy/healthcheck');
          info.version = response.headers['x-percy-core-version'];
          info.config = response.body.config;
          info.build = response.body.build;
          info.enabled = true;
          info.type = response.body.type;
          info.widths = response.body.widths;
        } catch (e) {
          info.enabled = false;
          error = e;
        }
        if (info.enabled && info.version.major !== 1) {
          log.info('Unsupported Percy CLI version, disabling snapshots');
          log.debug(`Found version: ${info.version}`);
          info.enabled = false;
        } else if (!info.enabled) {
          log.info('Percy is not running, disabling snapshots');
          log.debug(error);
        }
      }
      return info.enabled;
    }

    const RETRY_ERROR_CODES = ['ECONNRESET', 'ETIMEDOUT'];
    async function waitForPercyIdle() {
      try {
        return !!(await request('/percy/idle'));
      } catch (e) {
        return RETRY_ERROR_CODES.includes(e.code) && waitForPercyIdle();
      }
    }

    // Fetch and cache the @percy/dom script
    async function fetchPercyDOM() {
      if (info.domScript == null) {
        let response = await request('/percy/dom.js');
        info.domScript = response.body;
      }
      return info.domScript;
    }

    // Post snapshot data to the CLI snapshot endpoint. If the endpoint responds with a build error,
    // indicate that Percy has been disabled.
    async function postSnapshot(options, params) {
      let query = params ? `?${new URLSearchParams(params)}` : '';
      return await request.post(`/percy/snapshot${query}`, options).catch(err => {
        var _err$response;
        if ((_err$response = err.response) !== null && _err$response !== void 0 && (_err$response = _err$response.body) !== null && _err$response !== void 0 && (_err$response = _err$response.build) !== null && _err$response !== void 0 && _err$response.error) {
          info.enabled = false;
        } else {
          throw err;
        }
      });
    }

    // Post snapshot data to the CLI snapshot endpoint. If the endpoint responds with a build error,
    // indicate that Percy has been disabled.
    async function postComparison(options, params) {
      let query = params ? `?${new URLSearchParams(params)}` : '';
      return await request.post(`/percy/comparison${query}`, options).catch(err => {
        var _err$response;
        if ((_err$response = err.response) !== null && _err$response !== void 0 && (_err$response = _err$response.body) !== null && _err$response !== void 0 && (_err$response = _err$response.build) !== null && _err$response !== void 0 && _err$response.error) {
          info.enabled = false;
        } else {
          throw err;
        }
      });
    }

    // Post failed event data to the CLI event endpoint.
    async function postBuildEvents(options) {
      return await request.post('/percy/events', options).catch(err => {
        throw err;
      });
    }

    // Posts to the local Percy server one or more snapshots to flush. Given no arguments, all snapshots
    // will be flushed. Does nothing when Percy is not enabled.
    async function flushSnapshots(options) {
      if (info.enabled) {
        // accept one or more snapshot names
        options && (options = [].concat(options).map(o => typeof o === 'string' ? {
          name: o
        } : o));
        await request.post('/percy/flush', options);
      }
    }

    // Post screenshot data to the CLI automateScreenshot endpoint. If the endpoint responds with a build error,
    // indicate that Percy has been disabled.
    async function captureAutomateScreenshot(options, params) {
      let query = params ? `?${new URLSearchParams(params)}` : '';
      return await request.post(`/percy/automateScreenshot${query}`, options).catch(err => {
        var _err$response;
        if ((_err$response = err.response) !== null && _err$response !== void 0 && (_err$response = _err$response.body) !== null && _err$response !== void 0 && (_err$response = _err$response.build) !== null && _err$response !== void 0 && _err$response.error) {
          info.enabled = false;
        } else {
          throw err;
        }
      });
    }

    var index = /*#__PURE__*/Object.freeze({
      __proto__: null,
      logger: logger,
      percy: info,
      request: request,
      isPercyEnabled: isPercyEnabled,
      waitForPercyIdle: waitForPercyIdle,
      fetchPercyDOM: fetchPercyDOM,
      postSnapshot: postSnapshot,
      postComparison: postComparison,
      flushSnapshots: flushSnapshots,
      captureAutomateScreenshot: captureAutomateScreenshot,
      postBuildEvents: postBuildEvents,
      'default': index
    });

    exports.captureAutomateScreenshot = captureAutomateScreenshot;
    exports["default"] = index;
    exports.fetchPercyDOM = fetchPercyDOM;
    exports.flushSnapshots = flushSnapshots;
    exports.isPercyEnabled = isPercyEnabled;
    exports.logger = logger;
    exports.percy = info;
    exports.postBuildEvents = postBuildEvents;
    exports.postComparison = postComparison;
    exports.postSnapshot = postSnapshot;
    exports.request = request;
    exports.waitForPercyIdle = waitForPercyIdle;

    Object.defineProperty(exports, '__esModule', { value: true });

  })(this.PercySDKUtils = this.PercySDKUtils || {});
}).call(window);

if (true) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (() => window.PercySDKUtils).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


/***/ }),

/***/ "./node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/.pnpm/buffer@5.7.1/node_modules/buffer/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/.pnpm/buffer@5.7.1/node_modules/buffer/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js")
var customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    var proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    var copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        Buffer.from(buf).copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (var i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = (function () {
  var alphabet = '0123456789abcdef'
  var table = new Array(256)
  for (var i = 0; i < 16; ++i) {
    var i16 = i * 16
    for (var j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()


/***/ }),

/***/ "./node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./cypress/support/e2e.js ***!
  \********************************/


__webpack_require__(/*! @percy/cypress */ "./node_modules/.pnpm/@percy+cypress@3.1.7_cypress@15.10.0/node_modules/@percy/cypress/index.js");
__webpack_require__(/*! @chromatic-com/cypress/support */ "./node_modules/.pnpm/@chromatic-com+cypress@0.11.8_@types+react@19.2.14_esbuild@0.25.12_typescript@5.9.3/node_modules/@chromatic-com/cypress/dist/support.js");
__webpack_require__(/*! ./commands */ "./cypress/support/commands.js");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZTJlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCOzs7Ozs7Ozs7Ozs7OztBQ3ZMN0JBLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUdDLElBQUksSUFBSztFQUMvQyxNQUFNQyxRQUFRLEdBQUdKLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDLGlCQUFpQixDQUFDLEVBQUM7O0VBRWhELElBQUlELFFBQVEsS0FBSyxXQUFXLEVBQUU7SUFDNUI7SUFDQSxNQUFNRSxDQUFDLEdBQUdOLE9BQU8sQ0FBQ08sTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUN6QyxNQUFNQyxDQUFDLEdBQUdSLE9BQU8sQ0FBQ08sTUFBTSxDQUFDLGdCQUFnQixDQUFDO0lBQzFDRSxFQUFFLENBQUNDLFlBQVksQ0FBQyxHQUFHUCxJQUFJLE1BQU1HLENBQUMsSUFBSUUsQ0FBQyxFQUFFLENBQUM7SUFDdEM7RUFDRjtFQUVBLElBQUlKLFFBQVEsS0FBSyxPQUFPLEVBQUU7SUFDeEJLLEVBQUUsQ0FBQ0UsYUFBYSxDQUFDUixJQUFJLENBQUM7RUFDeEI7RUFDQTtBQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNmVzs7QUFFYixvQkFBb0IsbUJBQU8sQ0FBQyw0TUFBMEI7O0FBRXRELDRCQUE0Qix5QkFBeUIsd0JBQXdCLEVBQUUsK0JBQStCLGdEQUFnRCxnQ0FBZ0MsZ0JBQWdCLGdCQUFnQixtQ0FBbUMsMkJBQTJCLHFCQUFxQiw0REFBNEQsRUFBRSw0QkFBNEIsNkNBQTZDLDZEQUE2RCxnQ0FBZ0Msb0JBQW9CLGtDQUFrQyxJQUFJLG9CQUFvQixlQUFlLEdBQUcsV0FBVyxHQUFHLEdBQUcsa0JBQWtCLHdDQUF3Qyx5REFBeUQsMEJBQTBCLDBDQUEwQyxZQUFZLDBCQUEwQixHQUFHLEdBQUcsRUFBRSxhQUFhLHdCQUF3QixpQ0FBaUMsaUJBQWlCLGlCQUFpQixtQ0FBbUMscURBQXFELHlCQUF5QixpQ0FBaUMsd0JBQXdCLCtCQUErQiwrQkFBK0IsNkNBQTZDLGdDQUFnQywrQ0FBK0MsMEJBQTBCLG1DQUFtQywyQkFBMkIsc0NBQXNDLDBCQUEwQixnQkFBZ0IsZ0dBQWdHLHlDQUF5Qyw0Q0FBNEMsSUFBSSxFQUFFLGVBQWUseURBQXlELHVCQUF1Qix5Q0FBeUMsa0JBQWtCLDJCQUEyQixnQ0FBZ0MsK0tBQStLLDhFQUE4RSw4Q0FBOEMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3pxRTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLFFBQVEsSUFBdUQ7QUFDL0Q7QUFDQSxNQUFNLEtBQUssRUFNTjtBQUNMLEdBQUc7QUFDSDtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSw2REFBNkQ7QUFDM0k7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRiw2REFBNkQ7QUFDN0k7QUFDQSxxREFBcUQsaUJBQWlCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdCQUFnQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixJQUFJLEdBQUcsaUJBQWlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixJQUFJLEdBQUcsZUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msd0RBQXdEO0FBQ3ZHO0FBQ0EsaUNBQWlDO0FBQ2pDLHVDQUF1QyxzQkFBc0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQjtBQUNBLHVDQUF1QywyQkFBMkI7QUFDbEU7QUFDQTtBQUNBLElBQUk7QUFDSiw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQSwrQkFBK0IsbUJBQW1CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixXQUFXLEVBQUUsU0FBUyxFQUFFLFdBQVc7QUFDekQ7QUFDQTtBQUNBLHNCQUFzQixXQUFXLEVBQUUsU0FBUyxFQUFFLFdBQVc7QUFDekQ7QUFDQTtBQUNBLHNCQUFzQixXQUFXLEVBQUUsK0JBQStCLEVBQUUsV0FBVztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFdBQVc7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCxJQUFJO0FBQ0osZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDRCQUE0QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDRCQUE0QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sa0RBQWtELFVBQVU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxVQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekMsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw2Q0FBNkM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EscUNBQXFDLFNBQVMsV0FBVyxJQUFJO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBLG1CQUFtQixNQUFNO0FBQ3pCLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLFFBQVEsWUFBWTtBQUNwQixRQUFRLDRCQUE0QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsMERBQTBELElBQUk7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDJDQUEyQyxhQUFhO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0JBQXdCLGlCQUFpQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0JBQWtCO0FBQzlCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0JBQStCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsRUFBRTtBQUM5QztBQUNBO0FBQ0EsY0FBYyxFQUFFO0FBQ2hCLGFBQWEsYUFBYSxHQUFHLGFBQWEsR0FBRyxlQUFlO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBLFVBQVUsd0NBQXdDO0FBQ2xELFVBQVUsb0NBQW9DO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsZUFBZSwrQkFBK0I7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixNQUFNLG1GQUFtRjtBQUN6RixNQUFNLDJCQUEyQjtBQUNqQyxNQUFNLDJCQUEyQjtBQUNqQztBQUNBLE1BQU0sTUFBTTtBQUNaLFdBQVcsTUFBTTtBQUNqQixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxlQUFlO0FBQ2pFLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbUZBQW1GO0FBQ3pGLE1BQU0sZ0RBQWdEO0FBQ3RELE1BQU0saUNBQWlDO0FBQ3ZDLE1BQU0sU0FBUztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsMENBQTBDLEtBQUs7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsMENBQTBDO0FBQzlGLHNEQUFzRCxnREFBZ0Q7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLHNDQUFzQyxjQUFjO0FBQ3BELHdDQUF3QyxrQ0FBa0M7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxrQ0FBa0M7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdDQUF3QztBQUM5QyxNQUFNLGtDQUFrQztBQUN4QyxNQUFNLGdCQUFnQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHFCQUFxQixvQkFBb0I7QUFDekMsb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkMsa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLE1BQU07QUFDZCxhQUFhLE1BQU07QUFDbkIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtCQUErQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUN0QixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0MsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdCQUF3QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvQkFBb0I7QUFDNUIsd0JBQXdCO0FBQ3hCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBO0FBQ0EsVUFBVSxvQkFBb0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxRQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrQkFBa0I7QUFDMUIsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUErQztBQUN2RDtBQUNBLHdCQUF3QjtBQUN4QixRQUFRO0FBQ1IsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVSxvQkFBb0I7QUFDOUI7QUFDQTtBQUNBLFVBQVUsb0JBQW9CO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0JBQW9CO0FBQzVCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixRQUFRLGtCQUFrQjtBQUMxQixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0JBQXNCO0FBQzlCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrQkFBa0I7QUFDMUIsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixRQUFRLElBQUk7QUFDWjtBQUNBO0FBQ0EsZ0ZBQWdGO0FBQ2hGLFVBQVU7QUFDVixnRkFBZ0Y7QUFDaEYsVUFBVTtBQUNWLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sY0FBYztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxnQkFBZ0IseUNBQXlDO0FBQzNHO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0MsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixZQUFZLElBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixPQUFPLEtBQUssc0JBQXNCLDJCQUEyQix3QkFBd0I7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx3QkFBd0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1IsWUFBWSxJQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxhQUFhLDhCQUE4QjtBQUNwRztBQUNBLDJEQUEyRDtBQUMzRDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE9BQU8sYUFBYSxPQUFPO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsc0JBQXNCO0FBQ2hDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsc0JBQXNCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsWUFBWTtBQUNaLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsY0FBYztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscUJBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7QUNsOUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUI7Ozs7Ozs7Ozs7O0FDcERuQixjQUFjLG1CQUFPLENBQUMsbUhBQWtCO0FBQ3hDLFFBQVEsZUFBZSxFQUFFLG1CQUFPLENBQUMsNkhBQWdCOztBQUVqRDtBQUNBLGVBQWUsbUJBQU8sQ0FBQywwSEFBZ0I7QUFDdkMsdUJBQXVCLFlBQVksR0FBRyxlQUFlO0FBQ3JELDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sbUNBQW1DLFFBQVE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0Esa0NBQWtDLElBQUksR0FBRyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQyxNQUFNO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSx5QkFBeUIsWUFBWSxTQUFTLHFCQUFxQjtBQUNuRTtBQUNBO0FBQ0EsMkNBQTJDLGlCQUFpQjtBQUM1RCxPQUFPOztBQUVQO0FBQ0EsNkJBQTZCLFlBQVk7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7O0FBRUQsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0luQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDLG9EQUFvRCxhQUFhLEVBQUUsS0FBSztBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUJBQWlCLEVBQUUsb0JBQW9CO0FBQ3BEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQSxVQUFVLG1DQUFtQyxhQUFhO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsY0FBYztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLEtBQUs7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxHQUFHOztBQUUxQztBQUNBLHdFQUF3RSxNQUFNO0FBQzlFLG9CQUFvQixNQUFNLElBQUksaUNBQWlDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxhQUFhO0FBQ25EO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNEJBQTRCO0FBQzNELGtEQUFrRCxNQUFNO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0QkFBNEI7QUFDM0Qsb0RBQW9ELE1BQU07QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0QkFBNEI7QUFDM0QsNERBQTRELE1BQU07QUFDbEU7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1EQUFtRCxhQUFhOztBQUVoRSxHQUFHLCtDQUErQztBQUNsRCxDQUFDOztBQUVELElBQUksSUFBMEM7QUFDOUMsRUFBRSxpQ0FBMkIsRUFBRSxtQ0FBRSwwQkFBMEI7QUFBQSxrR0FBQztBQUM1RCxFQUFFLEtBQUssRUFFTjs7Ozs7Ozs7Ozs7O0FDNVZXOztBQUVaLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLFVBQVU7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVZOztBQUVaLGFBQWEsbUJBQU8sQ0FBQyx1RkFBVztBQUNoQyxjQUFjLG1CQUFPLENBQUMsaUZBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkLGtCQUFrQjtBQUNsQix5QkFBeUI7O0FBRXpCO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLGlCQUFpQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixlQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsWUFBWTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ3h4REQ7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVc7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBVzs7QUFFcEI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUyxXQUFXOztBQUVwQjtBQUNBO0FBQ0EsU0FBUyxVQUFVOztBQUVuQjtBQUNBOzs7Ozs7O1VDcEZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ1BBUyxtQkFBQTtBQUVBQSxtQkFBQTtBQUdBQSxtQkFBQSxvRCIsInNvdXJjZXMiOlsid2VicGFjazovL21lYXAtd2Vic2l0ZS1udXh0Ly4uL0xpYnJhcnkvQ2FjaGVzL0N5cHJlc3MvMTUuMTAuMC9DeXByZXNzLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vbWVhcC13ZWJzaXRlLW51eHQvLi9jeXByZXNzL3N1cHBvcnQvY29tbWFuZHMuanMiLCJ3ZWJwYWNrOi8vbWVhcC13ZWJzaXRlLW51eHQvLi9ub2RlX21vZHVsZXMvLnBucG0vQGNocm9tYXRpYy1jb20rY3lwcmVzc0AwLjExLjhfQHR5cGVzK3JlYWN0QDE5LjIuMTRfZXNidWlsZEAwLjI1LjEyX3R5cGVzY3JpcHRANS45LjMvbm9kZV9tb2R1bGVzL0BjaHJvbWF0aWMtY29tL2N5cHJlc3MvZGlzdC9zdXBwb3J0LmpzIiwid2VicGFjazovL21lYXAtd2Vic2l0ZS1udXh0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL0BjaHJvbWF1aStycndlYi1zbmFwc2hvdEAyLjAuMC1hbHBoYS4xOC1ub0Fic29sdXRlXzNkZGVjNjMyZmIyY2M2OTI1NGU3YzliZDM4MjA1MTE4L25vZGVfbW9kdWxlcy9AY2hyb21hdWkvcnJ3ZWItc25hcHNob3QvZGlzdC9ycndlYi1zbmFwc2hvdC51bWQuY2pzIiwid2VicGFjazovL21lYXAtd2Vic2l0ZS1udXh0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL0BwZXJjeStjeXByZXNzQDMuMS43X2N5cHJlc3NAMTUuMTAuMC9ub2RlX21vZHVsZXMvQHBlcmN5L2N5cHJlc3MvY3JlYXRlUmVnaW9uLmpzIiwid2VicGFjazovL21lYXAtd2Vic2l0ZS1udXh0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL0BwZXJjeStjeXByZXNzQDMuMS43X2N5cHJlc3NAMTUuMTAuMC9ub2RlX21vZHVsZXMvQHBlcmN5L2N5cHJlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVhcC13ZWJzaXRlLW51eHQvLi9ub2RlX21vZHVsZXMvLnBucG0vQHBlcmN5K3Nkay11dGlsc0AxLjMxLjQvbm9kZV9tb2R1bGVzL0BwZXJjeS9zZGstdXRpbHMvZGlzdC9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vbWVhcC13ZWJzaXRlLW51eHQvLi9ub2RlX21vZHVsZXMvLnBucG0vYmFzZTY0LWpzQDEuNS4xL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVhcC13ZWJzaXRlLW51eHQvLi9ub2RlX21vZHVsZXMvLnBucG0vYnVmZmVyQDUuNy4xL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVhcC13ZWJzaXRlLW51eHQvLi9ub2RlX21vZHVsZXMvLnBucG0vaWVlZTc1NEAxLjIuMS9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZWFwLXdlYnNpdGUtbnV4dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWFwLXdlYnNpdGUtbnV4dC8uL2N5cHJlc3Mvc3VwcG9ydC9lMmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIkN5cHJlc3MuQ29tbWFuZHMuYWRkKCd2aXN1YWxTbmFwc2hvdCcsIChuYW1lKSA9PiB7XG4gIGNvbnN0IHByb3ZpZGVyID0gQ3lwcmVzcy5lbnYoJ1ZJU1VBTF9QUk9WSURFUicpIC8vIFwiY2hyb21hdGljXCIgfCBcInBlcmN5XCIgfCB1bmRlZmluZWRcblxuICBpZiAocHJvdmlkZXIgPT09ICdjaHJvbWF0aWMnKSB7XG4gICAgLy8gQ2hyb21hdGljIHNuYXBzaG90IGF0IHRoZSBDVVJSRU5UIHRlc3Qgdmlld3BvcnQgKHNldCBieSBkZXNjcmliZS9pdCBjb25maWcpXG4gICAgY29uc3QgdyA9IEN5cHJlc3MuY29uZmlnKCd2aWV3cG9ydFdpZHRoJylcbiAgICBjb25zdCBoID0gQ3lwcmVzcy5jb25maWcoJ3ZpZXdwb3J0SGVpZ2h0JylcbiAgICBjeS50YWtlU25hcHNob3QoYCR7bmFtZX0gLSAke3d9eCR7aH1gKVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHByb3ZpZGVyID09PSAncGVyY3knKSB7XG4gICAgY3kucGVyY3lTbmFwc2hvdChuYW1lKVxuICB9XG4gIC8vIGVsc2U6IGRvIG5vdGhpbmcgbG9jYWxseVxufSlcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJyd2ViU25hcHNob3QgPSByZXF1aXJlKCdAY2hyb21hdWkvcnJ3ZWItc25hcHNob3QnKTtcblxudmFyIG09T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhPShlLHQpPT5tKGUsXCJuYW1lXCIse3ZhbHVlOnQsY29uZmlndXJhYmxlOiEwfSk7dmFyIG49YSgoZSx0KT0+bmV3IFByb21pc2Uocj0+eyF0JiZDeXByZXNzLmVudihcImRpc2FibGVBdXRvU25hcHNob3RcIikmJnIobnVsbCk7bGV0IG89cnJ3ZWJTbmFwc2hvdC5zbmFwc2hvdChlLHtyZWNvcmRDYW52YXM6ITB9KSxkPWEoYXN5bmMgcD0+e2xldCBjPWF3YWl0KGF3YWl0IGZldGNoKHApKS5ibG9iKCk7cmV0dXJuIG5ldyBQcm9taXNlKChoLGYpPT57bGV0IGk9bmV3IEZpbGVSZWFkZXI7aS5vbmxvYWRlbmQ9KCk9PmgoaS5yZXN1bHQpLGkub25lcnJvcj1mLGkucmVhZEFzRGF0YVVSTChjKTt9KX0sXCJ0b0RhdGFVUkxcIiksbD1hKGFzeW5jIHA9Pnthd2FpdCBQcm9taXNlLmFsbChwLmNoaWxkTm9kZXMubWFwKGFzeW5jIHM9PntpZihzLnRhZ05hbWU9PT1cImltZ1wiJiZzLmF0dHJpYnV0ZXMuc3JjPy5zdGFydHNXaXRoKFwiYmxvYjpcIikpe2xldCBjPWF3YWl0IGQocy5hdHRyaWJ1dGVzLnNyYyk7cy5hdHRyaWJ1dGVzLnNyYz1jO31zLmNoaWxkTm9kZXM/Lmxlbmd0aCYmYXdhaXQgbChzKTt9KSk7fSxcInJlcGxhY2VCbG9iVXJsc1wiKTtsKG8pLnRoZW4oKCk9PntyKHtzbmFwc2hvdDpvfSk7fSk7fSksXCJ0YWtlU25hcHNob3RcIik7Q3lwcmVzcy5Db21tYW5kcy5hZGQoXCJ0YWtlU25hcHNob3RcIixlPT57Q3lwcmVzcy5jb25maWcoXCJpc1RleHRUZXJtaW5hbFwiKSYmY3kuZG9jdW1lbnQoKS50aGVuKHQ9PntjeS53cmFwKG4odCwhMCkpLnRoZW4ocj0+e2N5LmdldChcIkBtYW51YWxTbmFwc2hvdHNcIikudGhlbihvPT5bLi4ubyx7Li4ucixuYW1lOmV9XSkuYXMoXCJtYW51YWxTbmFwc2hvdHNcIik7fSk7fSk7fSk7dmFyIHk9YShlPT4oey4uLmUoXCJkaWZmVGhyZXNob2xkXCIpJiZ7ZGlmZlRocmVzaG9sZDplKFwiZGlmZlRocmVzaG9sZFwiKX0sLi4uZShcImRlbGF5XCIpJiZ7ZGVsYXk6ZShcImRlbGF5XCIpfSwuLi5lKFwiZGlmZkluY2x1ZGVBbnRpQWxpYXNpbmdcIikmJntkaWZmSW5jbHVkZUFudGlBbGlhc2luZzplKFwiZGlmZkluY2x1ZGVBbnRpQWxpYXNpbmdcIil9LC4uLmUoXCJkaWZmVGhyZXNob2xkXCIpJiZ7ZGlmZlRocmVzaG9sZDplKFwiZGlmZlRocmVzaG9sZFwiKX0sLi4uZShcImZvcmNlZENvbG9yc1wiKSYme2ZvcmNlZENvbG9yczplKFwiZm9yY2VkQ29sb3JzXCIpfSwuLi5lKFwicGF1c2VBbmltYXRpb25BdEVuZFwiKSYme3BhdXNlQW5pbWF0aW9uQXRFbmQ6ZShcInBhdXNlQW5pbWF0aW9uQXRFbmRcIil9LC4uLmUoXCJwcmVmZXJzUmVkdWNlZE1vdGlvblwiKSYme3ByZWZlcnNSZWR1Y2VkTW90aW9uOmUoXCJwcmVmZXJzUmVkdWNlZE1vdGlvblwiKX0sLi4uZShcImNyb3BUb1ZpZXdwb3J0XCIpJiZ7Y3JvcFRvVmlld3BvcnQ6ZShcImNyb3BUb1ZpZXdwb3J0XCIpfSwuLi5lKFwiaWdub3JlU2VsZWN0b3JzXCIpJiZ7aWdub3JlU2VsZWN0b3JzOmUoXCJpZ25vcmVTZWxlY3RvcnNcIil9fSksXCJidWlsZENocm9tYXRpY1BhcmFtc1wiKTtiZWZvcmVFYWNoKCgpPT57Q3lwcmVzcy5jb25maWcoXCJpc1RleHRUZXJtaW5hbFwiKSYmKGN5LndyYXAoW10pLmFzKFwibWFudWFsU25hcHNob3RzXCIpLGN5LnRhc2soXCJwcmVwYXJlQXJjaGl2ZXNcIix7YWN0aW9uOlwic2V0dXAtbmV0d29yay1saXN0ZW5lclwiLHBheWxvYWQ6e2FsbG93ZWREb21haW5zOkN5cHJlc3MuZW52KFwiYXNzZXREb21haW5zXCIpfX0pKTt9KTthZnRlckVhY2goKCk9PntDeXByZXNzLmNvbmZpZyhcImlzVGV4dFRlcm1pbmFsXCIpJiZjeS5kb2N1bWVudCgpLnRoZW4oZT0+e2N5LndyYXAobihlKSkudGhlbih0PT57Y3kuZ2V0KFwiQG1hbnVhbFNuYXBzaG90c1wiKS50aGVuKChyPVtdKT0+e2N5LnVybCgpLnRoZW4obz0+e2N5LnRhc2soXCJwcmVwYXJlQXJjaGl2ZXNcIix7YWN0aW9uOlwic2F2ZS1hcmNoaXZlc1wiLHBheWxvYWQ6e3Rlc3RUaXRsZVBhdGg6W0N5cHJlc3Muc3BlYy5yZWxhdGl2ZVRvQ29tbW9uUm9vdCwuLi5DeXByZXNzLmN1cnJlbnRUZXN0LnRpdGxlUGF0aF0sZG9tU25hcHNob3RzOlsuLi5yLC4uLnQ/W3RdOltdXSxjaHJvbWF0aWNTdG9yeWJvb2tQYXJhbXM6eShDeXByZXNzLmVudikscGFnZVVybDpvLHZpZXdwb3J0OntoZWlnaHQ6Q3lwcmVzcy5jb25maWcoXCJ2aWV3cG9ydEhlaWdodFwiKSx3aWR0aDpDeXByZXNzLmNvbmZpZyhcInZpZXdwb3J0V2lkdGhcIil9LG91dHB1dERpcjpDeXByZXNzLmNvbmZpZyhcImRvd25sb2Fkc0ZvbGRlclwiKX19KTt9KTt9KTt9KTt9KTt9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW91dC5qcy5tYXBcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1cHBvcnQuanMubWFwIiwiKGZ1bmN0aW9uIChnLCBmKSB7XG4gICAgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlKSB7XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGYoKTtcbiAgICB9IGVsc2UgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgICAgIGRlZmluZShcInJyd2ViU25hcHNob3RcIiwgW10sIGYpO1xuICAgIH0gZWxzZSBpZiAoXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cykge1xuICAgICAgZXhwb3J0c1tcInJyd2ViU25hcHNob3RcIl0gPSBmKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdbXCJycndlYlNuYXBzaG90XCJdID0gZigpO1xuICAgIH1cbiAgfSh0aGlzLCAoKSA9PiB7XG52YXIgZXhwb3J0cyA9IHt9O1xudmFyIG1vZHVsZSA9IHsgZXhwb3J0cyB9O1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZGVmUHJvcHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllcztcbnZhciBfX2dldE93blByb3BEZXNjcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzO1xudmFyIF9fZ2V0T3duUHJvcFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19wcm9wSXNFbnVtID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX3NwcmVhZFZhbHVlcyA9IChhLCBiKSA9PiB7XG4gIGZvciAodmFyIHByb3AgaW4gYiB8fCAoYiA9IHt9KSlcbiAgICBpZiAoX19oYXNPd25Qcm9wLmNhbGwoYiwgcHJvcCkpXG4gICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gIGlmIChfX2dldE93blByb3BTeW1ib2xzKVxuICAgIGZvciAodmFyIHByb3Agb2YgX19nZXRPd25Qcm9wU3ltYm9scyhiKSkge1xuICAgICAgaWYgKF9fcHJvcElzRW51bS5jYWxsKGIsIHByb3ApKVxuICAgICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gICAgfVxuICByZXR1cm4gYTtcbn07XG52YXIgX19zcHJlYWRQcm9wcyA9IChhLCBiKSA9PiBfX2RlZlByb3BzKGEsIF9fZ2V0T3duUHJvcERlc2NzKGIpKTtcbnZhciBfX29ialJlc3QgPSAoc291cmNlLCBleGNsdWRlKSA9PiB7XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpXG4gICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKHNvdXJjZSwgcHJvcCkgJiYgZXhjbHVkZS5pbmRleE9mKHByb3ApIDwgMClcbiAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgaWYgKHNvdXJjZSAhPSBudWxsICYmIF9fZ2V0T3duUHJvcFN5bWJvbHMpXG4gICAgZm9yICh2YXIgcHJvcCBvZiBfX2dldE93blByb3BTeW1ib2xzKHNvdXJjZSkpIHtcbiAgICAgIGlmIChleGNsdWRlLmluZGV4T2YocHJvcCkgPCAwICYmIF9fcHJvcElzRW51bS5jYWxsKHNvdXJjZSwgcHJvcCkpXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xudmFyIF9fZGVmUHJvcDIgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19kZWZOb3JtYWxQcm9wMiA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3AyKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX3B1YmxpY0ZpZWxkID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4gX19kZWZOb3JtYWxQcm9wMihvYmosIHR5cGVvZiBrZXkgIT09IFwic3ltYm9sXCIgPyBrZXkgKyBcIlwiIDoga2V5LCB2YWx1ZSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pO1xudmFyIE5vZGVUeXBlID0gLyogQF9fUFVSRV9fICovICgoTm9kZVR5cGUyKSA9PiB7XG4gIE5vZGVUeXBlMltOb2RlVHlwZTJbXCJEb2N1bWVudFwiXSA9IDBdID0gXCJEb2N1bWVudFwiO1xuICBOb2RlVHlwZTJbTm9kZVR5cGUyW1wiRG9jdW1lbnRUeXBlXCJdID0gMV0gPSBcIkRvY3VtZW50VHlwZVwiO1xuICBOb2RlVHlwZTJbTm9kZVR5cGUyW1wiRWxlbWVudFwiXSA9IDJdID0gXCJFbGVtZW50XCI7XG4gIE5vZGVUeXBlMltOb2RlVHlwZTJbXCJUZXh0XCJdID0gM10gPSBcIlRleHRcIjtcbiAgTm9kZVR5cGUyW05vZGVUeXBlMltcIkNEQVRBXCJdID0gNF0gPSBcIkNEQVRBXCI7XG4gIE5vZGVUeXBlMltOb2RlVHlwZTJbXCJDb21tZW50XCJdID0gNV0gPSBcIkNvbW1lbnRcIjtcbiAgcmV0dXJuIE5vZGVUeXBlMjtcbn0pKE5vZGVUeXBlIHx8IHt9KTtcbmNvbnN0IHRlc3RhYmxlQWNjZXNzb3JzID0ge1xuICBOb2RlOiBbXCJjaGlsZE5vZGVzXCIsIFwicGFyZW50Tm9kZVwiLCBcInBhcmVudEVsZW1lbnRcIiwgXCJ0ZXh0Q29udGVudFwiXSxcbiAgU2hhZG93Um9vdDogW1wiaG9zdFwiLCBcInN0eWxlU2hlZXRzXCJdLFxuICBFbGVtZW50OiBbXCJzaGFkb3dSb290XCIsIFwicXVlcnlTZWxlY3RvclwiLCBcInF1ZXJ5U2VsZWN0b3JBbGxcIl0sXG4gIE11dGF0aW9uT2JzZXJ2ZXI6IFtdXG59O1xuY29uc3QgdGVzdGFibGVNZXRob2RzID0ge1xuICBOb2RlOiBbXCJjb250YWluc1wiLCBcImdldFJvb3ROb2RlXCJdLFxuICBTaGFkb3dSb290OiBbXCJnZXRTZWxlY3Rpb25cIl0sXG4gIEVsZW1lbnQ6IFtdLFxuICBNdXRhdGlvbk9ic2VydmVyOiBbXCJjb25zdHJ1Y3RvclwiXVxufTtcbmNvbnN0IHVudGFpbnRlZEJhc2VQcm90b3R5cGUgPSB7fTtcbmNvbnN0IGlzQW5ndWxhclpvbmVQcmVzZW50ID0gKCkgPT4ge1xuICByZXR1cm4gISFnbG9iYWxUaGlzLlpvbmU7XG59O1xuZnVuY3Rpb24gZ2V0VW50YWludGVkUHJvdG90eXBlKGtleSkge1xuICBpZiAodW50YWludGVkQmFzZVByb3RvdHlwZVtrZXldKVxuICAgIHJldHVybiB1bnRhaW50ZWRCYXNlUHJvdG90eXBlW2tleV07XG4gIGNvbnN0IGRlZmF1bHRPYmogPSBnbG9iYWxUaGlzW2tleV07XG4gIGNvbnN0IGRlZmF1bHRQcm90b3R5cGUgPSBkZWZhdWx0T2JqLnByb3RvdHlwZTtcbiAgY29uc3QgYWNjZXNzb3JOYW1lcyA9IGtleSBpbiB0ZXN0YWJsZUFjY2Vzc29ycyA/IHRlc3RhYmxlQWNjZXNzb3JzW2tleV0gOiB2b2lkIDA7XG4gIGNvbnN0IGlzVW50YWludGVkQWNjZXNzb3JzID0gQm9vbGVhbihcbiAgICBhY2Nlc3Nvck5hbWVzICYmIC8vIEB0cy1leHBlY3QtZXJyb3IgMjM0NVxuICAgIGFjY2Vzc29yTmFtZXMuZXZlcnkoXG4gICAgICAoYWNjZXNzb3IpID0+IHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oXG4gICAgICAgICAgKF9iID0gKF9hID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0UHJvdG90eXBlLCBhY2Nlc3NvcikpID09IG51bGwgPyB2b2lkIDAgOiBfYS5nZXQpID09IG51bGwgPyB2b2lkIDAgOiBfYi50b1N0cmluZygpLmluY2x1ZGVzKFwiW25hdGl2ZSBjb2RlXVwiKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIClcbiAgKTtcbiAgY29uc3QgbWV0aG9kTmFtZXMgPSBrZXkgaW4gdGVzdGFibGVNZXRob2RzID8gdGVzdGFibGVNZXRob2RzW2tleV0gOiB2b2lkIDA7XG4gIGNvbnN0IGlzVW50YWludGVkTWV0aG9kcyA9IEJvb2xlYW4oXG4gICAgbWV0aG9kTmFtZXMgJiYgbWV0aG9kTmFtZXMuZXZlcnkoXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIDIzNDVcbiAgICAgIChtZXRob2QpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gdHlwZW9mIGRlZmF1bHRQcm90b3R5cGVbbWV0aG9kXSA9PT0gXCJmdW5jdGlvblwiICYmICgoX2EgPSBkZWZhdWx0UHJvdG90eXBlW21ldGhvZF0pID09IG51bGwgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpLmluY2x1ZGVzKFwiW25hdGl2ZSBjb2RlXVwiKSk7XG4gICAgICB9XG4gICAgKVxuICApO1xuICBpZiAoaXNVbnRhaW50ZWRBY2Nlc3NvcnMgJiYgaXNVbnRhaW50ZWRNZXRob2RzICYmICFpc0FuZ3VsYXJab25lUHJlc2VudCgpKSB7XG4gICAgdW50YWludGVkQmFzZVByb3RvdHlwZVtrZXldID0gZGVmYXVsdE9iai5wcm90b3R5cGU7XG4gICAgcmV0dXJuIGRlZmF1bHRPYmoucHJvdG90eXBlO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgaWZyYW1lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lRWwpO1xuICAgIGNvbnN0IHdpbiA9IGlmcmFtZUVsLmNvbnRlbnRXaW5kb3c7XG4gICAgaWYgKCF3aW4pIHJldHVybiBkZWZhdWx0T2JqLnByb3RvdHlwZTtcbiAgICBjb25zdCB1bnRhaW50ZWRPYmplY3QgPSB3aW5ba2V5XS5wcm90b3R5cGU7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWVFbCk7XG4gICAgaWYgKCF1bnRhaW50ZWRPYmplY3QpIHJldHVybiBkZWZhdWx0UHJvdG90eXBlO1xuICAgIHJldHVybiB1bnRhaW50ZWRCYXNlUHJvdG90eXBlW2tleV0gPSB1bnRhaW50ZWRPYmplY3Q7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZGVmYXVsdFByb3RvdHlwZTtcbiAgfVxufVxuY29uc3QgdW50YWludGVkQWNjZXNzb3JDYWNoZSA9IHt9O1xuZnVuY3Rpb24gZ2V0VW50YWludGVkQWNjZXNzb3Ioa2V5LCBpbnN0YW5jZSwgYWNjZXNzb3IpIHtcbiAgdmFyIF9hO1xuICBjb25zdCBjYWNoZUtleSA9IGAke2tleX0uJHtTdHJpbmcoYWNjZXNzb3IpfWA7XG4gIGlmICh1bnRhaW50ZWRBY2Nlc3NvckNhY2hlW2NhY2hlS2V5XSlcbiAgICByZXR1cm4gdW50YWludGVkQWNjZXNzb3JDYWNoZVtjYWNoZUtleV0uY2FsbChcbiAgICAgIGluc3RhbmNlXG4gICAgKTtcbiAgY29uc3QgdW50YWludGVkUHJvdG90eXBlID0gZ2V0VW50YWludGVkUHJvdG90eXBlKGtleSk7XG4gIGNvbnN0IHVudGFpbnRlZEFjY2Vzc29yID0gKF9hID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICB1bnRhaW50ZWRQcm90b3R5cGUsXG4gICAgYWNjZXNzb3JcbiAgKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmdldDtcbiAgaWYgKCF1bnRhaW50ZWRBY2Nlc3NvcikgcmV0dXJuIGluc3RhbmNlW2FjY2Vzc29yXTtcbiAgdW50YWludGVkQWNjZXNzb3JDYWNoZVtjYWNoZUtleV0gPSB1bnRhaW50ZWRBY2Nlc3NvcjtcbiAgcmV0dXJuIHVudGFpbnRlZEFjY2Vzc29yLmNhbGwoaW5zdGFuY2UpO1xufVxuY29uc3QgdW50YWludGVkTWV0aG9kQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldFVudGFpbnRlZE1ldGhvZChrZXksIGluc3RhbmNlLCBtZXRob2QpIHtcbiAgY29uc3QgY2FjaGVLZXkgPSBgJHtrZXl9LiR7U3RyaW5nKG1ldGhvZCl9YDtcbiAgaWYgKHVudGFpbnRlZE1ldGhvZENhY2hlW2NhY2hlS2V5XSlcbiAgICByZXR1cm4gdW50YWludGVkTWV0aG9kQ2FjaGVbY2FjaGVLZXldLmJpbmQoXG4gICAgICBpbnN0YW5jZVxuICAgICk7XG4gIGNvbnN0IHVudGFpbnRlZFByb3RvdHlwZSA9IGdldFVudGFpbnRlZFByb3RvdHlwZShrZXkpO1xuICBjb25zdCB1bnRhaW50ZWRNZXRob2QgPSB1bnRhaW50ZWRQcm90b3R5cGVbbWV0aG9kXTtcbiAgaWYgKHR5cGVvZiB1bnRhaW50ZWRNZXRob2QgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGluc3RhbmNlW21ldGhvZF07XG4gIHVudGFpbnRlZE1ldGhvZENhY2hlW2NhY2hlS2V5XSA9IHVudGFpbnRlZE1ldGhvZDtcbiAgcmV0dXJuIHVudGFpbnRlZE1ldGhvZC5iaW5kKGluc3RhbmNlKTtcbn1cbmZ1bmN0aW9uIGNoaWxkTm9kZXMobikge1xuICByZXR1cm4gZ2V0VW50YWludGVkQWNjZXNzb3IoXCJOb2RlXCIsIG4sIFwiY2hpbGROb2Rlc1wiKTtcbn1cbmZ1bmN0aW9uIHBhcmVudE5vZGUobikge1xuICByZXR1cm4gZ2V0VW50YWludGVkQWNjZXNzb3IoXCJOb2RlXCIsIG4sIFwicGFyZW50Tm9kZVwiKTtcbn1cbmZ1bmN0aW9uIHBhcmVudEVsZW1lbnQobikge1xuICByZXR1cm4gZ2V0VW50YWludGVkQWNjZXNzb3IoXCJOb2RlXCIsIG4sIFwicGFyZW50RWxlbWVudFwiKTtcbn1cbmZ1bmN0aW9uIHRleHRDb250ZW50KG4pIHtcbiAgcmV0dXJuIGdldFVudGFpbnRlZEFjY2Vzc29yKFwiTm9kZVwiLCBuLCBcInRleHRDb250ZW50XCIpO1xufVxuZnVuY3Rpb24gY29udGFpbnMobiwgb3RoZXIpIHtcbiAgcmV0dXJuIGdldFVudGFpbnRlZE1ldGhvZChcIk5vZGVcIiwgbiwgXCJjb250YWluc1wiKShvdGhlcik7XG59XG5mdW5jdGlvbiBnZXRSb290Tm9kZShuKSB7XG4gIHJldHVybiBnZXRVbnRhaW50ZWRNZXRob2QoXCJOb2RlXCIsIG4sIFwiZ2V0Um9vdE5vZGVcIikoKTtcbn1cbmZ1bmN0aW9uIGhvc3Qobikge1xuICBpZiAoIW4gfHwgIShcImhvc3RcIiBpbiBuKSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBnZXRVbnRhaW50ZWRBY2Nlc3NvcihcIlNoYWRvd1Jvb3RcIiwgbiwgXCJob3N0XCIpO1xufVxuZnVuY3Rpb24gc3R5bGVTaGVldHMobikge1xuICByZXR1cm4gbi5zdHlsZVNoZWV0cztcbn1cbmZ1bmN0aW9uIHNoYWRvd1Jvb3Qobikge1xuICBpZiAoIW4gfHwgIShcInNoYWRvd1Jvb3RcIiBpbiBuKSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBnZXRVbnRhaW50ZWRBY2Nlc3NvcihcIkVsZW1lbnRcIiwgbiwgXCJzaGFkb3dSb290XCIpO1xufVxuZnVuY3Rpb24gcXVlcnlTZWxlY3RvcihuLCBzZWxlY3RvcnMpIHtcbiAgcmV0dXJuIGdldFVudGFpbnRlZEFjY2Vzc29yKFwiRWxlbWVudFwiLCBuLCBcInF1ZXJ5U2VsZWN0b3JcIikoc2VsZWN0b3JzKTtcbn1cbmZ1bmN0aW9uIHF1ZXJ5U2VsZWN0b3JBbGwobiwgc2VsZWN0b3JzKSB7XG4gIHJldHVybiBnZXRVbnRhaW50ZWRBY2Nlc3NvcihcIkVsZW1lbnRcIiwgbiwgXCJxdWVyeVNlbGVjdG9yQWxsXCIpKHNlbGVjdG9ycyk7XG59XG5mdW5jdGlvbiBtdXRhdGlvbk9ic2VydmVyQ3RvcigpIHtcbiAgcmV0dXJuIGdldFVudGFpbnRlZFByb3RvdHlwZShcIk11dGF0aW9uT2JzZXJ2ZXJcIikuY29uc3RydWN0b3I7XG59XG5mdW5jdGlvbiBwYXRjaChzb3VyY2UsIG5hbWUsIHJlcGxhY2VtZW50KSB7XG4gIHRyeSB7XG4gICAgaWYgKCEobmFtZSBpbiBzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgb3JpZ2luYWwgPSBzb3VyY2VbbmFtZV07XG4gICAgY29uc3Qgd3JhcHBlZCA9IHJlcGxhY2VtZW50KG9yaWdpbmFsKTtcbiAgICBpZiAodHlwZW9mIHdyYXBwZWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgd3JhcHBlZC5wcm90b3R5cGUgPSB3cmFwcGVkLnByb3RvdHlwZSB8fCB7fTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHdyYXBwZWQsIHtcbiAgICAgICAgX19ycndlYl9vcmlnaW5hbF9fOiB7XG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IG9yaWdpbmFsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBzb3VyY2VbbmFtZV0gPSB3cmFwcGVkO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzb3VyY2VbbmFtZV0gPSBvcmlnaW5hbDtcbiAgICB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICB9O1xuICB9XG59XG5jb25zdCBpbmRleCA9IHtcbiAgY2hpbGROb2RlcyxcbiAgcGFyZW50Tm9kZSxcbiAgcGFyZW50RWxlbWVudCxcbiAgdGV4dENvbnRlbnQsXG4gIGNvbnRhaW5zLFxuICBnZXRSb290Tm9kZSxcbiAgaG9zdCxcbiAgc3R5bGVTaGVldHMsXG4gIHNoYWRvd1Jvb3QsXG4gIHF1ZXJ5U2VsZWN0b3IsXG4gIHF1ZXJ5U2VsZWN0b3JBbGwsXG4gIG11dGF0aW9uT2JzZXJ2ZXI6IG11dGF0aW9uT2JzZXJ2ZXJDdG9yLFxuICBwYXRjaFxufTtcbmZ1bmN0aW9uIGlzRWxlbWVudChuKSB7XG4gIHJldHVybiBuLm5vZGVUeXBlID09PSBuLkVMRU1FTlRfTk9ERTtcbn1cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChuKSB7XG4gIGNvbnN0IGhvc3RFbCA9IChcbiAgICAvLyBhbmNob3IgYW5kIHRleHRhcmVhIGVsZW1lbnRzIGFsc28gaGF2ZSBhIGBob3N0YCBwcm9wZXJ0eVxuICAgIC8vIGJ1dCBvbmx5IHNoYWRvdyByb290cyBoYXZlIGEgYG1vZGVgIHByb3BlcnR5XG4gICAgbiAmJiBcImhvc3RcIiBpbiBuICYmIFwibW9kZVwiIGluIG4gJiYgaW5kZXguaG9zdChuKSB8fCBudWxsXG4gICk7XG4gIHJldHVybiBCb29sZWFuKFxuICAgIGhvc3RFbCAmJiBcInNoYWRvd1Jvb3RcIiBpbiBob3N0RWwgJiYgaW5kZXguc2hhZG93Um9vdChob3N0RWwpID09PSBuXG4gICk7XG59XG5mdW5jdGlvbiBpc05hdGl2ZVNoYWRvd0RvbShzaGFkb3dSb290Mikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNoYWRvd1Jvb3QyKSA9PT0gXCJbb2JqZWN0IFNoYWRvd1Jvb3RdXCI7XG59XG5mdW5jdGlvbiBmaXhCcm93c2VyQ29tcGF0aWJpbGl0eUlzc3Vlc0luQ1NTKGNzc1RleHQpIHtcbiAgaWYgKGNzc1RleHQuaW5jbHVkZXMoXCIgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1wiKSAmJiAhY3NzVGV4dC5pbmNsdWRlcyhcIiAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcIikpIHtcbiAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKFxuICAgICAgL1xcc2JhY2tncm91bmQtY2xpcDpcXHMqdGV4dDsvZyxcbiAgICAgIFwiIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XCJcbiAgICApO1xuICB9XG4gIHJldHVybiBjc3NUZXh0O1xufVxuZnVuY3Rpb24gZXNjYXBlSW1wb3J0U3RhdGVtZW50KHJ1bGUyKSB7XG4gIGNvbnN0IHsgY3NzVGV4dCB9ID0gcnVsZTI7XG4gIGlmIChjc3NUZXh0LnNwbGl0KCdcIicpLmxlbmd0aCA8IDMpIHJldHVybiBjc3NUZXh0O1xuICBjb25zdCBzdGF0ZW1lbnQgPSBbXCJAaW1wb3J0XCIsIGB1cmwoJHtKU09OLnN0cmluZ2lmeShydWxlMi5ocmVmKX0pYF07XG4gIGlmIChydWxlMi5sYXllck5hbWUgPT09IFwiXCIpIHtcbiAgICBzdGF0ZW1lbnQucHVzaChgbGF5ZXJgKTtcbiAgfSBlbHNlIGlmIChydWxlMi5sYXllck5hbWUpIHtcbiAgICBzdGF0ZW1lbnQucHVzaChgbGF5ZXIoJHtydWxlMi5sYXllck5hbWV9KWApO1xuICB9XG4gIGlmIChydWxlMi5zdXBwb3J0c1RleHQpIHtcbiAgICBzdGF0ZW1lbnQucHVzaChgc3VwcG9ydHMoJHtydWxlMi5zdXBwb3J0c1RleHR9KWApO1xuICB9XG4gIGlmIChydWxlMi5tZWRpYS5sZW5ndGgpIHtcbiAgICBzdGF0ZW1lbnQucHVzaChydWxlMi5tZWRpYS5tZWRpYVRleHQpO1xuICB9XG4gIHJldHVybiBzdGF0ZW1lbnQuam9pbihcIiBcIikgKyBcIjtcIjtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeVN0eWxlc2hlZXQocykge1xuICB0cnkge1xuICAgIGNvbnN0IHJ1bGVzID0gcy5ydWxlcyB8fCBzLmNzc1J1bGVzO1xuICAgIGlmICghcnVsZXMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgc2hlZXRIcmVmID0gcy5ocmVmO1xuICAgIGlmICghc2hlZXRIcmVmICYmIHMub3duZXJOb2RlICYmIHMub3duZXJOb2RlLm93bmVyRG9jdW1lbnQpIHtcbiAgICAgIHNoZWV0SHJlZiA9IHMub3duZXJOb2RlLm93bmVyRG9jdW1lbnQubG9jYXRpb24uaHJlZjtcbiAgICB9XG4gICAgY29uc3Qgc3RyaW5naWZpZWRSdWxlcyA9IEFycmF5LmZyb20oXG4gICAgICBydWxlcyxcbiAgICAgIChydWxlMikgPT4gc3RyaW5naWZ5UnVsZShydWxlMiwgc2hlZXRIcmVmKVxuICAgICkuam9pbihcIlwiKTtcbiAgICByZXR1cm4gZml4QnJvd3NlckNvbXBhdGliaWxpdHlJc3N1ZXNJbkNTUyhzdHJpbmdpZmllZFJ1bGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuZnVuY3Rpb24gc3RyaW5naWZ5UnVsZShydWxlMiwgc2hlZXRIcmVmKSB7XG4gIGlmIChpc0NTU0ltcG9ydFJ1bGUocnVsZTIpKSB7XG4gICAgbGV0IGltcG9ydFN0cmluZ2lmaWVkO1xuICAgIHRyeSB7XG4gICAgICBpbXBvcnRTdHJpbmdpZmllZCA9IC8vIGZvciBzYW1lLW9yaWdpbiBzdHlsZXNoZWV0cyxcbiAgICAgIC8vIHdlIGNhbiBhY2Nlc3MgdGhlIGltcG9ydGVkIHN0eWxlc2hlZXQgcnVsZXMgZGlyZWN0bHlcbiAgICAgIHN0cmluZ2lmeVN0eWxlc2hlZXQocnVsZTIuc3R5bGVTaGVldCkgfHwgLy8gd29yayBhcm91bmQgYnJvd3NlciBpc3N1ZXMgd2l0aCB0aGUgcmF3IHN0cmluZyBgQGltcG9ydCB1cmwoLi4uKWAgc3RhdGVtZW50XG4gICAgICBlc2NhcGVJbXBvcnRTdGF0ZW1lbnQocnVsZTIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpbXBvcnRTdHJpbmdpZmllZCA9IHJ1bGUyLmNzc1RleHQ7XG4gICAgfVxuICAgIGlmIChydWxlMi5zdHlsZVNoZWV0LmhyZWYpIHtcbiAgICAgIHJldHVybiBhYnNvbHV0aWZ5VVJMcyhpbXBvcnRTdHJpbmdpZmllZCwgcnVsZTIuc3R5bGVTaGVldC5ocmVmKTtcbiAgICB9XG4gICAgcmV0dXJuIGltcG9ydFN0cmluZ2lmaWVkO1xuICB9IGVsc2Uge1xuICAgIGxldCBydWxlU3RyaW5naWZpZWQgPSBydWxlMi5jc3NUZXh0O1xuICAgIGlmIChpc0NTU1N0eWxlUnVsZShydWxlMikgJiYgcnVsZTIuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKFwiOlwiKSkge1xuICAgICAgcnVsZVN0cmluZ2lmaWVkID0gZml4U2FmYXJpQ29sb25zKHJ1bGVTdHJpbmdpZmllZCk7XG4gICAgfVxuICAgIGlmIChzaGVldEhyZWYpIHtcbiAgICAgIHJldHVybiBhYnNvbHV0aWZ5VVJMcyhydWxlU3RyaW5naWZpZWQsIHNoZWV0SHJlZik7XG4gICAgfVxuICAgIHJldHVybiBydWxlU3RyaW5naWZpZWQ7XG4gIH1cbn1cbmZ1bmN0aW9uIGZpeFNhZmFyaUNvbG9ucyhjc3NTdHJpbmdpZmllZCkge1xuICBjb25zdCByZWdleCA9IC8oXFxbKD86W1xcdy1dKylbXlxcXFxdKSg6KD86W1xcdy1dKylcXF0pL2dtO1xuICByZXR1cm4gY3NzU3RyaW5naWZpZWQucmVwbGFjZShyZWdleCwgXCIkMVxcXFwkMlwiKTtcbn1cbmZ1bmN0aW9uIGlzQ1NTSW1wb3J0UnVsZShydWxlMikge1xuICByZXR1cm4gXCJzdHlsZVNoZWV0XCIgaW4gcnVsZTI7XG59XG5mdW5jdGlvbiBpc0NTU1N0eWxlUnVsZShydWxlMikge1xuICByZXR1cm4gXCJzZWxlY3RvclRleHRcIiBpbiBydWxlMjtcbn1cbmNsYXNzIE1pcnJvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJpZE5vZGVNYXBcIiwgLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm5vZGVNZXRhTWFwXCIsIC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpKTtcbiAgfVxuICBnZXRJZChuKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICghbikgcmV0dXJuIC0xO1xuICAgIGNvbnN0IGlkID0gKF9hID0gdGhpcy5nZXRNZXRhKG4pKSA9PSBudWxsID8gdm9pZCAwIDogX2EuaWQ7XG4gICAgcmV0dXJuIGlkICE9IG51bGwgPyBpZCA6IC0xO1xuICB9XG4gIGdldE5vZGUoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5pZE5vZGVNYXAuZ2V0KGlkKSB8fCBudWxsO1xuICB9XG4gIGdldElkcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmlkTm9kZU1hcC5rZXlzKCkpO1xuICB9XG4gIGdldE1ldGEobikge1xuICAgIHJldHVybiB0aGlzLm5vZGVNZXRhTWFwLmdldChuKSB8fCBudWxsO1xuICB9XG4gIC8vIHJlbW92ZXMgdGhlIG5vZGUgZnJvbSBpZE5vZGVNYXBcbiAgLy8gZG9lc24ndCByZW1vdmUgdGhlIG5vZGUgZnJvbSBub2RlTWV0YU1hcFxuICByZW1vdmVOb2RlRnJvbU1hcChuKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmdldElkKG4pO1xuICAgIHRoaXMuaWROb2RlTWFwLmRlbGV0ZShpZCk7XG4gICAgaWYgKG4uY2hpbGROb2Rlcykge1xuICAgICAgbi5jaGlsZE5vZGVzLmZvckVhY2goXG4gICAgICAgIChjaGlsZE5vZGUpID0+IHRoaXMucmVtb3ZlTm9kZUZyb21NYXAoY2hpbGROb2RlKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgaGFzKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuaWROb2RlTWFwLmhhcyhpZCk7XG4gIH1cbiAgaGFzTm9kZShub2RlMikge1xuICAgIHJldHVybiB0aGlzLm5vZGVNZXRhTWFwLmhhcyhub2RlMik7XG4gIH1cbiAgYWRkKG4sIG1ldGEpIHtcbiAgICBjb25zdCBpZCA9IG1ldGEuaWQ7XG4gICAgdGhpcy5pZE5vZGVNYXAuc2V0KGlkLCBuKTtcbiAgICB0aGlzLm5vZGVNZXRhTWFwLnNldChuLCBtZXRhKTtcbiAgfVxuICByZXBsYWNlKGlkLCBuKSB7XG4gICAgY29uc3Qgb2xkTm9kZSA9IHRoaXMuZ2V0Tm9kZShpZCk7XG4gICAgaWYgKG9sZE5vZGUpIHtcbiAgICAgIGNvbnN0IG1ldGEgPSB0aGlzLm5vZGVNZXRhTWFwLmdldChvbGROb2RlKTtcbiAgICAgIGlmIChtZXRhKSB0aGlzLm5vZGVNZXRhTWFwLnNldChuLCBtZXRhKTtcbiAgICB9XG4gICAgdGhpcy5pZE5vZGVNYXAuc2V0KGlkLCBuKTtcbiAgfVxuICByZXNldCgpIHtcbiAgICB0aGlzLmlkTm9kZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgdGhpcy5ub2RlTWV0YU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVNaXJyb3IoKSB7XG4gIHJldHVybiBuZXcgTWlycm9yKCk7XG59XG5mdW5jdGlvbiBtYXNrSW5wdXRWYWx1ZSh7XG4gIGVsZW1lbnQsXG4gIG1hc2tJbnB1dE9wdGlvbnMsXG4gIHRhZ05hbWUsXG4gIHR5cGUsXG4gIHZhbHVlLFxuICBtYXNrSW5wdXRGblxufSkge1xuICBsZXQgdGV4dCA9IHZhbHVlIHx8IFwiXCI7XG4gIGNvbnN0IGFjdHVhbFR5cGUgPSB0eXBlICYmIHRvTG93ZXJDYXNlKHR5cGUpO1xuICBpZiAobWFza0lucHV0T3B0aW9uc1t0YWdOYW1lLnRvTG93ZXJDYXNlKCldIHx8IGFjdHVhbFR5cGUgJiYgbWFza0lucHV0T3B0aW9uc1thY3R1YWxUeXBlXSkge1xuICAgIGlmIChtYXNrSW5wdXRGbikge1xuICAgICAgdGV4dCA9IG1hc2tJbnB1dEZuKHRleHQsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0ID0gXCIqXCIucmVwZWF0KHRleHQubGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRleHQ7XG59XG5mdW5jdGlvbiB0b0xvd2VyQ2FzZShzdHIpIHtcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xufVxuY29uc3QgT1JJR0lOQUxfQVRUUklCVVRFX05BTUUgPSBcIl9fcnJ3ZWJfb3JpZ2luYWxfX1wiO1xuZnVuY3Rpb24gaXMyRENhbnZhc0JsYW5rKGNhbnZhcykge1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIWN0eCkgcmV0dXJuIHRydWU7XG4gIGNvbnN0IGNodW5rU2l6ZSA9IDUwO1xuICBmb3IgKGxldCB4MiA9IDA7IHgyIDwgY2FudmFzLndpZHRoOyB4MiArPSBjaHVua1NpemUpIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNhbnZhcy5oZWlnaHQ7IHkgKz0gY2h1bmtTaXplKSB7XG4gICAgICBjb25zdCBnZXRJbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhO1xuICAgICAgY29uc3Qgb3JpZ2luYWxHZXRJbWFnZURhdGEgPSBPUklHSU5BTF9BVFRSSUJVVEVfTkFNRSBpbiBnZXRJbWFnZURhdGEgPyBnZXRJbWFnZURhdGFbT1JJR0lOQUxfQVRUUklCVVRFX05BTUVdIDogZ2V0SW1hZ2VEYXRhO1xuICAgICAgY29uc3QgcGl4ZWxCdWZmZXIgPSBuZXcgVWludDMyQXJyYXkoXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50LCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3NcbiAgICAgICAgb3JpZ2luYWxHZXRJbWFnZURhdGEuY2FsbChcbiAgICAgICAgICBjdHgsXG4gICAgICAgICAgeDIsXG4gICAgICAgICAgeSxcbiAgICAgICAgICBNYXRoLm1pbihjaHVua1NpemUsIGNhbnZhcy53aWR0aCAtIHgyKSxcbiAgICAgICAgICBNYXRoLm1pbihjaHVua1NpemUsIGNhbnZhcy5oZWlnaHQgLSB5KVxuICAgICAgICApLmRhdGEuYnVmZmVyXG4gICAgICApO1xuICAgICAgaWYgKHBpeGVsQnVmZmVyLnNvbWUoKHBpeGVsKSA9PiBwaXhlbCAhPT0gMCkpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBpc05vZGVNZXRhRXF1YWwoYSwgYikge1xuICBpZiAoIWEgfHwgIWIgfHwgYS50eXBlICE9PSBiLnR5cGUpIHJldHVybiBmYWxzZTtcbiAgaWYgKGEudHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQpXG4gICAgcmV0dXJuIGEuY29tcGF0TW9kZSA9PT0gYi5jb21wYXRNb2RlO1xuICBlbHNlIGlmIChhLnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50VHlwZSlcbiAgICByZXR1cm4gYS5uYW1lID09PSBiLm5hbWUgJiYgYS5wdWJsaWNJZCA9PT0gYi5wdWJsaWNJZCAmJiBhLnN5c3RlbUlkID09PSBiLnN5c3RlbUlkO1xuICBlbHNlIGlmIChhLnR5cGUgPT09IE5vZGVUeXBlLkNvbW1lbnQgfHwgYS50eXBlID09PSBOb2RlVHlwZS5UZXh0IHx8IGEudHlwZSA9PT0gTm9kZVR5cGUuQ0RBVEEpXG4gICAgcmV0dXJuIGEudGV4dENvbnRlbnQgPT09IGIudGV4dENvbnRlbnQ7XG4gIGVsc2UgaWYgKGEudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudClcbiAgICByZXR1cm4gYS50YWdOYW1lID09PSBiLnRhZ05hbWUgJiYgSlNPTi5zdHJpbmdpZnkoYS5hdHRyaWJ1dGVzKSA9PT0gSlNPTi5zdHJpbmdpZnkoYi5hdHRyaWJ1dGVzKSAmJiBhLmlzU1ZHID09PSBiLmlzU1ZHICYmIGEubmVlZEJsb2NrID09PSBiLm5lZWRCbG9jaztcbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gZ2V0SW5wdXRUeXBlKGVsZW1lbnQpIHtcbiAgY29uc3QgdHlwZSA9IGVsZW1lbnQudHlwZTtcbiAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS1yci1pcy1wYXNzd29yZFwiKSA/IFwicGFzc3dvcmRcIiA6IHR5cGUgPyAoXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bm5lY2Vzc2FyeS10eXBlLWFzc2VydGlvblxuICAgIHRvTG93ZXJDYXNlKHR5cGUpXG4gICkgOiBudWxsO1xufVxuZnVuY3Rpb24gZXh0cmFjdEZpbGVFeHRlbnNpb24ocGF0aCwgYmFzZVVSTCkge1xuICB2YXIgX2E7XG4gIGxldCB1cmw7XG4gIHRyeSB7XG4gICAgdXJsID0gbmV3IFVSTChwYXRoLCBiYXNlVVJMICE9IG51bGwgPyBiYXNlVVJMIDogd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCByZWdleCA9IC9cXC4oWzAtOWEtel0rKSg/OiQpL2k7XG4gIGNvbnN0IG1hdGNoID0gdXJsLnBhdGhuYW1lLm1hdGNoKHJlZ2V4KTtcbiAgcmV0dXJuIChfYSA9IG1hdGNoID09IG51bGwgPyB2b2lkIDAgOiBtYXRjaFsxXSkgIT0gbnVsbCA/IF9hIDogbnVsbDtcbn1cbmZ1bmN0aW9uIGV4dHJhY3RPcmlnaW4odXJsKSB7XG4gIGxldCBvcmlnaW4gPSBcIlwiO1xuICBpZiAodXJsLmluZGV4T2YoXCIvL1wiKSA+IC0xKSB7XG4gICAgb3JpZ2luID0gdXJsLnNwbGl0KFwiL1wiKS5zbGljZSgwLCAzKS5qb2luKFwiL1wiKTtcbiAgfSBlbHNlIHtcbiAgICBvcmlnaW4gPSB1cmwuc3BsaXQoXCIvXCIpWzBdO1xuICB9XG4gIG9yaWdpbiA9IG9yaWdpbi5zcGxpdChcIj9cIilbMF07XG4gIHJldHVybiBvcmlnaW47XG59XG5jb25zdCBVUkxfSU5fQ1NTX1JFRiA9IC91cmxcXCgoPzooJykoW14nXSopJ3woXCIpKC4qPylcInwoW14pXSopKVxcKS9nbTtcbmNvbnN0IFVSTF9QUk9UT0NPTF9NQVRDSCA9IC9eKD86W2EteitdKzopP1xcL1xcLy9pO1xuY29uc3QgVVJMX1dXV19NQVRDSCA9IC9ed3d3XFwuLiovaTtcbmNvbnN0IERBVEFfVVJJID0gL14oZGF0YTopKFteLF0qKSwoLiopL2k7XG5mdW5jdGlvbiBhYnNvbHV0aWZ5VVJMcyhjc3NUZXh0LCBocmVmKSB7XG4gIHJldHVybiAoY3NzVGV4dCB8fCBcIlwiKS5yZXBsYWNlKFxuICAgIFVSTF9JTl9DU1NfUkVGLFxuICAgIChvcmlnaW4sIHF1b3RlMSwgcGF0aDEsIHF1b3RlMiwgcGF0aDIsIHBhdGgzKSA9PiB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGgxIHx8IHBhdGgyIHx8IHBhdGgzO1xuICAgICAgY29uc3QgbWF5YmVRdW90ZSA9IHF1b3RlMSB8fCBxdW90ZTIgfHwgXCJcIjtcbiAgICAgIGlmICghZmlsZVBhdGgpIHtcbiAgICAgICAgcmV0dXJuIG9yaWdpbjtcbiAgICAgIH1cbiAgICAgIGlmIChVUkxfUFJPVE9DT0xfTUFUQ0gudGVzdChmaWxlUGF0aCkgfHwgVVJMX1dXV19NQVRDSC50ZXN0KGZpbGVQYXRoKSkge1xuICAgICAgICByZXR1cm4gYHVybCgke21heWJlUXVvdGV9JHtmaWxlUGF0aH0ke21heWJlUXVvdGV9KWA7XG4gICAgICB9XG4gICAgICBpZiAoREFUQV9VUkkudGVzdChmaWxlUGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIGB1cmwoJHttYXliZVF1b3RlfSR7ZmlsZVBhdGh9JHttYXliZVF1b3RlfSlgO1xuICAgICAgfVxuICAgICAgaWYgKGZpbGVQYXRoWzBdID09PSBcIi9cIikge1xuICAgICAgICByZXR1cm4gYHVybCgke21heWJlUXVvdGV9JHtleHRyYWN0T3JpZ2luKGhyZWYpICsgZmlsZVBhdGh9JHttYXliZVF1b3RlfSlgO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhY2sgPSBocmVmLnNwbGl0KFwiL1wiKTtcbiAgICAgIGNvbnN0IHBhcnRzID0gZmlsZVBhdGguc3BsaXQoXCIvXCIpO1xuICAgICAgc3RhY2sucG9wKCk7XG4gICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIHtcbiAgICAgICAgaWYgKHBhcnQgPT09IFwiLlwiKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSBpZiAocGFydCA9PT0gXCIuLlwiKSB7XG4gICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhY2sucHVzaChwYXJ0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGB1cmwoJHttYXliZVF1b3RlfSR7c3RhY2suam9pbihcIi9cIil9JHttYXliZVF1b3RlfSlgO1xuICAgIH1cbiAgKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNzc1N0cmluZyhjc3NUZXh0LCBfdGVzdE5vUHhOb3JtID0gZmFsc2UpIHtcbiAgaWYgKF90ZXN0Tm9QeE5vcm0pIHtcbiAgICByZXR1cm4gY3NzVGV4dC5yZXBsYWNlKC8oXFwvXFwqW14qXSpcXCpcXC8pfFtcXHM7XS9nLCBcIlwiKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY3NzVGV4dC5yZXBsYWNlKC8oXFwvXFwqW14qXSpcXCpcXC8pfFtcXHM7XS9nLCBcIlwiKS5yZXBsYWNlKC8wcHgvZywgXCIwXCIpO1xuICB9XG59XG5mdW5jdGlvbiBzcGxpdENzc1RleHQoY3NzVGV4dCwgc3R5bGUsIF90ZXN0Tm9QeE5vcm0gPSBmYWxzZSkge1xuICBjb25zdCBjaGlsZE5vZGVzMiA9IEFycmF5LmZyb20oc3R5bGUuY2hpbGROb2Rlcyk7XG4gIGNvbnN0IHNwbGl0cyA9IFtdO1xuICBsZXQgaXRlckNvdW50ID0gMDtcbiAgaWYgKGNoaWxkTm9kZXMyLmxlbmd0aCA+IDEgJiYgY3NzVGV4dCAmJiB0eXBlb2YgY3NzVGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgIGxldCBjc3NUZXh0Tm9ybSA9IG5vcm1hbGl6ZUNzc1N0cmluZyhjc3NUZXh0LCBfdGVzdE5vUHhOb3JtKTtcbiAgICBjb25zdCBub3JtRmFjdG9yID0gY3NzVGV4dE5vcm0ubGVuZ3RoIC8gY3NzVGV4dC5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjaGlsZE5vZGVzMi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNoaWxkTm9kZXMyW2ldLnRleHRDb250ZW50ICYmIHR5cGVvZiBjaGlsZE5vZGVzMltpXS50ZXh0Q29udGVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCB0ZXh0Q29udGVudE5vcm0gPSBub3JtYWxpemVDc3NTdHJpbmcoXG4gICAgICAgICAgY2hpbGROb2RlczJbaV0udGV4dENvbnRlbnQsXG4gICAgICAgICAgX3Rlc3ROb1B4Tm9ybVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBqTGltaXQgPSAxMDA7XG4gICAgICAgIGxldCBqID0gMztcbiAgICAgICAgZm9yICg7IGogPCB0ZXh0Q29udGVudE5vcm0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAvLyBrZWVwIGNvbnN1bWluZyBjc3MgaWRlbnRpZmllcnMgKHRvIGdldCBhIGRlY2VudCBjaHVuayBtb3JlIHF1aWNrbHkpXG4gICAgICAgICAgICB0ZXh0Q29udGVudE5vcm1bal0ubWF0Y2goL1thLXpBLVowLTldLykgfHwgLy8gc3Vic3RyaW5nIG5lZWRzIHRvIGJlIHVuaXF1ZSB0byB0aGlzIHNlY3Rpb25cbiAgICAgICAgICAgIHRleHRDb250ZW50Tm9ybS5pbmRleE9mKHRleHRDb250ZW50Tm9ybS5zdWJzdHJpbmcoMCwgaiksIDEpICE9PSAtMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdGV4dENvbnRlbnROb3JtLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IHN0YXJ0U3Vic3RyaW5nID0gdGV4dENvbnRlbnROb3JtLnN1YnN0cmluZygwLCBqKTtcbiAgICAgICAgICBsZXQgY3NzTm9ybVNwbGl0cyA9IGNzc1RleHROb3JtLnNwbGl0KHN0YXJ0U3Vic3RyaW5nKTtcbiAgICAgICAgICBsZXQgc3BsaXROb3JtID0gLTE7XG4gICAgICAgICAgaWYgKGNzc05vcm1TcGxpdHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBzcGxpdE5vcm0gPSBjc3NOb3JtU3BsaXRzWzBdLmxlbmd0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNzc05vcm1TcGxpdHMubGVuZ3RoID4gMiAmJiBjc3NOb3JtU3BsaXRzWzBdID09PSBcIlwiICYmIGNoaWxkTm9kZXMyW2kgLSAxXS50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgICAgICAgc3BsaXROb3JtID0gY3NzVGV4dE5vcm0uaW5kZXhPZihzdGFydFN1YnN0cmluZywgMSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjc3NOb3JtU3BsaXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgc3RhcnRTdWJzdHJpbmcgPSBzdGFydFN1YnN0cmluZy5zdWJzdHJpbmcoXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIHN0YXJ0U3Vic3RyaW5nLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjc3NOb3JtU3BsaXRzID0gY3NzVGV4dE5vcm0uc3BsaXQoc3RhcnRTdWJzdHJpbmcpO1xuICAgICAgICAgICAgaWYgKGNzc05vcm1TcGxpdHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgc3BsaXRzLnB1c2goY3NzVGV4dCk7XG4gICAgICAgICAgICAgIHJldHVybiBzcGxpdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBqID0gakxpbWl0ICsgMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGogPT09IHRleHRDb250ZW50Tm9ybS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBzcGxpdE5vcm0gPSBjc3NUZXh0Tm9ybS5pbmRleE9mKHN0YXJ0U3Vic3RyaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNzc05vcm1TcGxpdHMubGVuZ3RoID49IDIgJiYgaiA+IGpMaW1pdCkge1xuICAgICAgICAgICAgY29uc3QgcHJldlRleHRDb250ZW50ID0gY2hpbGROb2RlczJbaSAtIDFdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgaWYgKHByZXZUZXh0Q29udGVudCAmJiB0eXBlb2YgcHJldlRleHRDb250ZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHByZXZNaW5MZW5ndGggPSBub3JtYWxpemVDc3NTdHJpbmcocHJldlRleHRDb250ZW50KS5sZW5ndGg7XG4gICAgICAgICAgICAgIHNwbGl0Tm9ybSA9IGNzc1RleHROb3JtLmluZGV4T2Yoc3RhcnRTdWJzdHJpbmcsIHByZXZNaW5MZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNwbGl0Tm9ybSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgc3BsaXROb3JtID0gY3NzTm9ybVNwbGl0c1swXS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzcGxpdE5vcm0gIT09IC0xKSB7XG4gICAgICAgICAgICBsZXQgayA9IE1hdGguZmxvb3Ioc3BsaXROb3JtIC8gbm9ybUZhY3Rvcik7XG4gICAgICAgICAgICBmb3IgKDsgayA+IDAgJiYgayA8IGNzc1RleHQubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgaXRlckNvdW50ICs9IDE7XG4gICAgICAgICAgICAgIGlmIChpdGVyQ291bnQgPiA1MCAqIGNoaWxkTm9kZXMyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNwbGl0cy5wdXNoKGNzc1RleHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzcGxpdHM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc3Qgbm9ybVBhcnQgPSBub3JtYWxpemVDc3NTdHJpbmcoXG4gICAgICAgICAgICAgICAgY3NzVGV4dC5zdWJzdHJpbmcoMCwgayksXG4gICAgICAgICAgICAgICAgX3Rlc3ROb1B4Tm9ybVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAobm9ybVBhcnQubGVuZ3RoID09PSBzcGxpdE5vcm0pIHtcbiAgICAgICAgICAgICAgICBzcGxpdHMucHVzaChjc3NUZXh0LnN1YnN0cmluZygwLCBrKSk7XG4gICAgICAgICAgICAgICAgY3NzVGV4dCA9IGNzc1RleHQuc3Vic3RyaW5nKGspO1xuICAgICAgICAgICAgICAgIGNzc1RleHROb3JtID0gY3NzVGV4dE5vcm0uc3Vic3RyaW5nKHNwbGl0Tm9ybSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobm9ybVBhcnQubGVuZ3RoIDwgc3BsaXROb3JtKSB7XG4gICAgICAgICAgICAgICAgayArPSBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKChzcGxpdE5vcm0gLSBub3JtUGFydC5sZW5ndGgpIC8gbm9ybUZhY3RvcilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGsgLT0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcigobm9ybVBhcnQubGVuZ3RoIC0gc3BsaXROb3JtKSAqIG5vcm1GYWN0b3IpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNwbGl0cy5wdXNoKGNzc1RleHQpO1xuICByZXR1cm4gc3BsaXRzO1xufVxuZnVuY3Rpb24gbWFya0Nzc1NwbGl0cyhjc3NUZXh0LCBzdHlsZSkge1xuICByZXR1cm4gc3BsaXRDc3NUZXh0KGNzc1RleHQsIHN0eWxlKS5qb2luKFwiLyogcnJfc3BsaXQgKi9cIik7XG59XG5sZXQgX2lkID0gMTtcbmNvbnN0IHRhZ05hbWVSZWdleCA9IG5ldyBSZWdFeHAoXCJbXmEtejAtOS1fOl1cIik7XG5jb25zdCBJR05PUkVEX05PREUgPSAtMjtcbmZ1bmN0aW9uIGdlbklkKCkge1xuICByZXR1cm4gX2lkKys7XG59XG5mdW5jdGlvbiBnZXRWYWxpZFRhZ05hbWUoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgIHJldHVybiBcImZvcm1cIjtcbiAgfVxuICBjb25zdCBwcm9jZXNzZWRUYWdOYW1lID0gdG9Mb3dlckNhc2UoZWxlbWVudC50YWdOYW1lKTtcbiAgaWYgKHRhZ05hbWVSZWdleC50ZXN0KHByb2Nlc3NlZFRhZ05hbWUpKSB7XG4gICAgcmV0dXJuIFwiZGl2XCI7XG4gIH1cbiAgcmV0dXJuIHByb2Nlc3NlZFRhZ05hbWU7XG59XG5sZXQgY2FudmFzU2VydmljZTtcbmxldCBjYW52YXNDdHg7XG5jb25zdCBTUkNTRVRfTk9UX1NQQUNFUyA9IC9eW14gXFx0XFxuXFxyXFx1MDAwY10rLztcbmNvbnN0IFNSQ1NFVF9DT01NQVNfT1JfU1BBQ0VTID0gL15bLCBcXHRcXG5cXHJcXHUwMDBjXSsvO1xuZnVuY3Rpb24gZ2V0QWJzb2x1dGVTcmNzZXRTdHJpbmcoZG9jLCBhdHRyaWJ1dGVWYWx1ZSkge1xuICBpZiAoYXR0cmlidXRlVmFsdWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG4gIGxldCBwb3MgPSAwO1xuICBmdW5jdGlvbiBjb2xsZWN0Q2hhcmFjdGVycyhyZWdFeCkge1xuICAgIGxldCBjaGFycztcbiAgICBjb25zdCBtYXRjaCA9IHJlZ0V4LmV4ZWMoYXR0cmlidXRlVmFsdWUuc3Vic3RyaW5nKHBvcykpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgY2hhcnMgPSBtYXRjaFswXTtcbiAgICAgIHBvcyArPSBjaGFycy5sZW5ndGg7XG4gICAgICByZXR1cm4gY2hhcnM7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIGNvbnN0IG91dHB1dCA9IFtdO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbGxlY3RDaGFyYWN0ZXJzKFNSQ1NFVF9DT01NQVNfT1JfU1BBQ0VTKTtcbiAgICBpZiAocG9zID49IGF0dHJpYnV0ZVZhbHVlLmxlbmd0aCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGxldCB1cmwgPSBjb2xsZWN0Q2hhcmFjdGVycyhTUkNTRVRfTk9UX1NQQUNFUyk7XG4gICAgaWYgKHVybC5zbGljZSgtMSkgPT09IFwiLFwiKSB7XG4gICAgICB1cmwgPSBhYnNvbHV0ZVRvRG9jKGRvYywgdXJsLnN1YnN0cmluZygwLCB1cmwubGVuZ3RoIC0gMSkpO1xuICAgICAgb3V0cHV0LnB1c2godXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGRlc2NyaXB0b3JzU3RyID0gXCJcIjtcbiAgICAgIHVybCA9IGFic29sdXRlVG9Eb2MoZG9jLCB1cmwpO1xuICAgICAgbGV0IGluUGFyZW5zID0gZmFsc2U7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCBjID0gYXR0cmlidXRlVmFsdWUuY2hhckF0KHBvcyk7XG4gICAgICAgIGlmIChjID09PSBcIlwiKSB7XG4gICAgICAgICAgb3V0cHV0LnB1c2goKHVybCArIGRlc2NyaXB0b3JzU3RyKS50cmltKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKCFpblBhcmVucykge1xuICAgICAgICAgIGlmIChjID09PSBcIixcIikge1xuICAgICAgICAgICAgcG9zICs9IDE7XG4gICAgICAgICAgICBvdXRwdXQucHVzaCgodXJsICsgZGVzY3JpcHRvcnNTdHIpLnRyaW0oKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2UgaWYgKGMgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICBpblBhcmVucyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjID09PSBcIilcIikge1xuICAgICAgICAgICAgaW5QYXJlbnMgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVzY3JpcHRvcnNTdHIgKz0gYztcbiAgICAgICAgcG9zICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbihcIiwgXCIpO1xufVxuY29uc3QgY2FjaGVkRG9jdW1lbnQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIGFic29sdXRlVG9Eb2MoZG9jLCBhdHRyaWJ1dGVWYWx1ZSkge1xuICBpZiAoIWF0dHJpYnV0ZVZhbHVlIHx8IGF0dHJpYnV0ZVZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuICByZXR1cm4gZ2V0SHJlZihkb2MsIGF0dHJpYnV0ZVZhbHVlKTtcbn1cbmZ1bmN0aW9uIGlzU1ZHRWxlbWVudChlbCkge1xuICByZXR1cm4gQm9vbGVhbihlbC50YWdOYW1lID09PSBcInN2Z1wiIHx8IGVsLm93bmVyU1ZHRWxlbWVudCk7XG59XG5mdW5jdGlvbiBnZXRIcmVmKGRvYywgY3VzdG9tSHJlZikge1xuICBsZXQgYSA9IGNhY2hlZERvY3VtZW50LmdldChkb2MpO1xuICBpZiAoIWEpIHtcbiAgICBhID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNhY2hlZERvY3VtZW50LnNldChkb2MsIGEpO1xuICB9XG4gIGlmICghY3VzdG9tSHJlZikge1xuICAgIGN1c3RvbUhyZWYgPSBcIlwiO1xuICB9IGVsc2UgaWYgKGN1c3RvbUhyZWYuc3RhcnRzV2l0aChcImJsb2I6XCIpIHx8IGN1c3RvbUhyZWYuc3RhcnRzV2l0aChcImRhdGE6XCIpKSB7XG4gICAgcmV0dXJuIGN1c3RvbUhyZWY7XG4gIH1cbiAgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGN1c3RvbUhyZWYpO1xuICByZXR1cm4gYS5ocmVmO1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtQXR0cmlidXRlKGRvYywgdGFnTmFtZSwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAobmFtZSA9PT0gXCJzcmNcIiB8fCBuYW1lID09PSBcImhyZWZcIiAmJiAhKHRhZ05hbWUgPT09IFwidXNlXCIgJiYgdmFsdWVbMF0gPT09IFwiI1wiKSkge1xuICAgIHJldHVybiBhYnNvbHV0ZVRvRG9jKGRvYywgdmFsdWUpO1xuICB9IGVsc2UgaWYgKG5hbWUgPT09IFwieGxpbms6aHJlZlwiICYmIHZhbHVlWzBdICE9PSBcIiNcIikge1xuICAgIHJldHVybiBhYnNvbHV0ZVRvRG9jKGRvYywgdmFsdWUpO1xuICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiYmFja2dyb3VuZFwiICYmICh0YWdOYW1lID09PSBcInRhYmxlXCIgfHwgdGFnTmFtZSA9PT0gXCJ0ZFwiIHx8IHRhZ05hbWUgPT09IFwidGhcIikpIHtcbiAgICByZXR1cm4gYWJzb2x1dGVUb0RvYyhkb2MsIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChuYW1lID09PSBcInNyY3NldFwiKSB7XG4gICAgcmV0dXJuIGdldEFic29sdXRlU3Jjc2V0U3RyaW5nKGRvYywgdmFsdWUpO1xuICB9IGVsc2UgaWYgKG5hbWUgPT09IFwic3R5bGVcIikge1xuICAgIHJldHVybiBhYnNvbHV0aWZ5VVJMcyh2YWx1ZSwgZ2V0SHJlZihkb2MpKTtcbiAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcIm9iamVjdFwiICYmIG5hbWUgPT09IFwiZGF0YVwiKSB7XG4gICAgcmV0dXJuIGFic29sdXRlVG9Eb2MoZG9jLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gaWdub3JlQXR0cmlidXRlKHRhZ05hbWUsIG5hbWUsIF92YWx1ZSkge1xuICByZXR1cm4gKHRhZ05hbWUgPT09IFwidmlkZW9cIiB8fCB0YWdOYW1lID09PSBcImF1ZGlvXCIpICYmIG5hbWUgPT09IFwiYXV0b3BsYXlcIjtcbn1cbmZ1bmN0aW9uIF9pc0Jsb2NrZWRFbGVtZW50KGVsZW1lbnQsIGJsb2NrQ2xhc3MsIGJsb2NrU2VsZWN0b3IpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIGJsb2NrQ2xhc3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhibG9ja0NsYXNzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgZUluZGV4ID0gZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoOyBlSW5kZXgtLTsgKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NMaXN0W2VJbmRleF07XG4gICAgICAgIGlmIChibG9ja0NsYXNzLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChibG9ja1NlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5tYXRjaGVzKGJsb2NrU2VsZWN0b3IpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGNsYXNzTWF0Y2hlc1JlZ2V4KG5vZGUyLCByZWdleCwgY2hlY2tBbmNlc3RvcnMpIHtcbiAgaWYgKCFub2RlMikgcmV0dXJuIGZhbHNlO1xuICBpZiAobm9kZTIubm9kZVR5cGUgIT09IG5vZGUyLkVMRU1FTlRfTk9ERSkge1xuICAgIGlmICghY2hlY2tBbmNlc3RvcnMpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gY2xhc3NNYXRjaGVzUmVnZXgoaW5kZXgucGFyZW50Tm9kZShub2RlMiksIHJlZ2V4LCBjaGVja0FuY2VzdG9ycyk7XG4gIH1cbiAgZm9yIChsZXQgZUluZGV4ID0gbm9kZTIuY2xhc3NMaXN0Lmxlbmd0aDsgZUluZGV4LS07ICkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IG5vZGUyLmNsYXNzTGlzdFtlSW5kZXhdO1xuICAgIGlmIChyZWdleC50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICBpZiAoIWNoZWNrQW5jZXN0b3JzKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBjbGFzc01hdGNoZXNSZWdleChpbmRleC5wYXJlbnROb2RlKG5vZGUyKSwgcmVnZXgsIGNoZWNrQW5jZXN0b3JzKTtcbn1cbmZ1bmN0aW9uIG5lZWRNYXNraW5nVGV4dChub2RlMiwgbWFza1RleHRDbGFzcywgbWFza1RleHRTZWxlY3RvciwgY2hlY2tBbmNlc3RvcnMpIHtcbiAgbGV0IGVsO1xuICBpZiAoaXNFbGVtZW50KG5vZGUyKSkge1xuICAgIGVsID0gbm9kZTI7XG4gICAgaWYgKCFpbmRleC5jaGlsZE5vZGVzKGVsKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaW5kZXgucGFyZW50RWxlbWVudChub2RlMikgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgZWwgPSBpbmRleC5wYXJlbnRFbGVtZW50KG5vZGUyKTtcbiAgfVxuICB0cnkge1xuICAgIGlmICh0eXBlb2YgbWFza1RleHRDbGFzcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKGNoZWNrQW5jZXN0b3JzKSB7XG4gICAgICAgIGlmIChlbC5jbG9zZXN0KGAuJHttYXNrVGV4dENsYXNzfWApKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMobWFza1RleHRDbGFzcykpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2xhc3NNYXRjaGVzUmVnZXgoZWwsIG1hc2tUZXh0Q2xhc3MsIGNoZWNrQW5jZXN0b3JzKSkgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChtYXNrVGV4dFNlbGVjdG9yKSB7XG4gICAgICBpZiAoY2hlY2tBbmNlc3RvcnMpIHtcbiAgICAgICAgaWYgKGVsLmNsb3Nlc3QobWFza1RleHRTZWxlY3RvcikpIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGVsLm1hdGNoZXMobWFza1RleHRTZWxlY3RvcikpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIG9uY2VJZnJhbWVMb2FkZWQoaWZyYW1lRWwsIGxpc3RlbmVyLCBpZnJhbWVMb2FkVGltZW91dCkge1xuICBjb25zdCB3aW4gPSBpZnJhbWVFbC5jb250ZW50V2luZG93O1xuICBpZiAoIXdpbikge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZmlyZWQgPSBmYWxzZTtcbiAgbGV0IHJlYWR5U3RhdGU7XG4gIHRyeSB7XG4gICAgcmVhZHlTdGF0ZSA9IHdpbi5kb2N1bWVudC5yZWFkeVN0YXRlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocmVhZHlTdGF0ZSAhPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghZmlyZWQpIHtcbiAgICAgICAgbGlzdGVuZXIoKTtcbiAgICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGlmcmFtZUxvYWRUaW1lb3V0KTtcbiAgICBpZnJhbWVFbC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgYmxhbmtVcmwgPSBcImFib3V0OmJsYW5rXCI7XG4gIGlmICh3aW4ubG9jYXRpb24uaHJlZiAhPT0gYmxhbmtVcmwgfHwgaWZyYW1lRWwuc3JjID09PSBibGFua1VybCB8fCBpZnJhbWVFbC5zcmMgPT09IFwiXCIpIHtcbiAgICBzZXRUaW1lb3V0KGxpc3RlbmVyLCAwKTtcbiAgICByZXR1cm4gaWZyYW1lRWwuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbGlzdGVuZXIpO1xuICB9XG4gIGlmcmFtZUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGxpc3RlbmVyKTtcbn1cbmZ1bmN0aW9uIG9uY2VTdHlsZXNoZWV0TG9hZGVkKGxpbmssIGxpc3RlbmVyLCBzdHlsZVNoZWV0TG9hZFRpbWVvdXQpIHtcbiAgbGV0IGZpcmVkID0gZmFsc2U7XG4gIGxldCBzdHlsZVNoZWV0TG9hZGVkO1xuICB0cnkge1xuICAgIHN0eWxlU2hlZXRMb2FkZWQgPSBsaW5rLnNoZWV0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoc3R5bGVTaGVldExvYWRlZCkgcmV0dXJuO1xuICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgfVxuICB9LCBzdHlsZVNoZWV0TG9hZFRpbWVvdXQpO1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIGZpcmVkID0gdHJ1ZTtcbiAgICBsaXN0ZW5lcigpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNlcmlhbGl6ZU5vZGUobiwgb3B0aW9ucykge1xuICBjb25zdCB7XG4gICAgZG9jLFxuICAgIG1pcnJvcixcbiAgICBibG9ja0NsYXNzLFxuICAgIGJsb2NrU2VsZWN0b3IsXG4gICAgbmVlZHNNYXNrLFxuICAgIGlubGluZVN0eWxlc2hlZXQsXG4gICAgbWFza0lucHV0T3B0aW9ucyA9IHt9LFxuICAgIG1hc2tUZXh0Rm4sXG4gICAgbWFza0lucHV0Rm4sXG4gICAgZGF0YVVSTE9wdGlvbnMgPSB7fSxcbiAgICBpbmxpbmVJbWFnZXMsXG4gICAgcmVjb3JkQ2FudmFzLFxuICAgIGtlZXBJZnJhbWVTcmNGbixcbiAgICBuZXdseUFkZGVkRWxlbWVudCA9IGZhbHNlLFxuICAgIGNzc0NhcHR1cmVkID0gZmFsc2VcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHJvb3RJZCA9IGdldFJvb3RJZChkb2MsIG1pcnJvcik7XG4gIHN3aXRjaCAobi5ub2RlVHlwZSkge1xuICAgIGNhc2Ugbi5ET0NVTUVOVF9OT0RFOlxuICAgICAgaWYgKG4uY29tcGF0TW9kZSAhPT0gXCJDU1MxQ29tcGF0XCIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBOb2RlVHlwZS5Eb2N1bWVudCxcbiAgICAgICAgICBjaGlsZE5vZGVzOiBbXSxcbiAgICAgICAgICBjb21wYXRNb2RlOiBuLmNvbXBhdE1vZGVcbiAgICAgICAgICAvLyBwcm9iYWJseSBcIkJhY2tDb21wYXRcIlxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBOb2RlVHlwZS5Eb2N1bWVudCxcbiAgICAgICAgICBjaGlsZE5vZGVzOiBbXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIGNhc2Ugbi5ET0NVTUVOVF9UWVBFX05PREU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBOb2RlVHlwZS5Eb2N1bWVudFR5cGUsXG4gICAgICAgIG5hbWU6IG4ubmFtZSxcbiAgICAgICAgcHVibGljSWQ6IG4ucHVibGljSWQsXG4gICAgICAgIHN5c3RlbUlkOiBuLnN5c3RlbUlkLFxuICAgICAgICByb290SWRcbiAgICAgIH07XG4gICAgY2FzZSBuLkVMRU1FTlRfTk9ERTpcbiAgICAgIHJldHVybiBzZXJpYWxpemVFbGVtZW50Tm9kZShuLCB7XG4gICAgICAgIGRvYyxcbiAgICAgICAgYmxvY2tDbGFzcyxcbiAgICAgICAgYmxvY2tTZWxlY3RvcixcbiAgICAgICAgaW5saW5lU3R5bGVzaGVldCxcbiAgICAgICAgbWFza0lucHV0T3B0aW9ucyxcbiAgICAgICAgbWFza0lucHV0Rm4sXG4gICAgICAgIGRhdGFVUkxPcHRpb25zLFxuICAgICAgICBpbmxpbmVJbWFnZXMsXG4gICAgICAgIHJlY29yZENhbnZhcyxcbiAgICAgICAga2VlcElmcmFtZVNyY0ZuLFxuICAgICAgICBuZXdseUFkZGVkRWxlbWVudCxcbiAgICAgICAgcm9vdElkXG4gICAgICB9KTtcbiAgICBjYXNlIG4uVEVYVF9OT0RFOlxuICAgICAgcmV0dXJuIHNlcmlhbGl6ZVRleHROb2RlKG4sIHtcbiAgICAgICAgZG9jLFxuICAgICAgICBuZWVkc01hc2ssXG4gICAgICAgIG1hc2tUZXh0Rm4sXG4gICAgICAgIHJvb3RJZCxcbiAgICAgICAgY3NzQ2FwdHVyZWRcbiAgICAgIH0pO1xuICAgIGNhc2Ugbi5DREFUQV9TRUNUSU9OX05PREU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBOb2RlVHlwZS5DREFUQSxcbiAgICAgICAgdGV4dENvbnRlbnQ6IFwiXCIsXG4gICAgICAgIHJvb3RJZFxuICAgICAgfTtcbiAgICBjYXNlIG4uQ09NTUVOVF9OT0RFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogTm9kZVR5cGUuQ29tbWVudCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IGluZGV4LnRleHRDb250ZW50KG4pIHx8IFwiXCIsXG4gICAgICAgIHJvb3RJZFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiBnZXRSb290SWQoZG9jLCBtaXJyb3IpIHtcbiAgaWYgKCFtaXJyb3IuaGFzTm9kZShkb2MpKSByZXR1cm4gdm9pZCAwO1xuICBjb25zdCBkb2NJZCA9IG1pcnJvci5nZXRJZChkb2MpO1xuICByZXR1cm4gZG9jSWQgPT09IDEgPyB2b2lkIDAgOiBkb2NJZDtcbn1cbmZ1bmN0aW9uIHNlcmlhbGl6ZVRleHROb2RlKG4sIG9wdGlvbnMpIHtcbiAgY29uc3QgeyBuZWVkc01hc2ssIG1hc2tUZXh0Rm4sIHJvb3RJZCwgY3NzQ2FwdHVyZWQgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHBhcmVudCA9IGluZGV4LnBhcmVudE5vZGUobik7XG4gIGNvbnN0IHBhcmVudFRhZ05hbWUgPSBwYXJlbnQgJiYgcGFyZW50LnRhZ05hbWU7XG4gIGxldCB0ZXh0Q29udGVudDIgPSBcIlwiO1xuICBjb25zdCBpc1N0eWxlID0gcGFyZW50VGFnTmFtZSA9PT0gXCJTVFlMRVwiID8gdHJ1ZSA6IHZvaWQgMDtcbiAgY29uc3QgaXNTY3JpcHQgPSBwYXJlbnRUYWdOYW1lID09PSBcIlNDUklQVFwiID8gdHJ1ZSA6IHZvaWQgMDtcbiAgaWYgKGlzU2NyaXB0KSB7XG4gICAgdGV4dENvbnRlbnQyID0gXCJTQ1JJUFRfUExBQ0VIT0xERVJcIjtcbiAgfSBlbHNlIGlmICghY3NzQ2FwdHVyZWQpIHtcbiAgICB0ZXh0Q29udGVudDIgPSBpbmRleC50ZXh0Q29udGVudChuKTtcbiAgICBpZiAoaXNTdHlsZSAmJiB0ZXh0Q29udGVudDIpIHtcbiAgICAgIHRleHRDb250ZW50MiA9IGFic29sdXRpZnlVUkxzKHRleHRDb250ZW50MiwgZ2V0SHJlZihvcHRpb25zLmRvYykpO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU3R5bGUgJiYgIWlzU2NyaXB0ICYmIHRleHRDb250ZW50MiAmJiBuZWVkc01hc2spIHtcbiAgICB0ZXh0Q29udGVudDIgPSBtYXNrVGV4dEZuID8gbWFza1RleHRGbih0ZXh0Q29udGVudDIsIGluZGV4LnBhcmVudEVsZW1lbnQobikpIDogdGV4dENvbnRlbnQyLnJlcGxhY2UoL1tcXFNdL2csIFwiKlwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IE5vZGVUeXBlLlRleHQsXG4gICAgdGV4dENvbnRlbnQ6IHRleHRDb250ZW50MiB8fCBcIlwiLFxuICAgIHJvb3RJZFxuICB9O1xufVxuZnVuY3Rpb24gc2VyaWFsaXplRWxlbWVudE5vZGUobiwgb3B0aW9ucykge1xuICBjb25zdCB7XG4gICAgZG9jLFxuICAgIGJsb2NrQ2xhc3MsXG4gICAgYmxvY2tTZWxlY3RvcixcbiAgICBpbmxpbmVTdHlsZXNoZWV0LFxuICAgIG1hc2tJbnB1dE9wdGlvbnMgPSB7fSxcbiAgICBtYXNrSW5wdXRGbixcbiAgICBkYXRhVVJMT3B0aW9ucyA9IHt9LFxuICAgIGlubGluZUltYWdlcyxcbiAgICByZWNvcmRDYW52YXMsXG4gICAga2VlcElmcmFtZVNyY0ZuLFxuICAgIG5ld2x5QWRkZWRFbGVtZW50ID0gZmFsc2UsXG4gICAgcm9vdElkXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBuZWVkQmxvY2sgPSBfaXNCbG9ja2VkRWxlbWVudChuLCBibG9ja0NsYXNzLCBibG9ja1NlbGVjdG9yKTtcbiAgY29uc3QgdGFnTmFtZSA9IGdldFZhbGlkVGFnTmFtZShuKTtcbiAgbGV0IGF0dHJpYnV0ZXMgPSB7fTtcbiAgY29uc3QgbGVuID0gbi5hdHRyaWJ1dGVzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGF0dHIgPSBuLmF0dHJpYnV0ZXNbaV07XG4gICAgaWYgKCFpZ25vcmVBdHRyaWJ1dGUodGFnTmFtZSwgYXR0ci5uYW1lLCBhdHRyLnZhbHVlKSkge1xuICAgICAgYXR0cmlidXRlc1thdHRyLm5hbWVdID0gdHJhbnNmb3JtQXR0cmlidXRlKFxuICAgICAgICBkb2MsXG4gICAgICAgIHRhZ05hbWUsXG4gICAgICAgIHRvTG93ZXJDYXNlKGF0dHIubmFtZSksXG4gICAgICAgIGF0dHIudmFsdWVcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGlmICh0YWdOYW1lID09PSBcImxpbmtcIiAmJiBpbmxpbmVTdHlsZXNoZWV0KSB7XG4gICAgY29uc3Qgc3R5bGVzaGVldCA9IEFycmF5LmZyb20oZG9jLnN0eWxlU2hlZXRzKS5maW5kKChzKSA9PiB7XG4gICAgICByZXR1cm4gcy5ocmVmID09PSBuLmhyZWY7XG4gICAgfSk7XG4gICAgbGV0IGNzc1RleHQgPSBudWxsO1xuICAgIGlmIChzdHlsZXNoZWV0KSB7XG4gICAgICBjc3NUZXh0ID0gc3RyaW5naWZ5U3R5bGVzaGVldChzdHlsZXNoZWV0KTtcbiAgICB9XG4gICAgaWYgKGNzc1RleHQpIHtcbiAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLnJlbDtcbiAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLmhyZWY7XG4gICAgICBhdHRyaWJ1dGVzLl9jc3NUZXh0ID0gY3NzVGV4dDtcbiAgICB9XG4gIH1cbiAgaWYgKHRhZ05hbWUgPT09IFwic3R5bGVcIiAmJiBuLnNoZWV0KSB7XG4gICAgbGV0IGNzc1RleHQgPSBzdHJpbmdpZnlTdHlsZXNoZWV0KFxuICAgICAgbi5zaGVldFxuICAgICk7XG4gICAgaWYgKGNzc1RleHQpIHtcbiAgICAgIGlmIChuLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICBjc3NUZXh0ID0gbWFya0Nzc1NwbGl0cyhjc3NUZXh0LCBuKTtcbiAgICAgIH1cbiAgICAgIGF0dHJpYnV0ZXMuX2Nzc1RleHQgPSBjc3NUZXh0O1xuICAgIH1cbiAgfVxuICBpZiAodGFnTmFtZSA9PT0gXCJpbnB1dFwiIHx8IHRhZ05hbWUgPT09IFwidGV4dGFyZWFcIiB8fCB0YWdOYW1lID09PSBcInNlbGVjdFwiKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuLnZhbHVlO1xuICAgIGNvbnN0IGNoZWNrZWQgPSBuLmNoZWNrZWQ7XG4gICAgaWYgKGF0dHJpYnV0ZXMudHlwZSAhPT0gXCJyYWRpb1wiICYmIGF0dHJpYnV0ZXMudHlwZSAhPT0gXCJjaGVja2JveFwiICYmIGF0dHJpYnV0ZXMudHlwZSAhPT0gXCJzdWJtaXRcIiAmJiBhdHRyaWJ1dGVzLnR5cGUgIT09IFwiYnV0dG9uXCIgJiYgdmFsdWUpIHtcbiAgICAgIGF0dHJpYnV0ZXMudmFsdWUgPSBtYXNrSW5wdXRWYWx1ZSh7XG4gICAgICAgIGVsZW1lbnQ6IG4sXG4gICAgICAgIHR5cGU6IGdldElucHV0VHlwZShuKSxcbiAgICAgICAgdGFnTmFtZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG1hc2tJbnB1dE9wdGlvbnMsXG4gICAgICAgIG1hc2tJbnB1dEZuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNoZWNrZWQpIHtcbiAgICAgIGF0dHJpYnV0ZXMuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgfVxuICB9XG4gIGlmICh0YWdOYW1lID09PSBcIm9wdGlvblwiKSB7XG4gICAgaWYgKG4uc2VsZWN0ZWQgJiYgIW1hc2tJbnB1dE9wdGlvbnNbXCJzZWxlY3RcIl0pIHtcbiAgICAgIGF0dHJpYnV0ZXMuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgYXR0cmlidXRlcy5zZWxlY3RlZDtcbiAgICB9XG4gIH1cbiAgaWYgKHRhZ05hbWUgPT09IFwiZGlhbG9nXCIgJiYgbi5vcGVuKSB7XG4gICAgYXR0cmlidXRlcy5ycl9vcGVuX21vZGUgPSBuLm1hdGNoZXMoXCJkaWFsb2c6bW9kYWxcIikgPyBcIm1vZGFsXCIgOiBcIm5vbi1tb2RhbFwiO1xuICB9XG4gIGlmICh0YWdOYW1lID09PSBcImNhbnZhc1wiICYmIHJlY29yZENhbnZhcykge1xuICAgIGlmIChuLl9fY29udGV4dCA9PT0gXCIyZFwiKSB7XG4gICAgICBpZiAoIWlzMkRDYW52YXNCbGFuayhuKSkge1xuICAgICAgICBhdHRyaWJ1dGVzLnJyX2RhdGFVUkwgPSBuLnRvRGF0YVVSTChcbiAgICAgICAgICBkYXRhVVJMT3B0aW9ucy50eXBlLFxuICAgICAgICAgIGRhdGFVUkxPcHRpb25zLnF1YWxpdHlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoXCJfX2NvbnRleHRcIiBpbiBuKSkge1xuICAgICAgY29uc3QgY2FudmFzRGF0YVVSTCA9IG4udG9EYXRhVVJMKFxuICAgICAgICBkYXRhVVJMT3B0aW9ucy50eXBlLFxuICAgICAgICBkYXRhVVJMT3B0aW9ucy5xdWFsaXR5XG4gICAgICApO1xuICAgICAgY29uc3QgYmxhbmtDYW52YXMgPSBkb2MuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgIGJsYW5rQ2FudmFzLndpZHRoID0gbi53aWR0aDtcbiAgICAgIGJsYW5rQ2FudmFzLmhlaWdodCA9IG4uaGVpZ2h0O1xuICAgICAgY29uc3QgYmxhbmtDYW52YXNEYXRhVVJMID0gYmxhbmtDYW52YXMudG9EYXRhVVJMKFxuICAgICAgICBkYXRhVVJMT3B0aW9ucy50eXBlLFxuICAgICAgICBkYXRhVVJMT3B0aW9ucy5xdWFsaXR5XG4gICAgICApO1xuICAgICAgaWYgKGNhbnZhc0RhdGFVUkwgIT09IGJsYW5rQ2FudmFzRGF0YVVSTCkge1xuICAgICAgICBhdHRyaWJ1dGVzLnJyX2RhdGFVUkwgPSBjYW52YXNEYXRhVVJMO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAodGFnTmFtZSA9PT0gXCJpbWdcIiAmJiBpbmxpbmVJbWFnZXMpIHtcbiAgICBpZiAoIWNhbnZhc1NlcnZpY2UpIHtcbiAgICAgIGNhbnZhc1NlcnZpY2UgPSBkb2MuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgIGNhbnZhc0N0eCA9IGNhbnZhc1NlcnZpY2UuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIH1cbiAgICBjb25zdCBpbWFnZSA9IG47XG4gICAgY29uc3QgaW1hZ2VTcmMgPSBpbWFnZS5jdXJyZW50U3JjIHx8IGltYWdlLmdldEF0dHJpYnV0ZShcInNyY1wiKSB8fCBcIjx1bmtub3duLXNyYz5cIjtcbiAgICBjb25zdCBwcmlvckNyb3NzT3JpZ2luID0gaW1hZ2UuY3Jvc3NPcmlnaW47XG4gICAgY29uc3QgcmVjb3JkSW5saW5lSW1hZ2UgPSAoKSA9PiB7XG4gICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCByZWNvcmRJbmxpbmVJbWFnZSk7XG4gICAgICB0cnkge1xuICAgICAgICBjYW52YXNTZXJ2aWNlLndpZHRoID0gaW1hZ2UubmF0dXJhbFdpZHRoO1xuICAgICAgICBjYW52YXNTZXJ2aWNlLmhlaWdodCA9IGltYWdlLm5hdHVyYWxIZWlnaHQ7XG4gICAgICAgIGNhbnZhc0N0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgICAgICBhdHRyaWJ1dGVzLnJyX2RhdGFVUkwgPSBjYW52YXNTZXJ2aWNlLnRvRGF0YVVSTChcbiAgICAgICAgICBkYXRhVVJMT3B0aW9ucy50eXBlLFxuICAgICAgICAgIGRhdGFVUkxPcHRpb25zLnF1YWxpdHlcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoaW1hZ2UuY3Jvc3NPcmlnaW4gIT09IFwiYW5vbnltb3VzXCIpIHtcbiAgICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9IFwiYW5vbnltb3VzXCI7XG4gICAgICAgICAgaWYgKGltYWdlLmNvbXBsZXRlICYmIGltYWdlLm5hdHVyYWxXaWR0aCAhPT0gMClcbiAgICAgICAgICAgIHJlY29yZElubGluZUltYWdlKCk7XG4gICAgICAgICAgZWxzZSBpbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCByZWNvcmRJbmxpbmVJbWFnZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBDYW5ub3QgaW5saW5lIGltZyBzcmM9JHtpbWFnZVNyY30hIEVycm9yOiAke2Vycn1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGltYWdlLmNyb3NzT3JpZ2luID09PSBcImFub255bW91c1wiKSB7XG4gICAgICAgIHByaW9yQ3Jvc3NPcmlnaW4gPyBhdHRyaWJ1dGVzLmNyb3NzT3JpZ2luID0gcHJpb3JDcm9zc09yaWdpbiA6IGltYWdlLnJlbW92ZUF0dHJpYnV0ZShcImNyb3Nzb3JpZ2luXCIpO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltYWdlLmNvbXBsZXRlICYmIGltYWdlLm5hdHVyYWxXaWR0aCAhPT0gMCkgcmVjb3JkSW5saW5lSW1hZ2UoKTtcbiAgICBlbHNlIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHJlY29yZElubGluZUltYWdlKTtcbiAgfVxuICBpZiAodGFnTmFtZSA9PT0gXCJhdWRpb1wiIHx8IHRhZ05hbWUgPT09IFwidmlkZW9cIikge1xuICAgIGNvbnN0IG1lZGlhQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gICAgbWVkaWFBdHRyaWJ1dGVzLnJyX21lZGlhU3RhdGUgPSBuLnBhdXNlZCA/IFwicGF1c2VkXCIgOiBcInBsYXllZFwiO1xuICAgIG1lZGlhQXR0cmlidXRlcy5ycl9tZWRpYUN1cnJlbnRUaW1lID0gbi5jdXJyZW50VGltZTtcbiAgICBtZWRpYUF0dHJpYnV0ZXMucnJfbWVkaWFQbGF5YmFja1JhdGUgPSBuLnBsYXliYWNrUmF0ZTtcbiAgICBtZWRpYUF0dHJpYnV0ZXMucnJfbWVkaWFNdXRlZCA9IG4ubXV0ZWQ7XG4gICAgbWVkaWFBdHRyaWJ1dGVzLnJyX21lZGlhTG9vcCA9IG4ubG9vcDtcbiAgICBtZWRpYUF0dHJpYnV0ZXMucnJfbWVkaWFWb2x1bWUgPSBuLnZvbHVtZTtcbiAgfVxuICBpZiAoIW5ld2x5QWRkZWRFbGVtZW50KSB7XG4gICAgaWYgKG4uc2Nyb2xsTGVmdCkge1xuICAgICAgYXR0cmlidXRlcy5ycl9zY3JvbGxMZWZ0ID0gbi5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgICBpZiAobi5zY3JvbGxUb3ApIHtcbiAgICAgIGF0dHJpYnV0ZXMucnJfc2Nyb2xsVG9wID0gbi5zY3JvbGxUb3A7XG4gICAgfVxuICB9XG4gIGlmIChuZWVkQmxvY2spIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IG4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgYXR0cmlidXRlcyA9IHtcbiAgICAgIGNsYXNzOiBhdHRyaWJ1dGVzLmNsYXNzLFxuICAgICAgcnJfd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgIHJyX2hlaWdodDogYCR7aGVpZ2h0fXB4YFxuICAgIH07XG4gIH1cbiAgaWYgKHRhZ05hbWUgPT09IFwiaWZyYW1lXCIgJiYgIWtlZXBJZnJhbWVTcmNGbihhdHRyaWJ1dGVzLnNyYykpIHtcbiAgICBpZiAoIW4uY29udGVudERvY3VtZW50KSB7XG4gICAgICBhdHRyaWJ1dGVzLnJyX3NyYyA9IGF0dHJpYnV0ZXMuc3JjO1xuICAgIH1cbiAgICBkZWxldGUgYXR0cmlidXRlcy5zcmM7XG4gIH1cbiAgbGV0IGlzQ3VzdG9tRWxlbWVudDtcbiAgdHJ5IHtcbiAgICBpZiAoY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSBpc0N1c3RvbUVsZW1lbnQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBOb2RlVHlwZS5FbGVtZW50LFxuICAgIHRhZ05hbWUsXG4gICAgYXR0cmlidXRlcyxcbiAgICBjaGlsZE5vZGVzOiBbXSxcbiAgICBpc1NWRzogaXNTVkdFbGVtZW50KG4pIHx8IHZvaWQgMCxcbiAgICBuZWVkQmxvY2ssXG4gICAgcm9vdElkLFxuICAgIGlzQ3VzdG9tOiBpc0N1c3RvbUVsZW1lbnRcbiAgfTtcbn1cbmZ1bmN0aW9uIGxvd2VySWZFeGlzdHMobWF5YmVBdHRyKSB7XG4gIGlmIChtYXliZUF0dHIgPT09IHZvaWQgMCB8fCBtYXliZUF0dHIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbWF5YmVBdHRyLnRvTG93ZXJDYXNlKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNsaW1ET01FeGNsdWRlZChzbiwgc2xpbURPTU9wdGlvbnMpIHtcbiAgaWYgKHNsaW1ET01PcHRpb25zLmNvbW1lbnQgJiYgc24udHlwZSA9PT0gTm9kZVR5cGUuQ29tbWVudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHNuLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpIHtcbiAgICBpZiAoc2xpbURPTU9wdGlvbnMuc2NyaXB0ICYmIC8vIHNjcmlwdCB0YWdcbiAgICAoc24udGFnTmFtZSA9PT0gXCJzY3JpcHRcIiB8fCAvLyAobW9kdWxlKXByZWxvYWQgbGlua1xuICAgIHNuLnRhZ05hbWUgPT09IFwibGlua1wiICYmIChzbi5hdHRyaWJ1dGVzLnJlbCA9PT0gXCJwcmVsb2FkXCIgJiYgc24uYXR0cmlidXRlcy5hcyA9PT0gXCJzY3JpcHRcIiB8fCBzbi5hdHRyaWJ1dGVzLnJlbCA9PT0gXCJtb2R1bGVwcmVsb2FkXCIpIHx8IC8vIHByZWZldGNoIGxpbmtcbiAgICBzbi50YWdOYW1lID09PSBcImxpbmtcIiAmJiBzbi5hdHRyaWJ1dGVzLnJlbCA9PT0gXCJwcmVmZXRjaFwiICYmIHR5cGVvZiBzbi5hdHRyaWJ1dGVzLmhyZWYgPT09IFwic3RyaW5nXCIgJiYgZXh0cmFjdEZpbGVFeHRlbnNpb24oc24uYXR0cmlidXRlcy5ocmVmKSA9PT0gXCJqc1wiKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkRmF2aWNvbiAmJiAoc24udGFnTmFtZSA9PT0gXCJsaW5rXCIgJiYgc24uYXR0cmlidXRlcy5yZWwgPT09IFwic2hvcnRjdXQgaWNvblwiIHx8IHNuLnRhZ05hbWUgPT09IFwibWV0YVwiICYmIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkubWF0Y2goXG4gICAgICAvXm1zYXBwbGljYXRpb24tdGlsZShpbWFnZXxjb2xvcikkL1xuICAgICkgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcImFwcGxpY2F0aW9uLW5hbWVcIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMucmVsKSA9PT0gXCJpY29uXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLnJlbCkgPT09IFwiYXBwbGUtdG91Y2gtaWNvblwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5yZWwpID09PSBcInNob3J0Y3V0IGljb25cIikpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHNuLnRhZ05hbWUgPT09IFwibWV0YVwiKSB7XG4gICAgICBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFEZXNjS2V5d29yZHMgJiYgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpLm1hdGNoKC9eZGVzY3JpcHRpb258a2V5d29yZHMkLykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHNsaW1ET01PcHRpb25zLmhlYWRNZXRhU29jaWFsICYmIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMucHJvcGVydHkpLm1hdGNoKC9eKG9nfHR3aXR0ZXJ8ZmIpOi8pIHx8IC8vIG9nID0gb3BlbmdyYXBoIChmYWNlYm9vaylcbiAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKS5tYXRjaCgvXihvZ3x0d2l0dGVyKTovKSB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwicGludGVyZXN0XCIpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YVJvYm90cyAmJiAobG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcInJvYm90c1wiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJnb29nbGVib3RcIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwiYmluZ2JvdFwiKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFIdHRwRXF1aXYgJiYgc24uYXR0cmlidXRlc1tcImh0dHAtZXF1aXZcIl0gIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFBdXRob3JzaGlwICYmIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwiYXV0aG9yXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcImdlbmVyYXRvclwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJmcmFtZXdvcmtcIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwicHVibGlzaGVyXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcInByb2dpZFwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5wcm9wZXJ0eSkubWF0Y2goL15hcnRpY2xlOi8pIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5wcm9wZXJ0eSkubWF0Y2goL15wcm9kdWN0Oi8pKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFWZXJpZmljYXRpb24gJiYgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwieWFuZGV4LXZlcmlmaWNhdGlvblwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJjc3JmLXRva2VuXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcInA6ZG9tYWluX3ZlcmlmeVwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJ2ZXJpZnktdjFcIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwidmVyaWZpY2F0aW9uXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcInNob3BpZnktY2hlY2tvdXQtYXBpLXRva2VuXCIpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBzZXJpYWxpemVOb2RlV2l0aElkKG4sIG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGRvYyxcbiAgICBtaXJyb3IsXG4gICAgYmxvY2tDbGFzcyxcbiAgICBibG9ja1NlbGVjdG9yLFxuICAgIG1hc2tUZXh0Q2xhc3MsXG4gICAgbWFza1RleHRTZWxlY3RvcixcbiAgICBza2lwQ2hpbGQgPSBmYWxzZSxcbiAgICBpbmxpbmVTdHlsZXNoZWV0ID0gdHJ1ZSxcbiAgICBtYXNrSW5wdXRPcHRpb25zID0ge30sXG4gICAgbWFza1RleHRGbixcbiAgICBtYXNrSW5wdXRGbixcbiAgICBzbGltRE9NT3B0aW9ucyxcbiAgICBkYXRhVVJMT3B0aW9ucyA9IHt9LFxuICAgIGlubGluZUltYWdlcyA9IGZhbHNlLFxuICAgIHJlY29yZENhbnZhcyA9IGZhbHNlLFxuICAgIG9uU2VyaWFsaXplLFxuICAgIG9uSWZyYW1lTG9hZCxcbiAgICBpZnJhbWVMb2FkVGltZW91dCA9IDVlMyxcbiAgICBvblN0eWxlc2hlZXRMb2FkLFxuICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dCA9IDVlMyxcbiAgICBrZWVwSWZyYW1lU3JjRm4gPSAoKSA9PiBmYWxzZSxcbiAgICBuZXdseUFkZGVkRWxlbWVudCA9IGZhbHNlLFxuICAgIGNzc0NhcHR1cmVkID0gZmFsc2VcbiAgfSA9IG9wdGlvbnM7XG4gIGxldCB7IG5lZWRzTWFzayB9ID0gb3B0aW9ucztcbiAgbGV0IHsgcHJlc2VydmVXaGl0ZVNwYWNlID0gdHJ1ZSB9ID0gb3B0aW9ucztcbiAgaWYgKCFuZWVkc01hc2spIHtcbiAgICBjb25zdCBjaGVja0FuY2VzdG9ycyA9IG5lZWRzTWFzayA9PT0gdm9pZCAwO1xuICAgIG5lZWRzTWFzayA9IG5lZWRNYXNraW5nVGV4dChcbiAgICAgIG4sXG4gICAgICBtYXNrVGV4dENsYXNzLFxuICAgICAgbWFza1RleHRTZWxlY3RvcixcbiAgICAgIGNoZWNrQW5jZXN0b3JzXG4gICAgKTtcbiAgfVxuICBjb25zdCBfc2VyaWFsaXplZE5vZGUgPSBzZXJpYWxpemVOb2RlKG4sIHtcbiAgICBkb2MsXG4gICAgbWlycm9yLFxuICAgIGJsb2NrQ2xhc3MsXG4gICAgYmxvY2tTZWxlY3RvcixcbiAgICBuZWVkc01hc2ssXG4gICAgaW5saW5lU3R5bGVzaGVldCxcbiAgICBtYXNrSW5wdXRPcHRpb25zLFxuICAgIG1hc2tUZXh0Rm4sXG4gICAgbWFza0lucHV0Rm4sXG4gICAgZGF0YVVSTE9wdGlvbnMsXG4gICAgaW5saW5lSW1hZ2VzLFxuICAgIHJlY29yZENhbnZhcyxcbiAgICBrZWVwSWZyYW1lU3JjRm4sXG4gICAgbmV3bHlBZGRlZEVsZW1lbnQsXG4gICAgY3NzQ2FwdHVyZWRcbiAgfSk7XG4gIGlmICghX3NlcmlhbGl6ZWROb2RlKSB7XG4gICAgY29uc29sZS53YXJuKG4sIFwibm90IHNlcmlhbGl6ZWRcIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgbGV0IGlkO1xuICBpZiAobWlycm9yLmhhc05vZGUobikpIHtcbiAgICBpZCA9IG1pcnJvci5nZXRJZChuKTtcbiAgfSBlbHNlIGlmIChzbGltRE9NRXhjbHVkZWQoX3NlcmlhbGl6ZWROb2RlLCBzbGltRE9NT3B0aW9ucykgfHwgIXByZXNlcnZlV2hpdGVTcGFjZSAmJiBfc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuVGV4dCAmJiAhX3NlcmlhbGl6ZWROb2RlLnRleHRDb250ZW50LnJlcGxhY2UoL15cXHMrfFxccyskL2dtLCBcIlwiKS5sZW5ndGgpIHtcbiAgICBpZCA9IElHTk9SRURfTk9ERTtcbiAgfSBlbHNlIHtcbiAgICBpZCA9IGdlbklkKCk7XG4gIH1cbiAgY29uc3Qgc2VyaWFsaXplZE5vZGUgPSBPYmplY3QuYXNzaWduKF9zZXJpYWxpemVkTm9kZSwgeyBpZCB9KTtcbiAgbWlycm9yLmFkZChuLCBzZXJpYWxpemVkTm9kZSk7XG4gIGlmIChpZCA9PT0gSUdOT1JFRF9OT0RFKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKG9uU2VyaWFsaXplKSB7XG4gICAgb25TZXJpYWxpemUobik7XG4gIH1cbiAgbGV0IHJlY29yZENoaWxkID0gIXNraXBDaGlsZDtcbiAgaWYgKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpIHtcbiAgICByZWNvcmRDaGlsZCA9IHJlY29yZENoaWxkICYmICFzZXJpYWxpemVkTm9kZS5uZWVkQmxvY2s7XG4gICAgZGVsZXRlIHNlcmlhbGl6ZWROb2RlLm5lZWRCbG9jaztcbiAgICBjb25zdCBzaGFkb3dSb290RWwgPSBpbmRleC5zaGFkb3dSb290KG4pO1xuICAgIGlmIChzaGFkb3dSb290RWwgJiYgaXNOYXRpdmVTaGFkb3dEb20oc2hhZG93Um9vdEVsKSkge1xuICAgICAgc2VyaWFsaXplZE5vZGUuaXNTaGFkb3dIb3N0ID0gdHJ1ZTtcbiAgICAgIGlmIChzaGFkb3dSb290RWwuYWRvcHRlZFN0eWxlU2hlZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2VyaWFsaXplZE5vZGUuY2hyb21hdGljQWRvcHRlZFN0eWxlc2hlZXRzID0gc2hhZG93Um9vdEVsLmFkb3B0ZWRTdHlsZVNoZWV0cy5tYXAoXG4gICAgICAgICAgKHN0eWxlc2hlZXQpID0+IHN0cmluZ2lmeVN0eWxlc2hlZXQoc3R5bGVzaGVldClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCB8fCBzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSAmJiByZWNvcmRDaGlsZCkge1xuICAgIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkV2hpdGVzcGFjZSAmJiBzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50ICYmIHNlcmlhbGl6ZWROb2RlLnRhZ05hbWUgPT09IFwiaGVhZFwiKSB7XG4gICAgICBwcmVzZXJ2ZVdoaXRlU3BhY2UgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgYnlwYXNzT3B0aW9ucyA9IHtcbiAgICAgIGRvYyxcbiAgICAgIG1pcnJvcixcbiAgICAgIGJsb2NrQ2xhc3MsXG4gICAgICBibG9ja1NlbGVjdG9yLFxuICAgICAgbmVlZHNNYXNrLFxuICAgICAgbWFza1RleHRDbGFzcyxcbiAgICAgIG1hc2tUZXh0U2VsZWN0b3IsXG4gICAgICBza2lwQ2hpbGQsXG4gICAgICBpbmxpbmVTdHlsZXNoZWV0LFxuICAgICAgbWFza0lucHV0T3B0aW9ucyxcbiAgICAgIG1hc2tUZXh0Rm4sXG4gICAgICBtYXNrSW5wdXRGbixcbiAgICAgIHNsaW1ET01PcHRpb25zLFxuICAgICAgZGF0YVVSTE9wdGlvbnMsXG4gICAgICBpbmxpbmVJbWFnZXMsXG4gICAgICByZWNvcmRDYW52YXMsXG4gICAgICBwcmVzZXJ2ZVdoaXRlU3BhY2UsXG4gICAgICBvblNlcmlhbGl6ZSxcbiAgICAgIG9uSWZyYW1lTG9hZCxcbiAgICAgIGlmcmFtZUxvYWRUaW1lb3V0LFxuICAgICAgb25TdHlsZXNoZWV0TG9hZCxcbiAgICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dCxcbiAgICAgIGtlZXBJZnJhbWVTcmNGbixcbiAgICAgIGNzc0NhcHR1cmVkOiBmYWxzZVxuICAgIH07XG4gICAgaWYgKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiYgc2VyaWFsaXplZE5vZGUudGFnTmFtZSA9PT0gXCJ0ZXh0YXJlYVwiICYmIHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMudmFsdWUgIT09IHZvaWQgMCkgO1xuICAgIGVsc2Uge1xuICAgICAgaWYgKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiYgc2VyaWFsaXplZE5vZGUuYXR0cmlidXRlcy5fY3NzVGV4dCAhPT0gdm9pZCAwICYmIHR5cGVvZiBzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLl9jc3NUZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGJ5cGFzc09wdGlvbnMuY3NzQ2FwdHVyZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBjaGlsZE4gb2YgQXJyYXkuZnJvbShpbmRleC5jaGlsZE5vZGVzKG4pKSkge1xuICAgICAgICBjb25zdCBzZXJpYWxpemVkQ2hpbGROb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChjaGlsZE4sIGJ5cGFzc09wdGlvbnMpO1xuICAgICAgICBpZiAoc2VyaWFsaXplZENoaWxkTm9kZSkge1xuICAgICAgICAgIHNlcmlhbGl6ZWROb2RlLmNoaWxkTm9kZXMucHVzaChzZXJpYWxpemVkQ2hpbGROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc2hhZG93Um9vdEVsID0gbnVsbDtcbiAgICBpZiAoaXNFbGVtZW50KG4pICYmIChzaGFkb3dSb290RWwgPSBpbmRleC5zaGFkb3dSb290KG4pKSkge1xuICAgICAgZm9yIChjb25zdCBjaGlsZE4gb2YgQXJyYXkuZnJvbShpbmRleC5jaGlsZE5vZGVzKHNoYWRvd1Jvb3RFbCkpKSB7XG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRDaGlsZE5vZGUgPSBzZXJpYWxpemVOb2RlV2l0aElkKGNoaWxkTiwgYnlwYXNzT3B0aW9ucyk7XG4gICAgICAgIGlmIChzZXJpYWxpemVkQ2hpbGROb2RlKSB7XG4gICAgICAgICAgaXNOYXRpdmVTaGFkb3dEb20oc2hhZG93Um9vdEVsKSAmJiAoc2VyaWFsaXplZENoaWxkTm9kZS5pc1NoYWRvdyA9IHRydWUpO1xuICAgICAgICAgIHNlcmlhbGl6ZWROb2RlLmNoaWxkTm9kZXMucHVzaChzZXJpYWxpemVkQ2hpbGROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBwYXJlbnQgPSBpbmRleC5wYXJlbnROb2RlKG4pO1xuICBpZiAocGFyZW50ICYmIGlzU2hhZG93Um9vdChwYXJlbnQpICYmIGlzTmF0aXZlU2hhZG93RG9tKHBhcmVudCkpIHtcbiAgICBzZXJpYWxpemVkTm9kZS5pc1NoYWRvdyA9IHRydWU7XG4gIH1cbiAgaWYgKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiYgc2VyaWFsaXplZE5vZGUudGFnTmFtZSA9PT0gXCJpZnJhbWVcIikge1xuICAgIG9uY2VJZnJhbWVMb2FkZWQoXG4gICAgICBuLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBpZnJhbWVEb2MgPSBuLmNvbnRlbnREb2N1bWVudDtcbiAgICAgICAgaWYgKGlmcmFtZURvYyAmJiBvbklmcmFtZUxvYWQpIHtcbiAgICAgICAgICBjb25zdCBzZXJpYWxpemVkSWZyYW1lTm9kZSA9IHNlcmlhbGl6ZU5vZGVXaXRoSWQoaWZyYW1lRG9jLCB7XG4gICAgICAgICAgICBkb2M6IGlmcmFtZURvYyxcbiAgICAgICAgICAgIG1pcnJvcixcbiAgICAgICAgICAgIGJsb2NrQ2xhc3MsXG4gICAgICAgICAgICBibG9ja1NlbGVjdG9yLFxuICAgICAgICAgICAgbmVlZHNNYXNrLFxuICAgICAgICAgICAgbWFza1RleHRDbGFzcyxcbiAgICAgICAgICAgIG1hc2tUZXh0U2VsZWN0b3IsXG4gICAgICAgICAgICBza2lwQ2hpbGQ6IGZhbHNlLFxuICAgICAgICAgICAgaW5saW5lU3R5bGVzaGVldCxcbiAgICAgICAgICAgIG1hc2tJbnB1dE9wdGlvbnMsXG4gICAgICAgICAgICBtYXNrVGV4dEZuLFxuICAgICAgICAgICAgbWFza0lucHV0Rm4sXG4gICAgICAgICAgICBzbGltRE9NT3B0aW9ucyxcbiAgICAgICAgICAgIGRhdGFVUkxPcHRpb25zLFxuICAgICAgICAgICAgaW5saW5lSW1hZ2VzLFxuICAgICAgICAgICAgcmVjb3JkQ2FudmFzLFxuICAgICAgICAgICAgcHJlc2VydmVXaGl0ZVNwYWNlLFxuICAgICAgICAgICAgb25TZXJpYWxpemUsXG4gICAgICAgICAgICBvbklmcmFtZUxvYWQsXG4gICAgICAgICAgICBpZnJhbWVMb2FkVGltZW91dCxcbiAgICAgICAgICAgIG9uU3R5bGVzaGVldExvYWQsXG4gICAgICAgICAgICBzdHlsZXNoZWV0TG9hZFRpbWVvdXQsXG4gICAgICAgICAgICBrZWVwSWZyYW1lU3JjRm5cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoc2VyaWFsaXplZElmcmFtZU5vZGUpIHtcbiAgICAgICAgICAgIG9uSWZyYW1lTG9hZChcbiAgICAgICAgICAgICAgbixcbiAgICAgICAgICAgICAgc2VyaWFsaXplZElmcmFtZU5vZGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaWZyYW1lTG9hZFRpbWVvdXRcbiAgICApO1xuICB9XG4gIGlmIChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50ICYmIHNlcmlhbGl6ZWROb2RlLnRhZ05hbWUgPT09IFwibGlua1wiICYmIHR5cGVvZiBzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLnJlbCA9PT0gXCJzdHJpbmdcIiAmJiAoc2VyaWFsaXplZE5vZGUuYXR0cmlidXRlcy5yZWwgPT09IFwic3R5bGVzaGVldFwiIHx8IHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMucmVsID09PSBcInByZWxvYWRcIiAmJiB0eXBlb2Ygc2VyaWFsaXplZE5vZGUuYXR0cmlidXRlcy5ocmVmID09PSBcInN0cmluZ1wiICYmIGV4dHJhY3RGaWxlRXh0ZW5zaW9uKHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMuaHJlZikgPT09IFwiY3NzXCIpKSB7XG4gICAgb25jZVN0eWxlc2hlZXRMb2FkZWQoXG4gICAgICBuLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAob25TdHlsZXNoZWV0TG9hZCkge1xuICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRMaW5rTm9kZSA9IHNlcmlhbGl6ZU5vZGVXaXRoSWQobiwge1xuICAgICAgICAgICAgZG9jLFxuICAgICAgICAgICAgbWlycm9yLFxuICAgICAgICAgICAgYmxvY2tDbGFzcyxcbiAgICAgICAgICAgIGJsb2NrU2VsZWN0b3IsXG4gICAgICAgICAgICBuZWVkc01hc2ssXG4gICAgICAgICAgICBtYXNrVGV4dENsYXNzLFxuICAgICAgICAgICAgbWFza1RleHRTZWxlY3RvcixcbiAgICAgICAgICAgIHNraXBDaGlsZDogZmFsc2UsXG4gICAgICAgICAgICBpbmxpbmVTdHlsZXNoZWV0LFxuICAgICAgICAgICAgbWFza0lucHV0T3B0aW9ucyxcbiAgICAgICAgICAgIG1hc2tUZXh0Rm4sXG4gICAgICAgICAgICBtYXNrSW5wdXRGbixcbiAgICAgICAgICAgIHNsaW1ET01PcHRpb25zLFxuICAgICAgICAgICAgZGF0YVVSTE9wdGlvbnMsXG4gICAgICAgICAgICBpbmxpbmVJbWFnZXMsXG4gICAgICAgICAgICByZWNvcmRDYW52YXMsXG4gICAgICAgICAgICBwcmVzZXJ2ZVdoaXRlU3BhY2UsXG4gICAgICAgICAgICBvblNlcmlhbGl6ZSxcbiAgICAgICAgICAgIG9uSWZyYW1lTG9hZCxcbiAgICAgICAgICAgIGlmcmFtZUxvYWRUaW1lb3V0LFxuICAgICAgICAgICAgb25TdHlsZXNoZWV0TG9hZCxcbiAgICAgICAgICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dCxcbiAgICAgICAgICAgIGtlZXBJZnJhbWVTcmNGblxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChzZXJpYWxpemVkTGlua05vZGUpIHtcbiAgICAgICAgICAgIG9uU3R5bGVzaGVldExvYWQoXG4gICAgICAgICAgICAgIG4sXG4gICAgICAgICAgICAgIHNlcmlhbGl6ZWRMaW5rTm9kZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdHlsZXNoZWV0TG9hZFRpbWVvdXRcbiAgICApO1xuICB9XG4gIHJldHVybiBzZXJpYWxpemVkTm9kZTtcbn1cbmZ1bmN0aW9uIHNuYXBzaG90KG4sIG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIG1pcnJvciA9IG5ldyBNaXJyb3IoKSxcbiAgICBibG9ja0NsYXNzID0gXCJyci1ibG9ja1wiLFxuICAgIGJsb2NrU2VsZWN0b3IgPSBudWxsLFxuICAgIG1hc2tUZXh0Q2xhc3MgPSBcInJyLW1hc2tcIixcbiAgICBtYXNrVGV4dFNlbGVjdG9yID0gbnVsbCxcbiAgICBpbmxpbmVTdHlsZXNoZWV0ID0gdHJ1ZSxcbiAgICBpbmxpbmVJbWFnZXMgPSBmYWxzZSxcbiAgICByZWNvcmRDYW52YXMgPSBmYWxzZSxcbiAgICBtYXNrQWxsSW5wdXRzID0gZmFsc2UsXG4gICAgbWFza1RleHRGbixcbiAgICBtYXNrSW5wdXRGbixcbiAgICBzbGltRE9NID0gZmFsc2UsXG4gICAgZGF0YVVSTE9wdGlvbnMsXG4gICAgcHJlc2VydmVXaGl0ZVNwYWNlLFxuICAgIG9uU2VyaWFsaXplLFxuICAgIG9uSWZyYW1lTG9hZCxcbiAgICBpZnJhbWVMb2FkVGltZW91dCxcbiAgICBvblN0eWxlc2hlZXRMb2FkLFxuICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dCxcbiAgICBrZWVwSWZyYW1lU3JjRm4gPSAoKSA9PiBmYWxzZVxuICB9ID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3QgbWFza0lucHV0T3B0aW9ucyA9IG1hc2tBbGxJbnB1dHMgPT09IHRydWUgPyB7XG4gICAgY29sb3I6IHRydWUsXG4gICAgZGF0ZTogdHJ1ZSxcbiAgICBcImRhdGV0aW1lLWxvY2FsXCI6IHRydWUsXG4gICAgZW1haWw6IHRydWUsXG4gICAgbW9udGg6IHRydWUsXG4gICAgbnVtYmVyOiB0cnVlLFxuICAgIHJhbmdlOiB0cnVlLFxuICAgIHNlYXJjaDogdHJ1ZSxcbiAgICB0ZWw6IHRydWUsXG4gICAgdGV4dDogdHJ1ZSxcbiAgICB0aW1lOiB0cnVlLFxuICAgIHVybDogdHJ1ZSxcbiAgICB3ZWVrOiB0cnVlLFxuICAgIHRleHRhcmVhOiB0cnVlLFxuICAgIHNlbGVjdDogdHJ1ZSxcbiAgICBwYXNzd29yZDogdHJ1ZVxuICB9IDogbWFza0FsbElucHV0cyA9PT0gZmFsc2UgPyB7XG4gICAgcGFzc3dvcmQ6IHRydWVcbiAgfSA6IG1hc2tBbGxJbnB1dHM7XG4gIGNvbnN0IHNsaW1ET01PcHRpb25zID0gc2xpbURPTSA9PT0gdHJ1ZSB8fCBzbGltRE9NID09PSBcImFsbFwiID8gKFxuICAgIC8vIGlmIHRydWU6IHNldCBvZiBzZW5zaWJsZSBvcHRpb25zIHRoYXQgc2hvdWxkIG5vdCB0aHJvdyBhd2F5IGFueSBpbmZvcm1hdGlvblxuICAgIHtcbiAgICAgIHNjcmlwdDogdHJ1ZSxcbiAgICAgIGNvbW1lbnQ6IHRydWUsXG4gICAgICBoZWFkRmF2aWNvbjogdHJ1ZSxcbiAgICAgIGhlYWRXaGl0ZXNwYWNlOiB0cnVlLFxuICAgICAgaGVhZE1ldGFEZXNjS2V5d29yZHM6IHNsaW1ET00gPT09IFwiYWxsXCIsXG4gICAgICAvLyBkZXN0cnVjdGl2ZVxuICAgICAgaGVhZE1ldGFTb2NpYWw6IHRydWUsXG4gICAgICBoZWFkTWV0YVJvYm90czogdHJ1ZSxcbiAgICAgIGhlYWRNZXRhSHR0cEVxdWl2OiB0cnVlLFxuICAgICAgaGVhZE1ldGFBdXRob3JzaGlwOiB0cnVlLFxuICAgICAgaGVhZE1ldGFWZXJpZmljYXRpb246IHRydWVcbiAgICB9XG4gICkgOiBzbGltRE9NID09PSBmYWxzZSA/IHt9IDogc2xpbURPTTtcbiAgcmV0dXJuIHNlcmlhbGl6ZU5vZGVXaXRoSWQobiwge1xuICAgIGRvYzogbixcbiAgICBtaXJyb3IsXG4gICAgYmxvY2tDbGFzcyxcbiAgICBibG9ja1NlbGVjdG9yLFxuICAgIG1hc2tUZXh0Q2xhc3MsXG4gICAgbWFza1RleHRTZWxlY3RvcixcbiAgICBza2lwQ2hpbGQ6IGZhbHNlLFxuICAgIGlubGluZVN0eWxlc2hlZXQsXG4gICAgbWFza0lucHV0T3B0aW9ucyxcbiAgICBtYXNrVGV4dEZuLFxuICAgIG1hc2tJbnB1dEZuLFxuICAgIHNsaW1ET01PcHRpb25zLFxuICAgIGRhdGFVUkxPcHRpb25zLFxuICAgIGlubGluZUltYWdlcyxcbiAgICByZWNvcmRDYW52YXMsXG4gICAgcHJlc2VydmVXaGl0ZVNwYWNlLFxuICAgIG9uU2VyaWFsaXplLFxuICAgIG9uSWZyYW1lTG9hZCxcbiAgICBpZnJhbWVMb2FkVGltZW91dCxcbiAgICBvblN0eWxlc2hlZXRMb2FkLFxuICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dCxcbiAgICBrZWVwSWZyYW1lU3JjRm4sXG4gICAgbmV3bHlBZGRlZEVsZW1lbnQ6IGZhbHNlXG4gIH0pO1xufVxuZnVuY3Rpb24gdmlzaXRTbmFwc2hvdChub2RlMiwgb25WaXNpdCkge1xuICBmdW5jdGlvbiB3YWxrKGN1cnJlbnQpIHtcbiAgICBvblZpc2l0KGN1cnJlbnQpO1xuICAgIGlmIChjdXJyZW50LnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50IHx8IGN1cnJlbnQudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCkge1xuICAgICAgY3VycmVudC5jaGlsZE5vZGVzLmZvckVhY2god2Fsayk7XG4gICAgfVxuICB9XG4gIHdhbGsobm9kZTIpO1xufVxuZnVuY3Rpb24gY2xlYW51cFNuYXBzaG90KCkge1xuICBfaWQgPSAxO1xufVxuY29uc3QgTUVESUFfU0VMRUNUT1IgPSAvKG1heHxtaW4pLWRldmljZS0od2lkdGh8aGVpZ2h0KS87XG5jb25zdCBNRURJQV9TRUxFQ1RPUl9HTE9CQUwgPSBuZXcgUmVnRXhwKE1FRElBX1NFTEVDVE9SLnNvdXJjZSwgXCJnXCIpO1xuY29uc3QgbWVkaWFTZWxlY3RvclBsdWdpbiA9IHtcbiAgcG9zdGNzc1BsdWdpbjogXCJwb3N0Y3NzLWN1c3RvbS1zZWxlY3RvcnNcIixcbiAgcHJlcGFyZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zdGNzc1BsdWdpbjogXCJwb3N0Y3NzLWN1c3RvbS1zZWxlY3RvcnNcIixcbiAgICAgIEF0UnVsZTogZnVuY3Rpb24oYXRydWxlKSB7XG4gICAgICAgIGlmIChhdHJ1bGUucGFyYW1zLm1hdGNoKE1FRElBX1NFTEVDVE9SX0dMT0JBTCkpIHtcbiAgICAgICAgICBhdHJ1bGUucGFyYW1zID0gYXRydWxlLnBhcmFtcy5yZXBsYWNlKE1FRElBX1NFTEVDVE9SX0dMT0JBTCwgXCIkMS0kMlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5jb25zdCBwc2V1ZG9DbGFzc1BsdWdpbiA9IHtcbiAgcG9zdGNzc1BsdWdpbjogXCJwb3N0Y3NzLWhvdmVyLWNsYXNzZXNcIixcbiAgcHJlcGFyZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZml4ZWQgPSBbXTtcbiAgICByZXR1cm4ge1xuICAgICAgUnVsZTogZnVuY3Rpb24ocnVsZTIpIHtcbiAgICAgICAgaWYgKGZpeGVkLmluZGV4T2YocnVsZTIpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmaXhlZC5wdXNoKHJ1bGUyKTtcbiAgICAgICAgcnVsZTIuc2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICAgICAgICBpZiAoc2VsZWN0b3IuaW5jbHVkZXMoXCI6aG92ZXJcIikpIHtcbiAgICAgICAgICAgIHJ1bGUyLnNlbGVjdG9yICs9IFwiLFxcblwiICsgc2VsZWN0b3IucmVwbGFjZSgvOmhvdmVyL2csIFwiLlxcXFw6aG92ZXJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuZnVuY3Rpb24gZ2V0RGVmYXVsdEV4cG9ydEZyb21DanMoeDIpIHtcbiAgcmV0dXJuIHgyICYmIHgyLl9fZXNNb2R1bGUgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHgyLCBcImRlZmF1bHRcIikgPyB4MltcImRlZmF1bHRcIl0gOiB4Mjtcbn1cbmZ1bmN0aW9uIGdldEF1Z21lbnRlZE5hbWVzcGFjZShuKSB7XG4gIGlmIChuLl9fZXNNb2R1bGUpIHJldHVybiBuO1xuICB2YXIgZiA9IG4uZGVmYXVsdDtcbiAgaWYgKHR5cGVvZiBmID09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBhID0gZnVuY3Rpb24gYTIoKSB7XG4gICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIGEyKSB7XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmNvbnN0cnVjdChmLCBhcmd1bWVudHMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIGEucHJvdG90eXBlID0gZi5wcm90b3R5cGU7XG4gIH0gZWxzZSBhID0ge307XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgT2JqZWN0LmtleXMobikuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgdmFyIGQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG4sIGspO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBrLCBkLmdldCA/IGQgOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ba107XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cbnZhciBwaWNvY29sb3JzX2Jyb3dzZXIgPSB7IGV4cG9ydHM6IHt9IH07XG52YXIgeCA9IFN0cmluZztcbnZhciBjcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHsgaXNDb2xvclN1cHBvcnRlZDogZmFsc2UsIHJlc2V0OiB4LCBib2xkOiB4LCBkaW06IHgsIGl0YWxpYzogeCwgdW5kZXJsaW5lOiB4LCBpbnZlcnNlOiB4LCBoaWRkZW46IHgsIHN0cmlrZXRocm91Z2g6IHgsIGJsYWNrOiB4LCByZWQ6IHgsIGdyZWVuOiB4LCB5ZWxsb3c6IHgsIGJsdWU6IHgsIG1hZ2VudGE6IHgsIGN5YW46IHgsIHdoaXRlOiB4LCBncmF5OiB4LCBiZ0JsYWNrOiB4LCBiZ1JlZDogeCwgYmdHcmVlbjogeCwgYmdZZWxsb3c6IHgsIGJnQmx1ZTogeCwgYmdNYWdlbnRhOiB4LCBiZ0N5YW46IHgsIGJnV2hpdGU6IHggfTtcbn07XG5waWNvY29sb3JzX2Jyb3dzZXIuZXhwb3J0cyA9IGNyZWF0ZSgpO1xucGljb2NvbG9yc19icm93c2VyLmV4cG9ydHMuY3JlYXRlQ29sb3JzID0gY3JlYXRlO1xudmFyIHBpY29jb2xvcnNfYnJvd3NlckV4cG9ydHMgPSBwaWNvY29sb3JzX2Jyb3dzZXIuZXhwb3J0cztcbmNvbnN0IF9fdml0ZUJyb3dzZXJFeHRlcm5hbCA9IHt9O1xuY29uc3QgX192aXRlQnJvd3NlckV4dGVybmFsJDEgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBfX3ZpdGVCcm93c2VyRXh0ZXJuYWxcbn0sIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KSk7XG5jb25zdCByZXF1aXJlJCQyID0gLyogQF9fUFVSRV9fICovIGdldEF1Z21lbnRlZE5hbWVzcGFjZShfX3ZpdGVCcm93c2VyRXh0ZXJuYWwkMSk7XG5sZXQgcGljbyA9IHBpY29jb2xvcnNfYnJvd3NlckV4cG9ydHM7XG5sZXQgdGVybWluYWxIaWdobGlnaHQkMSA9IHJlcXVpcmUkJDI7XG5sZXQgQ3NzU3ludGF4RXJyb3IkMyA9IGNsYXNzIENzc1N5bnRheEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBsaW5lLCBjb2x1bW4sIHNvdXJjZSwgZmlsZSwgcGx1Z2luMikge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9IFwiQ3NzU3ludGF4RXJyb3JcIjtcbiAgICB0aGlzLnJlYXNvbiA9IG1lc3NhZ2U7XG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgfVxuICAgIGlmIChzb3VyY2UpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIH1cbiAgICBpZiAocGx1Z2luMikge1xuICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW4yO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGxpbmUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGNvbHVtbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaWYgKHR5cGVvZiBsaW5lID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZS5saW5lO1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGxpbmUuY29sdW1uO1xuICAgICAgICB0aGlzLmVuZExpbmUgPSBjb2x1bW4ubGluZTtcbiAgICAgICAgdGhpcy5lbmRDb2x1bW4gPSBjb2x1bW4uY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldE1lc3NhZ2UoKTtcbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIENzc1N5bnRheEVycm9yKTtcbiAgICB9XG4gIH1cbiAgc2V0TWVzc2FnZSgpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLnBsdWdpbiA/IHRoaXMucGx1Z2luICsgXCI6IFwiIDogXCJcIjtcbiAgICB0aGlzLm1lc3NhZ2UgKz0gdGhpcy5maWxlID8gdGhpcy5maWxlIDogXCI8Y3NzIGlucHV0PlwiO1xuICAgIGlmICh0eXBlb2YgdGhpcy5saW5lICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgKz0gXCI6XCIgKyB0aGlzLmxpbmUgKyBcIjpcIiArIHRoaXMuY29sdW1uO1xuICAgIH1cbiAgICB0aGlzLm1lc3NhZ2UgKz0gXCI6IFwiICsgdGhpcy5yZWFzb247XG4gIH1cbiAgc2hvd1NvdXJjZUNvZGUoY29sb3IpIHtcbiAgICBpZiAoIXRoaXMuc291cmNlKSByZXR1cm4gXCJcIjtcbiAgICBsZXQgY3NzID0gdGhpcy5zb3VyY2U7XG4gICAgaWYgKGNvbG9yID09IG51bGwpIGNvbG9yID0gcGljby5pc0NvbG9yU3VwcG9ydGVkO1xuICAgIGlmICh0ZXJtaW5hbEhpZ2hsaWdodCQxKSB7XG4gICAgICBpZiAoY29sb3IpIGNzcyA9IHRlcm1pbmFsSGlnaGxpZ2h0JDEoY3NzKTtcbiAgICB9XG4gICAgbGV0IGxpbmVzID0gY3NzLnNwbGl0KC9cXHI/XFxuLyk7XG4gICAgbGV0IHN0YXJ0ID0gTWF0aC5tYXgodGhpcy5saW5lIC0gMywgMCk7XG4gICAgbGV0IGVuZCA9IE1hdGgubWluKHRoaXMubGluZSArIDIsIGxpbmVzLmxlbmd0aCk7XG4gICAgbGV0IG1heFdpZHRoID0gU3RyaW5nKGVuZCkubGVuZ3RoO1xuICAgIGxldCBtYXJrLCBhc2lkZTtcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIGxldCB7IGJvbGQsIGdyYXksIHJlZCB9ID0gcGljby5jcmVhdGVDb2xvcnModHJ1ZSk7XG4gICAgICBtYXJrID0gKHRleHQpID0+IGJvbGQocmVkKHRleHQpKTtcbiAgICAgIGFzaWRlID0gKHRleHQpID0+IGdyYXkodGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcmsgPSBhc2lkZSA9IChzdHIpID0+IHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcCgobGluZSwgaW5kZXgyKSA9PiB7XG4gICAgICBsZXQgbnVtYmVyID0gc3RhcnQgKyAxICsgaW5kZXgyO1xuICAgICAgbGV0IGd1dHRlciA9IFwiIFwiICsgKFwiIFwiICsgbnVtYmVyKS5zbGljZSgtbWF4V2lkdGgpICsgXCIgfCBcIjtcbiAgICAgIGlmIChudW1iZXIgPT09IHRoaXMubGluZSkge1xuICAgICAgICBsZXQgc3BhY2luZyA9IGFzaWRlKGd1dHRlci5yZXBsYWNlKC9cXGQvZywgXCIgXCIpKSArIGxpbmUuc2xpY2UoMCwgdGhpcy5jb2x1bW4gLSAxKS5yZXBsYWNlKC9bXlxcdF0vZywgXCIgXCIpO1xuICAgICAgICByZXR1cm4gbWFyayhcIj5cIikgKyBhc2lkZShndXR0ZXIpICsgbGluZSArIFwiXFxuIFwiICsgc3BhY2luZyArIG1hcmsoXCJeXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiIFwiICsgYXNpZGUoZ3V0dGVyKSArIGxpbmU7XG4gICAgfSkuam9pbihcIlxcblwiKTtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICBsZXQgY29kZSA9IHRoaXMuc2hvd1NvdXJjZUNvZGUoKTtcbiAgICBpZiAoY29kZSkge1xuICAgICAgY29kZSA9IFwiXFxuXFxuXCIgKyBjb2RlICsgXCJcXG5cIjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubmFtZSArIFwiOiBcIiArIHRoaXMubWVzc2FnZSArIGNvZGU7XG4gIH1cbn07XG52YXIgY3NzU3ludGF4RXJyb3IgPSBDc3NTeW50YXhFcnJvciQzO1xuQ3NzU3ludGF4RXJyb3IkMy5kZWZhdWx0ID0gQ3NzU3ludGF4RXJyb3IkMztcbnZhciBzeW1ib2xzID0ge307XG5zeW1ib2xzLmlzQ2xlYW4gPSBTeW1ib2woXCJpc0NsZWFuXCIpO1xuc3ltYm9scy5teSA9IFN5bWJvbChcIm15XCIpO1xuY29uc3QgREVGQVVMVF9SQVcgPSB7XG4gIGFmdGVyOiBcIlxcblwiLFxuICBiZWZvcmVDbG9zZTogXCJcXG5cIixcbiAgYmVmb3JlQ29tbWVudDogXCJcXG5cIixcbiAgYmVmb3JlRGVjbDogXCJcXG5cIixcbiAgYmVmb3JlT3BlbjogXCIgXCIsXG4gIGJlZm9yZVJ1bGU6IFwiXFxuXCIsXG4gIGNvbG9uOiBcIjogXCIsXG4gIGNvbW1lbnRMZWZ0OiBcIiBcIixcbiAgY29tbWVudFJpZ2h0OiBcIiBcIixcbiAgZW1wdHlCb2R5OiBcIlwiLFxuICBpbmRlbnQ6IFwiICAgIFwiLFxuICBzZW1pY29sb246IGZhbHNlXG59O1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxubGV0IFN0cmluZ2lmaWVyJDIgPSBjbGFzcyBTdHJpbmdpZmllciB7XG4gIGNvbnN0cnVjdG9yKGJ1aWxkZXIpIHtcbiAgICB0aGlzLmJ1aWxkZXIgPSBidWlsZGVyO1xuICB9XG4gIGF0cnVsZShub2RlMiwgc2VtaWNvbG9uKSB7XG4gICAgbGV0IG5hbWUgPSBcIkBcIiArIG5vZGUyLm5hbWU7XG4gICAgbGV0IHBhcmFtcyA9IG5vZGUyLnBhcmFtcyA/IHRoaXMucmF3VmFsdWUobm9kZTIsIFwicGFyYW1zXCIpIDogXCJcIjtcbiAgICBpZiAodHlwZW9mIG5vZGUyLnJhd3MuYWZ0ZXJOYW1lICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBuYW1lICs9IG5vZGUyLnJhd3MuYWZ0ZXJOYW1lO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zKSB7XG4gICAgICBuYW1lICs9IFwiIFwiO1xuICAgIH1cbiAgICBpZiAobm9kZTIubm9kZXMpIHtcbiAgICAgIHRoaXMuYmxvY2sobm9kZTIsIG5hbWUgKyBwYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZW5kID0gKG5vZGUyLnJhd3MuYmV0d2VlbiB8fCBcIlwiKSArIChzZW1pY29sb24gPyBcIjtcIiA6IFwiXCIpO1xuICAgICAgdGhpcy5idWlsZGVyKG5hbWUgKyBwYXJhbXMgKyBlbmQsIG5vZGUyKTtcbiAgICB9XG4gIH1cbiAgYmVmb3JlQWZ0ZXIobm9kZTIsIGRldGVjdCkge1xuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAobm9kZTIudHlwZSA9PT0gXCJkZWNsXCIpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5yYXcobm9kZTIsIG51bGwsIFwiYmVmb3JlRGVjbFwiKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUyLnR5cGUgPT09IFwiY29tbWVudFwiKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucmF3KG5vZGUyLCBudWxsLCBcImJlZm9yZUNvbW1lbnRcIik7XG4gICAgfSBlbHNlIGlmIChkZXRlY3QgPT09IFwiYmVmb3JlXCIpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5yYXcobm9kZTIsIG51bGwsIFwiYmVmb3JlUnVsZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSB0aGlzLnJhdyhub2RlMiwgbnVsbCwgXCJiZWZvcmVDbG9zZVwiKTtcbiAgICB9XG4gICAgbGV0IGJ1ZiA9IG5vZGUyLnBhcmVudDtcbiAgICBsZXQgZGVwdGggPSAwO1xuICAgIHdoaWxlIChidWYgJiYgYnVmLnR5cGUgIT09IFwicm9vdFwiKSB7XG4gICAgICBkZXB0aCArPSAxO1xuICAgICAgYnVmID0gYnVmLnBhcmVudDtcbiAgICB9XG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKFwiXFxuXCIpKSB7XG4gICAgICBsZXQgaW5kZW50ID0gdGhpcy5yYXcobm9kZTIsIG51bGwsIFwiaW5kZW50XCIpO1xuICAgICAgaWYgKGluZGVudC5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgc3RlcCA9IDA7IHN0ZXAgPCBkZXB0aDsgc3RlcCsrKSB2YWx1ZSArPSBpbmRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBibG9jayhub2RlMiwgc3RhcnQpIHtcbiAgICBsZXQgYmV0d2VlbiA9IHRoaXMucmF3KG5vZGUyLCBcImJldHdlZW5cIiwgXCJiZWZvcmVPcGVuXCIpO1xuICAgIHRoaXMuYnVpbGRlcihzdGFydCArIGJldHdlZW4gKyBcIntcIiwgbm9kZTIsIFwic3RhcnRcIik7XG4gICAgbGV0IGFmdGVyO1xuICAgIGlmIChub2RlMi5ub2RlcyAmJiBub2RlMi5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYm9keShub2RlMik7XG4gICAgICBhZnRlciA9IHRoaXMucmF3KG5vZGUyLCBcImFmdGVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZnRlciA9IHRoaXMucmF3KG5vZGUyLCBcImFmdGVyXCIsIFwiZW1wdHlCb2R5XCIpO1xuICAgIH1cbiAgICBpZiAoYWZ0ZXIpIHRoaXMuYnVpbGRlcihhZnRlcik7XG4gICAgdGhpcy5idWlsZGVyKFwifVwiLCBub2RlMiwgXCJlbmRcIik7XG4gIH1cbiAgYm9keShub2RlMikge1xuICAgIGxldCBsYXN0ID0gbm9kZTIubm9kZXMubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAobGFzdCA+IDApIHtcbiAgICAgIGlmIChub2RlMi5ub2Rlc1tsYXN0XS50eXBlICE9PSBcImNvbW1lbnRcIikgYnJlYWs7XG4gICAgICBsYXN0IC09IDE7XG4gICAgfVxuICAgIGxldCBzZW1pY29sb24gPSB0aGlzLnJhdyhub2RlMiwgXCJzZW1pY29sb25cIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlMi5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gbm9kZTIubm9kZXNbaV07XG4gICAgICBsZXQgYmVmb3JlID0gdGhpcy5yYXcoY2hpbGQsIFwiYmVmb3JlXCIpO1xuICAgICAgaWYgKGJlZm9yZSkgdGhpcy5idWlsZGVyKGJlZm9yZSk7XG4gICAgICB0aGlzLnN0cmluZ2lmeShjaGlsZCwgbGFzdCAhPT0gaSB8fCBzZW1pY29sb24pO1xuICAgIH1cbiAgfVxuICBjb21tZW50KG5vZGUyKSB7XG4gICAgbGV0IGxlZnQgPSB0aGlzLnJhdyhub2RlMiwgXCJsZWZ0XCIsIFwiY29tbWVudExlZnRcIik7XG4gICAgbGV0IHJpZ2h0ID0gdGhpcy5yYXcobm9kZTIsIFwicmlnaHRcIiwgXCJjb21tZW50UmlnaHRcIik7XG4gICAgdGhpcy5idWlsZGVyKFwiLypcIiArIGxlZnQgKyBub2RlMi50ZXh0ICsgcmlnaHQgKyBcIiovXCIsIG5vZGUyKTtcbiAgfVxuICBkZWNsKG5vZGUyLCBzZW1pY29sb24pIHtcbiAgICBsZXQgYmV0d2VlbiA9IHRoaXMucmF3KG5vZGUyLCBcImJldHdlZW5cIiwgXCJjb2xvblwiKTtcbiAgICBsZXQgc3RyaW5nID0gbm9kZTIucHJvcCArIGJldHdlZW4gKyB0aGlzLnJhd1ZhbHVlKG5vZGUyLCBcInZhbHVlXCIpO1xuICAgIGlmIChub2RlMi5pbXBvcnRhbnQpIHtcbiAgICAgIHN0cmluZyArPSBub2RlMi5yYXdzLmltcG9ydGFudCB8fCBcIiAhaW1wb3J0YW50XCI7XG4gICAgfVxuICAgIGlmIChzZW1pY29sb24pIHN0cmluZyArPSBcIjtcIjtcbiAgICB0aGlzLmJ1aWxkZXIoc3RyaW5nLCBub2RlMik7XG4gIH1cbiAgZG9jdW1lbnQobm9kZTIpIHtcbiAgICB0aGlzLmJvZHkobm9kZTIpO1xuICB9XG4gIHJhdyhub2RlMiwgb3duLCBkZXRlY3QpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKCFkZXRlY3QpIGRldGVjdCA9IG93bjtcbiAgICBpZiAob3duKSB7XG4gICAgICB2YWx1ZSA9IG5vZGUyLnJhd3Nbb3duXTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgbGV0IHBhcmVudCA9IG5vZGUyLnBhcmVudDtcbiAgICBpZiAoZGV0ZWN0ID09PSBcImJlZm9yZVwiKSB7XG4gICAgICBpZiAoIXBhcmVudCB8fCBwYXJlbnQudHlwZSA9PT0gXCJyb290XCIgJiYgcGFyZW50LmZpcnN0ID09PSBub2RlMikge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LnR5cGUgPT09IFwiZG9jdW1lbnRcIikge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFwYXJlbnQpIHJldHVybiBERUZBVUxUX1JBV1tkZXRlY3RdO1xuICAgIGxldCByb290MiA9IG5vZGUyLnJvb3QoKTtcbiAgICBpZiAoIXJvb3QyLnJhd0NhY2hlKSByb290Mi5yYXdDYWNoZSA9IHt9O1xuICAgIGlmICh0eXBlb2Ygcm9vdDIucmF3Q2FjaGVbZGV0ZWN0XSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIHJvb3QyLnJhd0NhY2hlW2RldGVjdF07XG4gICAgfVxuICAgIGlmIChkZXRlY3QgPT09IFwiYmVmb3JlXCIgfHwgZGV0ZWN0ID09PSBcImFmdGVyXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLmJlZm9yZUFmdGVyKG5vZGUyLCBkZXRlY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbWV0aG9kID0gXCJyYXdcIiArIGNhcGl0YWxpemUoZGV0ZWN0KTtcbiAgICAgIGlmICh0aGlzW21ldGhvZF0pIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzW21ldGhvZF0ocm9vdDIsIG5vZGUyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QyLndhbGsoKGkpID0+IHtcbiAgICAgICAgICB2YWx1ZSA9IGkucmF3c1tvd25dO1xuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHZhbHVlID0gREVGQVVMVF9SQVdbZGV0ZWN0XTtcbiAgICByb290Mi5yYXdDYWNoZVtkZXRlY3RdID0gdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJhd0JlZm9yZUNsb3NlKHJvb3QyKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHJvb3QyLndhbGsoKGkpID0+IHtcbiAgICAgIGlmIChpLm5vZGVzICYmIGkubm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodHlwZW9mIGkucmF3cy5hZnRlciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIHZhbHVlID0gaS5yYXdzLmFmdGVyO1xuICAgICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhcIlxcblwiKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXlxcbl0rJC8sIFwiXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodmFsdWUpIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxTL2csIFwiXCIpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByYXdCZWZvcmVDb21tZW50KHJvb3QyLCBub2RlMikge1xuICAgIGxldCB2YWx1ZTtcbiAgICByb290Mi53YWxrQ29tbWVudHMoKGkpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmJlZm9yZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB2YWx1ZSA9IGkucmF3cy5iZWZvcmU7XG4gICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhcIlxcblwiKSkge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15cXG5dKyQvLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdmFsdWUgPSB0aGlzLnJhdyhub2RlMiwgbnVsbCwgXCJiZWZvcmVEZWNsXCIpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxTL2csIFwiXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmF3QmVmb3JlRGVjbChyb290Miwgbm9kZTIpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgcm9vdDIud2Fsa0RlY2xzKChpKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGkucmF3cy5iZWZvcmUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdmFsdWUgPSBpLnJhd3MuYmVmb3JlO1xuICAgICAgICBpZiAodmFsdWUuaW5jbHVkZXMoXCJcXG5cIikpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1teXFxuXSskLywgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5yYXcobm9kZTIsIG51bGwsIFwiYmVmb3JlUnVsZVwiKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcUy9nLCBcIlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJhd0JlZm9yZU9wZW4ocm9vdDIpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgcm9vdDIud2FsaygoaSkgPT4ge1xuICAgICAgaWYgKGkudHlwZSAhPT0gXCJkZWNsXCIpIHtcbiAgICAgICAgdmFsdWUgPSBpLnJhd3MuYmV0d2VlbjtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByYXdCZWZvcmVSdWxlKHJvb3QyKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHJvb3QyLndhbGsoKGkpID0+IHtcbiAgICAgIGlmIChpLm5vZGVzICYmIChpLnBhcmVudCAhPT0gcm9vdDIgfHwgcm9vdDIuZmlyc3QgIT09IGkpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmJlZm9yZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIHZhbHVlID0gaS5yYXdzLmJlZm9yZTtcbiAgICAgICAgICBpZiAodmFsdWUuaW5jbHVkZXMoXCJcXG5cIikpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15cXG5dKyQvLCBcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHZhbHVlKSB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcUy9nLCBcIlwiKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmF3Q29sb24ocm9vdDIpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgcm9vdDIud2Fsa0RlY2xzKChpKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGkucmF3cy5iZXR3ZWVuICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHZhbHVlID0gaS5yYXdzLmJldHdlZW4ucmVwbGFjZSgvW15cXHM6XS9nLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByYXdFbXB0eUJvZHkocm9vdDIpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgcm9vdDIud2FsaygoaSkgPT4ge1xuICAgICAgaWYgKGkubm9kZXMgJiYgaS5ub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsdWUgPSBpLnJhd3MuYWZ0ZXI7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmF3SW5kZW50KHJvb3QyKSB7XG4gICAgaWYgKHJvb3QyLnJhd3MuaW5kZW50KSByZXR1cm4gcm9vdDIucmF3cy5pbmRlbnQ7XG4gICAgbGV0IHZhbHVlO1xuICAgIHJvb3QyLndhbGsoKGkpID0+IHtcbiAgICAgIGxldCBwID0gaS5wYXJlbnQ7XG4gICAgICBpZiAocCAmJiBwICE9PSByb290MiAmJiBwLnBhcmVudCAmJiBwLnBhcmVudCA9PT0gcm9vdDIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpLnJhd3MuYmVmb3JlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgbGV0IHBhcnRzID0gaS5yYXdzLmJlZm9yZS5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgICB2YWx1ZSA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxTL2csIFwiXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByYXdTZW1pY29sb24ocm9vdDIpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgcm9vdDIud2FsaygoaSkgPT4ge1xuICAgICAgaWYgKGkubm9kZXMgJiYgaS5ub2Rlcy5sZW5ndGggJiYgaS5sYXN0LnR5cGUgPT09IFwiZGVjbFwiKSB7XG4gICAgICAgIHZhbHVlID0gaS5yYXdzLnNlbWljb2xvbjtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByYXdWYWx1ZShub2RlMiwgcHJvcCkge1xuICAgIGxldCB2YWx1ZSA9IG5vZGUyW3Byb3BdO1xuICAgIGxldCByYXcgPSBub2RlMi5yYXdzW3Byb3BdO1xuICAgIGlmIChyYXcgJiYgcmF3LnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHJhdy5yYXc7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByb290KG5vZGUyKSB7XG4gICAgdGhpcy5ib2R5KG5vZGUyKTtcbiAgICBpZiAobm9kZTIucmF3cy5hZnRlcikgdGhpcy5idWlsZGVyKG5vZGUyLnJhd3MuYWZ0ZXIpO1xuICB9XG4gIHJ1bGUobm9kZTIpIHtcbiAgICB0aGlzLmJsb2NrKG5vZGUyLCB0aGlzLnJhd1ZhbHVlKG5vZGUyLCBcInNlbGVjdG9yXCIpKTtcbiAgICBpZiAobm9kZTIucmF3cy5vd25TZW1pY29sb24pIHtcbiAgICAgIHRoaXMuYnVpbGRlcihub2RlMi5yYXdzLm93blNlbWljb2xvbiwgbm9kZTIsIFwiZW5kXCIpO1xuICAgIH1cbiAgfVxuICBzdHJpbmdpZnkobm9kZTIsIHNlbWljb2xvbikge1xuICAgIGlmICghdGhpc1tub2RlMi50eXBlXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIlVua25vd24gQVNUIG5vZGUgdHlwZSBcIiArIG5vZGUyLnR5cGUgKyBcIi4gTWF5YmUgeW91IG5lZWQgdG8gY2hhbmdlIFBvc3RDU1Mgc3RyaW5naWZpZXIuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXNbbm9kZTIudHlwZV0obm9kZTIsIHNlbWljb2xvbik7XG4gIH1cbn07XG52YXIgc3RyaW5naWZpZXIgPSBTdHJpbmdpZmllciQyO1xuU3RyaW5naWZpZXIkMi5kZWZhdWx0ID0gU3RyaW5naWZpZXIkMjtcbmxldCBTdHJpbmdpZmllciQxID0gc3RyaW5naWZpZXI7XG5mdW5jdGlvbiBzdHJpbmdpZnkkNChub2RlMiwgYnVpbGRlcikge1xuICBsZXQgc3RyID0gbmV3IFN0cmluZ2lmaWVyJDEoYnVpbGRlcik7XG4gIHN0ci5zdHJpbmdpZnkobm9kZTIpO1xufVxudmFyIHN0cmluZ2lmeV8xID0gc3RyaW5naWZ5JDQ7XG5zdHJpbmdpZnkkNC5kZWZhdWx0ID0gc3RyaW5naWZ5JDQ7XG5sZXQgeyBpc0NsZWFuOiBpc0NsZWFuJDIsIG15OiBteSQyIH0gPSBzeW1ib2xzO1xubGV0IENzc1N5bnRheEVycm9yJDIgPSBjc3NTeW50YXhFcnJvcjtcbmxldCBTdHJpbmdpZmllcjIgPSBzdHJpbmdpZmllcjtcbmxldCBzdHJpbmdpZnkkMyA9IHN0cmluZ2lmeV8xO1xuZnVuY3Rpb24gY2xvbmVOb2RlKG9iaiwgcGFyZW50KSB7XG4gIGxldCBjbG9uZWQgPSBuZXcgb2JqLmNvbnN0cnVjdG9yKCk7XG4gIGZvciAobGV0IGkgaW4gb2JqKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChpID09PSBcInByb3h5Q2FjaGVcIikgY29udGludWU7XG4gICAgbGV0IHZhbHVlID0gb2JqW2ldO1xuICAgIGxldCB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICAgIGlmIChpID09PSBcInBhcmVudFwiICYmIHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGlmIChwYXJlbnQpIGNsb25lZFtpXSA9IHBhcmVudDtcbiAgICB9IGVsc2UgaWYgKGkgPT09IFwic291cmNlXCIpIHtcbiAgICAgIGNsb25lZFtpXSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGNsb25lZFtpXSA9IHZhbHVlLm1hcCgoaikgPT4gY2xvbmVOb2RlKGosIGNsb25lZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkgdmFsdWUgPSBjbG9uZU5vZGUodmFsdWUpO1xuICAgICAgY2xvbmVkW2ldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbG9uZWQ7XG59XG5sZXQgTm9kZSQ0ID0gY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRzID0ge30pIHtcbiAgICB0aGlzLnJhd3MgPSB7fTtcbiAgICB0aGlzW2lzQ2xlYW4kMl0gPSBmYWxzZTtcbiAgICB0aGlzW215JDJdID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBuYW1lIGluIGRlZmF1bHRzKSB7XG4gICAgICBpZiAobmFtZSA9PT0gXCJub2Rlc1wiKSB7XG4gICAgICAgIHRoaXMubm9kZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgbm9kZTIgb2YgZGVmYXVsdHNbbmFtZV0pIHtcbiAgICAgICAgICBpZiAodHlwZW9mIG5vZGUyLmNsb25lID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kKG5vZGUyLmNsb25lKCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZChub2RlMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzW25hbWVdID0gZGVmYXVsdHNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFkZFRvRXJyb3IoZXJyb3IpIHtcbiAgICBlcnJvci5wb3N0Y3NzTm9kZSA9IHRoaXM7XG4gICAgaWYgKGVycm9yLnN0YWNrICYmIHRoaXMuc291cmNlICYmIC9cXG5cXHN7NH1hdCAvLnRlc3QoZXJyb3Iuc3RhY2spKSB7XG4gICAgICBsZXQgcyA9IHRoaXMuc291cmNlO1xuICAgICAgZXJyb3Iuc3RhY2sgPSBlcnJvci5zdGFjay5yZXBsYWNlKFxuICAgICAgICAvXFxuXFxzezR9YXQgLyxcbiAgICAgICAgYCQmJHtzLmlucHV0LmZyb219OiR7cy5zdGFydC5saW5lfToke3Muc3RhcnQuY29sdW1ufSQmYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG4gIGFmdGVyKGFkZCkge1xuICAgIHRoaXMucGFyZW50Lmluc2VydEFmdGVyKHRoaXMsIGFkZCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgYXNzaWduKG92ZXJyaWRlcyA9IHt9KSB7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBvdmVycmlkZXMpIHtcbiAgICAgIHRoaXNbbmFtZV0gPSBvdmVycmlkZXNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGJlZm9yZShhZGQpIHtcbiAgICB0aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUodGhpcywgYWRkKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjbGVhblJhd3Moa2VlcEJldHdlZW4pIHtcbiAgICBkZWxldGUgdGhpcy5yYXdzLmJlZm9yZTtcbiAgICBkZWxldGUgdGhpcy5yYXdzLmFmdGVyO1xuICAgIGlmICgha2VlcEJldHdlZW4pIGRlbGV0ZSB0aGlzLnJhd3MuYmV0d2VlbjtcbiAgfVxuICBjbG9uZShvdmVycmlkZXMgPSB7fSkge1xuICAgIGxldCBjbG9uZWQgPSBjbG9uZU5vZGUodGhpcyk7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBvdmVycmlkZXMpIHtcbiAgICAgIGNsb25lZFtuYW1lXSA9IG92ZXJyaWRlc1tuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxuICBjbG9uZUFmdGVyKG92ZXJyaWRlcyA9IHt9KSB7XG4gICAgbGV0IGNsb25lZCA9IHRoaXMuY2xvbmUob3ZlcnJpZGVzKTtcbiAgICB0aGlzLnBhcmVudC5pbnNlcnRBZnRlcih0aGlzLCBjbG9uZWQpO1xuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbiAgY2xvbmVCZWZvcmUob3ZlcnJpZGVzID0ge30pIHtcbiAgICBsZXQgY2xvbmVkID0gdGhpcy5jbG9uZShvdmVycmlkZXMpO1xuICAgIHRoaXMucGFyZW50Lmluc2VydEJlZm9yZSh0aGlzLCBjbG9uZWQpO1xuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbiAgZXJyb3IobWVzc2FnZSwgb3B0cyA9IHt9KSB7XG4gICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICBsZXQgeyBlbmQsIHN0YXJ0IH0gPSB0aGlzLnJhbmdlQnkob3B0cyk7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2UuaW5wdXQuZXJyb3IoXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIHsgY29sdW1uOiBzdGFydC5jb2x1bW4sIGxpbmU6IHN0YXJ0LmxpbmUgfSxcbiAgICAgICAgeyBjb2x1bW46IGVuZC5jb2x1bW4sIGxpbmU6IGVuZC5saW5lIH0sXG4gICAgICAgIG9wdHNcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQ3NzU3ludGF4RXJyb3IkMihtZXNzYWdlKTtcbiAgfVxuICBnZXRQcm94eVByb2Nlc3NvcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0KG5vZGUyLCBwcm9wKSB7XG4gICAgICAgIGlmIChwcm9wID09PSBcInByb3h5T2ZcIikge1xuICAgICAgICAgIHJldHVybiBub2RlMjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSBcInJvb3RcIikge1xuICAgICAgICAgIHJldHVybiAoKSA9PiBub2RlMi5yb290KCkudG9Qcm94eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBub2RlMltwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldChub2RlMiwgcHJvcCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG5vZGUyW3Byb3BdID09PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgICAgIG5vZGUyW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIGlmIChwcm9wID09PSBcInByb3BcIiB8fCBwcm9wID09PSBcInZhbHVlXCIgfHwgcHJvcCA9PT0gXCJuYW1lXCIgfHwgcHJvcCA9PT0gXCJwYXJhbXNcIiB8fCBwcm9wID09PSBcImltcG9ydGFudFwiIHx8IC8qIGM4IGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHByb3AgPT09IFwidGV4dFwiKSB7XG4gICAgICAgICAgbm9kZTIubWFya0RpcnR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBtYXJrRGlydHkoKSB7XG4gICAgaWYgKHRoaXNbaXNDbGVhbiQyXSkge1xuICAgICAgdGhpc1tpc0NsZWFuJDJdID0gZmFsc2U7XG4gICAgICBsZXQgbmV4dCA9IHRoaXM7XG4gICAgICB3aGlsZSAobmV4dCA9IG5leHQucGFyZW50KSB7XG4gICAgICAgIG5leHRbaXNDbGVhbiQyXSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBuZXh0KCkge1xuICAgIGlmICghdGhpcy5wYXJlbnQpIHJldHVybiB2b2lkIDA7XG4gICAgbGV0IGluZGV4MiA9IHRoaXMucGFyZW50LmluZGV4KHRoaXMpO1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5ub2Rlc1tpbmRleDIgKyAxXTtcbiAgfVxuICBwb3NpdGlvbkJ5KG9wdHMsIHN0cmluZ1JlcHJlc2VudGF0aW9uKSB7XG4gICAgbGV0IHBvcyA9IHRoaXMuc291cmNlLnN0YXJ0O1xuICAgIGlmIChvcHRzLmluZGV4KSB7XG4gICAgICBwb3MgPSB0aGlzLnBvc2l0aW9uSW5zaWRlKG9wdHMuaW5kZXgsIHN0cmluZ1JlcHJlc2VudGF0aW9uKTtcbiAgICB9IGVsc2UgaWYgKG9wdHMud29yZCkge1xuICAgICAgc3RyaW5nUmVwcmVzZW50YXRpb24gPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICBsZXQgaW5kZXgyID0gc3RyaW5nUmVwcmVzZW50YXRpb24uaW5kZXhPZihvcHRzLndvcmQpO1xuICAgICAgaWYgKGluZGV4MiAhPT0gLTEpIHBvcyA9IHRoaXMucG9zaXRpb25JbnNpZGUoaW5kZXgyLCBzdHJpbmdSZXByZXNlbnRhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBwb3M7XG4gIH1cbiAgcG9zaXRpb25JbnNpZGUoaW5kZXgyLCBzdHJpbmdSZXByZXNlbnRhdGlvbikge1xuICAgIGxldCBzdHJpbmcgPSBzdHJpbmdSZXByZXNlbnRhdGlvbiB8fCB0aGlzLnRvU3RyaW5nKCk7XG4gICAgbGV0IGNvbHVtbiA9IHRoaXMuc291cmNlLnN0YXJ0LmNvbHVtbjtcbiAgICBsZXQgbGluZSA9IHRoaXMuc291cmNlLnN0YXJ0LmxpbmU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleDI7IGkrKykge1xuICAgICAgaWYgKHN0cmluZ1tpXSA9PT0gXCJcXG5cIikge1xuICAgICAgICBjb2x1bW4gPSAxO1xuICAgICAgICBsaW5lICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2x1bW4gKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgY29sdW1uLCBsaW5lIH07XG4gIH1cbiAgcHJldigpIHtcbiAgICBpZiAoIXRoaXMucGFyZW50KSByZXR1cm4gdm9pZCAwO1xuICAgIGxldCBpbmRleDIgPSB0aGlzLnBhcmVudC5pbmRleCh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQubm9kZXNbaW5kZXgyIC0gMV07XG4gIH1cbiAgcmFuZ2VCeShvcHRzKSB7XG4gICAgbGV0IHN0YXJ0ID0ge1xuICAgICAgY29sdW1uOiB0aGlzLnNvdXJjZS5zdGFydC5jb2x1bW4sXG4gICAgICBsaW5lOiB0aGlzLnNvdXJjZS5zdGFydC5saW5lXG4gICAgfTtcbiAgICBsZXQgZW5kID0gdGhpcy5zb3VyY2UuZW5kID8ge1xuICAgICAgY29sdW1uOiB0aGlzLnNvdXJjZS5lbmQuY29sdW1uICsgMSxcbiAgICAgIGxpbmU6IHRoaXMuc291cmNlLmVuZC5saW5lXG4gICAgfSA6IHtcbiAgICAgIGNvbHVtbjogc3RhcnQuY29sdW1uICsgMSxcbiAgICAgIGxpbmU6IHN0YXJ0LmxpbmVcbiAgICB9O1xuICAgIGlmIChvcHRzLndvcmQpIHtcbiAgICAgIGxldCBzdHJpbmdSZXByZXNlbnRhdGlvbiA9IHRoaXMudG9TdHJpbmcoKTtcbiAgICAgIGxldCBpbmRleDIgPSBzdHJpbmdSZXByZXNlbnRhdGlvbi5pbmRleE9mKG9wdHMud29yZCk7XG4gICAgICBpZiAoaW5kZXgyICE9PSAtMSkge1xuICAgICAgICBzdGFydCA9IHRoaXMucG9zaXRpb25JbnNpZGUoaW5kZXgyLCBzdHJpbmdSZXByZXNlbnRhdGlvbik7XG4gICAgICAgIGVuZCA9IHRoaXMucG9zaXRpb25JbnNpZGUoaW5kZXgyICsgb3B0cy53b3JkLmxlbmd0aCwgc3RyaW5nUmVwcmVzZW50YXRpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0cy5zdGFydCkge1xuICAgICAgICBzdGFydCA9IHtcbiAgICAgICAgICBjb2x1bW46IG9wdHMuc3RhcnQuY29sdW1uLFxuICAgICAgICAgIGxpbmU6IG9wdHMuc3RhcnQubGluZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChvcHRzLmluZGV4KSB7XG4gICAgICAgIHN0YXJ0ID0gdGhpcy5wb3NpdGlvbkluc2lkZShvcHRzLmluZGV4KTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRzLmVuZCkge1xuICAgICAgICBlbmQgPSB7XG4gICAgICAgICAgY29sdW1uOiBvcHRzLmVuZC5jb2x1bW4sXG4gICAgICAgICAgbGluZTogb3B0cy5lbmQubGluZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cy5lbmRJbmRleCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBlbmQgPSB0aGlzLnBvc2l0aW9uSW5zaWRlKG9wdHMuZW5kSW5kZXgpO1xuICAgICAgfSBlbHNlIGlmIChvcHRzLmluZGV4KSB7XG4gICAgICAgIGVuZCA9IHRoaXMucG9zaXRpb25JbnNpZGUob3B0cy5pbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kLmxpbmUgPCBzdGFydC5saW5lIHx8IGVuZC5saW5lID09PSBzdGFydC5saW5lICYmIGVuZC5jb2x1bW4gPD0gc3RhcnQuY29sdW1uKSB7XG4gICAgICBlbmQgPSB7IGNvbHVtbjogc3RhcnQuY29sdW1uICsgMSwgbGluZTogc3RhcnQubGluZSB9O1xuICAgIH1cbiAgICByZXR1cm4geyBlbmQsIHN0YXJ0IH07XG4gIH1cbiAgcmF3KHByb3AsIGRlZmF1bHRUeXBlKSB7XG4gICAgbGV0IHN0ciA9IG5ldyBTdHJpbmdpZmllcjIoKTtcbiAgICByZXR1cm4gc3RyLnJhdyh0aGlzLCBwcm9wLCBkZWZhdWx0VHlwZSk7XG4gIH1cbiAgcmVtb3ZlKCkge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgfVxuICAgIHRoaXMucGFyZW50ID0gdm9pZCAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHJlcGxhY2VXaXRoKC4uLm5vZGVzKSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICBsZXQgYm9va21hcmsgPSB0aGlzO1xuICAgICAgbGV0IGZvdW5kU2VsZiA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgbm9kZTIgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUyID09PSB0aGlzKSB7XG4gICAgICAgICAgZm91bmRTZWxmID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChmb3VuZFNlbGYpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudC5pbnNlcnRBZnRlcihib29rbWFyaywgbm9kZTIpO1xuICAgICAgICAgIGJvb2ttYXJrID0gbm9kZTI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnQuaW5zZXJ0QmVmb3JlKGJvb2ttYXJrLCBub2RlMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghZm91bmRTZWxmKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHJvb3QoKSB7XG4gICAgbGV0IHJlc3VsdDIgPSB0aGlzO1xuICAgIHdoaWxlIChyZXN1bHQyLnBhcmVudCAmJiByZXN1bHQyLnBhcmVudC50eXBlICE9PSBcImRvY3VtZW50XCIpIHtcbiAgICAgIHJlc3VsdDIgPSByZXN1bHQyLnBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDI7XG4gIH1cbiAgdG9KU09OKF8sIGlucHV0cykge1xuICAgIGxldCBmaXhlZCA9IHt9O1xuICAgIGxldCBlbWl0SW5wdXRzID0gaW5wdXRzID09IG51bGw7XG4gICAgaW5wdXRzID0gaW5wdXRzIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgbGV0IGlucHV0c05leHRJbmRleCA9IDA7XG4gICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCBuYW1lKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lID09PSBcInBhcmVudFwiIHx8IG5hbWUgPT09IFwicHJveHlDYWNoZVwiKSBjb250aW51ZTtcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXNbbmFtZV07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgZml4ZWRbbmFtZV0gPSB2YWx1ZS5tYXAoKGkpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGkgPT09IFwib2JqZWN0XCIgJiYgaS50b0pTT04pIHtcbiAgICAgICAgICAgIHJldHVybiBpLnRvSlNPTihudWxsLCBpbnB1dHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUudG9KU09OKSB7XG4gICAgICAgIGZpeGVkW25hbWVdID0gdmFsdWUudG9KU09OKG51bGwsIGlucHV0cyk7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwic291cmNlXCIpIHtcbiAgICAgICAgbGV0IGlucHV0SWQgPSBpbnB1dHMuZ2V0KHZhbHVlLmlucHV0KTtcbiAgICAgICAgaWYgKGlucHV0SWQgPT0gbnVsbCkge1xuICAgICAgICAgIGlucHV0SWQgPSBpbnB1dHNOZXh0SW5kZXg7XG4gICAgICAgICAgaW5wdXRzLnNldCh2YWx1ZS5pbnB1dCwgaW5wdXRzTmV4dEluZGV4KTtcbiAgICAgICAgICBpbnB1dHNOZXh0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBmaXhlZFtuYW1lXSA9IHtcbiAgICAgICAgICBlbmQ6IHZhbHVlLmVuZCxcbiAgICAgICAgICBpbnB1dElkLFxuICAgICAgICAgIHN0YXJ0OiB2YWx1ZS5zdGFydFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZml4ZWRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVtaXRJbnB1dHMpIHtcbiAgICAgIGZpeGVkLmlucHV0cyA9IFsuLi5pbnB1dHMua2V5cygpXS5tYXAoKGlucHV0MikgPT4gaW5wdXQyLnRvSlNPTigpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpeGVkO1xuICB9XG4gIHRvUHJveHkoKSB7XG4gICAgaWYgKCF0aGlzLnByb3h5Q2FjaGUpIHtcbiAgICAgIHRoaXMucHJveHlDYWNoZSA9IG5ldyBQcm94eSh0aGlzLCB0aGlzLmdldFByb3h5UHJvY2Vzc29yKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm94eUNhY2hlO1xuICB9XG4gIHRvU3RyaW5nKHN0cmluZ2lmaWVyMiA9IHN0cmluZ2lmeSQzKSB7XG4gICAgaWYgKHN0cmluZ2lmaWVyMi5zdHJpbmdpZnkpIHN0cmluZ2lmaWVyMiA9IHN0cmluZ2lmaWVyMi5zdHJpbmdpZnk7XG4gICAgbGV0IHJlc3VsdDIgPSBcIlwiO1xuICAgIHN0cmluZ2lmaWVyMih0aGlzLCAoaSkgPT4ge1xuICAgICAgcmVzdWx0MiArPSBpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQyO1xuICB9XG4gIHdhcm4ocmVzdWx0MiwgdGV4dCwgb3B0cykge1xuICAgIGxldCBkYXRhID0geyBub2RlOiB0aGlzIH07XG4gICAgZm9yIChsZXQgaSBpbiBvcHRzKSBkYXRhW2ldID0gb3B0c1tpXTtcbiAgICByZXR1cm4gcmVzdWx0Mi53YXJuKHRleHQsIGRhdGEpO1xuICB9XG4gIGdldCBwcm94eU9mKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xudmFyIG5vZGUgPSBOb2RlJDQ7XG5Ob2RlJDQuZGVmYXVsdCA9IE5vZGUkNDtcbmxldCBOb2RlJDMgPSBub2RlO1xubGV0IERlY2xhcmF0aW9uJDQgPSBjbGFzcyBEZWNsYXJhdGlvbiBleHRlbmRzIE5vZGUkMyB7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRzKSB7XG4gICAgaWYgKGRlZmF1bHRzICYmIHR5cGVvZiBkZWZhdWx0cy52YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgZGVmYXVsdHMudmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGRlZmF1bHRzID0gX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgZGVmYXVsdHMpLCB7IHZhbHVlOiBTdHJpbmcoZGVmYXVsdHMudmFsdWUpIH0pO1xuICAgIH1cbiAgICBzdXBlcihkZWZhdWx0cyk7XG4gICAgdGhpcy50eXBlID0gXCJkZWNsXCI7XG4gIH1cbiAgZ2V0IHZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3Auc3RhcnRzV2l0aChcIi0tXCIpIHx8IHRoaXMucHJvcFswXSA9PT0gXCIkXCI7XG4gIH1cbn07XG52YXIgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbiQ0O1xuRGVjbGFyYXRpb24kNC5kZWZhdWx0ID0gRGVjbGFyYXRpb24kNDtcbmxldCB1cmxBbHBoYWJldCA9IFwidXNlYW5kb20tMjZUMTk4MzQwUFg3NXB4SkFDS1ZFUllNSU5EQlVTSFdPTEZfR1FaYmZnaGprbHF2d3l6cmljdFwiO1xubGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBkZWZhdWx0U2l6ZSA9IDIxKSA9PiB7XG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gXCJcIjtcbiAgICBsZXQgaSA9IHNpemU7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWQgKz0gYWxwaGFiZXRbTWF0aC5yYW5kb20oKSAqIGFscGhhYmV0Lmxlbmd0aCB8IDBdO1xuICAgIH1cbiAgICByZXR1cm4gaWQ7XG4gIH07XG59O1xubGV0IG5hbm9pZCQxID0gKHNpemUgPSAyMSkgPT4ge1xuICBsZXQgaWQgPSBcIlwiO1xuICBsZXQgaSA9IHNpemU7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZCArPSB1cmxBbHBoYWJldFtNYXRoLnJhbmRvbSgpICogNjQgfCAwXTtcbiAgfVxuICByZXR1cm4gaWQ7XG59O1xudmFyIG5vblNlY3VyZSA9IHsgbmFub2lkOiBuYW5vaWQkMSwgY3VzdG9tQWxwaGFiZXQgfTtcbmxldCB7IFNvdXJjZU1hcENvbnN1bWVyOiBTb3VyY2VNYXBDb25zdW1lciQyLCBTb3VyY2VNYXBHZW5lcmF0b3I6IFNvdXJjZU1hcEdlbmVyYXRvciQyIH0gPSByZXF1aXJlJCQyO1xubGV0IHsgZXhpc3RzU3luYywgcmVhZEZpbGVTeW5jIH0gPSByZXF1aXJlJCQyO1xubGV0IHsgZGlybmFtZTogZGlybmFtZSQxLCBqb2luIH0gPSByZXF1aXJlJCQyO1xuZnVuY3Rpb24gZnJvbUJhc2U2NChzdHIpIHtcbiAgaWYgKEJ1ZmZlcikge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShzdHIsIFwiYmFzZTY0XCIpLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHdpbmRvdy5hdG9iKHN0cik7XG4gIH1cbn1cbmxldCBQcmV2aW91c01hcCQyID0gY2xhc3MgUHJldmlvdXNNYXAge1xuICBjb25zdHJ1Y3Rvcihjc3MsIG9wdHMpIHtcbiAgICBpZiAob3B0cy5tYXAgPT09IGZhbHNlKSByZXR1cm47XG4gICAgdGhpcy5sb2FkQW5ub3RhdGlvbihjc3MpO1xuICAgIHRoaXMuaW5saW5lID0gdGhpcy5zdGFydFdpdGgodGhpcy5hbm5vdGF0aW9uLCBcImRhdGE6XCIpO1xuICAgIGxldCBwcmV2ID0gb3B0cy5tYXAgPyBvcHRzLm1hcC5wcmV2IDogdm9pZCAwO1xuICAgIGxldCB0ZXh0ID0gdGhpcy5sb2FkTWFwKG9wdHMuZnJvbSwgcHJldik7XG4gICAgaWYgKCF0aGlzLm1hcEZpbGUgJiYgb3B0cy5mcm9tKSB7XG4gICAgICB0aGlzLm1hcEZpbGUgPSBvcHRzLmZyb207XG4gICAgfVxuICAgIGlmICh0aGlzLm1hcEZpbGUpIHRoaXMucm9vdCA9IGRpcm5hbWUkMSh0aGlzLm1hcEZpbGUpO1xuICAgIGlmICh0ZXh0KSB0aGlzLnRleHQgPSB0ZXh0O1xuICB9XG4gIGNvbnN1bWVyKCkge1xuICAgIGlmICghdGhpcy5jb25zdW1lckNhY2hlKSB7XG4gICAgICB0aGlzLmNvbnN1bWVyQ2FjaGUgPSBuZXcgU291cmNlTWFwQ29uc3VtZXIkMih0aGlzLnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25zdW1lckNhY2hlO1xuICB9XG4gIGRlY29kZUlubGluZSh0ZXh0KSB7XG4gICAgbGV0IGJhc2VDaGFyc2V0VXJpID0gL15kYXRhOmFwcGxpY2F0aW9uXFwvanNvbjtjaGFyc2V0PXV0Zi0/ODtiYXNlNjQsLztcbiAgICBsZXQgYmFzZVVyaSA9IC9eZGF0YTphcHBsaWNhdGlvblxcL2pzb247YmFzZTY0LC87XG4gICAgbGV0IGNoYXJzZXRVcmkgPSAvXmRhdGE6YXBwbGljYXRpb25cXC9qc29uO2NoYXJzZXQ9dXRmLT84LC87XG4gICAgbGV0IHVyaSA9IC9eZGF0YTphcHBsaWNhdGlvblxcL2pzb24sLztcbiAgICBpZiAoY2hhcnNldFVyaS50ZXN0KHRleHQpIHx8IHVyaS50ZXN0KHRleHQpKSB7XG4gICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHRleHQuc3Vic3RyKFJlZ0V4cC5sYXN0TWF0Y2gubGVuZ3RoKSk7XG4gICAgfVxuICAgIGlmIChiYXNlQ2hhcnNldFVyaS50ZXN0KHRleHQpIHx8IGJhc2VVcmkudGVzdCh0ZXh0KSkge1xuICAgICAgcmV0dXJuIGZyb21CYXNlNjQodGV4dC5zdWJzdHIoUmVnRXhwLmxhc3RNYXRjaC5sZW5ndGgpKTtcbiAgICB9XG4gICAgbGV0IGVuY29kaW5nID0gdGV4dC5tYXRjaCgvZGF0YTphcHBsaWNhdGlvblxcL2pzb247KFteLF0rKSwvKVsxXTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBzb3VyY2UgbWFwIGVuY29kaW5nIFwiICsgZW5jb2RpbmcpO1xuICB9XG4gIGdldEFubm90YXRpb25VUkwoc291cmNlTWFwU3RyaW5nKSB7XG4gICAgcmV0dXJuIHNvdXJjZU1hcFN0cmluZy5yZXBsYWNlKC9eXFwvXFwqXFxzKiMgc291cmNlTWFwcGluZ1VSTD0vLCBcIlwiKS50cmltKCk7XG4gIH1cbiAgaXNNYXAobWFwKSB7XG4gICAgaWYgKHR5cGVvZiBtYXAgIT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHlwZW9mIG1hcC5tYXBwaW5ncyA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgbWFwLl9tYXBwaW5ncyA9PT0gXCJzdHJpbmdcIiB8fCBBcnJheS5pc0FycmF5KG1hcC5zZWN0aW9ucyk7XG4gIH1cbiAgbG9hZEFubm90YXRpb24oY3NzKSB7XG4gICAgbGV0IGNvbW1lbnRzID0gY3NzLm1hdGNoKC9cXC9cXCpcXHMqIyBzb3VyY2VNYXBwaW5nVVJMPS9nbSk7XG4gICAgaWYgKCFjb21tZW50cykgcmV0dXJuO1xuICAgIGxldCBzdGFydCA9IGNzcy5sYXN0SW5kZXhPZihjb21tZW50cy5wb3AoKSk7XG4gICAgbGV0IGVuZCA9IGNzcy5pbmRleE9mKFwiKi9cIiwgc3RhcnQpO1xuICAgIGlmIChzdGFydCA+IC0xICYmIGVuZCA+IC0xKSB7XG4gICAgICB0aGlzLmFubm90YXRpb24gPSB0aGlzLmdldEFubm90YXRpb25VUkwoY3NzLnN1YnN0cmluZyhzdGFydCwgZW5kKSk7XG4gICAgfVxuICB9XG4gIGxvYWRGaWxlKHBhdGgpIHtcbiAgICB0aGlzLnJvb3QgPSBkaXJuYW1lJDEocGF0aCk7XG4gICAgaWYgKGV4aXN0c1N5bmMocGF0aCkpIHtcbiAgICAgIHRoaXMubWFwRmlsZSA9IHBhdGg7XG4gICAgICByZXR1cm4gcmVhZEZpbGVTeW5jKHBhdGgsIFwidXRmLThcIikudG9TdHJpbmcoKS50cmltKCk7XG4gICAgfVxuICB9XG4gIGxvYWRNYXAoZmlsZSwgcHJldikge1xuICAgIGlmIChwcmV2ID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwcmV2KSB7XG4gICAgICBpZiAodHlwZW9mIHByZXYgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcmV2ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgbGV0IHByZXZQYXRoID0gcHJldihmaWxlKTtcbiAgICAgICAgaWYgKHByZXZQYXRoKSB7XG4gICAgICAgICAgbGV0IG1hcCA9IHRoaXMubG9hZEZpbGUocHJldlBhdGgpO1xuICAgICAgICAgIGlmICghbWFwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIFwiVW5hYmxlIHRvIGxvYWQgcHJldmlvdXMgc291cmNlIG1hcDogXCIgKyBwcmV2UGF0aC50b1N0cmluZygpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHByZXYgaW5zdGFuY2VvZiBTb3VyY2VNYXBDb25zdW1lciQyKSB7XG4gICAgICAgIHJldHVybiBTb3VyY2VNYXBHZW5lcmF0b3IkMi5mcm9tU291cmNlTWFwKHByZXYpLnRvU3RyaW5nKCk7XG4gICAgICB9IGVsc2UgaWYgKHByZXYgaW5zdGFuY2VvZiBTb3VyY2VNYXBHZW5lcmF0b3IkMikge1xuICAgICAgICByZXR1cm4gcHJldi50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTWFwKHByZXYpKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShwcmV2KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBcIlVuc3VwcG9ydGVkIHByZXZpb3VzIHNvdXJjZSBtYXAgZm9ybWF0OiBcIiArIHByZXYudG9TdHJpbmcoKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pbmxpbmUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlY29kZUlubGluZSh0aGlzLmFubm90YXRpb24pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hbm5vdGF0aW9uKSB7XG4gICAgICBsZXQgbWFwID0gdGhpcy5hbm5vdGF0aW9uO1xuICAgICAgaWYgKGZpbGUpIG1hcCA9IGpvaW4oZGlybmFtZSQxKGZpbGUpLCBtYXApO1xuICAgICAgcmV0dXJuIHRoaXMubG9hZEZpbGUobWFwKTtcbiAgICB9XG4gIH1cbiAgc3RhcnRXaXRoKHN0cmluZywgc3RhcnQpIHtcbiAgICBpZiAoIXN0cmluZykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBzdHJpbmcuc3Vic3RyKDAsIHN0YXJ0Lmxlbmd0aCkgPT09IHN0YXJ0O1xuICB9XG4gIHdpdGhDb250ZW50KCkge1xuICAgIHJldHVybiAhISh0aGlzLmNvbnN1bWVyKCkuc291cmNlc0NvbnRlbnQgJiYgdGhpcy5jb25zdW1lcigpLnNvdXJjZXNDb250ZW50Lmxlbmd0aCA+IDApO1xuICB9XG59O1xudmFyIHByZXZpb3VzTWFwID0gUHJldmlvdXNNYXAkMjtcblByZXZpb3VzTWFwJDIuZGVmYXVsdCA9IFByZXZpb3VzTWFwJDI7XG5sZXQgeyBTb3VyY2VNYXBDb25zdW1lcjogU291cmNlTWFwQ29uc3VtZXIkMSwgU291cmNlTWFwR2VuZXJhdG9yOiBTb3VyY2VNYXBHZW5lcmF0b3IkMSB9ID0gcmVxdWlyZSQkMjtcbmxldCB7IGZpbGVVUkxUb1BhdGgsIHBhdGhUb0ZpbGVVUkw6IHBhdGhUb0ZpbGVVUkwkMSB9ID0gcmVxdWlyZSQkMjtcbmxldCB7IGlzQWJzb2x1dGUsIHJlc29sdmU6IHJlc29sdmUkMSB9ID0gcmVxdWlyZSQkMjtcbmxldCB7IG5hbm9pZCB9ID0gbm9uU2VjdXJlO1xubGV0IHRlcm1pbmFsSGlnaGxpZ2h0ID0gcmVxdWlyZSQkMjtcbmxldCBDc3NTeW50YXhFcnJvciQxID0gY3NzU3ludGF4RXJyb3I7XG5sZXQgUHJldmlvdXNNYXAkMSA9IHByZXZpb3VzTWFwO1xubGV0IGZyb21PZmZzZXRDYWNoZSA9IFN5bWJvbChcImZyb21PZmZzZXRDYWNoZVwiKTtcbmxldCBzb3VyY2VNYXBBdmFpbGFibGUkMSA9IEJvb2xlYW4oU291cmNlTWFwQ29uc3VtZXIkMSAmJiBTb3VyY2VNYXBHZW5lcmF0b3IkMSk7XG5sZXQgcGF0aEF2YWlsYWJsZSQxID0gQm9vbGVhbihyZXNvbHZlJDEgJiYgaXNBYnNvbHV0ZSk7XG5sZXQgSW5wdXQkNCA9IGNsYXNzIElucHV0IHtcbiAgY29uc3RydWN0b3IoY3NzLCBvcHRzID0ge30pIHtcbiAgICBpZiAoY3NzID09PSBudWxsIHx8IHR5cGVvZiBjc3MgPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIGNzcyA9PT0gXCJvYmplY3RcIiAmJiAhY3NzLnRvU3RyaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBvc3RDU1MgcmVjZWl2ZWQgJHtjc3N9IGluc3RlYWQgb2YgQ1NTIHN0cmluZ2ApO1xuICAgIH1cbiAgICB0aGlzLmNzcyA9IGNzcy50b1N0cmluZygpO1xuICAgIGlmICh0aGlzLmNzc1swXSA9PT0gXCJcXHVGRUZGXCIgfHwgdGhpcy5jc3NbMF0gPT09IFwiXFx1RkZGRVwiKSB7XG4gICAgICB0aGlzLmhhc0JPTSA9IHRydWU7XG4gICAgICB0aGlzLmNzcyA9IHRoaXMuY3NzLnNsaWNlKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhc0JPTSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAob3B0cy5mcm9tKSB7XG4gICAgICBpZiAoIXBhdGhBdmFpbGFibGUkMSB8fCAvXlxcdys6XFwvXFwvLy50ZXN0KG9wdHMuZnJvbSkgfHwgaXNBYnNvbHV0ZShvcHRzLmZyb20pKSB7XG4gICAgICAgIHRoaXMuZmlsZSA9IG9wdHMuZnJvbTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlsZSA9IHJlc29sdmUkMShvcHRzLmZyb20pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGF0aEF2YWlsYWJsZSQxICYmIHNvdXJjZU1hcEF2YWlsYWJsZSQxKSB7XG4gICAgICBsZXQgbWFwID0gbmV3IFByZXZpb3VzTWFwJDEodGhpcy5jc3MsIG9wdHMpO1xuICAgICAgaWYgKG1hcC50ZXh0KSB7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICBsZXQgZmlsZSA9IG1hcC5jb25zdW1lcigpLmZpbGU7XG4gICAgICAgIGlmICghdGhpcy5maWxlICYmIGZpbGUpIHRoaXMuZmlsZSA9IHRoaXMubWFwUmVzb2x2ZShmaWxlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLmZpbGUpIHtcbiAgICAgIHRoaXMuaWQgPSBcIjxpbnB1dCBjc3MgXCIgKyBuYW5vaWQoNikgKyBcIj5cIjtcbiAgICB9XG4gICAgaWYgKHRoaXMubWFwKSB0aGlzLm1hcC5maWxlID0gdGhpcy5mcm9tO1xuICB9XG4gIGVycm9yKG1lc3NhZ2UsIGxpbmUsIGNvbHVtbiwgb3B0cyA9IHt9KSB7XG4gICAgbGV0IHJlc3VsdDIsIGVuZExpbmUsIGVuZENvbHVtbjtcbiAgICBpZiAobGluZSAmJiB0eXBlb2YgbGluZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgbGV0IHN0YXJ0ID0gbGluZTtcbiAgICAgIGxldCBlbmQgPSBjb2x1bW47XG4gICAgICBpZiAodHlwZW9mIHN0YXJ0Lm9mZnNldCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5mcm9tT2Zmc2V0KHN0YXJ0Lm9mZnNldCk7XG4gICAgICAgIGxpbmUgPSBwb3MubGluZTtcbiAgICAgICAgY29sdW1uID0gcG9zLmNvbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmUgPSBzdGFydC5saW5lO1xuICAgICAgICBjb2x1bW4gPSBzdGFydC5jb2x1bW47XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGVuZC5vZmZzZXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuZnJvbU9mZnNldChlbmQub2Zmc2V0KTtcbiAgICAgICAgZW5kTGluZSA9IHBvcy5saW5lO1xuICAgICAgICBlbmRDb2x1bW4gPSBwb3MuY29sO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kTGluZSA9IGVuZC5saW5lO1xuICAgICAgICBlbmRDb2x1bW4gPSBlbmQuY29sdW1uO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWNvbHVtbikge1xuICAgICAgbGV0IHBvcyA9IHRoaXMuZnJvbU9mZnNldChsaW5lKTtcbiAgICAgIGxpbmUgPSBwb3MubGluZTtcbiAgICAgIGNvbHVtbiA9IHBvcy5jb2w7XG4gICAgfVxuICAgIGxldCBvcmlnaW4gPSB0aGlzLm9yaWdpbihsaW5lLCBjb2x1bW4sIGVuZExpbmUsIGVuZENvbHVtbik7XG4gICAgaWYgKG9yaWdpbikge1xuICAgICAgcmVzdWx0MiA9IG5ldyBDc3NTeW50YXhFcnJvciQxKFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICBvcmlnaW4uZW5kTGluZSA9PT0gdm9pZCAwID8gb3JpZ2luLmxpbmUgOiB7IGNvbHVtbjogb3JpZ2luLmNvbHVtbiwgbGluZTogb3JpZ2luLmxpbmUgfSxcbiAgICAgICAgb3JpZ2luLmVuZExpbmUgPT09IHZvaWQgMCA/IG9yaWdpbi5jb2x1bW4gOiB7IGNvbHVtbjogb3JpZ2luLmVuZENvbHVtbiwgbGluZTogb3JpZ2luLmVuZExpbmUgfSxcbiAgICAgICAgb3JpZ2luLnNvdXJjZSxcbiAgICAgICAgb3JpZ2luLmZpbGUsXG4gICAgICAgIG9wdHMucGx1Z2luXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQyID0gbmV3IENzc1N5bnRheEVycm9yJDEoXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIGVuZExpbmUgPT09IHZvaWQgMCA/IGxpbmUgOiB7IGNvbHVtbiwgbGluZSB9LFxuICAgICAgICBlbmRMaW5lID09PSB2b2lkIDAgPyBjb2x1bW4gOiB7IGNvbHVtbjogZW5kQ29sdW1uLCBsaW5lOiBlbmRMaW5lIH0sXG4gICAgICAgIHRoaXMuY3NzLFxuICAgICAgICB0aGlzLmZpbGUsXG4gICAgICAgIG9wdHMucGx1Z2luXG4gICAgICApO1xuICAgIH1cbiAgICByZXN1bHQyLmlucHV0ID0geyBjb2x1bW4sIGVuZENvbHVtbiwgZW5kTGluZSwgbGluZSwgc291cmNlOiB0aGlzLmNzcyB9O1xuICAgIGlmICh0aGlzLmZpbGUpIHtcbiAgICAgIGlmIChwYXRoVG9GaWxlVVJMJDEpIHtcbiAgICAgICAgcmVzdWx0Mi5pbnB1dC51cmwgPSBwYXRoVG9GaWxlVVJMJDEodGhpcy5maWxlKS50b1N0cmluZygpO1xuICAgICAgfVxuICAgICAgcmVzdWx0Mi5pbnB1dC5maWxlID0gdGhpcy5maWxlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0MjtcbiAgfVxuICBmcm9tT2Zmc2V0KG9mZnNldCkge1xuICAgIGxldCBsYXN0TGluZSwgbGluZVRvSW5kZXg7XG4gICAgaWYgKCF0aGlzW2Zyb21PZmZzZXRDYWNoZV0pIHtcbiAgICAgIGxldCBsaW5lcyA9IHRoaXMuY3NzLnNwbGl0KFwiXFxuXCIpO1xuICAgICAgbGluZVRvSW5kZXggPSBuZXcgQXJyYXkobGluZXMubGVuZ3RoKTtcbiAgICAgIGxldCBwcmV2SW5kZXggPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGluZVRvSW5kZXhbaV0gPSBwcmV2SW5kZXg7XG4gICAgICAgIHByZXZJbmRleCArPSBsaW5lc1tpXS5sZW5ndGggKyAxO1xuICAgICAgfVxuICAgICAgdGhpc1tmcm9tT2Zmc2V0Q2FjaGVdID0gbGluZVRvSW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmVUb0luZGV4ID0gdGhpc1tmcm9tT2Zmc2V0Q2FjaGVdO1xuICAgIH1cbiAgICBsYXN0TGluZSA9IGxpbmVUb0luZGV4W2xpbmVUb0luZGV4Lmxlbmd0aCAtIDFdO1xuICAgIGxldCBtaW4gPSAwO1xuICAgIGlmIChvZmZzZXQgPj0gbGFzdExpbmUpIHtcbiAgICAgIG1pbiA9IGxpbmVUb0luZGV4Lmxlbmd0aCAtIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBtYXggPSBsaW5lVG9JbmRleC5sZW5ndGggLSAyO1xuICAgICAgbGV0IG1pZDtcbiAgICAgIHdoaWxlIChtaW4gPCBtYXgpIHtcbiAgICAgICAgbWlkID0gbWluICsgKG1heCAtIG1pbiA+PiAxKTtcbiAgICAgICAgaWYgKG9mZnNldCA8IGxpbmVUb0luZGV4W21pZF0pIHtcbiAgICAgICAgICBtYXggPSBtaWQgLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA+PSBsaW5lVG9JbmRleFttaWQgKyAxXSkge1xuICAgICAgICAgIG1pbiA9IG1pZCArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWluID0gbWlkO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjb2w6IG9mZnNldCAtIGxpbmVUb0luZGV4W21pbl0gKyAxLFxuICAgICAgbGluZTogbWluICsgMVxuICAgIH07XG4gIH1cbiAgbWFwUmVzb2x2ZShmaWxlKSB7XG4gICAgaWYgKC9eXFx3KzpcXC9cXC8vLnRlc3QoZmlsZSkpIHtcbiAgICAgIHJldHVybiBmaWxlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzb2x2ZSQxKHRoaXMubWFwLmNvbnN1bWVyKCkuc291cmNlUm9vdCB8fCB0aGlzLm1hcC5yb290IHx8IFwiLlwiLCBmaWxlKTtcbiAgfVxuICBvcmlnaW4obGluZSwgY29sdW1uLCBlbmRMaW5lLCBlbmRDb2x1bW4pIHtcbiAgICBpZiAoIXRoaXMubWFwKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IGNvbnN1bWVyID0gdGhpcy5tYXAuY29uc3VtZXIoKTtcbiAgICBsZXQgZnJvbSA9IGNvbnN1bWVyLm9yaWdpbmFsUG9zaXRpb25Gb3IoeyBjb2x1bW4sIGxpbmUgfSk7XG4gICAgaWYgKCFmcm9tLnNvdXJjZSkgcmV0dXJuIGZhbHNlO1xuICAgIGxldCB0bztcbiAgICBpZiAodHlwZW9mIGVuZExpbmUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHRvID0gY29uc3VtZXIub3JpZ2luYWxQb3NpdGlvbkZvcih7IGNvbHVtbjogZW5kQ29sdW1uLCBsaW5lOiBlbmRMaW5lIH0pO1xuICAgIH1cbiAgICBsZXQgZnJvbVVybDtcbiAgICBpZiAoaXNBYnNvbHV0ZShmcm9tLnNvdXJjZSkpIHtcbiAgICAgIGZyb21VcmwgPSBwYXRoVG9GaWxlVVJMJDEoZnJvbS5zb3VyY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcm9tVXJsID0gbmV3IFVSTChcbiAgICAgICAgZnJvbS5zb3VyY2UsXG4gICAgICAgIHRoaXMubWFwLmNvbnN1bWVyKCkuc291cmNlUm9vdCB8fCBwYXRoVG9GaWxlVVJMJDEodGhpcy5tYXAubWFwRmlsZSlcbiAgICAgICk7XG4gICAgfVxuICAgIGxldCByZXN1bHQyID0ge1xuICAgICAgY29sdW1uOiBmcm9tLmNvbHVtbixcbiAgICAgIGVuZENvbHVtbjogdG8gJiYgdG8uY29sdW1uLFxuICAgICAgZW5kTGluZTogdG8gJiYgdG8ubGluZSxcbiAgICAgIGxpbmU6IGZyb20ubGluZSxcbiAgICAgIHVybDogZnJvbVVybC50b1N0cmluZygpXG4gICAgfTtcbiAgICBpZiAoZnJvbVVybC5wcm90b2NvbCA9PT0gXCJmaWxlOlwiKSB7XG4gICAgICBpZiAoZmlsZVVSTFRvUGF0aCkge1xuICAgICAgICByZXN1bHQyLmZpbGUgPSBmaWxlVVJMVG9QYXRoKGZyb21VcmwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmaWxlOiBwcm90b2NvbCBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgUG9zdENTUyBidWlsZGApO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc291cmNlID0gY29uc3VtZXIuc291cmNlQ29udGVudEZvcihmcm9tLnNvdXJjZSk7XG4gICAgaWYgKHNvdXJjZSkgcmVzdWx0Mi5zb3VyY2UgPSBzb3VyY2U7XG4gICAgcmV0dXJuIHJlc3VsdDI7XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIGxldCBqc29uID0ge307XG4gICAgZm9yIChsZXQgbmFtZSBvZiBbXCJoYXNCT01cIiwgXCJjc3NcIiwgXCJmaWxlXCIsIFwiaWRcIl0pIHtcbiAgICAgIGlmICh0aGlzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAganNvbltuYW1lXSA9IHRoaXNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm1hcCkge1xuICAgICAganNvbi5tYXAgPSBfX3NwcmVhZFZhbHVlcyh7fSwgdGhpcy5tYXApO1xuICAgICAgaWYgKGpzb24ubWFwLmNvbnN1bWVyQ2FjaGUpIHtcbiAgICAgICAganNvbi5tYXAuY29uc3VtZXJDYWNoZSA9IHZvaWQgMDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGpzb247XG4gIH1cbiAgZ2V0IGZyb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZSB8fCB0aGlzLmlkO1xuICB9XG59O1xudmFyIGlucHV0ID0gSW5wdXQkNDtcbklucHV0JDQuZGVmYXVsdCA9IElucHV0JDQ7XG5pZiAodGVybWluYWxIaWdobGlnaHQgJiYgdGVybWluYWxIaWdobGlnaHQucmVnaXN0ZXJJbnB1dCkge1xuICB0ZXJtaW5hbEhpZ2hsaWdodC5yZWdpc3RlcklucHV0KElucHV0JDQpO1xufVxubGV0IHsgU291cmNlTWFwQ29uc3VtZXIsIFNvdXJjZU1hcEdlbmVyYXRvciB9ID0gcmVxdWlyZSQkMjtcbmxldCB7IGRpcm5hbWUsIHJlbGF0aXZlLCByZXNvbHZlLCBzZXAgfSA9IHJlcXVpcmUkJDI7XG5sZXQgeyBwYXRoVG9GaWxlVVJMIH0gPSByZXF1aXJlJCQyO1xubGV0IElucHV0JDMgPSBpbnB1dDtcbmxldCBzb3VyY2VNYXBBdmFpbGFibGUgPSBCb29sZWFuKFNvdXJjZU1hcENvbnN1bWVyICYmIFNvdXJjZU1hcEdlbmVyYXRvcik7XG5sZXQgcGF0aEF2YWlsYWJsZSA9IEJvb2xlYW4oZGlybmFtZSAmJiByZXNvbHZlICYmIHJlbGF0aXZlICYmIHNlcCk7XG5sZXQgTWFwR2VuZXJhdG9yJDIgPSBjbGFzcyBNYXBHZW5lcmF0b3Ige1xuICBjb25zdHJ1Y3RvcihzdHJpbmdpZnkyLCByb290Miwgb3B0cywgY3NzU3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmdpZnkgPSBzdHJpbmdpZnkyO1xuICAgIHRoaXMubWFwT3B0cyA9IG9wdHMubWFwIHx8IHt9O1xuICAgIHRoaXMucm9vdCA9IHJvb3QyO1xuICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgdGhpcy5jc3MgPSBjc3NTdHJpbmc7XG4gICAgdGhpcy5vcmlnaW5hbENTUyA9IGNzc1N0cmluZztcbiAgICB0aGlzLnVzZXNGaWxlVXJscyA9ICF0aGlzLm1hcE9wdHMuZnJvbSAmJiB0aGlzLm1hcE9wdHMuYWJzb2x1dGU7XG4gICAgdGhpcy5tZW1vaXplZEZpbGVVUkxzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICB0aGlzLm1lbW9pemVkUGF0aHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgIHRoaXMubWVtb2l6ZWRVUkxzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgfVxuICBhZGRBbm5vdGF0aW9uKCkge1xuICAgIGxldCBjb250ZW50O1xuICAgIGlmICh0aGlzLmlzSW5saW5lKCkpIHtcbiAgICAgIGNvbnRlbnQgPSBcImRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyB0aGlzLnRvQmFzZTY0KHRoaXMubWFwLnRvU3RyaW5nKCkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5tYXBPcHRzLmFubm90YXRpb247XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5tYXBPcHRzLmFubm90YXRpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29udGVudCA9IHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uKHRoaXMub3B0cy50bywgdGhpcy5yb290KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IHRoaXMub3V0cHV0RmlsZSgpICsgXCIubWFwXCI7XG4gICAgfVxuICAgIGxldCBlb2wgPSBcIlxcblwiO1xuICAgIGlmICh0aGlzLmNzcy5pbmNsdWRlcyhcIlxcclxcblwiKSkgZW9sID0gXCJcXHJcXG5cIjtcbiAgICB0aGlzLmNzcyArPSBlb2wgKyBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPVwiICsgY29udGVudCArIFwiICovXCI7XG4gIH1cbiAgYXBwbHlQcmV2TWFwcygpIHtcbiAgICBmb3IgKGxldCBwcmV2IG9mIHRoaXMucHJldmlvdXMoKSkge1xuICAgICAgbGV0IGZyb20gPSB0aGlzLnRvVXJsKHRoaXMucGF0aChwcmV2LmZpbGUpKTtcbiAgICAgIGxldCByb290MiA9IHByZXYucm9vdCB8fCBkaXJuYW1lKHByZXYuZmlsZSk7XG4gICAgICBsZXQgbWFwO1xuICAgICAgaWYgKHRoaXMubWFwT3B0cy5zb3VyY2VzQ29udGVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgbWFwID0gbmV3IFNvdXJjZU1hcENvbnN1bWVyKHByZXYudGV4dCk7XG4gICAgICAgIGlmIChtYXAuc291cmNlc0NvbnRlbnQpIHtcbiAgICAgICAgICBtYXAuc291cmNlc0NvbnRlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXAgPSBwcmV2LmNvbnN1bWVyKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm1hcC5hcHBseVNvdXJjZU1hcChtYXAsIGZyb20sIHRoaXMudG9VcmwodGhpcy5wYXRoKHJvb3QyKSkpO1xuICAgIH1cbiAgfVxuICBjbGVhckFubm90YXRpb24oKSB7XG4gICAgaWYgKHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgIGxldCBub2RlMjtcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLnJvb3Qubm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbm9kZTIgPSB0aGlzLnJvb3Qubm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlMi50eXBlICE9PSBcImNvbW1lbnRcIikgY29udGludWU7XG4gICAgICAgIGlmIChub2RlMi50ZXh0LmluZGV4T2YoXCIjIHNvdXJjZU1hcHBpbmdVUkw9XCIpID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5yb290LnJlbW92ZUNoaWxkKGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmNzcykge1xuICAgICAgdGhpcy5jc3MgPSB0aGlzLmNzcy5yZXBsYWNlKC9cXG4qP1xcL1xcKiNbXFxTXFxzXSo/XFwqXFwvJC9nbSwgXCJcIik7XG4gICAgfVxuICB9XG4gIGdlbmVyYXRlKCkge1xuICAgIHRoaXMuY2xlYXJBbm5vdGF0aW9uKCk7XG4gICAgaWYgKHBhdGhBdmFpbGFibGUgJiYgc291cmNlTWFwQXZhaWxhYmxlICYmIHRoaXMuaXNNYXAoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVNYXAoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJlc3VsdDIgPSBcIlwiO1xuICAgICAgdGhpcy5zdHJpbmdpZnkodGhpcy5yb290LCAoaSkgPT4ge1xuICAgICAgICByZXN1bHQyICs9IGk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbcmVzdWx0Ml07XG4gICAgfVxuICB9XG4gIGdlbmVyYXRlTWFwKCkge1xuICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJldmlvdXMoKS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxldCBwcmV2ID0gdGhpcy5wcmV2aW91cygpWzBdLmNvbnN1bWVyKCk7XG4gICAgICBwcmV2LmZpbGUgPSB0aGlzLm91dHB1dEZpbGUoKTtcbiAgICAgIHRoaXMubWFwID0gU291cmNlTWFwR2VuZXJhdG9yLmZyb21Tb3VyY2VNYXAocHJldiwge1xuICAgICAgICBpZ25vcmVJbnZhbGlkTWFwcGluZzogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFwID0gbmV3IFNvdXJjZU1hcEdlbmVyYXRvcih7XG4gICAgICAgIGZpbGU6IHRoaXMub3V0cHV0RmlsZSgpLFxuICAgICAgICBpZ25vcmVJbnZhbGlkTWFwcGluZzogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLm1hcC5hZGRNYXBwaW5nKHtcbiAgICAgICAgZ2VuZXJhdGVkOiB7IGNvbHVtbjogMCwgbGluZTogMSB9LFxuICAgICAgICBvcmlnaW5hbDogeyBjb2x1bW46IDAsIGxpbmU6IDEgfSxcbiAgICAgICAgc291cmNlOiB0aGlzLm9wdHMuZnJvbSA/IHRoaXMudG9VcmwodGhpcy5wYXRoKHRoaXMub3B0cy5mcm9tKSkgOiBcIjxubyBzb3VyY2U+XCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1NvdXJjZXNDb250ZW50KCkpIHRoaXMuc2V0U291cmNlc0NvbnRlbnQoKTtcbiAgICBpZiAodGhpcy5yb290ICYmIHRoaXMucHJldmlvdXMoKS5sZW5ndGggPiAwKSB0aGlzLmFwcGx5UHJldk1hcHMoKTtcbiAgICBpZiAodGhpcy5pc0Fubm90YXRpb24oKSkgdGhpcy5hZGRBbm5vdGF0aW9uKCk7XG4gICAgaWYgKHRoaXMuaXNJbmxpbmUoKSkge1xuICAgICAgcmV0dXJuIFt0aGlzLmNzc107XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbdGhpcy5jc3MsIHRoaXMubWFwXTtcbiAgICB9XG4gIH1cbiAgZ2VuZXJhdGVTdHJpbmcoKSB7XG4gICAgdGhpcy5jc3MgPSBcIlwiO1xuICAgIHRoaXMubWFwID0gbmV3IFNvdXJjZU1hcEdlbmVyYXRvcih7XG4gICAgICBmaWxlOiB0aGlzLm91dHB1dEZpbGUoKSxcbiAgICAgIGlnbm9yZUludmFsaWRNYXBwaW5nOiB0cnVlXG4gICAgfSk7XG4gICAgbGV0IGxpbmUgPSAxO1xuICAgIGxldCBjb2x1bW4gPSAxO1xuICAgIGxldCBub1NvdXJjZSA9IFwiPG5vIHNvdXJjZT5cIjtcbiAgICBsZXQgbWFwcGluZyA9IHtcbiAgICAgIGdlbmVyYXRlZDogeyBjb2x1bW46IDAsIGxpbmU6IDAgfSxcbiAgICAgIG9yaWdpbmFsOiB7IGNvbHVtbjogMCwgbGluZTogMCB9LFxuICAgICAgc291cmNlOiBcIlwiXG4gICAgfTtcbiAgICBsZXQgbGluZXMsIGxhc3Q7XG4gICAgdGhpcy5zdHJpbmdpZnkodGhpcy5yb290LCAoc3RyLCBub2RlMiwgdHlwZSkgPT4ge1xuICAgICAgdGhpcy5jc3MgKz0gc3RyO1xuICAgICAgaWYgKG5vZGUyICYmIHR5cGUgIT09IFwiZW5kXCIpIHtcbiAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWQubGluZSA9IGxpbmU7XG4gICAgICAgIG1hcHBpbmcuZ2VuZXJhdGVkLmNvbHVtbiA9IGNvbHVtbiAtIDE7XG4gICAgICAgIGlmIChub2RlMi5zb3VyY2UgJiYgbm9kZTIuc291cmNlLnN0YXJ0KSB7XG4gICAgICAgICAgbWFwcGluZy5zb3VyY2UgPSB0aGlzLnNvdXJjZVBhdGgobm9kZTIpO1xuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWwubGluZSA9IG5vZGUyLnNvdXJjZS5zdGFydC5saW5lO1xuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWwuY29sdW1uID0gbm9kZTIuc291cmNlLnN0YXJ0LmNvbHVtbiAtIDE7XG4gICAgICAgICAgdGhpcy5tYXAuYWRkTWFwcGluZyhtYXBwaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXBwaW5nLnNvdXJjZSA9IG5vU291cmNlO1xuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWwubGluZSA9IDE7XG4gICAgICAgICAgbWFwcGluZy5vcmlnaW5hbC5jb2x1bW4gPSAwO1xuICAgICAgICAgIHRoaXMubWFwLmFkZE1hcHBpbmcobWFwcGluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpbmVzID0gc3RyLm1hdGNoKC9cXG4vZyk7XG4gICAgICBpZiAobGluZXMpIHtcbiAgICAgICAgbGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIGxhc3QgPSBzdHIubGFzdEluZGV4T2YoXCJcXG5cIik7XG4gICAgICAgIGNvbHVtbiA9IHN0ci5sZW5ndGggLSBsYXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sdW1uICs9IHN0ci5sZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAobm9kZTIgJiYgdHlwZSAhPT0gXCJzdGFydFwiKSB7XG4gICAgICAgIGxldCBwID0gbm9kZTIucGFyZW50IHx8IHsgcmF3czoge30gfTtcbiAgICAgICAgbGV0IGNoaWxkbGVzcyA9IG5vZGUyLnR5cGUgPT09IFwiZGVjbFwiIHx8IG5vZGUyLnR5cGUgPT09IFwiYXRydWxlXCIgJiYgIW5vZGUyLm5vZGVzO1xuICAgICAgICBpZiAoIWNoaWxkbGVzcyB8fCBub2RlMiAhPT0gcC5sYXN0IHx8IHAucmF3cy5zZW1pY29sb24pIHtcbiAgICAgICAgICBpZiAobm9kZTIuc291cmNlICYmIG5vZGUyLnNvdXJjZS5lbmQpIHtcbiAgICAgICAgICAgIG1hcHBpbmcuc291cmNlID0gdGhpcy5zb3VyY2VQYXRoKG5vZGUyKTtcbiAgICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWwubGluZSA9IG5vZGUyLnNvdXJjZS5lbmQubGluZTtcbiAgICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWwuY29sdW1uID0gbm9kZTIuc291cmNlLmVuZC5jb2x1bW4gLSAxO1xuICAgICAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWQubGluZSA9IGxpbmU7XG4gICAgICAgICAgICBtYXBwaW5nLmdlbmVyYXRlZC5jb2x1bW4gPSBjb2x1bW4gLSAyO1xuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTWFwcGluZyhtYXBwaW5nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFwcGluZy5zb3VyY2UgPSBub1NvdXJjZTtcbiAgICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWwubGluZSA9IDE7XG4gICAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsLmNvbHVtbiA9IDA7XG4gICAgICAgICAgICBtYXBwaW5nLmdlbmVyYXRlZC5saW5lID0gbGluZTtcbiAgICAgICAgICAgIG1hcHBpbmcuZ2VuZXJhdGVkLmNvbHVtbiA9IGNvbHVtbiAtIDE7XG4gICAgICAgICAgICB0aGlzLm1hcC5hZGRNYXBwaW5nKG1hcHBpbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGlzQW5ub3RhdGlvbigpIHtcbiAgICBpZiAodGhpcy5pc0lubGluZSgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcmV2aW91cygpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXMoKS5zb21lKChpKSA9PiBpLmFubm90YXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpc0lubGluZSgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMubWFwT3B0cy5pbmxpbmUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcE9wdHMuaW5saW5lO1xuICAgIH1cbiAgICBsZXQgYW5ub3RhdGlvbiA9IHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uO1xuICAgIGlmICh0eXBlb2YgYW5ub3RhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhbm5vdGF0aW9uICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLnByZXZpb3VzKCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcmV2aW91cygpLnNvbWUoKGkpID0+IGkuaW5saW5lKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaXNNYXAoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdHMubWFwICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gISF0aGlzLm9wdHMubWFwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcmV2aW91cygpLmxlbmd0aCA+IDA7XG4gIH1cbiAgaXNTb3VyY2VzQ29udGVudCgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMubWFwT3B0cy5zb3VyY2VzQ29udGVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIHRoaXMubWFwT3B0cy5zb3VyY2VzQ29udGVudDtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJldmlvdXMoKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCkuc29tZSgoaSkgPT4gaS53aXRoQ29udGVudCgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgb3V0cHV0RmlsZSgpIHtcbiAgICBpZiAodGhpcy5vcHRzLnRvKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXRoKHRoaXMub3B0cy50byk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdHMuZnJvbSkge1xuICAgICAgcmV0dXJuIHRoaXMucGF0aCh0aGlzLm9wdHMuZnJvbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcInRvLmNzc1wiO1xuICAgIH1cbiAgfVxuICBwYXRoKGZpbGUpIHtcbiAgICBpZiAodGhpcy5tYXBPcHRzLmFic29sdXRlKSByZXR1cm4gZmlsZTtcbiAgICBpZiAoZmlsZS5jaGFyQ29kZUF0KDApID09PSA2MCkgcmV0dXJuIGZpbGU7XG4gICAgaWYgKC9eXFx3KzpcXC9cXC8vLnRlc3QoZmlsZSkpIHJldHVybiBmaWxlO1xuICAgIGxldCBjYWNoZWQgPSB0aGlzLm1lbW9pemVkUGF0aHMuZ2V0KGZpbGUpO1xuICAgIGlmIChjYWNoZWQpIHJldHVybiBjYWNoZWQ7XG4gICAgbGV0IGZyb20gPSB0aGlzLm9wdHMudG8gPyBkaXJuYW1lKHRoaXMub3B0cy50bykgOiBcIi5cIjtcbiAgICBpZiAodHlwZW9mIHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBmcm9tID0gZGlybmFtZShyZXNvbHZlKGZyb20sIHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uKSk7XG4gICAgfVxuICAgIGxldCBwYXRoID0gcmVsYXRpdmUoZnJvbSwgZmlsZSk7XG4gICAgdGhpcy5tZW1vaXplZFBhdGhzLnNldChmaWxlLCBwYXRoKTtcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuICBwcmV2aW91cygpIHtcbiAgICBpZiAoIXRoaXMucHJldmlvdXNNYXBzKSB7XG4gICAgICB0aGlzLnByZXZpb3VzTWFwcyA9IFtdO1xuICAgICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgICB0aGlzLnJvb3Qud2Fsaygobm9kZTIpID0+IHtcbiAgICAgICAgICBpZiAobm9kZTIuc291cmNlICYmIG5vZGUyLnNvdXJjZS5pbnB1dC5tYXApIHtcbiAgICAgICAgICAgIGxldCBtYXAgPSBub2RlMi5zb3VyY2UuaW5wdXQubWFwO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByZXZpb3VzTWFwcy5pbmNsdWRlcyhtYXApKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJldmlvdXNNYXBzLnB1c2gobWFwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGlucHV0MiA9IG5ldyBJbnB1dCQzKHRoaXMub3JpZ2luYWxDU1MsIHRoaXMub3B0cyk7XG4gICAgICAgIGlmIChpbnB1dDIubWFwKSB0aGlzLnByZXZpb3VzTWFwcy5wdXNoKGlucHV0Mi5tYXApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcmV2aW91c01hcHM7XG4gIH1cbiAgc2V0U291cmNlc0NvbnRlbnQoKSB7XG4gICAgbGV0IGFscmVhZHkgPSB7fTtcbiAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICB0aGlzLnJvb3Qud2Fsaygobm9kZTIpID0+IHtcbiAgICAgICAgaWYgKG5vZGUyLnNvdXJjZSkge1xuICAgICAgICAgIGxldCBmcm9tID0gbm9kZTIuc291cmNlLmlucHV0LmZyb207XG4gICAgICAgICAgaWYgKGZyb20gJiYgIWFscmVhZHlbZnJvbV0pIHtcbiAgICAgICAgICAgIGFscmVhZHlbZnJvbV0gPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGZyb21VcmwgPSB0aGlzLnVzZXNGaWxlVXJscyA/IHRoaXMudG9GaWxlVXJsKGZyb20pIDogdGhpcy50b1VybCh0aGlzLnBhdGgoZnJvbSkpO1xuICAgICAgICAgICAgdGhpcy5tYXAuc2V0U291cmNlQ29udGVudChmcm9tVXJsLCBub2RlMi5zb3VyY2UuaW5wdXQuY3NzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jc3MpIHtcbiAgICAgIGxldCBmcm9tID0gdGhpcy5vcHRzLmZyb20gPyB0aGlzLnRvVXJsKHRoaXMucGF0aCh0aGlzLm9wdHMuZnJvbSkpIDogXCI8bm8gc291cmNlPlwiO1xuICAgICAgdGhpcy5tYXAuc2V0U291cmNlQ29udGVudChmcm9tLCB0aGlzLmNzcyk7XG4gICAgfVxuICB9XG4gIHNvdXJjZVBhdGgobm9kZTIpIHtcbiAgICBpZiAodGhpcy5tYXBPcHRzLmZyb20pIHtcbiAgICAgIHJldHVybiB0aGlzLnRvVXJsKHRoaXMubWFwT3B0cy5mcm9tKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudXNlc0ZpbGVVcmxzKSB7XG4gICAgICByZXR1cm4gdGhpcy50b0ZpbGVVcmwobm9kZTIuc291cmNlLmlucHV0LmZyb20pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy50b1VybCh0aGlzLnBhdGgobm9kZTIuc291cmNlLmlucHV0LmZyb20pKTtcbiAgICB9XG4gIH1cbiAgdG9CYXNlNjQoc3RyKSB7XG4gICAgaWYgKEJ1ZmZlcikge1xuICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHN0cikudG9TdHJpbmcoXCJiYXNlNjRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB3aW5kb3cuYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSkpO1xuICAgIH1cbiAgfVxuICB0b0ZpbGVVcmwocGF0aCkge1xuICAgIGxldCBjYWNoZWQgPSB0aGlzLm1lbW9pemVkRmlsZVVSTHMuZ2V0KHBhdGgpO1xuICAgIGlmIChjYWNoZWQpIHJldHVybiBjYWNoZWQ7XG4gICAgaWYgKHBhdGhUb0ZpbGVVUkwpIHtcbiAgICAgIGxldCBmaWxlVVJMID0gcGF0aFRvRmlsZVVSTChwYXRoKS50b1N0cmluZygpO1xuICAgICAgdGhpcy5tZW1vaXplZEZpbGVVUkxzLnNldChwYXRoLCBmaWxlVVJMKTtcbiAgICAgIHJldHVybiBmaWxlVVJMO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiYG1hcC5hYnNvbHV0ZWAgb3B0aW9uIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBQb3N0Q1NTIGJ1aWxkXCJcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHRvVXJsKHBhdGgpIHtcbiAgICBsZXQgY2FjaGVkID0gdGhpcy5tZW1vaXplZFVSTHMuZ2V0KHBhdGgpO1xuICAgIGlmIChjYWNoZWQpIHJldHVybiBjYWNoZWQ7XG4gICAgaWYgKHNlcCA9PT0gXCJcXFxcXCIpIHtcbiAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpO1xuICAgIH1cbiAgICBsZXQgdXJsID0gZW5jb2RlVVJJKHBhdGgpLnJlcGxhY2UoL1sjP10vZywgZW5jb2RlVVJJQ29tcG9uZW50KTtcbiAgICB0aGlzLm1lbW9pemVkVVJMcy5zZXQocGF0aCwgdXJsKTtcbiAgICByZXR1cm4gdXJsO1xuICB9XG59O1xudmFyIG1hcEdlbmVyYXRvciA9IE1hcEdlbmVyYXRvciQyO1xubGV0IE5vZGUkMiA9IG5vZGU7XG5sZXQgQ29tbWVudCQ0ID0gY2xhc3MgQ29tbWVudCBleHRlbmRzIE5vZGUkMiB7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRzKSB7XG4gICAgc3VwZXIoZGVmYXVsdHMpO1xuICAgIHRoaXMudHlwZSA9IFwiY29tbWVudFwiO1xuICB9XG59O1xudmFyIGNvbW1lbnQgPSBDb21tZW50JDQ7XG5Db21tZW50JDQuZGVmYXVsdCA9IENvbW1lbnQkNDtcbmxldCB7IGlzQ2xlYW46IGlzQ2xlYW4kMSwgbXk6IG15JDEgfSA9IHN5bWJvbHM7XG5sZXQgRGVjbGFyYXRpb24kMyA9IGRlY2xhcmF0aW9uO1xubGV0IENvbW1lbnQkMyA9IGNvbW1lbnQ7XG5sZXQgTm9kZSQxID0gbm9kZTtcbmxldCBwYXJzZSQ0O1xubGV0IFJ1bGUkNDtcbmxldCBBdFJ1bGUkNDtcbmxldCBSb290JDY7XG5mdW5jdGlvbiBjbGVhblNvdXJjZShub2Rlcykge1xuICByZXR1cm4gbm9kZXMubWFwKChpKSA9PiB7XG4gICAgaWYgKGkubm9kZXMpIGkubm9kZXMgPSBjbGVhblNvdXJjZShpLm5vZGVzKTtcbiAgICBkZWxldGUgaS5zb3VyY2U7XG4gICAgcmV0dXJuIGk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbWFya0RpcnR5VXAobm9kZTIpIHtcbiAgbm9kZTJbaXNDbGVhbiQxXSA9IGZhbHNlO1xuICBpZiAobm9kZTIucHJveHlPZi5ub2Rlcykge1xuICAgIGZvciAobGV0IGkgb2Ygbm9kZTIucHJveHlPZi5ub2Rlcykge1xuICAgICAgbWFya0RpcnR5VXAoaSk7XG4gICAgfVxuICB9XG59XG5sZXQgQ29udGFpbmVyJDcgPSBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBOb2RlJDEge1xuICBhcHBlbmQoLi4uY2hpbGRyZW4pIHtcbiAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgbGV0IG5vZGVzID0gdGhpcy5ub3JtYWxpemUoY2hpbGQsIHRoaXMubGFzdCk7XG4gICAgICBmb3IgKGxldCBub2RlMiBvZiBub2RlcykgdGhpcy5wcm94eU9mLm5vZGVzLnB1c2gobm9kZTIpO1xuICAgIH1cbiAgICB0aGlzLm1hcmtEaXJ0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNsZWFuUmF3cyhrZWVwQmV0d2Vlbikge1xuICAgIHN1cGVyLmNsZWFuUmF3cyhrZWVwQmV0d2Vlbik7XG4gICAgaWYgKHRoaXMubm9kZXMpIHtcbiAgICAgIGZvciAobGV0IG5vZGUyIG9mIHRoaXMubm9kZXMpIG5vZGUyLmNsZWFuUmF3cyhrZWVwQmV0d2Vlbik7XG4gICAgfVxuICB9XG4gIGVhY2goY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMucHJveHlPZi5ub2RlcykgcmV0dXJuIHZvaWQgMDtcbiAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLmdldEl0ZXJhdG9yKCk7XG4gICAgbGV0IGluZGV4MiwgcmVzdWx0MjtcbiAgICB3aGlsZSAodGhpcy5pbmRleGVzW2l0ZXJhdG9yXSA8IHRoaXMucHJveHlPZi5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgIGluZGV4MiA9IHRoaXMuaW5kZXhlc1tpdGVyYXRvcl07XG4gICAgICByZXN1bHQyID0gY2FsbGJhY2sodGhpcy5wcm94eU9mLm5vZGVzW2luZGV4Ml0sIGluZGV4Mik7XG4gICAgICBpZiAocmVzdWx0MiA9PT0gZmFsc2UpIGJyZWFrO1xuICAgICAgdGhpcy5pbmRleGVzW2l0ZXJhdG9yXSArPSAxO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5pbmRleGVzW2l0ZXJhdG9yXTtcbiAgICByZXR1cm4gcmVzdWx0MjtcbiAgfVxuICBldmVyeShjb25kaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlcy5ldmVyeShjb25kaXRpb24pO1xuICB9XG4gIGdldEl0ZXJhdG9yKCkge1xuICAgIGlmICghdGhpcy5sYXN0RWFjaCkgdGhpcy5sYXN0RWFjaCA9IDA7XG4gICAgaWYgKCF0aGlzLmluZGV4ZXMpIHRoaXMuaW5kZXhlcyA9IHt9O1xuICAgIHRoaXMubGFzdEVhY2ggKz0gMTtcbiAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLmxhc3RFYWNoO1xuICAgIHRoaXMuaW5kZXhlc1tpdGVyYXRvcl0gPSAwO1xuICAgIHJldHVybiBpdGVyYXRvcjtcbiAgfVxuICBnZXRQcm94eVByb2Nlc3NvcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0KG5vZGUyLCBwcm9wKSB7XG4gICAgICAgIGlmIChwcm9wID09PSBcInByb3h5T2ZcIikge1xuICAgICAgICAgIHJldHVybiBub2RlMjtcbiAgICAgICAgfSBlbHNlIGlmICghbm9kZTJbcHJvcF0pIHtcbiAgICAgICAgICByZXR1cm4gbm9kZTJbcHJvcF07XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gXCJlYWNoXCIgfHwgdHlwZW9mIHByb3AgPT09IFwic3RyaW5nXCIgJiYgcHJvcC5zdGFydHNXaXRoKFwid2Fsa1wiKSkge1xuICAgICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUyW3Byb3BdKFxuICAgICAgICAgICAgICAuLi5hcmdzLm1hcCgoaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKGNoaWxkLCBpbmRleDIpID0+IGkoY2hpbGQudG9Qcm94eSgpLCBpbmRleDIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gXCJldmVyeVwiIHx8IHByb3AgPT09IFwic29tZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIChjYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUyW3Byb3BdKFxuICAgICAgICAgICAgICAoY2hpbGQsIC4uLm90aGVyKSA9PiBjYihjaGlsZC50b1Byb3h5KCksIC4uLm90aGVyKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgcmV0dXJuICgpID0+IG5vZGUyLnJvb3QoKS50b1Byb3h5KCk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gXCJub2Rlc1wiKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUyLm5vZGVzLm1hcCgoaSkgPT4gaS50b1Byb3h5KCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09IFwiZmlyc3RcIiB8fCBwcm9wID09PSBcImxhc3RcIikge1xuICAgICAgICAgIHJldHVybiBub2RlMltwcm9wXS50b1Byb3h5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUyW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2V0KG5vZGUyLCBwcm9wLCB2YWx1ZSkge1xuICAgICAgICBpZiAobm9kZTJbcHJvcF0gPT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgbm9kZTJbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHByb3AgPT09IFwibmFtZVwiIHx8IHByb3AgPT09IFwicGFyYW1zXCIgfHwgcHJvcCA9PT0gXCJzZWxlY3RvclwiKSB7XG4gICAgICAgICAgbm9kZTIubWFya0RpcnR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBpbmRleChjaGlsZCkge1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09IFwibnVtYmVyXCIpIHJldHVybiBjaGlsZDtcbiAgICBpZiAoY2hpbGQucHJveHlPZikgY2hpbGQgPSBjaGlsZC5wcm94eU9mO1xuICAgIHJldHVybiB0aGlzLnByb3h5T2Yubm9kZXMuaW5kZXhPZihjaGlsZCk7XG4gIH1cbiAgaW5zZXJ0QWZ0ZXIoZXhpc3QsIGFkZCkge1xuICAgIGxldCBleGlzdEluZGV4ID0gdGhpcy5pbmRleChleGlzdCk7XG4gICAgbGV0IG5vZGVzID0gdGhpcy5ub3JtYWxpemUoYWRkLCB0aGlzLnByb3h5T2Yubm9kZXNbZXhpc3RJbmRleF0pLnJldmVyc2UoKTtcbiAgICBleGlzdEluZGV4ID0gdGhpcy5pbmRleChleGlzdCk7XG4gICAgZm9yIChsZXQgbm9kZTIgb2Ygbm9kZXMpIHRoaXMucHJveHlPZi5ub2Rlcy5zcGxpY2UoZXhpc3RJbmRleCArIDEsIDAsIG5vZGUyKTtcbiAgICBsZXQgaW5kZXgyO1xuICAgIGZvciAobGV0IGlkIGluIHRoaXMuaW5kZXhlcykge1xuICAgICAgaW5kZXgyID0gdGhpcy5pbmRleGVzW2lkXTtcbiAgICAgIGlmIChleGlzdEluZGV4IDwgaW5kZXgyKSB7XG4gICAgICAgIHRoaXMuaW5kZXhlc1tpZF0gPSBpbmRleDIgKyBub2Rlcy5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubWFya0RpcnR5KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgaW5zZXJ0QmVmb3JlKGV4aXN0LCBhZGQpIHtcbiAgICBsZXQgZXhpc3RJbmRleCA9IHRoaXMuaW5kZXgoZXhpc3QpO1xuICAgIGxldCB0eXBlID0gZXhpc3RJbmRleCA9PT0gMCA/IFwicHJlcGVuZFwiIDogZmFsc2U7XG4gICAgbGV0IG5vZGVzID0gdGhpcy5ub3JtYWxpemUoYWRkLCB0aGlzLnByb3h5T2Yubm9kZXNbZXhpc3RJbmRleF0sIHR5cGUpLnJldmVyc2UoKTtcbiAgICBleGlzdEluZGV4ID0gdGhpcy5pbmRleChleGlzdCk7XG4gICAgZm9yIChsZXQgbm9kZTIgb2Ygbm9kZXMpIHRoaXMucHJveHlPZi5ub2Rlcy5zcGxpY2UoZXhpc3RJbmRleCwgMCwgbm9kZTIpO1xuICAgIGxldCBpbmRleDI7XG4gICAgZm9yIChsZXQgaWQgaW4gdGhpcy5pbmRleGVzKSB7XG4gICAgICBpbmRleDIgPSB0aGlzLmluZGV4ZXNbaWRdO1xuICAgICAgaWYgKGV4aXN0SW5kZXggPD0gaW5kZXgyKSB7XG4gICAgICAgIHRoaXMuaW5kZXhlc1tpZF0gPSBpbmRleDIgKyBub2Rlcy5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubWFya0RpcnR5KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgbm9ybWFsaXplKG5vZGVzLCBzYW1wbGUpIHtcbiAgICBpZiAodHlwZW9mIG5vZGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBub2RlcyA9IGNsZWFuU291cmNlKHBhcnNlJDQobm9kZXMpLm5vZGVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBub2RlcyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgbm9kZXMgPSBbXTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobm9kZXMpKSB7XG4gICAgICBub2RlcyA9IG5vZGVzLnNsaWNlKDApO1xuICAgICAgZm9yIChsZXQgaSBvZiBub2Rlcykge1xuICAgICAgICBpZiAoaS5wYXJlbnQpIGkucGFyZW50LnJlbW92ZUNoaWxkKGksIFwiaWdub3JlXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZXMudHlwZSA9PT0gXCJyb290XCIgJiYgdGhpcy50eXBlICE9PSBcImRvY3VtZW50XCIpIHtcbiAgICAgIG5vZGVzID0gbm9kZXMubm9kZXMuc2xpY2UoMCk7XG4gICAgICBmb3IgKGxldCBpIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChpLnBhcmVudCkgaS5wYXJlbnQucmVtb3ZlQ2hpbGQoaSwgXCJpZ25vcmVcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2Rlcy50eXBlKSB7XG4gICAgICBub2RlcyA9IFtub2Rlc107XG4gICAgfSBlbHNlIGlmIChub2Rlcy5wcm9wKSB7XG4gICAgICBpZiAodHlwZW9mIG5vZGVzLnZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZhbHVlIGZpZWxkIGlzIG1pc3NlZCBpbiBub2RlIGNyZWF0aW9uXCIpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZXMudmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgbm9kZXMudmFsdWUgPSBTdHJpbmcobm9kZXMudmFsdWUpO1xuICAgICAgfVxuICAgICAgbm9kZXMgPSBbbmV3IERlY2xhcmF0aW9uJDMobm9kZXMpXTtcbiAgICB9IGVsc2UgaWYgKG5vZGVzLnNlbGVjdG9yKSB7XG4gICAgICBub2RlcyA9IFtuZXcgUnVsZSQ0KG5vZGVzKV07XG4gICAgfSBlbHNlIGlmIChub2Rlcy5uYW1lKSB7XG4gICAgICBub2RlcyA9IFtuZXcgQXRSdWxlJDQobm9kZXMpXTtcbiAgICB9IGVsc2UgaWYgKG5vZGVzLnRleHQpIHtcbiAgICAgIG5vZGVzID0gW25ldyBDb21tZW50JDMobm9kZXMpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBub2RlIHR5cGUgaW4gbm9kZSBjcmVhdGlvblwiKTtcbiAgICB9XG4gICAgbGV0IHByb2Nlc3NlZCA9IG5vZGVzLm1hcCgoaSkgPT4ge1xuICAgICAgaWYgKCFpW215JDFdKSBDb250YWluZXIucmVidWlsZChpKTtcbiAgICAgIGkgPSBpLnByb3h5T2Y7XG4gICAgICBpZiAoaS5wYXJlbnQpIGkucGFyZW50LnJlbW92ZUNoaWxkKGkpO1xuICAgICAgaWYgKGlbaXNDbGVhbiQxXSkgbWFya0RpcnR5VXAoaSk7XG4gICAgICBpZiAodHlwZW9mIGkucmF3cy5iZWZvcmUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHNhbXBsZSAmJiB0eXBlb2Ygc2FtcGxlLnJhd3MuYmVmb3JlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaS5yYXdzLmJlZm9yZSA9IHNhbXBsZS5yYXdzLmJlZm9yZS5yZXBsYWNlKC9cXFMvZywgXCJcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGkucGFyZW50ID0gdGhpcy5wcm94eU9mO1xuICAgICAgcmV0dXJuIGk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2Nlc3NlZDtcbiAgfVxuICBwcmVwZW5kKC4uLmNoaWxkcmVuKSB7XG4gICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5yZXZlcnNlKCk7XG4gICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGxldCBub2RlcyA9IHRoaXMubm9ybWFsaXplKGNoaWxkLCB0aGlzLmZpcnN0LCBcInByZXBlbmRcIikucmV2ZXJzZSgpO1xuICAgICAgZm9yIChsZXQgbm9kZTIgb2Ygbm9kZXMpIHRoaXMucHJveHlPZi5ub2Rlcy51bnNoaWZ0KG5vZGUyKTtcbiAgICAgIGZvciAobGV0IGlkIGluIHRoaXMuaW5kZXhlcykge1xuICAgICAgICB0aGlzLmluZGV4ZXNbaWRdID0gdGhpcy5pbmRleGVzW2lkXSArIG5vZGVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tYXJrRGlydHkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBwdXNoKGNoaWxkKSB7XG4gICAgY2hpbGQucGFyZW50ID0gdGhpcztcbiAgICB0aGlzLnByb3h5T2Yubm9kZXMucHVzaChjaGlsZCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgcmVtb3ZlQWxsKCkge1xuICAgIGZvciAobGV0IG5vZGUyIG9mIHRoaXMucHJveHlPZi5ub2Rlcykgbm9kZTIucGFyZW50ID0gdm9pZCAwO1xuICAgIHRoaXMucHJveHlPZi5ub2RlcyA9IFtdO1xuICAgIHRoaXMubWFya0RpcnR5KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICBjaGlsZCA9IHRoaXMuaW5kZXgoY2hpbGQpO1xuICAgIHRoaXMucHJveHlPZi5ub2Rlc1tjaGlsZF0ucGFyZW50ID0gdm9pZCAwO1xuICAgIHRoaXMucHJveHlPZi5ub2Rlcy5zcGxpY2UoY2hpbGQsIDEpO1xuICAgIGxldCBpbmRleDI7XG4gICAgZm9yIChsZXQgaWQgaW4gdGhpcy5pbmRleGVzKSB7XG4gICAgICBpbmRleDIgPSB0aGlzLmluZGV4ZXNbaWRdO1xuICAgICAgaWYgKGluZGV4MiA+PSBjaGlsZCkge1xuICAgICAgICB0aGlzLmluZGV4ZXNbaWRdID0gaW5kZXgyIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tYXJrRGlydHkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICByZXBsYWNlVmFsdWVzKHBhdHRlcm4sIG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sgPSBvcHRzO1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLndhbGtEZWNscygoZGVjbCkgPT4ge1xuICAgICAgaWYgKG9wdHMucHJvcHMgJiYgIW9wdHMucHJvcHMuaW5jbHVkZXMoZGVjbC5wcm9wKSkgcmV0dXJuO1xuICAgICAgaWYgKG9wdHMuZmFzdCAmJiAhZGVjbC52YWx1ZS5pbmNsdWRlcyhvcHRzLmZhc3QpKSByZXR1cm47XG4gICAgICBkZWNsLnZhbHVlID0gZGVjbC52YWx1ZS5yZXBsYWNlKHBhdHRlcm4sIGNhbGxiYWNrKTtcbiAgICB9KTtcbiAgICB0aGlzLm1hcmtEaXJ0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHNvbWUoY29uZGl0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXMuc29tZShjb25kaXRpb24pO1xuICB9XG4gIHdhbGsoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKChjaGlsZCwgaSkgPT4ge1xuICAgICAgbGV0IHJlc3VsdDI7XG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHQyID0gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBjaGlsZC5hZGRUb0Vycm9yKGUpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdDIgIT09IGZhbHNlICYmIGNoaWxkLndhbGspIHtcbiAgICAgICAgcmVzdWx0MiA9IGNoaWxkLndhbGsoY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDI7XG4gICAgfSk7XG4gIH1cbiAgd2Fsa0F0UnVsZXMobmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayA9IG5hbWU7XG4gICAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJhdHJ1bGVcIikge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobmFtZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgcmV0dXJuIHRoaXMud2FsaygoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwiYXRydWxlXCIgJiYgbmFtZS50ZXN0KGNoaWxkLm5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLndhbGsoKGNoaWxkLCBpKSA9PiB7XG4gICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJhdHJ1bGVcIiAmJiBjaGlsZC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgd2Fsa0NvbW1lbnRzKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMud2FsaygoY2hpbGQsIGkpID0+IHtcbiAgICAgIGlmIChjaGlsZC50eXBlID09PSBcImNvbW1lbnRcIikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHdhbGtEZWNscyhwcm9wLCBjYWxsYmFjaykge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrID0gcHJvcDtcbiAgICAgIHJldHVybiB0aGlzLndhbGsoKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcImRlY2xcIikge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocHJvcCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgcmV0dXJuIHRoaXMud2FsaygoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwiZGVjbFwiICYmIHByb3AudGVzdChjaGlsZC5wcm9wKSkge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwiZGVjbFwiICYmIGNoaWxkLnByb3AgPT09IHByb3ApIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICB3YWxrUnVsZXMoc2VsZWN0b3IsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sgPSBzZWxlY3RvcjtcbiAgICAgIHJldHVybiB0aGlzLndhbGsoKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcInJ1bGVcIikge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHJldHVybiB0aGlzLndhbGsoKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcInJ1bGVcIiAmJiBzZWxlY3Rvci50ZXN0KGNoaWxkLnNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwicnVsZVwiICYmIGNoaWxkLnNlbGVjdG9yID09PSBzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldCBmaXJzdCgpIHtcbiAgICBpZiAoIXRoaXMucHJveHlPZi5ub2RlcykgcmV0dXJuIHZvaWQgMDtcbiAgICByZXR1cm4gdGhpcy5wcm94eU9mLm5vZGVzWzBdO1xuICB9XG4gIGdldCBsYXN0KCkge1xuICAgIGlmICghdGhpcy5wcm94eU9mLm5vZGVzKSByZXR1cm4gdm9pZCAwO1xuICAgIHJldHVybiB0aGlzLnByb3h5T2Yubm9kZXNbdGhpcy5wcm94eU9mLm5vZGVzLmxlbmd0aCAtIDFdO1xuICB9XG59O1xuQ29udGFpbmVyJDcucmVnaXN0ZXJQYXJzZSA9IChkZXBlbmRhbnQpID0+IHtcbiAgcGFyc2UkNCA9IGRlcGVuZGFudDtcbn07XG5Db250YWluZXIkNy5yZWdpc3RlclJ1bGUgPSAoZGVwZW5kYW50KSA9PiB7XG4gIFJ1bGUkNCA9IGRlcGVuZGFudDtcbn07XG5Db250YWluZXIkNy5yZWdpc3RlckF0UnVsZSA9IChkZXBlbmRhbnQpID0+IHtcbiAgQXRSdWxlJDQgPSBkZXBlbmRhbnQ7XG59O1xuQ29udGFpbmVyJDcucmVnaXN0ZXJSb290ID0gKGRlcGVuZGFudCkgPT4ge1xuICBSb290JDYgPSBkZXBlbmRhbnQ7XG59O1xudmFyIGNvbnRhaW5lciA9IENvbnRhaW5lciQ3O1xuQ29udGFpbmVyJDcuZGVmYXVsdCA9IENvbnRhaW5lciQ3O1xuQ29udGFpbmVyJDcucmVidWlsZCA9IChub2RlMikgPT4ge1xuICBpZiAobm9kZTIudHlwZSA9PT0gXCJhdHJ1bGVcIikge1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihub2RlMiwgQXRSdWxlJDQucHJvdG90eXBlKTtcbiAgfSBlbHNlIGlmIChub2RlMi50eXBlID09PSBcInJ1bGVcIikge1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihub2RlMiwgUnVsZSQ0LnByb3RvdHlwZSk7XG4gIH0gZWxzZSBpZiAobm9kZTIudHlwZSA9PT0gXCJkZWNsXCIpIHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yobm9kZTIsIERlY2xhcmF0aW9uJDMucHJvdG90eXBlKTtcbiAgfSBlbHNlIGlmIChub2RlMi50eXBlID09PSBcImNvbW1lbnRcIikge1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihub2RlMiwgQ29tbWVudCQzLnByb3RvdHlwZSk7XG4gIH0gZWxzZSBpZiAobm9kZTIudHlwZSA9PT0gXCJyb290XCIpIHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yobm9kZTIsIFJvb3QkNi5wcm90b3R5cGUpO1xuICB9XG4gIG5vZGUyW215JDFdID0gdHJ1ZTtcbiAgaWYgKG5vZGUyLm5vZGVzKSB7XG4gICAgbm9kZTIubm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIENvbnRhaW5lciQ3LnJlYnVpbGQoY2hpbGQpO1xuICAgIH0pO1xuICB9XG59O1xubGV0IENvbnRhaW5lciQ2ID0gY29udGFpbmVyO1xubGV0IExhenlSZXN1bHQkNDtcbmxldCBQcm9jZXNzb3IkMztcbmxldCBEb2N1bWVudCQzID0gY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyBDb250YWluZXIkNiB7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRzKSB7XG4gICAgc3VwZXIoX19zcHJlYWRWYWx1ZXMoeyB0eXBlOiBcImRvY3VtZW50XCIgfSwgZGVmYXVsdHMpKTtcbiAgICBpZiAoIXRoaXMubm9kZXMpIHtcbiAgICAgIHRoaXMubm9kZXMgPSBbXTtcbiAgICB9XG4gIH1cbiAgdG9SZXN1bHQob3B0cyA9IHt9KSB7XG4gICAgbGV0IGxhenkgPSBuZXcgTGF6eVJlc3VsdCQ0KG5ldyBQcm9jZXNzb3IkMygpLCB0aGlzLCBvcHRzKTtcbiAgICByZXR1cm4gbGF6eS5zdHJpbmdpZnkoKTtcbiAgfVxufTtcbkRvY3VtZW50JDMucmVnaXN0ZXJMYXp5UmVzdWx0ID0gKGRlcGVuZGFudCkgPT4ge1xuICBMYXp5UmVzdWx0JDQgPSBkZXBlbmRhbnQ7XG59O1xuRG9jdW1lbnQkMy5yZWdpc3RlclByb2Nlc3NvciA9IChkZXBlbmRhbnQpID0+IHtcbiAgUHJvY2Vzc29yJDMgPSBkZXBlbmRhbnQ7XG59O1xudmFyIGRvY3VtZW50JDEgPSBEb2N1bWVudCQzO1xuRG9jdW1lbnQkMy5kZWZhdWx0ID0gRG9jdW1lbnQkMztcbmxldCBwcmludGVkID0ge307XG52YXIgd2Fybk9uY2UkMiA9IGZ1bmN0aW9uIHdhcm5PbmNlKG1lc3NhZ2UpIHtcbiAgaWYgKHByaW50ZWRbbWVzc2FnZV0pIHJldHVybjtcbiAgcHJpbnRlZFttZXNzYWdlXSA9IHRydWU7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlLndhcm4pIHtcbiAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gIH1cbn07XG5sZXQgV2FybmluZyQyID0gY2xhc3MgV2FybmluZyB7XG4gIGNvbnN0cnVjdG9yKHRleHQsIG9wdHMgPSB7fSkge1xuICAgIHRoaXMudHlwZSA9IFwid2FybmluZ1wiO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgaWYgKG9wdHMubm9kZSAmJiBvcHRzLm5vZGUuc291cmNlKSB7XG4gICAgICBsZXQgcmFuZ2UgPSBvcHRzLm5vZGUucmFuZ2VCeShvcHRzKTtcbiAgICAgIHRoaXMubGluZSA9IHJhbmdlLnN0YXJ0LmxpbmU7XG4gICAgICB0aGlzLmNvbHVtbiA9IHJhbmdlLnN0YXJ0LmNvbHVtbjtcbiAgICAgIHRoaXMuZW5kTGluZSA9IHJhbmdlLmVuZC5saW5lO1xuICAgICAgdGhpcy5lbmRDb2x1bW4gPSByYW5nZS5lbmQuY29sdW1uO1xuICAgIH1cbiAgICBmb3IgKGxldCBvcHQgaW4gb3B0cykgdGhpc1tvcHRdID0gb3B0c1tvcHRdO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGUuZXJyb3IodGhpcy50ZXh0LCB7XG4gICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICBwbHVnaW46IHRoaXMucGx1Z2luLFxuICAgICAgICB3b3JkOiB0aGlzLndvcmRcbiAgICAgIH0pLm1lc3NhZ2U7XG4gICAgfVxuICAgIGlmICh0aGlzLnBsdWdpbikge1xuICAgICAgcmV0dXJuIHRoaXMucGx1Z2luICsgXCI6IFwiICsgdGhpcy50ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50ZXh0O1xuICB9XG59O1xudmFyIHdhcm5pbmcgPSBXYXJuaW5nJDI7XG5XYXJuaW5nJDIuZGVmYXVsdCA9IFdhcm5pbmckMjtcbmxldCBXYXJuaW5nJDEgPSB3YXJuaW5nO1xubGV0IFJlc3VsdCQzID0gY2xhc3MgUmVzdWx0IHtcbiAgY29uc3RydWN0b3IocHJvY2Vzc29yMiwgcm9vdDIsIG9wdHMpIHtcbiAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjI7XG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgIHRoaXMucm9vdCA9IHJvb3QyO1xuICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgdGhpcy5jc3MgPSB2b2lkIDA7XG4gICAgdGhpcy5tYXAgPSB2b2lkIDA7XG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3NzO1xuICB9XG4gIHdhcm4odGV4dCwgb3B0cyA9IHt9KSB7XG4gICAgaWYgKCFvcHRzLnBsdWdpbikge1xuICAgICAgaWYgKHRoaXMubGFzdFBsdWdpbiAmJiB0aGlzLmxhc3RQbHVnaW4ucG9zdGNzc1BsdWdpbikge1xuICAgICAgICBvcHRzLnBsdWdpbiA9IHRoaXMubGFzdFBsdWdpbi5wb3N0Y3NzUGx1Z2luO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgd2FybmluZzIgPSBuZXcgV2FybmluZyQxKHRleHQsIG9wdHMpO1xuICAgIHRoaXMubWVzc2FnZXMucHVzaCh3YXJuaW5nMik7XG4gICAgcmV0dXJuIHdhcm5pbmcyO1xuICB9XG4gIHdhcm5pbmdzKCkge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzLmZpbHRlcigoaSkgPT4gaS50eXBlID09PSBcIndhcm5pbmdcIik7XG4gIH1cbiAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3NzO1xuICB9XG59O1xudmFyIHJlc3VsdCA9IFJlc3VsdCQzO1xuUmVzdWx0JDMuZGVmYXVsdCA9IFJlc3VsdCQzO1xuY29uc3QgU0lOR0xFX1FVT1RFID0gXCInXCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IERPVUJMRV9RVU9URSA9ICdcIicuY2hhckNvZGVBdCgwKTtcbmNvbnN0IEJBQ0tTTEFTSCA9IFwiXFxcXFwiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBTTEFTSCA9IFwiL1wiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBORVdMSU5FID0gXCJcXG5cIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgU1BBQ0UgPSBcIiBcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgRkVFRCA9IFwiXFxmXCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IFRBQiA9IFwiXHRcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgQ1IgPSBcIlxcclwiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBPUEVOX1NRVUFSRSA9IFwiW1wiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBDTE9TRV9TUVVBUkUgPSBcIl1cIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgT1BFTl9QQVJFTlRIRVNFUyA9IFwiKFwiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBDTE9TRV9QQVJFTlRIRVNFUyA9IFwiKVwiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBPUEVOX0NVUkxZID0gXCJ7XCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IENMT1NFX0NVUkxZID0gXCJ9XCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IFNFTUlDT0xPTiA9IFwiO1wiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBBU1RFUklTSyA9IFwiKlwiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBDT0xPTiA9IFwiOlwiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBBVCA9IFwiQFwiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBSRV9BVF9FTkQgPSAvW1xcdFxcblxcZlxcciBcIiMnKCkvO1tcXFxcXFxde31dL2c7XG5jb25zdCBSRV9XT1JEX0VORCA9IC9bXFx0XFxuXFxmXFxyICFcIiMnKCk6O0BbXFxcXFxcXXt9XXxcXC8oPz1cXCopL2c7XG5jb25zdCBSRV9CQURfQlJBQ0tFVCA9IC8uW1xcclxcblwiJygvXFxcXF0vO1xuY29uc3QgUkVfSEVYX0VTQ0FQRSA9IC9bXFxkYS1mXS9pO1xudmFyIHRva2VuaXplID0gZnVuY3Rpb24gdG9rZW5pemVyKGlucHV0Miwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBjc3MgPSBpbnB1dDIuY3NzLnZhbHVlT2YoKTtcbiAgbGV0IGlnbm9yZSA9IG9wdGlvbnMuaWdub3JlRXJyb3JzO1xuICBsZXQgY29kZSwgbmV4dCwgcXVvdGUsIGNvbnRlbnQsIGVzY2FwZTtcbiAgbGV0IGVzY2FwZWQsIGVzY2FwZVBvcywgcHJldiwgbiwgY3VycmVudFRva2VuO1xuICBsZXQgbGVuZ3RoID0gY3NzLmxlbmd0aDtcbiAgbGV0IHBvcyA9IDA7XG4gIGxldCBidWZmZXIgPSBbXTtcbiAgbGV0IHJldHVybmVkID0gW107XG4gIGZ1bmN0aW9uIHBvc2l0aW9uKCkge1xuICAgIHJldHVybiBwb3M7XG4gIH1cbiAgZnVuY3Rpb24gdW5jbG9zZWQod2hhdCkge1xuICAgIHRocm93IGlucHV0Mi5lcnJvcihcIlVuY2xvc2VkIFwiICsgd2hhdCwgcG9zKTtcbiAgfVxuICBmdW5jdGlvbiBlbmRPZkZpbGUoKSB7XG4gICAgcmV0dXJuIHJldHVybmVkLmxlbmd0aCA9PT0gMCAmJiBwb3MgPj0gbGVuZ3RoO1xuICB9XG4gIGZ1bmN0aW9uIG5leHRUb2tlbihvcHRzKSB7XG4gICAgaWYgKHJldHVybmVkLmxlbmd0aCkgcmV0dXJuIHJldHVybmVkLnBvcCgpO1xuICAgIGlmIChwb3MgPj0gbGVuZ3RoKSByZXR1cm47XG4gICAgbGV0IGlnbm9yZVVuY2xvc2VkID0gb3B0cyA/IG9wdHMuaWdub3JlVW5jbG9zZWQgOiBmYWxzZTtcbiAgICBjb2RlID0gY3NzLmNoYXJDb2RlQXQocG9zKTtcbiAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgIGNhc2UgTkVXTElORTpcbiAgICAgIGNhc2UgU1BBQ0U6XG4gICAgICBjYXNlIFRBQjpcbiAgICAgIGNhc2UgQ1I6XG4gICAgICBjYXNlIEZFRUQ6IHtcbiAgICAgICAgbmV4dCA9IHBvcztcbiAgICAgICAgZG8ge1xuICAgICAgICAgIG5leHQgKz0gMTtcbiAgICAgICAgICBjb2RlID0gY3NzLmNoYXJDb2RlQXQobmV4dCk7XG4gICAgICAgIH0gd2hpbGUgKGNvZGUgPT09IFNQQUNFIHx8IGNvZGUgPT09IE5FV0xJTkUgfHwgY29kZSA9PT0gVEFCIHx8IGNvZGUgPT09IENSIHx8IGNvZGUgPT09IEZFRUQpO1xuICAgICAgICBjdXJyZW50VG9rZW4gPSBbXCJzcGFjZVwiLCBjc3Muc2xpY2UocG9zLCBuZXh0KV07XG4gICAgICAgIHBvcyA9IG5leHQgLSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgT1BFTl9TUVVBUkU6XG4gICAgICBjYXNlIENMT1NFX1NRVUFSRTpcbiAgICAgIGNhc2UgT1BFTl9DVVJMWTpcbiAgICAgIGNhc2UgQ0xPU0VfQ1VSTFk6XG4gICAgICBjYXNlIENPTE9OOlxuICAgICAgY2FzZSBTRU1JQ09MT046XG4gICAgICBjYXNlIENMT1NFX1BBUkVOVEhFU0VTOiB7XG4gICAgICAgIGxldCBjb250cm9sQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gICAgICAgIGN1cnJlbnRUb2tlbiA9IFtjb250cm9sQ2hhciwgY29udHJvbENoYXIsIHBvc107XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBPUEVOX1BBUkVOVEhFU0VTOiB7XG4gICAgICAgIHByZXYgPSBidWZmZXIubGVuZ3RoID8gYnVmZmVyLnBvcCgpWzFdIDogXCJcIjtcbiAgICAgICAgbiA9IGNzcy5jaGFyQ29kZUF0KHBvcyArIDEpO1xuICAgICAgICBpZiAocHJldiA9PT0gXCJ1cmxcIiAmJiBuICE9PSBTSU5HTEVfUVVPVEUgJiYgbiAhPT0gRE9VQkxFX1FVT1RFICYmIG4gIT09IFNQQUNFICYmIG4gIT09IE5FV0xJTkUgJiYgbiAhPT0gVEFCICYmIG4gIT09IEZFRUQgJiYgbiAhPT0gQ1IpIHtcbiAgICAgICAgICBuZXh0ID0gcG9zO1xuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIG5leHQgPSBjc3MuaW5kZXhPZihcIilcIiwgbmV4dCArIDEpO1xuICAgICAgICAgICAgaWYgKG5leHQgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGlmIChpZ25vcmUgfHwgaWdub3JlVW5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICBuZXh0ID0gcG9zO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVuY2xvc2VkKFwiYnJhY2tldFwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXNjYXBlUG9zID0gbmV4dDtcbiAgICAgICAgICAgIHdoaWxlIChjc3MuY2hhckNvZGVBdChlc2NhcGVQb3MgLSAxKSA9PT0gQkFDS1NMQVNIKSB7XG4gICAgICAgICAgICAgIGVzY2FwZVBvcyAtPSAxO1xuICAgICAgICAgICAgICBlc2NhcGVkID0gIWVzY2FwZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB3aGlsZSAoZXNjYXBlZCk7XG4gICAgICAgICAgY3VycmVudFRva2VuID0gW1wiYnJhY2tldHNcIiwgY3NzLnNsaWNlKHBvcywgbmV4dCArIDEpLCBwb3MsIG5leHRdO1xuICAgICAgICAgIHBvcyA9IG5leHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dCA9IGNzcy5pbmRleE9mKFwiKVwiLCBwb3MgKyAxKTtcbiAgICAgICAgICBjb250ZW50ID0gY3NzLnNsaWNlKHBvcywgbmV4dCArIDEpO1xuICAgICAgICAgIGlmIChuZXh0ID09PSAtMSB8fCBSRV9CQURfQlJBQ0tFVC50ZXN0KGNvbnRlbnQpKSB7XG4gICAgICAgICAgICBjdXJyZW50VG9rZW4gPSBbXCIoXCIsIFwiKFwiLCBwb3NdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50VG9rZW4gPSBbXCJicmFja2V0c1wiLCBjb250ZW50LCBwb3MsIG5leHRdO1xuICAgICAgICAgICAgcG9zID0gbmV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFNJTkdMRV9RVU9URTpcbiAgICAgIGNhc2UgRE9VQkxFX1FVT1RFOiB7XG4gICAgICAgIHF1b3RlID0gY29kZSA9PT0gU0lOR0xFX1FVT1RFID8gXCInXCIgOiAnXCInO1xuICAgICAgICBuZXh0ID0gcG9zO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgZXNjYXBlZCA9IGZhbHNlO1xuICAgICAgICAgIG5leHQgPSBjc3MuaW5kZXhPZihxdW90ZSwgbmV4dCArIDEpO1xuICAgICAgICAgIGlmIChuZXh0ID09PSAtMSkge1xuICAgICAgICAgICAgaWYgKGlnbm9yZSB8fCBpZ25vcmVVbmNsb3NlZCkge1xuICAgICAgICAgICAgICBuZXh0ID0gcG9zICsgMTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB1bmNsb3NlZChcInN0cmluZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZXNjYXBlUG9zID0gbmV4dDtcbiAgICAgICAgICB3aGlsZSAoY3NzLmNoYXJDb2RlQXQoZXNjYXBlUG9zIC0gMSkgPT09IEJBQ0tTTEFTSCkge1xuICAgICAgICAgICAgZXNjYXBlUG9zIC09IDE7XG4gICAgICAgICAgICBlc2NhcGVkID0gIWVzY2FwZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChlc2NhcGVkKTtcbiAgICAgICAgY3VycmVudFRva2VuID0gW1wic3RyaW5nXCIsIGNzcy5zbGljZShwb3MsIG5leHQgKyAxKSwgcG9zLCBuZXh0XTtcbiAgICAgICAgcG9zID0gbmV4dDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIEFUOiB7XG4gICAgICAgIFJFX0FUX0VORC5sYXN0SW5kZXggPSBwb3MgKyAxO1xuICAgICAgICBSRV9BVF9FTkQudGVzdChjc3MpO1xuICAgICAgICBpZiAoUkVfQVRfRU5ELmxhc3RJbmRleCA9PT0gMCkge1xuICAgICAgICAgIG5leHQgPSBjc3MubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0ID0gUkVfQVRfRU5ELmxhc3RJbmRleCAtIDI7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFRva2VuID0gW1wiYXQtd29yZFwiLCBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSksIHBvcywgbmV4dF07XG4gICAgICAgIHBvcyA9IG5leHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBCQUNLU0xBU0g6IHtcbiAgICAgICAgbmV4dCA9IHBvcztcbiAgICAgICAgZXNjYXBlID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKGNzcy5jaGFyQ29kZUF0KG5leHQgKyAxKSA9PT0gQkFDS1NMQVNIKSB7XG4gICAgICAgICAgbmV4dCArPSAxO1xuICAgICAgICAgIGVzY2FwZSA9ICFlc2NhcGU7XG4gICAgICAgIH1cbiAgICAgICAgY29kZSA9IGNzcy5jaGFyQ29kZUF0KG5leHQgKyAxKTtcbiAgICAgICAgaWYgKGVzY2FwZSAmJiBjb2RlICE9PSBTTEFTSCAmJiBjb2RlICE9PSBTUEFDRSAmJiBjb2RlICE9PSBORVdMSU5FICYmIGNvZGUgIT09IFRBQiAmJiBjb2RlICE9PSBDUiAmJiBjb2RlICE9PSBGRUVEKSB7XG4gICAgICAgICAgbmV4dCArPSAxO1xuICAgICAgICAgIGlmIChSRV9IRVhfRVNDQVBFLnRlc3QoY3NzLmNoYXJBdChuZXh0KSkpIHtcbiAgICAgICAgICAgIHdoaWxlIChSRV9IRVhfRVNDQVBFLnRlc3QoY3NzLmNoYXJBdChuZXh0ICsgMSkpKSB7XG4gICAgICAgICAgICAgIG5leHQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjc3MuY2hhckNvZGVBdChuZXh0ICsgMSkgPT09IFNQQUNFKSB7XG4gICAgICAgICAgICAgIG5leHQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFRva2VuID0gW1wid29yZFwiLCBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSksIHBvcywgbmV4dF07XG4gICAgICAgIHBvcyA9IG5leHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBpZiAoY29kZSA9PT0gU0xBU0ggJiYgY3NzLmNoYXJDb2RlQXQocG9zICsgMSkgPT09IEFTVEVSSVNLKSB7XG4gICAgICAgICAgbmV4dCA9IGNzcy5pbmRleE9mKFwiKi9cIiwgcG9zICsgMikgKyAxO1xuICAgICAgICAgIGlmIChuZXh0ID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoaWdub3JlIHx8IGlnbm9yZVVuY2xvc2VkKSB7XG4gICAgICAgICAgICAgIG5leHQgPSBjc3MubGVuZ3RoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdW5jbG9zZWQoXCJjb21tZW50XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJyZW50VG9rZW4gPSBbXCJjb21tZW50XCIsIGNzcy5zbGljZShwb3MsIG5leHQgKyAxKSwgcG9zLCBuZXh0XTtcbiAgICAgICAgICBwb3MgPSBuZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFJFX1dPUkRfRU5ELmxhc3RJbmRleCA9IHBvcyArIDE7XG4gICAgICAgICAgUkVfV09SRF9FTkQudGVzdChjc3MpO1xuICAgICAgICAgIGlmIChSRV9XT1JEX0VORC5sYXN0SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIG5leHQgPSBjc3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dCA9IFJFX1dPUkRfRU5ELmxhc3RJbmRleCAtIDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnRUb2tlbiA9IFtcIndvcmRcIiwgY3NzLnNsaWNlKHBvcywgbmV4dCArIDEpLCBwb3MsIG5leHRdO1xuICAgICAgICAgIGJ1ZmZlci5wdXNoKGN1cnJlbnRUb2tlbik7XG4gICAgICAgICAgcG9zID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcG9zKys7XG4gICAgcmV0dXJuIGN1cnJlbnRUb2tlbjtcbiAgfVxuICBmdW5jdGlvbiBiYWNrKHRva2VuKSB7XG4gICAgcmV0dXJuZWQucHVzaCh0b2tlbik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBiYWNrLFxuICAgIGVuZE9mRmlsZSxcbiAgICBuZXh0VG9rZW4sXG4gICAgcG9zaXRpb25cbiAgfTtcbn07XG5sZXQgQ29udGFpbmVyJDUgPSBjb250YWluZXI7XG5sZXQgQXRSdWxlJDMgPSBjbGFzcyBBdFJ1bGUgZXh0ZW5kcyBDb250YWluZXIkNSB7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRzKSB7XG4gICAgc3VwZXIoZGVmYXVsdHMpO1xuICAgIHRoaXMudHlwZSA9IFwiYXRydWxlXCI7XG4gIH1cbiAgYXBwZW5kKC4uLmNoaWxkcmVuKSB7XG4gICAgaWYgKCF0aGlzLnByb3h5T2Yubm9kZXMpIHRoaXMubm9kZXMgPSBbXTtcbiAgICByZXR1cm4gc3VwZXIuYXBwZW5kKC4uLmNoaWxkcmVuKTtcbiAgfVxuICBwcmVwZW5kKC4uLmNoaWxkcmVuKSB7XG4gICAgaWYgKCF0aGlzLnByb3h5T2Yubm9kZXMpIHRoaXMubm9kZXMgPSBbXTtcbiAgICByZXR1cm4gc3VwZXIucHJlcGVuZCguLi5jaGlsZHJlbik7XG4gIH1cbn07XG52YXIgYXRSdWxlID0gQXRSdWxlJDM7XG5BdFJ1bGUkMy5kZWZhdWx0ID0gQXRSdWxlJDM7XG5Db250YWluZXIkNS5yZWdpc3RlckF0UnVsZShBdFJ1bGUkMyk7XG5sZXQgQ29udGFpbmVyJDQgPSBjb250YWluZXI7XG5sZXQgTGF6eVJlc3VsdCQzO1xubGV0IFByb2Nlc3NvciQyO1xubGV0IFJvb3QkNSA9IGNsYXNzIFJvb3QgZXh0ZW5kcyBDb250YWluZXIkNCB7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRzKSB7XG4gICAgc3VwZXIoZGVmYXVsdHMpO1xuICAgIHRoaXMudHlwZSA9IFwicm9vdFwiO1xuICAgIGlmICghdGhpcy5ub2RlcykgdGhpcy5ub2RlcyA9IFtdO1xuICB9XG4gIG5vcm1hbGl6ZShjaGlsZCwgc2FtcGxlLCB0eXBlKSB7XG4gICAgbGV0IG5vZGVzID0gc3VwZXIubm9ybWFsaXplKGNoaWxkKTtcbiAgICBpZiAoc2FtcGxlKSB7XG4gICAgICBpZiAodHlwZSA9PT0gXCJwcmVwZW5kXCIpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHNhbXBsZS5yYXdzLmJlZm9yZSA9IHRoaXMubm9kZXNbMV0ucmF3cy5iZWZvcmU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIHNhbXBsZS5yYXdzLmJlZm9yZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmZpcnN0ICE9PSBzYW1wbGUpIHtcbiAgICAgICAgZm9yIChsZXQgbm9kZTIgb2Ygbm9kZXMpIHtcbiAgICAgICAgICBub2RlMi5yYXdzLmJlZm9yZSA9IHNhbXBsZS5yYXdzLmJlZm9yZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgcmVtb3ZlQ2hpbGQoY2hpbGQsIGlnbm9yZSkge1xuICAgIGxldCBpbmRleDIgPSB0aGlzLmluZGV4KGNoaWxkKTtcbiAgICBpZiAoIWlnbm9yZSAmJiBpbmRleDIgPT09IDAgJiYgdGhpcy5ub2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLm5vZGVzWzFdLnJhd3MuYmVmb3JlID0gdGhpcy5ub2Rlc1tpbmRleDJdLnJhd3MuYmVmb3JlO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICB9XG4gIHRvUmVzdWx0KG9wdHMgPSB7fSkge1xuICAgIGxldCBsYXp5ID0gbmV3IExhenlSZXN1bHQkMyhuZXcgUHJvY2Vzc29yJDIoKSwgdGhpcywgb3B0cyk7XG4gICAgcmV0dXJuIGxhenkuc3RyaW5naWZ5KCk7XG4gIH1cbn07XG5Sb290JDUucmVnaXN0ZXJMYXp5UmVzdWx0ID0gKGRlcGVuZGFudCkgPT4ge1xuICBMYXp5UmVzdWx0JDMgPSBkZXBlbmRhbnQ7XG59O1xuUm9vdCQ1LnJlZ2lzdGVyUHJvY2Vzc29yID0gKGRlcGVuZGFudCkgPT4ge1xuICBQcm9jZXNzb3IkMiA9IGRlcGVuZGFudDtcbn07XG52YXIgcm9vdCA9IFJvb3QkNTtcblJvb3QkNS5kZWZhdWx0ID0gUm9vdCQ1O1xuQ29udGFpbmVyJDQucmVnaXN0ZXJSb290KFJvb3QkNSk7XG5sZXQgbGlzdCQyID0ge1xuICBjb21tYShzdHJpbmcpIHtcbiAgICByZXR1cm4gbGlzdCQyLnNwbGl0KHN0cmluZywgW1wiLFwiXSwgdHJ1ZSk7XG4gIH0sXG4gIHNwYWNlKHN0cmluZykge1xuICAgIGxldCBzcGFjZXMgPSBbXCIgXCIsIFwiXFxuXCIsIFwiXHRcIl07XG4gICAgcmV0dXJuIGxpc3QkMi5zcGxpdChzdHJpbmcsIHNwYWNlcyk7XG4gIH0sXG4gIHNwbGl0KHN0cmluZywgc2VwYXJhdG9ycywgbGFzdCkge1xuICAgIGxldCBhcnJheSA9IFtdO1xuICAgIGxldCBjdXJyZW50ID0gXCJcIjtcbiAgICBsZXQgc3BsaXQgPSBmYWxzZTtcbiAgICBsZXQgZnVuYyA9IDA7XG4gICAgbGV0IGluUXVvdGUgPSBmYWxzZTtcbiAgICBsZXQgcHJldlF1b3RlID0gXCJcIjtcbiAgICBsZXQgZXNjYXBlID0gZmFsc2U7XG4gICAgZm9yIChsZXQgbGV0dGVyIG9mIHN0cmluZykge1xuICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICBlc2NhcGUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSBcIlxcXFxcIikge1xuICAgICAgICBlc2NhcGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChpblF1b3RlKSB7XG4gICAgICAgIGlmIChsZXR0ZXIgPT09IHByZXZRdW90ZSkge1xuICAgICAgICAgIGluUXVvdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICdcIicgfHwgbGV0dGVyID09PSBcIidcIikge1xuICAgICAgICBpblF1b3RlID0gdHJ1ZTtcbiAgICAgICAgcHJldlF1b3RlID0gbGV0dGVyO1xuICAgICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09IFwiKFwiKSB7XG4gICAgICAgIGZ1bmMgKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSBcIilcIikge1xuICAgICAgICBpZiAoZnVuYyA+IDApIGZ1bmMgLT0gMTtcbiAgICAgIH0gZWxzZSBpZiAoZnVuYyA9PT0gMCkge1xuICAgICAgICBpZiAoc2VwYXJhdG9ycy5pbmNsdWRlcyhsZXR0ZXIpKSBzcGxpdCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoc3BsaXQpIHtcbiAgICAgICAgaWYgKGN1cnJlbnQgIT09IFwiXCIpIGFycmF5LnB1c2goY3VycmVudC50cmltKCkpO1xuICAgICAgICBjdXJyZW50ID0gXCJcIjtcbiAgICAgICAgc3BsaXQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnQgKz0gbGV0dGVyO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGFzdCB8fCBjdXJyZW50ICE9PSBcIlwiKSBhcnJheS5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cbn07XG52YXIgbGlzdF8xID0gbGlzdCQyO1xubGlzdCQyLmRlZmF1bHQgPSBsaXN0JDI7XG5sZXQgQ29udGFpbmVyJDMgPSBjb250YWluZXI7XG5sZXQgbGlzdCQxID0gbGlzdF8xO1xubGV0IFJ1bGUkMyA9IGNsYXNzIFJ1bGUgZXh0ZW5kcyBDb250YWluZXIkMyB7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRzKSB7XG4gICAgc3VwZXIoZGVmYXVsdHMpO1xuICAgIHRoaXMudHlwZSA9IFwicnVsZVwiO1xuICAgIGlmICghdGhpcy5ub2RlcykgdGhpcy5ub2RlcyA9IFtdO1xuICB9XG4gIGdldCBzZWxlY3RvcnMoKSB7XG4gICAgcmV0dXJuIGxpc3QkMS5jb21tYSh0aGlzLnNlbGVjdG9yKTtcbiAgfVxuICBzZXQgc2VsZWN0b3JzKHZhbHVlcykge1xuICAgIGxldCBtYXRjaCA9IHRoaXMuc2VsZWN0b3IgPyB0aGlzLnNlbGVjdG9yLm1hdGNoKC8sXFxzKi8pIDogbnVsbDtcbiAgICBsZXQgc2VwMiA9IG1hdGNoID8gbWF0Y2hbMF0gOiBcIixcIiArIHRoaXMucmF3KFwiYmV0d2VlblwiLCBcImJlZm9yZU9wZW5cIik7XG4gICAgdGhpcy5zZWxlY3RvciA9IHZhbHVlcy5qb2luKHNlcDIpO1xuICB9XG59O1xudmFyIHJ1bGUgPSBSdWxlJDM7XG5SdWxlJDMuZGVmYXVsdCA9IFJ1bGUkMztcbkNvbnRhaW5lciQzLnJlZ2lzdGVyUnVsZShSdWxlJDMpO1xubGV0IERlY2xhcmF0aW9uJDIgPSBkZWNsYXJhdGlvbjtcbmxldCB0b2tlbml6ZXIyID0gdG9rZW5pemU7XG5sZXQgQ29tbWVudCQyID0gY29tbWVudDtcbmxldCBBdFJ1bGUkMiA9IGF0UnVsZTtcbmxldCBSb290JDQgPSByb290O1xubGV0IFJ1bGUkMiA9IHJ1bGU7XG5jb25zdCBTQUZFX0NPTU1FTlRfTkVJR0hCT1IgPSB7XG4gIGVtcHR5OiB0cnVlLFxuICBzcGFjZTogdHJ1ZVxufTtcbmZ1bmN0aW9uIGZpbmRMYXN0V2l0aFBvc2l0aW9uKHRva2Vucykge1xuICBmb3IgKGxldCBpID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IHRva2VuID0gdG9rZW5zW2ldO1xuICAgIGxldCBwb3MgPSB0b2tlblszXSB8fCB0b2tlblsyXTtcbiAgICBpZiAocG9zKSByZXR1cm4gcG9zO1xuICB9XG59XG5sZXQgUGFyc2VyJDEgPSBjbGFzcyBQYXJzZXIge1xuICBjb25zdHJ1Y3RvcihpbnB1dDIpIHtcbiAgICB0aGlzLmlucHV0ID0gaW5wdXQyO1xuICAgIHRoaXMucm9vdCA9IG5ldyBSb290JDQoKTtcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnJvb3Q7XG4gICAgdGhpcy5zcGFjZXMgPSBcIlwiO1xuICAgIHRoaXMuc2VtaWNvbG9uID0gZmFsc2U7XG4gICAgdGhpcy5jcmVhdGVUb2tlbml6ZXIoKTtcbiAgICB0aGlzLnJvb3Quc291cmNlID0geyBpbnB1dDogaW5wdXQyLCBzdGFydDogeyBjb2x1bW46IDEsIGxpbmU6IDEsIG9mZnNldDogMCB9IH07XG4gIH1cbiAgYXRydWxlKHRva2VuKSB7XG4gICAgbGV0IG5vZGUyID0gbmV3IEF0UnVsZSQyKCk7XG4gICAgbm9kZTIubmFtZSA9IHRva2VuWzFdLnNsaWNlKDEpO1xuICAgIGlmIChub2RlMi5uYW1lID09PSBcIlwiKSB7XG4gICAgICB0aGlzLnVubmFtZWRBdHJ1bGUobm9kZTIsIHRva2VuKTtcbiAgICB9XG4gICAgdGhpcy5pbml0KG5vZGUyLCB0b2tlblsyXSk7XG4gICAgbGV0IHR5cGU7XG4gICAgbGV0IHByZXY7XG4gICAgbGV0IHNoaWZ0O1xuICAgIGxldCBsYXN0ID0gZmFsc2U7XG4gICAgbGV0IG9wZW4gPSBmYWxzZTtcbiAgICBsZXQgcGFyYW1zID0gW107XG4gICAgbGV0IGJyYWNrZXRzID0gW107XG4gICAgd2hpbGUgKCF0aGlzLnRva2VuaXplci5lbmRPZkZpbGUoKSkge1xuICAgICAgdG9rZW4gPSB0aGlzLnRva2VuaXplci5uZXh0VG9rZW4oKTtcbiAgICAgIHR5cGUgPSB0b2tlblswXTtcbiAgICAgIGlmICh0eXBlID09PSBcIihcIiB8fCB0eXBlID09PSBcIltcIikge1xuICAgICAgICBicmFja2V0cy5wdXNoKHR5cGUgPT09IFwiKFwiID8gXCIpXCIgOiBcIl1cIik7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwie1wiICYmIGJyYWNrZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYnJhY2tldHMucHVzaChcIn1cIik7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IGJyYWNrZXRzW2JyYWNrZXRzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgIGJyYWNrZXRzLnBvcCgpO1xuICAgICAgfVxuICAgICAgaWYgKGJyYWNrZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gXCI7XCIpIHtcbiAgICAgICAgICBub2RlMi5zb3VyY2UuZW5kID0gdGhpcy5nZXRQb3NpdGlvbih0b2tlblsyXSk7XG4gICAgICAgICAgbm9kZTIuc291cmNlLmVuZC5vZmZzZXQrKztcbiAgICAgICAgICB0aGlzLnNlbWljb2xvbiA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICBvcGVuID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIn1cIikge1xuICAgICAgICAgIGlmIChwYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2hpZnQgPSBwYXJhbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHByZXYgPSBwYXJhbXNbc2hpZnRdO1xuICAgICAgICAgICAgd2hpbGUgKHByZXYgJiYgcHJldlswXSA9PT0gXCJzcGFjZVwiKSB7XG4gICAgICAgICAgICAgIHByZXYgPSBwYXJhbXNbLS1zaGlmdF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgICAgICBub2RlMi5zb3VyY2UuZW5kID0gdGhpcy5nZXRQb3NpdGlvbihwcmV2WzNdIHx8IHByZXZbMl0pO1xuICAgICAgICAgICAgICBub2RlMi5zb3VyY2UuZW5kLm9mZnNldCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmVuZCh0b2tlbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zLnB1c2godG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMucHVzaCh0b2tlbik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50b2tlbml6ZXIuZW5kT2ZGaWxlKCkpIHtcbiAgICAgICAgbGFzdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBub2RlMi5yYXdzLmJldHdlZW4gPSB0aGlzLnNwYWNlc0FuZENvbW1lbnRzRnJvbUVuZChwYXJhbXMpO1xuICAgIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgICBub2RlMi5yYXdzLmFmdGVyTmFtZSA9IHRoaXMuc3BhY2VzQW5kQ29tbWVudHNGcm9tU3RhcnQocGFyYW1zKTtcbiAgICAgIHRoaXMucmF3KG5vZGUyLCBcInBhcmFtc1wiLCBwYXJhbXMpO1xuICAgICAgaWYgKGxhc3QpIHtcbiAgICAgICAgdG9rZW4gPSBwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdO1xuICAgICAgICBub2RlMi5zb3VyY2UuZW5kID0gdGhpcy5nZXRQb3NpdGlvbih0b2tlblszXSB8fCB0b2tlblsyXSk7XG4gICAgICAgIG5vZGUyLnNvdXJjZS5lbmQub2Zmc2V0Kys7XG4gICAgICAgIHRoaXMuc3BhY2VzID0gbm9kZTIucmF3cy5iZXR3ZWVuO1xuICAgICAgICBub2RlMi5yYXdzLmJldHdlZW4gPSBcIlwiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBub2RlMi5yYXdzLmFmdGVyTmFtZSA9IFwiXCI7XG4gICAgICBub2RlMi5wYXJhbXMgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob3Blbikge1xuICAgICAgbm9kZTIubm9kZXMgPSBbXTtcbiAgICAgIHRoaXMuY3VycmVudCA9IG5vZGUyO1xuICAgIH1cbiAgfVxuICBjaGVja01pc3NlZFNlbWljb2xvbih0b2tlbnMpIHtcbiAgICBsZXQgY29sb24gPSB0aGlzLmNvbG9uKHRva2Vucyk7XG4gICAgaWYgKGNvbG9uID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIGxldCBmb3VuZGVkID0gMDtcbiAgICBsZXQgdG9rZW47XG4gICAgZm9yIChsZXQgaiA9IGNvbG9uIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2pdO1xuICAgICAgaWYgKHRva2VuWzBdICE9PSBcInNwYWNlXCIpIHtcbiAgICAgICAgZm91bmRlZCArPSAxO1xuICAgICAgICBpZiAoZm91bmRlZCA9PT0gMikgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IHRoaXMuaW5wdXQuZXJyb3IoXG4gICAgICBcIk1pc3NlZCBzZW1pY29sb25cIixcbiAgICAgIHRva2VuWzBdID09PSBcIndvcmRcIiA/IHRva2VuWzNdICsgMSA6IHRva2VuWzJdXG4gICAgKTtcbiAgfVxuICBjb2xvbih0b2tlbnMpIHtcbiAgICBsZXQgYnJhY2tldHMgPSAwO1xuICAgIGxldCB0b2tlbiwgdHlwZSwgcHJldjtcbiAgICBmb3IgKGxldCBbaSwgZWxlbWVudF0gb2YgdG9rZW5zLmVudHJpZXMoKSkge1xuICAgICAgdG9rZW4gPSBlbGVtZW50O1xuICAgICAgdHlwZSA9IHRva2VuWzBdO1xuICAgICAgaWYgKHR5cGUgPT09IFwiKFwiKSB7XG4gICAgICAgIGJyYWNrZXRzICs9IDE7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gXCIpXCIpIHtcbiAgICAgICAgYnJhY2tldHMgLT0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChicmFja2V0cyA9PT0gMCAmJiB0eXBlID09PSBcIjpcIikge1xuICAgICAgICBpZiAoIXByZXYpIHtcbiAgICAgICAgICB0aGlzLmRvdWJsZUNvbG9uKHRva2VuKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2WzBdID09PSBcIndvcmRcIiAmJiBwcmV2WzFdID09PSBcInByb2dpZFwiKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHByZXYgPSB0b2tlbjtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbW1lbnQodG9rZW4pIHtcbiAgICBsZXQgbm9kZTIgPSBuZXcgQ29tbWVudCQyKCk7XG4gICAgdGhpcy5pbml0KG5vZGUyLCB0b2tlblsyXSk7XG4gICAgbm9kZTIuc291cmNlLmVuZCA9IHRoaXMuZ2V0UG9zaXRpb24odG9rZW5bM10gfHwgdG9rZW5bMl0pO1xuICAgIG5vZGUyLnNvdXJjZS5lbmQub2Zmc2V0Kys7XG4gICAgbGV0IHRleHQgPSB0b2tlblsxXS5zbGljZSgyLCAtMik7XG4gICAgaWYgKC9eXFxzKiQvLnRlc3QodGV4dCkpIHtcbiAgICAgIG5vZGUyLnRleHQgPSBcIlwiO1xuICAgICAgbm9kZTIucmF3cy5sZWZ0ID0gdGV4dDtcbiAgICAgIG5vZGUyLnJhd3MucmlnaHQgPSBcIlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9eKFxccyopKFteXSpcXFMpKFxccyopJC8pO1xuICAgICAgbm9kZTIudGV4dCA9IG1hdGNoWzJdO1xuICAgICAgbm9kZTIucmF3cy5sZWZ0ID0gbWF0Y2hbMV07XG4gICAgICBub2RlMi5yYXdzLnJpZ2h0ID0gbWF0Y2hbM107XG4gICAgfVxuICB9XG4gIGNyZWF0ZVRva2VuaXplcigpIHtcbiAgICB0aGlzLnRva2VuaXplciA9IHRva2VuaXplcjIodGhpcy5pbnB1dCk7XG4gIH1cbiAgZGVjbCh0b2tlbnMsIGN1c3RvbVByb3BlcnR5KSB7XG4gICAgbGV0IG5vZGUyID0gbmV3IERlY2xhcmF0aW9uJDIoKTtcbiAgICB0aGlzLmluaXQobm9kZTIsIHRva2Vuc1swXVsyXSk7XG4gICAgbGV0IGxhc3QgPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgIGlmIChsYXN0WzBdID09PSBcIjtcIikge1xuICAgICAgdGhpcy5zZW1pY29sb24gPSB0cnVlO1xuICAgICAgdG9rZW5zLnBvcCgpO1xuICAgIH1cbiAgICBub2RlMi5zb3VyY2UuZW5kID0gdGhpcy5nZXRQb3NpdGlvbihcbiAgICAgIGxhc3RbM10gfHwgbGFzdFsyXSB8fCBmaW5kTGFzdFdpdGhQb3NpdGlvbih0b2tlbnMpXG4gICAgKTtcbiAgICBub2RlMi5zb3VyY2UuZW5kLm9mZnNldCsrO1xuICAgIHdoaWxlICh0b2tlbnNbMF1bMF0gIT09IFwid29yZFwiKSB7XG4gICAgICBpZiAodG9rZW5zLmxlbmd0aCA9PT0gMSkgdGhpcy51bmtub3duV29yZCh0b2tlbnMpO1xuICAgICAgbm9kZTIucmF3cy5iZWZvcmUgKz0gdG9rZW5zLnNoaWZ0KClbMV07XG4gICAgfVxuICAgIG5vZGUyLnNvdXJjZS5zdGFydCA9IHRoaXMuZ2V0UG9zaXRpb24odG9rZW5zWzBdWzJdKTtcbiAgICBub2RlMi5wcm9wID0gXCJcIjtcbiAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkge1xuICAgICAgbGV0IHR5cGUgPSB0b2tlbnNbMF1bMF07XG4gICAgICBpZiAodHlwZSA9PT0gXCI6XCIgfHwgdHlwZSA9PT0gXCJzcGFjZVwiIHx8IHR5cGUgPT09IFwiY29tbWVudFwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbm9kZTIucHJvcCArPSB0b2tlbnMuc2hpZnQoKVsxXTtcbiAgICB9XG4gICAgbm9kZTIucmF3cy5iZXR3ZWVuID0gXCJcIjtcbiAgICBsZXQgdG9rZW47XG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgIHRva2VuID0gdG9rZW5zLnNoaWZ0KCk7XG4gICAgICBpZiAodG9rZW5bMF0gPT09IFwiOlwiKSB7XG4gICAgICAgIG5vZGUyLnJhd3MuYmV0d2VlbiArPSB0b2tlblsxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodG9rZW5bMF0gPT09IFwid29yZFwiICYmIC9cXHcvLnRlc3QodG9rZW5bMV0pKSB7XG4gICAgICAgICAgdGhpcy51bmtub3duV29yZChbdG9rZW5dKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlMi5yYXdzLmJldHdlZW4gKz0gdG9rZW5bMV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChub2RlMi5wcm9wWzBdID09PSBcIl9cIiB8fCBub2RlMi5wcm9wWzBdID09PSBcIipcIikge1xuICAgICAgbm9kZTIucmF3cy5iZWZvcmUgKz0gbm9kZTIucHJvcFswXTtcbiAgICAgIG5vZGUyLnByb3AgPSBub2RlMi5wcm9wLnNsaWNlKDEpO1xuICAgIH1cbiAgICBsZXQgZmlyc3RTcGFjZXMgPSBbXTtcbiAgICBsZXQgbmV4dDtcbiAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkge1xuICAgICAgbmV4dCA9IHRva2Vuc1swXVswXTtcbiAgICAgIGlmIChuZXh0ICE9PSBcInNwYWNlXCIgJiYgbmV4dCAhPT0gXCJjb21tZW50XCIpIGJyZWFrO1xuICAgICAgZmlyc3RTcGFjZXMucHVzaCh0b2tlbnMuc2hpZnQoKSk7XG4gICAgfVxuICAgIHRoaXMucHJlY2hlY2tNaXNzZWRTZW1pY29sb24odG9rZW5zKTtcbiAgICBmb3IgKGxldCBpID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgIGlmICh0b2tlblsxXS50b0xvd2VyQ2FzZSgpID09PSBcIiFpbXBvcnRhbnRcIikge1xuICAgICAgICBub2RlMi5pbXBvcnRhbnQgPSB0cnVlO1xuICAgICAgICBsZXQgc3RyaW5nID0gdGhpcy5zdHJpbmdGcm9tKHRva2VucywgaSk7XG4gICAgICAgIHN0cmluZyA9IHRoaXMuc3BhY2VzRnJvbUVuZCh0b2tlbnMpICsgc3RyaW5nO1xuICAgICAgICBpZiAoc3RyaW5nICE9PSBcIiAhaW1wb3J0YW50XCIpIG5vZGUyLnJhd3MuaW1wb3J0YW50ID0gc3RyaW5nO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAodG9rZW5bMV0udG9Mb3dlckNhc2UoKSA9PT0gXCJpbXBvcnRhbnRcIikge1xuICAgICAgICBsZXQgY2FjaGUgPSB0b2tlbnMuc2xpY2UoMCk7XG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBqID0gaTsgaiA+IDA7IGotLSkge1xuICAgICAgICAgIGxldCB0eXBlID0gY2FjaGVbal1bMF07XG4gICAgICAgICAgaWYgKHN0ci50cmltKCkuaW5kZXhPZihcIiFcIikgPT09IDAgJiYgdHlwZSAhPT0gXCJzcGFjZVwiKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RyID0gY2FjaGUucG9wKClbMV0gKyBzdHI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ci50cmltKCkuaW5kZXhPZihcIiFcIikgPT09IDApIHtcbiAgICAgICAgICBub2RlMi5pbXBvcnRhbnQgPSB0cnVlO1xuICAgICAgICAgIG5vZGUyLnJhd3MuaW1wb3J0YW50ID0gc3RyO1xuICAgICAgICAgIHRva2VucyA9IGNhY2hlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodG9rZW5bMF0gIT09IFwic3BhY2VcIiAmJiB0b2tlblswXSAhPT0gXCJjb21tZW50XCIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBoYXNXb3JkID0gdG9rZW5zLnNvbWUoKGkpID0+IGlbMF0gIT09IFwic3BhY2VcIiAmJiBpWzBdICE9PSBcImNvbW1lbnRcIik7XG4gICAgaWYgKGhhc1dvcmQpIHtcbiAgICAgIG5vZGUyLnJhd3MuYmV0d2VlbiArPSBmaXJzdFNwYWNlcy5tYXAoKGkpID0+IGlbMV0pLmpvaW4oXCJcIik7XG4gICAgICBmaXJzdFNwYWNlcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnJhdyhub2RlMiwgXCJ2YWx1ZVwiLCBmaXJzdFNwYWNlcy5jb25jYXQodG9rZW5zKSwgY3VzdG9tUHJvcGVydHkpO1xuICAgIGlmIChub2RlMi52YWx1ZS5pbmNsdWRlcyhcIjpcIikgJiYgIWN1c3RvbVByb3BlcnR5KSB7XG4gICAgICB0aGlzLmNoZWNrTWlzc2VkU2VtaWNvbG9uKHRva2Vucyk7XG4gICAgfVxuICB9XG4gIGRvdWJsZUNvbG9uKHRva2VuKSB7XG4gICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcihcbiAgICAgIFwiRG91YmxlIGNvbG9uXCIsXG4gICAgICB7IG9mZnNldDogdG9rZW5bMl0gfSxcbiAgICAgIHsgb2Zmc2V0OiB0b2tlblsyXSArIHRva2VuWzFdLmxlbmd0aCB9XG4gICAgKTtcbiAgfVxuICBlbXB0eVJ1bGUodG9rZW4pIHtcbiAgICBsZXQgbm9kZTIgPSBuZXcgUnVsZSQyKCk7XG4gICAgdGhpcy5pbml0KG5vZGUyLCB0b2tlblsyXSk7XG4gICAgbm9kZTIuc2VsZWN0b3IgPSBcIlwiO1xuICAgIG5vZGUyLnJhd3MuYmV0d2VlbiA9IFwiXCI7XG4gICAgdGhpcy5jdXJyZW50ID0gbm9kZTI7XG4gIH1cbiAgZW5kKHRva2VuKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudC5ub2RlcyAmJiB0aGlzLmN1cnJlbnQubm9kZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1cnJlbnQucmF3cy5zZW1pY29sb24gPSB0aGlzLnNlbWljb2xvbjtcbiAgICB9XG4gICAgdGhpcy5zZW1pY29sb24gPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnQucmF3cy5hZnRlciA9ICh0aGlzLmN1cnJlbnQucmF3cy5hZnRlciB8fCBcIlwiKSArIHRoaXMuc3BhY2VzO1xuICAgIHRoaXMuc3BhY2VzID0gXCJcIjtcbiAgICBpZiAodGhpcy5jdXJyZW50LnBhcmVudCkge1xuICAgICAgdGhpcy5jdXJyZW50LnNvdXJjZS5lbmQgPSB0aGlzLmdldFBvc2l0aW9uKHRva2VuWzJdKTtcbiAgICAgIHRoaXMuY3VycmVudC5zb3VyY2UuZW5kLm9mZnNldCsrO1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50LnBhcmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bmV4cGVjdGVkQ2xvc2UodG9rZW4pO1xuICAgIH1cbiAgfVxuICBlbmRGaWxlKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQucGFyZW50KSB0aGlzLnVuY2xvc2VkQmxvY2soKTtcbiAgICBpZiAodGhpcy5jdXJyZW50Lm5vZGVzICYmIHRoaXMuY3VycmVudC5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3VycmVudC5yYXdzLnNlbWljb2xvbiA9IHRoaXMuc2VtaWNvbG9uO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnQucmF3cy5hZnRlciA9ICh0aGlzLmN1cnJlbnQucmF3cy5hZnRlciB8fCBcIlwiKSArIHRoaXMuc3BhY2VzO1xuICAgIHRoaXMucm9vdC5zb3VyY2UuZW5kID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLnRva2VuaXplci5wb3NpdGlvbigpKTtcbiAgfVxuICBmcmVlU2VtaWNvbG9uKHRva2VuKSB7XG4gICAgdGhpcy5zcGFjZXMgKz0gdG9rZW5bMV07XG4gICAgaWYgKHRoaXMuY3VycmVudC5ub2Rlcykge1xuICAgICAgbGV0IHByZXYgPSB0aGlzLmN1cnJlbnQubm9kZXNbdGhpcy5jdXJyZW50Lm5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKHByZXYgJiYgcHJldi50eXBlID09PSBcInJ1bGVcIiAmJiAhcHJldi5yYXdzLm93blNlbWljb2xvbikge1xuICAgICAgICBwcmV2LnJhd3Mub3duU2VtaWNvbG9uID0gdGhpcy5zcGFjZXM7XG4gICAgICAgIHRoaXMuc3BhY2VzID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gSGVscGVyc1xuICBnZXRQb3NpdGlvbihvZmZzZXQpIHtcbiAgICBsZXQgcG9zID0gdGhpcy5pbnB1dC5mcm9tT2Zmc2V0KG9mZnNldCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbHVtbjogcG9zLmNvbCxcbiAgICAgIGxpbmU6IHBvcy5saW5lLFxuICAgICAgb2Zmc2V0XG4gICAgfTtcbiAgfVxuICBpbml0KG5vZGUyLCBvZmZzZXQpIHtcbiAgICB0aGlzLmN1cnJlbnQucHVzaChub2RlMik7XG4gICAgbm9kZTIuc291cmNlID0ge1xuICAgICAgaW5wdXQ6IHRoaXMuaW5wdXQsXG4gICAgICBzdGFydDogdGhpcy5nZXRQb3NpdGlvbihvZmZzZXQpXG4gICAgfTtcbiAgICBub2RlMi5yYXdzLmJlZm9yZSA9IHRoaXMuc3BhY2VzO1xuICAgIHRoaXMuc3BhY2VzID0gXCJcIjtcbiAgICBpZiAobm9kZTIudHlwZSAhPT0gXCJjb21tZW50XCIpIHRoaXMuc2VtaWNvbG9uID0gZmFsc2U7XG4gIH1cbiAgb3RoZXIoc3RhcnQpIHtcbiAgICBsZXQgZW5kID0gZmFsc2U7XG4gICAgbGV0IHR5cGUgPSBudWxsO1xuICAgIGxldCBjb2xvbiA9IGZhbHNlO1xuICAgIGxldCBicmFja2V0ID0gbnVsbDtcbiAgICBsZXQgYnJhY2tldHMgPSBbXTtcbiAgICBsZXQgY3VzdG9tUHJvcGVydHkgPSBzdGFydFsxXS5zdGFydHNXaXRoKFwiLS1cIik7XG4gICAgbGV0IHRva2VucyA9IFtdO1xuICAgIGxldCB0b2tlbiA9IHN0YXJ0O1xuICAgIHdoaWxlICh0b2tlbikge1xuICAgICAgdHlwZSA9IHRva2VuWzBdO1xuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgaWYgKHR5cGUgPT09IFwiKFwiIHx8IHR5cGUgPT09IFwiW1wiKSB7XG4gICAgICAgIGlmICghYnJhY2tldCkgYnJhY2tldCA9IHRva2VuO1xuICAgICAgICBicmFja2V0cy5wdXNoKHR5cGUgPT09IFwiKFwiID8gXCIpXCIgOiBcIl1cIik7XG4gICAgICB9IGVsc2UgaWYgKGN1c3RvbVByb3BlcnR5ICYmIGNvbG9uICYmIHR5cGUgPT09IFwie1wiKSB7XG4gICAgICAgIGlmICghYnJhY2tldCkgYnJhY2tldCA9IHRva2VuO1xuICAgICAgICBicmFja2V0cy5wdXNoKFwifVwiKTtcbiAgICAgIH0gZWxzZSBpZiAoYnJhY2tldHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBcIjtcIikge1xuICAgICAgICAgIGlmIChjb2xvbikge1xuICAgICAgICAgICAgdGhpcy5kZWNsKHRva2VucywgY3VzdG9tUHJvcGVydHkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICB0aGlzLnJ1bGUodG9rZW5zKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICB0aGlzLnRva2VuaXplci5iYWNrKHRva2Vucy5wb3AoKSk7XG4gICAgICAgICAgZW5kID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIjpcIikge1xuICAgICAgICAgIGNvbG9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBicmFja2V0c1ticmFja2V0cy5sZW5ndGggLSAxXSkge1xuICAgICAgICBicmFja2V0cy5wb3AoKTtcbiAgICAgICAgaWYgKGJyYWNrZXRzLmxlbmd0aCA9PT0gMCkgYnJhY2tldCA9IG51bGw7XG4gICAgICB9XG4gICAgICB0b2tlbiA9IHRoaXMudG9rZW5pemVyLm5leHRUb2tlbigpO1xuICAgIH1cbiAgICBpZiAodGhpcy50b2tlbml6ZXIuZW5kT2ZGaWxlKCkpIGVuZCA9IHRydWU7XG4gICAgaWYgKGJyYWNrZXRzLmxlbmd0aCA+IDApIHRoaXMudW5jbG9zZWRCcmFja2V0KGJyYWNrZXQpO1xuICAgIGlmIChlbmQgJiYgY29sb24pIHtcbiAgICAgIGlmICghY3VzdG9tUHJvcGVydHkpIHtcbiAgICAgICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICB0b2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV1bMF07XG4gICAgICAgICAgaWYgKHRva2VuICE9PSBcInNwYWNlXCIgJiYgdG9rZW4gIT09IFwiY29tbWVudFwiKSBicmVhaztcbiAgICAgICAgICB0aGlzLnRva2VuaXplci5iYWNrKHRva2Vucy5wb3AoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZGVjbCh0b2tlbnMsIGN1c3RvbVByb3BlcnR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bmtub3duV29yZCh0b2tlbnMpO1xuICAgIH1cbiAgfVxuICBwYXJzZSgpIHtcbiAgICBsZXQgdG9rZW47XG4gICAgd2hpbGUgKCF0aGlzLnRva2VuaXplci5lbmRPZkZpbGUoKSkge1xuICAgICAgdG9rZW4gPSB0aGlzLnRva2VuaXplci5uZXh0VG9rZW4oKTtcbiAgICAgIHN3aXRjaCAodG9rZW5bMF0pIHtcbiAgICAgICAgY2FzZSBcInNwYWNlXCI6XG4gICAgICAgICAgdGhpcy5zcGFjZXMgKz0gdG9rZW5bMV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI7XCI6XG4gICAgICAgICAgdGhpcy5mcmVlU2VtaWNvbG9uKHRva2VuKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIn1cIjpcbiAgICAgICAgICB0aGlzLmVuZCh0b2tlbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjb21tZW50XCI6XG4gICAgICAgICAgdGhpcy5jb21tZW50KHRva2VuKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImF0LXdvcmRcIjpcbiAgICAgICAgICB0aGlzLmF0cnVsZSh0b2tlbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ7XCI6XG4gICAgICAgICAgdGhpcy5lbXB0eVJ1bGUodG9rZW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMub3RoZXIodG9rZW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVuZEZpbGUoKTtcbiAgfVxuICBwcmVjaGVja01pc3NlZFNlbWljb2xvbigpIHtcbiAgfVxuICByYXcobm9kZTIsIHByb3AsIHRva2VucywgY3VzdG9tUHJvcGVydHkpIHtcbiAgICBsZXQgdG9rZW4sIHR5cGU7XG4gICAgbGV0IGxlbmd0aCA9IHRva2Vucy5sZW5ndGg7XG4gICAgbGV0IHZhbHVlID0gXCJcIjtcbiAgICBsZXQgY2xlYW4gPSB0cnVlO1xuICAgIGxldCBuZXh0LCBwcmV2O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgdHlwZSA9IHRva2VuWzBdO1xuICAgICAgaWYgKHR5cGUgPT09IFwic3BhY2VcIiAmJiBpID09PSBsZW5ndGggLSAxICYmICFjdXN0b21Qcm9wZXJ0eSkge1xuICAgICAgICBjbGVhbiA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImNvbW1lbnRcIikge1xuICAgICAgICBwcmV2ID0gdG9rZW5zW2kgLSAxXSA/IHRva2Vuc1tpIC0gMV1bMF0gOiBcImVtcHR5XCI7XG4gICAgICAgIG5leHQgPSB0b2tlbnNbaSArIDFdID8gdG9rZW5zW2kgKyAxXVswXSA6IFwiZW1wdHlcIjtcbiAgICAgICAgaWYgKCFTQUZFX0NPTU1FTlRfTkVJR0hCT1JbcHJldl0gJiYgIVNBRkVfQ09NTUVOVF9ORUlHSEJPUltuZXh0XSkge1xuICAgICAgICAgIGlmICh2YWx1ZS5zbGljZSgtMSkgPT09IFwiLFwiKSB7XG4gICAgICAgICAgICBjbGVhbiA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSArPSB0b2tlblsxXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xlYW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgKz0gdG9rZW5bMV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghY2xlYW4pIHtcbiAgICAgIGxldCByYXcgPSB0b2tlbnMucmVkdWNlKChhbGwsIGkpID0+IGFsbCArIGlbMV0sIFwiXCIpO1xuICAgICAgbm9kZTIucmF3c1twcm9wXSA9IHsgcmF3LCB2YWx1ZSB9O1xuICAgIH1cbiAgICBub2RlMltwcm9wXSA9IHZhbHVlO1xuICB9XG4gIHJ1bGUodG9rZW5zKSB7XG4gICAgdG9rZW5zLnBvcCgpO1xuICAgIGxldCBub2RlMiA9IG5ldyBSdWxlJDIoKTtcbiAgICB0aGlzLmluaXQobm9kZTIsIHRva2Vuc1swXVsyXSk7XG4gICAgbm9kZTIucmF3cy5iZXR3ZWVuID0gdGhpcy5zcGFjZXNBbmRDb21tZW50c0Zyb21FbmQodG9rZW5zKTtcbiAgICB0aGlzLnJhdyhub2RlMiwgXCJzZWxlY3RvclwiLCB0b2tlbnMpO1xuICAgIHRoaXMuY3VycmVudCA9IG5vZGUyO1xuICB9XG4gIHNwYWNlc0FuZENvbW1lbnRzRnJvbUVuZCh0b2tlbnMpIHtcbiAgICBsZXQgbGFzdFRva2VuVHlwZTtcbiAgICBsZXQgc3BhY2VzID0gXCJcIjtcbiAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkge1xuICAgICAgbGFzdFRva2VuVHlwZSA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV1bMF07XG4gICAgICBpZiAobGFzdFRva2VuVHlwZSAhPT0gXCJzcGFjZVwiICYmIGxhc3RUb2tlblR5cGUgIT09IFwiY29tbWVudFwiKSBicmVhaztcbiAgICAgIHNwYWNlcyA9IHRva2Vucy5wb3AoKVsxXSArIHNwYWNlcztcbiAgICB9XG4gICAgcmV0dXJuIHNwYWNlcztcbiAgfVxuICAvLyBFcnJvcnNcbiAgc3BhY2VzQW5kQ29tbWVudHNGcm9tU3RhcnQodG9rZW5zKSB7XG4gICAgbGV0IG5leHQ7XG4gICAgbGV0IHNwYWNlcyA9IFwiXCI7XG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgIG5leHQgPSB0b2tlbnNbMF1bMF07XG4gICAgICBpZiAobmV4dCAhPT0gXCJzcGFjZVwiICYmIG5leHQgIT09IFwiY29tbWVudFwiKSBicmVhaztcbiAgICAgIHNwYWNlcyArPSB0b2tlbnMuc2hpZnQoKVsxXTtcbiAgICB9XG4gICAgcmV0dXJuIHNwYWNlcztcbiAgfVxuICBzcGFjZXNGcm9tRW5kKHRva2Vucykge1xuICAgIGxldCBsYXN0VG9rZW5UeXBlO1xuICAgIGxldCBzcGFjZXMgPSBcIlwiO1xuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICBsYXN0VG9rZW5UeXBlID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXVswXTtcbiAgICAgIGlmIChsYXN0VG9rZW5UeXBlICE9PSBcInNwYWNlXCIpIGJyZWFrO1xuICAgICAgc3BhY2VzID0gdG9rZW5zLnBvcCgpWzFdICsgc3BhY2VzO1xuICAgIH1cbiAgICByZXR1cm4gc3BhY2VzO1xuICB9XG4gIHN0cmluZ0Zyb20odG9rZW5zLCBmcm9tKSB7XG4gICAgbGV0IHJlc3VsdDIgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSBmcm9tOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQyICs9IHRva2Vuc1tpXVsxXTtcbiAgICB9XG4gICAgdG9rZW5zLnNwbGljZShmcm9tLCB0b2tlbnMubGVuZ3RoIC0gZnJvbSk7XG4gICAgcmV0dXJuIHJlc3VsdDI7XG4gIH1cbiAgdW5jbG9zZWRCbG9jaygpIHtcbiAgICBsZXQgcG9zID0gdGhpcy5jdXJyZW50LnNvdXJjZS5zdGFydDtcbiAgICB0aHJvdyB0aGlzLmlucHV0LmVycm9yKFwiVW5jbG9zZWQgYmxvY2tcIiwgcG9zLmxpbmUsIHBvcy5jb2x1bW4pO1xuICB9XG4gIHVuY2xvc2VkQnJhY2tldChicmFja2V0KSB7XG4gICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcihcbiAgICAgIFwiVW5jbG9zZWQgYnJhY2tldFwiLFxuICAgICAgeyBvZmZzZXQ6IGJyYWNrZXRbMl0gfSxcbiAgICAgIHsgb2Zmc2V0OiBicmFja2V0WzJdICsgMSB9XG4gICAgKTtcbiAgfVxuICB1bmV4cGVjdGVkQ2xvc2UodG9rZW4pIHtcbiAgICB0aHJvdyB0aGlzLmlucHV0LmVycm9yKFxuICAgICAgXCJVbmV4cGVjdGVkIH1cIixcbiAgICAgIHsgb2Zmc2V0OiB0b2tlblsyXSB9LFxuICAgICAgeyBvZmZzZXQ6IHRva2VuWzJdICsgMSB9XG4gICAgKTtcbiAgfVxuICB1bmtub3duV29yZCh0b2tlbnMpIHtcbiAgICB0aHJvdyB0aGlzLmlucHV0LmVycm9yKFxuICAgICAgXCJVbmtub3duIHdvcmRcIixcbiAgICAgIHsgb2Zmc2V0OiB0b2tlbnNbMF1bMl0gfSxcbiAgICAgIHsgb2Zmc2V0OiB0b2tlbnNbMF1bMl0gKyB0b2tlbnNbMF1bMV0ubGVuZ3RoIH1cbiAgICApO1xuICB9XG4gIHVubmFtZWRBdHJ1bGUobm9kZTIsIHRva2VuKSB7XG4gICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcihcbiAgICAgIFwiQXQtcnVsZSB3aXRob3V0IG5hbWVcIixcbiAgICAgIHsgb2Zmc2V0OiB0b2tlblsyXSB9LFxuICAgICAgeyBvZmZzZXQ6IHRva2VuWzJdICsgdG9rZW5bMV0ubGVuZ3RoIH1cbiAgICApO1xuICB9XG59O1xudmFyIHBhcnNlciA9IFBhcnNlciQxO1xubGV0IENvbnRhaW5lciQyID0gY29udGFpbmVyO1xubGV0IFBhcnNlcjIgPSBwYXJzZXI7XG5sZXQgSW5wdXQkMiA9IGlucHV0O1xuZnVuY3Rpb24gcGFyc2UkMyhjc3MsIG9wdHMpIHtcbiAgbGV0IGlucHV0MiA9IG5ldyBJbnB1dCQyKGNzcywgb3B0cyk7XG4gIGxldCBwYXJzZXIyID0gbmV3IFBhcnNlcjIoaW5wdXQyKTtcbiAgdHJ5IHtcbiAgICBwYXJzZXIyLnBhcnNlKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgaWYgKGUubmFtZSA9PT0gXCJDc3NTeW50YXhFcnJvclwiICYmIG9wdHMgJiYgb3B0cy5mcm9tKSB7XG4gICAgICAgIGlmICgvXFwuc2NzcyQvaS50ZXN0KG9wdHMuZnJvbSkpIHtcbiAgICAgICAgICBlLm1lc3NhZ2UgKz0gXCJcXG5Zb3UgdHJpZWQgdG8gcGFyc2UgU0NTUyB3aXRoIHRoZSBzdGFuZGFyZCBDU1MgcGFyc2VyOyB0cnkgYWdhaW4gd2l0aCB0aGUgcG9zdGNzcy1zY3NzIHBhcnNlclwiO1xuICAgICAgICB9IGVsc2UgaWYgKC9cXC5zYXNzL2kudGVzdChvcHRzLmZyb20pKSB7XG4gICAgICAgICAgZS5tZXNzYWdlICs9IFwiXFxuWW91IHRyaWVkIHRvIHBhcnNlIFNhc3Mgd2l0aCB0aGUgc3RhbmRhcmQgQ1NTIHBhcnNlcjsgdHJ5IGFnYWluIHdpdGggdGhlIHBvc3Rjc3Mtc2FzcyBwYXJzZXJcIjtcbiAgICAgICAgfSBlbHNlIGlmICgvXFwubGVzcyQvaS50ZXN0KG9wdHMuZnJvbSkpIHtcbiAgICAgICAgICBlLm1lc3NhZ2UgKz0gXCJcXG5Zb3UgdHJpZWQgdG8gcGFyc2UgTGVzcyB3aXRoIHRoZSBzdGFuZGFyZCBDU1MgcGFyc2VyOyB0cnkgYWdhaW4gd2l0aCB0aGUgcG9zdGNzcy1sZXNzIHBhcnNlclwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IGU7XG4gIH1cbiAgcmV0dXJuIHBhcnNlcjIucm9vdDtcbn1cbnZhciBwYXJzZV8xID0gcGFyc2UkMztcbnBhcnNlJDMuZGVmYXVsdCA9IHBhcnNlJDM7XG5Db250YWluZXIkMi5yZWdpc3RlclBhcnNlKHBhcnNlJDMpO1xubGV0IHsgaXNDbGVhbiwgbXkgfSA9IHN5bWJvbHM7XG5sZXQgTWFwR2VuZXJhdG9yJDEgPSBtYXBHZW5lcmF0b3I7XG5sZXQgc3RyaW5naWZ5JDIgPSBzdHJpbmdpZnlfMTtcbmxldCBDb250YWluZXIkMSA9IGNvbnRhaW5lcjtcbmxldCBEb2N1bWVudCQyID0gZG9jdW1lbnQkMTtcbmxldCB3YXJuT25jZSQxID0gd2Fybk9uY2UkMjtcbmxldCBSZXN1bHQkMiA9IHJlc3VsdDtcbmxldCBwYXJzZSQyID0gcGFyc2VfMTtcbmxldCBSb290JDMgPSByb290O1xuY29uc3QgVFlQRV9UT19DTEFTU19OQU1FID0ge1xuICBhdHJ1bGU6IFwiQXRSdWxlXCIsXG4gIGNvbW1lbnQ6IFwiQ29tbWVudFwiLFxuICBkZWNsOiBcIkRlY2xhcmF0aW9uXCIsXG4gIGRvY3VtZW50OiBcIkRvY3VtZW50XCIsXG4gIHJvb3Q6IFwiUm9vdFwiLFxuICBydWxlOiBcIlJ1bGVcIlxufTtcbmNvbnN0IFBMVUdJTl9QUk9QUyA9IHtcbiAgQXRSdWxlOiB0cnVlLFxuICBBdFJ1bGVFeGl0OiB0cnVlLFxuICBDb21tZW50OiB0cnVlLFxuICBDb21tZW50RXhpdDogdHJ1ZSxcbiAgRGVjbGFyYXRpb246IHRydWUsXG4gIERlY2xhcmF0aW9uRXhpdDogdHJ1ZSxcbiAgRG9jdW1lbnQ6IHRydWUsXG4gIERvY3VtZW50RXhpdDogdHJ1ZSxcbiAgT25jZTogdHJ1ZSxcbiAgT25jZUV4aXQ6IHRydWUsXG4gIHBvc3Rjc3NQbHVnaW46IHRydWUsXG4gIHByZXBhcmU6IHRydWUsXG4gIFJvb3Q6IHRydWUsXG4gIFJvb3RFeGl0OiB0cnVlLFxuICBSdWxlOiB0cnVlLFxuICBSdWxlRXhpdDogdHJ1ZVxufTtcbmNvbnN0IE5PVF9WSVNJVE9SUyA9IHtcbiAgT25jZTogdHJ1ZSxcbiAgcG9zdGNzc1BsdWdpbjogdHJ1ZSxcbiAgcHJlcGFyZTogdHJ1ZVxufTtcbmNvbnN0IENISUxEUkVOID0gMDtcbmZ1bmN0aW9uIGlzUHJvbWlzZShvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iai50aGVuID09PSBcImZ1bmN0aW9uXCI7XG59XG5mdW5jdGlvbiBnZXRFdmVudHMobm9kZTIpIHtcbiAgbGV0IGtleSA9IGZhbHNlO1xuICBsZXQgdHlwZSA9IFRZUEVfVE9fQ0xBU1NfTkFNRVtub2RlMi50eXBlXTtcbiAgaWYgKG5vZGUyLnR5cGUgPT09IFwiZGVjbFwiKSB7XG4gICAga2V5ID0gbm9kZTIucHJvcC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKG5vZGUyLnR5cGUgPT09IFwiYXRydWxlXCIpIHtcbiAgICBrZXkgPSBub2RlMi5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgaWYgKGtleSAmJiBub2RlMi5hcHBlbmQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgdHlwZSxcbiAgICAgIHR5cGUgKyBcIi1cIiArIGtleSxcbiAgICAgIENISUxEUkVOLFxuICAgICAgdHlwZSArIFwiRXhpdFwiLFxuICAgICAgdHlwZSArIFwiRXhpdC1cIiArIGtleVxuICAgIF07XG4gIH0gZWxzZSBpZiAoa2V5KSB7XG4gICAgcmV0dXJuIFt0eXBlLCB0eXBlICsgXCItXCIgKyBrZXksIHR5cGUgKyBcIkV4aXRcIiwgdHlwZSArIFwiRXhpdC1cIiArIGtleV07XG4gIH0gZWxzZSBpZiAobm9kZTIuYXBwZW5kKSB7XG4gICAgcmV0dXJuIFt0eXBlLCBDSElMRFJFTiwgdHlwZSArIFwiRXhpdFwiXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW3R5cGUsIHR5cGUgKyBcIkV4aXRcIl07XG4gIH1cbn1cbmZ1bmN0aW9uIHRvU3RhY2sobm9kZTIpIHtcbiAgbGV0IGV2ZW50cztcbiAgaWYgKG5vZGUyLnR5cGUgPT09IFwiZG9jdW1lbnRcIikge1xuICAgIGV2ZW50cyA9IFtcIkRvY3VtZW50XCIsIENISUxEUkVOLCBcIkRvY3VtZW50RXhpdFwiXTtcbiAgfSBlbHNlIGlmIChub2RlMi50eXBlID09PSBcInJvb3RcIikge1xuICAgIGV2ZW50cyA9IFtcIlJvb3RcIiwgQ0hJTERSRU4sIFwiUm9vdEV4aXRcIl07XG4gIH0gZWxzZSB7XG4gICAgZXZlbnRzID0gZ2V0RXZlbnRzKG5vZGUyKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGV2ZW50SW5kZXg6IDAsXG4gICAgZXZlbnRzLFxuICAgIGl0ZXJhdG9yOiAwLFxuICAgIG5vZGU6IG5vZGUyLFxuICAgIHZpc2l0b3JJbmRleDogMCxcbiAgICB2aXNpdG9yczogW11cbiAgfTtcbn1cbmZ1bmN0aW9uIGNsZWFuTWFya3Mobm9kZTIpIHtcbiAgbm9kZTJbaXNDbGVhbl0gPSBmYWxzZTtcbiAgaWYgKG5vZGUyLm5vZGVzKSBub2RlMi5ub2Rlcy5mb3JFYWNoKChpKSA9PiBjbGVhbk1hcmtzKGkpKTtcbiAgcmV0dXJuIG5vZGUyO1xufVxubGV0IHBvc3Rjc3MkMiA9IHt9O1xubGV0IExhenlSZXN1bHQkMiA9IGNsYXNzIExhenlSZXN1bHQge1xuICBjb25zdHJ1Y3Rvcihwcm9jZXNzb3IyLCBjc3MsIG9wdHMpIHtcbiAgICB0aGlzLnN0cmluZ2lmaWVkID0gZmFsc2U7XG4gICAgdGhpcy5wcm9jZXNzZWQgPSBmYWxzZTtcbiAgICBsZXQgcm9vdDI7XG4gICAgaWYgKHR5cGVvZiBjc3MgPT09IFwib2JqZWN0XCIgJiYgY3NzICE9PSBudWxsICYmIChjc3MudHlwZSA9PT0gXCJyb290XCIgfHwgY3NzLnR5cGUgPT09IFwiZG9jdW1lbnRcIikpIHtcbiAgICAgIHJvb3QyID0gY2xlYW5NYXJrcyhjc3MpO1xuICAgIH0gZWxzZSBpZiAoY3NzIGluc3RhbmNlb2YgTGF6eVJlc3VsdCB8fCBjc3MgaW5zdGFuY2VvZiBSZXN1bHQkMikge1xuICAgICAgcm9vdDIgPSBjbGVhbk1hcmtzKGNzcy5yb290KTtcbiAgICAgIGlmIChjc3MubWFwKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0cy5tYXAgPT09IFwidW5kZWZpbmVkXCIpIG9wdHMubWFwID0ge307XG4gICAgICAgIGlmICghb3B0cy5tYXAuaW5saW5lKSBvcHRzLm1hcC5pbmxpbmUgPSBmYWxzZTtcbiAgICAgICAgb3B0cy5tYXAucHJldiA9IGNzcy5tYXA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwYXJzZXIyID0gcGFyc2UkMjtcbiAgICAgIGlmIChvcHRzLnN5bnRheCkgcGFyc2VyMiA9IG9wdHMuc3ludGF4LnBhcnNlO1xuICAgICAgaWYgKG9wdHMucGFyc2VyKSBwYXJzZXIyID0gb3B0cy5wYXJzZXI7XG4gICAgICBpZiAocGFyc2VyMi5wYXJzZSkgcGFyc2VyMiA9IHBhcnNlcjIucGFyc2U7XG4gICAgICB0cnkge1xuICAgICAgICByb290MiA9IHBhcnNlcjIoY3NzLCBvcHRzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgfVxuICAgICAgaWYgKHJvb3QyICYmICFyb290MltteV0pIHtcbiAgICAgICAgQ29udGFpbmVyJDEucmVidWlsZChyb290Mik7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVzdWx0ID0gbmV3IFJlc3VsdCQyKHByb2Nlc3NvcjIsIHJvb3QyLCBvcHRzKTtcbiAgICB0aGlzLmhlbHBlcnMgPSBfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCBwb3N0Y3NzJDIpLCB7IHBvc3Rjc3M6IHBvc3Rjc3MkMiwgcmVzdWx0OiB0aGlzLnJlc3VsdCB9KTtcbiAgICB0aGlzLnBsdWdpbnMgPSB0aGlzLnByb2Nlc3Nvci5wbHVnaW5zLm1hcCgocGx1Z2luMikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBwbHVnaW4yID09PSBcIm9iamVjdFwiICYmIHBsdWdpbjIucHJlcGFyZSkge1xuICAgICAgICByZXR1cm4gX19zcHJlYWRWYWx1ZXMoX19zcHJlYWRWYWx1ZXMoe30sIHBsdWdpbjIpLCBwbHVnaW4yLnByZXBhcmUodGhpcy5yZXN1bHQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwbHVnaW4yO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGFzeW5jKCkge1xuICAgIGlmICh0aGlzLmVycm9yKSByZXR1cm4gUHJvbWlzZS5yZWplY3QodGhpcy5lcnJvcik7XG4gICAgaWYgKHRoaXMucHJvY2Vzc2VkKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucmVzdWx0KTtcbiAgICBpZiAoIXRoaXMucHJvY2Vzc2luZykge1xuICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdGhpcy5ydW5Bc3luYygpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzaW5nO1xuICB9XG4gIGNhdGNoKG9uUmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy5hc3luYygpLmNhdGNoKG9uUmVqZWN0ZWQpO1xuICB9XG4gIGZpbmFsbHkob25GaW5hbGx5KSB7XG4gICAgcmV0dXJuIHRoaXMuYXN5bmMoKS50aGVuKG9uRmluYWxseSwgb25GaW5hbGx5KTtcbiAgfVxuICBnZXRBc3luY0Vycm9yKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVzZSBwcm9jZXNzKGNzcykudGhlbihjYikgdG8gd29yayB3aXRoIGFzeW5jIHBsdWdpbnNcIik7XG4gIH1cbiAgaGFuZGxlRXJyb3IoZXJyb3IsIG5vZGUyKSB7XG4gICAgbGV0IHBsdWdpbjIgPSB0aGlzLnJlc3VsdC5sYXN0UGx1Z2luO1xuICAgIHRyeSB7XG4gICAgICBpZiAobm9kZTIpIG5vZGUyLmFkZFRvRXJyb3IoZXJyb3IpO1xuICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgaWYgKGVycm9yLm5hbWUgPT09IFwiQ3NzU3ludGF4RXJyb3JcIiAmJiAhZXJyb3IucGx1Z2luKSB7XG4gICAgICAgIGVycm9yLnBsdWdpbiA9IHBsdWdpbjIucG9zdGNzc1BsdWdpbjtcbiAgICAgICAgZXJyb3Iuc2V0TWVzc2FnZSgpO1xuICAgICAgfSBlbHNlIGlmIChwbHVnaW4yLnBvc3Rjc3NWZXJzaW9uKSB7XG4gICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgbGV0IHBsdWdpbk5hbWUgPSBwbHVnaW4yLnBvc3Rjc3NQbHVnaW47XG4gICAgICAgICAgbGV0IHBsdWdpblZlciA9IHBsdWdpbjIucG9zdGNzc1ZlcnNpb247XG4gICAgICAgICAgbGV0IHJ1bnRpbWVWZXIgPSB0aGlzLnJlc3VsdC5wcm9jZXNzb3IudmVyc2lvbjtcbiAgICAgICAgICBsZXQgYSA9IHBsdWdpblZlci5zcGxpdChcIi5cIik7XG4gICAgICAgICAgbGV0IGIgPSBydW50aW1lVmVyLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICBpZiAoYVswXSAhPT0gYlswXSB8fCBwYXJzZUludChhWzFdKSA+IHBhcnNlSW50KGJbMV0pKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBcIlVua25vd24gZXJyb3IgZnJvbSBQb3N0Q1NTIHBsdWdpbi4gWW91ciBjdXJyZW50IFBvc3RDU1MgdmVyc2lvbiBpcyBcIiArIHJ1bnRpbWVWZXIgKyBcIiwgYnV0IFwiICsgcGx1Z2luTmFtZSArIFwiIHVzZXMgXCIgKyBwbHVnaW5WZXIgKyBcIi4gUGVyaGFwcyB0aGlzIGlzIHRoZSBzb3VyY2Ugb2YgdGhlIGVycm9yIGJlbG93LlwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbiAgcHJlcGFyZVZpc2l0b3JzKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgbGV0IGFkZCA9IChwbHVnaW4yLCB0eXBlLCBjYikgPT4ge1xuICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyc1t0eXBlXSkgdGhpcy5saXN0ZW5lcnNbdHlwZV0gPSBbXTtcbiAgICAgIHRoaXMubGlzdGVuZXJzW3R5cGVdLnB1c2goW3BsdWdpbjIsIGNiXSk7XG4gICAgfTtcbiAgICBmb3IgKGxldCBwbHVnaW4yIG9mIHRoaXMucGx1Z2lucykge1xuICAgICAgaWYgKHR5cGVvZiBwbHVnaW4yID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGZvciAobGV0IGV2ZW50IGluIHBsdWdpbjIpIHtcbiAgICAgICAgICBpZiAoIVBMVUdJTl9QUk9QU1tldmVudF0gJiYgL15bQS1aXS8udGVzdChldmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFVua25vd24gZXZlbnQgJHtldmVudH0gaW4gJHtwbHVnaW4yLnBvc3Rjc3NQbHVnaW59LiBUcnkgdG8gdXBkYXRlIFBvc3RDU1MgKCR7dGhpcy5wcm9jZXNzb3IudmVyc2lvbn0gbm93KS5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIU5PVF9WSVNJVE9SU1tldmVudF0pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGx1Z2luMltldmVudF0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgZmlsdGVyIGluIHBsdWdpbjJbZXZlbnRdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgIGFkZChwbHVnaW4yLCBldmVudCwgcGx1Z2luMltldmVudF1bZmlsdGVyXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGFkZChcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luMixcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQgKyBcIi1cIiArIGZpbHRlci50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICBwbHVnaW4yW2V2ZW50XVtmaWx0ZXJdXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGx1Z2luMltldmVudF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICBhZGQocGx1Z2luMiwgZXZlbnQsIHBsdWdpbjJbZXZlbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5oYXNMaXN0ZW5lciA9IE9iamVjdC5rZXlzKHRoaXMubGlzdGVuZXJzKS5sZW5ndGggPiAwO1xuICB9XG4gIGFzeW5jIHJ1bkFzeW5jKCkge1xuICAgIHRoaXMucGx1Z2luID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBsdWdpbjIgPSB0aGlzLnBsdWdpbnNbaV07XG4gICAgICBsZXQgcHJvbWlzZSA9IHRoaXMucnVuT25Sb290KHBsdWdpbjIpO1xuICAgICAgaWYgKGlzUHJvbWlzZShwcm9taXNlKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHByb21pc2U7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcmVwYXJlVmlzaXRvcnMoKTtcbiAgICBpZiAodGhpcy5oYXNMaXN0ZW5lcikge1xuICAgICAgbGV0IHJvb3QyID0gdGhpcy5yZXN1bHQucm9vdDtcbiAgICAgIHdoaWxlICghcm9vdDJbaXNDbGVhbl0pIHtcbiAgICAgICAgcm9vdDJbaXNDbGVhbl0gPSB0cnVlO1xuICAgICAgICBsZXQgc3RhY2sgPSBbdG9TdGFjayhyb290MildO1xuICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBwcm9taXNlID0gdGhpcy52aXNpdFRpY2soc3RhY2spO1xuICAgICAgICAgIGlmIChpc1Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGF3YWl0IHByb21pc2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGxldCBub2RlMiA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdLm5vZGU7XG4gICAgICAgICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZSwgbm9kZTIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMubGlzdGVuZXJzLk9uY2VFeGl0KSB7XG4gICAgICAgIGZvciAobGV0IFtwbHVnaW4yLCB2aXNpdG9yXSBvZiB0aGlzLmxpc3RlbmVycy5PbmNlRXhpdCkge1xuICAgICAgICAgIHRoaXMucmVzdWx0Lmxhc3RQbHVnaW4gPSBwbHVnaW4yO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAocm9vdDIudHlwZSA9PT0gXCJkb2N1bWVudFwiKSB7XG4gICAgICAgICAgICAgIGxldCByb290cyA9IHJvb3QyLm5vZGVzLm1hcChcbiAgICAgICAgICAgICAgICAoc3ViUm9vdCkgPT4gdmlzaXRvcihzdWJSb290LCB0aGlzLmhlbHBlcnMpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHJvb3RzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGF3YWl0IHZpc2l0b3Iocm9vdDIsIHRoaXMuaGVscGVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9jZXNzZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xuICB9XG4gIHJ1bk9uUm9vdChwbHVnaW4yKSB7XG4gICAgdGhpcy5yZXN1bHQubGFzdFBsdWdpbiA9IHBsdWdpbjI7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0eXBlb2YgcGx1Z2luMiA9PT0gXCJvYmplY3RcIiAmJiBwbHVnaW4yLk9uY2UpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LnJvb3QudHlwZSA9PT0gXCJkb2N1bWVudFwiKSB7XG4gICAgICAgICAgbGV0IHJvb3RzID0gdGhpcy5yZXN1bHQucm9vdC5ub2Rlcy5tYXAoXG4gICAgICAgICAgICAocm9vdDIpID0+IHBsdWdpbjIuT25jZShyb290MiwgdGhpcy5oZWxwZXJzKVxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGlzUHJvbWlzZShyb290c1swXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyb290cyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByb290cztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGx1Z2luMi5PbmNlKHRoaXMucmVzdWx0LnJvb3QsIHRoaXMuaGVscGVycyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwbHVnaW4yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbjIodGhpcy5yZXN1bHQucm9vdCwgdGhpcy5yZXN1bHQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cbiAgc3RyaW5naWZ5KCkge1xuICAgIGlmICh0aGlzLmVycm9yKSB0aHJvdyB0aGlzLmVycm9yO1xuICAgIGlmICh0aGlzLnN0cmluZ2lmaWVkKSByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gICAgdGhpcy5zdHJpbmdpZmllZCA9IHRydWU7XG4gICAgdGhpcy5zeW5jKCk7XG4gICAgbGV0IG9wdHMgPSB0aGlzLnJlc3VsdC5vcHRzO1xuICAgIGxldCBzdHIgPSBzdHJpbmdpZnkkMjtcbiAgICBpZiAob3B0cy5zeW50YXgpIHN0ciA9IG9wdHMuc3ludGF4LnN0cmluZ2lmeTtcbiAgICBpZiAob3B0cy5zdHJpbmdpZmllcikgc3RyID0gb3B0cy5zdHJpbmdpZmllcjtcbiAgICBpZiAoc3RyLnN0cmluZ2lmeSkgc3RyID0gc3RyLnN0cmluZ2lmeTtcbiAgICBsZXQgbWFwID0gbmV3IE1hcEdlbmVyYXRvciQxKHN0ciwgdGhpcy5yZXN1bHQucm9vdCwgdGhpcy5yZXN1bHQub3B0cyk7XG4gICAgbGV0IGRhdGEgPSBtYXAuZ2VuZXJhdGUoKTtcbiAgICB0aGlzLnJlc3VsdC5jc3MgPSBkYXRhWzBdO1xuICAgIHRoaXMucmVzdWx0Lm1hcCA9IGRhdGFbMV07XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICB9XG4gIHN5bmMoKSB7XG4gICAgaWYgKHRoaXMuZXJyb3IpIHRocm93IHRoaXMuZXJyb3I7XG4gICAgaWYgKHRoaXMucHJvY2Vzc2VkKSByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gICAgdGhpcy5wcm9jZXNzZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLnByb2Nlc3NpbmcpIHtcbiAgICAgIHRocm93IHRoaXMuZ2V0QXN5bmNFcnJvcigpO1xuICAgIH1cbiAgICBmb3IgKGxldCBwbHVnaW4yIG9mIHRoaXMucGx1Z2lucykge1xuICAgICAgbGV0IHByb21pc2UgPSB0aGlzLnJ1bk9uUm9vdChwbHVnaW4yKTtcbiAgICAgIGlmIChpc1Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5nZXRBc3luY0Vycm9yKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJlcGFyZVZpc2l0b3JzKCk7XG4gICAgaWYgKHRoaXMuaGFzTGlzdGVuZXIpIHtcbiAgICAgIGxldCByb290MiA9IHRoaXMucmVzdWx0LnJvb3Q7XG4gICAgICB3aGlsZSAoIXJvb3QyW2lzQ2xlYW5dKSB7XG4gICAgICAgIHJvb3QyW2lzQ2xlYW5dID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53YWxrU3luYyhyb290Mik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5saXN0ZW5lcnMuT25jZUV4aXQpIHtcbiAgICAgICAgaWYgKHJvb3QyLnR5cGUgPT09IFwiZG9jdW1lbnRcIikge1xuICAgICAgICAgIGZvciAobGV0IHN1YlJvb3Qgb2Ygcm9vdDIubm9kZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaXRTeW5jKHRoaXMubGlzdGVuZXJzLk9uY2VFeGl0LCBzdWJSb290KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy52aXNpdFN5bmModGhpcy5saXN0ZW5lcnMuT25jZUV4aXQsIHJvb3QyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gIH1cbiAgdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgIGlmICh0cnVlKSB7XG4gICAgICBpZiAoIShcImZyb21cIiBpbiB0aGlzLm9wdHMpKSB7XG4gICAgICAgIHdhcm5PbmNlJDEoXG4gICAgICAgICAgXCJXaXRob3V0IGBmcm9tYCBvcHRpb24gUG9zdENTUyBjb3VsZCBnZW5lcmF0ZSB3cm9uZyBzb3VyY2UgbWFwIGFuZCB3aWxsIG5vdCBmaW5kIEJyb3dzZXJzbGlzdCBjb25maWcuIFNldCBpdCB0byBDU1MgZmlsZSBwYXRoIG9yIHRvIGB1bmRlZmluZWRgIHRvIHByZXZlbnQgdGhpcyB3YXJuaW5nLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFzeW5jKCkudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3NzO1xuICB9XG4gIHZpc2l0U3luYyh2aXNpdG9ycywgbm9kZTIpIHtcbiAgICBmb3IgKGxldCBbcGx1Z2luMiwgdmlzaXRvcl0gb2YgdmlzaXRvcnMpIHtcbiAgICAgIHRoaXMucmVzdWx0Lmxhc3RQbHVnaW4gPSBwbHVnaW4yO1xuICAgICAgbGV0IHByb21pc2U7XG4gICAgICB0cnkge1xuICAgICAgICBwcm9taXNlID0gdmlzaXRvcihub2RlMiwgdGhpcy5oZWxwZXJzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlLCBub2RlMi5wcm94eU9mKTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlMi50eXBlICE9PSBcInJvb3RcIiAmJiBub2RlMi50eXBlICE9PSBcImRvY3VtZW50XCIgJiYgIW5vZGUyLnBhcmVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5nZXRBc3luY0Vycm9yKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZpc2l0VGljayhzdGFjaykge1xuICAgIGxldCB2aXNpdDIgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICBsZXQgeyBub2RlOiBub2RlMiwgdmlzaXRvcnMgfSA9IHZpc2l0MjtcbiAgICBpZiAobm9kZTIudHlwZSAhPT0gXCJyb290XCIgJiYgbm9kZTIudHlwZSAhPT0gXCJkb2N1bWVudFwiICYmICFub2RlMi5wYXJlbnQpIHtcbiAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmlzaXRvcnMubGVuZ3RoID4gMCAmJiB2aXNpdDIudmlzaXRvckluZGV4IDwgdmlzaXRvcnMubGVuZ3RoKSB7XG4gICAgICBsZXQgW3BsdWdpbjIsIHZpc2l0b3JdID0gdmlzaXRvcnNbdmlzaXQyLnZpc2l0b3JJbmRleF07XG4gICAgICB2aXNpdDIudmlzaXRvckluZGV4ICs9IDE7XG4gICAgICBpZiAodmlzaXQyLnZpc2l0b3JJbmRleCA9PT0gdmlzaXRvcnMubGVuZ3RoKSB7XG4gICAgICAgIHZpc2l0Mi52aXNpdG9ycyA9IFtdO1xuICAgICAgICB2aXNpdDIudmlzaXRvckluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzdWx0Lmxhc3RQbHVnaW4gPSBwbHVnaW4yO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHZpc2l0b3Iobm9kZTIudG9Qcm94eSgpLCB0aGlzLmhlbHBlcnMpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUsIG5vZGUyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZpc2l0Mi5pdGVyYXRvciAhPT0gMCkge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdmlzaXQyLml0ZXJhdG9yO1xuICAgICAgbGV0IGNoaWxkO1xuICAgICAgd2hpbGUgKGNoaWxkID0gbm9kZTIubm9kZXNbbm9kZTIuaW5kZXhlc1tpdGVyYXRvcl1dKSB7XG4gICAgICAgIG5vZGUyLmluZGV4ZXNbaXRlcmF0b3JdICs9IDE7XG4gICAgICAgIGlmICghY2hpbGRbaXNDbGVhbl0pIHtcbiAgICAgICAgICBjaGlsZFtpc0NsZWFuXSA9IHRydWU7XG4gICAgICAgICAgc3RhY2sucHVzaCh0b1N0YWNrKGNoaWxkKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2aXNpdDIuaXRlcmF0b3IgPSAwO1xuICAgICAgZGVsZXRlIG5vZGUyLmluZGV4ZXNbaXRlcmF0b3JdO1xuICAgIH1cbiAgICBsZXQgZXZlbnRzID0gdmlzaXQyLmV2ZW50cztcbiAgICB3aGlsZSAodmlzaXQyLmV2ZW50SW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgICBsZXQgZXZlbnQgPSBldmVudHNbdmlzaXQyLmV2ZW50SW5kZXhdO1xuICAgICAgdmlzaXQyLmV2ZW50SW5kZXggKz0gMTtcbiAgICAgIGlmIChldmVudCA9PT0gQ0hJTERSRU4pIHtcbiAgICAgICAgaWYgKG5vZGUyLm5vZGVzICYmIG5vZGUyLm5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgIG5vZGUyW2lzQ2xlYW5dID0gdHJ1ZTtcbiAgICAgICAgICB2aXNpdDIuaXRlcmF0b3IgPSBub2RlMi5nZXRJdGVyYXRvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5saXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgIHZpc2l0Mi52aXNpdG9ycyA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBzdGFjay5wb3AoKTtcbiAgfVxuICB3YWxrU3luYyhub2RlMikge1xuICAgIG5vZGUyW2lzQ2xlYW5dID0gdHJ1ZTtcbiAgICBsZXQgZXZlbnRzID0gZ2V0RXZlbnRzKG5vZGUyKTtcbiAgICBmb3IgKGxldCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgIGlmIChldmVudCA9PT0gQ0hJTERSRU4pIHtcbiAgICAgICAgaWYgKG5vZGUyLm5vZGVzKSB7XG4gICAgICAgICAgbm9kZTIuZWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGlmICghY2hpbGRbaXNDbGVhbl0pIHRoaXMud2Fsa1N5bmMoY2hpbGQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdmlzaXRvcnMgPSB0aGlzLmxpc3RlbmVyc1tldmVudF07XG4gICAgICAgIGlmICh2aXNpdG9ycykge1xuICAgICAgICAgIGlmICh0aGlzLnZpc2l0U3luYyh2aXNpdG9ycywgbm9kZTIudG9Qcm94eSgpKSkgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHdhcm5pbmdzKCkge1xuICAgIHJldHVybiB0aGlzLnN5bmMoKS53YXJuaW5ncygpO1xuICB9XG4gIGdldCBjb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpLmNvbnRlbnQ7XG4gIH1cbiAgZ2V0IGNzcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKS5jc3M7XG4gIH1cbiAgZ2V0IG1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKS5tYXA7XG4gIH1cbiAgZ2V0IG1lc3NhZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLnN5bmMoKS5tZXNzYWdlcztcbiAgfVxuICBnZXQgb3B0cygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQub3B0cztcbiAgfVxuICBnZXQgcHJvY2Vzc29yKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdC5wcm9jZXNzb3I7XG4gIH1cbiAgZ2V0IHJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3luYygpLnJvb3Q7XG4gIH1cbiAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgIHJldHVybiBcIkxhenlSZXN1bHRcIjtcbiAgfVxufTtcbkxhenlSZXN1bHQkMi5yZWdpc3RlclBvc3Rjc3MgPSAoZGVwZW5kYW50KSA9PiB7XG4gIHBvc3Rjc3MkMiA9IGRlcGVuZGFudDtcbn07XG52YXIgbGF6eVJlc3VsdCA9IExhenlSZXN1bHQkMjtcbkxhenlSZXN1bHQkMi5kZWZhdWx0ID0gTGF6eVJlc3VsdCQyO1xuUm9vdCQzLnJlZ2lzdGVyTGF6eVJlc3VsdChMYXp5UmVzdWx0JDIpO1xuRG9jdW1lbnQkMi5yZWdpc3RlckxhenlSZXN1bHQoTGF6eVJlc3VsdCQyKTtcbmxldCBNYXBHZW5lcmF0b3IyID0gbWFwR2VuZXJhdG9yO1xubGV0IHN0cmluZ2lmeSQxID0gc3RyaW5naWZ5XzE7XG5sZXQgd2Fybk9uY2UyID0gd2Fybk9uY2UkMjtcbmxldCBwYXJzZSQxID0gcGFyc2VfMTtcbmNvbnN0IFJlc3VsdCQxID0gcmVzdWx0O1xubGV0IE5vV29ya1Jlc3VsdCQxID0gY2xhc3MgTm9Xb3JrUmVzdWx0IHtcbiAgY29uc3RydWN0b3IocHJvY2Vzc29yMiwgY3NzLCBvcHRzKSB7XG4gICAgY3NzID0gY3NzLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5zdHJpbmdpZmllZCA9IGZhbHNlO1xuICAgIHRoaXMuX3Byb2Nlc3NvciA9IHByb2Nlc3NvcjI7XG4gICAgdGhpcy5fY3NzID0gY3NzO1xuICAgIHRoaXMuX29wdHMgPSBvcHRzO1xuICAgIHRoaXMuX21hcCA9IHZvaWQgMDtcbiAgICBsZXQgcm9vdDI7XG4gICAgbGV0IHN0ciA9IHN0cmluZ2lmeSQxO1xuICAgIHRoaXMucmVzdWx0ID0gbmV3IFJlc3VsdCQxKHRoaXMuX3Byb2Nlc3Nvciwgcm9vdDIsIHRoaXMuX29wdHMpO1xuICAgIHRoaXMucmVzdWx0LmNzcyA9IGNzcztcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMucmVzdWx0LCBcInJvb3RcIiwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gc2VsZi5yb290O1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXAgPSBuZXcgTWFwR2VuZXJhdG9yMihzdHIsIHJvb3QyLCB0aGlzLl9vcHRzLCBjc3MpO1xuICAgIGlmIChtYXAuaXNNYXAoKSkge1xuICAgICAgbGV0IFtnZW5lcmF0ZWRDU1MsIGdlbmVyYXRlZE1hcF0gPSBtYXAuZ2VuZXJhdGUoKTtcbiAgICAgIGlmIChnZW5lcmF0ZWRDU1MpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQuY3NzID0gZ2VuZXJhdGVkQ1NTO1xuICAgICAgfVxuICAgICAgaWYgKGdlbmVyYXRlZE1hcCkge1xuICAgICAgICB0aGlzLnJlc3VsdC5tYXAgPSBnZW5lcmF0ZWRNYXA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcC5jbGVhckFubm90YXRpb24oKTtcbiAgICAgIHRoaXMucmVzdWx0LmNzcyA9IG1hcC5jc3M7XG4gICAgfVxuICB9XG4gIGFzeW5jKCkge1xuICAgIGlmICh0aGlzLmVycm9yKSByZXR1cm4gUHJvbWlzZS5yZWplY3QodGhpcy5lcnJvcik7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlc3VsdCk7XG4gIH1cbiAgY2F0Y2gob25SZWplY3RlZCkge1xuICAgIHJldHVybiB0aGlzLmFzeW5jKCkuY2F0Y2gob25SZWplY3RlZCk7XG4gIH1cbiAgZmluYWxseShvbkZpbmFsbHkpIHtcbiAgICByZXR1cm4gdGhpcy5hc3luYygpLnRoZW4ob25GaW5hbGx5LCBvbkZpbmFsbHkpO1xuICB9XG4gIHN5bmMoKSB7XG4gICAgaWYgKHRoaXMuZXJyb3IpIHRocm93IHRoaXMuZXJyb3I7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICB9XG4gIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgaWYgKCEoXCJmcm9tXCIgaW4gdGhpcy5fb3B0cykpIHtcbiAgICAgICAgd2Fybk9uY2UyKFxuICAgICAgICAgIFwiV2l0aG91dCBgZnJvbWAgb3B0aW9uIFBvc3RDU1MgY291bGQgZ2VuZXJhdGUgd3Jvbmcgc291cmNlIG1hcCBhbmQgd2lsbCBub3QgZmluZCBCcm93c2Vyc2xpc3QgY29uZmlnLiBTZXQgaXQgdG8gQ1NTIGZpbGUgcGF0aCBvciB0byBgdW5kZWZpbmVkYCB0byBwcmV2ZW50IHRoaXMgd2FybmluZy5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hc3luYygpLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9jc3M7XG4gIH1cbiAgd2FybmluZ3MoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGdldCBjb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdC5jc3M7XG4gIH1cbiAgZ2V0IGNzcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQuY3NzO1xuICB9XG4gIGdldCBtYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0Lm1hcDtcbiAgfVxuICBnZXQgbWVzc2FnZXMoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGdldCBvcHRzKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdC5vcHRzO1xuICB9XG4gIGdldCBwcm9jZXNzb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0LnByb2Nlc3NvcjtcbiAgfVxuICBnZXQgcm9vdCgpIHtcbiAgICBpZiAodGhpcy5fcm9vdCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XG4gICAgfVxuICAgIGxldCByb290MjtcbiAgICBsZXQgcGFyc2VyMiA9IHBhcnNlJDE7XG4gICAgdHJ5IHtcbiAgICAgIHJvb3QyID0gcGFyc2VyMih0aGlzLl9jc3MsIHRoaXMuX29wdHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgfVxuICAgIGlmICh0aGlzLmVycm9yKSB7XG4gICAgICB0aHJvdyB0aGlzLmVycm9yO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yb290ID0gcm9vdDI7XG4gICAgICByZXR1cm4gcm9vdDI7XG4gICAgfVxuICB9XG4gIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICByZXR1cm4gXCJOb1dvcmtSZXN1bHRcIjtcbiAgfVxufTtcbnZhciBub1dvcmtSZXN1bHQgPSBOb1dvcmtSZXN1bHQkMTtcbk5vV29ya1Jlc3VsdCQxLmRlZmF1bHQgPSBOb1dvcmtSZXN1bHQkMTtcbmxldCBOb1dvcmtSZXN1bHQyID0gbm9Xb3JrUmVzdWx0O1xubGV0IExhenlSZXN1bHQkMSA9IGxhenlSZXN1bHQ7XG5sZXQgRG9jdW1lbnQkMSA9IGRvY3VtZW50JDE7XG5sZXQgUm9vdCQyID0gcm9vdDtcbmxldCBQcm9jZXNzb3IkMSA9IGNsYXNzIFByb2Nlc3NvciB7XG4gIGNvbnN0cnVjdG9yKHBsdWdpbnMgPSBbXSkge1xuICAgIHRoaXMudmVyc2lvbiA9IFwiOC40LjM4XCI7XG4gICAgdGhpcy5wbHVnaW5zID0gdGhpcy5ub3JtYWxpemUocGx1Z2lucyk7XG4gIH1cbiAgbm9ybWFsaXplKHBsdWdpbnMpIHtcbiAgICBsZXQgbm9ybWFsaXplZCA9IFtdO1xuICAgIGZvciAobGV0IGkgb2YgcGx1Z2lucykge1xuICAgICAgaWYgKGkucG9zdGNzcyA9PT0gdHJ1ZSkge1xuICAgICAgICBpID0gaSgpO1xuICAgICAgfSBlbHNlIGlmIChpLnBvc3Rjc3MpIHtcbiAgICAgICAgaSA9IGkucG9zdGNzcztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgaSA9PT0gXCJvYmplY3RcIiAmJiBBcnJheS5pc0FycmF5KGkucGx1Z2lucykpIHtcbiAgICAgICAgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZWQuY29uY2F0KGkucGx1Z2lucyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpID09PSBcIm9iamVjdFwiICYmIGkucG9zdGNzc1BsdWdpbikge1xuICAgICAgICBub3JtYWxpemVkLnB1c2goaSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgbm9ybWFsaXplZC5wdXNoKGkpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaSA9PT0gXCJvYmplY3RcIiAmJiAoaS5wYXJzZSB8fCBpLnN0cmluZ2lmeSkpIHtcbiAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBcIlBvc3RDU1Mgc3ludGF4ZXMgY2Fubm90IGJlIHVzZWQgYXMgcGx1Z2lucy4gSW5zdGVhZCwgcGxlYXNlIHVzZSBvbmUgb2YgdGhlIHN5bnRheC9wYXJzZXIvc3RyaW5naWZpZXIgb3B0aW9ucyBhcyBvdXRsaW5lZCBpbiB5b3VyIFBvc3RDU1MgcnVubmVyIGRvY3VtZW50YXRpb24uXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoaSArIFwiIGlzIG5vdCBhIFBvc3RDU1MgcGx1Z2luXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9ybWFsaXplZDtcbiAgfVxuICBwcm9jZXNzKGNzcywgb3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLnBsdWdpbnMubGVuZ3RoICYmICFvcHRzLnBhcnNlciAmJiAhb3B0cy5zdHJpbmdpZmllciAmJiAhb3B0cy5zeW50YXgpIHtcbiAgICAgIHJldHVybiBuZXcgTm9Xb3JrUmVzdWx0Mih0aGlzLCBjc3MsIG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IExhenlSZXN1bHQkMSh0aGlzLCBjc3MsIG9wdHMpO1xuICAgIH1cbiAgfVxuICB1c2UocGx1Z2luMikge1xuICAgIHRoaXMucGx1Z2lucyA9IHRoaXMucGx1Z2lucy5jb25jYXQodGhpcy5ub3JtYWxpemUoW3BsdWdpbjJdKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG52YXIgcHJvY2Vzc29yID0gUHJvY2Vzc29yJDE7XG5Qcm9jZXNzb3IkMS5kZWZhdWx0ID0gUHJvY2Vzc29yJDE7XG5Sb290JDIucmVnaXN0ZXJQcm9jZXNzb3IoUHJvY2Vzc29yJDEpO1xuRG9jdW1lbnQkMS5yZWdpc3RlclByb2Nlc3NvcihQcm9jZXNzb3IkMSk7XG5sZXQgRGVjbGFyYXRpb24kMSA9IGRlY2xhcmF0aW9uO1xubGV0IFByZXZpb3VzTWFwMiA9IHByZXZpb3VzTWFwO1xubGV0IENvbW1lbnQkMSA9IGNvbW1lbnQ7XG5sZXQgQXRSdWxlJDEgPSBhdFJ1bGU7XG5sZXQgSW5wdXQkMSA9IGlucHV0O1xubGV0IFJvb3QkMSA9IHJvb3Q7XG5sZXQgUnVsZSQxID0gcnVsZTtcbmZ1bmN0aW9uIGZyb21KU09OJDEoanNvbiwgaW5wdXRzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGpzb24pKSByZXR1cm4ganNvbi5tYXAoKG4pID0+IGZyb21KU09OJDEobikpO1xuICBsZXQgX2EgPSBqc29uLCB7IGlucHV0czogb3duSW5wdXRzIH0gPSBfYSwgZGVmYXVsdHMgPSBfX29ialJlc3QoX2EsIFtcImlucHV0c1wiXSk7XG4gIGlmIChvd25JbnB1dHMpIHtcbiAgICBpbnB1dHMgPSBbXTtcbiAgICBmb3IgKGxldCBpbnB1dDIgb2Ygb3duSW5wdXRzKSB7XG4gICAgICBsZXQgaW5wdXRIeWRyYXRlZCA9IF9fc3ByZWFkUHJvcHMoX19zcHJlYWRWYWx1ZXMoe30sIGlucHV0MiksIHsgX19wcm90b19fOiBJbnB1dCQxLnByb3RvdHlwZSB9KTtcbiAgICAgIGlmIChpbnB1dEh5ZHJhdGVkLm1hcCkge1xuICAgICAgICBpbnB1dEh5ZHJhdGVkLm1hcCA9IF9fc3ByZWFkUHJvcHMoX19zcHJlYWRWYWx1ZXMoe30sIGlucHV0SHlkcmF0ZWQubWFwKSwge1xuICAgICAgICAgIF9fcHJvdG9fXzogUHJldmlvdXNNYXAyLnByb3RvdHlwZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlucHV0cy5wdXNoKGlucHV0SHlkcmF0ZWQpO1xuICAgIH1cbiAgfVxuICBpZiAoZGVmYXVsdHMubm9kZXMpIHtcbiAgICBkZWZhdWx0cy5ub2RlcyA9IGpzb24ubm9kZXMubWFwKChuKSA9PiBmcm9tSlNPTiQxKG4sIGlucHV0cykpO1xuICB9XG4gIGlmIChkZWZhdWx0cy5zb3VyY2UpIHtcbiAgICBsZXQgX2IgPSBkZWZhdWx0cy5zb3VyY2UsIHsgaW5wdXRJZCB9ID0gX2IsIHNvdXJjZSA9IF9fb2JqUmVzdChfYiwgW1wiaW5wdXRJZFwiXSk7XG4gICAgZGVmYXVsdHMuc291cmNlID0gc291cmNlO1xuICAgIGlmIChpbnB1dElkICE9IG51bGwpIHtcbiAgICAgIGRlZmF1bHRzLnNvdXJjZS5pbnB1dCA9IGlucHV0c1tpbnB1dElkXTtcbiAgICB9XG4gIH1cbiAgaWYgKGRlZmF1bHRzLnR5cGUgPT09IFwicm9vdFwiKSB7XG4gICAgcmV0dXJuIG5ldyBSb290JDEoZGVmYXVsdHMpO1xuICB9IGVsc2UgaWYgKGRlZmF1bHRzLnR5cGUgPT09IFwiZGVjbFwiKSB7XG4gICAgcmV0dXJuIG5ldyBEZWNsYXJhdGlvbiQxKGRlZmF1bHRzKTtcbiAgfSBlbHNlIGlmIChkZWZhdWx0cy50eXBlID09PSBcInJ1bGVcIikge1xuICAgIHJldHVybiBuZXcgUnVsZSQxKGRlZmF1bHRzKTtcbiAgfSBlbHNlIGlmIChkZWZhdWx0cy50eXBlID09PSBcImNvbW1lbnRcIikge1xuICAgIHJldHVybiBuZXcgQ29tbWVudCQxKGRlZmF1bHRzKTtcbiAgfSBlbHNlIGlmIChkZWZhdWx0cy50eXBlID09PSBcImF0cnVsZVwiKSB7XG4gICAgcmV0dXJuIG5ldyBBdFJ1bGUkMShkZWZhdWx0cyk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBub2RlIHR5cGU6IFwiICsganNvbi50eXBlKTtcbiAgfVxufVxudmFyIGZyb21KU09OXzEgPSBmcm9tSlNPTiQxO1xuZnJvbUpTT04kMS5kZWZhdWx0ID0gZnJvbUpTT04kMTtcbmxldCBDc3NTeW50YXhFcnJvcjIgPSBjc3NTeW50YXhFcnJvcjtcbmxldCBEZWNsYXJhdGlvbjIgPSBkZWNsYXJhdGlvbjtcbmxldCBMYXp5UmVzdWx0MiA9IGxhenlSZXN1bHQ7XG5sZXQgQ29udGFpbmVyMiA9IGNvbnRhaW5lcjtcbmxldCBQcm9jZXNzb3IyID0gcHJvY2Vzc29yO1xubGV0IHN0cmluZ2lmeSA9IHN0cmluZ2lmeV8xO1xubGV0IGZyb21KU09OID0gZnJvbUpTT05fMTtcbmxldCBEb2N1bWVudDIgPSBkb2N1bWVudCQxO1xubGV0IFdhcm5pbmcyID0gd2FybmluZztcbmxldCBDb21tZW50MiA9IGNvbW1lbnQ7XG5sZXQgQXRSdWxlMiA9IGF0UnVsZTtcbmxldCBSZXN1bHQyID0gcmVzdWx0O1xubGV0IElucHV0MiA9IGlucHV0O1xubGV0IHBhcnNlID0gcGFyc2VfMTtcbmxldCBsaXN0ID0gbGlzdF8xO1xubGV0IFJ1bGUyID0gcnVsZTtcbmxldCBSb290MiA9IHJvb3Q7XG5sZXQgTm9kZTIgPSBub2RlO1xuZnVuY3Rpb24gcG9zdGNzcyguLi5wbHVnaW5zKSB7XG4gIGlmIChwbHVnaW5zLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KHBsdWdpbnNbMF0pKSB7XG4gICAgcGx1Z2lucyA9IHBsdWdpbnNbMF07XG4gIH1cbiAgcmV0dXJuIG5ldyBQcm9jZXNzb3IyKHBsdWdpbnMpO1xufVxucG9zdGNzcy5wbHVnaW4gPSBmdW5jdGlvbiBwbHVnaW4obmFtZSwgaW5pdGlhbGl6ZXIpIHtcbiAgbGV0IHdhcm5pbmdQcmludGVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGNyZWF0b3IoLi4uYXJncykge1xuICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybiAmJiAhd2FybmluZ1ByaW50ZWQpIHtcbiAgICAgIHdhcm5pbmdQcmludGVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgbmFtZSArIFwiOiBwb3N0Y3NzLnBsdWdpbiB3YXMgZGVwcmVjYXRlZC4gTWlncmF0aW9uIGd1aWRlOlxcbmh0dHBzOi8vZXZpbG1hcnRpYW5zLmNvbS9jaHJvbmljbGVzL3Bvc3Rjc3MtOC1wbHVnaW4tbWlncmF0aW9uXCJcbiAgICAgICk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTEFORyAmJiBwcm9jZXNzLmVudi5MQU5HLnN0YXJ0c1dpdGgoXCJjblwiKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgbmFtZSArIFwiOiBcXHU5MUNDXFx1OTc2MiBwb3N0Y3NzLnBsdWdpbiBcXHU4OEFCXFx1NUYwM1xcdTc1MjguIFxcdThGQzFcXHU3OUZCXFx1NjMwN1xcdTUzNTc6XFxuaHR0cHM6Ly93d3cudzNjdGVjaC5jb20vdG9waWMvMjIyNlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCB0cmFuc2Zvcm1lciA9IGluaXRpYWxpemVyKC4uLmFyZ3MpO1xuICAgIHRyYW5zZm9ybWVyLnBvc3Rjc3NQbHVnaW4gPSBuYW1lO1xuICAgIHRyYW5zZm9ybWVyLnBvc3Rjc3NWZXJzaW9uID0gbmV3IFByb2Nlc3NvcjIoKS52ZXJzaW9uO1xuICAgIHJldHVybiB0cmFuc2Zvcm1lcjtcbiAgfVxuICBsZXQgY2FjaGU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdG9yLCBcInBvc3Rjc3NcIiwge1xuICAgIGdldCgpIHtcbiAgICAgIGlmICghY2FjaGUpIGNhY2hlID0gY3JlYXRvcigpO1xuICAgICAgcmV0dXJuIGNhY2hlO1xuICAgIH1cbiAgfSk7XG4gIGNyZWF0b3IucHJvY2VzcyA9IGZ1bmN0aW9uKGNzcywgcHJvY2Vzc09wdHMsIHBsdWdpbk9wdHMpIHtcbiAgICByZXR1cm4gcG9zdGNzcyhbY3JlYXRvcihwbHVnaW5PcHRzKV0pLnByb2Nlc3MoY3NzLCBwcm9jZXNzT3B0cyk7XG4gIH07XG4gIHJldHVybiBjcmVhdG9yO1xufTtcbnBvc3Rjc3Muc3RyaW5naWZ5ID0gc3RyaW5naWZ5O1xucG9zdGNzcy5wYXJzZSA9IHBhcnNlO1xucG9zdGNzcy5mcm9tSlNPTiA9IGZyb21KU09OO1xucG9zdGNzcy5saXN0ID0gbGlzdDtcbnBvc3Rjc3MuY29tbWVudCA9IChkZWZhdWx0cykgPT4gbmV3IENvbW1lbnQyKGRlZmF1bHRzKTtcbnBvc3Rjc3MuYXRSdWxlID0gKGRlZmF1bHRzKSA9PiBuZXcgQXRSdWxlMihkZWZhdWx0cyk7XG5wb3N0Y3NzLmRlY2wgPSAoZGVmYXVsdHMpID0+IG5ldyBEZWNsYXJhdGlvbjIoZGVmYXVsdHMpO1xucG9zdGNzcy5ydWxlID0gKGRlZmF1bHRzKSA9PiBuZXcgUnVsZTIoZGVmYXVsdHMpO1xucG9zdGNzcy5yb290ID0gKGRlZmF1bHRzKSA9PiBuZXcgUm9vdDIoZGVmYXVsdHMpO1xucG9zdGNzcy5kb2N1bWVudCA9IChkZWZhdWx0cykgPT4gbmV3IERvY3VtZW50MihkZWZhdWx0cyk7XG5wb3N0Y3NzLkNzc1N5bnRheEVycm9yID0gQ3NzU3ludGF4RXJyb3IyO1xucG9zdGNzcy5EZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uMjtcbnBvc3Rjc3MuQ29udGFpbmVyID0gQ29udGFpbmVyMjtcbnBvc3Rjc3MuUHJvY2Vzc29yID0gUHJvY2Vzc29yMjtcbnBvc3Rjc3MuRG9jdW1lbnQgPSBEb2N1bWVudDI7XG5wb3N0Y3NzLkNvbW1lbnQgPSBDb21tZW50MjtcbnBvc3Rjc3MuV2FybmluZyA9IFdhcm5pbmcyO1xucG9zdGNzcy5BdFJ1bGUgPSBBdFJ1bGUyO1xucG9zdGNzcy5SZXN1bHQgPSBSZXN1bHQyO1xucG9zdGNzcy5JbnB1dCA9IElucHV0MjtcbnBvc3Rjc3MuUnVsZSA9IFJ1bGUyO1xucG9zdGNzcy5Sb290ID0gUm9vdDI7XG5wb3N0Y3NzLk5vZGUgPSBOb2RlMjtcbkxhenlSZXN1bHQyLnJlZ2lzdGVyUG9zdGNzcyhwb3N0Y3NzKTtcbnZhciBwb3N0Y3NzXzEgPSBwb3N0Y3NzO1xucG9zdGNzcy5kZWZhdWx0ID0gcG9zdGNzcztcbmNvbnN0IHBvc3Rjc3MkMSA9IC8qIEBfX1BVUkVfXyAqLyBnZXREZWZhdWx0RXhwb3J0RnJvbUNqcyhwb3N0Y3NzXzEpO1xucG9zdGNzcyQxLnN0cmluZ2lmeTtcbnBvc3Rjc3MkMS5mcm9tSlNPTjtcbnBvc3Rjc3MkMS5wbHVnaW47XG5wb3N0Y3NzJDEucGFyc2U7XG5wb3N0Y3NzJDEubGlzdDtcbnBvc3Rjc3MkMS5kb2N1bWVudDtcbnBvc3Rjc3MkMS5jb21tZW50O1xucG9zdGNzcyQxLmF0UnVsZTtcbnBvc3Rjc3MkMS5ydWxlO1xucG9zdGNzcyQxLmRlY2w7XG5wb3N0Y3NzJDEucm9vdDtcbnBvc3Rjc3MkMS5Dc3NTeW50YXhFcnJvcjtcbnBvc3Rjc3MkMS5EZWNsYXJhdGlvbjtcbnBvc3Rjc3MkMS5Db250YWluZXI7XG5wb3N0Y3NzJDEuUHJvY2Vzc29yO1xucG9zdGNzcyQxLkRvY3VtZW50O1xucG9zdGNzcyQxLkNvbW1lbnQ7XG5wb3N0Y3NzJDEuV2FybmluZztcbnBvc3Rjc3MkMS5BdFJ1bGU7XG5wb3N0Y3NzJDEuUmVzdWx0O1xucG9zdGNzcyQxLklucHV0O1xucG9zdGNzcyQxLlJ1bGU7XG5wb3N0Y3NzJDEuUm9vdDtcbnBvc3Rjc3MkMS5Ob2RlO1xuY29uc3QgdGFnTWFwID0ge1xuICBzY3JpcHQ6IFwibm9zY3JpcHRcIixcbiAgLy8gY2FtZWwgY2FzZSBzdmcgZWxlbWVudCB0YWcgbmFtZXNcbiAgYWx0Z2x5cGg6IFwiYWx0R2x5cGhcIixcbiAgYWx0Z2x5cGhkZWY6IFwiYWx0R2x5cGhEZWZcIixcbiAgYWx0Z2x5cGhpdGVtOiBcImFsdEdseXBoSXRlbVwiLFxuICBhbmltYXRlY29sb3I6IFwiYW5pbWF0ZUNvbG9yXCIsXG4gIGFuaW1hdGVtb3Rpb246IFwiYW5pbWF0ZU1vdGlvblwiLFxuICBhbmltYXRldHJhbnNmb3JtOiBcImFuaW1hdGVUcmFuc2Zvcm1cIixcbiAgY2xpcHBhdGg6IFwiY2xpcFBhdGhcIixcbiAgZmVibGVuZDogXCJmZUJsZW5kXCIsXG4gIGZlY29sb3JtYXRyaXg6IFwiZmVDb2xvck1hdHJpeFwiLFxuICBmZWNvbXBvbmVudHRyYW5zZmVyOiBcImZlQ29tcG9uZW50VHJhbnNmZXJcIixcbiAgZmVjb21wb3NpdGU6IFwiZmVDb21wb3NpdGVcIixcbiAgZmVjb252b2x2ZW1hdHJpeDogXCJmZUNvbnZvbHZlTWF0cml4XCIsXG4gIGZlZGlmZnVzZWxpZ2h0aW5nOiBcImZlRGlmZnVzZUxpZ2h0aW5nXCIsXG4gIGZlZGlzcGxhY2VtZW50bWFwOiBcImZlRGlzcGxhY2VtZW50TWFwXCIsXG4gIGZlZGlzdGFudGxpZ2h0OiBcImZlRGlzdGFudExpZ2h0XCIsXG4gIGZlZHJvcHNoYWRvdzogXCJmZURyb3BTaGFkb3dcIixcbiAgZmVmbG9vZDogXCJmZUZsb29kXCIsXG4gIGZlZnVuY2E6IFwiZmVGdW5jQVwiLFxuICBmZWZ1bmNiOiBcImZlRnVuY0JcIixcbiAgZmVmdW5jZzogXCJmZUZ1bmNHXCIsXG4gIGZlZnVuY3I6IFwiZmVGdW5jUlwiLFxuICBmZWdhdXNzaWFuYmx1cjogXCJmZUdhdXNzaWFuQmx1clwiLFxuICBmZWltYWdlOiBcImZlSW1hZ2VcIixcbiAgZmVtZXJnZTogXCJmZU1lcmdlXCIsXG4gIGZlbWVyZ2Vub2RlOiBcImZlTWVyZ2VOb2RlXCIsXG4gIGZlbW9ycGhvbG9neTogXCJmZU1vcnBob2xvZ3lcIixcbiAgZmVvZmZzZXQ6IFwiZmVPZmZzZXRcIixcbiAgZmVwb2ludGxpZ2h0OiBcImZlUG9pbnRMaWdodFwiLFxuICBmZXNwZWN1bGFybGlnaHRpbmc6IFwiZmVTcGVjdWxhckxpZ2h0aW5nXCIsXG4gIGZlc3BvdGxpZ2h0OiBcImZlU3BvdExpZ2h0XCIsXG4gIGZldGlsZTogXCJmZVRpbGVcIixcbiAgZmV0dXJidWxlbmNlOiBcImZlVHVyYnVsZW5jZVwiLFxuICBmb3JlaWdub2JqZWN0OiBcImZvcmVpZ25PYmplY3RcIixcbiAgZ2x5cGhyZWY6IFwiZ2x5cGhSZWZcIixcbiAgbGluZWFyZ3JhZGllbnQ6IFwibGluZWFyR3JhZGllbnRcIixcbiAgcmFkaWFsZ3JhZGllbnQ6IFwicmFkaWFsR3JhZGllbnRcIlxufTtcbmZ1bmN0aW9uIGdldFRhZ05hbWUobikge1xuICBsZXQgdGFnTmFtZSA9IHRhZ01hcFtuLnRhZ05hbWVdID8gdGFnTWFwW24udGFnTmFtZV0gOiBuLnRhZ05hbWU7XG4gIGlmICh0YWdOYW1lID09PSBcImxpbmtcIiAmJiBuLmF0dHJpYnV0ZXMuX2Nzc1RleHQpIHtcbiAgICB0YWdOYW1lID0gXCJzdHlsZVwiO1xuICB9XG4gIHJldHVybiB0YWdOYW1lO1xufVxuZnVuY3Rpb24gYWRhcHRDc3NGb3JSZXBsYXkoY3NzVGV4dCwgY2FjaGUpIHtcbiAgY29uc3QgY2FjaGVkU3R5bGUgPSBjYWNoZSA9PSBudWxsID8gdm9pZCAwIDogY2FjaGUuc3R5bGVzV2l0aEhvdmVyQ2xhc3MuZ2V0KGNzc1RleHQpO1xuICBpZiAoY2FjaGVkU3R5bGUpIHJldHVybiBjYWNoZWRTdHlsZTtcbiAgbGV0IHJlc3VsdDIgPSBjc3NUZXh0O1xuICB0cnkge1xuICAgIGNvbnN0IGFzdCA9IHBvc3Rjc3MkMShbXG4gICAgICBtZWRpYVNlbGVjdG9yUGx1Z2luLFxuICAgICAgcHNldWRvQ2xhc3NQbHVnaW5cbiAgICBdKS5wcm9jZXNzKGNzc1RleHQpO1xuICAgIHJlc3VsdDIgPSBhc3QuY3NzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUud2FybihcIkZhaWxlZCB0byBhZGFwdCBjc3MgZm9yIHJlcGxheVwiLCBlcnJvcik7XG4gIH1cbiAgY2FjaGUgPT0gbnVsbCA/IHZvaWQgMCA6IGNhY2hlLnN0eWxlc1dpdGhIb3ZlckNsYXNzLnNldChjc3NUZXh0LCByZXN1bHQyKTtcbiAgcmV0dXJuIHJlc3VsdDI7XG59XG5mdW5jdGlvbiBjcmVhdGVDYWNoZSgpIHtcbiAgY29uc3Qgc3R5bGVzV2l0aEhvdmVyQ2xhc3MgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICByZXR1cm4ge1xuICAgIHN0eWxlc1dpdGhIb3ZlckNsYXNzXG4gIH07XG59XG5mdW5jdGlvbiBhcHBseUNzc1NwbGl0cyhuLCBjc3NUZXh0LCBoYWNrQ3NzLCBjYWNoZSkge1xuICBjb25zdCBjaGlsZFRleHROb2RlcyA9IFtdO1xuICBmb3IgKGNvbnN0IHNjbiBvZiBuLmNoaWxkTm9kZXMpIHtcbiAgICBpZiAoc2NuLnR5cGUgPT09IE5vZGVUeXBlLlRleHQpIHtcbiAgICAgIGNoaWxkVGV4dE5vZGVzLnB1c2goc2NuKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgY3NzVGV4dFNwbGl0cyA9IGNzc1RleHQuc3BsaXQoXCIvKiBycl9zcGxpdCAqL1wiKTtcbiAgd2hpbGUgKGNzc1RleHRTcGxpdHMubGVuZ3RoID4gMSAmJiBjc3NUZXh0U3BsaXRzLmxlbmd0aCA+IGNoaWxkVGV4dE5vZGVzLmxlbmd0aCkge1xuICAgIGNzc1RleHRTcGxpdHMuc3BsaWNlKC0yLCAyLCBjc3NUZXh0U3BsaXRzLnNsaWNlKC0yKS5qb2luKFwiXCIpKTtcbiAgfVxuICBsZXQgYWRhcHRlZENzcyA9IFwiXCI7XG4gIGlmIChoYWNrQ3NzKSB7XG4gICAgYWRhcHRlZENzcyA9IGFkYXB0Q3NzRm9yUmVwbGF5KGNzc1RleHRTcGxpdHMuam9pbihcIlwiKSwgY2FjaGUpO1xuICB9XG4gIGxldCBzdGFydEluZGV4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZFRleHROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpID09PSBjc3NUZXh0U3BsaXRzLmxlbmd0aCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkVGV4dE5vZGUgPSBjaGlsZFRleHROb2Rlc1tpXTtcbiAgICBpZiAoIWhhY2tDc3MpIHtcbiAgICAgIGNoaWxkVGV4dE5vZGUudGV4dENvbnRlbnQgPSBjc3NUZXh0U3BsaXRzW2ldO1xuICAgIH0gZWxzZSBpZiAoaSA8IGNzc1RleHRTcGxpdHMubGVuZ3RoIC0gMSkge1xuICAgICAgbGV0IGVuZEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICAgIGxldCBlbmRTZWFyY2ggPSBjc3NUZXh0U3BsaXRzW2kgKyAxXS5sZW5ndGg7XG4gICAgICBlbmRTZWFyY2ggPSBNYXRoLm1pbihlbmRTZWFyY2gsIDMwKTtcbiAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgZm9yICg7IGVuZFNlYXJjaCA+IDI7IGVuZFNlYXJjaC0tKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaEJpdCA9IGNzc1RleHRTcGxpdHNbaSArIDFdLnN1YnN0cmluZygwLCBlbmRTZWFyY2gpO1xuICAgICAgICBjb25zdCBzZWFyY2hJbmRleCA9IGFkYXB0ZWRDc3Muc3Vic3RyaW5nKHN0YXJ0SW5kZXgpLmluZGV4T2Yoc2VhcmNoQml0KTtcbiAgICAgICAgZm91bmQgPSBzZWFyY2hJbmRleCAhPT0gLTE7XG4gICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgIGVuZEluZGV4ICs9IHNlYXJjaEluZGV4O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgIGVuZEluZGV4ICs9IGNzc1RleHRTcGxpdHNbaV0ubGVuZ3RoO1xuICAgICAgfVxuICAgICAgY2hpbGRUZXh0Tm9kZS50ZXh0Q29udGVudCA9IGFkYXB0ZWRDc3Muc3Vic3RyaW5nKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcbiAgICAgIHN0YXJ0SW5kZXggPSBlbmRJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRUZXh0Tm9kZS50ZXh0Q29udGVudCA9IGFkYXB0ZWRDc3Muc3Vic3RyaW5nKHN0YXJ0SW5kZXgpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gYnVpbGRTdHlsZU5vZGUobiwgc3R5bGVFbCwgY3NzVGV4dCwgb3B0aW9ucykge1xuICBjb25zdCB7IGRvYywgaGFja0NzcywgY2FjaGUgfSA9IG9wdGlvbnM7XG4gIGlmIChuLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgYXBwbHlDc3NTcGxpdHMobiwgY3NzVGV4dCwgaGFja0NzcywgY2FjaGUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChoYWNrQ3NzKSB7XG4gICAgICBjc3NUZXh0ID0gYWRhcHRDc3NGb3JSZXBsYXkoY3NzVGV4dCwgY2FjaGUpO1xuICAgIH1cbiAgICBzdHlsZUVsLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVUZXh0Tm9kZShjc3NUZXh0KSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGJ1aWxkTm9kZShuLCBvcHRpb25zKSB7XG4gIHZhciBfYSwgX2I7XG4gIGNvbnN0IHsgZG9jLCBoYWNrQ3NzLCBjYWNoZSB9ID0gb3B0aW9ucztcbiAgc3dpdGNoIChuLnR5cGUpIHtcbiAgICBjYXNlIE5vZGVUeXBlLkRvY3VtZW50OlxuICAgICAgcmV0dXJuIGRvYy5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudChudWxsLCBcIlwiLCBudWxsKTtcbiAgICBjYXNlIE5vZGVUeXBlLkRvY3VtZW50VHlwZTpcbiAgICAgIHJldHVybiBkb2MuaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnRUeXBlKFxuICAgICAgICBuLm5hbWUgfHwgXCJodG1sXCIsXG4gICAgICAgIG4ucHVibGljSWQsXG4gICAgICAgIG4uc3lzdGVtSWRcbiAgICAgICk7XG4gICAgY2FzZSBOb2RlVHlwZS5FbGVtZW50OiB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZ2V0VGFnTmFtZShuKTtcbiAgICAgIGxldCBub2RlMjtcbiAgICAgIGlmIChuLmlzU1ZHKSB7XG4gICAgICAgIG5vZGUyID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHRhZ05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC8vIElmIHRoZSB0YWcgbmFtZSBpcyBhIGN1c3RvbSBlbGVtZW50IG5hbWVcbiAgICAgICAgICBuLmlzQ3VzdG9tICYmIC8vIElmIHRoZSBicm93c2VyIHN1cHBvcnRzIGN1c3RvbSBlbGVtZW50c1xuICAgICAgICAgICgoX2EgPSBkb2MuZGVmYXVsdFZpZXcpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jdXN0b21FbGVtZW50cykgJiYgLy8gSWYgdGhlIGN1c3RvbSBlbGVtZW50IGhhc24ndCBiZWVuIGRlZmluZWQgeWV0XG4gICAgICAgICAgIWRvYy5kZWZhdWx0Vmlldy5jdXN0b21FbGVtZW50cy5nZXQobi50YWdOYW1lKVxuICAgICAgICApXG4gICAgICAgICAgZG9jLmRlZmF1bHRWaWV3LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcbiAgICAgICAgICAgIG4udGFnTmFtZSxcbiAgICAgICAgICAgIGNsYXNzIGV4dGVuZHMgZG9jLmRlZmF1bHRWaWV3LkhUTUxFbGVtZW50IHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICBub2RlMiA9IGRvYy5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3BlY2lhbEF0dHJpYnV0ZXMgPSB7fTtcbiAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBuLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobi5hdHRyaWJ1dGVzLCBuYW1lKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCB2YWx1ZSA9IG4uYXR0cmlidXRlc1tuYW1lXTtcbiAgICAgICAgaWYgKHRhZ05hbWUgPT09IFwib3B0aW9uXCIgJiYgbmFtZSA9PT0gXCJzZWxlY3RlZFwiICYmIHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkgdmFsdWUgPSBcIlwiO1xuICAgICAgICBpZiAobmFtZS5zdGFydHNXaXRoKFwicnJfXCIpKSB7XG4gICAgICAgICAgc3BlY2lhbEF0dHJpYnV0ZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSA7XG4gICAgICAgIGVsc2UgaWYgKHRhZ05hbWUgPT09IFwic3R5bGVcIiAmJiBuYW1lID09PSBcIl9jc3NUZXh0XCIpIHtcbiAgICAgICAgICBidWlsZFN0eWxlTm9kZShuLCBub2RlMiwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwidGV4dGFyZWFcIiAmJiBuYW1lID09PSBcInZhbHVlXCIpIHtcbiAgICAgICAgICBub2RlMi5hcHBlbmRDaGlsZChkb2MuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICBuLmNoaWxkTm9kZXMgPSBbXTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChuLmlzU1ZHICYmIG5hbWUgPT09IFwieGxpbms6aHJlZlwiKSB7XG4gICAgICAgICAgICBub2RlMi5zZXRBdHRyaWJ1dGVOUyhcbiAgICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcIm9ubG9hZFwiIHx8IG5hbWUgPT09IFwib25jbGlja1wiIHx8IG5hbWUuc3Vic3RyaW5nKDAsIDcpID09PSBcIm9ubW91c2VcIikge1xuICAgICAgICAgICAgbm9kZTIuc2V0QXR0cmlidXRlKFwiX1wiICsgbmFtZSwgdmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcIm1ldGFcIiAmJiBuLmF0dHJpYnV0ZXNbXCJodHRwLWVxdWl2XCJdID09PSBcIkNvbnRlbnQtU2VjdXJpdHktUG9saWN5XCIgJiYgbmFtZSA9PT0gXCJjb250ZW50XCIpIHtcbiAgICAgICAgICAgIG5vZGUyLnNldEF0dHJpYnV0ZShcImNzcC1jb250ZW50XCIsIHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcImxpbmtcIiAmJiAobi5hdHRyaWJ1dGVzLnJlbCA9PT0gXCJwcmVsb2FkXCIgJiYgbi5hdHRyaWJ1dGVzLmFzID09PSBcInNjcmlwdFwiIHx8IG4uYXR0cmlidXRlcy5yZWwgPT09IFwibW9kdWxlcHJlbG9hZFwiKSkge1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJsaW5rXCIgJiYgbi5hdHRyaWJ1dGVzLnJlbCA9PT0gXCJwcmVmZXRjaFwiICYmIHR5cGVvZiBuLmF0dHJpYnV0ZXMuaHJlZiA9PT0gXCJzdHJpbmdcIiAmJiBleHRyYWN0RmlsZUV4dGVuc2lvbihuLmF0dHJpYnV0ZXMuaHJlZikgPT09IFwianNcIikge1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJpbWdcIiAmJiBuLmF0dHJpYnV0ZXMuc3Jjc2V0ICYmIG4uYXR0cmlidXRlcy5ycl9kYXRhVVJMKSB7XG4gICAgICAgICAgICBub2RlMi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgIFwicnJ3ZWItb3JpZ2luYWwtc3Jjc2V0XCIsXG4gICAgICAgICAgICAgIG4uYXR0cmlidXRlcy5zcmNzZXRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUyLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBzcGVjaWFsQXR0cmlidXRlcykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHNwZWNpYWxBdHRyaWJ1dGVzW25hbWVdO1xuICAgICAgICBpZiAodGFnTmFtZSA9PT0gXCJjYW52YXNcIiAmJiBuYW1lID09PSBcInJyX2RhdGFVUkxcIikge1xuICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gbm9kZTIuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGltYWdlLnNyYyA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgaWYgKG5vZGUyLlJSTm9kZVR5cGUpXG4gICAgICAgICAgICBub2RlMi5ycl9kYXRhVVJMID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcImltZ1wiICYmIG5hbWUgPT09IFwicnJfZGF0YVVSTFwiKSB7XG4gICAgICAgICAgY29uc3QgaW1hZ2UgPSBub2RlMjtcbiAgICAgICAgICBpZiAoIWltYWdlLmN1cnJlbnRTcmMuc3RhcnRzV2l0aChcImRhdGE6XCIpKSB7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgIFwicnJ3ZWItb3JpZ2luYWwtc3JjXCIsXG4gICAgICAgICAgICAgIG4uYXR0cmlidXRlcy5zcmNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobmFtZSA9PT0gXCJycl93aWR0aFwiKSB7XG4gICAgICAgICAgbm9kZTIuc3R5bGUuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCB2YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInJyX2hlaWdodFwiKSB7XG4gICAgICAgICAgbm9kZTIuc3R5bGUuc2V0UHJvcGVydHkoXCJoZWlnaHRcIiwgdmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJycl9tZWRpYUN1cnJlbnRUaW1lXCIgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgbm9kZTIuY3VycmVudFRpbWUgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInJyX21lZGlhU3RhdGVcIikge1xuICAgICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJwbGF5ZWRcIjpcbiAgICAgICAgICAgICAgbm9kZTIucGxheSgpLmNhdGNoKChlKSA9PiBjb25zb2xlLndhcm4oXCJtZWRpYSBwbGF5YmFjayBlcnJvclwiLCBlKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBhdXNlZFwiOlxuICAgICAgICAgICAgICBub2RlMi5wYXVzZSgpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJycl9tZWRpYVBsYXliYWNrUmF0ZVwiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIG5vZGUyLnBsYXliYWNrUmF0ZSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwicnJfbWVkaWFNdXRlZFwiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICBub2RlMi5tdXRlZCA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwicnJfbWVkaWFMb29wXCIgJiYgdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgIG5vZGUyLmxvb3AgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInJyX21lZGlhVm9sdW1lXCIgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgbm9kZTIudm9sdW1lID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJycl9vcGVuX21vZGVcIikge1xuICAgICAgICAgIG5vZGUyLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwicnJfb3Blbl9tb2RlXCIsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChuLmlzU2hhZG93SG9zdCkge1xuICAgICAgICBpZiAoIW5vZGUyLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBub2RlMi5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcbiAgICAgICAgICAoX2IgPSBuLmNocm9tYXRpY0Fkb3B0ZWRTdHlsZXNoZWV0cykgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLmZvckVhY2goXG4gICAgICAgICAgICAoY2hyb21hdGljQWRvcHRlZFN0eWxlc2hlZXQpID0+IHtcbiAgICAgICAgICAgICAgdmFyIF9hMjtcbiAgICAgICAgICAgICAgY29uc3Qgc3R5bGVTaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQucmVwbGFjZVN5bmMoY2hyb21hdGljQWRvcHRlZFN0eWxlc2hlZXQpO1xuICAgICAgICAgICAgICAoX2EyID0gbm9kZTIuc2hhZG93Um9vdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzdHlsZVNoZWV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdoaWxlIChub2RlMi5zaGFkb3dSb290LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIG5vZGUyLnNoYWRvd1Jvb3QucmVtb3ZlQ2hpbGQobm9kZTIuc2hhZG93Um9vdC5maXJzdENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlMjtcbiAgICB9XG4gICAgY2FzZSBOb2RlVHlwZS5UZXh0OlxuICAgICAgaWYgKG4uaXNTdHlsZSAmJiBoYWNrQ3NzKSB7XG4gICAgICAgIHJldHVybiBkb2MuY3JlYXRlVGV4dE5vZGUoYWRhcHRDc3NGb3JSZXBsYXkobi50ZXh0Q29udGVudCwgY2FjaGUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkb2MuY3JlYXRlVGV4dE5vZGUobi50ZXh0Q29udGVudCk7XG4gICAgY2FzZSBOb2RlVHlwZS5DREFUQTpcbiAgICAgIHJldHVybiBkb2MuY3JlYXRlQ0RBVEFTZWN0aW9uKG4udGV4dENvbnRlbnQpO1xuICAgIGNhc2UgTm9kZVR5cGUuQ29tbWVudDpcbiAgICAgIHJldHVybiBkb2MuY3JlYXRlQ29tbWVudChuLnRleHRDb250ZW50KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbmZ1bmN0aW9uIGJ1aWxkTm9kZVdpdGhTTihuLCBvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBkb2MsXG4gICAgbWlycm9yLFxuICAgIHNraXBDaGlsZCA9IGZhbHNlLFxuICAgIGhhY2tDc3MgPSB0cnVlLFxuICAgIGFmdGVyQXBwZW5kLFxuICAgIGNhY2hlXG4gIH0gPSBvcHRpb25zO1xuICBpZiAobWlycm9yLmhhcyhuLmlkKSkge1xuICAgIGNvbnN0IG5vZGVJbk1pcnJvciA9IG1pcnJvci5nZXROb2RlKG4uaWQpO1xuICAgIGNvbnN0IG1ldGEgPSBtaXJyb3IuZ2V0TWV0YShub2RlSW5NaXJyb3IpO1xuICAgIGlmIChpc05vZGVNZXRhRXF1YWwobWV0YSwgbikpIHJldHVybiBtaXJyb3IuZ2V0Tm9kZShuLmlkKTtcbiAgfVxuICBsZXQgbm9kZTIgPSBidWlsZE5vZGUobiwgeyBkb2MsIGhhY2tDc3MsIGNhY2hlIH0pO1xuICBpZiAoIW5vZGUyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKG4ucm9vdElkICYmIG1pcnJvci5nZXROb2RlKG4ucm9vdElkKSAhPT0gZG9jKSB7XG4gICAgbWlycm9yLnJlcGxhY2Uobi5yb290SWQsIGRvYyk7XG4gIH1cbiAgaWYgKG4udHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQpIHtcbiAgICBkb2MuY2xvc2UoKTtcbiAgICBkb2Mub3BlbigpO1xuICAgIGlmIChuLmNvbXBhdE1vZGUgPT09IFwiQmFja0NvbXBhdFwiICYmIG4uY2hpbGROb2RlcyAmJiBuLmNoaWxkTm9kZXNbMF0udHlwZSAhPT0gTm9kZVR5cGUuRG9jdW1lbnRUeXBlKSB7XG4gICAgICBpZiAobi5jaGlsZE5vZGVzWzBdLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiYgXCJ4bWxuc1wiIGluIG4uY2hpbGROb2Rlc1swXS5hdHRyaWJ1dGVzICYmIG4uY2hpbGROb2Rlc1swXS5hdHRyaWJ1dGVzLnhtbG5zID09PSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIikge1xuICAgICAgICBkb2Mud3JpdGUoXG4gICAgICAgICAgJzwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIFhIVE1MIDEuMCBUcmFuc2l0aW9uYWwvL0VOXCIgXCJcIj4nXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2Mud3JpdGUoXG4gICAgICAgICAgJzwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIEhUTUwgNC4wIFRyYW5zaXRpb25hbC8vRU5cIiBcIlwiPidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbm9kZTIgPSBkb2M7XG4gIH1cbiAgbWlycm9yLmFkZChub2RlMiwgbik7XG4gIGlmICgobi50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCB8fCBuLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpICYmICFza2lwQ2hpbGQpIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkTiBvZiBuLmNoaWxkTm9kZXMpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGJ1aWxkTm9kZVdpdGhTTihjaGlsZE4sIHtcbiAgICAgICAgZG9jLFxuICAgICAgICBtaXJyb3IsXG4gICAgICAgIHNraXBDaGlsZDogZmFsc2UsXG4gICAgICAgIGhhY2tDc3MsXG4gICAgICAgIGFmdGVyQXBwZW5kLFxuICAgICAgICBjYWNoZVxuICAgICAgfSk7XG4gICAgICBpZiAoIWNoaWxkTm9kZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJGYWlsZWQgdG8gcmVidWlsZFwiLCBjaGlsZE4pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZE4uaXNTaGFkb3cgJiYgaXNFbGVtZW50KG5vZGUyKSAmJiBub2RlMi5zaGFkb3dSb290KSB7XG4gICAgICAgIG5vZGUyLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgIH0gZWxzZSBpZiAobi50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCAmJiBjaGlsZE4udHlwZSA9PSBOb2RlVHlwZS5FbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gY2hpbGROb2RlO1xuICAgICAgICBsZXQgYm9keSA9IG51bGw7XG4gICAgICAgIGh0bWxFbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICBpZiAoY2hpbGQubm9kZU5hbWUgPT09IFwiQk9EWVwiKSBib2R5ID0gY2hpbGQ7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgIGh0bWxFbGVtZW50LnJlbW92ZUNoaWxkKGJvZHkpO1xuICAgICAgICAgIG5vZGUyLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gICAgICAgICAgaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZTIuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZTIuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgIH1cbiAgICAgIGlmIChhZnRlckFwcGVuZCkge1xuICAgICAgICBhZnRlckFwcGVuZChjaGlsZE5vZGUsIGNoaWxkTi5pZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBub2RlMjtcbn1cbmZ1bmN0aW9uIHZpc2l0KG1pcnJvciwgb25WaXNpdCkge1xuICBmdW5jdGlvbiB3YWxrKG5vZGUyKSB7XG4gICAgb25WaXNpdChub2RlMik7XG4gIH1cbiAgZm9yIChjb25zdCBpZCBvZiBtaXJyb3IuZ2V0SWRzKCkpIHtcbiAgICBpZiAobWlycm9yLmhhcyhpZCkpIHtcbiAgICAgIHdhbGsobWlycm9yLmdldE5vZGUoaWQpKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZVNjcm9sbChub2RlMiwgbWlycm9yKSB7XG4gIGNvbnN0IG4gPSBtaXJyb3IuZ2V0TWV0YShub2RlMik7XG4gIGlmICgobiA9PSBudWxsID8gdm9pZCAwIDogbi50eXBlKSAhPT0gTm9kZVR5cGUuRWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBlbCA9IG5vZGUyO1xuICBmb3IgKGNvbnN0IG5hbWUgaW4gbi5hdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCEoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4uYXR0cmlidXRlcywgbmFtZSkgJiYgbmFtZS5zdGFydHNXaXRoKFwicnJfXCIpKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gbi5hdHRyaWJ1dGVzW25hbWVdO1xuICAgIGlmIChuYW1lID09PSBcInJyX3Njcm9sbExlZnRcIikge1xuICAgICAgZWwuc2Nyb2xsTGVmdCA9IHZhbHVlO1xuICAgIH1cbiAgICBpZiAobmFtZSA9PT0gXCJycl9zY3JvbGxUb3BcIikge1xuICAgICAgZWwuc2Nyb2xsVG9wID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiByZWJ1aWxkKG4sIG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGRvYyxcbiAgICBvblZpc2l0LFxuICAgIGhhY2tDc3MgPSB0cnVlLFxuICAgIGFmdGVyQXBwZW5kLFxuICAgIGNhY2hlLFxuICAgIG1pcnJvciA9IG5ldyBNaXJyb3IoKVxuICB9ID0gb3B0aW9ucztcbiAgY29uc3Qgbm9kZTIgPSBidWlsZE5vZGVXaXRoU04obiwge1xuICAgIGRvYyxcbiAgICBtaXJyb3IsXG4gICAgc2tpcENoaWxkOiBmYWxzZSxcbiAgICBoYWNrQ3NzLFxuICAgIGFmdGVyQXBwZW5kLFxuICAgIGNhY2hlXG4gIH0pO1xuICB2aXNpdChtaXJyb3IsICh2aXNpdGVkTm9kZSkgPT4ge1xuICAgIGlmIChvblZpc2l0KSB7XG4gICAgICBvblZpc2l0KHZpc2l0ZWROb2RlKTtcbiAgICB9XG4gICAgaGFuZGxlU2Nyb2xsKHZpc2l0ZWROb2RlLCBtaXJyb3IpO1xuICB9KTtcbiAgcmV0dXJuIG5vZGUyO1xufVxuZXhwb3J0cy5JR05PUkVEX05PREUgPSBJR05PUkVEX05PREU7XG5leHBvcnRzLk1pcnJvciA9IE1pcnJvcjtcbmV4cG9ydHMuYWJzb2x1dGlmeVVSTHMgPSBhYnNvbHV0aWZ5VVJMcztcbmV4cG9ydHMuYWRhcHRDc3NGb3JSZXBsYXkgPSBhZGFwdENzc0ZvclJlcGxheTtcbmV4cG9ydHMuYnVpbGROb2RlV2l0aFNOID0gYnVpbGROb2RlV2l0aFNOO1xuZXhwb3J0cy5jbGFzc01hdGNoZXNSZWdleCA9IGNsYXNzTWF0Y2hlc1JlZ2V4O1xuZXhwb3J0cy5jbGVhbnVwU25hcHNob3QgPSBjbGVhbnVwU25hcHNob3Q7XG5leHBvcnRzLmNyZWF0ZUNhY2hlID0gY3JlYXRlQ2FjaGU7XG5leHBvcnRzLmNyZWF0ZU1pcnJvciA9IGNyZWF0ZU1pcnJvcjtcbmV4cG9ydHMuZXNjYXBlSW1wb3J0U3RhdGVtZW50ID0gZXNjYXBlSW1wb3J0U3RhdGVtZW50O1xuZXhwb3J0cy5leHRyYWN0RmlsZUV4dGVuc2lvbiA9IGV4dHJhY3RGaWxlRXh0ZW5zaW9uO1xuZXhwb3J0cy5maXhTYWZhcmlDb2xvbnMgPSBmaXhTYWZhcmlDb2xvbnM7XG5leHBvcnRzLmdlbklkID0gZ2VuSWQ7XG5leHBvcnRzLmdldElucHV0VHlwZSA9IGdldElucHV0VHlwZTtcbmV4cG9ydHMuaWdub3JlQXR0cmlidXRlID0gaWdub3JlQXR0cmlidXRlO1xuZXhwb3J0cy5pczJEQ2FudmFzQmxhbmsgPSBpczJEQ2FudmFzQmxhbms7XG5leHBvcnRzLmlzQ1NTSW1wb3J0UnVsZSA9IGlzQ1NTSW1wb3J0UnVsZTtcbmV4cG9ydHMuaXNDU1NTdHlsZVJ1bGUgPSBpc0NTU1N0eWxlUnVsZTtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc05hdGl2ZVNoYWRvd0RvbSA9IGlzTmF0aXZlU2hhZG93RG9tO1xuZXhwb3J0cy5pc05vZGVNZXRhRXF1YWwgPSBpc05vZGVNZXRhRXF1YWw7XG5leHBvcnRzLmlzU2hhZG93Um9vdCA9IGlzU2hhZG93Um9vdDtcbmV4cG9ydHMubWFya0Nzc1NwbGl0cyA9IG1hcmtDc3NTcGxpdHM7XG5leHBvcnRzLm1hc2tJbnB1dFZhbHVlID0gbWFza0lucHV0VmFsdWU7XG5leHBvcnRzLm5lZWRNYXNraW5nVGV4dCA9IG5lZWRNYXNraW5nVGV4dDtcbmV4cG9ydHMubm9ybWFsaXplQ3NzU3RyaW5nID0gbm9ybWFsaXplQ3NzU3RyaW5nO1xuZXhwb3J0cy5yZWJ1aWxkID0gcmVidWlsZDtcbmV4cG9ydHMuc2VyaWFsaXplTm9kZVdpdGhJZCA9IHNlcmlhbGl6ZU5vZGVXaXRoSWQ7XG5leHBvcnRzLnNuYXBzaG90ID0gc25hcHNob3Q7XG5leHBvcnRzLnNwbGl0Q3NzVGV4dCA9IHNwbGl0Q3NzVGV4dDtcbmV4cG9ydHMuc3RyaW5naWZ5UnVsZSA9IHN0cmluZ2lmeVJ1bGU7XG5leHBvcnRzLnN0cmluZ2lmeVN0eWxlc2hlZXQgPSBzdHJpbmdpZnlTdHlsZXNoZWV0O1xuZXhwb3J0cy50b0xvd2VyQ2FzZSA9IHRvTG93ZXJDYXNlO1xuZXhwb3J0cy50cmFuc2Zvcm1BdHRyaWJ1dGUgPSB0cmFuc2Zvcm1BdHRyaWJ1dGU7XG5leHBvcnRzLnZpc2l0U25hcHNob3QgPSB2aXNpdFNuYXBzaG90O1xuaWYgKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIpIHtcbiAgdmFyIF9fY3AgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICAgIGlmICgoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIikgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGZyb20pKSB7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodG8sIGtleSwge1xuICAgICAgICAgIGdldDogKCkgPT4gZnJvbVtrZXldLFxuICAgICAgICAgIGVudW1lcmFibGU6ICEoZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvO1xuICB9O1xuICBtb2R1bGUuZXhwb3J0cyA9IF9fY3AobW9kdWxlLmV4cG9ydHMsIGV4cG9ydHMpO1xufVxucmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufSkpXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ycndlYi1zbmFwc2hvdC51bWQuY2pzLm1hcFxuIiwiY29uc3QgY3JlYXRlUmVnaW9uID0gZnVuY3Rpb24oe1xuICBib3VuZGluZ0JveCA9IG51bGwsXG4gIGVsZW1lbnRYcGF0aCA9IG51bGwsXG4gIGVsZW1lbnRDU1MgPSBudWxsLFxuICBwYWRkaW5nID0gbnVsbCxcbiAgYWxnb3JpdGhtID0gJ2lnbm9yZScsXG4gIGRpZmZTZW5zaXRpdml0eSA9IG51bGwsXG4gIGltYWdlSWdub3JlVGhyZXNob2xkID0gbnVsbCxcbiAgY2Fyb3VzZWxzRW5hYmxlZCA9IG51bGwsXG4gIGJhbm5lcnNFbmFibGVkID0gbnVsbCxcbiAgYWRzRW5hYmxlZCA9IG51bGwsXG4gIGRpZmZJZ25vcmVUaHJlc2hvbGQgPSBudWxsXG59ID0ge30pIHtcbiAgY29uc3QgZWxlbWVudFNlbGVjdG9yID0ge307XG4gIGlmIChib3VuZGluZ0JveCkgZWxlbWVudFNlbGVjdG9yLmJvdW5kaW5nQm94ID0gYm91bmRpbmdCb3g7XG4gIGlmIChlbGVtZW50WHBhdGgpIGVsZW1lbnRTZWxlY3Rvci5lbGVtZW50WHBhdGggPSBlbGVtZW50WHBhdGg7XG4gIGlmIChlbGVtZW50Q1NTKSBlbGVtZW50U2VsZWN0b3IuZWxlbWVudENTUyA9IGVsZW1lbnRDU1M7XG5cbiAgY29uc3QgcmVnaW9uID0ge1xuICAgIGFsZ29yaXRobSxcbiAgICBlbGVtZW50U2VsZWN0b3JcbiAgfTtcblxuICBpZiAocGFkZGluZykge1xuICAgIHJlZ2lvbi5wYWRkaW5nID0gcGFkZGluZztcbiAgfVxuXG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSB7fTtcbiAgaWYgKFsnc3RhbmRhcmQnLCAnaW50ZWxsaWlnbm9yZSddLmluY2x1ZGVzKGFsZ29yaXRobSkpIHtcbiAgICBpZiAoZGlmZlNlbnNpdGl2aXR5KSBjb25maWd1cmF0aW9uLmRpZmZTZW5zaXRpdml0eSA9IGRpZmZTZW5zaXRpdml0eTtcbiAgICBpZiAoaW1hZ2VJZ25vcmVUaHJlc2hvbGQpIGNvbmZpZ3VyYXRpb24uaW1hZ2VJZ25vcmVUaHJlc2hvbGQgPSBpbWFnZUlnbm9yZVRocmVzaG9sZDtcbiAgICBpZiAoY2Fyb3VzZWxzRW5hYmxlZCkgY29uZmlndXJhdGlvbi5jYXJvdXNlbHNFbmFibGVkID0gY2Fyb3VzZWxzRW5hYmxlZDtcbiAgICBpZiAoYmFubmVyc0VuYWJsZWQpIGNvbmZpZ3VyYXRpb24uYmFubmVyc0VuYWJsZWQgPSBiYW5uZXJzRW5hYmxlZDtcbiAgICBpZiAoYWRzRW5hYmxlZCkgY29uZmlndXJhdGlvbi5hZHNFbmFibGVkID0gYWRzRW5hYmxlZDtcbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhjb25maWd1cmF0aW9uKS5sZW5ndGggPiAwKSB7XG4gICAgcmVnaW9uLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICB9XG5cbiAgY29uc3QgYXNzZXJ0aW9uID0ge307XG4gIGlmIChkaWZmSWdub3JlVGhyZXNob2xkKSB7XG4gICAgYXNzZXJ0aW9uLmRpZmZJZ25vcmVUaHJlc2hvbGQgPSBkaWZmSWdub3JlVGhyZXNob2xkO1xuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGFzc2VydGlvbikubGVuZ3RoID4gMCkge1xuICAgIHJlZ2lvbi5hc3NlcnRpb24gPSBhc3NlcnRpb247XG4gIH1cblxuICByZXR1cm4gcmVnaW9uO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IGNyZWF0ZVJlZ2lvbiB9O1xuIiwiY29uc3QgdXRpbHMgPSByZXF1aXJlKCdAcGVyY3kvc2RrLXV0aWxzJyk7XG5jb25zdCB7IGNyZWF0ZVJlZ2lvbiB9ID0gcmVxdWlyZSgnLi9jcmVhdGVSZWdpb24nKTtcblxuLy8gQ29sbGVjdCBjbGllbnQgYW5kIGVudmlyb25tZW50IGluZm9ybWF0aW9uXG5jb25zdCBzZGtQa2cgPSByZXF1aXJlKCcuL3BhY2thZ2UuanNvbicpO1xuY29uc3QgQ0xJRU5UX0lORk8gPSBgJHtzZGtQa2cubmFtZX0vJHtzZGtQa2cudmVyc2lvbn1gO1xuY29uc3QgRU5WX0lORk8gPSBgY3lwcmVzcy8ke0N5cHJlc3MudmVyc2lvbn1gO1xuLy8gYXNzZXQgZGlzY292ZXJ5IHNob3VsZCB0aW1lb3V0IGJlZm9yZSB0aGlzXG4vLyAxLjUgdGltZXMgdGhlIDMwIHNlY29uZCBuYXYgdGltZW91dFxuY29uc3QgQ1lfVElNRU9VVCA9IDMwICogMTAwMCAqIDEuNTtcblxuLy8gTWF5YmUgc2V0IHRoZSBDTEkgQVBJIGFkZHJlc3MgZnJvbSB0aGUgZW52aXJvbm1lbnRcbnV0aWxzLnBlcmN5LmFkZHJlc3MgPSBDeXByZXNzLmVudignUEVSQ1lfU0VSVkVSX0FERFJFU1MnKTtcblxuLy8gVXNlIEN5cHJlc3MncyBodHRwOnJlcXVlc3QgYmFja2VuZCB0YXNrXG51dGlscy5yZXF1ZXN0LmZldGNoID0gYXN5bmMgZnVuY3Rpb24gZmV0Y2godXJsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSB7IHVybCwgcmV0cnlPbk5ldHdvcmtGYWlsdXJlOiBmYWxzZSwgLi4ub3B0aW9ucyB9O1xuICByZXR1cm4gQ3lwcmVzcy5iYWNrZW5kKCdodHRwOnJlcXVlc3QnLCBvcHRpb25zKTtcbn07XG5cbi8vIENyZWF0ZSBDeXByZXNzIGxvZyBtZXNzYWdlc1xuZnVuY3Rpb24gY3lsb2cobWVzc2FnZSwgbWV0YSkge1xuICBDeXByZXNzLmxvZyh7XG4gICAgbmFtZTogJ3BlcmN5U25hcHNob3QnLFxuICAgIGRpc3BsYXlOYW1lOiAncGVyY3knLFxuICAgIGNvbnNvbGVQcm9wczogKCkgPT4gbWV0YSxcbiAgICBtZXNzYWdlXG4gIH0pO1xufVxuXG4vLyBUYWtlIGEgRE9NIHNuYXBzaG90IGFuZCBwb3N0IGl0IHRvIHRoZSBzbmFwc2hvdCBlbmRwb2ludFxuQ3lwcmVzcy5Db21tYW5kcy5hZGQoJ3BlcmN5U25hcHNob3QnLCAobmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGxldCBsb2cgPSB1dGlscy5sb2dnZXIoJ2N5cHJlc3MnKTtcblxuICAvLyBpZiBuYW1lIGlzIG5vdCBwYXNzZWRcbiAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMgPSBuYW1lO1xuICAgIG5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gRGVmYXVsdCBuYW1lIHRvIHRlc3QgdGl0bGVcbiAgbmFtZSA9IG5hbWUgfHwgY3kuc3RhdGUoJ3J1bm5hYmxlJykuZnVsbFRpdGxlKCk7XG5cbiAgY29uc3QgbWV0YSA9IHtcbiAgICBzbmFwc2hvdDoge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHRlc3RDYXNlOiBvcHRpb25zLnRlc3RDYXNlXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHdpdGhMb2cgPSBhc3luYyAoZnVuYywgY29udGV4dCwgX3Rocm93ID0gdHJ1ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgZnVuYygpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2cuZXJyb3IoYEdvdCBlcnJvciB3aGlsZSAke2NvbnRleHR9YCwgbWV0YSk7XG4gICAgICBsb2cuZXJyb3IoZXJyb3IsIG1ldGEpO1xuICAgICAgbG9nLmVycm9yKGVycm9yLnN0YWNrLCBtZXRhKTtcbiAgICAgIGlmIChfdGhyb3cpIHRocm93IGVycm9yO1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB3aXRoUmV0cnkgPSBhc3luYyAoZnVuYykgPT4ge1xuICAgIGxldCBudW0gPSAxO1xuICAgIGNvbnN0IG1heE51bSA9IDM7XG4gICAgY29uc3Qgc2xlZXBUaW1lID0gMTAwMDtcbiAgICBsZXQgZXJyb3I7XG5cbiAgICB3aGlsZSAobnVtIDw9IG1heE51bSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGZ1bmMoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICBsb2cuZXJyb3IoYFJldHJ5aW5nLi4uICgke251bX0vJHttYXhOdW19KWApO1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiBzZXRUaW1lb3V0KHJlcywgc2xlZXBUaW1lKSk7XG4gICAgICB9XG4gICAgICBudW0gKz0gMTtcbiAgICB9XG4gICAgdGhyb3cgZXJyb3I7XG4gIH07XG5cbiAgcmV0dXJuIGN5LnRoZW4oeyB0aW1lb3V0OiBDWV9USU1FT1VUIH0sIGFzeW5jICgpID0+IHtcbiAgICBpZiAoQ3lwcmVzcy5jb25maWcoJ2lzSW50ZXJhY3RpdmUnKSAmJlxuICAgICAgICAhQ3lwcmVzcy5jb25maWcoJ2VuYWJsZVBlcmN5SW50ZXJhY3RpdmVNb2RlJykpIHtcbiAgICAgIHJldHVybiBjeWxvZygnRGlzYWJsZWQgaW4gaW50ZXJhY3RpdmUgbW9kZScsIHtcbiAgICAgICAgZGV0YWlsczogJ3VzZSBcImN5cHJlc3MgcnVuXCIgaW5zdGVhZCBvZiBcImN5cHJlc3Mgb3BlblwiJyxcbiAgICAgICAgbmFtZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgUGVyY3kgaXMgZW5hYmxlZFxuICAgIGlmICghYXdhaXQgdXRpbHMuaXNQZXJjeUVuYWJsZWQoKSkge1xuICAgICAgcmV0dXJuIGN5bG9nKCdOb3QgcnVubmluZycsIHsgbmFtZSB9KTtcbiAgICB9XG5cbiAgICBhd2FpdCB3aXRoTG9nKGFzeW5jICgpID0+IHtcbiAgICAgIC8vIEluamVjdCBAcGVyY3kvZG9tXG4gICAgICBpZiAoIXdpbmRvdy5QZXJjeURPTSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxuICAgICAgICBldmFsKGF3YWl0IHV0aWxzLmZldGNoUGVyY3lET00oKSk7XG4gICAgICB9XG4gICAgfSwgJ2luamVjdGluZyBAcGVyY3kvZG9tJyk7XG5cbiAgICAvLyBTZXJpYWxpemUgYW5kIGNhcHR1cmUgdGhlIERPTVxuICAgIHJldHVybiBjeS5kb2N1bWVudCh7IGxvZzogZmFsc2UgfSkudGhlbih7IHRpbWVvdXQ6IENZX1RJTUVPVVQgfSwgYXN5bmMgKGRvbSkgPT4ge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IG5vIGluc3RydW1lbnRpbmcgaW5qZWN0ZWQgY29kZSAqL1xuICAgICAgbGV0IGRvbVNuYXBzaG90ID0gYXdhaXQgd2l0aExvZygoKSA9PiB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuUGVyY3lET00uc2VyaWFsaXplKHsgLi4ub3B0aW9ucywgZG9tIH0pO1xuICAgICAgfSwgJ3Rha2luZyBkb20gc25hcHNob3QnKTtcblxuICAgICAgLy8gQ2FwdHVyZSBjb29raWVzXG4gICAgICByZXR1cm4gY3kuZ2V0Q29va2llcyh7IGxvZzogZmFsc2UgfSkudGhlbihhc3luYyAoY29va2llcykgPT4ge1xuICAgICAgICBpZiAoY29va2llcyAmJiBjb29raWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBkb21TbmFwc2hvdC5jb29raWVzID0gY29va2llcztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRocm93Q29uZmlnID0gQ3lwcmVzcy5jb25maWcoJ3BlcmN5VGhyb3dFcnJvck9uRmFpbHVyZScpO1xuICAgICAgICBjb25zdCBfdGhyb3cgPSB0aHJvd0NvbmZpZyA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiB0aHJvd0NvbmZpZztcblxuICAgICAgICAvLyBQb3N0IHRoZSBET00gc25hcHNob3QgdG8gUGVyY3lcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgd2l0aFJldHJ5KGFzeW5jICgpID0+IGF3YWl0IHdpdGhMb2coYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBhd2FpdCB1dGlscy5wb3N0U25hcHNob3Qoe1xuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgIGVudmlyb25tZW50SW5mbzogRU5WX0lORk8sXG4gICAgICAgICAgICBjbGllbnRJbmZvOiBDTElFTlRfSU5GTyxcbiAgICAgICAgICAgIGRvbVNuYXBzaG90LFxuICAgICAgICAgICAgdXJsOiBkb20uVVJMLFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAncG9zdGluZyBkb20gc25hcHNob3QnLCBfdGhyb3cpKTtcblxuICAgICAgICAvLyBMb2cgdGhlIHNuYXBzaG90IG5hbWUgb24gc3VjY2Vzc1xuICAgICAgICBjeWxvZyhuYW1lLCBtZXRhKTtcblxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IGNyZWF0ZVJlZ2lvbiB9O1xuIiwiKGZ1bmN0aW9uKCkge1xuICAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBjb25zdCBwcm9jZXNzID0gKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbFRoaXMucHJvY2VzcykgfHwge307XG4gICAgcHJvY2Vzcy5lbnYgPSBwcm9jZXNzLmVudiB8fCB7fTtcbiAgICBwcm9jZXNzLmVudi5fX1BFUkNZX0JST1dTRVJJRklFRF9fID0gdHJ1ZTtcblxuICAgIC8vIGhlbHBlciB0byBjcmVhdGUgYSB2ZXJzaW9uIG9iamVjdCBmcm9tIGEgc3RyaW5nXG4gICAgZnVuY3Rpb24gdG9WZXJzaW9uKHN0cikge1xuICAgICAgc3RyIHx8IChzdHIgPSAnMC4wLjAnKTtcbiAgICAgIHJldHVybiBzdHIuc3BsaXQoL1xcLnwtLykucmVkdWNlKCh2ZXJzaW9uLCBwYXJ0LCBpKSA9PiB7XG4gICAgICAgIGxldCB2ID0gcGFyc2VJbnQocGFydCwgMTApO1xuICAgICAgICB2ZXJzaW9uW2ldID0gaXNOYU4odikgPyBwYXJ0IDogdjtcbiAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgICB9LCB7XG4gICAgICAgIGdldCBtYWpvcigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1swXSB8fCAwO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgbWlub3IoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbMV0gfHwgMDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHBhdGNoKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzWzJdIHx8IDA7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBwcmVyZWxlYXNlKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzWzNdO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgYnVpbGQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbNF07XG4gICAgICAgIH0sXG4gICAgICAgIHRvU3RyaW5nKCkge1xuICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgdmVyc2lvbiBjYWNoZVxuICAgIGxldCB2ZXJzaW9uID0gdG9WZXJzaW9uKCk7XG4gICAgbGV0IHR5cGU7XG5cbiAgICAvLyBjb250YWlucyBsb2NhbCBwZXJjeSBpbmZvXG4gICAgY29uc3QgaW5mbyA9IHtcbiAgICAgIC8vIGdldCBvciBzZXQgdGhlIENMSSBBUEkgYWRkcmVzcyB2aWEgdGhlIGVudmlyb25tZW50XG4gICAgICBnZXQgYWRkcmVzcygpIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52LlBFUkNZX1NFUlZFUl9BRERSRVNTIHx8ICdodHRwOi8vbG9jYWxob3N0OjUzMzgnO1xuICAgICAgfSxcbiAgICAgIHNldCBhZGRyZXNzKGFkZHIpIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52LlBFUkNZX1NFUlZFUl9BRERSRVNTID0gYWRkcjtcbiAgICAgIH0sXG4gICAgICAvLyB2ZXJzaW9uIGluZm9ybWF0aW9uXG4gICAgICBnZXQgdmVyc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgICB9LFxuICAgICAgc2V0IHZlcnNpb24odikge1xuICAgICAgICByZXR1cm4gdmVyc2lvbiA9IHRvVmVyc2lvbih2KTtcbiAgICAgIH0sXG4gICAgICBnZXQgdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9LFxuICAgICAgc2V0IHR5cGUodCkge1xuICAgICAgICByZXR1cm4gdHlwZSA9IHQ7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEhlbHBlciB0byBzZW5kIGEgcmVxdWVzdCB0byB0aGUgbG9jYWwgQ0xJIEFQSVxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3QocGF0aCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBsZXQgdXJsID0gcGF0aC5zdGFydHNXaXRoKCdodHRwJykgPyBwYXRoIDogYCR7aW5mby5hZGRyZXNzfSR7cGF0aH1gO1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5mZXRjaCh1cmwsIG9wdGlvbnMpO1xuXG4gICAgICAvLyBtYXliZSBwYXJzZSByZXNwb25zZSBib2R5IGFzIGpzb25cbiAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2UuYm9keSA9PT0gJ3N0cmluZycgJiYgcmVzcG9uc2UuaGVhZGVyc1snY29udGVudC10eXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3BvbnNlLmJvZHkgPSBKU09OLnBhcnNlKHJlc3BvbnNlLmJvZHkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBpZiBzdGF0dXMgaXMgbm90IG9rXG4gICAgICBpZiAoIShyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkpIHtcbiAgICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoKSwge1xuICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmJvZHkuZXJyb3IgfHwgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IGluIHRlc3RzLCB0aGVyZSdzIGFsd2F5cyBhbiBlcnJvciBtZXNzYWdlICovXG4gICAgICAgICAgYCR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCxcbiAgICAgICAgICByZXNwb25zZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgcmVxdWVzdC5wb3N0ID0gZnVuY3Rpb24gcG9zdCh1cmwsIGpzb24pIHtcbiAgICAgIHJldHVybiByZXF1ZXN0KHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoanNvbiksXG4gICAgICAgIHRpbWVvdXQ6IDYwMDAwMFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGVudmlyb25tZW50IHNwZWNpZmljIGltcGxlbWVudGF0aW9uXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fUEVSQ1lfQlJPV1NFUklGSUVEX18pIHtcbiAgICAgIC8vIHVzZSB3aW5kb3cuZmV0Y2ggaW4gYnJvd3NlcnNcbiAgICAgIGNvbnN0IHdpbkZldGNoID0gd2luZG93LmZldGNoO1xuICAgICAgcmVxdWVzdC5mZXRjaCA9IGFzeW5jIGZ1bmN0aW9uIGZldGNoKHVybCwgb3B0aW9ucykge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB3aW5GZXRjaCh1cmwsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogT2JqZWN0LmZyb21FbnRyaWVzKHJlc3BvbnNlLmhlYWRlcnMuZW50cmllcygpKSxcbiAgICAgICAgICBib2R5OiBhd2FpdCByZXNwb25zZS50ZXh0KClcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVzZSBodHRwLnJlcXVlc3QgaW4gbm9kZVxuICAgICAgcmVxdWVzdC5mZXRjaCA9IGFzeW5jIGZ1bmN0aW9uIGZldGNoKHVybCwgb3B0aW9ucykge1xuICAgICAgICBsZXQge1xuICAgICAgICAgIHByb3RvY29sXG4gICAgICAgIH0gPSBuZXcgVVJMKHVybCk7XG4gICAgICAgIC8vIHJvbGx1cCB0aHJvd3MgZXJyb3IgZm9yIC0+IGF3YWl0ICh7fSlcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICBkZWZhdWx0OiBodHRwXG4gICAgICAgIH0gPSBwcm90b2NvbCA9PT0gJ2h0dHBzOicgPyBhd2FpdCAoe30pIDogYXdhaXQgKHt9KTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHByb3h5QWdlbnRGb3JcbiAgICAgICAgICB9ID0gYXdhaXQgKHt9KTtcbiAgICAgICAgICBjb25zdCBhZ2VudCA9IHByb3h5QWdlbnRGb3IodXJsKTtcbiAgICAgICAgICBpZiAoYWdlbnQpIHtcbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zLmFnZW50ID0gYWdlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIEZhaWxlZCB0byBsb2FkIHByb3h5IG1vZHVsZSBvciBjcmVhdGUgcHJveHkgYWdlbnQgKGUuZy4sIG1pc3NpbmcgcHJveHkuanMsIGludmFsaWQgcHJveHkgY29uZmlnKVxuICAgICAgICAgIC8vIENvbnRpbnVlIHdpdGhvdXQgcHJveHkgc3VwcG9ydCAtIHJlcXVlc3RzIHdpbGwgZ28gZGlyZWN0bHkgd2l0aG91dCBwcm94eVxuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgbG9nZ2VyKCdzZGstdXRpbHM6cmVxdWVzdCcpLmRlYnVnKGBQcm94eSBhZ2VudCB1bmF2YWlsYWJsZTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgaHR0cC5yZXF1ZXN0KHVybCwgcmVxdWVzdE9wdGlvbnMpLm9uKCdyZXNwb25zZScsIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGxldCBib2R5ID0gJyc7XG4gICAgICAgICAgICByZXNwb25zZS5vbignZGF0YScsIGNodW5rID0+IGJvZHkgKz0gY2h1bmsudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICByZXNwb25zZS5vbignZW5kJywgKCkgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzQ29kZSxcbiAgICAgICAgICAgICAgc3RhdHVzVGV4dDogcmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSxcbiAgICAgICAgICAgICAgaGVhZGVyczogcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICAgICAgYm9keVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pLm9uKCdlcnJvcicsIHJlamVjdCkuZW5kKG9wdGlvbnMuYm9keSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBVc2VkIHdoZW4gZGV0ZXJtaW5pbmcgaWYgYSBtZXNzYWdlIHNob3VsZCBiZSBsb2dnZWRcbiAgICBjb25zdCBMT0dfTEVWRUxTID0ge1xuICAgICAgZGVidWc6IDAsXG4gICAgICBpbmZvOiAxLFxuICAgICAgd2FybjogMixcbiAgICAgIGVycm9yOiAzXG4gICAgfTtcblxuICAgIC8vIENyZWF0ZSBhIHNtYWxsIGxvZ2dlciB1dGlsIHVzaW5nIHRoZSBzcGVjaWZpZWQgbmFtZXNwYWNlXG4gICAgZnVuY3Rpb24gbG9nZ2VyKG5hbWVzcGFjZSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKExPR19MRVZFTFMpLnJlZHVjZSgobnMsIGx2bCkgPT4gT2JqZWN0LmFzc2lnbihucywge1xuICAgICAgICBbbHZsXTogKC4uLmEpID0+IGxvZ2dlci5sb2cobmFtZXNwYWNlLCBsdmwsIC4uLmEpXG4gICAgICB9KSwge30pO1xuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKGxvZ2dlciwge1xuICAgICAgLy8gU2V0IGFuZC9vciByZXR1cm4gdGhlIGxvY2FsIGxvZ2xldmVsXG4gICAgICBsb2dsZXZlbDogKGx2bCA9IGxvZ2dlci5sb2dsZXZlbC5sdmwpID0+IHtcbiAgICAgICAgcmV0dXJuIGxvZ2dlci5sb2dsZXZlbC5sdmwgPSBsdmwgfHwgcHJvY2Vzcy5lbnYuUEVSQ1lfTE9HTEVWRUwgfHwgJ2luZm8nO1xuICAgICAgfSxcbiAgICAgIC8vIFRyYWNrIGFuZCBzZW5kL3dyaXRlIGxvZ3MgZm9yIHRoZSBzcGVjaWZpZWQgbmFtZXNwYWNlIGFuZCBsb2cgbGV2ZWxcbiAgICAgIC8vIHJlbW90ZSBzaG91bGQgb25seSBiZSBmYWxzZSBpbiBjYXNlIG9mIHNlbnNpdGl2ZS9zZWxmIGNhbGwgZm9yIGVycm9yc1xuICAgICAgbG9nOiAobnMsIGx2bCwgbXNnLCBtZXRhLCByZW1vdGUgPSB0cnVlKSA9PiB7XG4gICAgICAgIGxldCBlcnIgPSB0eXBlb2YgbXNnICE9PSAnc3RyaW5nJyAmJiAobHZsID09PSAnZXJyb3InIHx8IGx2bCA9PT0gJ2RlYnVnJyk7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHNwZWNpZmljIGxldmVsIGlzIHdpdGhpbiB0aGUgbG9jYWwgbG9nbGV2ZWwgcmFuZ2VcbiAgICAgICAgaWYgKExPR19MRVZFTFNbbHZsXSAhPSBudWxsICYmIExPR19MRVZFTFNbbHZsXSA+PSBMT0dfTEVWRUxTW2xvZ2dlci5sb2dsZXZlbCgpXSkge1xuICAgICAgICAgIGxldCBkZWJ1ZyA9IGxvZ2dlci5sb2dsZXZlbCgpID09PSAnZGVidWcnO1xuICAgICAgICAgIGxldCBsYWJlbCA9IGRlYnVnID8gYHBlcmN5OiR7bnN9YCA6ICdwZXJjeSc7XG5cbiAgICAgICAgICAvLyBjb2xvcml6ZSB0aGUgbGFiZWwgd2hlbiBwb3NzaWJsZSBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgQ0xJIGxvZ2dlclxuICAgICAgICAgIGlmICghcHJvY2Vzcy5lbnYuX19QRVJDWV9CUk9XU0VSSUZJRURfXykgbGFiZWwgPSBgXFx1MDAxYls5NW0ke2xhYmVsfVxcdTAwMWJbMzltYDtcbiAgICAgICAgICBtc2cgPSBgWyR7bGFiZWx9XSAke2VyciAmJiBkZWJ1ZyAmJiBtc2cuc3RhY2sgfHwgbXNnfWA7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fUEVSQ1lfQlJPV1NFUklGSUVEX18pIHtcbiAgICAgICAgICAgIC8vIHVzZSBjb25zb2xlW3dhcm58ZXJyb3J8bG9nXSBpbiBicm93c2Vyc1xuICAgICAgICAgICAgY29uc29sZVtbJ3dhcm4nLCAnZXJyb3InXS5pbmNsdWRlcyhsdmwpID8gbHZsIDogJ2xvZyddKG1zZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHVzZSBwcm9jZXNzW3N0ZG91dHxzdGRlcnJdLndyaXRlIGluIG5vZGVcbiAgICAgICAgICAgIHByb2Nlc3NbbHZsID09PSAnaW5mbycgPyAnc3Rkb3V0JyA6ICdzdGRlcnInXS53cml0ZShtc2cgKyAnXFxuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZW1vdGUgJiYgKGx2bCA9PT0gJ2Vycm9yJyB8fCBkZWJ1ZykpIHtcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0LnBvc3QoJy9wZXJjeS9sb2cnLCB7XG4gICAgICAgICAgICAgIGxldmVsOiBsdmwsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IG1zZyxcbiAgICAgICAgICAgICAgbWV0YVxuICAgICAgICAgICAgfSkuY2F0Y2goXyA9PiB7XG4gICAgICAgICAgICAgIGxvZ2dlci5sb2cobnMsICdlcnJvcicsICdDb3VsZCBub3Qgc2VuZCBsb2dzIHRvIGNsaScsIG1ldGEsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ2hlY2sgaWYgUGVyY3kgaXMgZW5hYmxlZCB1c2luZyB0aGUgaGVhbHRoY2hlY2sgZW5kcG9pbnRcbiAgICBhc3luYyBmdW5jdGlvbiBpc1BlcmN5RW5hYmxlZCgpIHtcbiAgICAgIGlmIChpbmZvLmVuYWJsZWQgPT0gbnVsbCkge1xuICAgICAgICBsZXQgbG9nID0gbG9nZ2VyKCd1dGlscycpO1xuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdCgnL3BlcmN5L2hlYWx0aGNoZWNrJyk7XG4gICAgICAgICAgaW5mby52ZXJzaW9uID0gcmVzcG9uc2UuaGVhZGVyc1sneC1wZXJjeS1jb3JlLXZlcnNpb24nXTtcbiAgICAgICAgICBpbmZvLmNvbmZpZyA9IHJlc3BvbnNlLmJvZHkuY29uZmlnO1xuICAgICAgICAgIGluZm8uYnVpbGQgPSByZXNwb25zZS5ib2R5LmJ1aWxkO1xuICAgICAgICAgIGluZm8uZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgaW5mby50eXBlID0gcmVzcG9uc2UuYm9keS50eXBlO1xuICAgICAgICAgIGluZm8ud2lkdGhzID0gcmVzcG9uc2UuYm9keS53aWR0aHM7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBpbmZvLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZm8uZW5hYmxlZCAmJiBpbmZvLnZlcnNpb24ubWFqb3IgIT09IDEpIHtcbiAgICAgICAgICBsb2cuaW5mbygnVW5zdXBwb3J0ZWQgUGVyY3kgQ0xJIHZlcnNpb24sIGRpc2FibGluZyBzbmFwc2hvdHMnKTtcbiAgICAgICAgICBsb2cuZGVidWcoYEZvdW5kIHZlcnNpb246ICR7aW5mby52ZXJzaW9ufWApO1xuICAgICAgICAgIGluZm8uZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKCFpbmZvLmVuYWJsZWQpIHtcbiAgICAgICAgICBsb2cuaW5mbygnUGVyY3kgaXMgbm90IHJ1bm5pbmcsIGRpc2FibGluZyBzbmFwc2hvdHMnKTtcbiAgICAgICAgICBsb2cuZGVidWcoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5mby5lbmFibGVkO1xuICAgIH1cblxuICAgIGNvbnN0IFJFVFJZX0VSUk9SX0NPREVTID0gWydFQ09OTlJFU0VUJywgJ0VUSU1FRE9VVCddO1xuICAgIGFzeW5jIGZ1bmN0aW9uIHdhaXRGb3JQZXJjeUlkbGUoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gISEoYXdhaXQgcmVxdWVzdCgnL3BlcmN5L2lkbGUnKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBSRVRSWV9FUlJPUl9DT0RFUy5pbmNsdWRlcyhlLmNvZGUpICYmIHdhaXRGb3JQZXJjeUlkbGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGZXRjaCBhbmQgY2FjaGUgdGhlIEBwZXJjeS9kb20gc2NyaXB0XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQZXJjeURPTSgpIHtcbiAgICAgIGlmIChpbmZvLmRvbVNjcmlwdCA9PSBudWxsKSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QoJy9wZXJjeS9kb20uanMnKTtcbiAgICAgICAgaW5mby5kb21TY3JpcHQgPSByZXNwb25zZS5ib2R5O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGluZm8uZG9tU2NyaXB0O1xuICAgIH1cblxuICAgIC8vIFBvc3Qgc25hcHNob3QgZGF0YSB0byB0aGUgQ0xJIHNuYXBzaG90IGVuZHBvaW50LiBJZiB0aGUgZW5kcG9pbnQgcmVzcG9uZHMgd2l0aCBhIGJ1aWxkIGVycm9yLFxuICAgIC8vIGluZGljYXRlIHRoYXQgUGVyY3kgaGFzIGJlZW4gZGlzYWJsZWQuXG4gICAgYXN5bmMgZnVuY3Rpb24gcG9zdFNuYXBzaG90KG9wdGlvbnMsIHBhcmFtcykge1xuICAgICAgbGV0IHF1ZXJ5ID0gcGFyYW1zID8gYD8ke25ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKX1gIDogJyc7XG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdC5wb3N0KGAvcGVyY3kvc25hcHNob3Qke3F1ZXJ5fWAsIG9wdGlvbnMpLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHZhciBfZXJyJHJlc3BvbnNlO1xuICAgICAgICBpZiAoKF9lcnIkcmVzcG9uc2UgPSBlcnIucmVzcG9uc2UpICE9PSBudWxsICYmIF9lcnIkcmVzcG9uc2UgIT09IHZvaWQgMCAmJiAoX2VyciRyZXNwb25zZSA9IF9lcnIkcmVzcG9uc2UuYm9keSkgIT09IG51bGwgJiYgX2VyciRyZXNwb25zZSAhPT0gdm9pZCAwICYmIChfZXJyJHJlc3BvbnNlID0gX2VyciRyZXNwb25zZS5idWlsZCkgIT09IG51bGwgJiYgX2VyciRyZXNwb25zZSAhPT0gdm9pZCAwICYmIF9lcnIkcmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICBpbmZvLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFBvc3Qgc25hcHNob3QgZGF0YSB0byB0aGUgQ0xJIHNuYXBzaG90IGVuZHBvaW50LiBJZiB0aGUgZW5kcG9pbnQgcmVzcG9uZHMgd2l0aCBhIGJ1aWxkIGVycm9yLFxuICAgIC8vIGluZGljYXRlIHRoYXQgUGVyY3kgaGFzIGJlZW4gZGlzYWJsZWQuXG4gICAgYXN5bmMgZnVuY3Rpb24gcG9zdENvbXBhcmlzb24ob3B0aW9ucywgcGFyYW1zKSB7XG4gICAgICBsZXQgcXVlcnkgPSBwYXJhbXMgPyBgPyR7bmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpfWAgOiAnJztcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0LnBvc3QoYC9wZXJjeS9jb21wYXJpc29uJHtxdWVyeX1gLCBvcHRpb25zKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICB2YXIgX2VyciRyZXNwb25zZTtcbiAgICAgICAgaWYgKChfZXJyJHJlc3BvbnNlID0gZXJyLnJlc3BvbnNlKSAhPT0gbnVsbCAmJiBfZXJyJHJlc3BvbnNlICE9PSB2b2lkIDAgJiYgKF9lcnIkcmVzcG9uc2UgPSBfZXJyJHJlc3BvbnNlLmJvZHkpICE9PSBudWxsICYmIF9lcnIkcmVzcG9uc2UgIT09IHZvaWQgMCAmJiAoX2VyciRyZXNwb25zZSA9IF9lcnIkcmVzcG9uc2UuYnVpbGQpICE9PSBudWxsICYmIF9lcnIkcmVzcG9uc2UgIT09IHZvaWQgMCAmJiBfZXJyJHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgaW5mby5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQb3N0IGZhaWxlZCBldmVudCBkYXRhIHRvIHRoZSBDTEkgZXZlbnQgZW5kcG9pbnQuXG4gICAgYXN5bmMgZnVuY3Rpb24gcG9zdEJ1aWxkRXZlbnRzKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0LnBvc3QoJy9wZXJjeS9ldmVudHMnLCBvcHRpb25zKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQb3N0cyB0byB0aGUgbG9jYWwgUGVyY3kgc2VydmVyIG9uZSBvciBtb3JlIHNuYXBzaG90cyB0byBmbHVzaC4gR2l2ZW4gbm8gYXJndW1lbnRzLCBhbGwgc25hcHNob3RzXG4gICAgLy8gd2lsbCBiZSBmbHVzaGVkLiBEb2VzIG5vdGhpbmcgd2hlbiBQZXJjeSBpcyBub3QgZW5hYmxlZC5cbiAgICBhc3luYyBmdW5jdGlvbiBmbHVzaFNuYXBzaG90cyhvcHRpb25zKSB7XG4gICAgICBpZiAoaW5mby5lbmFibGVkKSB7XG4gICAgICAgIC8vIGFjY2VwdCBvbmUgb3IgbW9yZSBzbmFwc2hvdCBuYW1lc1xuICAgICAgICBvcHRpb25zICYmIChvcHRpb25zID0gW10uY29uY2F0KG9wdGlvbnMpLm1hcChvID0+IHR5cGVvZiBvID09PSAnc3RyaW5nJyA/IHtcbiAgICAgICAgICBuYW1lOiBvXG4gICAgICAgIH0gOiBvKSk7XG4gICAgICAgIGF3YWl0IHJlcXVlc3QucG9zdCgnL3BlcmN5L2ZsdXNoJywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUG9zdCBzY3JlZW5zaG90IGRhdGEgdG8gdGhlIENMSSBhdXRvbWF0ZVNjcmVlbnNob3QgZW5kcG9pbnQuIElmIHRoZSBlbmRwb2ludCByZXNwb25kcyB3aXRoIGEgYnVpbGQgZXJyb3IsXG4gICAgLy8gaW5kaWNhdGUgdGhhdCBQZXJjeSBoYXMgYmVlbiBkaXNhYmxlZC5cbiAgICBhc3luYyBmdW5jdGlvbiBjYXB0dXJlQXV0b21hdGVTY3JlZW5zaG90KG9wdGlvbnMsIHBhcmFtcykge1xuICAgICAgbGV0IHF1ZXJ5ID0gcGFyYW1zID8gYD8ke25ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKX1gIDogJyc7XG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdC5wb3N0KGAvcGVyY3kvYXV0b21hdGVTY3JlZW5zaG90JHtxdWVyeX1gLCBvcHRpb25zKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICB2YXIgX2VyciRyZXNwb25zZTtcbiAgICAgICAgaWYgKChfZXJyJHJlc3BvbnNlID0gZXJyLnJlc3BvbnNlKSAhPT0gbnVsbCAmJiBfZXJyJHJlc3BvbnNlICE9PSB2b2lkIDAgJiYgKF9lcnIkcmVzcG9uc2UgPSBfZXJyJHJlc3BvbnNlLmJvZHkpICE9PSBudWxsICYmIF9lcnIkcmVzcG9uc2UgIT09IHZvaWQgMCAmJiAoX2VyciRyZXNwb25zZSA9IF9lcnIkcmVzcG9uc2UuYnVpbGQpICE9PSBudWxsICYmIF9lcnIkcmVzcG9uc2UgIT09IHZvaWQgMCAmJiBfZXJyJHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgaW5mby5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgICBfX3Byb3RvX186IG51bGwsXG4gICAgICBsb2dnZXI6IGxvZ2dlcixcbiAgICAgIHBlcmN5OiBpbmZvLFxuICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgIGlzUGVyY3lFbmFibGVkOiBpc1BlcmN5RW5hYmxlZCxcbiAgICAgIHdhaXRGb3JQZXJjeUlkbGU6IHdhaXRGb3JQZXJjeUlkbGUsXG4gICAgICBmZXRjaFBlcmN5RE9NOiBmZXRjaFBlcmN5RE9NLFxuICAgICAgcG9zdFNuYXBzaG90OiBwb3N0U25hcHNob3QsXG4gICAgICBwb3N0Q29tcGFyaXNvbjogcG9zdENvbXBhcmlzb24sXG4gICAgICBmbHVzaFNuYXBzaG90czogZmx1c2hTbmFwc2hvdHMsXG4gICAgICBjYXB0dXJlQXV0b21hdGVTY3JlZW5zaG90OiBjYXB0dXJlQXV0b21hdGVTY3JlZW5zaG90LFxuICAgICAgcG9zdEJ1aWxkRXZlbnRzOiBwb3N0QnVpbGRFdmVudHMsXG4gICAgICAnZGVmYXVsdCc6IGluZGV4XG4gICAgfSk7XG5cbiAgICBleHBvcnRzLmNhcHR1cmVBdXRvbWF0ZVNjcmVlbnNob3QgPSBjYXB0dXJlQXV0b21hdGVTY3JlZW5zaG90O1xuICAgIGV4cG9ydHNbXCJkZWZhdWx0XCJdID0gaW5kZXg7XG4gICAgZXhwb3J0cy5mZXRjaFBlcmN5RE9NID0gZmV0Y2hQZXJjeURPTTtcbiAgICBleHBvcnRzLmZsdXNoU25hcHNob3RzID0gZmx1c2hTbmFwc2hvdHM7XG4gICAgZXhwb3J0cy5pc1BlcmN5RW5hYmxlZCA9IGlzUGVyY3lFbmFibGVkO1xuICAgIGV4cG9ydHMubG9nZ2VyID0gbG9nZ2VyO1xuICAgIGV4cG9ydHMucGVyY3kgPSBpbmZvO1xuICAgIGV4cG9ydHMucG9zdEJ1aWxkRXZlbnRzID0gcG9zdEJ1aWxkRXZlbnRzO1xuICAgIGV4cG9ydHMucG9zdENvbXBhcmlzb24gPSBwb3N0Q29tcGFyaXNvbjtcbiAgICBleHBvcnRzLnBvc3RTbmFwc2hvdCA9IHBvc3RTbmFwc2hvdDtcbiAgICBleHBvcnRzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICAgIGV4cG9ydHMud2FpdEZvclBlcmN5SWRsZSA9IHdhaXRGb3JQZXJjeUlkbGU7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4gIH0pKHRoaXMuUGVyY3lTREtVdGlscyA9IHRoaXMuUGVyY3lTREtVdGlscyB8fCB7fSk7XG59KS5jYWxsKHdpbmRvdyk7XG5cbmlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoXCJAcGVyY3kvc2RrLXV0aWxzXCIsIFtdLCAoKSA9PiB3aW5kb3cuUGVyY3lTREtVdGlscyk7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuUGVyY3lTREtVdGlscztcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIHZhciBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayh1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGN1c3RvbUluc3BlY3RTeW1ib2wgPVxuICAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sWydmb3InXSA9PT0gJ2Z1bmN0aW9uJykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICA/IFN5bWJvbFsnZm9yJ10oJ25vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tJykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICA6IG51bGxcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG52YXIgS19NQVhfTEVOR1RIID0gMHg3ZmZmZmZmZlxuZXhwb3J0cy5rTWF4TGVuZ3RoID0gS19NQVhfTEVOR1RIXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFByaW50IHdhcm5pbmcgYW5kIHJlY29tbWVuZCB1c2luZyBgYnVmZmVyYCB2NC54IHdoaWNoIGhhcyBhbiBPYmplY3RcbiAqICAgICAgICAgICAgICAgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIFdlIHJlcG9ydCB0aGF0IHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGlmIHRoZSBhcmUgbm90IHN1YmNsYXNzYWJsZVxuICogdXNpbmcgX19wcm90b19fLiBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YFxuICogKFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4KS4gSUUgMTAgbGFja3Mgc3VwcG9ydFxuICogZm9yIF9fcHJvdG9fXyBhbmQgaGFzIGEgYnVnZ3kgdHlwZWQgYXJyYXkgaW1wbGVtZW50YXRpb24uXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gdHlwZWRBcnJheVN1cHBvcnQoKVxuXG5pZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gIGNvbnNvbGUuZXJyb3IoXG4gICAgJ1RoaXMgYnJvd3NlciBsYWNrcyB0eXBlZCBhcnJheSAoVWludDhBcnJheSkgc3VwcG9ydCB3aGljaCBpcyByZXF1aXJlZCBieSAnICtcbiAgICAnYGJ1ZmZlcmAgdjUueC4gVXNlIGBidWZmZXJgIHY0LnggaWYgeW91IHJlcXVpcmUgb2xkIGJyb3dzZXIgc3VwcG9ydC4nXG4gIClcbn1cblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICAvLyBDYW4gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWQ/XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgdmFyIHByb3RvID0geyBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH0gfVxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihwcm90bywgVWludDhBcnJheS5wcm90b3R5cGUpXG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGFyciwgcHJvdG8pXG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDJcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIucHJvdG90eXBlLCAncGFyZW50Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0aGlzKSkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiB0aGlzLmJ1ZmZlclxuICB9XG59KVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLnByb3RvdHlwZSwgJ29mZnNldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGhpcykpIHJldHVybiB1bmRlZmluZWRcbiAgICByZXR1cm4gdGhpcy5ieXRlT2Zmc2V0XG4gIH1cbn0pXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAobGVuZ3RoKSB7XG4gIGlmIChsZW5ndGggPiBLX01BWF9MRU5HVEgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIFwiJyArIGxlbmd0aCArICdcIiBpcyBpbnZhbGlkIGZvciBvcHRpb24gXCJzaXplXCInKVxuICB9XG4gIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlXG4gIHZhciBidWYgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihidWYsIEJ1ZmZlci5wcm90b3R5cGUpXG4gIHJldHVybiBidWZcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAnVGhlIFwic3RyaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIHN0cmluZy4gUmVjZWl2ZWQgdHlwZSBudW1iZXInXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZShhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20oYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG5mdW5jdGlvbiBmcm9tICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHZhbHVlKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlWaWV3KHZhbHVlKVxuICB9XG5cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksICcgK1xuICAgICAgJ29yIEFycmF5LWxpa2UgT2JqZWN0LiBSZWNlaXZlZCB0eXBlICcgKyAodHlwZW9mIHZhbHVlKVxuICAgIClcbiAgfVxuXG4gIGlmIChpc0luc3RhbmNlKHZhbHVlLCBBcnJheUJ1ZmZlcikgfHxcbiAgICAgICh2YWx1ZSAmJiBpc0luc3RhbmNlKHZhbHVlLmJ1ZmZlciwgQXJyYXlCdWZmZXIpKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAoaXNJbnN0YW5jZSh2YWx1ZSwgU2hhcmVkQXJyYXlCdWZmZXIpIHx8XG4gICAgICAodmFsdWUgJiYgaXNJbnN0YW5jZSh2YWx1ZS5idWZmZXIsIFNoYXJlZEFycmF5QnVmZmVyKSkpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgb2YgdHlwZSBudW1iZXIuIFJlY2VpdmVkIHR5cGUgbnVtYmVyJ1xuICAgIClcbiAgfVxuXG4gIHZhciB2YWx1ZU9mID0gdmFsdWUudmFsdWVPZiAmJiB2YWx1ZS52YWx1ZU9mKClcbiAgaWYgKHZhbHVlT2YgIT0gbnVsbCAmJiB2YWx1ZU9mICE9PSB2YWx1ZSkge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh2YWx1ZU9mLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICB2YXIgYiA9IGZyb21PYmplY3QodmFsdWUpXG4gIGlmIChiKSByZXR1cm4gYlxuXG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9QcmltaXRpdmUgIT0gbnVsbCAmJlxuICAgICAgdHlwZW9mIHZhbHVlW1N5bWJvbC50b1ByaW1pdGl2ZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20oXG4gICAgICB2YWx1ZVtTeW1ib2wudG9QcmltaXRpdmVdKCdzdHJpbmcnKSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoXG4gICAgKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAnVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgJyArXG4gICAgJ29yIEFycmF5LWxpa2UgT2JqZWN0LiBSZWNlaXZlZCB0eXBlICcgKyAodHlwZW9mIHZhbHVlKVxuICApXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20odmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuLy8gTm90ZTogQ2hhbmdlIHByb3RvdHlwZSAqYWZ0ZXIqIEJ1ZmZlci5mcm9tIGlzIGRlZmluZWQgdG8gd29ya2Fyb3VuZCBDaHJvbWUgYnVnOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC8xNDhcbk9iamVjdC5zZXRQcm90b3R5cGVPZihCdWZmZXIucHJvdG90eXBlLCBVaW50OEFycmF5LnByb3RvdHlwZSlcbk9iamVjdC5zZXRQcm90b3R5cGVPZihCdWZmZXIsIFVpbnQ4QXJyYXkpXG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBcIicgKyBzaXplICsgJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcInNpemVcIicpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIoc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcihzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2Moc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlIChzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB2YXIgYnVmID0gY3JlYXRlQnVmZmVyKGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gYnVmLndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICBidWYgPSBidWYuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlIChhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHZhciBidWYgPSBjcmVhdGVCdWZmZXIobGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgYnVmW2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheVZpZXcgKGFycmF5Vmlldykge1xuICBpZiAoaXNJbnN0YW5jZShhcnJheVZpZXcsIFVpbnQ4QXJyYXkpKSB7XG4gICAgdmFyIGNvcHkgPSBuZXcgVWludDhBcnJheShhcnJheVZpZXcpXG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcihjb3B5LmJ1ZmZlciwgY29weS5ieXRlT2Zmc2V0LCBjb3B5LmJ5dGVMZW5ndGgpXG4gIH1cbiAgcmV0dXJuIGZyb21BcnJheUxpa2UoYXJyYXlWaWV3KVxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wib2Zmc2V0XCIgaXMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJsZW5ndGhcIiBpcyBvdXRzaWRlIG9mIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgdmFyIGJ1ZlxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGJ1ZiwgQnVmZmVyLnByb3RvdHlwZSlcblxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB2YXIgYnVmID0gY3JlYXRlQnVmZmVyKGxlbilcblxuICAgIGlmIChidWYubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYnVmXG4gICAgfVxuXG4gICAgb2JqLmNvcHkoYnVmLCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIGJ1ZlxuICB9XG5cbiAgaWYgKG9iai5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgbnVtYmVySXNOYU4ob2JqLmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIoMClcbiAgICB9XG4gICAgcmV0dXJuIGZyb21BcnJheUxpa2Uob2JqKVxuICB9XG5cbiAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBBcnJheS5pc0FycmF5KG9iai5kYXRhKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKG9iai5kYXRhKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBLX01BWF9MRU5HVEhgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0gS19NQVhfTEVOR1RIKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIEtfTUFYX0xFTkdUSC50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuIGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlciA9PT0gdHJ1ZSAmJlxuICAgIGIgIT09IEJ1ZmZlci5wcm90b3R5cGUgLy8gc28gQnVmZmVyLmlzQnVmZmVyKEJ1ZmZlci5wcm90b3R5cGUpIHdpbGwgYmUgZmFsc2Vcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmIChpc0luc3RhbmNlKGEsIFVpbnQ4QXJyYXkpKSBhID0gQnVmZmVyLmZyb20oYSwgYS5vZmZzZXQsIGEuYnl0ZUxlbmd0aClcbiAgaWYgKGlzSW5zdGFuY2UoYiwgVWludDhBcnJheSkpIGIgPSBCdWZmZXIuZnJvbShiLCBiLm9mZnNldCwgYi5ieXRlTGVuZ3RoKVxuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJidWYxXCIsIFwiYnVmMlwiIGFyZ3VtZW50cyBtdXN0IGJlIG9uZSBvZiB0eXBlIEJ1ZmZlciBvciBVaW50OEFycmF5J1xuICAgIClcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmIChpc0luc3RhbmNlKGJ1ZiwgVWludDhBcnJheSkpIHtcbiAgICAgIGlmIChwb3MgKyBidWYubGVuZ3RoID4gYnVmZmVyLmxlbmd0aCkge1xuICAgICAgICBCdWZmZXIuZnJvbShidWYpLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgICAgICBidWZmZXIsXG4gICAgICAgICAgYnVmLFxuICAgICAgICAgIHBvc1xuICAgICAgICApXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIH1cbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBpc0luc3RhbmNlKHN0cmluZywgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJzdHJpbmdcIiBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBvciBBcnJheUJ1ZmZlci4gJyArXG4gICAgICAnUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIHN0cmluZ1xuICAgIClcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBtdXN0TWF0Y2ggPSAoYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdID09PSB0cnVlKVxuICBpZiAoIW11c3RNYXRjaCAmJiBsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHtcbiAgICAgICAgICByZXR1cm4gbXVzdE1hdGNoID8gLTEgOiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICB9XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcmNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIChhbmQgdGhlIGBpcy1idWZmZXJgIG5wbSBwYWNrYWdlKVxuLy8gdG8gZGV0ZWN0IGEgQnVmZmVyIGluc3RhbmNlLiBJdCdzIG5vdCBwb3NzaWJsZSB0byB1c2UgYGluc3RhbmNlb2YgQnVmZmVyYFxuLy8gcmVsaWFibHkgaW4gYSBicm93c2VyaWZ5IGNvbnRleHQgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBtdWx0aXBsZSBkaWZmZXJlbnRcbi8vIGNvcGllcyBvZiB0aGUgJ2J1ZmZlcicgcGFja2FnZSBpbiB1c2UuIFRoaXMgbWV0aG9kIHdvcmtzIGV2ZW4gZm9yIEJ1ZmZlclxuLy8gaW5zdGFuY2VzIHRoYXQgd2VyZSBjcmVhdGVkIGZyb20gYW5vdGhlciBjb3B5IG9mIHRoZSBgYnVmZmVyYCBwYWNrYWdlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMTU0XG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nID0gQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZ1xuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLnJlcGxhY2UoLyguezJ9KS9nLCAnJDEgJykudHJpbSgpXG4gIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cbmlmIChjdXN0b21JbnNwZWN0U3ltYm9sKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGVbY3VzdG9tSW5zcGVjdFN5bWJvbF0gPSBCdWZmZXIucHJvdG90eXBlLmluc3BlY3Rcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKGlzSW5zdGFuY2UodGFyZ2V0LCBVaW50OEFycmF5KSkge1xuICAgIHRhcmdldCA9IEJ1ZmZlci5mcm9tKHRhcmdldCwgdGFyZ2V0Lm9mZnNldCwgdGFyZ2V0LmJ5dGVMZW5ndGgpXG4gIH1cbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwidGFyZ2V0XCIgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBCdWZmZXIgb3IgVWludDhBcnJheS4gJyArXG4gICAgICAnUmVjZWl2ZWQgdHlwZSAnICsgKHR5cGVvZiB0YXJnZXQpXG4gICAgKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAobnVtYmVySXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmICh0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbdmFsXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKG51bWJlcklzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggPj4+IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKVxuICAgICAgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKVxuICAgICAgICAgID8gM1xuICAgICAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpXG4gICAgICAgICAgICAgID8gMlxuICAgICAgICAgICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gaGV4U2xpY2VMb29rdXBUYWJsZVtidWZbaV1dXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIC8vIElmIGJ5dGVzLmxlbmd0aCBpcyBvZGQsIHRoZSBsYXN0IDggYml0cyBtdXN0IGJlIGlnbm9yZWQgKHNhbWUgYXMgbm9kZS5qcylcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGggLSAxOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIChieXRlc1tpICsgMV0gKiAyNTYpKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIHZhciBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihuZXdCdWYsIEJ1ZmZlci5wcm90b3R5cGUpXG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludExFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50QkUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDggPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDE2TEUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MTZCRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQzMkxFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDMyQkUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludExFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludEJFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDggPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MTZMRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDE2QkUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQzMkxFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MzJCRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsICg4ICogYnl0ZUxlbmd0aCkgLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCAoOCAqIGJ5dGVMZW5ndGgpIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc2hvdWxkIGJlIGEgQnVmZmVyJylcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBVc2UgYnVpbHQtaW4gd2hlbiBhdmFpbGFibGUsIG1pc3NpbmcgZnJvbSBJRTExXG4gICAgdGhpcy5jb3B5V2l0aGluKHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmICgoZW5jb2RpbmcgPT09ICd1dGY4JyAmJiBjb2RlIDwgMTI4KSB8fFxuICAgICAgICAgIGVuY29kaW5nID09PSAnbGF0aW4xJykge1xuICAgICAgICAvLyBGYXN0IHBhdGg6IElmIGB2YWxgIGZpdHMgaW50byBhIHNpbmdsZSBieXRlLCB1c2UgdGhhdCBudW1lcmljIHZhbHVlLlxuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgdmFsID0gTnVtYmVyKHZhbClcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgdmFsdWUgXCInICsgdmFsICtcbiAgICAgICAgJ1wiIGlzIGludmFsaWQgZm9yIGFyZ3VtZW50IFwidmFsdWVcIicpXG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teKy8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgdGFrZXMgZXF1YWwgc2lnbnMgYXMgZW5kIG9mIHRoZSBCYXNlNjQgZW5jb2RpbmdcbiAgc3RyID0gc3RyLnNwbGl0KCc9JylbMF1cbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0ci50cmltKCkucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuLy8gQXJyYXlCdWZmZXIgb3IgVWludDhBcnJheSBvYmplY3RzIGZyb20gb3RoZXIgY29udGV4dHMgKGkuZS4gaWZyYW1lcykgZG8gbm90IHBhc3Ncbi8vIHRoZSBgaW5zdGFuY2VvZmAgY2hlY2sgYnV0IHRoZXkgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgb2YgdGhhdCB0eXBlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMTY2XG5mdW5jdGlvbiBpc0luc3RhbmNlIChvYmosIHR5cGUpIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIHR5cGUgfHxcbiAgICAob2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yLm5hbWUgIT0gbnVsbCAmJlxuICAgICAgb2JqLmNvbnN0cnVjdG9yLm5hbWUgPT09IHR5cGUubmFtZSlcbn1cbmZ1bmN0aW9uIG51bWJlcklzTmFOIChvYmopIHtcbiAgLy8gRm9yIElFMTEgc3VwcG9ydFxuICByZXR1cm4gb2JqICE9PSBvYmogLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cblxuLy8gQ3JlYXRlIGxvb2t1cCB0YWJsZSBmb3IgYHRvU3RyaW5nKCdoZXgnKWBcbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzIxOVxudmFyIGhleFNsaWNlTG9va3VwVGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgYWxwaGFiZXQgPSAnMDEyMzQ1Njc4OWFiY2RlZidcbiAgdmFyIHRhYmxlID0gbmV3IEFycmF5KDI1NilcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgdmFyIGkxNiA9IGkgKiAxNlxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgdGFibGVbaTE2ICsgal0gPSBhbHBoYWJldFtpXSArIGFscGhhYmV0W2pdXG4gICAgfVxuICB9XG4gIHJldHVybiB0YWJsZVxufSkoKVxuIiwiLyohIGllZWU3NTQuIEJTRC0zLUNsYXVzZSBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbmV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gVGhpcyBleGFtcGxlIHN1cHBvcnQvZTJlLmpzIGlzIHByb2Nlc3NlZCBhbmRcbi8vIGxvYWRlZCBhdXRvbWF0aWNhbGx5IGJlZm9yZSB5b3VyIHRlc3QgZmlsZXMuXG4vL1xuLy8gVGhpcyBpcyBhIGdyZWF0IHBsYWNlIHRvIHB1dCBnbG9iYWwgY29uZmlndXJhdGlvbiBhbmRcbi8vIGJlaGF2aW9yIHRoYXQgbW9kaWZpZXMgQ3lwcmVzcy5cbi8vXG4vLyBZb3UgY2FuIGNoYW5nZSB0aGUgbG9jYXRpb24gb2YgdGhpcyBmaWxlIG9yIHR1cm4gb2ZmXG4vLyBhdXRvbWF0aWNhbGx5IHNlcnZpbmcgc3VwcG9ydCBmaWxlcyB3aXRoIHRoZVxuLy8gJ3N1cHBvcnRGaWxlJyBjb25maWd1cmF0aW9uIG9wdGlvbi5cbi8vXG4vLyBZb3UgY2FuIHJlYWQgbW9yZSBoZXJlOlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2NvbmZpZ3VyYXRpb25cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbmltcG9ydCAnQHBlcmN5L2N5cHJlc3MnXG4vLyBjeXByZXNzL3N1cHBvcnQvZTJlLmpzXG5pbXBvcnQgJ0BjaHJvbWF0aWMtY29tL2N5cHJlc3Mvc3VwcG9ydCdcblxuLy8gSW1wb3J0IGNvbW1hbmRzLmpzIHVzaW5nIEVTMjAxNSBzeW50YXg6XG5pbXBvcnQgJy4vY29tbWFuZHMnXG5cbi8vIEFsdGVybmF0aXZlbHkgeW91IGNhbiB1c2UgQ29tbW9uSlMgc3ludGF4OlxuLy8gcmVxdWlyZSgnLi9jb21tYW5kcycpXG4iXSwibmFtZXMiOlsiQ3lwcmVzcyIsIkNvbW1hbmRzIiwiYWRkIiwibmFtZSIsInByb3ZpZGVyIiwiZW52IiwidyIsImNvbmZpZyIsImgiLCJjeSIsInRha2VTbmFwc2hvdCIsInBlcmN5U25hcHNob3QiLCJyZXF1aXJlIl0sInNvdXJjZVJvb3QiOiIifQ==