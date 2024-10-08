"use strict";

var _ryact = _interopRequireDefault(require("./lib/ryact.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/** @jsx Ryact.createNode */
function Counter() {
  var _Ryact$useState = _ryact["default"].useState(1),
    _Ryact$useState2 = _slicedToArray(_Ryact$useState, 2),
    state = _Ryact$useState2[0],
    setState = _Ryact$useState2[1];
  var updateCounter = function updateCounter() {
    setState(function (c) {
      return c + 1;
    });
  };
  return _ryact["default"].createNode("div", null, _ryact["default"].createNode("button", {
    onClick: updateCounter
  }, "add"), _ryact["default"].createNode("h1", null, "Count: ", state));
}

/** @jsx Ryact.createNode */
var element = _ryact["default"].createNode(Counter, null);
var container = document.getElementById("root");
_ryact["default"].render(element, container);