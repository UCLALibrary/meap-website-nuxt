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
/*!*******************************************!*\
  !*** ./cypress/e2e/newslistingpage.cy.js ***!
  \*******************************************/


var _viewports = __webpack_require__(/*! ../support/viewports */ "./cypress/support/viewports.js");
const provider = Cypress.env('VISUAL_PROVIDER');
const isChromatic = provider === 'chromatic';
const isPercy = provider === 'percy';
function runNewsListingTests({
  withSnapshot = false
} = {}) {
  it('Visit the News Listing Page', () => {
    cy.visit('/about/news');

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible');
    cy.get('h1.title').should('contain', 'MEAP News');
    if (withSnapshot) cy.visualSnapshot('News Listing Page');
  });
  if (!isChromatic && !isPercy) {
    it('Search Found', () => {
      cy.visit('/about/news?q=kids&filters=');
      cy.get('.logo-ucla').should('be.visible');
      cy.get('input[type=search]').should('have.value', 'kids');
      cy.get('h2.about-results').invoke('text').should('not.be.empty');
    });
  }
}
if (isChromatic) {
  _viewports.viewports.forEach(({
    label,
    viewportWidth,
    viewportHeight
  }) => {
    describe(`News Listing page - ${label}`, {
      viewportWidth,
      viewportHeight
    }, () => {
      runNewsListingTests({
        withSnapshot: true
      });
    });
  });
} else if (isPercy) {
  describe('News Listing page', () => {
    runNewsListingTests({
      withSnapshot: true
    });
  });
} else {
  describe('News Listing page', () => {
    runNewsListingTests({
      withSnapshot: false
    });
  });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQyxZQUFZLEVBQUU7SUFBTSxDQUFDLENBQUM7RUFDOUMsQ0FBQyxDQUFDO0FBQ0osQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lYXAtd2Vic2l0ZS1udXh0Ly4vY3lwcmVzcy9zdXBwb3J0L3ZpZXdwb3J0cy5qcyIsIndlYnBhY2s6Ly9tZWFwLXdlYnNpdGUtbnV4dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWFwLXdlYnNpdGUtbnV4dC8uL2N5cHJlc3MvZTJlL25ld3NsaXN0aW5ncGFnZS5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgdmlld3BvcnRzID0gW1xuICB7IGxhYmVsOiAnTW9iaWxlJywgdmlld3BvcnRXaWR0aDogMzc1LCB2aWV3cG9ydEhlaWdodDogNjY3IH0sXG4gIHsgbGFiZWw6ICdUYWJsZXQnLCB2aWV3cG9ydFdpZHRoOiA3NjgsIHZpZXdwb3J0SGVpZ2h0OiAxMDI0IH0sXG4gIHsgbGFiZWw6ICdEZXNrdG9wJywgdmlld3BvcnRXaWR0aDogMTI4MCwgdmlld3BvcnRIZWlnaHQ6IDgwMCB9LFxuXVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IHZpZXdwb3J0cyB9IGZyb20gJy4uL3N1cHBvcnQvdmlld3BvcnRzJ1xuXG5jb25zdCBwcm92aWRlciA9IEN5cHJlc3MuZW52KCdWSVNVQUxfUFJPVklERVInKVxuY29uc3QgaXNDaHJvbWF0aWMgPSBwcm92aWRlciA9PT0gJ2Nocm9tYXRpYydcbmNvbnN0IGlzUGVyY3kgPSBwcm92aWRlciA9PT0gJ3BlcmN5J1xuXG5mdW5jdGlvbiBydW5OZXdzTGlzdGluZ1Rlc3RzKHsgd2l0aFNuYXBzaG90ID0gZmFsc2UgfSA9IHt9KSB7XG4gIGl0KCdWaXNpdCB0aGUgTmV3cyBMaXN0aW5nIFBhZ2UnLCAoKSA9PiB7XG4gICAgY3kudmlzaXQoJy9hYm91dC9uZXdzJylcblxuICAgIC8vIFVDTEEgTGlicmFyeSBicmFuZFxuICAgIGN5LmdldCgnLmxvZ28tdWNsYScpLnNob3VsZCgnYmUudmlzaWJsZScpXG4gICAgY3kuZ2V0KCdoMS50aXRsZScpLnNob3VsZCgnY29udGFpbicsICdNRUFQIE5ld3MnKVxuICAgIGlmICh3aXRoU25hcHNob3QpIGN5LnZpc3VhbFNuYXBzaG90KCdOZXdzIExpc3RpbmcgUGFnZScpXG4gIH0pXG4gIGlmICghaXNDaHJvbWF0aWMgJiYgIWlzUGVyY3kpIHtcbiAgICBpdCgnU2VhcmNoIEZvdW5kJywgKCkgPT4ge1xuICAgICAgY3kudmlzaXQoJy9hYm91dC9uZXdzP3E9a2lkcyZmaWx0ZXJzPScpXG4gICAgICBjeS5nZXQoJy5sb2dvLXVjbGEnKS5zaG91bGQoJ2JlLnZpc2libGUnKVxuICAgICAgY3kuZ2V0KCdpbnB1dFt0eXBlPXNlYXJjaF0nKS5zaG91bGQoXG4gICAgICAgICdoYXZlLnZhbHVlJyxcbiAgICAgICAgJ2tpZHMnXG4gICAgICApXG4gICAgICBjeS5nZXQoJ2gyLmFib3V0LXJlc3VsdHMnKS5pbnZva2UoJ3RleHQnKS5zaG91bGQoJ25vdC5iZS5lbXB0eScpXG4gICAgfSlcbiAgfVxufVxuaWYgKGlzQ2hyb21hdGljKSB7XG4gIHZpZXdwb3J0cy5mb3JFYWNoKCh7IGxhYmVsLCB2aWV3cG9ydFdpZHRoLCB2aWV3cG9ydEhlaWdodCB9KSA9PiB7XG4gICAgZGVzY3JpYmUoYE5ld3MgTGlzdGluZyBwYWdlIC0gJHtsYWJlbH1gLCB7IHZpZXdwb3J0V2lkdGgsIHZpZXdwb3J0SGVpZ2h0IH0sICgpID0+IHtcbiAgICAgIHJ1bk5ld3NMaXN0aW5nVGVzdHMoeyB3aXRoU25hcHNob3Q6IHRydWUgfSlcbiAgICB9KVxuICB9KVxufSBlbHNlIGlmIChpc1BlcmN5KSB7XG4gIGRlc2NyaWJlKCdOZXdzIExpc3RpbmcgcGFnZScsICgpID0+IHtcbiAgICBydW5OZXdzTGlzdGluZ1Rlc3RzKHsgd2l0aFNuYXBzaG90OiB0cnVlIH0pXG4gIH0pXG59IGVsc2Uge1xuICBkZXNjcmliZSgnTmV3cyBMaXN0aW5nIHBhZ2UnLCAoKSA9PiB7XG4gICAgcnVuTmV3c0xpc3RpbmdUZXN0cyh7IHdpdGhTbmFwc2hvdDogZmFsc2UgfSlcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJ2aWV3cG9ydHMiLCJleHBvcnRzIiwibGFiZWwiLCJ2aWV3cG9ydFdpZHRoIiwidmlld3BvcnRIZWlnaHQiLCJfdmlld3BvcnRzIiwicmVxdWlyZSIsInByb3ZpZGVyIiwiQ3lwcmVzcyIsImVudiIsImlzQ2hyb21hdGljIiwiaXNQZXJjeSIsInJ1bk5ld3NMaXN0aW5nVGVzdHMiLCJ3aXRoU25hcHNob3QiLCJpdCIsImN5IiwidmlzaXQiLCJnZXQiLCJzaG91bGQiLCJ2aXN1YWxTbmFwc2hvdCIsImludm9rZSIsImZvckVhY2giLCJkZXNjcmliZSJdLCJzb3VyY2VSb290IjoiIn0=