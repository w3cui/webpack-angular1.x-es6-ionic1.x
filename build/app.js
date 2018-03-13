/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _angular$module;

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(3);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _angularUiBootstrap = __webpack_require__(4);

	var _angularUiBootstrap2 = _interopRequireDefault(_angularUiBootstrap);

	__webpack_require__(5);

	var _Routes = __webpack_require__(15);

	var _Routes2 = _interopRequireDefault(_Routes);

	var _Directive = __webpack_require__(18);

	var _Directive2 = _interopRequireDefault(_Directive);

	var _Module = __webpack_require__(32);

	var _Module2 = _interopRequireDefault(_Module);

	var _Config = __webpack_require__(39);

	var _Config2 = _interopRequireDefault(_Config);

	var _Redux = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	// import angularDrag from 'angular-dragdrop';


	var app = (_angular$module = _angular2.default.module('myApp', [_angularUiRouter2.default, _angularUiBootstrap2.default])).provider.apply(_angular$module, _toConsumableArray(_Routes2.default.provider)).config(_Routes2.default.config).run(_Routes2.default.run);

	// 记录app
	(0, _Redux.getRedux)(app, { type: "APP" });

	// 注入 directive 
	(0, _Directive2.default)(app);

	// 注入 module
	(0, _Module2.default)(app);

	// 注入统一配置
	(0, _Config.Constant)(app);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = window.angular;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = 'ui.router';

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = 'ui.bootstrap';

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../node_modules/_less-loader@2.2.3@less-loader/index.js!./main.less", function() {
				var newContent = require("!!../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../node_modules/_less-loader@2.2.3@less-loader/index.js!./main.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/* Include this file in your html if you are using the CSP mode. */\n/* 百度上传 */\n.modular-upload-tab {\n  padding: 0;\n  list-style-type: none;\n  margin: 0;\n  border-bottom: 3px solid #e8e8e8;\n  height: 54px;\n}\n.modular-upload-tab li {\n  padding: 0;\n  list-style-type: none;\n  margin: 0;\n  border-bottom: 3px solid #e8e8e8;\n  height: 54px;\n  line-height: 54px;\n  float: left;\n}\n.modular-upload-tab li a {\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  color: #333;\n  padding: 0 20px;\n}\n.modular-upload-tab li.active {\n  border-bottom: 3px solid #3b9bf5;\n}\n.modular-upload-tab li.active a {\n  color: #3b9bf5;\n}\n#uploader .modular-upload-bottom .btns .webuploader-pick,\n#uploader .modular-upload-bottom .btns .uploadBtn,\n#uploader .modular-upload-bottom .btns .uploadBtn.state-uploading,\n#uploader .modular-upload-bottom .btns .uploadBtn.state-paused {\n  float: none;\n  display: inline-block;\n  padding: 10px 20px;\n}\n#uploader .modular-upload-bottom .btns {\n  text-align: center;\n  padding: 10px 0;\n}\n.modular-upload-list {\n  padding: 10px;\n  background: #f1f1f1;\n  position: relative;\n}\n.modular-upload-list label {\n  vertical-align: top;\n  color: #333;\n  font-size: 12px;\n}\n.modular-upload-list p.img {\n  display: inline-block;\n  width: 62px;\n  height: 46px;\n  border: 2px dotted #bcbcbc;\n  margin-left: 10px;\n  vertical-align: top;\n  box-sizing: border-box;\n  position: relative;\n  background: #dfdfdf;\n}\n#container {\n  color: #838383;\n  font-size: 12px;\n}\n#uploader .queueList {\n  margin: 20px;\n  border: 3px dashed #e6e6e6;\n}\n#uploader .queueList.filled {\n  padding: 17px;\n  margin: 0;\n  border: 3px dashed transparent;\n  min-height: 350px;\n  background: #e4e5e6;\n}\n#uploader .queueList.webuploader-dnd-over {\n  border: 3px dashed #999999;\n}\n#uploader p {\n  margin: 0;\n}\n.element-invisible {\n  position: absolute !important;\n  clip: rect(1px 1px 1px 1px);\n  /* IE6, IE7 */\n  clip: rect(1px, 1px, 1px, 1px);\n}\n#uploader .placeholder {\n  min-height: 350px;\n  padding-top: 178px;\n  text-align: center;\n  background: url(" + __webpack_require__(8) + ") center 93px no-repeat;\n  color: #cccccc;\n  font-size: 18px;\n  position: relative;\n}\n#uploader .placeholder .webuploader-pick {\n  font-size: 18px;\n  background: #00b7ee;\n  border-radius: 3px;\n  line-height: 44px;\n  padding: 0 30px;\n  *width: 120px;\n  color: #fff;\n  display: inline-block;\n  margin: 0 auto 20px auto;\n  cursor: pointer;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n}\n#uploader .placeholder .webuploader-pick-hover {\n  background: #00a2d4;\n}\n#uploader .placeholder .flashTip {\n  color: #666666;\n  font-size: 12px;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  bottom: 20px;\n}\n#uploader .placeholder .flashTip a {\n  color: #0785d1;\n  text-decoration: none;\n}\n#uploader .placeholder .flashTip a:hover {\n  text-decoration: underline;\n}\n#uploader .filelist {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n#uploader .filelist:after {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  clear: both;\n}\n#uploader .filelist li {\n  width: 110px;\n  height: 110px;\n  background: url(" + __webpack_require__(9) + ") no-repeat;\n  text-align: center;\n  margin: 0 8px 20px 0;\n  position: relative;\n  display: inline;\n  float: left;\n  overflow: hidden;\n  font-size: 12px;\n}\n#uploader .filelist li p.log {\n  position: relative;\n  top: -45px;\n}\n#uploader .filelist li p.title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  top: 5px;\n  text-indent: 5px;\n  text-align: left;\n}\n#uploader .filelist li p.progress {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  height: 8px;\n  overflow: hidden;\n  z-index: 50;\n  margin: 0;\n  border-radius: 0;\n  background: none;\n  -webkit-box-shadow: 0 0 0;\n}\n#uploader .filelist li p.progress span {\n  display: none;\n  overflow: hidden;\n  width: 0;\n  height: 100%;\n  background: #1483d8 url(" + __webpack_require__(10) + ") repeat-x;\n  -webit-transition: width 200ms linear;\n  -moz-transition: width 200ms linear;\n  -o-transition: width 200ms linear;\n  -ms-transition: width 200ms linear;\n  transition: width 200ms linear;\n  -webkit-animation: progressmove 2s linear infinite;\n  -moz-animation: progressmove 2s linear infinite;\n  -o-animation: progressmove 2s linear infinite;\n  -ms-animation: progressmove 2s linear infinite;\n  animation: progressmove 2s linear infinite;\n  -webkit-transform: translateZ(0);\n}\n@-webkit-keyframes progressmove {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: 17px 0;\n  }\n}\n@-moz-keyframes progressmove {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: 17px 0;\n  }\n}\n@keyframes progressmove {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: 17px 0;\n  }\n}\n#uploader .filelist li p.imgWrap {\n  position: relative;\n  z-index: 2;\n  line-height: 110px;\n  vertical-align: middle;\n  overflow: hidden;\n  width: 110px;\n  height: 110px;\n  -webkit-transform-origin: 50% 50%;\n  -moz-transform-origin: 50% 50%;\n  -o-transform-origin: 50% 50%;\n  -ms-transform-origin: 50% 50%;\n  transform-origin: 50% 50%;\n  -webit-transition: 200ms ease-out;\n  -moz-transition: 200ms ease-out;\n  -o-transition: 200ms ease-out;\n  -ms-transition: 200ms ease-out;\n  transition: 200ms ease-out;\n}\n#uploader .filelist li img {\n  width: 100%;\n}\n#uploader .filelist li p.error {\n  background: #f43838;\n  color: #fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 28px;\n  line-height: 28px;\n  width: 100%;\n  z-index: 100;\n}\n#uploader .filelist li .success {\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 40px;\n  width: 100%;\n  z-index: 200;\n  background: url(" + __webpack_require__(11) + ") no-repeat right bottom;\n}\n#uploader .filelist div.file-panel {\n  position: absolute;\n  height: 0;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: 300;\n}\n#uploader .filelist div.file-panel span {\n  width: 24px;\n  height: 24px;\n  display: inline;\n  float: right;\n  text-indent: -9999px;\n  overflow: hidden;\n  background: url(" + __webpack_require__(12) + ") no-repeat;\n  margin: 5px 1px 1px;\n  cursor: pointer;\n}\n#uploader .filelist div.file-panel span.rotateLeft {\n  background-position: 0 -24px;\n}\n#uploader .filelist div.file-panel span.rotateLeft:hover {\n  background-position: 0 0;\n}\n#uploader .filelist div.file-panel span.rotateRight {\n  background-position: -24px -24px;\n}\n#uploader .filelist div.file-panel span.rotateRight:hover {\n  background-position: -24px 0;\n}\n#uploader .filelist div.file-panel span.cancel {\n  background-position: -48px -24px;\n}\n#uploader .filelist div.file-panel span.cancel:hover {\n  background-position: -48px 0;\n}\n#uploader .statusBar {\n  height: 53px;\n  border-bottom: 1px solid #dadada;\n  padding: 0 20px;\n  line-height: 53px;\n  vertical-align: middle;\n  position: relative;\n}\n#uploader .statusBar .progress {\n  border: 1px solid #1483d8;\n  width: 198px;\n  background: #fff;\n  height: 18px;\n  display: inline-block;\n  text-align: center;\n  line-height: 20px;\n  color: #6dbfff;\n  position: relative;\n  margin: 0 10px 0 0;\n}\n#uploader .statusBar .progress span.percentage {\n  width: 0;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: #1483d8;\n  position: absolute;\n}\n#uploader .statusBar .progress span.text {\n  position: relative;\n  z-index: 10;\n}\n#uploader .statusBar .info {\n  display: inline-block;\n  font-size: 14px;\n  color: #666666;\n}\n#uploader .statusBar .btns {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  line-height: 30px;\n}\n#filePicker2 {\n  display: inline-block;\n  float: left;\n}\n#uploader .btns .webuploader-pick,\n#uploader .btns .uploadBtn,\n#uploader .btns .uploadBtn.state-uploading,\n#uploader .btns .uploadBtn.state-paused {\n  background: #ffffff;\n  border: 1px solid #cfcfcf;\n  color: #565656;\n  padding: 0 18px;\n  display: inline-block;\n  border-radius: 3px;\n  margin-left: 10px;\n  cursor: pointer;\n  font-size: 14px;\n  float: left;\n}\n#uploader .btns .webuploader-pick-hover,\n#uploader .btns .uploadBtn:hover,\n#uploader .btns .uploadBtn.state-uploading:hover,\n#uploader .btns .uploadBtn.state-paused:hover {\n  background: #f0f0f0;\n}\n#uploader .btns .uploadBtn {\n  background: #00b7ee;\n  color: #fff;\n  border-color: transparent;\n}\n#uploader .btns .uploadBtn:hover {\n  background: #00a2d4;\n}\n#uploader .btns .uploadBtn.disabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n.modular-edit {\n  position: relative;\n  overflow: hidden;\n}\n.modular-edit > div > div {\n  transition: all 400ms ease-out 0s;\n  -o-transition: all 400ms ease-out 0s;\n  -moz-transition: all 400ms ease-out 0s;\n  -webkit-transition: all 400ms ease-out 0s;\n  transform-origin: center;\n}\n.modular-edit .mar-pad {\n  padding: 0;\n  list-style-type: none;\n}\n.modular-edit .modular-type-list {\n  padding: 0;\n  list-style-type: none;\n  display: block;\n  background: #fff;\n}\n.modular-edit .modular-type-list li {\n  background: #fff;\n  text-align: center;\n  border: 1px solid #f3f3f3;\n  padding-bottom: 15px;\n  cursor: move;\n}\n.modular-edit .modular-type-list li .modular-icon {\n  display: block;\n  line-height: 50px;\n  height: 50px;\n  text-align: center;\n  font-size: 18px;\n  color: #999;\n}\n.modular-edit .modular-center {\n  padding: 80px 0 80px 0;\n  position: relative;\n}\n.modular-edit .modular-center .modular-center-bg {\n  background: url(" + __webpack_require__(13) + ") #eee;\n  box-shadow: rgba(0, 0, 0, 0.4) 0 0 30px inset;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.modular-edit .modular-center .modular-phone {\n  width: 375px;\n  height: 667px;\n  background: #fff;\n  margin: auto;\n  position: relative;\n  z-index: 5;\n  overflow: hidden;\n  overflow-y: auto;\n}\n.modular-edit .modular-center .modular-conentlist {\n  border: solid 1px #fff;\n  background: #fff;\n  cursor: move;\n  z-index: 5;\n  position: relative;\n}\n.modular-edit .modular-center .modular-conentlist .modular-remove {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 15px;\n  height: 15px;\n  line-height: 15px;\n  text-align: center;\n  cursor: pointer;\n  font-size: 12px;\n  font-style: normal;\n  background: #00adff;\n  color: #fff;\n}\n.modular-edit .modular-center .modular-conentlist[ng-drop].drag-enter {\n  content: \"\";\n  background: #f5f5f5;\n  display: block;\n  border: 1px dotted #0099DA;\n  z-index: 3;\n}\n.modular-edit .modular-center .modular-conentlist[ng-drop].drag-move {\n  z-index: 10;\n  background: #fff;\n  opacity: .8;\n}\n.modular-edit .modular-center .modular-conentlist.active {\n  border: solid 1px #00adff;\n  box-shadow: 0px 0px 2px #00adff;\n  z-index: 6;\n}\n.modular_radio {\n  width: 18px;\n  height: 18px;\n  overflow: hidden;\n  display: inline-block;\n  border: solid 1px #ddd;\n  background: #fff;\n  position: relative;\n  z-index: 0;\n  cursor: pointer;\n  border-radius: 50px;\n}\n.modular_radio:hover,\n.modular_radio.checked {\n  border: solid 1px #1abc9c;\n}\n.modular_radio.checked:before {\n  content: \"\";\n  border-radius: 50px;\n  overflow: hidden;\n  width: 6px;\n  height: 6px;\n  background: #1abc9c;\n  display: inline-block;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 5;\n  margin: -3px 0 0 -3px;\n}\n.modular-form-tab {\n  padding: 0;\n  list-style-type: none;\n}\n.modular-form-tab li {\n  padding: 0;\n}\n.modular-form-tab li a {\n  padding: 0;\n  color: #666;\n  border-top: solid 2px #f5f5f5;\n  background: #f5f5f5;\n  list-style-type: none;\n  margin: 0;\n  line-height: 40px;\n  text-align: center;\n  height: 38px;\n  display: block;\n}\n.modular-form-tab li a:hover {\n  background: #f9f9f9;\n  color: #333;\n}\n.modular-form-tab li.active a,\n.modular-form-tab li.active a:hover {\n  background: #fff;\n  color: #333;\n  border-top: solid 2px #337ab7;\n}\n", ""]);

	// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./style/images/6b00566e.image.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./style/images/8ddad23c.bg.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./style/images/46732e76.progress.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./style/images/b80425bb.success.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./style/images/c9ceb83c.icons.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./style/images/d345676e.eidt-cent-bg.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _homeGrid = __webpack_require__(16);

	var _homeGrid2 = _interopRequireDefault(_homeGrid);

	var _Redux = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /*
	                                                                                                                                                                                                     * 路由配置
	                                                                                                                                                                                                     */


	var state = [['home', {
		url: '/',
		template: _homeGrid2.default,
		controller: 'module.home.controler'
	}]];

	// 通用路由配置
	exports.default = {

		config: ['$stateProvider', '$urlRouterProvider', 'routerProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, routerProvider, $locationProvider) {

			state.forEach(function (value) {
				$stateProvider.state.apply($stateProvider, _toConsumableArray(value));
			});
			// $locationProvider.html5Mode(true);
			$urlRouterProvider.otherwise('/');
		}],

		run: function run(router) {
			router.setUpRoutes();
		},

		provider: ['router', function ($stateProvider) {
			this.$get = function ($http, $state) {
				return {
					setUpRoutes: function setUpRoutes() {
						(0, _Redux.readRedux)({
							type: "ROUTES"
						}).forEach(function (value) {
							console.log(value);
							$stateProvider.state.apply($stateProvider, _toConsumableArray(value));
						});
					}
				};
			};
			return this;
		}]
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = "<modular-eidt-type \r\n\t\t\t\tdata-id=\"15\"\r\n\t\t\t\tdata-ng-if=\"modularData\" \r\n\t\t\t\tdata-item=\"modularData\" \r\n\t\t\t></modular-eidt-type>";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/*
	 * @name:tql
	 * 共享数据存储处理
	 */

	// import * as _ from 'lodash';

	var reduxScope = {};

	/*
	 * 存储数据
	 * @scope => 数据存储
	 * @action => 参数
	 */
	var getRedux = function getRedux(scope, action) {
	  reduxScope[action.type] = reduxScope[action.type] || [];
	  reduxScope[action.type] = reduxScope[action.type].length != 0 ? [].concat(_toConsumableArray(reduxScope[action.type]), _toConsumableArray(scope)) : scope;
	  return reduxScope;
	};

	/*
	 * 读取数据
	 * @action => 参数
	 */
	var readRedux = function readRedux(action) {
	  return reduxScope[action.type];
	};

	/*
	 * 消耗数据
	 * @action => 参数
	 */
	var removeRedux = function removeRedux(action) {
	  _.remove(reduxScope, function (n) {
	    return n.type == action.type;
	  });
	  return reduxScope;
	};

	/*
	 * 消耗数据
	 * @action => 回调
	 * @success => 监听回调
	 */
	var watchRedux = function watchRedux(action, success) {
	  setInterval(function () {}, 1000);
	  return reduxScope;
	};

	exports.getRedux = getRedux;
	exports.readRedux = readRedux;
	exports.removeRedux = removeRedux;
	exports.watchRedux = watchRedux;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _modular = __webpack_require__(19);

	var _modular2 = _interopRequireDefault(_modular);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import Dir2 from './Dir2/index';
	module.exports = function (lwj) {
	    (0, _modular2.default)();
	    return lwj //.directive(...modularEidtType).directive(...modularEidtForm)
	    // @https://github.com/w3cui/ngDraggable
	    .service('ngDraggable', [function () {

	        var scope = this;
	        scope.inputEvent = function (event) {
	            if (angular.isDefined(event.touches)) {
	                return event.touches[0];
	            }
	            //Checking both is not redundent. If only check if touches isDefined, angularjs isDefnied will return error and stop the remaining scripty if event.originalEvent is not defined.
	            else if (angular.isDefined(event.originalEvent) && angular.isDefined(event.originalEvent.touches)) {
	                    return event.originalEvent.touches[0];
	                }
	            return event;
	        };

	        scope.touchTimeout = 100;
	    }]).directive('myBlur', [function () {
	        return {
	            restrict: 'A',
	            link: function link(scope, element, attr) {
	                element.bind('blur', function () {
	                    //apply scope (attributes)
	                    scope.$apply(attr.myBlur) || false;
	                    //return scope value for focusing to false
	                    //scope.$eval(attr.myFocus + '=false');
	                });
	            }
	        };
	    }]).directive('ngDrag', ['$rootScope', '$parse', '$document', '$window', 'ngDraggable', function ($rootScope, $parse, $document, $window, ngDraggable) {
	        return {
	            restrict: 'A',
	            link: function link(scope, element, attrs) {
	                scope.value = attrs.ngDrag;
	                var offset,
	                    _centerAnchor = false,
	                    _mx,
	                    _my,
	                    _tx,
	                    _ty,
	                    _mrx,
	                    _mry;
	                var _hasTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;
	                var _pressEvents = 'touchstart mousedown';
	                var _moveEvents = 'touchmove mousemove';
	                var _releaseEvents = 'touchend mouseup';
	                var _dragHandle;

	                // to identify the element in order to prevent getting superflous events when a single element has both drag and drop directives on it.
	                var _myid = scope.$id;
	                var _data = null;

	                var _dragOffset = null;

	                var _dragEnabled = false;

	                var _pressTimer = null;

	                var onDragStartCallback = $parse(attrs.ngDragStart) || null;
	                var onDragStopCallback = $parse(attrs.ngDragStop) || null;
	                var onDragSuccessCallback = $parse(attrs.ngDragSuccess) || null;
	                var allowTransform = angular.isDefined(attrs.allowTransform) ? scope.$eval(attrs.allowTransform) : true;

	                var getDragData = $parse(attrs.ngDragData);

	                // deregistration function for mouse move events in $rootScope triggered by jqLite trigger handler
	                var _deregisterRootMoveListener = angular.noop;

	                var initialize = function initialize() {
	                    element.attr('draggable', 'false'); // prevent native drag
	                    // check to see if drag handle(s) was specified
	                    // if querySelectorAll is available, we use this instead of find
	                    // as JQLite find is limited to tagnames
	                    if (element[0].querySelectorAll) {
	                        var dragHandles = angular.element(element[0].querySelectorAll('[ng-drag-handle]'));
	                    } else {
	                        var dragHandles = element.find('[ng-drag-handle]');
	                    }
	                    if (dragHandles.length) {
	                        _dragHandle = dragHandles;
	                    }
	                    toggleListeners(true);
	                };

	                var toggleListeners = function toggleListeners(enable) {
	                    if (!enable) return;
	                    // add listeners.

	                    scope.$on('$destroy', onDestroy);
	                    scope.$watch(attrs.ngDrag, onEnableChange);
	                    scope.$watch(attrs.ngCenterAnchor, onCenterAnchor);
	                    // wire up touch events
	                    if (_dragHandle) {
	                        // handle(s) specified, use those to initiate drag
	                        _dragHandle.on(_pressEvents, onpress);
	                    } else {
	                        // no handle(s) specified, use the element as the handle
	                        element.on(_pressEvents, onpress);
	                    }
	                    // if(! _hasTouch && element[0].nodeName.toLowerCase() == "img"){
	                    if (element[0].nodeName.toLowerCase() == "img") {
	                        element.on('mousedown', function () {
	                            return false;
	                        }); // prevent native drag for images
	                    }
	                };
	                var onDestroy = function onDestroy(enable) {
	                    toggleListeners(false);
	                };
	                var onEnableChange = function onEnableChange(newVal, oldVal) {
	                    _dragEnabled = newVal;
	                };
	                var onCenterAnchor = function onCenterAnchor(newVal, oldVal) {
	                    if (angular.isDefined(newVal)) _centerAnchor = newVal || 'true';
	                };

	                var isClickableElement = function isClickableElement(evt) {
	                    return angular.isDefined(angular.element(evt.target).attr("ng-cancel-drag"));
	                };
	                /*
	                 * When the element is clicked start the drag behaviour
	                 * On touch devices as a small delay so as not to prevent native window scrolling
	                 */
	                var onpress = function onpress(evt) {
	                    // console.log("110"+" onpress: "+Math.random()+" "+ evt.type);
	                    if (!_dragEnabled) return;

	                    if (isClickableElement(evt)) {
	                        return;
	                    }

	                    if (evt.type == "mousedown" && evt.button != 0) {
	                        // Do not start dragging on right-click
	                        return;
	                    }

	                    var useTouch = evt.type === 'touchstart' ? true : false;

	                    if (useTouch) {
	                        cancelPress();
	                        _pressTimer = setTimeout(function () {
	                            cancelPress();
	                            onlongpress(evt);
	                            onmove(evt);
	                        }, ngDraggable.touchTimeout);
	                        $document.on(_moveEvents, cancelPress);
	                        $document.on(_releaseEvents, cancelPress);
	                    } else {
	                        onlongpress(evt);
	                    }
	                };

	                var cancelPress = function cancelPress() {
	                    clearTimeout(_pressTimer);
	                    $document.off(_moveEvents, cancelPress);
	                    $document.off(_releaseEvents, cancelPress);
	                };

	                var onlongpress = function onlongpress(evt) {
	                    if (!_dragEnabled) return;
	                    evt.preventDefault();

	                    offset = element[0].getBoundingClientRect();
	                    if (allowTransform) _dragOffset = offset;else {
	                        _dragOffset = { left: document.body.scrollLeft, top: document.body.scrollTop };
	                    }

	                    element.centerX = element[0].offsetWidth / 2;
	                    element.centerY = element[0].offsetHeight / 2;

	                    _mx = ngDraggable.inputEvent(evt).pageX; //ngDraggable.getEventProp(evt, 'pageX');
	                    _my = ngDraggable.inputEvent(evt).pageY; //ngDraggable.getEventProp(evt, 'pageY');
	                    _mrx = _mx - offset.left;
	                    _mry = _my - offset.top;
	                    if (_centerAnchor) {
	                        _tx = _mx - element.centerX - $window.pageXOffset;
	                        _ty = _my - element.centerY - $window.pageYOffset;
	                    } else {
	                        _tx = _mx - _mrx - $window.pageXOffset;
	                        _ty = _my - _mry - $window.pageYOffset;
	                    }

	                    $document.on(_moveEvents, onmove);
	                    $document.on(_releaseEvents, onrelease);
	                    // This event is used to receive manually triggered mouse move events
	                    // jqLite unfortunately only supports triggerHandler(...)
	                    // See http://api.jquery.com/triggerHandler/
	                    // _deregisterRootMoveListener = $rootScope.$on('draggable:_triggerHandlerMove', onmove);
	                    _deregisterRootMoveListener = $rootScope.$on('draggable:_triggerHandlerMove', function (event, origEvent) {
	                        onmove(origEvent);
	                    });
	                };

	                var onmove = function onmove(evt) {
	                    if (!_dragEnabled) return;
	                    evt.preventDefault();

	                    if (!element.hasClass('dragging')) {
	                        _data = getDragData(scope);
	                        element.addClass('dragging');
	                        $rootScope.$broadcast('draggable:start', { x: _mx, y: _my, tx: _tx, ty: _ty, event: evt, element: element, data: _data });

	                        if (onDragStartCallback) {
	                            scope.$apply(function () {
	                                onDragStartCallback(scope, { $data: _data, $event: evt });
	                            });
	                        }
	                    }

	                    _mx = ngDraggable.inputEvent(evt).pageX; //ngDraggable.getEventProp(evt, 'pageX');
	                    _my = ngDraggable.inputEvent(evt).pageY; //ngDraggable.getEventProp(evt, 'pageY');

	                    if (_centerAnchor) {
	                        _tx = _mx - element.centerX - _dragOffset.left;
	                        _ty = _my - element.centerY - _dragOffset.top;
	                    } else {
	                        _tx = _mx - _mrx - _dragOffset.left;
	                        _ty = _my - _mry - _dragOffset.top;
	                    }

	                    moveElement(_tx, _ty);

	                    $rootScope.$broadcast('draggable:move', { x: _mx, y: _my, tx: _tx, ty: _ty, event: evt, element: element, data: _data, uid: _myid, dragOffset: _dragOffset });
	                };

	                var onrelease = function onrelease(evt) {
	                    if (!_dragEnabled) return;
	                    evt.preventDefault();
	                    $rootScope.$broadcast('draggable:end', { x: _mx, y: _my, tx: _tx, ty: _ty, event: evt, element: element, data: _data, callback: onDragComplete, uid: _myid });
	                    element.removeClass('dragging');
	                    element.parent().find('.drag-enter').removeClass('drag-enter');
	                    reset();
	                    $document.off(_moveEvents, onmove);
	                    $document.off(_releaseEvents, onrelease);

	                    if (onDragStopCallback) {
	                        scope.$apply(function () {
	                            onDragStopCallback(scope, { $data: _data, $event: evt });
	                        });
	                    }

	                    _deregisterRootMoveListener();
	                };

	                var onDragComplete = function onDragComplete(evt) {

	                    if (!onDragSuccessCallback) return;

	                    scope.$apply(function () {
	                        onDragSuccessCallback(scope, { $data: _data, $event: evt });
	                    });
	                };

	                var reset = function reset() {
	                    if (allowTransform) element.css({ transform: '', 'z-index': '', '-webkit-transform': '', '-ms-transform': '' });else element.css({ 'position': '', top: '', left: '' });
	                };

	                var moveElement = function moveElement(x, y) {
	                    if (allowTransform) {
	                        element.css({
	                            transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ' + x + ', ' + y + ', 0, 1)',
	                            'z-index': 99999,
	                            '-webkit-transform': 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ' + x + ', ' + y + ', 0, 1)',
	                            '-ms-transform': 'matrix(1, 0, 0, 1, ' + x + ', ' + y + ')'
	                        });
	                    } else {
	                        element.css({ 'left': x + 'px', 'top': y + 'px', 'position': 'fixed' });
	                    }
	                };
	                initialize();
	            }
	        };
	    }]).directive('ngDrop', ['$parse', '$timeout', '$window', '$document', 'ngDraggable', function ($parse, $timeout, $window, $document, ngDraggable) {
	        return {
	            restrict: 'A',
	            link: function link(scope, element, attrs) {
	                scope.value = attrs.ngDrop;
	                scope.isTouching = false;

	                var _lastDropTouch = null;

	                var _myid = scope.$id;

	                var _dropEnabled = false;

	                var onDropCallback = $parse(attrs.ngDropSuccess); // || function(){};

	                var onDragStartCallback = $parse(attrs.ngDragStart);
	                var onDragStopCallback = $parse(attrs.ngDragStop);
	                var onDragMoveCallback = $parse(attrs.ngDragMove);

	                var initialize = function initialize() {
	                    toggleListeners(true);
	                };

	                var toggleListeners = function toggleListeners(enable) {
	                    // remove listeners

	                    if (!enable) return;
	                    // add listeners.
	                    scope.$watch(attrs.ngDrop, onEnableChange);
	                    scope.$on('$destroy', onDestroy);
	                    scope.$on('draggable:start', onDragStart);
	                    scope.$on('draggable:move', onDragMove);
	                    scope.$on('draggable:end', onDragEnd);
	                };

	                var onDestroy = function onDestroy(enable) {
	                    toggleListeners(false);
	                };
	                var onEnableChange = function onEnableChange(newVal, oldVal) {
	                    _dropEnabled = newVal;
	                };
	                var onDragStart = function onDragStart(evt, obj) {
	                    if (!_dropEnabled) return;
	                    isTouching(obj.x, obj.y, obj.element);

	                    if (attrs.ngDragStart) {
	                        $timeout(function () {
	                            onDragStartCallback(scope, { $data: obj.data, $event: obj });
	                        });
	                    }
	                };
	                var onDragMove = function onDragMove(evt, obj) {
	                    if (!_dropEnabled) return;
	                    isTouching(obj.x, obj.y, obj.element);

	                    if (attrs.ngDragMove) {
	                        $timeout(function () {
	                            onDragMoveCallback(scope, { $data: obj.data, $event: obj });
	                        });
	                    }
	                };

	                var onDragEnd = function onDragEnd(evt, obj) {

	                    // don't listen to drop events if this is the element being dragged
	                    // only update the styles and return
	                    if (!_dropEnabled || _myid === obj.uid) {
	                        updateDragStyles(false, obj.element);
	                        return;
	                    }
	                    if (isTouching(obj.x, obj.y, obj.element)) {
	                        // call the ngDraggable ngDragSuccess element callback
	                        if (obj.callback) {
	                            obj.callback(obj);
	                        }

	                        if (attrs.ngDropSuccess) {
	                            $timeout(function () {
	                                onDropCallback(scope, { $data: obj.data, $event: obj, $target: scope.$eval(scope.value) });
	                            });
	                        }
	                    }

	                    if (attrs.ngDragStop) {
	                        $timeout(function () {
	                            onDragStopCallback(scope, { $data: obj.data, $event: obj });
	                        });
	                    }

	                    updateDragStyles(false, obj.element);
	                };

	                var isTouching = function isTouching(mouseX, mouseY, dragElement) {
	                    var touching = hitTest(mouseX, mouseY);
	                    scope.isTouching = touching;
	                    if (touching) {
	                        _lastDropTouch = element;
	                    }
	                    updateDragStyles(touching, dragElement);
	                    return touching;
	                };

	                var updateDragStyles = function updateDragStyles(touching, dragElement) {
	                    if (touching) {
	                        element.addClass('drag-enter');
	                        dragElement.addClass('drag-over');
	                    } else if (_lastDropTouch == element) {
	                        _lastDropTouch = null;
	                        element.removeClass('drag-enter');
	                        dragElement.removeClass('drag-over');
	                    }
	                };

	                var hitTest = function hitTest(x, y) {
	                    var bounds = element[0].getBoundingClientRect(); // ngDraggable.getPrivOffset(element);
	                    x -= $document[0].body.scrollLeft + $document[0].documentElement.scrollLeft;
	                    y -= $document[0].body.scrollTop + $document[0].documentElement.scrollTop;
	                    return x >= bounds.left && x <= bounds.right && y <= bounds.bottom && y >= bounds.top;
	                };

	                initialize();
	            }
	        };
	    }]).directive('ngDragClone', ['$parse', '$timeout', 'ngDraggable', function ($parse, $timeout, ngDraggable) {
	        return {
	            restrict: 'A',
	            link: function link(scope, element, attrs) {
	                var img = null;
	                var _allowClone = true;
	                var _dragOffset = null;
	                scope.clonedData = {};
	                var initialize = function initialize() {

	                    img = element.find('img');
	                    element.attr('draggable', 'false');
	                    img.attr('draggable', 'false');
	                    reset();
	                    toggleListeners(true);
	                };

	                var toggleListeners = function toggleListeners(enable) {
	                    // remove listeners

	                    if (!enable) return;
	                    // add listeners.
	                    scope.$on('draggable:start', onDragStart);
	                    scope.$on('draggable:move', onDragMove);
	                    scope.$on('draggable:end', onDragEnd);
	                    preventContextMenu();
	                };
	                var preventContextMenu = function preventContextMenu() {
	                    //  element.off('mousedown touchstart touchmove touchend touchcancel', absorbEvent_);
	                    img.off('mousedown touchstart touchmove touchend touchcancel', absorbEvent_);
	                    //  element.on('mousedown touchstart touchmove touchend touchcancel', absorbEvent_);
	                    img.on('mousedown touchstart touchmove touchend touchcancel', absorbEvent_);
	                };
	                var onDragStart = function onDragStart(evt, obj, elm) {
	                    _allowClone = true;
	                    if (angular.isDefined(obj.data.allowClone)) {
	                        _allowClone = obj.data.allowClone;
	                    }
	                    if (_allowClone) {
	                        scope.$apply(function () {
	                            scope.clonedData = obj.data;
	                        });
	                        element.css('width', obj.element[0].offsetWidth);
	                        element.css('height', obj.element[0].offsetHeight);

	                        moveElement(obj.tx, obj.ty);
	                    }
	                };
	                var onDragMove = function onDragMove(evt, obj) {
	                    if (_allowClone) {

	                        _tx = obj.tx + obj.dragOffset.left;
	                        _ty = obj.ty + obj.dragOffset.top;

	                        moveElement(_tx, _ty);
	                    }
	                };
	                var onDragEnd = function onDragEnd(evt, obj) {
	                    //moveElement(obj.tx,obj.ty);
	                    if (_allowClone) {
	                        reset();
	                    }
	                };

	                var reset = function reset() {
	                    element.css({ left: 0, top: 0, position: 'fixed', 'z-index': -1, visibility: 'hidden' });
	                };
	                var moveElement = function moveElement(x, y) {
	                    element.css({
	                        transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ' + x + ', ' + y + ', 0, 1)', 'z-index': 99999, 'visibility': 'visible',
	                        '-webkit-transform': 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ' + x + ', ' + y + ', 0, 1)',
	                        '-ms-transform': 'matrix(1, 0, 0, 1, ' + x + ', ' + y + ')'
	                        //,margin: '0'  don't monkey with the margin,
	                    });
	                };

	                var absorbEvent_ = function absorbEvent_(event) {
	                    var e = event; //.originalEvent;
	                    e.preventDefault && e.preventDefault();
	                    e.stopPropagation && e.stopPropagation();
	                    e.cancelBubble = true;
	                    e.returnValue = false;
	                    return false;
	                };

	                initialize();
	            }
	        };
	    }]).directive('ngPreventDrag', ['$parse', '$timeout', function ($parse, $timeout) {
	        return {
	            restrict: 'A',
	            link: function link(scope, element, attrs) {
	                var initialize = function initialize() {

	                    element.attr('draggable', 'false');
	                    toggleListeners(true);
	                };

	                var toggleListeners = function toggleListeners(enable) {
	                    // remove listeners

	                    if (!enable) return;
	                    // add listeners.
	                    element.on('mousedown touchstart touchmove touchend touchcancel', absorbEvent_);
	                };

	                var absorbEvent_ = function absorbEvent_(event) {
	                    var e = event.originalEvent;
	                    e.preventDefault && e.preventDefault();
	                    e.stopPropagation && e.stopPropagation();
	                    e.cancelBubble = true;
	                    e.returnValue = false;
	                    return false;
	                };

	                initialize();
	            }
	        };
	    }]).directive('ngCancelDrag', [function () {
	        return {
	            restrict: 'A',
	            link: function link(scope, element, attrs) {
	                element.find('*').attr('ng-cancel-drag', 'ng-cancel-drag');
	            }
	        };
	    }]).directive('ngDragScroll', ['$window', '$interval', '$timeout', '$document', '$rootScope', function ($window, $interval, $timeout, $document, $rootScope) {
	        return {
	            restrict: 'A',
	            link: function link(scope, element, attrs) {
	                var intervalPromise = null;
	                var lastMouseEvent = null;

	                var config = {
	                    verticalScroll: attrs.verticalScroll || true,
	                    horizontalScroll: attrs.horizontalScroll || true,
	                    activationDistance: attrs.activationDistance || 75,
	                    scrollDistance: attrs.scrollDistance || 15
	                };

	                var reqAnimFrame = function () {
	                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function ( /* function FrameRequestCallback */callback, /* DOMElement Element */element) {
	                        window.setTimeout(callback, 1000 / 60);
	                    };
	                }();

	                var animationIsOn = false;
	                var createInterval = function createInterval() {
	                    animationIsOn = true;

	                    function nextFrame(callback) {
	                        var args = Array.prototype.slice.call(arguments);
	                        if (animationIsOn) {
	                            reqAnimFrame(function () {
	                                $rootScope.$apply(function () {
	                                    callback.apply(null, args);
	                                    nextFrame(callback);
	                                });
	                            });
	                        }
	                    }

	                    nextFrame(function () {
	                        if (!lastMouseEvent) return;

	                        var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	                        var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	                        var scrollX = 0;
	                        var scrollY = 0;

	                        if (config.horizontalScroll) {
	                            // If horizontal scrolling is active.
	                            if (lastMouseEvent.clientX < config.activationDistance) {
	                                // If the mouse is on the left of the viewport within the activation distance.
	                                scrollX = -config.scrollDistance;
	                            } else if (lastMouseEvent.clientX > viewportWidth - config.activationDistance) {
	                                // If the mouse is on the right of the viewport within the activation distance.
	                                scrollX = config.scrollDistance;
	                            }
	                        }

	                        if (config.verticalScroll) {
	                            // If vertical scrolling is active.
	                            if (lastMouseEvent.clientY < config.activationDistance) {
	                                // If the mouse is on the top of the viewport within the activation distance.
	                                scrollY = -config.scrollDistance;
	                            } else if (lastMouseEvent.clientY > viewportHeight - config.activationDistance) {
	                                // If the mouse is on the bottom of the viewport within the activation distance.
	                                scrollY = config.scrollDistance;
	                            }
	                        }

	                        if (scrollX !== 0 || scrollY !== 0) {
	                            // Record the current scroll position.
	                            var currentScrollLeft = $window.pageXOffset || $document[0].documentElement.scrollLeft;
	                            var currentScrollTop = $window.pageYOffset || $document[0].documentElement.scrollTop;

	                            // Remove the transformation from the element, scroll the window by the scroll distance
	                            // record how far we scrolled, then reapply the element transformation.
	                            var elementTransform = element.css('transform');
	                            element.css('transform', 'initial');

	                            $window.scrollBy(scrollX, scrollY);

	                            var horizontalScrollAmount = ($window.pageXOffset || $document[0].documentElement.scrollLeft) - currentScrollLeft;
	                            var verticalScrollAmount = ($window.pageYOffset || $document[0].documentElement.scrollTop) - currentScrollTop;

	                            element.css('transform', elementTransform);

	                            lastMouseEvent.pageX += horizontalScrollAmount;
	                            lastMouseEvent.pageY += verticalScrollAmount;

	                            $rootScope.$emit('draggable:_triggerHandlerMove', lastMouseEvent);
	                        }
	                    });
	                };

	                var clearInterval = function clearInterval() {
	                    animationIsOn = false;
	                };

	                scope.$on('draggable:start', function (event, obj) {
	                    // Ignore this event if it's not for this element.
	                    if (obj.element[0] !== element[0]) return;

	                    if (!animationIsOn) createInterval();
	                });

	                scope.$on('draggable:end', function (event, obj) {
	                    // Ignore this event if it's not for this element.
	                    if (obj.element[0] !== element[0]) return;

	                    if (animationIsOn) clearInterval();
	                });

	                scope.$on('draggable:move', function (event, obj) {
	                    // Ignore this event if it's not for this element.
	                    if (obj.element[0] !== element[0]) return;

	                    lastMouseEvent = obj.event;
	                });
	            }
	        };
	    }]);
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _modularEidtType = __webpack_require__(20);

	var _modularEidtType2 = _interopRequireDefault(_modularEidtType);

	var _modularEidtForm = __webpack_require__(22);

	var _modularEidtForm2 = _interopRequireDefault(_modularEidtForm);

	var _locatOpenTpl = __webpack_require__(24);

	var _locatOpenTpl2 = _interopRequireDefault(_locatOpenTpl);

	var _formWebUpload = __webpack_require__(26);

	var _formWebUpload2 = _interopRequireDefault(_formWebUpload);

	var _formSimditor = __webpack_require__(28);

	var _formSimditor2 = _interopRequireDefault(_formSimditor);

	var _service = __webpack_require__(29);

	var _service2 = _interopRequireDefault(_service);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
		(0, _modularEidtType2.default)();
		(0, _modularEidtForm2.default)();
		(0, _locatOpenTpl2.default)();
		(0, _formWebUpload2.default)();
		(0, _formSimditor2.default)();
		(0, _service2.default)();
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Redux = __webpack_require__(17);

	var _modularEidtType = __webpack_require__(21);

	var _modularEidtType2 = _interopRequireDefault(_modularEidtType);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import * as _ from 'lodash';
	exports.default = function () {
		var app = (0, _Redux.readRedux)({ type: "APP" });
		app.directive('modularEidtType', ["$timeout", "$uibModal", "$log", "$document", "directive.modular.services", function ($timeout, $uibModal, $log, $document, $modularServices) {
			return {
				restrict: 'AE',
				scope: {
					item: "=item"
				},
				template: _modularEidtType2.default,
				link: function link($scope, iElement, iAttrs) {
					var _this = {};
					// 继承服务
					$modularServices.call(_this, $scope, {});
					// 续集服务
					_this.$setOnDrop();
					_this.$setOnDrag();
					_this.$setLocationbar();
					_this.$setDetailContent();
				}
			};
		}]);
	};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"container-fluid  modular-edit container-fluid\">\r\n  <div class=\"row\" style=\"padding: 20px 0; border-bottom: solid 1px #eee; background:#fafafa; \">\r\n    <div class=\"col-xs-2 col-sm-2\">&nbsp;</div>\r\n    <div class=\"col-xs-10 col-sm-10\">\r\n      <div class=\"row\">\r\n      <button type=\"button\" class=\"btn btn-primary\" data-ng-click=\"onLocatSelected();\">历史记录 <span class=\"badge\">{{ locationbar.length }}</span></button>      \r\n      <button type=\"button\" class=\"btn btn-primary\" data-ng-click=\"onLocatFallback();\"  data-ng-class=\"{'disabled':isfallback}\" >后退</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" data-ng-click=\"onLocatForward();\"  data-ng-class=\"{'disabled':isforward}\" >前进 </button>\r\n      <button type=\"button\" class=\"btn btn-primary\">发布</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" >\r\n    <div class=\"col-xs-2 col-sm-2\">\r\n      <ul class=\"row mar-pad modular-type-list\">\r\n        <li \r\n          data-ng-repeat=\"data in item\" \r\n          ng-drag=\"true\" \r\n          ng-drag-data=\"data\" \r\n          data-allow-transform=\"true\"\r\n          class=\"mar-pad col-xs-4 col-sm-4\" >    \r\n          <i class=\"modular-icon\">{{data.icon || data.img }}</i>\r\n          {{data.name}}\r\n        </li>  \r\n      </ul>\r\n    </div>\r\n    <div\r\n      data-ng-class=\"{\r\n      'col-xs-6':eidtForm,\r\n      'col-sm-6':eidtForm,\r\n      'col-sm-10':!eidtForm,\r\n      'col-sm-10':!eidtForm\r\n      }\"\r\n     >\r\n      <div class=\"modular-center row\">\r\n        <div class=\"modular-phone phone-6s\" ng-drop=\"true\" ng-drop-success=\"onDropComplete($data,$event)\" data-ng-init=\"isRemove = [];\" >\r\n\r\n          <div class=\"modular-conentlist\"  \r\n           data-ng-class=\"{'active':data.active}\"\r\n           data-ng-repeat=\"data in eidtItem\" \r\n           data-ng-init=\"isRemove[$index] = false;\" \r\n           ng-drop=\"true\" \r\n           ng-drop-success=\"onDragSuccess($index, $data,$event)\" \r\n           data-ng-mouseover=\"isRemove[$index] = true\" \r\n           data-ng-mouseleave=\"isRemove[$index] = false\" \r\n           data-ng-click=\"onDropEditForm(data)\"\r\n           >\r\n              <i class=\"modular-remove\" \r\n              data-ng-click=\"onDropRemove(data);\"             \r\n              data-ng-show=\"isRemove[$index]\"\r\n              >x</i>\r\n              <div ng-drag=\"true\" ng-drag-data=\"data\" ng-class=\"data.name\">\r\n                <div ng-bind-html =\"detailContent(data.template)\"></div>\r\n                  {{data}}\r\n              </div>\r\n          </div>\r\n          <br>\r\n          --------------编辑后的数据--------------\r\n           <br>\r\n          <textarea>{{eidtItem}}</textarea>\r\n          \r\n        </div>\r\n        <p class=\"modular-center-bg\" data-ng-click=\"onDropEidtFormHide();\"></p>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-xs-4 col-sm-4 modular-form\" data-ng-show=\"eidtForm\" >\r\n      <modular-eidt-form data-item=\"eidtForm\"  data-locationbar = \"getLocationbar\" >\r\n      </modular-eidt-form> \r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Redux = __webpack_require__(17);

	var _modularEidtForm = __webpack_require__(23);

	var _modularEidtForm2 = _interopRequireDefault(_modularEidtForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import * as _ from 'lodash';
	exports.default = function () {
		var app = (0, _Redux.readRedux)({ type: "APP" });
		app.directive('modularEidtForm', ["$timeout", function ($timeout) {
			return {
				restrict: 'AE',
				scope: {
					item: "=item",
					getLocationbar: "=locationbar"
				},
				template: _modularEidtForm2.default,
				link: function link($scope, iElement, iAttrs) {}
			};
		}]);
	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = "\r\n<ul class=\"modular-form-tab row\" data-ng-init=\"modularFormTab = 'eidt'\">\r\n\t<li class=\"col-xs-6 col-sm-6 \" \r\n\tdata-ng-class=\"{'active':modularFormTab=='eidt'}\" \r\n\tdata-ng-click=\"modularFormTab = 'eidt'\"\r\n\t>\r\n\t\t<a href=\"\">内容</a>\r\n\t</li>\r\n\t<li class=\"col-xs-6 col-sm-6\" \r\n\tdata-ng-class=\"{'active':modularFormTab=='style'}\" \r\n\tdata-ng-click=\"modularFormTab = 'style'\"\r\n\t>\r\n\t\t<a href=\"javascript:;\">样式</a>\r\n\t</li>\r\n</ul>\r\n\r\n<div class=\"modular-form-center\">\r\n\t<div class=\"modular-form-eidt\" data-ng-if=\"modularFormTab == 'eidt'\">\r\n\t\t{{item}}\r\n\t\t<form action=\"\">\r\n\t\t\t<input type=\"text\" data-ng-model=\"item.icon\" placeholder=\"\" data-my-blur=\"getLocationbar('内容编辑【'+item.name+'】');\" >\r\n\t\t\t<input type=\"text\" data-ng-model=\"item.name\" placeholder=\"\" data-my-blur=\"getLocationbar('内容编辑【'+item.name+'】');\" >\r\n\t\t\t<modular-form-web-upload class=\"btn btn-primary\" data-item=\"{}\"  >上传图片</modular-form-web-upload>\r\n\t\t\t<modular-simditor data-ng-model=\"item.template\" data-ng-if=\"item.template\" data-blur=\"getLocationbar\" data-model=\"item.template\">\r\n\t\t\t\t\r\n\t\t\t</modular-simditor>\r\n\t\t</form>\r\n\t</div>\r\n\t<div class=\"modular-form-style\" data-ng-if=\"modularFormTab == 'style'\">\r\n\t\t{{item}}\r\n\t</div>\r\n</div>\r\n\r\n";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Redux = __webpack_require__(17);

	var _locatOpenTpl = __webpack_require__(25);

	var _locatOpenTpl2 = _interopRequireDefault(_locatOpenTpl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import * as _ from 'lodash';
	exports.default = function () {
		var app = (0, _Redux.readRedux)({ type: "APP" });
		app.factory('directive.modular.ui', ["$uibModal", "$rootScope", function ($uibModal, $rootScope) {
			return {
				locatOpen: function locatOpen(item, eidtItem) {
					return $uibModal.open({
						animation: true,
						ariaLabelledBy: 'modal-title-top',
						ariaDescribedBy: 'modal-body-top',
						scope: $rootScope.$new(true),
						template: _locatOpenTpl2.default,
						controller: "directive.modular.ui.locat.open",
						resolve: {
							$params: function $params() {
								return {
									item: item,
									eidtItem: eidtItem
								};
							}
						}
					});
				}
			};
		}]).controller('directive.modular.ui.locat.open', ["$http", '$params', "$scope", "directive.modular.services", function ($http, $params, $scope, $modularServices) {
			// var _this = {};
			// 继承服务
			//$modularServices.call(_this, $scope, {});

			$scope.openitem = $params.item;

			// 选中历史记录
			$scope.onLocatSelected = function (data, $index) {

				init();
				data.radio = true;
				$scope.$close(angular.copy($scope.openitem));
				(0, _Redux.getRedux)(true, { type: "MODULAR_UI_OPEN" });
			};

			var init = function init() {
				_.forEach($scope.openitem, function (val, key) {
					delete val.radio;
				});
			};
		}]);
	};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = "\r\n<div class=\"box-body \">\r\n  <table class=\"table table-hover modular-table-hover\">\r\n      <tbody>\r\n        <tr>\r\n          <th>#</th>\r\n          <th>操作类型</th>\r\n          <th>操作时间</th>\r\n          <th>组件数量</th>\r\n        </tr>\r\n        <tr  data-ng-repeat=\"item in openitem\" data-ng-click=\"onLocatSelected(item,$index);\" data-ng-if=\"openitem.length>0\" >\r\n          <td>\r\n          \t<i class=\"modular_radio\" data-ng-class=\"{'checked':!!item.radio}\"></i>\r\n          </td>\r\n          <td>{{item.typeName}}</td>\r\n          <td>\r\n            {{ item.time | date:' HH:mm:ss '}}\r\n          </td>\r\n          <td>\r\n          \t<span class=\"label label-info\">{{item.data.length}}</span>\r\n          </td>\r\n        </tr>\r\n\r\n       \t<tr data-ng-if=\" openitem.length == 0\">\r\n       \t\t <td  colspan =\"5\" class=\"text-center\">\r\n    \t   \t\t暂无操作记录！\r\n    \t   \t</td>\r\n       \t</tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<style type=\"text/css\">\r\n  .modular-table-hover>tbody>tr>td, .modular-table-hover>tbody>tr>th, .modular-table-hover>tfoot>tr>td, .modular-table-hover>tfoot>tr>th, .modular-table-hover>thead>tr>td, .modular-table-hover>thead>tr>th{\r\n    border-top: 0;\r\n    border-bottom: solid 1px #ddd;\r\n  }\r\n</style>";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
			value: true
	});

	var _Redux = __webpack_require__(17);

	var _formWebUpload = __webpack_require__(27);

	var _formWebUpload2 = _interopRequireDefault(_formWebUpload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import * as _ from 'lodash';
	exports.default = function () {
			var app = (0, _Redux.readRedux)({
					type: "APP"
			});

			app.directive('modularFormWebUpload', ["$timeout", "$uibModal", "$log", "$document", "$rootScope", function ($timeout, $uibModal, $log, $document, $rootScope) {
					return {
							restrict: 'AE',
							scope: {
									item: "=item"
							},
							template: "",
							link: function link($scope, iElement, iAttrs) {
									console.log(iElement);
									iElement.click(function () {
											$uibModal.open({
													animation: true,
													ariaLabelledBy: 'modal-title-top',
													ariaDescribedBy: 'modal-body-top',
													scope: $rootScope.$new(true),
													template: _formWebUpload2.default,
													size: "lg",
													controller: "form.web.upload.controller.open",
													resolve: {
															$params: function $params() {
																	return {
																			item: $scope.item
																	};
															}
													}
											});
									});
							}
					};
			}]);

			app.controller('form.web.upload.controller.open', ['$scope', "$http", "$uibModal", "$location", "$timeout", 'form.web.upload.service', function ($scope, $http, $uibModal, $location, $timeout, $uploadService) {
					var _this = {};
					$timeout(function () {
							// 继承服务
							$uploadService.call(_this, $scope, {});
					});
			}]);

			app.factory('form.web.upload.service', ["$uibModal", "$rootScope", function ($uibModal, $rootScope) {
					function Service(_$scope, _options) {

							var $ = jQuery,

							// just in case. Make sure it's not an other libaray.

							$wrap = $('#uploader'),


							// 图片容器
							$queue = $('<ul class="filelist"></ul>').appendTo($wrap.find('.queueList')),


							// 状态栏，包括进度和控制按钮
							$statusBar = $wrap.find('.statusBar'),


							// 文件总体选择信息。
							$info = $statusBar.find('.info'),


							// 上传按钮
							$upload = $wrap.find('div.uploadBtn'),


							// 没选择文件之前的内容。
							$placeHolder = $wrap.find('.placeholder'),


							// 总体进度条
							$progress = $statusBar.find('.progress').hide(),


							// 添加的文件数量
							fileCount = 0,


							// 添加的文件总大小
							fileSize = 0,


							// 优化retina, 在retina下这个值是2
							ratio = window.devicePixelRatio || 1,


							// 缩略图大小
							thumbnailWidth = 110 * ratio,
							    thumbnailHeight = 110 * ratio,


							// 可能有pedding, ready, uploading, confirm, done.
							state = 'pedding',


							// 所有文件的进度信息，key为file id
							percentages = {},
							    supportTransition = function () {
									var s = document.createElement('p').style,
									    r = 'transition' in s || 'WebkitTransition' in s || 'MozTransition' in s || 'msTransition' in s || 'OTransition' in s;
									s = null;
									return r;
							}(),


							// WebUploader实例
							uploader;

							if (!WebUploader.Uploader.support()) {
									alert('Web Uploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器');
									throw new Error('WebUploader does not support the browser you are using.');
							}

							// 实例化
							uploader = WebUploader.create({
									pick: {
											id: '#filePicker',
											label: '点击选择图片'
									},
									dnd: '#uploader .queueList',
									paste: document.body,

									accept: {
											title: 'Images',
											extensions: 'gif,jpg,jpeg,bmp,png',
											mimeTypes: 'image/*'
									},

									// swf文件路径
									swf: 'http://cdn.staticfile.org/webuploader/0.1.0/Uploader.swf',

									disableGlobalDnd: true,

									chunked: true,
									// server: 'http://webuploader.duapp.com/server/fileupload.php',
									server: 'http://result.eolinker.com/B7hctqTb702bbc604f0da172f3daace6519bd929e93fae2?uri=api/modular/webupload',
									fileNumLimit: 300,
									fileSizeLimit: 5 * 1024 * 1024, // 200 M
									fileSingleSizeLimit: 1 * 1024 * 1024 // 50 M
							});

							// 添加“添加文件”的按钮，
							uploader.addButton({
									id: '#filePicker2',
									label: '继续添加'
							});

							// 当有文件添加进来时执行，负责view的创建
							function addFile(file) {
									var $li = $('<li id="' + file.id + '">' + '<p class="title">' + file.name + '</p>' + '<p class="imgWrap"></p>' + '<p class="progress"><span></span></p>' + '</li>'),
									    $btns = $('<div class="file-panel">' + '<span class="cancel">删除</span>' + '<span class="rotateRight">向右旋转</span>' + '<span class="rotateLeft">向左旋转</span></div>').appendTo($li),
									    $prgress = $li.find('p.progress span'),
									    $wrap = $li.find('p.imgWrap'),
									    $info = $('<p class="error"></p>'),
									    text = "",
									    showError = function showError(code) {
											switch (code) {
													case 'exceed_size':
															text = '文件大小超出';
															break;

													case 'interrupt':
															text = '上传暂停';
															break;

													default:
															text = '上传失败，请重试';
															break;
											}

											$info.text(text).appendTo($li);
									};

									if (file.getStatus() === 'invalid') {
											showError(file.statusText);
									} else {
											// @todo lazyload
											$wrap.text('预览中');
											uploader.makeThumb(file, function (error, src) {
													if (error) {
															$wrap.text('不能预览');
															return;
													}

													var img = $('<img src="' + src + '">');
													$wrap.empty().append(img);
											}, thumbnailWidth, thumbnailHeight);

											percentages[file.id] = [file.size, 0];
											file.rotation = 0;
									}

									file.on('statuschange', function (cur, prev) {
											if (prev === 'progress') {
													$prgress.hide().width(0);
											} else if (prev === 'queued') {
													$li.off('mouseenter mouseleave');
													$btns.remove();
											}

											// 成功
											if (cur === 'error' || cur === 'invalid') {
													console.log(file.statusText);
													showError(file.statusText);
													percentages[file.id][1] = 1;
											} else if (cur === 'interrupt') {
													showError('interrupt');
											} else if (cur === 'queued') {
													percentages[file.id][1] = 0;
											} else if (cur === 'progress') {
													$info.remove();
													$prgress.css('display', 'block');
											} else if (cur === 'complete') {
													$li.addClass("active").append('<span class="success"></span>');
											}

											$li.removeClass('state-' + prev).addClass('state-' + cur);
									});

									$li.on('mouseenter', function () {
											$btns.stop().animate({ height: 30 });
									});

									$li.on('mouseleave', function () {
											$btns.stop().animate({ height: 0 });
									});

									$btns.on('click', 'span', function () {
											var index = $(this).index(),
											    deg;

											switch (index) {
													case 0:
															uploader.removeFile(file);
															return;

													case 1:
															file.rotation += 90;
															break;

													case 2:
															file.rotation -= 90;
															break;
											}

											if (supportTransition) {
													deg = 'rotate(' + file.rotation + 'deg)';
													$wrap.css({
															'-webkit-transform': deg,
															'-mos-transform': deg,
															'-o-transform': deg,
															'transform': deg
													});
											} else {
													$wrap.css('filter', 'progid:DXImageTransform.Microsoft.BasicImage(rotation=' + ~~(file.rotation / 90 % 4 + 4) % 4 + ')');
											}
									});

									$li.appendTo($queue);
							}

							// 负责view的销毁
							function removeFile(file) {
									var $li = $('#' + file.id);

									delete percentages[file.id];
									updateTotalProgress();
									$li.off().find('.file-panel').off().end().remove();
							}

							function updateTotalProgress() {
									var loaded = 0,
									    total = 0,
									    spans = $progress.children(),
									    percent;

									$.each(percentages, function (k, v) {
											total += v[0];
											loaded += v[0] * v[1];
									});

									percent = total ? loaded / total : 0;

									spans.eq(0).text(Math.round(percent * 100) + '%');
									spans.eq(1).css('width', Math.round(percent * 100) + '%');
									updateStatus();
							}

							function updateStatus() {
									var text = '',
									    stats = "";

									if (state === 'ready') {
											text = '选中' + fileCount + '张图片，共' + WebUploader.formatSize(fileSize) + '。';
									} else if (state === 'confirm') {
											stats = uploader.getStats();
											if (stats.uploadFailNum) {
													text = '已成功上传' + stats.successNum + '张照片至XX相册，' + stats.uploadFailNum + '张照片上传失败，<a class="retry" href="#">重新上传</a>失败图片或<a class="ignore" href="#">忽略</a>';
											}
									} else {
											stats = uploader.getStats();
											text = '共' + fileCount + '张（' + WebUploader.formatSize(fileSize) + '），已上传' + stats.successNum + '张';

											if (stats.uploadFailNum) {
													text += '，失败' + stats.uploadFailNum + '张';
											}
									}

									$info.html(text);
							}

							function setState(val) {
									var file, stats;

									if (val === state) {
											return;
									}

									$upload.removeClass('state-' + state);
									$upload.addClass('state-' + val);
									state = val;

									switch (state) {
											case 'pedding':
													$placeHolder.removeClass('element-invisible');
													$queue.parent().removeClass('filled');
													$queue.hide();
													$statusBar.addClass('element-invisible');
													//uploader.refresh();
													break;

											case 'ready':
													$placeHolder.addClass('element-invisible');
													$('#filePicker2').removeClass('element-invisible');
													$queue.parent().addClass('filled');
													$queue.show();
													$statusBar.removeClass('element-invisible');
													uploader.refresh();
													break;

											case 'uploading':
													//$( '#filePicker2' ).addClass( 'element-invisible' );
													$progress.show();
													$upload.text('暂停上传');
													break;

											case 'paused':
													$progress.show();
													$upload.text('继续上传');
													break;

											case 'confirm':
													$progress.hide();
													$upload.text('开始上传');
													//.addClass( 'disabled' );

													stats = uploader.getStats();
													if (stats.successNum && !stats.uploadFailNum) {
															setState('finish');
															return;
													}
													break;
											case 'finish':
													stats = uploader.getStats();

													if (stats.successNum) {
															alert('上传成功');
													} else {
															// 没有成功的图片，重设
															state = 'done';
															location.reload();
													}
													break;
									}

									updateStatus();
							}

							uploader.onUploadProgress = function (file, percentage) {
									var $li = $('#' + file.id),
									    $percent = $li.find('.progress span');

									$percent.css('width', percentage * 100 + '%');
									percentages[file.id][1] = percentage;
									updateTotalProgress();
							};

							uploader.onFileQueued = function (file) {
									fileCount++;
									fileSize += file.size;

									if (fileCount === 1) {
											$placeHolder.addClass('element-invisible');
											$statusBar.show();
									}

									addFile(file);
									setState('ready');
									updateTotalProgress();
							};

							uploader.onFileDequeued = function (file) {
									fileCount--;
									fileSize -= file.size;

									if (!fileCount) {
											setState('pedding');
									}

									removeFile(file);
									updateTotalProgress();
							};

							uploader.on('all', function (type) {
									switch (type) {
											case 'uploadFinished':
													setState('confirm');
													break;

											case 'startUpload':
													setState('uploading');
													break;

											case 'stopUpload':
													setState('paused');
													break;

									}
							});

							uploader.onError = function (code) {
									alert('Eroor: ' + code);
							};

							$upload.on('click', function () {
									if ($(this).hasClass('disabled')) {
											return false;
									}

									if (state === 'ready') {
											uploader.upload();
									} else if (state === 'paused') {
											uploader.upload();
									} else if (state === 'uploading') {
											uploader.stop();
									}
							});

							$info.on('click', '.retry', function () {
									uploader.retry();
							});

							$info.on('click', '.ignore', function () {
									alert('todo');
							});

							$upload.addClass('state-' + state);
							updateTotalProgress();
							this.$upload = $upload;
					}
					return function ($scope, options) {
							if (_.isNull($scope) || _.isUndefined($scope)) {
									return Service;
							} else {
									Service.call(this, $scope, options);
									return this;
							}
					};
			}]);
	};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = "<div id=\"uploader\"> \r\n    <ul class=\"modular-upload-tab\">\r\n        <li class=\"active\"><a href=\"javascript:;\">我的图片</a></li>\r\n        <li><a href=\"javascript:;\">素材库</a></li>\r\n    </ul>\r\n    <div  class=\"wu-example\">    \r\n        <div class=\"statusBar\" style=\"display:none;\">\r\n            <div class=\"progress\">\r\n                <span class=\"text\">0%</span>\r\n                <span class=\"percentage\"></span>\r\n            </div><div class=\"info\"></div>\r\n            <div class=\"btns\">\r\n                <div id=\"filePicker2\"></div><div class=\"uploadBtn\">开始上传</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"queueList\">\r\n            <div id=\"dndArea\" class=\"placeholder\">\r\n                <div id=\"filePicker\"></div>\r\n                <p>或将照片拖到这里，单次最多可选300张</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modular-upload-list\">   \r\n        <label>已选图片</label>\r\n        <p class=\"img\" data-ng-repeat=\"data in item\" ><img src=\"{{data.url}}\" alt=\"\"></p>\r\n    </div>\r\n    <div class=\"modular-upload-bottom\">\r\n        <div class=\"btns\">\r\n                <a class=\"webuploader-pick\">取消添加</a><a class=\"uploadBtn\">确认添加</a>\r\n            </div>\r\n    </div>\r\n</div>";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Redux = __webpack_require__(17);

	exports.default = function () {
		var app = (0, _Redux.readRedux)({
			type: "APP"
		});

		app.directive('modularSimditor', ["$timeout", "$uibModal", "$log", "$document", "$rootScope", '$sce', function ($timeout, $uibModal, $log, $document, $rootScope, $sce) {
			return {
				restrict: 'AE',
				scope: {
					blur: "=blur",
					model: "=model"
				},
				template: "",
				require: '^ngModel',
				link: function link($scope, iElement, iAttrs, ngModel) {
					var Eid = "Eid" + Math.round(Math.random() * 1000);
					$(iElement).attr("id", Eid);
					var E = window.wangEditor;
					var editor = new E("#" + Eid);

					// 或者 var editor = new E( document.getElementById('editor') )
					editor.customConfig.menus = ['head', // 标题
					'bold', // 粗体
					'italic', // 斜体
					'underline', // 下划线
					'strikeThrough', // 删除线
					'foreColor', // 文字颜色
					'backColor', // 背景颜色
					'link', // 插入链接
					// 'list',  // 列表
					'justify', // 对齐方式
					// 'quote',  // 引用
					// 'emoticon',  // 表情
					'image'];
					editor.customConfig.colors = ['#000000', '#333333', '#666666', '#999999', '#cccccc', '#dddddd', '#eeeeee', '#ffffff', '#1c487f', '#4d80bf', '#c24f4a', '#8baa4a', '#7b5ba1', '#46acc8', '#f9963b', '#337ab7'];

					editor.customConfig.zIndex = 1;

					editor.customConfig.onchange = function (html) {
						// 设置视图和调用 apply$sce
						$scope.$apply(function () {
							ngModel.$setViewValue(html);
						});
					};
					editor.customConfig.onblur = function (html) {
						$scope.blur('内容编辑');
					};
					editor.create();

					$scope.$watch("model", function () {
						editor.txt.html(ngModel.$viewValue);
					});
				}
			};
		}]);
	}; // import * as _ from 'lodash';

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _lodash = __webpack_require__(30);

	var $_ = _interopRequireWildcard(_lodash);

	var _Redux = __webpack_require__(17);

	var _lwjServicesPhpApi = __webpack_require__(31);

	var _lwjServicesPhpApi2 = _interopRequireDefault(_lwjServicesPhpApi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.default = function () {
		var app = (0, _Redux.readRedux)({ type: "APP" });
		app.factory('directive.modular.services', ["$http", "$log", "$timeout", "directive.modular.ui", "$sce", function ($http, $log, $timeout, $modularUi, $sce) {
			function Service(_$scope, _options) {

				// 续集模板编辑api
				var pmcApi = _lwjServicesPhpApi2.default.API.com.php.pmc.IndexController($http);

				var _this = this;

				// 解决追加薪组件与切换组件位置重复应用BUG
				var centerAnchor = true;

				// 设置默认数据/提交数据接口
				_$scope.eidtItem = [];

				// 右侧from编辑数据
				_$scope.eidtForm = false;

				// 历史记录存储
				_$scope.locationbar = [];

				// 表示左边拖动数据
				_.forEach(_$scope.item, function (val, key) {
					val.tagging = true;
				});

				/*
	    * 拉取数据默认数据
	    */
				pmcApi.getModularViewList(50, function (data) {
					_$scope.eidtItem = data.item;
				});

				/*
	    * 拖拽插件
	    */
				_this.$setOnDrop = function () {

					// 追加组件提交
					_$scope.onDropComplete = function (data, evt) {
						// console.log("127", "$scope", "onDropComplete", data, evt);
						if (!data) return false;
						var index = _$scope.eidtItem.indexOf(data);

						$timeout(function () {
							var copyData = angular.copy(data);
							if (copyData.tagging && centerAnchor) {
								delete copyData.tagging;
								_$scope.eidtItem.push(copyData);
								_$scope.onDropEditForm(_.last(_$scope.eidtItem));
								_$scope.getLocationbar('新增模块【' + copyData.name + '】');
							}
							centerAnchor = true;
						}, 10);
					};

					// 选择编辑对象
					_$scope.onDropEditForm = function (data) {
						_$scope.eidtForm = false;
						_$scope.eidtForm = data;
						if (data.active) {
							data.active = true;
							//_$scope.onDropEidtFormHide();
						} else {
							_.each(_$scope.eidtItem, function (value, key) {
								delete value.active;
							});
							data.active = true;
						}
					};

					// 删除数据
					_$scope.onDropRemove = function (data) {
						_.remove(_$scope.eidtItem, function (n) {
							return n == data;
						});
						if (_$scope.eidtForm == data) {
							_$scope.onDropEidtFormHide();
						}
						_$scope.getLocationbar('删除模块【' + data.name + '】');
					};

					// 消耗编辑数据
					_$scope.onDropEidtFormHide = function () {

						_.each(_$scope.eidtItem, function (value, key) {
							delete value.active;
						});

						_$scope.eidtForm = false;
					};
				};

				/*
	    *	绑定拖拽状态与事件
	    */
				_this.$setOnDrag = function () {

					// 位置切换成功回调
					_$scope.onDragSuccess = function (index, data, evt) {
						// console.log("133", "_$scope", "onDragSuccess", "", evt);
						centerAnchor = false;
						if (data.tagging) {
							data = angular.copy(data);
							delete data.tagging;
							_$scope.eidtItem.splice(index, 0, data);
							_$scope.onDropEditForm(_$scope.eidtItem[index]);
						} else {
							var otherdata = _$scope.eidtItem[index];
							var otherIndex = _$scope.eidtItem.indexOf(data);
							_$scope.eidtItem[index] = data;
							_$scope.eidtItem[otherIndex] = otherdata;

							_$scope.onDropEditForm(_$scope.eidtItem[index]);
						}

						_$scope.getLocationbar('位置移动【' + data.name + '<=>' + _$scope.eidtItem[index].name + '】');
					};

					// 绑定拖拽状态与事件
					var onDraggableEvent = function onDraggableEvent(evt, data) {

						switch (evt.name) {
							case 'draggable:move':
								// console.log("128", "onDraggableEvent", evt, data);
								$(data.element).addClass('drag-move').parent().addClass('drag-move');
								break;
							case 'draggable:end':
								$(data.element).addClass('drag-move').parent().removeClass('drag-move');
								break;
							default:
								// statements_def
								break;
						}
					};

					_$scope.$on('draggable:start', onDraggableEvent);
					_$scope.$on('draggable:move', onDraggableEvent);
					_$scope.$on('draggable:end', onDraggableEvent);
				};

				/*
	    *
	    */
				_this.$setDetailContent = function () {
					_$scope.detailContent = function (content) {
						return $sce.trustAsHtml(content);
					};
				};

				//历史记录
				_this.$setLocationbar = function () {

					// 存储初始化数据
					var locatTtem = angular.copy(_$scope.eidtItem);
					_$scope.isfallback = true;
					_$scope.isforward = true;
					// 设置历史记录
					var _$setLocationbar = function _$setLocationbar(data, key2) {
						_$scope.eidtItem = data;
						// 回显示已经选中的元素
						_.forEach(_$scope.eidtItem, function (val, key) {
							if (val.active) {
								_$scope.onDropEditForm(val);
							}
						});
						// 写入历史进退按钮状态
						_$scope.isfallback = key2 <= 0;
						_$scope.isforward = key2 >= _$scope.locationbar.length - 1;
					};

					// 数据比对递归算法
					var _$isLoctionbarRet = true;
					var _$isLoctionbar = function _$isLoctionbar(data1, data2) {

						_.forEach(data1, function (val, key) {
							if (!_$isLoctionbarRet) return false;
							if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) == "object") {
								_$isLoctionbar(val, data2[key]);
							} else if (val == data2[key] || key == "radio") {
								_$isLoctionbarRet = true;
							} else {
								_$isLoctionbarRet = false;
							}
						});
						return _$isLoctionbarRet;
					};

					// 写入历史记录
					_$scope.getLocationbar = function (typeName) {
						if (_$scope.eidtItem != []) {
							var isRadio = false;

							if (_$scope.locationbar.length > 0) {
								_$isLoctionbarRet = true;
								if (_$isLoctionbar(_.last(_$scope.locationbar).data, angular.copy(_$scope.eidtItem))) {
									return false;
								}
							}

							_.forEach(_$scope.locationbar, function (val, key) {
								isRadio = val.radio ? true : isRadio;
								if (val.radio) {
									_.remove(_$scope.locationbar, function (n, k) {
										return k > key;
									});
									delete val.radio;
									return false;
								}
							});

							_$scope.locationbar.push({
								$index: _$scope.locationbar.length,
								typeName: typeName || "数据修改",
								time: new Date(),
								data: angular.copy(_$scope.eidtItem),
								radio: true
							});

							_$scope.isfallback = false;
							_$scope.isforward = true;
						}
					};

					// 后退
					_$scope.onLocatFallback = function () {
						var $ret = true;
						_.forEach(_$scope.locationbar, function (val, key) {
							if (val.radio) {
								delete val.radio;
								$ret = key - 1 <= 0 ? 0 : key - 1;
								_$scope.locationbar[$ret].radio = true;
								_$setLocationbar(_$scope.locationbar[$ret].data, $ret);
								return false;
							}
						});
					};

					// 前进
					_$scope.onLocatForward = function () {
						var $ret = true;
						_.forEach(_$scope.locationbar, function (val, key) {
							if (val.radio) {
								delete val.radio;
								$ret = key + 1 >= _$scope.locationbar.length - 1 ? _$scope.locationbar.length - 1 : key + 1;
								_$scope.locationbar[$ret].radio = true;
								_$setLocationbar(_$scope.locationbar[$ret].data, $ret);
								return false;
							}
						});
					};

					// 选中历史记录
					_$scope.onLocatSelected = function (data) {
						$modularUi.locatOpen(_$scope.locationbar, _$scope.eidtItem).result.then(function (selectedItem) {
							_$scope.locationbar = selectedItem;
							$timeout(function () {
								_.forEach(_$scope.locationbar, function (val, key) {
									if (val.radio) {
										_$setLocationbar(val.data, key);
									};
								});
							}, 300);
						});
					};
				};
			};

			return function ($scope, options) {
				if (_.isNull($scope) || _.isUndefined($scope)) {
					return Service;
				} else {
					Service.call(this, $scope, options);
					return this;
				}
			};
		}]);
	};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = window._;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var APP = {};
	APP.API = APP.API || {};
	APP.API.com = APP.API.com || {};
	APP.API.com.php = APP.API.com.php || {};
	APP.API.com.php.home = APP.API.com.php.home || {};

	APP.API.com.php.pmc = APP.API.com.php.pmc || {};

	APP.API.com.php.home.IndexController = function ($http) {
	    return {
	        getStoreDetail: function getStoreDetail(id, successCallBack, errorCallBack) {
	            http($http, '/cms/andaren/content/detail/' + id, {}, successCallBack, errorCallBack, "GET");
	        }
	    };
	};

	// 可视化编辑交互地址
	APP.API.com.php.pmc.IndexController = function ($http) {
	    return {
	        getModularList: function getModularList(id, successCallBack, errorCallBack) {
	            http($http, 'api/modular/list', {}, successCallBack, errorCallBack, "GET");
	        },
	        getModularViewList: function getModularViewList(id, successCallBack, errorCallBack) {
	            http($http, 'api/modular/view/list', {}, successCallBack, errorCallBack, "POST");
	        }
	    };
	};

	exports.default = APP;

	/**
	 * 发起HTTP请求
	 * @param $http
	 * @param url
	 * @param data
	 * @param successCallBack
	 * @param errorCallBack
	 * @param method
	 */

	function http($http, url, data, successCallBack, errorCallBack, method) {
	    method = method || 'PUT';
	    var params = {
	        method: method.toUpperCase(),
	        // 配置api代理
	        url: "https://result.eolinker.com/B7hctqTb702bbc604f0da172f3daace6519bd929e93fae2?uri=" + url
	    };

	    if (params.method === 'GET') {
	        params.params = data;
	    } else {
	        params.data = data;
	    }

	    $http(params).success(function (data) {
	        if (data.code > 0) {
	            if (typeof errorCallBack === 'function') {
	                errorCallBack(data);
	            } else {
	                defaultErrorCall(data, $modal);
	            }
	        } else {
	            if (typeof successCallBack === 'function') {
	                successCallBack(data);
	            } else {
	                defaultCall(data);
	            }
	        }
	    }).error(function (data) {

	        if (typeof errorCallBack === 'function') {
	            errorCallBack(data);
	        } else {
	            defaultErrorCall(data, $modal);
	        }
	    });
	}

	// 默认提示
	var defaultErrorCall = function defaultErrorCall(data) {
	    alert(data);
	};
	// 默认提示
	var defaultCall = function defaultCall(data) {
	    alert(data);
	};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Home = __webpack_require__(33);

	var _Home2 = _interopRequireDefault(_Home);

	var _Unit = __webpack_require__(37);

	var _Unit2 = _interopRequireDefault(_Unit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 *	@tql 2017/12/08
	 *	在这里注入所有页面的控制器于服务
	 */

	exports.default = function (lwj) {
	  (0, _Home2.default)(lwj);
	  // News(lwj);
	  (0, _Unit2.default)(lwj);
	};
	// import News from './News/';

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(34);

	var _controller2 = _interopRequireDefault(_controller);

	var _services = __webpack_require__(36);

	var _services2 = _interopRequireDefault(_services);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /*
	                                                                                                                                                                                                     *	@tql 2017/12/08
	                                                                                                                                                                                                     *	这里是当前页面的控制器与服务集成
	                                                                                                                                                                                                     */

	exports.default = function (lwj) {
	  var _lwj$controller;

	  return (_lwj$controller = lwj.controller.apply(lwj, _toConsumableArray(_controller2.default))).factory.apply(_lwj$controller, _toConsumableArray(_services2.default));
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _lwjServicesPhpApi = __webpack_require__(31);

	var _lwjServicesPhpApi2 = _interopRequireDefault(_lwjServicesPhpApi);

	var _func = __webpack_require__(35);

	var _func2 = _interopRequireDefault(_func);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 *	@tql 2017/12/08
	 *	首页控制器
	 */
	exports.default = ["module.home.controler", ['$scope', "$http", "$uibModal", "$location", function ($scope, $http, $uibModal, $location, pageNationConfig) {
		// 续集api
		var ServiceApi = _lwjServicesPhpApi2.default.API.com.php.pmc.IndexController($http);
		ServiceApi.getModularList(1, function (data) {
			console.log("请求成功！", data);
			$scope.modularData = data.item;
		}, function (data) {
			console.log("请求失败！");
		});
		$scope.promption = "This is home";
	}]];

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by liyi on 15/10/20.
	 */
	// import * as _ from 'lodash';   

	var lwj = {};

	lwj.IdentityCodeValid = function (code) {
	    var city = {
	        11: "北京",
	        12: "天津",
	        13: "河北",
	        14: "山西",
	        15: "内蒙古",
	        21: "辽宁",
	        22: "吉林",
	        23: "黑龙江 ",
	        31: "上海",
	        32: "江苏",
	        33: "浙江",
	        34: "安徽",
	        35: "福建",
	        36: "江西",
	        37: "山东",
	        41: "河南",
	        42: "湖北 ",
	        43: "湖南",
	        44: "广东",
	        45: "广西",
	        46: "海南",
	        50: "重庆",
	        51: "四川",
	        52: "贵州",
	        53: "云南",
	        54: "西藏 ",
	        61: "陕西",
	        62: "甘肃",
	        63: "青海",
	        64: "宁夏",
	        65: "新疆",
	        71: "台湾",
	        81: "香港",
	        82: "澳门",
	        91: "国外 "
	    };
	    var tip = "";
	    var pass = true;

	    if (!code || !/^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/i.test(code)) {
	        tip = "身份证号格式错误";
	        pass = false;
	    } else if (!city[code.substr(0, 2)]) {
	        tip = "身份证地址编码错误";
	        pass = false;
	    } else {
	        //18位身份证需要验证最后一位校验位

	        if (code.length == 18) {
	            code = code.split(''); //∑(ai×Wi)(mod 11)
	            //加权因子
	            var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
	            //校验位
	            var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
	            var sum = 0;
	            var ai = 0;
	            var wi = 0;
	            for (var i = 0; i < 17; i++) {
	                ai = code[i];
	                wi = factor[i];
	                sum += ai * wi;
	            }
	            var last = parity[sum % 11];
	            if (parity[sum % 11] != code[17]) {
	                tip = "身份证校验位错误";
	                pass = false;
	            }
	        }
	    }
	    return {
	        'pass': pass,
	        'msg': tip
	    };
	};

	lwj.getDownloadFilePath = function (resultUrl, callback, scope, $http, $modal) {
	    if (!$.trim(resultUrl)) {
	        return;
	    }

	    this.common = {};
	    lwj.API.com.php.common.FileController.call(this.common, $http, $modal);

	    var cutStyle = scope.cutStyle || 'x-oss-process=image/resize,m_fixed,h_100,w_100';
	    var param = ['returnType=url', '_lxwxjt=' + $.cookie('LX-WXSRF-JTOKEN'), 'filepath=' + resultUrl];

	    var url = param.join('&');
	    this.common.getFilePath('fileDownload?' + _.trimStart(url, '&'), function (src) {
	        if (!$.trim(src)) {
	            return;
	        }
	        var sourceSrc = src,
	            targetSrc = src;

	        if (src.indexOf(lwj.appScopeMain.DOMAIN_ALI_OSS) >= 0) {
	            sourceSrc = src.substr(0, src.indexOf('?'));
	            targetSrc = sourceSrc + (sourceSrc.indexOf('?') >= 0 ? '&' : '?') + cutStyle;
	        }
	        callback(sourceSrc, targetSrc, resultUrl);
	    });
	};

	lwj.getNextNMonth = function (date, n) {
	    var arr = date.split('-');
	    var year = arr[0]; //获取当前日期的年份
	    var month = arr[1]; //获取当前日期的月份
	    var day = arr[2]; //获取当前日期的日

	    var year2 = year;
	    var month2 = parseInt(month) + n;
	    if (month2 > 12) {
	        year2 = parseInt(year2) + 1;
	        month2 = 1;
	    }

	    var day2 = day;
	    var days2 = new Date(year2, month2, 0);
	    days2 = days2.getDate();
	    if (day2 > days2) {
	        // 日期按照最终的月份为最大值
	        day2 = days2;
	    }

	    if (month2 < 10) {
	        month2 = '0' + parseInt(month2);
	    }
	    if (day2 < 10) {
	        day2 = '0' + parseInt(day2);
	    }

	    return year2 + '-' + month2 + '-' + day2;
	};

	lwj.openDatePicker = function ($scope, $event, opened) {
	    $event.preventDefault();
	    $event.stopPropagation();
	    $scope[opened] = true;
	};

	lwj.openSuccessAlertDialog = function ($scope, $modal, title, message) {
	    return $modal.open({
	        templateUrl: 'app/views/pages/success.html',
	        controller: 'dialog.simple.ctrl',
	        $scope: $scope.$new ? $scope.$new(true) : {},
	        backdrop: true,
	        resolve: {
	            resolve: function resolve() {
	                return {
	                    title: title,
	                    message: message
	                };
	            }
	        }
	    });
	};

	lwj.openErrorAlertDialog = function ($scope, $modal, title, message, confirmText, cancelText) {
	    return $modal.open({
	        templateUrl: 'app/views/pages/error.html',
	        controller: 'dialog.simple.ctrl',
	        backdrop: true,
	        $scope: $scope.$new ? $scope.$new(true) : {},
	        resolve: {
	            resolve: function resolve() {
	                return {
	                    title: title,
	                    message: message,
	                    confirmText: confirmText,
	                    cancelText: cancelText
	                };
	            }
	        }
	    });
	};

	lwj.serverErrorAlertFunc = function ($scope, $modal, data) {
	    var msg = data.messages;
	    if (msg.serverInternal) {
	        return lwj.openErrorAlertDialog($scope, $modal, "服务器返回错误", msg.serverInternal.$srvmessage);
	    } else {
	        var serverErrorMessages = [];
	        angular.forEach(data.messages, function (value, key) {
	            serverErrorMessages.push(value.$srvmessage);
	        });
	        return lwj.openErrorAlertDialog($scope, $modal, "服务器返回错误", serverErrorMessages.join(';'));
	    }
	};

	/**
	 * [loading description]
	 * @param  {[type]} $msg    [description]
	 * @param  {[type]} $status [description]
	 * @return {[type]}         [description]
	 */
	lwj.loading = function (content) {
	    if ($("#layer_loading").length > 0) {
	        $("#layer_loading").remove();
	    } else {
	        var html = '';
	        if ($.trim(content)) {
	            html = '<span style="position: fixed; left:50%; top:50%; margin:20px 0 0 -4%; z-index:9999999999;">' + content + '</span>';
	        }
	        var tpl = '<div id="layer_loading" style="background:url(http://webimg.liweijia.com/plugin/layer/skin/default/loading-0.gif) center center no-repeat rgba(255,255,255,0.2); position: fixed; left:0; top:0; width:100%; height:100%; z-index:999999999; ">' + html + '</div>';
	        $("body").append(tpl);
	    }
	};

	lwj.openDialogConfirm = function ($scope, $modal, title, message, success) {
	    var modalInstance = $modal.open({
	        templateUrl: 'app/views/pages/dialog.confirm.html',
	        controller: 'dialog.simple.ctrl',
	        scope: $scope.$new(true),
	        backdrop: true,
	        resolve: {
	            resolve: function resolve() {
	                return {
	                    title: title,
	                    message: message
	                };
	            }
	        }
	    }).result.then(function (_resolve) {
	        success();
	    });

	    return modalInstance;
	};

	lwj.dialogConfirm = function ($scope, $modal, $http, options) {
	    var apiUrl = options.apiUrl ? options.apiUrl : '',
	        apiData = options.apiData ? options.apiData : '',
	        title = options.title ? options.title : '',
	        callback = options.callback ? options.callback : '',
	        message = options.message ? options.message : '',
	        apiMethod = options.apiMethod ? options.apiMethod : 'POST';

	    var modalInstance = $modal.open({
	        templateUrl: 'app/views/pages/dialog.confirm.html',
	        controller: 'dialog.simple.ctrl',
	        scope: $scope.$new(true),
	        backdrop: true,
	        resolve: {
	            resolve: function resolve() {
	                return {
	                    title: title,
	                    message: message
	                };
	            }
	        }
	    }).result.then(function (_resolve) {
	        $http({
	            method: apiMethod,
	            url: apiUrl,
	            data: apiData
	        }).success(function (data) {
	            if (typeof callback === 'function') {
	                callback(data);
	            }

	            var msg = data.messages;
	            if (data.code > 0) {
	                if (msg.serverInternal) {
	                    lwj.openErrorAlertDialog($scope, $modal, "服务器返回错误", msg.serverInternal.$srvmessage);
	                }
	            } else {
	                $scope.innerQuery();
	            }
	        });
	    });

	    return modalInstance;
	};

	lwj.splitImg = function (img) {
	    return img && img != 'null' ? img.split(';') : [];
	};
	lwj.joinImg = function (img) {
	    return img ? img.join(';') : '';
	};

	var gridFunc = function gridFunc($scope, $http, $location, $modal, pageNationConfig, options, $selectModalInstance, $selectResolve) {

	    var ths = {},


	    /**
	     * API的基地址
	     * 需要按照后台的规范进行编写
	     * GET  /entity/list
	     * PUT  /entity/create
	     * PUT  /entity/update
	     * POST /entity/delete
	     */
	    apiBaseUrl = options.apiBaseUrl.charAt(options.apiBaseUrl.length - 1) === '/' ? options.apiBaseUrl : options.apiBaseUrl + '/',


	    /**
	     * 页面跳转的基地址
	     * 需要按照前台的规范进行编写
	     * 查询结果列表页   /some_base/grid
	     * 创建新纪录页面   /some_base/create
	     * 更新纪录的页面   /some_base/update/:id
	     * 删除纪录，则需要弹出对话框给用户确认
	     */
	    viewBaseUrl = options.viewBaseUrl.charAt(options.viewBaseUrl.length - 1) === '/' ? options.viewBaseUrl : options.viewBaseUrl + '/',


	    /**
	     * 分页相关的配置，是options里配置的一个拷贝
	     */
	    $page = angular.copy(pageNationConfig),


	    /**
	     * 查询的相关配置
	     */
	    defaultQueryOption = [{
	        'field': 'userMobile',
	        'displayName': "手机号"
	    }],


	    /**
	     * 查询是的选项
	     * @type {*[]}
	     */
	    queryOptions = !options.queryOptions ? defaultQueryOption : options.queryOptions,


	    /**
	     * 查询列表绑定的模型名称
	     */
	    pageDataBindingName = !options.pageDataBindingName ? "data" : options.pageDataBindingName,


	    /**
	     * 按照什么字段查询
	     * @type {string}
	     */
	    queryBy = '',


	    /**
	     * 查询的关键字
	     * @type {string}
	     */
	    queryKey = '',


	    /**
	     * 区域查询
	     * @type {Array}
	     */
	    searchRegion = [],


	    /**
	     * 客户区域查询
	     * @type {Array}
	     */
	    searchUserRegion = [],


	    /**
	     * 模态对话框（用于删除确认对话框）
	     */
	    modalInstance,


	    /**
	     * 是否是多选
	     * @type {boolean}
	     */
	    multiSelect = $selectResolve ? !$selectResolve.multiSelect ? false : $selectResolve.multiSelect : false,


	    /**
	     * 上次选中的列的checkBox
	     */
	    lastSelectTarget,


	    /**
	     *自定义list查询接口名，如果未定义 使用默认接口名"list"
	     */
	    queryInterfaceName = options.queryInterfaceName,


	    /**
	     * 列表api的method
	     */
	    gridApiMethod = options.gridApiMethod ? options.gridApiMethod : 'POST',


	    /**
	     * 是否强制初始化列表
	     */
	    initList = !_.isUndefined(options.initList) ? options.initList : true;

	    $page.sort = !options.defaultSort ? 'id' : options.defaultSort;
	    $page.order = !options.defaultOrder ? 'ASC' : options.defaultOrder;
	    $scope.selectedValue = queryOptions[0].displayName;
	    $scope.queryBy = queryBy = queryOptions[0].field;
	    $scope.queryKey = queryKey;
	    $scope.$page = $page;
	    $scope.selectItems = $selectResolve ? $selectResolve.selectItems ? $selectResolve.selectItems : [] : [];
	    $scope.queryOptions = queryOptions;
	    $scope.searchRegion = searchRegion;
	    $scope.searchUserRegion = searchUserRegion;
	    $scope.currentQueryParam = options.currentQueryParam ? options.currentQueryParam : {};
	    $scope.multiSelect = multiSelect;

	    $scope.queryTaleOptions = options.queryTaleOptions ? options.queryTaleOptions : [];

	    $scope.queryByParam = function (queryBy, queryKey, config) {
	        if (config.displayType === 'select') {
	            /**
	             * 下拉选择 处理方式
	             */
	            _.each(config.queryParams, function (param, index) {
	                delete $scope.currentQueryParam[param.queryBy];
	            });
	            /**
	             * queryKey为undefined则清空组件当前的查询条件
	             */
	            if (queryKey !== 'undefined' && typeof queryKey !== "undefined") {
	                $scope.currentQueryParam[queryBy] = queryKey;
	            }
	        } else if (config.displayType === 'singleCheck') {
	            /**
	             *  单选是否 处理方式
	             */
	            if (typeof queryKey !== "undefined") {
	                $scope.currentQueryParam[queryBy] = queryKey;
	            } else {
	                delete $scope.currentQueryParam[queryBy];
	            }
	        }
	        $scope.innerQuery();
	    };

	    function orderPathFilter() {
	        /**
	         * //TODO 需要转移到m2-config里
	         * @type {string[]}
	         */
	        var apiBaseUrlArray = ['/services/order', '/services/saleOrder', '/services/designOrder', '/services/factoryOrder', '/services/financialOrder', '/services/financialRecord', '/services/financialSupplement', '/services/changeOrder', '/services/purchases', '/services/inStorage', '/services/outStorage', '/services/installOrder'];

	        var urls = _.reject(apiBaseUrlArray, function (url) {
	            return apiBaseUrl.indexOf(url) === 0;
	        });

	        return urls.length < apiBaseUrlArray.length;
	    }

	    if (orderPathFilter()) {
	        $scope.isGetBySelf = lwj.appScopeMain.isGetBySelf;
	    }

	    $scope.viewBaseUrl = viewBaseUrl;
	    /*列表排序组*/
	    $scope.orderKeys = options.orderKeys;

	    $scope.fixedListLimit = options.fixedListLimit;

	    $scope.tdColspan = options.tdColspan;

	    if ($selectModalInstance) {
	        $page.limit = 10;
	    }

	    /** 获取APIurl参数方法 **/
	    ths.getUrl = function (bUrl, method, params) {
	        var baseUrl = [bUrl];
	        baseUrl.push(method);
	        if (typeof params === 'string') {
	            baseUrl.push('/');
	            baseUrl.push('params');
	            return baseUrl.join('');
	        }
	        if (params instanceof Array) {
	            for (var i = 0; i < params.length; i++) {
	                baseUrl.push('/');
	                baseUrl.push(params[i]);
	            }
	        }
	        return baseUrl.join('');
	    };

	    /** 获取查询结果*/
	    $scope.list = function (url) {
	        if (!$scope.fixedListLimit) {
	            $scope.fixedListLimit = {};
	        }
	        if ($scope.searchRegion && $scope.searchRegion.length > 0) {
	            $scope.fixedListLimit.searchRegion = $scope.searchRegion;
	        } else {
	            delete $scope.fixedListLimit['searchRegion'];
	        }
	        if ($scope.searchUserRegion && $scope.searchUserRegion.length > 0) {
	            $scope.fixedListLimit.searchUserRegion = $scope.searchUserRegion;
	        } else {
	            delete $scope.fixedListLimit['searchUserRegion'];
	        }
	        var u = typeof url !== 'undefined' ? url : ths.getUrl(apiBaseUrl, options.queryInterfaceName ? options.queryInterfaceName : 'list', [$page.limit, $page.page, $page.sort, $page.order, 'complex']);
	        if ($scope.isGetBySelf === true || $scope.getBySelf) {
	            $scope.fixedListLimit.getBySelf = $scope.isGetBySelf || $scope.getBySelf;
	            $scope.fixedListLimit.isGetBySelf = $scope.fixedListLimit.getBySelf;
	        } else {
	            delete $scope.fixedListLimit['getBySelf'];
	            delete $scope.fixedListLimit['isGetBySelf'];
	        }
	        $scope.queryComplex({}, u);
	    };

	    $scope.queryComplex = function (event, url) {
	        var queryTarget = $scope.queryTarget || event.target;
	        if (!$scope.queryTarget) {
	            $scope.queryTarget = queryTarget;
	        }
	        /**
	         * 基于模版的，所以能够用parent('div').parent('form');
	         */
	        var searchParam = {};
	        if (queryTarget) {
	            var searchForm = $(queryTarget).parent('div').parent('form');
	            var inputs = $(searchForm[0]).find('input');
	            var selects = $(searchForm[0]).find('select');

	            _.each(inputs, function (value, index) {
	                var type = $(value).attr('type');
	                var fName = $(value).attr('name');
	                var fValue = $(value).val();
	                if (_.isEmpty(fValue)) {
	                    return;
	                }
	                if (fName.endsWith('TimeStart') > 0 || fName.endsWith('TimeEnd') > 0) {

	                    var date = new Date(fValue);
	                    fValue = date.getTime();
	                    fValue += date.getTimezoneOffset() * 60000;

	                    if (fName.endsWith('TimeEnd') > 0) {
	                        fValue += 24 * 3600 * 1000 - 1;
	                    }
	                }

	                if (type == 'checkbox') {
	                    if (!value.checked) {
	                        return true;
	                    }

	                    if (_.isUndefined(searchParam[fName])) {
	                        searchParam[fName] = [];
	                    }
	                    searchParam[fName].push(fValue);
	                } else {
	                    searchParam[fName] = fValue;
	                }
	            });

	            /**
	             * 查询条件为下拉框的处理
	             */
	            _.each(selects, function (value, index) {
	                var fName = $(value).attr('name');
	                if (!fName) {
	                    return;
	                }
	                var fValue = $(value).val();
	                if (!fValue || fValue.indexOf('undefined') >= 0) {
	                    return;
	                }
	                var split = fValue.split(':');
	                fValue = split[1];
	                if (fName === 'orderStatusSelect') {
	                    fName = fValue.split('.')[0];
	                    fValue = fValue.split('.')[1];
	                }
	                if (split[0] === 'number') {
	                    fValue = parseInt(fValue);
	                }
	                searchParam[fName] = fValue;
	            });
	        } else if (event.searchParam) {
	            searchParam = event.searchParam;
	        }

	        if ($scope.fixedListLimit && !_.isEmpty($scope.fixedListLimit)) {
	            searchParam = _.extend(angular.copy($scope.fixedListLimit), searchParam);
	        }
	        if ($scope.currentQueryParam && !_.isEmpty($scope.currentQueryParam)) {
	            searchParam = _.extend(searchParam, $scope.currentQueryParam);
	        }
	        $scope.sortOrder = $page.order === 'ASC' ? $page.sort : '-' + $page.sort;
	        var u = url || ths.getUrl(apiBaseUrl, queryInterfaceName ? queryInterfaceName : 'list', [$page.limit, $page.page, $page.sort, $page.order, 'complex']);

	        $http({
	            method: gridApiMethod,
	            url: u,
	            data: searchParam
	        }).success(function (data) {
	            delete $scope[pageDataBindingName];
	            $scope[pageDataBindingName] = data;
	            $scope.firstIndexOfPage = ($page.page - 1) * $page.limit + 1;
	            $page.totalCount = $scope[pageDataBindingName].totalCount;
	            $page.totalPages = $scope[pageDataBindingName].totalPages;
	            $page.slider = $scope[pageDataBindingName].slider;
	            if (typeof options.listCallback === 'function') {
	                options.listCallback(data);
	            }
	        });
	    };

	    /**  简单查询 */
	    $scope.query = function (q, qk) {
	        /**
	         * 如果是一个新的查询 页面跳转到第一页
	         */
	        if (q !== queryBy || qk !== queryKey) {
	            $page.page = 1;
	        }

	        queryBy = q || '';
	        queryKey = qk;

	        queryBy = queryBy.endsWith('Time') ? queryBy + 'Start' : queryBy;

	        if ($scope.queryTarget) {
	            $scope.queryComplex();
	        } else {
	            if (!queryKey || $.trim(queryKey) === '') {
	                //没有查询条件
	                $scope.list(ths.getUrl(apiBaseUrl, queryInterfaceName ? queryInterfaceName : 'list', [$page.limit, $page.page, $page.sort, $page.order, 'complex']));
	            } else {
	                var param = {};
	                param[queryBy] = queryKey;
	                $scope.queryComplex({
	                    'searchParam': param
	                });
	            }
	        }
	    };
	    $scope.innerQuery = function () {
	        $scope.query($scope.queryBy, $scope.queryKey);
	    };
	    $scope.getQueryBy = function () {
	        return queryBy;
	    };
	    $scope.getQueryKey = function () {
	        return queryKey;
	    };

	    /**  排序*/
	    $scope.orderBy = function (sort, order) {
	        $page.sort = sort.charAt(0) === '-' ? sort.substring(1, sort.length) : sort;
	        $page.order = order;
	        $scope.innerQuery();
	    };
	    $scope.goToPage = function ($event) {
	        var val = parseInt($($event.target).val());
	        if (val && $event.keyCode === 13 && angular.isNumber(val)) {
	            $scope.pageTo(val);
	        }
	    };
	    /** 切换页码 */
	    $scope.pageTo = function (pageNum) {
	        if ($page.totalPages < pageNum) {
	            return;
	        }
	        $page.page = pageNum;
	        $scope.innerQuery();
	    };

	    /** 每页显示 */
	    $scope.perPage = function () {
	        $page.page = Math.floor($scope.firstIndexOfPage / $page.limit) + 1;
	        $scope.innerQuery();
	    };
	    /** 查看详情 */
	    $scope.toggleRowDetail = function (index) {
	        if ($scope.showIndex === index) {
	            $scope.showIndex = -1;
	        } else {
	            $scope.showIndex = index;
	        }
	    };
	    /**  增*/
	    $scope.create = function (url) {
	        if (url) {
	            $location.path(url);
	            return;
	        }
	        $location.path(viewBaseUrl + 'create');
	    };
	    /**  改*/
	    $scope.update = function (id) {
	        $location.path(viewBaseUrl + 'update/' + id);
	    };
	    /** 详情*/
	    $scope.detail = function (id) {
	        $location.path(viewBaseUrl + 'detail/' + id);
	    };
	    /**  删*/
	    $scope.remove = function (id, version) {
	        modalInstance = $modal.open({
	            templateUrl: 'dialog.delete.confirm.html',
	            controller: 'dialog.simple.ctrl',
	            scope: $scope.$new(true),
	            backdrop: true,
	            resolve: {
	                resolve: function resolve() {
	                    return id;
	                }
	            }
	        }).result.then(function (id) {
	            $http({
	                method: 'post',
	                url: ths.getUrl(apiBaseUrl, 'delete', [id, version])
	            }).success(function (data) {
	                var msg = data.messages;
	                if (data.code > 0) {
	                    if (msg.serverInternal) {
	                        lwj.openErrorAlertDialog($scope, $modal, "服务器返回错误", msg.serverInternal.$srvmessage);
	                    }
	                } else {
	                    $scope.innerQuery();
	                }
	            });
	        });
	    };

	    $scope.selectAll = function (event) {
	        if (_.isUndefined($scope[pageDataBindingName])) {
	            return;
	        }
	        $scope.selectItems = [];
	        if (event.target.checked !== false) {
	            _.each($scope[pageDataBindingName].items, function (item, index) {
	                $scope.selectItems.push(item);
	            });
	        }
	    };

	    $scope.isSelectedAllItem = function () {
	        if (_.isUndefined($scope[pageDataBindingName])) {
	            return;
	        }
	        _.each($scope[pageDataBindingName].items, function (item, index) {
	            $scope.isSelectedItem(item);
	        });
	    };

	    $scope.select = function (obj, evn) {

	        if (evn.target.checked === false) {
	            $scope.selectItems = _.reject($scope.selectItems, function (item) {
	                return item['id'] === obj['id'];
	            });
	        } else {
	            if (multiSelect) {
	                $scope.selectItems = _.reject($scope.selectItems, function (item) {
	                    return item['id'] === obj['id'];
	                });
	                $scope.selectItems.push(obj);
	            } else {
	                $scope.selectItems[0] = obj;
	                if (lastSelectTarget) {
	                    lastSelectTarget.checked = false;
	                }
	            }
	        }
	        lastSelectTarget = evn.target;
	    };

	    $scope.isSelectedItem = function (obj) {
	        return _.find($scope.selectItems, {
	            id: obj['id']
	        });
	    };

	    $scope.ok = function () {
	        $selectModalInstance.close($scope.selectItems);
	    };
	    $scope.cancel = function () {
	        $selectModalInstance.dismiss("cancel");
	    };

	    if (options.noInitList) {
	        return;
	    }

	    if ((!modalInstance || options.selectInitList) && initList) {
	        $scope.list();
	    }
	};

	/***
	 *
	 *     封装  订单的增删改查的操作 */
	var updateFunc = function updateFunc($scope, $http, $location, options, $modal, $selectModalInstance) {

	    var
	    /**
	     * 表单数据绑定的名称
	     * @type {options.dataName|*}
	     */
	    dataName = options.dataName,


	    /**
	     * 编辑页面，需要展示其他列表的内容
	     */
	    viewId = !options.viewId ? '' : options.viewId,


	    /**
	     * [viewName description] 要暂时的view数据名称
	     * @type {[type]}
	     */
	    viewDataName = options.viewDataName,


	    /**
	     * 如果是修改，一般都需要数据的id，
	     * 如果是新建，则id为空
	     */
	    id = !options.id ? '' : options.id,


	    /**
	     * 根据url参数是否传递id值判断是更新还是创建实体
	     * @type {boolean}
	     */
	    isUpdate = id !== '',


	    /**
	     * 表单的名称
	     * @type {options.formName|*}
	     */
	    formName = options.formName ? options.formName : options.dataName + "Form",


	    /**
	     * 需要提交的字段
	     */
	    formFields = options.formFields,


	    /**
	     * API的基地址
	     * 需要按照后台的规范进行编写
	     * GET  /entity/list
	     * PUT  /entity/create
	     * PUT  /entity/update
	     * POST /entity/delete
	     */
	    apiBaseUrl = options.apiBaseUrl.charAt(options.apiBaseUrl.length - 1) === '/' ? options.apiBaseUrl : options.apiBaseUrl + '/',


	    /**
	     * 根据isUpdate生成表单提交地址
	     */
	    submitUrl,


	    /**
	     * 一份原始数据的拷贝，用于reset
	     * @type {{}}
	     */
	    master = {},
	        emptyDetail = options.emptyDetail,


	    /**
	     * 用于弹出对话框
	     *返回更新后的
	     */
	    resultItem = {},


	    /**
	     *自定义list查询接口名，如果未定义 使用默认接口名"list"
	     */
	    detailInterfaceName = options.detailInterfaceName,


	    /**
	     * api的method
	     */
	    viewApiMethod = options.viewApiMethod ? options.viewApiMethod : 'GET',
	        updateApiMethod = options.updateApiMethod ? options.updateApiMethod : 'POST',
	        detailApiMethod = options.detailApiMethod ? options.detailApiMethod : 'POST';

	    var _status = $location.path().match(/\/\d*\/(update|create)/g);
	    if (_status !== null) {
	        $scope.status = parseInt(_status[0].match(/\d*/g)[1]);
	    }

	    $scope.submiting = false;

	    $scope.resultItem = resultItem;

	    $scope.openDatePicker = lwj.openDatePicker;

	    $scope.reset = function () {
	        angular.copy(master, $scope[dataName]);
	    };

	    if (typeof options.appendProgress === 'function') {
	        options.appendProgress($scope, $http, options);
	    }

	    $scope.isUnchanged = function (module) {
	        return angular.equals(module, master);
	    };

	    $scope.setFormDirty = function () {
	        if ($scope[formName]) {
	            $scope[formName].$setDirty();
	        }
	    };

	    $scope.canSubmit = function () {
	        if (!$scope[formName]) {
	            return false;
	        }
	        //            console.log({'valid': $scope[formName].$valid,
	        //                        'submiting': $scope.submiting,
	        //                        'changed': !$scope.isUnchanged($scope[dataName]),
	        //                        '$dirty': $scope[formName].$dirty});
	        return $scope[formName].$valid && !$scope.submiting && !$scope.isUnchanged($scope[dataName]) && $scope[formName].$dirty;
	    };

	    $scope.detail = function () {
	        if (emptyDetail) {
	            $scope[dataName] = {};
	            angular.copy({}, master);
	            return;
	        }

	        $http({
	            method: detailApiMethod,
	            url: apiBaseUrl + (detailInterfaceName ? detailInterfaceName : "detail") + "/" + id
	        }).success(function (_data) {
	            var data = _data.result ? _data.result : _data;
	            // 先赋值给scope
	            $scope[dataName] = data;

	            if (typeof options.formatDetailData === 'function') {
	                options.formatDetailData(data);
	            }

	            data = _.omit(data, function (value, key, object) {
	                if (key.endsWith('Time')) {
	                    return !value || value === '0' || value === 0 || value < 0 || value === '1970-01-01';
	                } else {
	                    return false;
	                }
	            });

	            if (typeof data.status !== 'undefined') {
	                if ($scope.status != parseInt(data.status)) {
	                    var path = $location.path();
	                    path = path.replace(/\/\d{1,2}\//g, '/' + parseInt(data.status) + '/');
	                    $location.path(path).replace();
	                }
	            }

	            angular.copy(data, master);
	        });
	    };

	    var getViewData = function getViewData(viewId, viewDataName) {
	        $http({
	            method: viewApiMethod,
	            url: options.viewDataUrl + (detailInterfaceName ? detailInterfaceName : "detail") + "/" + viewId
	        }).success(function (_data) {
	            var data = _data.result;
	            if (typeof options.initViewData === 'function') {
	                options.initViewData(data);
	            }

	            data = _.omit(data, function (value, key, object) {
	                if (key.endsWith('Time')) {
	                    return !value || value === '0' || value === 0 || value < 0 || value === '1970-01-01';
	                } else {
	                    return false;
	                }
	            });

	            if (typeof data.status !== 'undefined') {
	                if ($scope.status != parseInt(data.status)) {
	                    var path = $location.path();
	                    path = path.replace(/\/\d{1,2}\//g, '/' + parseInt(data.status) + '/');
	                    $location.path(path).replace();
	                }
	            }
	            $scope[viewDataName] = data;
	        });
	    };

	    if (viewId) {
	        getViewData(viewId, viewDataName);
	    }

	    if (isUpdate) {
	        $scope.isUpdate = true;
	        $scope.detail();
	        if (typeof options.updateApiBaseUrl === 'function') {
	            submitUrl = options.updateApiBaseUrl() + "update";
	        } else {
	            submitUrl = apiBaseUrl + "update";
	        }
	    } else {
	        $scope.isUpdate = false;
	        $scope[dataName] = {};

	        if (typeof options.formatDetailData === 'function') {
	            options.formatDetailData($scope[dataName]);
	        }

	        // 添加一个初始化表单值得方法
	        if (typeof options.initFormData === 'function') {
	            options.initFormData($scope[dataName]);
	        }

	        angular.copy($scope[dataName], master);

	        if (typeof options.createApiUrl === 'function') {
	            submitUrl = options.createApiUrl();
	        } else {
	            if (typeof options.createApiBaseUrl === 'function') {
	                submitUrl = options.createApiBaseUrl() + "create";
	            } else {
	                submitUrl = apiBaseUrl + "create";
	            }
	        }
	    }

	    /**
	     * 如果返回的是Success则刷新该页面；
	     * 一般的如果返回的都是更新实体的ID
	     * @param data
	     */
	    $scope.onSuccessResultStringHandler = function (data) {
	        if (data.result === "Success") {
	            $location.path($location.path() + "/").replace();
	        } else {
	            if (typeof options.getRediectUrl === 'function') {
	                updateUrl = options.getRediectUrl();
	            } else {
	                /*去更新页面*/
	                var updateUrl = $location.path().replace(/create/g, 'update');
	                var lastChar = updateUrl.charAt(updateUrl.length - 1);
	                updateUrl = lastChar === '/' ? updateUrl : updateUrl + '/';
	                updateUrl = updateUrl + data.result;
	            }
	            $location.path(updateUrl).replace();
	        }
	    };

	    $scope.onSuccessResultObjectHasIdHandler = function (data) {
	        if ($selectModalInstance) {
	            angular.copy(data['result'], resultItem);
	            $scope.ok();
	        } else {
	            $scope.onSuccessResultStringHandler({
	                result: data.result['id']
	            });
	        }
	    };

	    $scope.ok = function (obj) {
	        if (obj) {
	            $selectModalInstance.close(obj);
	        } else {
	            $selectModalInstance.close(resultItem);
	        }
	    };
	    $scope.cancel = function () {
	        $selectModalInstance.dismiss("cancel");
	    };
	    $scope.checkPermission = function () {
	        var checked = false;
	        _.each(arguments, function (val) {
	            if (lwj.appScopeMain.checkPermission(val)) {
	                checked = true;
	            }
	        });
	        return checked;
	    };
	    /**
	     *提交修改或添加
	     **/
	    $scope.submit = function (formData) {

	        var submitData = {};

	        $scope.submiting = true;

	        var formatedFormData = angular.copy(formData);

	        if (typeof options.beforeSubmit === 'function') {
	            var can = options.beforeSubmit(formatedFormData);
	            if (!can) {
	                $scope.submiting = false;
	                return;
	            }
	        }

	        if (typeof options.formatSubmitData === 'function') {
	            options.formatSubmitData(formatedFormData);
	        }

	        _.each(formFields, function (value) {
	            var theVal = formatedFormData[value];
	            if (!_.isNaN(theVal) && !_.isNull(theVal) && !_.isUndefined(theVal)) {
	                submitData[value] = theVal;
	            }
	        });

	        if (_.isEmpty(submitData)) {
	            return;
	        }

	        if (typeof options.getSubmitUrl === 'function') {
	            submitUrl = options.getSubmitUrl(submitUrl);
	        }
	        if (submitUrl && submitUrl.indexOf('update') > -1 && submitUrl.indexOf('?status=') < 0) {
	            //submitUrl += "?status=" + $scope.status;
	        }
	        $http({
	            method: updateApiMethod,
	            url: submitUrl,
	            data: submitData,
	            headers: {
	                'Content-Type': 'application/json;charset=UTF-8'
	            }
	        }).success(function (data) {
	            if (data.code > 0) {
	                $scope.submiting = false;
	                var form = $scope[formName];
	                /**
	                 * 后台服务专门为angularjs返回的结果对象
	                 * 便于在页面上呈现
	                 * 但必须给每个input一个name
	                 */
	                angular.forEach(data.messages, function (value, key) {
	                    if (!form || !form[key]) {} else {
	                        form[key].$valid = value.$valid;
	                        form[key].$invalid = value.$invalid;
	                        form[key].$errorCode = value.$errorCode;
	                        form[key].$setValidity('$srverror', value.$srverror);
	                        form[key].$srvmessage = value.$srvmessage;
	                        /*纪录已经有过的错误*/
	                        if (!form[key].$errorValues) {
	                            form[key].$errorValues = [];
	                        }
	                        form[key].$errorValues.push(formData[key]);
	                    }
	                });
	                /**
	                 * 服务器错误回调函数
	                 */
	                if (typeof options.onError === 'function') {
	                    options.onError($scope, data);
	                } else {
	                    lwj.serverErrorAlertFunc($scope, $modal, data);
	                    if (typeof options.onErrorAlert === 'function') {
	                        options.onErrorAlert($scope, data);
	                    }
	                }
	            } else {
	                if (typeof submitData.version !== 'undefined') {
	                    submitData.version++;
	                }
	                /**
	                 * 服务调用成功的回调函数
	                 */
	                if (typeof options.onSuccess === 'function') {
	                    options.onSuccess($scope, data, submitData);
	                } else {
	                    if (_.isString(data.result)) {
	                        $scope.onSuccessResultStringHandler(data);
	                    } else if (_.isEmpty(data.result) || _.isNaN(data.result) || _.isNull(data.result) || _.isUndefined(data.result)) {
	                        lwj.openSuccessAlertDialog($scope, $modal, '操作成功', '服务器没有更多返回信息');
	                    } else if (_.isObject(data.result) && _.isString(data.result['id'])) {
	                        $scope.onSuccessResultObjectHasIdHandler(data);
	                    } else {
	                        //TODO:
	                        lwj.openSuccessAlertDialog($scope, $modal, '操作成功', angular.toJson(data.result));
	                    }
	                }
	            }
	        }).error(function (request) {
	            /**
	             * 服务器异常，通常都是 404，403，500
	             * @type {boolean}
	             */
	            $scope.submiting = false;
	            if (typeof options.onException === 'function') {
	                options.onException(scope, request);
	            } else {
	                console.log("server return exception:" + request);
	            }
	        });
	        //让服务器返回的异常能偶有机会得到刷新
	        var form = $scope[formName];
	        _.each(formFields, function (field) {
	            if (typeof $scope[dataName][field] !== 'undefined') {
	                var exp = dataName + '.' + field;
	                $scope.$watch(exp, function (newVal, oldVal) {
	                    if (!form[field]) {
	                        return;
	                    }
	                    if ($.inArray(newVal, form[field].$errorValues) >= 0) {
	                        //还有错
	                        form[field].$setValidity('$srverror', false);
	                        return;
	                    }
	                    if (!$scope[dataName] || !$scope[dataName][field] || newVal !== oldVal) {
	                        if (typeof form[field].$error.$srverror !== 'undefined') {
	                            form[field].$setValidity('$srverror', true);
	                        }
	                    }
	                });
	            }
	        });
	    };
	};

	exports.default = { gridFunc: gridFunc, updateFunc: updateFunc };
	exports.gridFunc = gridFunc;
	exports.updateFunc = updateFunc;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 *	@tql 2017/12/08
	 *	首页服务
	 */
	exports.default = ['module.home.services', ["$http", function ($http) {
	  return {};
	}]];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _list = __webpack_require__(38);

	var _list2 = _interopRequireDefault(_list);

	var _update = __webpack_require__(41);

	var _update2 = _interopRequireDefault(_update);

	var _unit = __webpack_require__(42);

	var _unit2 = _interopRequireDefault(_unit);

	var _routes = __webpack_require__(43);

	var _routes2 = _interopRequireDefault(_routes);

	var _Redux = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /*
	                                                                                                                                                                                                     *	@tql 2017/12/08
	                                                                                                                                                                                                     *	这里是当前页面的控制器与服务集成
	                                                                                                                                                                                                     */


	exports.default = function (lwj) {
		var _app$controller$contr, _app$controller;

		var app = (0, _Redux.readRedux)({
			type: "APP"
		});
		return (_app$controller$contr = (_app$controller = app.controller.apply(app, _toConsumableArray(_list2.default))).controller.apply(_app$controller, _toConsumableArray(_update2.default))).factory.apply(_app$controller$contr, _toConsumableArray(_unit2.default));
		(0, _routes2.default)();
	};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(39);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import func, {gridFunc,updateFunc} from '@/Services/func';
	console.log(_index2.default); /*
	                               *	@tql 2017/12/08
	                               *	首页控制器
	                               */
	exports.default = ["module.unit.grid.controler", ['$scope', "$http", "$ionicLoading", "$location", function ($scope, $http, $ionicLoading, $location, pageNationConfig) {
	  var queryItems = {
	    'name': {
	      field: 'name',
	      displayName: '单位名称'
	    },
	    'unit': {
	      field: 'unit',
	      displayName: '单位符号'
	    },
	    'unit_type': {
	      field: 'unit_type',
	      displayName: '单位类型',
	      type: "select",
	      selectOptions: [{
	        name: '全部', value: undefined
	      }, {
	        name: '整数', value: 1
	      }, {
	        name: '小数', value: 2
	      }]
	    }
	  };

	  var defaultOptions = {
	    pageDataBindingName: 'data',
	    viewBaseUrl: "commodity/unit",
	    apiBaseUrl: "http://shopadmin-local.andaren.com/api/commodity/unit",
	    defaultSort: 'created_at',
	    defaultOrder: 'DESC',
	    queryTaleOptions: [[queryItems['name'], queryItems['unit'], queryItems['unit_type']]],
	    fixedListLimit: {},
	    gridApiMethod: 'GET',
	    listCallback: function listCallback(data) {}
	  };

	  var gridOptions = angular.copy(defaultOptions);
	  gridOptions.viewBaseUrl = '/product';
	  gridOptions.pageDataBindingName = 'productList';

	  gridOptions.queryTaleOptions = [[queryItems['productName']]];

	  func.gridFunc($scope, $http, $location, $ionicLoading, pageNationConfig, gridOptions, null, {
	    'multiSelect': true
	  });

	  // 续集api
	  var ServiceApi = _index2.default.phpApi.API.com.php.home.IndexController($http);
	  console.log(ServiceApi, "续集API成功，开始发送请求！");
	  $ionicLoading.show({
	    template: '续集API成功，开始发送请求！'
	  });
	  ServiceApi.getStoreDetail(1, function (data) {
	    console.log("请求成功！");
	    $ionicLoading.hide();
	  }, function (data) {
	    console.log("请求失败！");
	    $ionicLoading.hide();
	  });
	  $scope.promption = "unit";
	}]];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ServicePhpApi = exports.Constant = undefined;

	var _lwjServicesPhpApi = __webpack_require__(31);

	var _lwjServicesPhpApi2 = _interopRequireDefault(_lwjServicesPhpApi);

	var _constant = __webpack_require__(40);

	var _constant2 = _interopRequireDefault(_constant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		phpApi: _lwjServicesPhpApi2.default,
		constant: _constant2.default
	};
	exports.Constant = _constant2.default;
	exports.ServicePhpApi = _lwjServicesPhpApi2.default;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*
	 * 列表分页配置
	 * 分页配置	
	*/
	exports.default = function ($app) {
		$app.constant('pageNationConfig', {
			page: 1,
			limit: 30,
			firstRecord: 1,
			sort: 'id',
			order: 'ASC',
			limitArray: [10, 20, 30, 50]
		});
	};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lwjServicesPhpApi = __webpack_require__(31);

	var _lwjServicesPhpApi2 = _interopRequireDefault(_lwjServicesPhpApi);

	var _func = __webpack_require__(35);

	var _func2 = _interopRequireDefault(_func);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 *	@tql 2017/12/08
	 *	首页控制器
	 */
	exports.default = ["module.unit.update.controler", ['$scope', "$http", "$ionicLoading", "$location", "$routeParams", function ($scope, $http, $ionicLoading, $location, pageNationConfig, $routeParams) {

	    $scope.unitTypeArr = [{ "name": "请选择", "value": undefined }, { "name": "整数", "value": "1" }, { "name": "小数", "value": "2" }];
	    var editOptions = {
	        id: $routeParams.id,
	        dataName: "item",
	        formName: "formData",
	        formFields: ["name", "unit", "unit_type"],
	        apiBaseUrl: defaultOptions.apiBaseUrl,
	        formatSubmitData: function formatSubmitData(data) {
	            data = data || {};
	        },
	        formatDetailData: function formatDetailData(data) {
	            data = data || {};
	        },
	        onSuccess: function onSuccess($scope, data, submitData) {
	            $location.path('commodity/unit/grid');
	            lwj.openSuccessAlertDialog($scope, $modal, '操作提示', '操作成功');
	        }
	    };
	    _func2.default.updateFunc($scope, $http, $location, editOptions, $modal);
	}]];

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 *	@tql 2017/12/08
	 *	首页服务
	 */
	exports.default = ['module.home.services', ["$http", function ($http) {
	  return {};
	}]];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _form = __webpack_require__(44);

	var _form2 = _interopRequireDefault(_form);

	var _grid = __webpack_require__(45);

	var _grid2 = _interopRequireDefault(_grid);

	var _Redux = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var state = [['unit_grid', {
	  url: '/unit/grid',
	  template: _grid2.default,
	  controller: 'module.unit.grid.controler'
	}], ['unit_update', {
	  url: '/unit/update/:id',
	  template: _form2.default,
	  controller: 'module.unit.update.controler'
	}]];

	// 存储路由数据
	exports.default = (0, _Redux.getRedux)(state, { type: "ROUTES" });

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = "<ion-view title=\"'Home'\">\r\n    <!--头部-->\r\n    <ion-header-bar align-title=\"center\" class=\"bar-positive\">\r\n        <h1 class=\"title  title-center\">home!</h1>\r\n        <!--<div class=\"buttons\">-->\r\n            <button class=\"button\">form</button>\r\n        <!--</div>-->\r\n    </ion-header-bar>\r\n\r\n    <!--中间内容-->\r\n    <ion-content>\r\n        <!-- 页面的内容 -->\r\n        <br><br><br><br><br>\r\n        <a class=\"button icon icon-right ion-chevron-right\" href=\"#/news\">{{ promption }}</a>\r\n    </ion-content>\r\n    <ion-footer-bar align-title=\"center\" class=\"bar-positive\">\r\n        <h1 class=\"title  title-center\">底部!</h1>\r\n    </ion-footer-bar>\r\n</ion-view>";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = "<ion-view title=\"'Home'\">\r\n    <!--头部-->\r\n    <ion-header-bar align-title=\"center\" class=\"bar-positive\">\r\n        <h1 class=\"title  title-center\">home!</h1>\r\n        <!--<div class=\"buttons\">-->\r\n            <button class=\"button\">下一页</button>\r\n        <!--</div>-->\r\n    </ion-header-bar>\r\n\r\n    <!--中间内容-->\r\n    <ion-content>\r\n        <!-- 页面的内容 -->\r\n        <br><br><br><br><br>\r\n        <a class=\"button icon icon-right ion-chevron-right\" href=\"#/news\">{{ promption }}</a>\r\n    </ion-content>\r\n    <ion-footer-bar align-title=\"center\" class=\"bar-positive\">\r\n        <h1 class=\"title  title-center\">底部!</h1>\r\n    </ion-footer-bar>\r\n</ion-view>";

/***/ })
/******/ ]);