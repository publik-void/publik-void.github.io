"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateoverview_presentation"]("main",{

/***/ "./src/trajectory-plot-0.js":
/*!**********************************!*\
  !*** ./src/trajectory-plot-0.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nconsole.log(\"asd1\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var container = document.getElementById(\"trajectory-plot-0\");\n\n  // console.log(\"asd2\");\n  console.log(container);\n  var scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n\n  // scene.background = new THREE.Color(0x00ffffff);\n\n  var camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);\n  var renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n    alpha: true\n  });\n  renderer.setSize(container.clientWidth, container.clientHeight);\n  renderer.setAnimationLoop(animate);\n  container.appendChild(renderer.domElement);\n  var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1, 1, 1);\n  var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n    color: 0xffff00\n  });\n  var cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);\n  scene.add(cube);\n  camera.position.z = 5;\n  function animate() {\n    cube.rotation.x += 0.01;\n    cube.rotation.y += 0.01;\n    renderer.render(scene, camera);\n  }\n});\n\n//# sourceURL=webpack://overview-presentation/./src/trajectory-plot-0.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e501ca44fd853384d20e")
/******/ })();
/******/ 
/******/ }
);