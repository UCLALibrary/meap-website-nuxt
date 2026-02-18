/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./cypress/support/viewports.js":
/*!**************************************!*\
  !*** ./cypress/support/viewports.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.viewports = void 0;
const viewports = exports.viewports = [{
  label: 'Mobile',
  viewportWidth: 375,
  viewportHeight: 667
}, {
  label: 'Tablet',
  viewportWidth: 768,
  viewportHeight: 1024
}, {
  label: 'Desktop',
  viewportWidth: 1280,
  viewportHeight: 800
}];

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./cypress/e2e/generalcontent.cy.js ***!
  \******************************************/


var _viewports = __webpack_require__(/*! ../support/viewports */ "./cypress/support/viewports.js");
const provider = Cypress.env('VISUAL_PROVIDER');
const isChromatic = provider === 'chromatic';
const isPercy = provider === 'percy';
function runGeneralContentTests({
  withSnapshot = false
} = {}) {
  it('Visit a General Content Page', () => {
    cy.visit('/about');

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible');
    cy.get('h1.title').should('contain', 'Who We Are');
    if (withSnapshot) cy.visualSnapshot('General Content Page');
  });
}
if (isChromatic) {
  _viewports.viewports.forEach(({
    label,
    viewportWidth,
    viewportHeight
  }) => {
    describe(`General Content page - ${label}`, {
      viewportWidth,
      viewportHeight
    }, () => {
      runGeneralContentTests({
        withSnapshot: true
      });
    });
  });
} else if (isPercy) {
  describe('General Content page', () => {
    runGeneralContentTests({
      withSnapshot: true
    });
  });
} else {
  describe('General Content page', () => {
    runGeneralContentTests({
      withSnapshot: false
    });
  });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhbGNvbnRlbnQuY3kuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLFNBQVMsR0FBQUMsaUJBQUEsR0FBRyxDQUN2QjtFQUFFQyxLQUFLLEVBQUUsUUFBUTtFQUFFQyxhQUFhLEVBQUUsR0FBRztFQUFFQyxjQUFjLEVBQUU7QUFBSSxDQUFDLEVBQzVEO0VBQUVGLEtBQUssRUFBRSxRQUFRO0VBQUVDLGFBQWEsRUFBRSxHQUFHO0VBQUVDLGNBQWMsRUFBRTtBQUFLLENBQUMsRUFDN0Q7RUFBRUYsS0FBSyxFQUFFLFNBQVM7RUFBRUMsYUFBYSxFQUFFLElBQUk7RUFBRUMsY0FBYyxFQUFFO0FBQUksQ0FBQyxDQUMvRDs7Ozs7O1VDSkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7QUN0QkEsSUFBQUMsVUFBQSxHQUFBQyxtQkFBQTtBQUVBLE1BQU1DLFFBQVEsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7QUFDL0MsTUFBTUMsV0FBVyxHQUFHSCxRQUFRLEtBQUssV0FBVztBQUM1QyxNQUFNSSxPQUFPLEdBQUdKLFFBQVEsS0FBSyxPQUFPO0FBRXBDLFNBQVNLLHNCQUFzQkEsQ0FBQztFQUFFQyxZQUFZLEdBQUc7QUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7RUFDN0RDLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxNQUFNO0lBQ3ZDQyxFQUFFLENBQUNDLEtBQUssQ0FBQyxRQUFRLENBQUM7O0lBRWxCO0lBQ0FELEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3pDSCxFQUFFLENBQUNFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7SUFDbEQsSUFBSUwsWUFBWSxFQUFFRSxFQUFFLENBQUNJLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQztFQUM3RCxDQUFDLENBQUM7QUFDSjtBQUNBLElBQUlULFdBQVcsRUFBRTtFQUNmVixvQkFBUyxDQUFDb0IsT0FBTyxDQUFDLENBQUM7SUFBRWxCLEtBQUs7SUFBRUMsYUFBYTtJQUFFQztFQUFlLENBQUMsS0FBSztJQUM5RGlCLFFBQVEsQ0FBQywwQkFBMEJuQixLQUFLLEVBQUUsRUFBRTtNQUFFQyxhQUFhO01BQUVDO0lBQWUsQ0FBQyxFQUFFLE1BQU07TUFDbkZRLHNCQUFzQixDQUFDO1FBQUVDLFlBQVksRUFBRTtNQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSixDQUFDLE1BQU0sSUFBSUYsT0FBTyxFQUFFO0VBQ2xCVSxRQUFRLENBQUMsc0JBQXNCLEVBQUUsTUFBTTtJQUNyQ1Qsc0JBQXNCLENBQUM7TUFBRUMsWUFBWSxFQUFFO0lBQUssQ0FBQyxDQUFDO0VBQ2hELENBQUMsQ0FBQztBQUNKLENBQUMsTUFBTTtFQUNMUSxRQUFRLENBQUMsc0JBQXNCLEVBQUUsTUFBTTtJQUNyQ1Qsc0JBQXNCLENBQUM7TUFBRUMsWUFBWSxFQUFFO0lBQU0sQ0FBQyxDQUFDO0VBQ2pELENBQUMsQ0FBQztBQUNKLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWFwLXdlYnNpdGUtbnV4dC8uL2N5cHJlc3Mvc3VwcG9ydC92aWV3cG9ydHMuanMiLCJ3ZWJwYWNrOi8vbWVhcC13ZWJzaXRlLW51eHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWVhcC13ZWJzaXRlLW51eHQvLi9jeXByZXNzL2UyZS9nZW5lcmFsY29udGVudC5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgdmlld3BvcnRzID0gW1xuICB7IGxhYmVsOiAnTW9iaWxlJywgdmlld3BvcnRXaWR0aDogMzc1LCB2aWV3cG9ydEhlaWdodDogNjY3IH0sXG4gIHsgbGFiZWw6ICdUYWJsZXQnLCB2aWV3cG9ydFdpZHRoOiA3NjgsIHZpZXdwb3J0SGVpZ2h0OiAxMDI0IH0sXG4gIHsgbGFiZWw6ICdEZXNrdG9wJywgdmlld3BvcnRXaWR0aDogMTI4MCwgdmlld3BvcnRIZWlnaHQ6IDgwMCB9LFxuXVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IHZpZXdwb3J0cyB9IGZyb20gJy4uL3N1cHBvcnQvdmlld3BvcnRzJ1xuXG5jb25zdCBwcm92aWRlciA9IEN5cHJlc3MuZW52KCdWSVNVQUxfUFJPVklERVInKVxuY29uc3QgaXNDaHJvbWF0aWMgPSBwcm92aWRlciA9PT0gJ2Nocm9tYXRpYydcbmNvbnN0IGlzUGVyY3kgPSBwcm92aWRlciA9PT0gJ3BlcmN5J1xuXG5mdW5jdGlvbiBydW5HZW5lcmFsQ29udGVudFRlc3RzKHsgd2l0aFNuYXBzaG90ID0gZmFsc2UgfSA9IHt9KSB7XG4gIGl0KCdWaXNpdCBhIEdlbmVyYWwgQ29udGVudCBQYWdlJywgKCkgPT4ge1xuICAgIGN5LnZpc2l0KCcvYWJvdXQnKVxuXG4gICAgLy8gVUNMQSBMaWJyYXJ5IGJyYW5kXG4gICAgY3kuZ2V0KCcubG9nby11Y2xhJykuc2hvdWxkKCdiZS52aXNpYmxlJylcbiAgICBjeS5nZXQoJ2gxLnRpdGxlJykuc2hvdWxkKCdjb250YWluJywgJ1dobyBXZSBBcmUnKVxuICAgIGlmICh3aXRoU25hcHNob3QpIGN5LnZpc3VhbFNuYXBzaG90KCdHZW5lcmFsIENvbnRlbnQgUGFnZScpXG4gIH0pXG59XG5pZiAoaXNDaHJvbWF0aWMpIHtcbiAgdmlld3BvcnRzLmZvckVhY2goKHsgbGFiZWwsIHZpZXdwb3J0V2lkdGgsIHZpZXdwb3J0SGVpZ2h0IH0pID0+IHtcbiAgICBkZXNjcmliZShgR2VuZXJhbCBDb250ZW50IHBhZ2UgLSAke2xhYmVsfWAsIHsgdmlld3BvcnRXaWR0aCwgdmlld3BvcnRIZWlnaHQgfSwgKCkgPT4ge1xuICAgICAgcnVuR2VuZXJhbENvbnRlbnRUZXN0cyh7IHdpdGhTbmFwc2hvdDogdHJ1ZSB9KVxuICAgIH0pXG4gIH0pXG59IGVsc2UgaWYgKGlzUGVyY3kpIHtcbiAgZGVzY3JpYmUoJ0dlbmVyYWwgQ29udGVudCBwYWdlJywgKCkgPT4ge1xuICAgIHJ1bkdlbmVyYWxDb250ZW50VGVzdHMoeyB3aXRoU25hcHNob3Q6IHRydWUgfSlcbiAgfSlcbn0gZWxzZSB7XG4gIGRlc2NyaWJlKCdHZW5lcmFsIENvbnRlbnQgcGFnZScsICgpID0+IHtcbiAgICBydW5HZW5lcmFsQ29udGVudFRlc3RzKHsgd2l0aFNuYXBzaG90OiBmYWxzZSB9KVxuICB9KVxufVxuIl0sIm5hbWVzIjpbInZpZXdwb3J0cyIsImV4cG9ydHMiLCJsYWJlbCIsInZpZXdwb3J0V2lkdGgiLCJ2aWV3cG9ydEhlaWdodCIsIl92aWV3cG9ydHMiLCJyZXF1aXJlIiwicHJvdmlkZXIiLCJDeXByZXNzIiwiZW52IiwiaXNDaHJvbWF0aWMiLCJpc1BlcmN5IiwicnVuR2VuZXJhbENvbnRlbnRUZXN0cyIsIndpdGhTbmFwc2hvdCIsIml0IiwiY3kiLCJ2aXNpdCIsImdldCIsInNob3VsZCIsInZpc3VhbFNuYXBzaG90IiwiZm9yRWFjaCIsImRlc2NyaWJlIl0sInNvdXJjZVJvb3QiOiIifQ==