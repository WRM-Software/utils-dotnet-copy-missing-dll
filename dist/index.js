/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 667:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const fs_1 = __importDefault(__nccwpck_require__(747));
const util_1 = __nccwpck_require__(669);
const readFile = (0, util_1.promisify)(fs_1.default.readFile);
const writeFile = (0, util_1.promisify)(fs_1.default.writeFile);
const defaultUnicode = 'utf8';
const tmpDir = 'tmp';
// Mock mode is not affect with remote repo.
let MOCK_MODE = false;
const firstArg = process.argv[2];
if (firstArg === 'mock') {
    MOCK_MODE = true;
}
console.log(`Running migrate-gitlab-2-github [mode] MOCK_MODE: ${MOCK_MODE}`);
async function main() {
}
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw0Q0FBK0I7QUFDL0IsK0JBQWlDO0FBR2pDLE1BQU0sUUFBUSxHQUFHLElBQUEsZ0JBQVMsRUFBQyxZQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEMsTUFBTSxTQUFTLEdBQUcsSUFBQSxnQkFBUyxFQUFDLFlBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUUxQyxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUM7QUFDOUIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBRXJCLDRDQUE0QztBQUM1QyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7QUFDdEIsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQyxJQUFHLFFBQVEsS0FBSyxNQUFNLEVBQUM7SUFDckIsU0FBUyxHQUFHLElBQUksQ0FBQztDQUNsQjtBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMscURBQXFELFNBQVMsRUFBRSxDQUFDLENBQUM7QUFFOUUsS0FBSyxVQUFVLElBQUk7QUFFbkIsQ0FBQztBQUVELElBQUksRUFBRSxDQUFDIn0=

/***/ }),

/***/ 747:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 669:
/***/ ((module) => {

module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(667);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;