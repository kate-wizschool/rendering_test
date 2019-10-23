webpackHotUpdate("static/development/pages/feature.js",{

/***/ "./pages/feature.js":
/*!**************************!*\
  !*** ./pages/feature.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");







var _jsxFileName = "/Users/kate/Documents/study/rendering_test/next_test/pages/feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var Feature =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Feature, _React$Component);

  function Feature(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Feature);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Feature).call(this, props));
    _this.state = {
      data: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Feature, [{
    key: "render",
    value: function render() {
      var data = this.state.data;
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, this.props.from, " \uC5D0\uC11C \uC2E4\uD589\uB428"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, this.props.data), __jsx("img", {
        src: "/sample3.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                //서버측의 req
                //이 메소드는 서버,클라이언트에서 실행됨
                data = "\uD2B9\uC815 \uD398\uC774\uC9C0\uC5D0 \uB300\uD55C \uC990\uACA8\uCC3E\uAE30 \uB4F1\uB85D\uC774 \uBD88\uAC00\uD569\uB2C8\uB2E4. \uCEF4\uD3EC\uB10C\uD2B8\uAC00\n    \uC804\uD658\uB418\uB354\uB77C\uB3C4 \uBE0C\uB77C\uC6B0\uC800 \uC8FC\uC18C\uCC3D\uC758 URL\uC740 \uACE0\uC815\uB418\uC5B4 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.\n    \uB4A4\uB85C \uAC00\uAE30 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uD574\uB2F9 \uC571\uB0B4\uC5D0\uC11C \uC774\uC804 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD558\uB294 \uAC83\uC774\n    \uC544\uB2C8\uB77C \uADF8 \uC804\uC5D0 \uC11C\uD551\uD558\uB358 \uB2E4\uB978 \uC6F9\uC0AC\uC774\uD2B8\uB85C \uC774\uB3D9\uD574\uBC84\uB9BD\uB2C8\uB2E4. \uC0C8\uB85C \uACE0\uCE68\n    \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uC0AC\uC6A9 \uC911\uC774\uB358 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC544\uB2CC \uBB34\uC870\uAC74 \uCD5C\uCD08\uC5D0\n    \uB80C\uB354\uB9C1\uB418\uC5C8\uB358 Home \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4.";
                return _context.abrupt("return", req ? {
                  from: "server",
                  data: data
                } : {
                  from: "client ",
                  data: data
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Feature;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Feature);

/***/ })

})
//# sourceMappingURL=feature.js.46b24cc78f546dec3366.hot-update.js.map