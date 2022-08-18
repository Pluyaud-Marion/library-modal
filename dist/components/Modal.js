"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../components/styles/modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Modal = _ref => {
  let {
    contentModal
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text"
  }, contentModal), /*#__PURE__*/_react.default.createElement("span", {
    className: "close-modal"
  }, "X"));
};

var _default = Modal;
exports.default = _default;