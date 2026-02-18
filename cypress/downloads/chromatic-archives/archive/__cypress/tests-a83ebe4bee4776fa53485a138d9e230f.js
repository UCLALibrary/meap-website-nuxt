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
/*!************************************!*\
  !*** ./cypress/e2e/homepage.cy.js ***!
  \************************************/


var _viewports = __webpack_require__(/*! ../support/viewports */ "./cypress/support/viewports.js");
const provider = Cypress.env('VISUAL_PROVIDER');
const isChromatic = provider === 'chromatic';
const isPercy = provider === 'percy';
function runHomepageTests({
  withSnapshot = false,
  label = 'Desktop'
} = {}) {
  it('Visit the Homepage', () => {
    cy.visit('/');

    // UCLA brand
    cy.get('.site-brand-bar').should('be.visible');
    cy.get('.visually-hidden').should('contain', 'UCLA Home');
    cy.get('.ucla-logo').parent().should('have.attr', 'href', 'https://www.ucla.edu');
    cy.get('.svg__logo-library').parent().should('have.attr', 'href', 'https://www.library.ucla.edu');
    cy.get('a.logo-ucla').should('have.attr', 'href', 'https://www.library.ucla.edu');
    if (label === 'Desktop') {
      // NavPrimary
      cy.get('.nav-primary').then(elem => {
        if (elem[0].textContent.startsWith('Modern Endangered Archives Program Get help with')) {
          cy.get('.nav-primary').should('contain', 'Who we are').and('contain', 'For applicants').and('contain', 'Projects');
        }
      });
    }
    cy.contains('a.smart-link', 'Browse Collections').should('have.attr', 'target', '_blank');
    cy.get('.masthead-secondary').should('contain', 'Modern Endangered Archives Program');
    cy.get('h2.section-title').should('contain', 'Program Resources');
    cy.get('h2.section-title').should('contain', 'News');
    if (withSnapshot) {
      cy.visualSnapshot('HomePage');
    }
  });
}
if (isChromatic) {
  _viewports.viewports.forEach(({
    label,
    viewportWidth,
    viewportHeight
  }) => {
    describe(`Website Homepage - ${label}`, {
      viewportWidth,
      viewportHeight
    }, () => {
      runHomepageTests({
        withSnapshot: true,
        label
      });
    });
  });
} else if (isPercy) {
  describe('Website Homepage', {
    viewportWidth: 1200,
    viewportHeight: 1200
  }, () => {
    runHomepageTests({
      withSnapshot: true
    });
  });
} else {
  describe('Website Homepage', {
    viewportWidth: 1200,
    viewportHeight: 1200
  }, () => {
    runHomepageTests({
      withSnapshot: false
    });
  });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuY3kuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLFNBQVMsR0FBQUMsaUJBQUEsR0FBRyxDQUN2QjtFQUFFQyxLQUFLLEVBQUUsUUFBUTtFQUFFQyxhQUFhLEVBQUUsR0FBRztFQUFFQyxjQUFjLEVBQUU7QUFBSSxDQUFDLEVBQzVEO0VBQUVGLEtBQUssRUFBRSxRQUFRO0VBQUVDLGFBQWEsRUFBRSxHQUFHO0VBQUVDLGNBQWMsRUFBRTtBQUFLLENBQUMsRUFDN0Q7RUFBRUYsS0FBSyxFQUFFLFNBQVM7RUFBRUMsYUFBYSxFQUFFLElBQUk7RUFBRUMsY0FBYyxFQUFFO0FBQUksQ0FBQyxDQUMvRDs7Ozs7O1VDSkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7QUN0QkEsSUFBQUMsVUFBQSxHQUFBQyxtQkFBQTtBQUVBLE1BQU1DLFFBQVEsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7QUFDL0MsTUFBTUMsV0FBVyxHQUFHSCxRQUFRLEtBQUssV0FBVztBQUM1QyxNQUFNSSxPQUFPLEdBQUdKLFFBQVEsS0FBSyxPQUFPO0FBRXBDLFNBQVNLLGdCQUFnQkEsQ0FBQztFQUFFQyxZQUFZLEdBQUcsS0FBSztFQUFFWCxLQUFLLEdBQUc7QUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7RUFDM0VZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxNQUFNO0lBQzVCQyxFQUFFLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUM7O0lBRWI7SUFDQUQsRUFBRSxDQUFDRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUM5Q0gsRUFBRSxDQUFDRSxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUM7SUFDekRILEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUNqQkUsTUFBTSxDQUFDLENBQUMsQ0FDUkQsTUFBTSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsc0JBQXNCLENBQUM7SUFDdERILEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQ3pCRSxNQUFNLENBQUMsQ0FBQyxDQUNSRCxNQUFNLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSw4QkFBOEIsQ0FBQztJQUU5REgsRUFBRSxDQUFDRSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQ2xCQyxNQUFNLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSw4QkFBOEIsQ0FBQztJQUMzRCxJQUFJaEIsS0FBSyxLQUFLLFNBQVMsRUFBRTtNQUN2QjtNQUNEYSxFQUFFLENBQUNFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQ0csSUFBSSxDQUFFQyxJQUFJLElBQUs7UUFDcEMsSUFBSUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUNDLFVBQVUsQ0FBQyxrREFBa0QsQ0FBQyxFQUFFO1VBQ3RGUixFQUFFLENBQUNFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FDbkRNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FDaENBLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO1FBQy9CO01BQ0YsQ0FBQyxDQUFDO0lBQ0g7SUFHSFQsRUFBRSxDQUFDVSxRQUFRLENBQUMsY0FBYyxFQUFFLG9CQUFvQixDQUFDLENBQUNQLE1BQU0sQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztJQUV6RkgsRUFBRSxDQUFDRSxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQ0MsTUFBTSxDQUNsQyxTQUFTLEVBQ1Qsb0NBQ0YsQ0FBQztJQUVESCxFQUFFLENBQUNFLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDQyxNQUFNLENBQy9CLFNBQVMsRUFDVCxtQkFDRixDQUFDO0lBRURILEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUNDLE1BQU0sQ0FDL0IsU0FBUyxFQUNULE1BQ0YsQ0FBQztJQUVBLElBQUlMLFlBQVksRUFBRTtNQUNqQkUsRUFBRSxDQUFDVyxjQUFjLENBQUMsVUFBVSxDQUFDO0lBQy9CO0VBQ0YsQ0FBQyxDQUFDO0FBQ0o7QUFDQSxJQUFJaEIsV0FBVyxFQUFFO0VBQ2ZWLG9CQUFTLENBQUMyQixPQUFPLENBQUMsQ0FBQztJQUFFekIsS0FBSztJQUFFQyxhQUFhO0lBQUVDO0VBQWUsQ0FBQyxLQUFLO0lBQzlEd0IsUUFBUSxDQUFDLHNCQUFzQjFCLEtBQUssRUFBRSxFQUFFO01BQUVDLGFBQWE7TUFBRUM7SUFBZSxDQUFDLEVBQUUsTUFBTTtNQUMvRVEsZ0JBQWdCLENBQUM7UUFBRUMsWUFBWSxFQUFFLElBQUk7UUFBRVg7TUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQyxNQUFNLElBQUlTLE9BQU8sRUFBRTtFQUNsQmlCLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtJQUFFekIsYUFBYSxFQUFFLElBQUk7SUFBRUMsY0FBYyxFQUFFO0VBQUssQ0FBQyxFQUFFLE1BQU07SUFDaEZRLGdCQUFnQixDQUFDO01BQUVDLFlBQVksRUFBRTtJQUFLLENBQUMsQ0FBQztFQUMxQyxDQUFDLENBQUM7QUFDSixDQUFDLE1BQU07RUFDTGUsUUFBUSxDQUFDLGtCQUFrQixFQUFFO0lBQUV6QixhQUFhLEVBQUUsSUFBSTtJQUFFQyxjQUFjLEVBQUU7RUFBSyxDQUFDLEVBQUUsTUFBTTtJQUNoRlEsZ0JBQWdCLENBQUM7TUFBRUMsWUFBWSxFQUFFO0lBQU0sQ0FBQyxDQUFDO0VBQzNDLENBQUMsQ0FBQztBQUNKLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWFwLXdlYnNpdGUtbnV4dC8uL2N5cHJlc3Mvc3VwcG9ydC92aWV3cG9ydHMuanMiLCJ3ZWJwYWNrOi8vbWVhcC13ZWJzaXRlLW51eHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWVhcC13ZWJzaXRlLW51eHQvLi9jeXByZXNzL2UyZS9ob21lcGFnZS5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgdmlld3BvcnRzID0gW1xuICB7IGxhYmVsOiAnTW9iaWxlJywgdmlld3BvcnRXaWR0aDogMzc1LCB2aWV3cG9ydEhlaWdodDogNjY3IH0sXG4gIHsgbGFiZWw6ICdUYWJsZXQnLCB2aWV3cG9ydFdpZHRoOiA3NjgsIHZpZXdwb3J0SGVpZ2h0OiAxMDI0IH0sXG4gIHsgbGFiZWw6ICdEZXNrdG9wJywgdmlld3BvcnRXaWR0aDogMTI4MCwgdmlld3BvcnRIZWlnaHQ6IDgwMCB9LFxuXVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IHZpZXdwb3J0cyB9IGZyb20gJy4uL3N1cHBvcnQvdmlld3BvcnRzJ1xuXG5jb25zdCBwcm92aWRlciA9IEN5cHJlc3MuZW52KCdWSVNVQUxfUFJPVklERVInKVxuY29uc3QgaXNDaHJvbWF0aWMgPSBwcm92aWRlciA9PT0gJ2Nocm9tYXRpYydcbmNvbnN0IGlzUGVyY3kgPSBwcm92aWRlciA9PT0gJ3BlcmN5J1xuXG5mdW5jdGlvbiBydW5Ib21lcGFnZVRlc3RzKHsgd2l0aFNuYXBzaG90ID0gZmFsc2UsIGxhYmVsID0gJ0Rlc2t0b3AnIH0gPSB7fSkge1xuIGl0KCdWaXNpdCB0aGUgSG9tZXBhZ2UnLCAoKSA9PiB7XG4gICAgY3kudmlzaXQoJy8nKVxuXG4gICAgLy8gVUNMQSBicmFuZFxuICAgIGN5LmdldCgnLnNpdGUtYnJhbmQtYmFyJykuc2hvdWxkKCdiZS52aXNpYmxlJylcbiAgICBjeS5nZXQoJy52aXN1YWxseS1oaWRkZW4nKS5zaG91bGQoJ2NvbnRhaW4nLCAnVUNMQSBIb21lJylcbiAgICBjeS5nZXQoJy51Y2xhLWxvZ28nKVxuICAgICAgLnBhcmVudCgpXG4gICAgICAuc2hvdWxkKCdoYXZlLmF0dHInLCAnaHJlZicsICdodHRwczovL3d3dy51Y2xhLmVkdScpXG4gICAgY3kuZ2V0KCcuc3ZnX19sb2dvLWxpYnJhcnknKVxuICAgICAgLnBhcmVudCgpXG4gICAgICAuc2hvdWxkKCdoYXZlLmF0dHInLCAnaHJlZicsICdodHRwczovL3d3dy5saWJyYXJ5LnVjbGEuZWR1JylcblxuICAgIGN5LmdldCgnYS5sb2dvLXVjbGEnKVxuICAgICAgLnNob3VsZCgnaGF2ZS5hdHRyJywgJ2hyZWYnLCAnaHR0cHM6Ly93d3cubGlicmFyeS51Y2xhLmVkdScpXG4gICAgICAgaWYgKGxhYmVsID09PSAnRGVza3RvcCcpIHtcbiAgICAgICAgIC8vIE5hdlByaW1hcnlcbiAgICAgICAgY3kuZ2V0KCcubmF2LXByaW1hcnknKS50aGVuKChlbGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGVsZW1bMF0udGV4dENvbnRlbnQuc3RhcnRzV2l0aCgnTW9kZXJuIEVuZGFuZ2VyZWQgQXJjaGl2ZXMgUHJvZ3JhbSBHZXQgaGVscCB3aXRoJykpIHtcbiAgICAgICAgICAgIGN5LmdldCgnLm5hdi1wcmltYXJ5Jykuc2hvdWxkKCdjb250YWluJywgJ1dobyB3ZSBhcmUnKVxuICAgICAgICAgICAgICAuYW5kKCdjb250YWluJywgJ0ZvciBhcHBsaWNhbnRzJylcbiAgICAgICAgICAgICAgLmFuZCgnY29udGFpbicsICdQcm9qZWN0cycpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgIH1cblxuXG4gICAgY3kuY29udGFpbnMoJ2Euc21hcnQtbGluaycsICdCcm93c2UgQ29sbGVjdGlvbnMnKS5zaG91bGQoJ2hhdmUuYXR0cicsICd0YXJnZXQnLCAnX2JsYW5rJylcblxuICAgIGN5LmdldCgnLm1hc3RoZWFkLXNlY29uZGFyeScpLnNob3VsZChcbiAgICAgICdjb250YWluJyxcbiAgICAgICdNb2Rlcm4gRW5kYW5nZXJlZCBBcmNoaXZlcyBQcm9ncmFtJ1xuICAgIClcblxuICAgIGN5LmdldCgnaDIuc2VjdGlvbi10aXRsZScpLnNob3VsZChcbiAgICAgICdjb250YWluJyxcbiAgICAgICdQcm9ncmFtIFJlc291cmNlcydcbiAgICApXG5cbiAgICBjeS5nZXQoJ2gyLnNlY3Rpb24tdGl0bGUnKS5zaG91bGQoXG4gICAgICAnY29udGFpbicsXG4gICAgICAnTmV3cydcbiAgICApXG5cbiAgICAgaWYgKHdpdGhTbmFwc2hvdCkge1xuICAgICAgY3kudmlzdWFsU25hcHNob3QoJ0hvbWVQYWdlJylcbiAgICB9XG4gIH0pXG59XG5pZiAoaXNDaHJvbWF0aWMpIHtcbiAgdmlld3BvcnRzLmZvckVhY2goKHsgbGFiZWwsIHZpZXdwb3J0V2lkdGgsIHZpZXdwb3J0SGVpZ2h0IH0pID0+IHtcbiAgICBkZXNjcmliZShgV2Vic2l0ZSBIb21lcGFnZSAtICR7bGFiZWx9YCwgeyB2aWV3cG9ydFdpZHRoLCB2aWV3cG9ydEhlaWdodCB9LCAoKSA9PiB7XG4gICAgICBydW5Ib21lcGFnZVRlc3RzKHsgd2l0aFNuYXBzaG90OiB0cnVlLCBsYWJlbCB9KVxuICAgIH0pXG4gIH0pXG59IGVsc2UgaWYgKGlzUGVyY3kpIHtcbiAgZGVzY3JpYmUoJ1dlYnNpdGUgSG9tZXBhZ2UnLCB7IHZpZXdwb3J0V2lkdGg6IDEyMDAsIHZpZXdwb3J0SGVpZ2h0OiAxMjAwIH0sICgpID0+IHtcbiAgICBydW5Ib21lcGFnZVRlc3RzKHsgd2l0aFNuYXBzaG90OiB0cnVlIH0pXG4gIH0pXG59IGVsc2Uge1xuICBkZXNjcmliZSgnV2Vic2l0ZSBIb21lcGFnZScsIHsgdmlld3BvcnRXaWR0aDogMTIwMCwgdmlld3BvcnRIZWlnaHQ6IDEyMDAgfSwgKCkgPT4ge1xuICAgIHJ1bkhvbWVwYWdlVGVzdHMoeyB3aXRoU25hcHNob3Q6IGZhbHNlIH0pXG4gIH0pXG59XG4iXSwibmFtZXMiOlsidmlld3BvcnRzIiwiZXhwb3J0cyIsImxhYmVsIiwidmlld3BvcnRXaWR0aCIsInZpZXdwb3J0SGVpZ2h0IiwiX3ZpZXdwb3J0cyIsInJlcXVpcmUiLCJwcm92aWRlciIsIkN5cHJlc3MiLCJlbnYiLCJpc0Nocm9tYXRpYyIsImlzUGVyY3kiLCJydW5Ib21lcGFnZVRlc3RzIiwid2l0aFNuYXBzaG90IiwiaXQiLCJjeSIsInZpc2l0IiwiZ2V0Iiwic2hvdWxkIiwicGFyZW50IiwidGhlbiIsImVsZW0iLCJ0ZXh0Q29udGVudCIsInN0YXJ0c1dpdGgiLCJhbmQiLCJjb250YWlucyIsInZpc3VhbFNuYXBzaG90IiwiZm9yRWFjaCIsImRlc2NyaWJlIl0sInNvdXJjZVJvb3QiOiIifQ==