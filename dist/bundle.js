/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_ryact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ryact.js */ \"./src/lib/ryact.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n/** @jsx Ryact.createNode */\nfunction Counter() {\n  var _Ryact$useState = _lib_ryact_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].useState(1),\n    _Ryact$useState2 = _slicedToArray(_Ryact$useState, 2),\n    state = _Ryact$useState2[0],\n    setState = _Ryact$useState2[1];\n  var updateCounter = function updateCounter() {\n    setState(function (c) {\n      return c + 1;\n    });\n  };\n  return _lib_ryact_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode(\"div\", null, _lib_ryact_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode(\"button\", {\n    onClick: updateCounter\n  }, \"add\"), _lib_ryact_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode(\"h1\", null, \"Count: \", state));\n}\n\n/** @jsx Ryact.createNode */\nvar element = _lib_ryact_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode(Counter, null);\nvar container = document.getElementById(\"root\");\n_lib_ryact_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(element, container);\n\n//# sourceURL=webpack://ryact/./src/index.js?");

/***/ }),

/***/ "./src/lib/constants.js":
/*!******************************!*\
  !*** ./src/lib/constants.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EFFECT_TAGS: () => (/* binding */ EFFECT_TAGS),\n/* harmony export */   NODE_TYPES: () => (/* binding */ NODE_TYPES)\n/* harmony export */ });\nvar NODE_TYPES = {\n  TEXT: \"TEXT_NODE\"\n};\nvar EFFECT_TAGS = {\n  PLACEMENT: \"PLACEMENT\",\n  UPDATE: \"UPDATE\",\n  DELETION: \"DELETION\"\n};\n\n//# sourceURL=webpack://ryact/./src/lib/constants.js?");

/***/ }),

/***/ "./src/lib/ryact.js":
/*!**************************!*\
  !*** ./src/lib/ryact.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/lib/constants.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar createNode = function createNode(type, props) {\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n  return {\n    type: type,\n    props: _objectSpread(_objectSpread({}, props), {}, {\n      children: children.map(function (child) {\n        return _typeof(child) === \"object\" ? child : createTextNode(child);\n      })\n    })\n  };\n};\nvar createTextNode = function createTextNode(text) {\n  return {\n    type: _constants_js__WEBPACK_IMPORTED_MODULE_0__.NODE_TYPES.TEXT,\n    props: {\n      nodeValue: text,\n      children: []\n    }\n  };\n};\nvar createDom = function createDom(fiber) {\n  var dom = fiber.type == _constants_js__WEBPACK_IMPORTED_MODULE_0__.NODE_TYPES.TEXT ? document.createTextNode(\"\") : document.createElement(fiber.type);\n  updateDom(dom, {}, fiber.props);\n  return dom;\n};\nvar updateDom = function updateDom(dom, prevProps, nextProps) {\n  var isEvent = function isEvent(key) {\n    return key.startsWith(\"on\");\n  };\n  var isProperty = function isProperty(key) {\n    return key !== \"children\" && !isEvent(key);\n  };\n  var isNew = function isNew(prev, next) {\n    return function (key) {\n      return prev[key] !== next[key];\n    };\n  };\n  var isGone = function isGone(prev, next) {\n    return function (key) {\n      return !(key in next);\n    };\n  };\n\n  // Remove old or changed event listeners\n  Object.keys(prevProps).filter(isEvent).filter(function (key) {\n    return !(key in nextProps) || isNew(prevProps, nextProps)(key);\n  }).forEach(function (name) {\n    var eventType = name.toLowerCase().substring(2);\n    dom.removeEventListener(eventType, prevProps[name]);\n  });\n\n  // Remove old properties\n  Object.keys(prevProps).filter(isProperty).filter(isGone(prevProps, nextProps)).forEach(function (name) {\n    dom[name] = \"\";\n  });\n\n  // Set new or changed properties\n  Object.keys(nextProps).filter(isProperty).filter(isNew(prevProps, nextProps)).forEach(function (name) {\n    dom[name] = nextProps[name];\n  });\n\n  // Add event listeners\n  Object.keys(nextProps).filter(isEvent).filter(isNew(prevProps, nextProps)).forEach(function (name) {\n    var eventType = name.toLowerCase().substring(2);\n    dom.addEventListener(eventType, nextProps[name]);\n  });\n};\nvar commitRoot = function commitRoot() {\n  deletions.forEach(_commitWork);\n  _commitWork(wipRoot.child);\n  currentRoot = wipRoot;\n  wipRoot = null;\n};\nvar _commitWork = function commitWork(fiber) {\n  if (!fiber) {\n    return;\n  }\n  var domParentFiber = fiber.parent;\n  while (!domParentFiber.dom) {\n    domParentFiber = domParentFiber.parent;\n  }\n  var domParent = domParentFiber.dom;\n  if (fiber.effectTag === _constants_js__WEBPACK_IMPORTED_MODULE_0__.EFFECT_TAGS.PLACEMENT && fiber.dom != null) {\n    domParent.appendChild(fiber.dom);\n  } else if (fiber.effectTag === _constants_js__WEBPACK_IMPORTED_MODULE_0__.EFFECT_TAGS.UPDATE && fiber.dom != null) {\n    updateDom(fiber.dom, fiber.alternate.props, fiber.props);\n  } else if (fiber.effectTag === _constants_js__WEBPACK_IMPORTED_MODULE_0__.EFFECT_TAGS.DELETION) {\n    _commitDeletion(fiber, domParent);\n  }\n  _commitWork(fiber.child);\n  _commitWork(fiber.sibling);\n};\nvar _commitDeletion = function commitDeletion(fiber, domParent) {\n  if (fiber.dom) {\n    domParent.removeChild(fiber.dom);\n  } else {\n    _commitDeletion(fiber.child, domParent);\n  }\n};\nvar render = function render(element, container) {\n  wipRoot = {\n    dom: container,\n    props: {\n      children: [element]\n    },\n    alternate: currentRoot\n  };\n  deletions = [];\n  nextUnitOfWork = wipRoot;\n};\nvar nextUnitOfWork = null;\nvar currentRoot = null;\nvar wipRoot = null;\nvar deletions = null;\nvar _workLoop = function workLoop(deadline) {\n  var shouldYield = false;\n  while (nextUnitOfWork && !shouldYield) {\n    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);\n    shouldYield = deadline.timeRemaining() < 1;\n  }\n  if (!nextUnitOfWork && wipRoot) {\n    commitRoot();\n  }\n  requestIdleCallback(_workLoop);\n};\nrequestIdleCallback(_workLoop);\nvar performUnitOfWork = function performUnitOfWork(fiber) {\n  var isFunctionComponent = fiber.type instanceof Function;\n  if (isFunctionComponent) {\n    updateFunctionComponent(fiber);\n  } else {\n    updateHostComponent(fiber);\n  }\n  if (fiber.child) {\n    return fiber.child;\n  }\n  var nextFiber = fiber;\n  while (nextFiber) {\n    if (nextFiber.sibling) {\n      return nextFiber.sibling;\n    }\n    nextFiber = nextFiber.parent;\n  }\n};\nvar wipFiber = null;\nvar hookIndex = null;\nvar updateFunctionComponent = function updateFunctionComponent(fiber) {\n  wipFiber = fiber;\n  hookIndex = 0;\n  wipFiber.hooks = [];\n  var children = [fiber.type(fiber.props)];\n  reconcileChildren(fiber, children);\n};\nvar useState = function useState(initial) {\n  var oldHook = wipFiber.alternate && wipFiber.alternate.hooks && wipFiber.alternate.hooks[hookIndex];\n  var hook = {\n    state: oldHook ? oldHook.state : initial,\n    queue: []\n  };\n  var actions = oldHook ? oldHook.queue : [];\n  actions.forEach(function (action) {\n    hook.state = action(hook.state);\n  });\n  var setState = function setState(action) {\n    hook.queue.push(action);\n    wipRoot = {\n      dom: currentRoot.dom,\n      props: currentRoot.props,\n      alternate: currentRoot\n    };\n    nextUnitOfWork = wipRoot;\n    deletions = [];\n  };\n  wipFiber.hooks.push(hook);\n  hookIndex++;\n  return [hook.state, setState];\n};\nvar updateHostComponent = function updateHostComponent(fiber) {\n  if (!fiber.dom) {\n    fiber.dom = createDom(fiber);\n  }\n  reconcileChildren(fiber, fiber.props.children);\n};\nvar reconcileChildren = function reconcileChildren(wipFiber, elements) {\n  var index = 0;\n  var oldFiber = wipFiber.alternate && wipFiber.alternate.child;\n  var prevSibling = null;\n  while (index < elements.length || oldFiber != null) {\n    var element = elements[index];\n    var newFiber = null;\n    var sameType = oldFiber && element && element.type == oldFiber.type;\n    if (sameType) {\n      newFiber = {\n        type: oldFiber.type,\n        props: element.props,\n        dom: oldFiber.dom,\n        parent: wipFiber,\n        alternate: oldFiber,\n        effectTag: _constants_js__WEBPACK_IMPORTED_MODULE_0__.EFFECT_TAGS.UPDATE\n      };\n    }\n    if (element && !sameType) {\n      newFiber = {\n        type: element.type,\n        props: element.props,\n        dom: null,\n        parent: wipFiber,\n        alternate: null,\n        effectTag: _constants_js__WEBPACK_IMPORTED_MODULE_0__.EFFECT_TAGS.PLACEMENT\n      };\n    }\n    if (oldFiber && !sameType) {\n      oldFiber.effectTag = _constants_js__WEBPACK_IMPORTED_MODULE_0__.EFFECT_TAGS.DELETION;\n      deletions.push(oldFiber);\n    }\n    if (oldFiber) {\n      oldFiber = oldFiber.sibling;\n    }\n    if (index === 0) {\n      wipFiber.child = newFiber;\n    } else if (element) {\n      prevSibling.sibling = newFiber;\n    }\n    prevSibling = newFiber;\n    index++;\n  }\n};\nvar Ryact = {\n  createNode: createNode,\n  render: render,\n  useState: useState\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ryact);\n\n//# sourceURL=webpack://ryact/./src/lib/ryact.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;