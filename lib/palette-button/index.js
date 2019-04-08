module.exports =
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 227);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ },

/***/ 115:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(115)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(185),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ },

/***/ 185:
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mint-palette-button",
    class: {
      expand: _vm.expanded, 'mint-palette-button-active': _vm.transforming
    },
    on: {
      "animationend": _vm.onMainAnimationEnd,
      "webkitAnimationEnd": _vm.onMainAnimationEnd,
      "mozAnimationEnd": _vm.onMainAnimationEnd
    }
  }, [_c('div', {
    staticClass: "mint-sub-button-container"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "mint-main-button",
    style: (_vm.mainButtonStyle),
    on: {
      "touchstart": _vm.toggle
    }
  }, [_vm._v("\n    " + _vm._s(_vm.content) + "\n  ")])])
},staticRenderFns: []}

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(35);


/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_palette_button_vue__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_palette_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_palette_button_vue__);
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(exports, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__src_palette_button_vue___default.a; });



/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  name: 'mt-palette-button',

  data: function() {
    return {
      transforming: false,    // 是否正在执行动画
      expanded: false           // 是否已经展开子按钮
    };
  },

  props: {
    content: {
      type: String,
      default: ''
    },

    offset: {
      type: Number,           // 扇面偏移角，默认是四分之π，配合默认方向lt
      default: Math.PI / 4
    },

    direction: {
      type: String,
      default: 'lt'           // lt t rt this.radius rb b lb l 取值有8个方向，左上、上、右上、右、右下、下、左下、左，默认为左上
    },

    radius: {
      type: Number,
      default: 90
    },

    mainButtonStyle: {
      type: String,           // 应用到 mint-main-button 上的 class
      default: ''
    }
  },
  methods: {
    toggle: function toggle(event) {
      if (!this.transforming) {
        if (this.expanded) {
          this.collapse(event);
        } else {
          this.expand(event);
        }
      }
    },

    onMainAnimationEnd: function onMainAnimationEnd(event) {
      this.transforming = false;
      this.$emit('expanded');
    },

    expand: function expand(event) {
      this.expanded = true;
      this.transforming = true;
      this.$emit('expand', event);
    },

    collapse: function collapse(event) {
      this.expanded = false;
      this.$emit('collapse', event);
    }
  },
  mounted: function mounted() {
    var this$1 = this;

    this.slotChildren = [];
    for (var i = 0; i < this.$slots.default.length; i++) {
      if (this$1.$slots.default[i].elm.nodeType !== 3) {
        this$1.slotChildren.push(this$1.$slots.default[i]);
      }
    }

    var css = '';
    var direction_arc = Math.PI * (3 + Math.max(['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l'].indexOf(this.direction), 0)) / 4;
    for (var i$1 = 0; i$1 < this.slotChildren.length; i$1++) {
      var arc = (Math.PI - this$1.offset * 2) / (this$1.slotChildren.length - 1) * i$1 + this$1.offset + direction_arc;
      var x = (Math.cos(arc) * this$1.radius).toFixed(2);
      var y = (Math.sin(arc) * this$1.radius).toFixed(2);
      var item_css = '.expand .palette-button-' + this$1._uid + '-sub-' + i$1 + '{transform:translate(' + x + 'px,' + y + 'px) rotate(720deg);transition-delay:' + 0.03 * i$1 + 's}';
      css += item_css;

      this$1.slotChildren[i$1].elm.className += (' palette-button-' + this$1._uid + '-sub-' + i$1);
    }

    this.styleNode = document.createElement('style');
    this.styleNode.type = 'text/css';
    this.styleNode.rel = 'stylesheet';
    this.styleNode.title = 'palette button style';
    this.styleNode.appendChild(document.createTextNode(css));
    document.getElementsByTagName('head')[0].appendChild(this.styleNode);
  },

  destroyed: function destroyed() {
    if (this.styleNode) {
      this.styleNode.parentNode.removeChild(this.styleNode);
    }
  }
};


/***/ }

/******/ });