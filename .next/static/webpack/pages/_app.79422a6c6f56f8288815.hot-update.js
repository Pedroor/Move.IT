webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/ChallangesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallangesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallangesContext, ChallangesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallangesContext\", function() { return ChallangesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallangesProvider\", function() { return ChallangesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\n\nvar _jsxFileName = \"/home/pedro/Documents/GitHub/NLW-4-React-Trail/src/contexts/ChallangesContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar ChallangesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction ChallangesProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentExperience = _useState2[0],\n      setCurrentExperience = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      challengesCompleted = _useState3[0],\n      setChallengesCompleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveChallenge = _useState4[1];\n\n  function levelUp() {\n    setLevel(level + 1);\n  }\n\n  function startNewChallenge() {\n    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n    setActiveChallenge(challenge);\n  }\n\n  function resetChallenge() {\n    setActiveChallenge(null);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallangesContext.Provider, {\n    value: {\n      level: level,\n      currentExperience: currentExperience,\n      challengesCompleted: challengesCompleted,\n      activeChallenge: activeChallenge,\n      levelUp: levelUp,\n      startNewChallenge: startNewChallenge,\n      resetChallenge: resetChallenge\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ChallangesProvider, \"EH9kpU4KnW8dz45YSugbIBdFQ48=\");\n\n_c = ChallangesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallangesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsYW5nZXNDb250ZXh0LnRzeD9iYWFhIl0sIm5hbWVzIjpbIkNoYWxsYW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsYW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwibGV2ZWxVcCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwicmVzZXRDaGFsbGVuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQXFCTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUVBLFNBQVNDLGtCQUFULE9BQWtFO0FBQUE7O0FBQUEsTUFBcENDLFFBQW9DLFFBQXBDQSxRQUFvQzs7QUFBQSxrQkFFNUNDLHNEQUFRLENBQUMsQ0FBRCxDQUZvQztBQUFBLE1BRTlEQyxLQUY4RDtBQUFBLE1BRXhEQyxRQUZ3RDs7QUFBQSxtQkFHbkJGLHNEQUFRLENBQUMsQ0FBRCxDQUhXO0FBQUEsTUFHOURHLGlCQUg4RDtBQUFBLE1BRzNDQyxvQkFIMkM7O0FBQUEsbUJBSWZKLHNEQUFRLENBQUMsQ0FBRCxDQUpPO0FBQUEsTUFJOURLLG1CQUo4RDtBQUFBLE1BSXpDQyxzQkFKeUM7O0FBQUEsbUJBTXZCTixzREFBUSxDQUFDLElBQUQsQ0FOZTtBQUFBLE1BTTlETyxlQU44RDtBQUFBLE1BTTdDQyxrQkFONkM7O0FBUXJFLFdBQVNDLE9BQVQsR0FBa0I7QUFDZFAsWUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0g7O0FBRUQsV0FBU1MsaUJBQVQsR0FBNEI7QUFFeEIsUUFBTUMsb0JBQW9CLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JDLDZDQUFVLENBQUNDLE1BQXRDLENBQTdCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHRiw2Q0FBVSxDQUFDSixvQkFBRCxDQUE1QjtBQUVBSCxzQkFBa0IsQ0FBQ1MsU0FBRCxDQUFsQjtBQUNIOztBQUVELFdBQVNDLGNBQVQsR0FBeUI7QUFDckJWLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDSDs7QUFFRCxzQkFDSSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUNJLFNBQUssRUFBRTtBQUNIUCxXQUFLLEVBQUxBLEtBREc7QUFFSEUsdUJBQWlCLEVBQWpCQSxpQkFGRztBQUdIRSx5QkFBbUIsRUFBbkJBLG1CQUhHO0FBSUhFLHFCQUFlLEVBQWZBLGVBSkc7QUFLSEUsYUFBTyxFQUFQQSxPQUxHO0FBTUhDLHVCQUFpQixFQUFqQkEsaUJBTkc7QUFPSFEsb0JBQWMsRUFBZEE7QUFQRyxLQURYO0FBQUEsY0FXS25CO0FBWEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUg7O0dBdkNlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ2hhbGxhbmdlc0NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gXCIuLi8uLi9jaGFsbGVuZ2VzLmpzb25cIlxuXG5cbmludGVyZmFjZSBDaGFsbGFuZ2VzUHJvdmlkZXJQcm9wc3tcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcbiAgICB0eXBlOiAnYm9keScgfCAnZXllJztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGFtb3VudDogbnVtYmVyO1xufVxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YXtcbiAgICBsZXZlbDogbnVtYmVyO1xuICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XG4gICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xuICAgIGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlO1xuICAgIGxldmVsVXA6ICgpID0+IHZvaWQ7XG4gICAgc3RhcnROZXdDaGFsbGVuZ2U6KCkgPT4gdm9pZDtcbiAgICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcbn1cbmV4cG9ydCBjb25zdCBDaGFsbGFuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxhbmdlc1Byb3ZpZGVyKHsgY2hpbGRyZW4gfTogQ2hhbGxhbmdlc1Byb3ZpZGVyUHJvcHMpe1xuICAgIFxuICAgIGNvbnN0IFtsZXZlbCxzZXRMZXZlbF0gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIF0gPXVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBmdW5jdGlvbiBsZXZlbFVwKCl7XG4gICAgICAgIHNldExldmVsKGxldmVsICsgMSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xuXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKXtcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPENoYWxsYW5nZXNDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZT17eyBcbiAgICAgICAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcbiAgICAgICAgICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcbiAgICAgICAgICAgICAgICBsZXZlbFVwLFxuICAgICAgICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxuICAgICAgICAgICAgICAgIHJlc2V0Q2hhbGxlbmdlXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NoYWxsYW5nZXNDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/ChallangesContext.tsx\n");

/***/ })

})