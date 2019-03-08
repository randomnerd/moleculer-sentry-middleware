(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('crypto'), require('fs'), require('path'), require('http'), require('net'), require('tls'), require('url'), require('https'), require('util'), require('events'), require('tty'), require('os'), require('domain'), require('module'), require('console')) :
	typeof define === 'function' && define.amd ? define(['exports', 'crypto', 'fs', 'path', 'http', 'net', 'tls', 'url', 'https', 'util', 'events', 'tty', 'os', 'domain', 'module', 'console'], factory) :
	(global = global || self, factory(global.npmPackageES6Boilerplate = {}, global.crypto, global.fs$1, global.path$1, global.http$1, global.net, global.tls, global.url, global.https, global.util, global.events, global.tty, global.os, global.domain, global.module, global.console$2));
}(this, function (exports, crypto, fs$1, path$1, http$1, net, tls, url, https, util, events, tty, os, domain, module, console$2) { 'use strict';

	crypto = crypto && crypto.hasOwnProperty('default') ? crypto['default'] : crypto;
	fs$1 = fs$1 && fs$1.hasOwnProperty('default') ? fs$1['default'] : fs$1;
	path$1 = path$1 && path$1.hasOwnProperty('default') ? path$1['default'] : path$1;
	http$1 = http$1 && http$1.hasOwnProperty('default') ? http$1['default'] : http$1;
	net = net && net.hasOwnProperty('default') ? net['default'] : net;
	tls = tls && tls.hasOwnProperty('default') ? tls['default'] : tls;
	url = url && url.hasOwnProperty('default') ? url['default'] : url;
	https = https && https.hasOwnProperty('default') ? https['default'] : https;
	util = util && util.hasOwnProperty('default') ? util['default'] : util;
	events = events && events.hasOwnProperty('default') ? events['default'] : events;
	tty = tty && tty.hasOwnProperty('default') ? tty['default'] : tty;
	os = os && os.hasOwnProperty('default') ? os['default'] : os;
	domain = domain && domain.hasOwnProperty('default') ? domain['default'] : domain;
	module = module && module.hasOwnProperty('default') ? module['default'] : module;
	console$2 = console$2 && console$2.hasOwnProperty('default') ? console$2['default'] : console$2;

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
	}

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	var __assign = function() {
	    __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};

	function __rest(s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
	            t[p[i]] = s[p[i]];
	    return t;
	}

	function __decorate(decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	}

	function __param(paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	}

	function __metadata(metadataKey, metadataValue) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	}

	function __awaiter(thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	}

	function __generator(thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	}

	function __exportStar(m, exports) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}

	function __values(o) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
	    if (m) return m.call(o);
	    return {
	        next: function () {
	            if (o && i >= o.length) o = void 0;
	            return { value: o && o[i++], done: !o };
	        }
	    };
	}

	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m) return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	    }
	    catch (error) { e = { error: error }; }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"])) m.call(i);
	        }
	        finally { if (e) throw e.error; }
	    }
	    return ar;
	}

	function __spread() {
	    for (var ar = [], i = 0; i < arguments.length; i++)
	        ar = ar.concat(__read(arguments[i]));
	    return ar;
	}

	function __await(v) {
	    return this instanceof __await ? (this.v = v, this) : new __await(v);
	}

	function __asyncGenerator(thisArg, _arguments, generator) {
	    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	    var g = generator.apply(thisArg, _arguments || []), i, q = [];
	    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
	    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
	    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
	    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
	    function fulfill(value) { resume("next", value); }
	    function reject(value) { resume("throw", value); }
	    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
	}

	function __asyncDelegator(o) {
	    var i, p;
	    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
	}

	function __asyncValues(o) {
	    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	    var m = o[Symbol.asyncIterator], i;
	    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
	    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
	    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
	}

	function __makeTemplateObject(cooked, raw) {
	    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
	    return cooked;
	}
	function __importStar(mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	    result.default = mod;
	    return result;
	}

	function __importDefault(mod) {
	    return (mod && mod.__esModule) ? mod : { default: mod };
	}

	var tslib_es6 = /*#__PURE__*/Object.freeze({
		__extends: __extends,
		get __assign () { return __assign; },
		__rest: __rest,
		__decorate: __decorate,
		__param: __param,
		__metadata: __metadata,
		__awaiter: __awaiter,
		__generator: __generator,
		__exportStar: __exportStar,
		__values: __values,
		__read: __read,
		__spread: __spread,
		__await: __await,
		__asyncGenerator: __asyncGenerator,
		__asyncDelegator: __asyncDelegator,
		__asyncValues: __asyncValues,
		__makeTemplateObject: __makeTemplateObject,
		__importStar: __importStar,
		__importDefault: __importDefault
	});

	var dist = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/** JSDoc */
	var Severity;
	(function (Severity) {
	    /** JSDoc */
	    Severity["Fatal"] = "fatal";
	    /** JSDoc */
	    Severity["Error"] = "error";
	    /** JSDoc */
	    Severity["Warning"] = "warning";
	    /** JSDoc */
	    Severity["Log"] = "log";
	    /** JSDoc */
	    Severity["Info"] = "info";
	    /** JSDoc */
	    Severity["Debug"] = "debug";
	    /** JSDoc */
	    Severity["Critical"] = "critical";
	})(Severity = exports.Severity || (exports.Severity = {}));
	// tslint:disable:no-unnecessary-qualifier no-namespace
	(function (Severity) {
	    /**
	     * Converts a string-based level into a {@link Severity}.
	     *
	     * @param level string representation of Severity
	     * @returns Severity
	     */
	    function fromString(level) {
	        switch (level) {
	            case 'debug':
	                return Severity.Debug;
	            case 'info':
	                return Severity.Info;
	            case 'warn':
	            case 'warning':
	                return Severity.Warning;
	            case 'error':
	                return Severity.Error;
	            case 'fatal':
	                return Severity.Fatal;
	            case 'critical':
	                return Severity.Critical;
	            case 'log':
	            default:
	                return Severity.Log;
	        }
	    }
	    Severity.fromString = fromString;
	})(Severity = exports.Severity || (exports.Severity = {}));
	/** The status of an event. */
	var Status;
	(function (Status) {
	    /** The status could not be determined. */
	    Status["Unknown"] = "unknown";
	    /** The event was skipped due to configuration or callbacks. */
	    Status["Skipped"] = "skipped";
	    /** The event was sent to Sentry successfully. */
	    Status["Success"] = "success";
	    /** The client is currently rate limited and will try again later. */
	    Status["RateLimit"] = "rate_limit";
	    /** The event could not be processed. */
	    Status["Invalid"] = "invalid";
	    /** A server-side error ocurred during submission. */
	    Status["Failed"] = "failed";
	})(Status = exports.Status || (exports.Status = {}));
	// tslint:disable:no-unnecessary-qualifier no-namespace
	(function (Status) {
	    /**
	     * Converts a HTTP status code into a {@link Status}.
	     *
	     * @param code The HTTP response status code.
	     * @returns The send status or {@link Status.Unknown}.
	     */
	    function fromHttpCode(code) {
	        if (code >= 200 && code < 300) {
	            return Status.Success;
	        }
	        if (code === 429) {
	            return Status.RateLimit;
	        }
	        if (code >= 400 && code < 500) {
	            return Status.Invalid;
	        }
	        if (code >= 500) {
	            return Status.Failed;
	        }
	        return Status.Unknown;
	    }
	    Status.fromHttpCode = fromHttpCode;
	})(Status = exports.Status || (exports.Status = {}));

	});

	unwrapExports(dist);
	var dist_1 = dist.Severity;
	var dist_2 = dist.Status;

	var is = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Checks whether given value's type is one of a few Error or Error-like
	 * {@link isError}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isError(wat) {
	    switch (Object.prototype.toString.call(wat)) {
	        case '[object Error]':
	            return true;
	        case '[object Exception]':
	            return true;
	        case '[object DOMException]':
	            return true;
	        default:
	            return wat instanceof Error;
	    }
	}
	exports.isError = isError;
	/**
	 * Checks whether given value's type is ErrorEvent
	 * {@link isErrorEvent}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isErrorEvent(wat) {
	    return Object.prototype.toString.call(wat) === '[object ErrorEvent]';
	}
	exports.isErrorEvent = isErrorEvent;
	/**
	 * Checks whether given value's type is DOMError
	 * {@link isDOMError}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isDOMError(wat) {
	    return Object.prototype.toString.call(wat) === '[object DOMError]';
	}
	exports.isDOMError = isDOMError;
	/**
	 * Checks whether given value's type is DOMException
	 * {@link isDOMException}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isDOMException(wat) {
	    return Object.prototype.toString.call(wat) === '[object DOMException]';
	}
	exports.isDOMException = isDOMException;
	/**
	 * Checks whether given value's type is an undefined
	 * {@link isUndefined}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isUndefined(wat) {
	    return wat === void 0;
	}
	exports.isUndefined = isUndefined;
	/**
	 * Checks whether given value's type is a function
	 * {@link isFunction}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isFunction(wat) {
	    return typeof wat === 'function';
	}
	exports.isFunction = isFunction;
	/**
	 * Checks whether given value's type is a string
	 * {@link isString}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isString(wat) {
	    return Object.prototype.toString.call(wat) === '[object String]';
	}
	exports.isString = isString;
	/**
	 * Checks whether given value's is a primitive (undefined, null, number, boolean, string)
	 * {@link isPrimitive}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isPrimitive(wat) {
	    return wat === null || (typeof wat !== 'object' && typeof wat !== 'function');
	}
	exports.isPrimitive = isPrimitive;
	/**
	 * Checks whether given value's type is an array
	 * {@link isArray}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isArray(wat) {
	    return Object.prototype.toString.call(wat) === '[object Array]';
	}
	exports.isArray = isArray;
	/**
	 * Checks whether given value's type is an object literal
	 * {@link isPlainObject}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isPlainObject(wat) {
	    return Object.prototype.toString.call(wat) === '[object Object]';
	}
	exports.isPlainObject = isPlainObject;
	/**
	 * Checks whether given value's type is an regexp
	 * {@link isRegExp}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isRegExp(wat) {
	    return Object.prototype.toString.call(wat) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	/**
	 * Checks whether given value's type is a NaN
	 * {@link isNaN}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isNaN(wat) {
	    return wat !== wat;
	}
	exports.isNaN = isNaN;
	/**
	 * Checks whether given value's type is a SyntheticEvent
	 * {@link isSyntheticEvent}.
	 *
	 * @param wat A value to be checked.
	 * @returns A boolean representing the result.
	 */
	function isSyntheticEvent(wat) {
	    // tslint:disable-next-line:no-unsafe-any
	    return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
	}
	exports.isSyntheticEvent = isSyntheticEvent;

	});

	unwrapExports(is);
	var is_1 = is.isError;
	var is_2 = is.isErrorEvent;
	var is_3 = is.isDOMError;
	var is_4 = is.isDOMException;
	var is_5 = is.isUndefined;
	var is_6 = is.isFunction;
	var is_7 = is.isString;
	var is_8 = is.isPrimitive;
	var is_9 = is.isArray;
	var is_10 = is.isPlainObject;
	var is_11 = is.isRegExp;
	var is_12 = is.isNaN;
	var is_13 = is.isSyntheticEvent;

	var misc = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * Requires a module which is protected against bundler minification.
	 *
	 * @param request The module path to resolve
	 */
	function dynamicRequire(mod, request) {
	    return mod.require(request);
	}
	exports.dynamicRequire = dynamicRequire;
	/**
	 * Checks whether we're in the Node.js or Browser environment
	 *
	 * @returns Answer to given question
	 */
	function isNodeEnv() {
	    // tslint:disable:strict-type-predicates
	    return Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
	}
	exports.isNodeEnv = isNodeEnv;
	var fallbackGlobalObject = {};
	/**
	 * Safely get global scope object
	 *
	 * @returns Global scope object
	 */
	// tslint:disable:strict-type-predicates
	function getGlobalObject() {
	    return isNodeEnv()
	        ? commonjsGlobal
	        : typeof window !== 'undefined'
	            ? window
	            : typeof self !== 'undefined'
	                ? self
	                : fallbackGlobalObject;
	}
	exports.getGlobalObject = getGlobalObject;
	/**
	 * UUID4 generator
	 *
	 * @returns string Generated UUID4.
	 */
	function uuid4() {
	    var global = getGlobalObject();
	    var crypto = global.crypto || global.msCrypto;
	    if (!(crypto === void 0) && crypto.getRandomValues) {
	        // Use window.crypto API if available
	        var arr = new Uint16Array(8);
	        crypto.getRandomValues(arr);
	        // set 4 in byte 7
	        // tslint:disable-next-line:no-bitwise
	        arr[3] = (arr[3] & 0xfff) | 0x4000;
	        // set 2 most significant bits of byte 9 to '10'
	        // tslint:disable-next-line:no-bitwise
	        arr[4] = (arr[4] & 0x3fff) | 0x8000;
	        var pad = function (num) {
	            var v = num.toString(16);
	            while (v.length < 4) {
	                v = "0" + v;
	            }
	            return v;
	        };
	        return (pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]));
	    }
	    else {
	        // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
	        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	            // tslint:disable-next-line:no-bitwise
	            var r = (Math.random() * 16) | 0;
	            // tslint:disable-next-line:no-bitwise
	            var v = c === 'x' ? r : (r & 0x3) | 0x8;
	            return v.toString(16);
	        });
	    }
	}
	exports.uuid4 = uuid4;
	/**
	 * Given a child DOM element, returns a query-selector statement describing that
	 * and its ancestors
	 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
	 * @returns generated DOM path
	 */
	function htmlTreeAsString(elem) {
	    var currentElem = elem;
	    var MAX_TRAVERSE_HEIGHT = 5;
	    var MAX_OUTPUT_LEN = 80;
	    var out = [];
	    var height = 0;
	    var len = 0;
	    var separator = ' > ';
	    var sepLength = separator.length;
	    var nextStr;
	    while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
	        nextStr = htmlElementAsString(currentElem);
	        // bail out if
	        // - nextStr is the 'html' element
	        // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
	        //   (ignore this limit if we are on the first iteration)
	        if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)) {
	            break;
	        }
	        out.push(nextStr);
	        len += nextStr.length;
	        currentElem = currentElem.parentNode;
	    }
	    return out.reverse().join(separator);
	}
	exports.htmlTreeAsString = htmlTreeAsString;
	/**
	 * Returns a simple, query-selector representation of a DOM element
	 * e.g. [HTMLElement] => input#foo.btn[name=baz]
	 * @returns generated DOM path
	 */
	function htmlElementAsString(elem) {
	    var out = [];
	    var className;
	    var classes;
	    var key;
	    var attr;
	    var i;
	    if (!elem || !elem.tagName) {
	        return '';
	    }
	    out.push(elem.tagName.toLowerCase());
	    if (elem.id) {
	        out.push("#" + elem.id);
	    }
	    className = elem.className;
	    if (className && is.isString(className)) {
	        classes = className.split(/\s+/);
	        for (i = 0; i < classes.length; i++) {
	            out.push("." + classes[i]);
	        }
	    }
	    var attrWhitelist = ['type', 'name', 'title', 'alt'];
	    for (i = 0; i < attrWhitelist.length; i++) {
	        key = attrWhitelist[i];
	        attr = elem.getAttribute(key);
	        if (attr) {
	            out.push("[" + key + "=\"" + attr + "\"]");
	        }
	    }
	    return out.join('');
	}
	exports.htmlElementAsString = htmlElementAsString;
	/**
	 * Parses string form of URL into an object
	 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
	 * // intentionally using regex and not <a/> href parsing trick because React Native and other
	 * // environments where DOM might not be available
	 * @returns parsed URL object
	 */
	function parseUrl(url) {
	    if (!url) {
	        return {};
	    }
	    var match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
	    if (!match) {
	        return {};
	    }
	    // coerce to undefined values to empty string so we don't get 'undefined'
	    var query = match[6] || '';
	    var fragment = match[8] || '';
	    return {
	        host: match[4],
	        path: match[5],
	        protocol: match[2],
	        relative: match[5] + query + fragment,
	    };
	}
	exports.parseUrl = parseUrl;
	/**
	 * Extracts either message or type+value from an event that can be used for user-facing logs
	 * @returns event's description
	 */
	function getEventDescription(event) {
	    if (event.message) {
	        return event.message;
	    }
	    else if (event.exception && event.exception.values && event.exception.values[0]) {
	        var exception = event.exception.values[0];
	        if (exception.type && exception.value) {
	            return exception.type + ": " + exception.value;
	        }
	        else {
	            return exception.type || exception.value || event.event_id || '<unknown>';
	        }
	    }
	    else {
	        return event.event_id || '<unknown>';
	    }
	}
	exports.getEventDescription = getEventDescription;
	/** JSDoc */
	function consoleSandbox(callback) {
	    var global = getGlobalObject();
	    var levels = ['debug', 'info', 'warn', 'error', 'log'];
	    if (!('console' in global)) {
	        return callback();
	    }
	    var originalConsole = global.console;
	    var wrappedLevels = {};
	    // Restore all wrapped console methods
	    levels.forEach(function (level) {
	        if (level in global.console && originalConsole[level].__sentry__) {
	            wrappedLevels[level] = originalConsole[level].__sentry_wrapped__;
	            originalConsole[level] = originalConsole[level].__sentry_original__;
	        }
	    });
	    // Perform callback manipulations
	    var result = callback();
	    // Revert restoration to wrapped state
	    Object.keys(wrappedLevels).forEach(function (level) {
	        originalConsole[level] = wrappedLevels[level];
	    });
	    return result;
	}
	exports.consoleSandbox = consoleSandbox;

	});

	unwrapExports(misc);
	var misc_1 = misc.dynamicRequire;
	var misc_2 = misc.isNodeEnv;
	var misc_3 = misc.getGlobalObject;
	var misc_4 = misc.uuid4;
	var misc_5 = misc.htmlTreeAsString;
	var misc_6 = misc.htmlElementAsString;
	var misc_7 = misc.parseUrl;
	var misc_8 = misc.getEventDescription;
	var misc_9 = misc.consoleSandbox;

	var memo = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	// tslint:disable:no-unsafe-any
	/**
	 * Memo class used for decycle json objects. Uses WeakSet if available otherwise array.
	 */
	var Memo = /** @class */ (function () {
	    function Memo() {
	        // tslint:disable-next-line
	        this.hasWeakSet = typeof WeakSet === 'function';
	        this.inner = this.hasWeakSet ? new WeakSet() : [];
	    }
	    /**
	     * Sets obj to remember.
	     * @param obj Object to remember
	     */
	    Memo.prototype.memoize = function (obj) {
	        if (this.hasWeakSet) {
	            if (this.inner.has(obj)) {
	                return true;
	            }
	            this.inner.add(obj);
	            return false;
	        }
	        else {
	            // tslint:disable-next-line:prefer-for-of
	            for (var i = 0; i < this.inner.length; i++) {
	                var value = this.inner[i];
	                if (value === obj) {
	                    return true;
	                }
	            }
	            this.inner.push(obj);
	            return false;
	        }
	    };
	    /**
	     * Removes object from internal storage.
	     * @param obj Object to forget
	     */
	    Memo.prototype.unmemoize = function (obj) {
	        if (this.hasWeakSet) {
	            this.inner.delete(obj);
	        }
	        else {
	            for (var i = 0; i < this.inner.length; i++) {
	                if (this.inner[i] === obj) {
	                    this.inner.splice(i, 1);
	                    break;
	                }
	            }
	        }
	    };
	    return Memo;
	}());
	exports.Memo = Memo;

	});

	unwrapExports(memo);
	var memo_1 = memo.Memo;

	var string = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * Truncates given string to the maximum characters count
	 *
	 * @param str An object that contains serializable values
	 * @param max Maximum number of characters in truncated string
	 * @returns string Encoded
	 */
	function truncate(str, max) {
	    if (max === void 0) { max = 0; }
	    if (max === 0 || !is.isString(str)) {
	        return str;
	    }
	    return str.length <= max ? str : str.substr(0, max) + "...";
	}
	exports.truncate = truncate;
	/**
	 * This is basically just `trim_line` from
	 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
	 *
	 * @param str An object that contains serializable values
	 * @param max Maximum number of characters in truncated string
	 * @returns string Encoded
	 */
	function snipLine(line, colno) {
	    var newLine = line;
	    var ll = newLine.length;
	    if (ll <= 150) {
	        return newLine;
	    }
	    if (colno > ll) {
	        colno = ll; // tslint:disable-line:no-parameter-reassignment
	    }
	    var start = Math.max(colno - 60, 0);
	    if (start < 5) {
	        start = 0;
	    }
	    var end = Math.min(start + 140, ll);
	    if (end > ll - 5) {
	        end = ll;
	    }
	    if (end === ll) {
	        start = Math.max(end - 140, 0);
	    }
	    newLine = newLine.slice(start, end);
	    if (start > 0) {
	        newLine = "'{snip} " + newLine;
	    }
	    if (end < ll) {
	        newLine += ' {snip}';
	    }
	    return newLine;
	}
	exports.snipLine = snipLine;
	/**
	 * Join values in array
	 * @param input array of values to be joined together
	 * @param delimiter string to be placed in-between values
	 * @returns Joined values
	 */
	function safeJoin(input, delimiter) {
	    if (!Array.isArray(input)) {
	        return '';
	    }
	    var output = [];
	    // tslint:disable-next-line:prefer-for-of
	    for (var i = 0; i < input.length; i++) {
	        var value = input[i];
	        try {
	            output.push(String(value));
	        }
	        catch (e) {
	            output.push('[value cannot be serialized]');
	        }
	    }
	    return output.join(delimiter);
	}
	exports.safeJoin = safeJoin;
	/**
	 * Checks if given value is included in the target
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#Polyfill
	 * @param target source string
	 * @param search string to be looked for
	 * @returns An answer
	 */
	function includes(target, search) {
	    if (search.length > target.length) {
	        return false;
	    }
	    else {
	        return target.indexOf(search) !== -1;
	    }
	}
	exports.includes = includes;

	});

	unwrapExports(string);
	var string_1 = string.truncate;
	var string_2 = string.snipLine;
	var string_3 = string.safeJoin;
	var string_4 = string.includes;

	var object = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	/**
	 * Serializes the given object into a string.
	 * Like JSON.stringify, but doesn't throw on circular references.
	 *
	 * @param object A JSON-serializable object.
	 * @returns A string containing the serialized object.
	 */
	function serialize(object) {
	    return JSON.stringify(object, serializer({ normalize: false }));
	}
	exports.serialize = serialize;
	/**
	 * Deserializes an object from a string previously serialized with
	 * {@link serialize}.
	 *
	 * @param str A serialized object.
	 * @returns The deserialized object.
	 */
	function deserialize(str) {
	    return JSON.parse(str);
	}
	exports.deserialize = deserialize;
	/**
	 * Creates a deep copy of the given object.
	 *
	 * The object must be serializable, i.e.:
	 *  - It must not contain any cycles
	 *  - Only primitive types are allowed (object, array, number, string, boolean)
	 *  - Its depth should be considerably low for performance reasons
	 *
	 * @param object A JSON-serializable object.
	 * @returns The object clone.
	 */
	function clone(object) {
	    return deserialize(serialize(object));
	}
	exports.clone = clone;
	/**
	 * Wrap a given object method with a higher-order function
	 *
	 * @param source An object that contains a method to be wrapped.
	 * @param name A name of method to be wrapped.
	 * @param replacement A function that should be used to wrap a given method.
	 * @returns void
	 */
	function fill(source, name, replacement) {
	    if (!(name in source) || source[name].__sentry__) {
	        return;
	    }
	    var original = source[name];
	    var wrapped = replacement(original);
	    // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
	    // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
	    // tslint:disable-next-line:strict-type-predicates
	    if (typeof wrapped === 'function') {
	        wrapped.prototype = wrapped.prototype || {};
	        Object.defineProperties(wrapped, {
	            __sentry__: {
	                enumerable: false,
	                value: true,
	            },
	            __sentry_original__: {
	                enumerable: false,
	                value: original,
	            },
	            __sentry_wrapped__: {
	                enumerable: false,
	                value: wrapped,
	            },
	        });
	    }
	    source[name] = wrapped;
	}
	exports.fill = fill;
	/**
	 * Encodes given object into url-friendly format
	 *
	 * @param object An object that contains serializable values
	 * @returns string Encoded
	 */
	function urlEncode(object) {
	    return Object.keys(object)
	        .map(
	    // tslint:disable-next-line:no-unsafe-any
	    function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]); })
	        .join('&');
	}
	exports.urlEncode = urlEncode;
	// Default Node.js REPL depth
	var MAX_SERIALIZE_EXCEPTION_DEPTH = 3;
	// 100kB, as 200kB is max payload size, so half sounds reasonable
	var MAX_SERIALIZE_EXCEPTION_SIZE = 100 * 1024;
	var MAX_SERIALIZE_KEYS_LENGTH = 40;
	/** JSDoc */
	function utf8Length(value) {
	    // tslint:disable-next-line:no-bitwise
	    return ~-encodeURI(value).split(/%..|./).length;
	}
	/** JSDoc */
	function jsonSize(value) {
	    return utf8Length(JSON.stringify(value));
	}
	/** JSDoc */
	function serializeValue(value) {
	    var type = Object.prototype.toString.call(value);
	    // Node.js REPL notation
	    if (typeof value === 'string') {
	        return string.truncate(value, 40);
	    }
	    else if (type === '[object Object]') {
	        return '[Object]';
	    }
	    else if (type === '[object Array]') {
	        return '[Array]';
	    }
	    else {
	        var normalized = normalizeValue(value);
	        return is.isPrimitive(normalized) ? "" + normalized : type;
	    }
	}
	/** JSDoc */
	function serializeObject(value, depth) {
	    if (depth === 0) {
	        return serializeValue(value);
	    }
	    if (is.isPlainObject(value)) {
	        var serialized_1 = {};
	        var val_1 = value;
	        Object.keys(val_1).forEach(function (key) {
	            serialized_1[key] = serializeObject(val_1[key], depth - 1);
	        });
	        return serialized_1;
	    }
	    else if (is.isArray(value)) {
	        var val = value;
	        return val.map(function (v) { return serializeObject(v, depth - 1); });
	    }
	    return serializeValue(value);
	}
	exports.serializeObject = serializeObject;
	/** JSDoc */
	function limitObjectDepthToSize(object, depth, maxSize) {
	    if (depth === void 0) { depth = MAX_SERIALIZE_EXCEPTION_DEPTH; }
	    if (maxSize === void 0) { maxSize = MAX_SERIALIZE_EXCEPTION_SIZE; }
	    var serialized = serializeObject(object, depth);
	    if (jsonSize(serialize(serialized)) > maxSize) {
	        return limitObjectDepthToSize(object, depth - 1);
	    }
	    return serialized;
	}
	exports.limitObjectDepthToSize = limitObjectDepthToSize;
	/** JSDoc */
	function serializeKeysToEventMessage(keys, maxLength) {
	    if (maxLength === void 0) { maxLength = MAX_SERIALIZE_KEYS_LENGTH; }
	    if (!keys.length) {
	        return '[object has no keys]';
	    }
	    if (keys[0].length >= maxLength) {
	        return string.truncate(keys[0], maxLength);
	    }
	    for (var includedKeys = keys.length; includedKeys > 0; includedKeys--) {
	        var serialized = keys.slice(0, includedKeys).join(', ');
	        if (serialized.length > maxLength) {
	            continue;
	        }
	        if (includedKeys === keys.length) {
	            return serialized;
	        }
	        return string.truncate(serialized, maxLength);
	    }
	    return '';
	}
	exports.serializeKeysToEventMessage = serializeKeysToEventMessage;
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
	/** JSDoc */
	function assign(target) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    if (target === null || target === undefined) {
	        throw new TypeError('Cannot convert undefined or null to object');
	    }
	    var to = Object(target);
	    // tslint:disable-next-line:prefer-for-of
	    for (var i = 0; i < args.length; i++) {
	        var source = args[i];
	        if (source !== null) {
	            for (var nextKey in source) {
	                if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
	                    to[nextKey] = source[nextKey];
	                }
	            }
	        }
	    }
	    return to;
	}
	exports.assign = assign;
	/**
	 * Transforms Error object into an object literal with all it's attributes
	 * attached to it.
	 *
	 * Based on: https://github.com/ftlabs/js-abbreviate/blob/fa709e5f139e7770a71827b1893f22418097fbda/index.js#L95-L106
	 *
	 * @param error An Error containing all relevant information
	 * @returns An object with all error properties
	 */
	function objectifyError(error) {
	    // These properties are implemented as magical getters and don't show up in `for-in` loop
	    var err = {
	        message: error.message,
	        name: error.name,
	        stack: error.stack,
	    };
	    for (var i in error) {
	        if (Object.prototype.hasOwnProperty.call(error, i)) {
	            err[i] = error[i];
	        }
	    }
	    return err;
	}
	/**
	 * normalizeValue()
	 *
	 * Takes unserializable input and make it serializable friendly
	 *
	 * - translates undefined/NaN values to "[undefined]"/"[NaN]" respectively,
	 * - serializes Error objects
	 * - filter global objects
	 */
	function normalizeValue(value, key) {
	    if (key === 'domain' && typeof value === 'object' && value._events) {
	        return '[Domain]';
	    }
	    if (key === 'domainEmitter') {
	        return '[DomainEmitter]';
	    }
	    if (typeof commonjsGlobal !== 'undefined' && value === commonjsGlobal) {
	        return '[Global]';
	    }
	    if (typeof window !== 'undefined' && value === window) {
	        return '[Window]';
	    }
	    if (typeof document !== 'undefined' && value === document) {
	        return '[Document]';
	    }
	    // tslint:disable-next-line:strict-type-predicates
	    if (typeof Event !== 'undefined' && value instanceof Event) {
	        return Object.getPrototypeOf(value) ? value.constructor.name : 'Event';
	    }
	    // React's SyntheticEvent thingy
	    if (is.isSyntheticEvent(value)) {
	        return '[SyntheticEvent]';
	    }
	    if (is.isNaN(value)) {
	        return '[NaN]';
	    }
	    if (is.isUndefined(value)) {
	        return '[undefined]';
	    }
	    if (typeof value === 'function') {
	        return "[Function: " + (value.name || '<unknown-function-name>') + "]";
	    }
	    return value;
	}
	/**
	 * Decycles an object to make it safe for json serialization.
	 *
	 * @param obj Object to be decycled
	 * @param memo Optional Memo class handling decycling
	 */
	function decycle(obj, depth, memo$1) {
	    if (depth === void 0) { depth = +Infinity; }
	    if (memo$1 === void 0) { memo$1 = new memo.Memo(); }
	    if (depth === 0) {
	        return serializeValue(obj);
	    }
	    // If an object was normalized to its string form, we should just bail out as theres no point in going down that branch
	    var normalized = normalizeValue(obj);
	    if (is.isPrimitive(normalized)) {
	        return normalized;
	    }
	    // tslint:disable-next-line:no-unsafe-any
	    var source = (is.isError(obj) ? objectifyError(obj) : obj);
	    var copy = is.isArray(obj) ? [] : {};
	    if (memo$1.memoize(obj)) {
	        return '[Circular ~]';
	    }
	    for (var key in source) {
	        // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
	        if (!Object.prototype.hasOwnProperty.call(source, key)) {
	            continue;
	        }
	        copy[key] = decycle(source[key], depth - 1, memo$1);
	    }
	    memo$1.unmemoize(obj);
	    return copy;
	}
	exports.decycle = decycle;
	/**
	 * serializer()
	 *
	 * Remove circular references,
	 * translates undefined/NaN values to "[undefined]"/"[NaN]" respectively,
	 * and takes care of Error objects serialization
	 */
	function serializer(options) {
	    if (options === void 0) { options = { normalize: true }; }
	    return function (key, value) {
	        // tslint:disable-next-line
	        return options.normalize ? normalizeValue(decycle(value, options.depth), key) : decycle(value, options.depth);
	    };
	}
	/**
	 * safeNormalize()
	 *
	 * Creates a copy of the input by applying serializer function on it and parsing it back to unify the data
	 */
	function safeNormalize(input, depth) {
	    try {
	        return JSON.parse(JSON.stringify(input, serializer({ normalize: true, depth: depth })));
	    }
	    catch (_oO) {
	        return '**non-serializable**';
	    }
	}
	exports.safeNormalize = safeNormalize;

	});

	unwrapExports(object);
	var object_1 = object.serialize;
	var object_2 = object.deserialize;
	var object_3 = object.clone;
	var object_4 = object.fill;
	var object_5 = object.urlEncode;
	var object_6 = object.serializeObject;
	var object_7 = object.limitObjectDepthToSize;
	var object_8 = object.serializeKeysToEventMessage;
	var object_9 = object.assign;
	var object_10 = object.decycle;
	var object_11 = object.safeNormalize;

	var scope = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	/**
	 * Holds additional event information. {@link Scope.applyToEvent} will be
	 * called by the client before an event will be sent.
	 */
	var Scope = /** @class */ (function () {
	    function Scope() {
	        /** Flag if notifiying is happening. */
	        this.notifyingListeners = false;
	        /** Callback for client to receive scope changes. */
	        this.scopeListeners = [];
	        /** Callback list that will be called after {@link applyToEvent}. */
	        this.eventProcessors = [];
	        /** Array of breadcrumbs. */
	        this.breadcrumbs = [];
	        /** User */
	        this.user = {};
	        /** Tags */
	        this.tags = {};
	        /** Extra */
	        this.extra = {};
	    }
	    /** Add internal on change listener. */
	    Scope.prototype.addScopeListener = function (callback) {
	        this.scopeListeners.push(callback);
	    };
	    /** Add new event processor that will be called after {@link applyToEvent}. */
	    Scope.prototype.addEventProcessor = function (callback) {
	        this.eventProcessors.push(callback);
	        return this;
	    };
	    /**
	     * This will be called on every set call.
	     */
	    Scope.prototype.notifyScopeListeners = function () {
	        var _this = this;
	        if (!this.notifyingListeners) {
	            this.notifyingListeners = true;
	            setTimeout(function () {
	                _this.scopeListeners.forEach(function (callback) {
	                    callback(_this);
	                });
	                _this.notifyingListeners = false;
	            });
	        }
	    };
	    /**
	     * This will be called after {@link applyToEvent} is finished.
	     */
	    Scope.prototype.notifyEventProcessors = function (event, hint) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            var e_1, _a, processedEvent, _b, _c, processor, e_2, e_1_1;
	            return tslib_es6.__generator(this, function (_d) {
	                switch (_d.label) {
	                    case 0:
	                        processedEvent = event;
	                        _d.label = 1;
	                    case 1:
	                        _d.trys.push([1, 8, 9, 10]);
	                        _b = tslib_es6.__values(tslib_es6.__spread(getGlobalEventProcessors(), this.eventProcessors)), _c = _b.next();
	                        _d.label = 2;
	                    case 2:
	                        if (!!_c.done) return [3 /*break*/, 7];
	                        processor = _c.value;
	                        _d.label = 3;
	                    case 3:
	                        _d.trys.push([3, 5, , 6]);
	                        return [4 /*yield*/, processor(tslib_es6.__assign({}, processedEvent), hint)];
	                    case 4:
	                        processedEvent = _d.sent();
	                        if (processedEvent === null) {
	                            return [2 /*return*/, null];
	                        }
	                        return [3 /*break*/, 6];
	                    case 5:
	                        e_2 = _d.sent();
	                        return [3 /*break*/, 6];
	                    case 6:
	                        _c = _b.next();
	                        return [3 /*break*/, 2];
	                    case 7: return [3 /*break*/, 10];
	                    case 8:
	                        e_1_1 = _d.sent();
	                        e_1 = { error: e_1_1 };
	                        return [3 /*break*/, 10];
	                    case 9:
	                        try {
	                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	                        }
	                        finally { if (e_1) throw e_1.error; }
	                        return [7 /*endfinally*/];
	                    case 10: return [2 /*return*/, processedEvent];
	                }
	            });
	        });
	    };
	    /**
	     * Updates user context information for future events.
	     * @param user User context object to be set in the current context.
	     */
	    Scope.prototype.setUser = function (user) {
	        this.user = object.safeNormalize(user);
	        this.notifyScopeListeners();
	        return this;
	    };
	    /**
	     * Updates tags context information for future events.
	     * @param tags Tags context object to merge into current context.
	     */
	    Scope.prototype.setTag = function (key, value) {
	        var _a;
	        this.tags = tslib_es6.__assign({}, this.tags, (_a = {}, _a[key] = object.safeNormalize(value), _a));
	        this.notifyScopeListeners();
	        return this;
	    };
	    /**
	     * Updates extra context information for future events.
	     * @param extra context object to merge into current context.
	     */
	    Scope.prototype.setExtra = function (key, extra) {
	        var _a;
	        this.extra = tslib_es6.__assign({}, this.extra, (_a = {}, _a[key] = object.safeNormalize(extra), _a));
	        this.notifyScopeListeners();
	        return this;
	    };
	    /**
	     * Sets the fingerprint on the scope to send with the events.
	     * @param fingerprint string[] to group events in Sentry.
	     */
	    Scope.prototype.setFingerprint = function (fingerprint) {
	        this.fingerprint = object.safeNormalize(fingerprint);
	        this.notifyScopeListeners();
	        return this;
	    };
	    /**
	     * Sets the level on the scope for future events.
	     * @param level string {@link Severity}
	     */
	    Scope.prototype.setLevel = function (level) {
	        this.level = object.safeNormalize(level);
	        this.notifyScopeListeners();
	        return this;
	    };
	    /**
	     * Inherit values from the parent scope.
	     * @param scope to clone.
	     */
	    Scope.clone = function (scope) {
	        var newScope = new Scope();
	        object.assign(newScope, scope, {
	            scopeListeners: [],
	        });
	        if (scope) {
	            newScope.extra = object.assign(scope.extra);
	            newScope.tags = object.assign(scope.tags);
	            newScope.breadcrumbs = tslib_es6.__spread(scope.breadcrumbs);
	            newScope.eventProcessors = tslib_es6.__spread(scope.eventProcessors);
	        }
	        return newScope;
	    };
	    /** Clears the current scope and resets its properties. */
	    Scope.prototype.clear = function () {
	        this.breadcrumbs = [];
	        this.tags = {};
	        this.extra = {};
	        this.user = {};
	        this.level = undefined;
	        this.fingerprint = undefined;
	        this.notifyScopeListeners();
	    };
	    /**
	     * Sets the breadcrumbs in the scope
	     * @param breadcrumbs Breadcrumb
	     * @param maxBreadcrumbs number of max breadcrumbs to merged into event.
	     */
	    Scope.prototype.addBreadcrumb = function (breadcrumb, maxBreadcrumbs) {
	        this.breadcrumbs =
	            maxBreadcrumbs !== undefined && maxBreadcrumbs >= 0
	                ? tslib_es6.__spread(this.breadcrumbs, [object.safeNormalize(breadcrumb)]).slice(-maxBreadcrumbs)
	                : tslib_es6.__spread(this.breadcrumbs, [object.safeNormalize(breadcrumb)]);
	        this.notifyScopeListeners();
	    };
	    /**
	     * Applies fingerprint from the scope to the event if there's one,
	     * uses message if there's one instead or get rid of empty fingerprint
	     */
	    Scope.prototype.applyFingerprint = function (event) {
	        // Make sure it's an array first and we actually have something in place
	        event.fingerprint = event.fingerprint
	            ? Array.isArray(event.fingerprint)
	                ? event.fingerprint
	                : [event.fingerprint]
	            : [];
	        // If we have something on the scope, then merge it with event
	        if (this.fingerprint) {
	            event.fingerprint = event.fingerprint.concat(this.fingerprint);
	        }
	        else if (event.message) {
	            // If not, but we have message, use it instead
	            event.fingerprint = event.fingerprint.concat(event.message);
	        }
	        // If we have no data at all, remove empty array default
	        if (event.fingerprint && !event.fingerprint.length) {
	            delete event.fingerprint;
	        }
	    };
	    /**
	     * Applies the current context and fingerprint to the event.
	     * Note that breadcrumbs will be added by the client.
	     * Also if the event has already breadcrumbs on it, we do not merge them.
	     * @param event SentryEvent
	     * @param hint May contain additional informartion about the original exception.
	     * @param maxBreadcrumbs number of max breadcrumbs to merged into event.
	     */
	    Scope.prototype.applyToEvent = function (event, hint, maxBreadcrumbs) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            var hasNoBreadcrumbs;
	            return tslib_es6.__generator(this, function (_a) {
	                if (this.extra && Object.keys(this.extra).length) {
	                    event.extra = tslib_es6.__assign({}, this.extra, event.extra);
	                }
	                if (this.tags && Object.keys(this.tags).length) {
	                    event.tags = tslib_es6.__assign({}, this.tags, event.tags);
	                }
	                if (this.user && Object.keys(this.user).length) {
	                    event.user = tslib_es6.__assign({}, this.user, event.user);
	                }
	                if (this.level) {
	                    event.level = this.level;
	                }
	                this.applyFingerprint(event);
	                hasNoBreadcrumbs = !event.breadcrumbs || event.breadcrumbs.length === 0;
	                if (hasNoBreadcrumbs && this.breadcrumbs.length > 0) {
	                    event.breadcrumbs =
	                        maxBreadcrumbs !== undefined && maxBreadcrumbs >= 0
	                            ? this.breadcrumbs.slice(-maxBreadcrumbs)
	                            : this.breadcrumbs;
	                }
	                return [2 /*return*/, this.notifyEventProcessors(event, hint)];
	            });
	        });
	    };
	    return Scope;
	}());
	exports.Scope = Scope;
	/**
	 * Retruns the global event processors.
	 */
	function getGlobalEventProcessors() {
	    var global = misc.getGlobalObject();
	    global.__SENTRY__ = global.__SENTRY__ || {};
	    global.__SENTRY__.globalEventProcessors = global.__SENTRY__.globalEventProcessors || [];
	    return global.__SENTRY__.globalEventProcessors;
	}
	/**
	 * Add a EventProcessor to be kept globally.
	 * @param callback EventProcessor to add
	 */
	function addGlobalEventProcessor(callback) {
	    getGlobalEventProcessors().push(callback);
	}
	exports.addGlobalEventProcessor = addGlobalEventProcessor;

	});

	unwrapExports(scope);
	var scope_1 = scope.Scope;
	var scope_2 = scope.addGlobalEventProcessor;

	var logger_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	// TODO: Implement different loggers for different environments
	var global = misc.getGlobalObject();
	/** JSDoc */
	var Logger = /** @class */ (function () {
	    /** JSDoc */
	    function Logger() {
	        this.enabled = false;
	    }
	    /** JSDoc */
	    Logger.prototype.disable = function () {
	        this.enabled = false;
	    };
	    /** JSDoc */
	    Logger.prototype.enable = function () {
	        this.enabled = true;
	    };
	    /** JSDoc */
	    Logger.prototype.log = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        if (!this.enabled) {
	            return;
	        }
	        misc.consoleSandbox(function () {
	            global.console.log("Sentry Logger [Log]: " + args.join(' ')); // tslint:disable-line:no-console
	        });
	    };
	    /** JSDoc */
	    Logger.prototype.warn = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        if (!this.enabled) {
	            return;
	        }
	        misc.consoleSandbox(function () {
	            global.console.warn("Sentry Logger [Warn]: " + args.join(' ')); // tslint:disable-line:no-console
	        });
	    };
	    /** JSDoc */
	    Logger.prototype.error = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        if (!this.enabled) {
	            return;
	        }
	        misc.consoleSandbox(function () {
	            global.console.error("Sentry Logger [Error]: " + args.join(' ')); // tslint:disable-line:no-console
	        });
	    };
	    return Logger;
	}());
	var logger = new Logger();
	exports.logger = logger;

	});

	unwrapExports(logger_1);
	var logger_2 = logger_1.logger;

	var hub = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });




	/**
	 * API compatibility version of this hub.
	 *
	 * WARNING: This number should only be incresed when the global interface
	 * changes a and new methods are introduced.
	 */
	exports.API_VERSION = 3;
	/**
	 * Internal class used to make sure we always have the latest internal functions
	 * working in case we have a version conflict.
	 */
	var Hub = /** @class */ (function () {
	    /**
	     * Creates a new instance of the hub, will push one {@link Layer} into the
	     * internal stack on creation.
	     *
	     * @param client bound to the hub.
	     * @param scope bound to the hub.
	     * @param version number, higher number means higher priority.
	     */
	    function Hub(client, scope$1, version) {
	        if (scope$1 === void 0) { scope$1 = new scope.Scope(); }
	        if (version === void 0) { version = exports.API_VERSION; }
	        this.version = version;
	        /** Is a {@link Layer}[] containing the client and scope */
	        this.stack = [];
	        this.stack.push({ client: client, scope: scope$1 });
	    }
	    /**
	     * Internal helper function to call a method on the top client if it exists.
	     *
	     * @param method The method to call on the client/client.
	     * @param args Arguments to pass to the client/frontend.
	     */
	    Hub.prototype.invokeClient = function (method) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var _a;
	        var top = this.getStackTop();
	        if (top && top.client && top.client[method]) {
	            (_a = top.client)[method].apply(_a, tslib_es6.__spread(args, [top.scope]));
	        }
	    };
	    /**
	     * Internal helper function to call an async method on the top client if it
	     * exists.
	     *
	     * @param method The method to call on the client/client.
	     * @param args Arguments to pass to the client/frontend.
	     */
	    Hub.prototype.invokeClientAsync = function (method) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var _a;
	        var top = this.getStackTop();
	        if (top && top.client && top.client[method]) {
	            (_a = top.client)[method].apply(_a, tslib_es6.__spread(args, [top.scope])).catch(function (err) {
	                logger_1.logger.error(err);
	            });
	        }
	    };
	    /**
	     * Checks if this hub's version is older than the given version.
	     *
	     * @param version A version number to compare to.
	     * @return True if the given version is newer; otherwise false.
	     */
	    Hub.prototype.isOlderThan = function (version) {
	        return this.version < version;
	    };
	    /**
	     * This binds the given client to the current scope.
	     * @param client An SDK client (client) instance.
	     */
	    Hub.prototype.bindClient = function (client) {
	        var top = this.getStackTop();
	        top.client = client;
	        if (top && top.scope && client) {
	            top.scope.addScopeListener(function (s) {
	                if (client.getBackend) {
	                    try {
	                        client.getBackend().storeScope(s);
	                    }
	                    catch (_a) {
	                        // Do nothing
	                    }
	                }
	            });
	        }
	    };
	    /**
	     * Create a new scope to store context information.
	     *
	     * The scope will be layered on top of the current one. It is isolated, i.e. all
	     * breadcrumbs and context information added to this scope will be removed once
	     * the scope ends. Be sure to always remove this scope with {@link this.popScope}
	     * when the operation finishes or throws.
	     *
	     * @returns Scope, the new cloned scope
	     */
	    Hub.prototype.pushScope = function () {
	        // We want to clone the content of prev scope
	        var stack = this.getStack();
	        var parentScope = stack.length > 0 ? stack[stack.length - 1].scope : undefined;
	        var scope$1 = scope.Scope.clone(parentScope);
	        this.getStack().push({
	            client: this.getClient(),
	            scope: scope$1,
	        });
	        return scope$1;
	    };
	    /**
	     * Removes a previously pushed scope from the stack.
	     *
	     * This restores the state before the scope was pushed. All breadcrumbs and
	     * context information added since the last call to {@link this.pushScope} are
	     * discarded.
	     */
	    Hub.prototype.popScope = function () {
	        return this.getStack().pop() !== undefined;
	    };
	    /**
	     * Creates a new scope with and executes the given operation within.
	     * The scope is automatically removed once the operation
	     * finishes or throws.
	     *
	     * This is essentially a convenience function for:
	     *
	     *     pushScope();
	     *     callback();
	     *     popScope();
	     *
	     * @param callback that will be enclosed into push/popScope.
	     */
	    Hub.prototype.withScope = function (callback) {
	        var scope = this.pushScope();
	        try {
	            callback(scope);
	        }
	        finally {
	            this.popScope();
	        }
	    };
	    /** Returns the client of the top stack. */
	    Hub.prototype.getClient = function () {
	        return this.getStackTop().client;
	    };
	    /** Returns the scope of the top stack. */
	    Hub.prototype.getScope = function () {
	        return this.getStackTop().scope;
	    };
	    /** Returns the scope stack for domains or the process. */
	    Hub.prototype.getStack = function () {
	        return this.stack;
	    };
	    /** Returns the topmost scope layer in the order domain > local > process. */
	    Hub.prototype.getStackTop = function () {
	        return this.stack[this.stack.length - 1];
	    };
	    /**
	     * Captures an exception event and sends it to Sentry.
	     *
	     * @param exception An exception-like object.
	     * @param hint May contain additional information about the original exception.
	     * @returns The generated eventId.
	     */
	    Hub.prototype.captureException = function (exception, hint) {
	        var eventId = (this._lastEventId = misc.uuid4());
	        this.invokeClientAsync('captureException', exception, tslib_es6.__assign({}, hint, { event_id: eventId }));
	        return eventId;
	    };
	    /**
	     * Captures a message event and sends it to Sentry.
	     *
	     * @param message The message to send to Sentry.
	     * @param level Define the level of the message.
	     * @param hint May contain additional information about the original exception.
	     * @returns The generated eventId.
	     */
	    Hub.prototype.captureMessage = function (message, level, hint) {
	        var eventId = (this._lastEventId = misc.uuid4());
	        this.invokeClientAsync('captureMessage', message, level, tslib_es6.__assign({}, hint, { event_id: eventId }));
	        return eventId;
	    };
	    /**
	     * Captures a manually created event and sends it to Sentry.
	     *
	     * @param event The event to send to Sentry.
	     * @param hint May contain additional information about the original exception.
	     */
	    Hub.prototype.captureEvent = function (event, hint) {
	        var eventId = (this._lastEventId = misc.uuid4());
	        this.invokeClientAsync('captureEvent', event, tslib_es6.__assign({}, hint, { event_id: eventId }));
	        return eventId;
	    };
	    /**
	     * This is the getter for lastEventId.
	     *
	     * @returns The last event id of a captured event.
	     */
	    Hub.prototype.lastEventId = function () {
	        return this._lastEventId;
	    };
	    /**
	     * Records a new breadcrumb which will be attached to future events.
	     *
	     * Breadcrumbs will be added to subsequent events to provide more context on
	     * user's actions prior to an error or crash.
	     *
	     * @param breadcrumb The breadcrumb to record.
	     * @param hint May contain additional information about the original breadcrumb.
	     */
	    Hub.prototype.addBreadcrumb = function (breadcrumb, hint) {
	        this.invokeClient('addBreadcrumb', breadcrumb, tslib_es6.__assign({}, hint));
	    };
	    /**
	     * Callback to set context information onto the scope.
	     *
	     * @param callback Callback function that receives Scope.
	     */
	    Hub.prototype.configureScope = function (callback) {
	        var top = this.getStackTop();
	        if (top.scope && top.client) {
	            // TODO: freeze flag
	            callback(top.scope);
	        }
	    };
	    /**
	     * For the duraction of the callback, this hub will be set as the global current Hub.
	     * This function is useful if you want to run your own client and hook into an already initialized one
	     * e.g.: Reporting issues to your own sentry when running in your component while still using the users configuration.
	     */
	    Hub.prototype.run = function (callback) {
	        var oldHub = makeMain(this);
	        try {
	            callback(this);
	        }
	        finally {
	            makeMain(oldHub);
	        }
	    };
	    /** Returns the integration if installed on the current client. */
	    Hub.prototype.getIntegration = function (integration) {
	        try {
	            return this.getClient().getIntegration(integration);
	        }
	        catch (_oO) {
	            logger_1.logger.warn("Cannot retrieve integration " + integration.id + " from the current Hub");
	            return null;
	        }
	    };
	    return Hub;
	}());
	exports.Hub = Hub;
	/** Returns the global shim registry. */
	function getMainCarrier() {
	    var carrier = misc.getGlobalObject();
	    carrier.__SENTRY__ = carrier.__SENTRY__ || {
	        hub: undefined,
	    };
	    return carrier;
	}
	exports.getMainCarrier = getMainCarrier;
	/**
	 * Replaces the current main hub with the passed one on the global object
	 *
	 * @returns The old replaced hub
	 */
	function makeMain(hub) {
	    var registry = getMainCarrier();
	    var oldHub = getHubFromCarrier(registry);
	    setHubOnCarrier(registry, hub);
	    return oldHub;
	}
	exports.makeMain = makeMain;
	/**
	 * Returns the default hub instance.
	 *
	 * If a hub is already registered in the global carrier but this module
	 * contains a more recent version, it replaces the registered version.
	 * Otherwise, the currently registered hub will be returned.
	 */
	function getCurrentHub() {
	    // Get main carrier (global for every environment)
	    var registry = getMainCarrier();
	    // If there's no hub, or its an old API, assign a new one
	    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(exports.API_VERSION)) {
	        setHubOnCarrier(registry, new Hub());
	    }
	    // Prefer domains over global if they are there
	    try {
	        // We need to use `dynamicRequire` because `require` on it's own will be optimized by webpack.
	        // We do not want this to happen, we need to try to `require` the domain node module and fail if we are in browser
	        // for example so we do not have to shim it and use `getCurrentHub` universally.
	        var domain = misc.dynamicRequire(module, 'domain');
	        var activeDomain = domain.active;
	        // If there no active domain, just return global hub
	        if (!activeDomain) {
	            return getHubFromCarrier(registry);
	        }
	        // If there's no hub on current domain, or its an old API, assign a new one
	        if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(exports.API_VERSION)) {
	            var registryHubTopStack = getHubFromCarrier(registry).getStackTop();
	            setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, scope.Scope.clone(registryHubTopStack.scope)));
	        }
	        // Return hub that lives on a domain
	        return getHubFromCarrier(activeDomain);
	    }
	    catch (_Oo) {
	        // Return hub that lives on a global object
	        return getHubFromCarrier(registry);
	    }
	}
	exports.getCurrentHub = getCurrentHub;
	/**
	 * This will tell whether a carrier has a hub on it or not
	 * @param carrier object
	 */
	function hasHubOnCarrier(carrier) {
	    if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub) {
	        return true;
	    }
	    else {
	        return false;
	    }
	}
	exports.hasHubOnCarrier = hasHubOnCarrier;
	/**
	 * This will create a new {@link Hub} and add to the passed object on
	 * __SENTRY__.hub.
	 * @param carrier object
	 */
	function getHubFromCarrier(carrier) {
	    if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub) {
	        return carrier.__SENTRY__.hub;
	    }
	    else {
	        carrier.__SENTRY__ = {};
	        carrier.__SENTRY__.hub = new Hub();
	        return carrier.__SENTRY__.hub;
	    }
	}
	exports.getHubFromCarrier = getHubFromCarrier;
	/**
	 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
	 * @param carrier object
	 * @param hub Hub
	 */
	function setHubOnCarrier(carrier, hub) {
	    if (!carrier) {
	        return false;
	    }
	    carrier.__SENTRY__ = carrier.__SENTRY__ || {};
	    carrier.__SENTRY__.hub = hub;
	    return true;
	}
	exports.setHubOnCarrier = setHubOnCarrier;

	});

	unwrapExports(hub);
	var hub_1 = hub.API_VERSION;
	var hub_2 = hub.Hub;
	var hub_3 = hub.getMainCarrier;
	var hub_4 = hub.makeMain;
	var hub_5 = hub.getCurrentHub;
	var hub_6 = hub.hasHubOnCarrier;
	var hub_7 = hub.getHubFromCarrier;
	var hub_8 = hub.setHubOnCarrier;

	var dist$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.addGlobalEventProcessor = scope.addGlobalEventProcessor;
	exports.Scope = scope.Scope;

	exports.getCurrentHub = hub.getCurrentHub;
	exports.getHubFromCarrier = hub.getHubFromCarrier;
	exports.getMainCarrier = hub.getMainCarrier;
	exports.Hub = hub.Hub;
	exports.setHubOnCarrier = hub.setHubOnCarrier;

	});

	unwrapExports(dist$1);
	var dist_1$1 = dist$1.addGlobalEventProcessor;
	var dist_2$1 = dist$1.Scope;
	var dist_3 = dist$1.getCurrentHub;
	var dist_4 = dist$1.getHubFromCarrier;
	var dist_5 = dist$1.getMainCarrier;
	var dist_6 = dist$1.Hub;
	var dist_7 = dist$1.setHubOnCarrier;

	var dist$2 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/**
	 * This calls a function on the current hub.
	 * @param method function to call on hub.
	 * @param args to pass to function.
	 */
	function callOnHub(method) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    var hub = dist$1.getCurrentHub();
	    if (hub && hub[method]) {
	        // tslint:disable-next-line:no-unsafe-any
	        return hub[method].apply(hub, tslib_es6.__spread(args));
	    }
	    throw new Error("No hub defined or " + method + " was not found on the hub, please open a bug report.");
	}
	/**
	 * Captures an exception event and sends it to Sentry.
	 *
	 * @param exception An exception-like object.
	 * @returns The generated eventId.
	 */
	function captureException(exception) {
	    var syntheticException;
	    try {
	        throw new Error('Sentry syntheticException');
	    }
	    catch (exception) {
	        syntheticException = exception;
	    }
	    return callOnHub('captureException', exception, {
	        originalException: exception,
	        syntheticException: syntheticException,
	    });
	}
	exports.captureException = captureException;
	/**
	 * Captures a message event and sends it to Sentry.
	 *
	 * @param message The message to send to Sentry.
	 * @param level Define the level of the message.
	 * @returns The generated eventId.
	 */
	function captureMessage(message, level) {
	    var syntheticException;
	    try {
	        throw new Error(message);
	    }
	    catch (exception) {
	        syntheticException = exception;
	    }
	    return callOnHub('captureMessage', message, level, {
	        originalException: message,
	        syntheticException: syntheticException,
	    });
	}
	exports.captureMessage = captureMessage;
	/**
	 * Captures a manually created event and sends it to Sentry.
	 *
	 * @param event The event to send to Sentry.
	 * @returns The generated eventId.
	 */
	function captureEvent(event) {
	    return callOnHub('captureEvent', event);
	}
	exports.captureEvent = captureEvent;
	/**
	 * Records a new breadcrumb which will be attached to future events.
	 *
	 * Breadcrumbs will be added to subsequent events to provide more context on
	 * user's actions prior to an error or crash.
	 *
	 * @param breadcrumb The breadcrumb to record.
	 */
	function addBreadcrumb(breadcrumb) {
	    callOnHub('addBreadcrumb', breadcrumb);
	}
	exports.addBreadcrumb = addBreadcrumb;
	/**
	 * Callback to set context information onto the scope.
	 * @param callback Callback function that receives Scope.
	 */
	function configureScope(callback) {
	    callOnHub('configureScope', callback);
	}
	exports.configureScope = configureScope;
	/**
	 * Creates a new scope with and executes the given operation within.
	 * The scope is automatically removed once the operation
	 * finishes or throws.
	 *
	 * This is essentially a convenience function for:
	 *
	 *     pushScope();
	 *     callback();
	 *     popScope();
	 *
	 * @param callback that will be enclosed into push/popScope.
	 */
	function withScope(callback) {
	    callOnHub('withScope', callback);
	}
	exports.withScope = withScope;
	/**
	 * Calls a function on the latest client. Use this with caution, it's meant as
	 * in "internal" helper so we don't need to expose every possible function in
	 * the shim. It is not guaranteed that the client actually implements the
	 * function.
	 *
	 * @param method The method to call on the client/client.
	 * @param args Arguments to pass to the client/fontend.
	 */
	function _callOnClient(method) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    callOnHub.apply(void 0, tslib_es6.__spread(['invokeClient', method], args));
	}
	exports._callOnClient = _callOnClient;

	});

	unwrapExports(dist$2);
	var dist_1$2 = dist$2.captureException;
	var dist_2$2 = dist$2.captureMessage;
	var dist_3$1 = dist$2.captureEvent;
	var dist_4$1 = dist$2.addBreadcrumb;
	var dist_5$1 = dist$2.configureScope;
	var dist_6$1 = dist$2.withScope;
	var dist_7$1 = dist$2._callOnClient;

	var error = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/** An error emitted by Sentry SDKs and related utilities. */
	var SentryError = /** @class */ (function (_super) {
	    tslib_es6.__extends(SentryError, _super);
	    function SentryError(message) {
	        var _newTarget = this.constructor;
	        var _this = _super.call(this, message) || this;
	        _this.message = message;
	        // tslint:disable:no-unsafe-any
	        _this.name = _newTarget.prototype.constructor.name;
	        Object.setPrototypeOf(_this, _newTarget.prototype);
	        return _this;
	    }
	    return SentryError;
	}(Error));
	exports.SentryError = SentryError;

	});

	unwrapExports(error);
	var error_1 = error.SentryError;

	var dsn = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });




	/** Regular expression used to parse a Dsn. */
	var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/;
	/** The Sentry Dsn, identifying a Sentry instance and project. */
	var Dsn = /** @class */ (function () {
	    /** Creates a new Dsn component */
	    function Dsn(from) {
	        if (typeof from === 'string') {
	            this.fromString(from);
	        }
	        else {
	            this.fromComponents(from);
	        }
	        this.validate();
	    }
	    /**
	     * Renders the string representation of this Dsn.
	     *
	     * By default, this will render the public representation without the password
	     * component. To get the deprecated private representation, set `withPassword`
	     * to true.
	     *
	     * @param withPassword When set to true, the password will be included.
	     */
	    Dsn.prototype.toString = function (withPassword) {
	        if (withPassword === void 0) { withPassword = false; }
	        // tslint:disable-next-line:no-this-assignment
	        var _a = this, host = _a.host, path = _a.path, pass = _a.pass, port = _a.port, projectId = _a.projectId, protocol = _a.protocol, user = _a.user;
	        return (protocol + "://" + user + (withPassword && pass ? ":" + pass : '') +
	            ("@" + host + (port ? ":" + port : '') + "/" + (path ? path + "/" : path) + projectId));
	    };
	    /** Parses a string into this Dsn. */
	    Dsn.prototype.fromString = function (str) {
	        var match = DSN_REGEX.exec(str);
	        if (!match) {
	            throw new error.SentryError('Invalid Dsn');
	        }
	        var _a = tslib_es6.__read(match.slice(1), 6), protocol = _a[0], user = _a[1], _b = _a[2], pass = _b === void 0 ? '' : _b, host = _a[3], _c = _a[4], port = _c === void 0 ? '' : _c, lastPath = _a[5];
	        var path = '';
	        var projectId = lastPath;
	        var split = projectId.split('/');
	        if (split.length > 1) {
	            path = split.slice(0, -1).join('/');
	            projectId = split.pop();
	        }
	        object.assign(this, { host: host, pass: pass, path: path, projectId: projectId, port: port, protocol: protocol, user: user });
	    };
	    /** Maps Dsn components into this instance. */
	    Dsn.prototype.fromComponents = function (components) {
	        this.protocol = components.protocol;
	        this.user = components.user;
	        this.pass = components.pass || '';
	        this.host = components.host;
	        this.port = components.port || '';
	        this.path = components.path || '';
	        this.projectId = components.projectId;
	    };
	    /** Validates this Dsn and throws on error. */
	    Dsn.prototype.validate = function () {
	        var e_1, _a;
	        try {
	            for (var _b = tslib_es6.__values(['protocol', 'user', 'host', 'projectId']), _c = _b.next(); !_c.done; _c = _b.next()) {
	                var component = _c.value;
	                if (!this[component]) {
	                    throw new error.SentryError("Invalid Dsn: Missing " + component);
	                }
	            }
	        }
	        catch (e_1_1) { e_1 = { error: e_1_1 }; }
	        finally {
	            try {
	                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	            }
	            finally { if (e_1) throw e_1.error; }
	        }
	        if (this.protocol !== 'http' && this.protocol !== 'https') {
	            throw new error.SentryError("Invalid Dsn: Unsupported protocol \"" + this.protocol + "\"");
	        }
	        if (this.port && is.isNaN(parseInt(this.port, 10))) {
	            throw new error.SentryError("Invalid Dsn: Invalid port number \"" + this.port + "\"");
	        }
	    };
	    return Dsn;
	}());
	exports.Dsn = Dsn;

	});

	unwrapExports(dsn);
	var dsn_1 = dsn.Dsn;

	var api = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	var SENTRY_API_VERSION = '7';
	/** Helper class to provide urls to different Sentry endpoints. */
	var API = /** @class */ (function () {
	    /** Create a new instance of API */
	    function API(dsn$1) {
	        this.dsn = dsn$1;
	        this.dsnObject = new dsn.Dsn(dsn$1);
	    }
	    /** Returns the Dsn object. */
	    API.prototype.getDsn = function () {
	        return this.dsnObject;
	    };
	    /** Returns a string with auth headers in the url to the store endpoint. */
	    API.prototype.getStoreEndpoint = function () {
	        return "" + this.getBaseUrl() + this.getStoreEndpointPath();
	    };
	    /** Returns the store endpoint with auth added in url encoded. */
	    API.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
	        var dsn = this.dsnObject;
	        var auth = {
	            sentry_key: dsn.user,
	            sentry_version: SENTRY_API_VERSION,
	        };
	        // Auth is intentionally sent as part of query string (NOT as custom HTTP header)
	        // to avoid preflight CORS requests
	        return this.getStoreEndpoint() + "?" + object.urlEncode(auth);
	    };
	    /** Returns the base path of the url including the port. */
	    API.prototype.getBaseUrl = function () {
	        var dsn = this.dsnObject;
	        var protocol = dsn.protocol ? dsn.protocol + ":" : '';
	        var port = dsn.port ? ":" + dsn.port : '';
	        return protocol + "//" + dsn.host + port;
	    };
	    /** Returns only the path component for the store endpoint. */
	    API.prototype.getStoreEndpointPath = function () {
	        var dsn = this.dsnObject;
	        return (dsn.path ? "/" + dsn.path : '') + "/api/" + dsn.projectId + "/store/";
	    };
	    /** Returns an object that can be used in request headers. */
	    API.prototype.getRequestHeaders = function (clientName, clientVersion) {
	        var dsn = this.dsnObject;
	        var header = ["Sentry sentry_version=" + SENTRY_API_VERSION];
	        header.push("sentry_timestamp=" + new Date().getTime());
	        header.push("sentry_client=" + clientName + "/" + clientVersion);
	        header.push("sentry_key=" + dsn.user);
	        if (dsn.pass) {
	            header.push("sentry_secret=" + dsn.pass);
	        }
	        return {
	            'Content-Type': 'application/json',
	            'X-Sentry-Auth': header.join(', '),
	        };
	    };
	    /** Returns the url to the report dialog endpoint. */
	    API.prototype.getReportDialogEndpoint = function (dialogOptions) {
	        if (dialogOptions === void 0) { dialogOptions = {}; }
	        var dsn = this.dsnObject;
	        var endpoint = "" + this.getBaseUrl() + (dsn.path ? "/" + dsn.path : '') + "/api/embed/error-page/";
	        var encodedOptions = [];
	        encodedOptions.push("dsn=" + dsn.toString());
	        for (var key in dialogOptions) {
	            if (key === 'user') {
	                if (!dialogOptions.user) {
	                    continue;
	                }
	                if (dialogOptions.user.name) {
	                    encodedOptions.push("name=" + encodeURIComponent(dialogOptions.user.name));
	                }
	                if (dialogOptions.user.email) {
	                    encodedOptions.push("email=" + encodeURIComponent(dialogOptions.user.email));
	                }
	            }
	            else {
	                encodedOptions.push(encodeURIComponent(key) + "=" + encodeURIComponent(dialogOptions[key]));
	            }
	        }
	        if (encodedOptions.length) {
	            return endpoint + "?" + encodedOptions.join('&');
	        }
	        return endpoint;
	    };
	    return API;
	}());
	exports.API = API;

	});

	unwrapExports(api);
	var api_1 = api.API;

	var async = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * Consumes the promise and logs the error when it rejects.
	 * @param promise A promise to forget.
	 */
	function forget(promise) {
	    promise.catch(function (e) {
	        // TODO: Use a better logging mechanism
	        console.error(e);
	    });
	}
	exports.forget = forget;
	/**
	 * Helper to filter an array with asynchronous callbacks.
	 *
	 * @param array An array containing items to filter.
	 * @param predicate An async predicate evaluated on every item.
	 * @param thisArg Optional value passed as "this" into the callback.
	 * @returns An array containing only values where the callback returned true.
	 */
	function filterAsync(array, predicate, thisArg) {
	    return tslib_es6.__awaiter(this, void 0, void 0, function () {
	        var verdicts;
	        return tslib_es6.__generator(this, function (_a) {
	            switch (_a.label) {
	                case 0: return [4 /*yield*/, Promise.all(array.map(predicate, thisArg))];
	                case 1:
	                    verdicts = _a.sent();
	                    return [2 /*return*/, array.filter(function (_, index) { return verdicts[index]; })];
	            }
	        });
	    });
	}
	exports.filterAsync = filterAsync;

	});

	unwrapExports(async);
	var async_1 = async.forget;
	var async_2 = async.filterAsync;

	var integration = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	exports.installedIntegrations = [];
	/** Gets integration to install */
	function getIntegrationsToSetup(options) {
	    var e_1, _a, e_2, _b;
	    var defaultIntegrations = (options.defaultIntegrations && tslib_es6.__spread(options.defaultIntegrations)) || [];
	    var userIntegrations = options.integrations;
	    var integrations = [];
	    if (Array.isArray(userIntegrations)) {
	        var userIntegrationsNames = userIntegrations.map(function (i) { return i.name; });
	        var pickedIntegrationsNames = [];
	        try {
	            // Leave only unique default integrations, that were not overridden with provided user integrations
	            for (var defaultIntegrations_1 = tslib_es6.__values(defaultIntegrations), defaultIntegrations_1_1 = defaultIntegrations_1.next(); !defaultIntegrations_1_1.done; defaultIntegrations_1_1 = defaultIntegrations_1.next()) {
	                var defaultIntegration = defaultIntegrations_1_1.value;
	                if (userIntegrationsNames.indexOf(getIntegrationName(defaultIntegration)) === -1 &&
	                    pickedIntegrationsNames.indexOf(getIntegrationName(defaultIntegration)) === -1) {
	                    integrations.push(defaultIntegration);
	                    pickedIntegrationsNames.push(getIntegrationName(defaultIntegration));
	                }
	            }
	        }
	        catch (e_1_1) { e_1 = { error: e_1_1 }; }
	        finally {
	            try {
	                if (defaultIntegrations_1_1 && !defaultIntegrations_1_1.done && (_a = defaultIntegrations_1.return)) _a.call(defaultIntegrations_1);
	            }
	            finally { if (e_1) throw e_1.error; }
	        }
	        try {
	            // Don't add same user integration twice
	            for (var userIntegrations_1 = tslib_es6.__values(userIntegrations), userIntegrations_1_1 = userIntegrations_1.next(); !userIntegrations_1_1.done; userIntegrations_1_1 = userIntegrations_1.next()) {
	                var userIntegration = userIntegrations_1_1.value;
	                if (pickedIntegrationsNames.indexOf(getIntegrationName(userIntegration)) === -1) {
	                    integrations.push(userIntegration);
	                    pickedIntegrationsNames.push(getIntegrationName(userIntegration));
	                }
	            }
	        }
	        catch (e_2_1) { e_2 = { error: e_2_1 }; }
	        finally {
	            try {
	                if (userIntegrations_1_1 && !userIntegrations_1_1.done && (_b = userIntegrations_1.return)) _b.call(userIntegrations_1);
	            }
	            finally { if (e_2) throw e_2.error; }
	        }
	    }
	    else if (typeof userIntegrations === 'function') {
	        integrations = userIntegrations(defaultIntegrations);
	        integrations = Array.isArray(integrations) ? integrations : [integrations];
	    }
	    else {
	        return tslib_es6.__spread(defaultIntegrations);
	    }
	    return integrations;
	}
	exports.getIntegrationsToSetup = getIntegrationsToSetup;
	/** Setup given integration */
	function setupIntegration(integration, options) {
	    if (exports.installedIntegrations.indexOf(getIntegrationName(integration)) !== -1) {
	        return;
	    }
	    try {
	        integration.setupOnce();
	    }
	    catch (_Oo) {
	        /** @deprecated */
	        // TODO: Remove in v5
	        // tslint:disable:deprecation
	        if (integration.install) {
	            logger_1.logger.warn("Integration " + getIntegrationName(integration) + ": The install method is deprecated. Use \"setupOnce\".");
	            integration.install(options);
	        }
	        // tslint:enable:deprecation
	    }
	    exports.installedIntegrations.push(getIntegrationName(integration));
	    logger_1.logger.log("Integration installed: " + getIntegrationName(integration));
	}
	exports.setupIntegration = setupIntegration;
	/**
	 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
	 * integrations are added unless they were already provided before.
	 * @param integrations array of integration instances
	 * @param withDefault should enable default integrations
	 */
	function setupIntegrations(options) {
	    var integrations = {};
	    getIntegrationsToSetup(options).forEach(function (integration) {
	        integrations[getIntegrationName(integration)] = integration;
	        setupIntegration(integration, options);
	    });
	    return integrations;
	}
	exports.setupIntegrations = setupIntegrations;
	/**
	 * Returns the integration static id.
	 * @param integration Integration to retrieve id
	 */
	function getIntegrationName(integration) {
	    /**
	     * @depracted
	     */
	    // tslint:disable-next-line:no-unsafe-any
	    return integration.constructor.id || integration.name;
	}

	});

	unwrapExports(integration);
	var integration_1 = integration.installedIntegrations;
	var integration_2 = integration.getIntegrationsToSetup;
	var integration_3 = integration.setupIntegration;
	var integration_4 = integration.setupIntegrations;

	var promisebuffer = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/** A simple queue that holds promises. */
	var PromiseBuffer = /** @class */ (function () {
	    function PromiseBuffer(limit) {
	        this.limit = limit;
	        /** Internal set of queued Promises */
	        this.buffer = [];
	    }
	    /**
	     * Says if the buffer is ready to take more requests
	     */
	    PromiseBuffer.prototype.isReady = function () {
	        return this.limit === undefined || this.length() < this.limit;
	    };
	    /**
	     * Add a promise to the queue.
	     *
	     * @param task Can be any Promise<T>
	     * @returns The original promise.
	     */
	    PromiseBuffer.prototype.add = function (task) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            return tslib_es6.__generator(this, function (_a) {
	                if (!this.isReady()) {
	                    return [2 /*return*/, Promise.reject(new error.SentryError('Not adding Promise due to buffer limit reached.'))];
	                }
	                if (this.buffer.indexOf(task) === -1) {
	                    this.buffer.push(task);
	                }
	                task
	                    .then(function () { return tslib_es6.__awaiter(_this, void 0, void 0, function () { return tslib_es6.__generator(this, function (_a) {
	                    return [2 /*return*/, this.remove(task)];
	                }); }); })
	                    .catch(function () { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
	                    return tslib_es6.__generator(this, function (_a) {
	                        return [2 /*return*/, this.remove(task).catch(function () {
	                                // We have to add this catch here otherwise we have an unhandledPromiseRejection
	                                // because it's a new Promise chain.
	                            })];
	                    });
	                }); });
	                return [2 /*return*/, task];
	            });
	        });
	    };
	    /**
	     * Remove a promise to the queue.
	     *
	     * @param task Can be any Promise<T>
	     * @returns Removed promise.
	     */
	    PromiseBuffer.prototype.remove = function (task) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            var removedTask;
	            return tslib_es6.__generator(this, function (_a) {
	                removedTask = this.buffer.splice(this.buffer.indexOf(task), 1)[0];
	                return [2 /*return*/, removedTask];
	            });
	        });
	    };
	    /**
	     * This function returns the number of unresolved promises in the queue.
	     */
	    PromiseBuffer.prototype.length = function () {
	        return this.buffer.length;
	    };
	    /**
	     * This will drain the whole queue, returns true if queue is empty or drained.
	     * If timeout is provided and the queue takes longer to drain, the promise still resolves but with false.
	     *
	     * @param timeout Number in ms to wait until it resolves with false.
	     */
	    PromiseBuffer.prototype.drain = function (timeout) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            return tslib_es6.__generator(this, function (_a) {
	                return [2 /*return*/, new Promise(function (resolve) {
	                        var capturedSetTimeout = setTimeout(function () {
	                            if (timeout && timeout > 0) {
	                                resolve(false);
	                            }
	                        }, timeout);
	                        Promise.all(_this.buffer)
	                            .then(function () {
	                            clearTimeout(capturedSetTimeout);
	                            resolve(true);
	                        })
	                            .catch(function () {
	                            resolve(true);
	                        });
	                    })];
	            });
	        });
	    };
	    return PromiseBuffer;
	}());
	exports.PromiseBuffer = PromiseBuffer;

	});

	unwrapExports(promisebuffer);
	var promisebuffer_1 = promisebuffer.PromiseBuffer;

	var baseclient = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });










	/**
	 * Default maximum number of breadcrumbs added to an event. Can be overwritten
	 * with {@link Options.maxBreadcrumbs}.
	 */
	var DEFAULT_BREADCRUMBS = 30;
	/**
	 * Absolute maximum number of breadcrumbs added to an event. The
	 * `maxBreadcrumbs` option cannot be higher than this value.
	 */
	var MAX_BREADCRUMBS = 100;
	/**
	 * By default, truncates URL values to 250 chars
	 */
	var MAX_URL_LENGTH = 250;
	/**
	 * Base implementation for all JavaScript SDK clients.
	 *
	 * Call the constructor with the corresponding backend constructor and options
	 * specific to the client subclass. To access these options later, use
	 * {@link Client.getOptions}. Also, the Backend instance is available via
	 * {@link Client.getBackend}.
	 *
	 * If a Dsn is specified in the options, it will be parsed and stored. Use
	 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
	 * invalid, the constructor will throw a {@link SentryException}. Note that
	 * without a valid Dsn, the SDK will not send any events to Sentry.
	 *
	 * Before sending an event via the backend, it is passed through
	 * {@link BaseClient.prepareEvent} to add SDK information and scope data
	 * (breadcrumbs and context). To add more custom information, override this
	 * method and extend the resulting prepared event.
	 *
	 * To issue automatically created events (e.g. via instrumentation), use
	 * {@link Client.captureEvent}. It will prepare the event and pass it through
	 * the callback lifecycle. To issue auto-breadcrumbs, use
	 * {@link Client.addBreadcrumb}.
	 *
	 * @example
	 * class NodeClient extends BaseClient<NodeBackend, NodeOptions> {
	 *   public constructor(options: NodeOptions) {
	 *     super(NodeBackend, options);
	 *   }
	 *
	 *   // ...
	 * }
	 */
	var BaseClient = /** @class */ (function () {
	    /**
	     * Initializes this client instance.
	     *
	     * @param backendClass A constructor function to create the backend.
	     * @param options Options for the client.
	     */
	    function BaseClient(backendClass, options) {
	        /** A simple buffer holding all requests. */
	        this.buffer = new promisebuffer.PromiseBuffer();
	        this.backend = new backendClass(options);
	        this.options = options;
	        if (options.dsn) {
	            this.dsn = new dsn.Dsn(options.dsn);
	        }
	        // We have to setup the integrations in the constructor since we do not want
	        // that anyone needs to call client.install();
	        this.integrations = integration.setupIntegrations(this.options);
	    }
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.install = function () {
	        if (!this.isEnabled()) {
	            return (this.installed = false);
	        }
	        var backend = this.getBackend();
	        if (!this.installed && backend.install) {
	            backend.install();
	        }
	        return (this.installed = true);
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.captureException = function (exception, hint, scope) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            return tslib_es6.__generator(this, function (_a) {
	                return [2 /*return*/, this.buffer.add((function () { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
	                        var event;
	                        return tslib_es6.__generator(this, function (_a) {
	                            switch (_a.label) {
	                                case 0: return [4 /*yield*/, this.getBackend().eventFromException(exception, hint)];
	                                case 1:
	                                    event = _a.sent();
	                                    return [2 /*return*/, this.captureEvent(event, hint, scope)];
	                            }
	                        });
	                    }); })())];
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.captureMessage = function (message, level, hint, scope) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            return tslib_es6.__generator(this, function (_a) {
	                return [2 /*return*/, this.buffer.add((function () { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
	                        var event, _a;
	                        return tslib_es6.__generator(this, function (_b) {
	                            switch (_b.label) {
	                                case 0:
	                                    if (!is.isPrimitive(message)) return [3 /*break*/, 2];
	                                    return [4 /*yield*/, this.getBackend().eventFromMessage("" + message, level, hint)];
	                                case 1:
	                                    _a = _b.sent();
	                                    return [3 /*break*/, 4];
	                                case 2: return [4 /*yield*/, this.getBackend().eventFromException(message, hint)];
	                                case 3:
	                                    _a = _b.sent();
	                                    _b.label = 4;
	                                case 4:
	                                    event = _a;
	                                    return [2 /*return*/, this.captureEvent(event, hint, scope)];
	                            }
	                        });
	                    }); })())];
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.captureEvent = function (event, hint, scope) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            return tslib_es6.__generator(this, function (_a) {
	                // Adding this here is technically not correct since if you call captureMessage/captureException it's already
	                // buffered. But since we not really need the count and we only need to know if the buffer is full or not,
	                // This is fine...
	                return [2 /*return*/, this.buffer.add((function () { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
	                        var _this = this;
	                        return tslib_es6.__generator(this, function (_a) {
	                            return [2 /*return*/, this.processEvent(event, function (finalEvent) { return tslib_es6.__awaiter(_this, void 0, void 0, function () { return tslib_es6.__generator(this, function (_a) {
	                                    return [2 /*return*/, this.getBackend().sendEvent(finalEvent)];
	                                }); }); }, hint, scope)];
	                        });
	                    }); })())];
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.addBreadcrumb = function (breadcrumb, hint, scope) {
	        var _a = this.getOptions(), beforeBreadcrumb = _a.beforeBreadcrumb, _b = _a.maxBreadcrumbs, maxBreadcrumbs = _b === void 0 ? DEFAULT_BREADCRUMBS : _b;
	        if (maxBreadcrumbs <= 0) {
	            return;
	        }
	        var timestamp = new Date().getTime() / 1000;
	        var mergedBreadcrumb = tslib_es6.__assign({ timestamp: timestamp }, breadcrumb);
	        var finalBreadcrumb = beforeBreadcrumb
	            ? misc.consoleSandbox(function () { return beforeBreadcrumb(mergedBreadcrumb, hint); })
	            : mergedBreadcrumb;
	        if (finalBreadcrumb === null) {
	            return;
	        }
	        if (this.getBackend().storeBreadcrumb(finalBreadcrumb) && scope) {
	            scope.addBreadcrumb(finalBreadcrumb, Math.min(maxBreadcrumbs, MAX_BREADCRUMBS));
	        }
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.getDsn = function () {
	        return this.dsn;
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.getOptions = function () {
	        return this.options;
	    };
	    /** Returns the current backend. */
	    BaseClient.prototype.getBackend = function () {
	        return this.backend;
	    };
	    /** Determines whether this SDK is enabled and a valid Dsn is present. */
	    BaseClient.prototype.isEnabled = function () {
	        return this.getOptions().enabled !== false && this.dsn !== undefined;
	    };
	    /**
	     * Adds common information to events.
	     *
	     * The information includes release and environment from `options`,
	     * breadcrumbs and context (extra, tags and user) from the scope.
	     *
	     * Information that is already present in the event is never overwritten. For
	     * nested objects, such as the context, keys are merged.
	     *
	     * @param event The original event.
	     * @param hint May contain additional informartion about the original exception.
	     * @param scope A scope containing event metadata.
	     * @returns A new event with more information.
	     */
	    BaseClient.prototype.prepareEvent = function (event, scope, hint) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            var _a, environment, _b, maxBreadcrumbs, release, dist, prepared, exception, request;
	            return tslib_es6.__generator(this, function (_c) {
	                _a = this.getOptions(), environment = _a.environment, _b = _a.maxBreadcrumbs, maxBreadcrumbs = _b === void 0 ? DEFAULT_BREADCRUMBS : _b, release = _a.release, dist = _a.dist;
	                prepared = tslib_es6.__assign({}, event);
	                if (prepared.environment === undefined && environment !== undefined) {
	                    prepared.environment = environment;
	                }
	                if (prepared.release === undefined && release !== undefined) {
	                    prepared.release = release;
	                }
	                if (prepared.dist === undefined && dist !== undefined) {
	                    prepared.dist = dist;
	                }
	                if (prepared.message) {
	                    prepared.message = string.truncate(prepared.message, MAX_URL_LENGTH);
	                }
	                exception = prepared.exception && prepared.exception.values && prepared.exception.values[0];
	                if (exception && exception.value) {
	                    exception.value = string.truncate(exception.value, MAX_URL_LENGTH);
	                }
	                request = prepared.request;
	                if (request && request.url) {
	                    request.url = string.truncate(request.url, MAX_URL_LENGTH);
	                }
	                if (prepared.event_id === undefined) {
	                    prepared.event_id = misc.uuid4();
	                }
	                // This should be the last thing called, since we want that
	                // {@link Hub.addEventProcessor} gets the finished prepared event.
	                if (scope) {
	                    return [2 /*return*/, scope.applyToEvent(prepared, hint, Math.min(maxBreadcrumbs, MAX_BREADCRUMBS))];
	                }
	                return [2 /*return*/, prepared];
	            });
	        });
	    };
	    /**
	     * Processes an event (either error or message) and sends it to Sentry.
	     *
	     * This also adds breadcrumbs and context information to the event. However,
	     * platform specific meta data (such as the User's IP address) must be added
	     * by the SDK implementor.
	     *
	     * The returned event status offers clues to whether the event was sent to
	     * Sentry and accepted there. If the {@link Options.shouldSend} hook returns
	     * `false`, the status will be {@link SendStatus.Skipped}. If the rate limit
	     * was exceeded, the status will be {@link SendStatus.RateLimit}.
	     *
	     * @param event The event to send to Sentry.
	     * @param send A function to actually send the event.
	     * @param scope A scope containing event metadata.
	     * @param hint May contain additional informartion about the original exception.
	     * @returns A Promise that resolves with the event status.
	     */
	    BaseClient.prototype.processEvent = function (event, send, hint, scope) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            var _a, beforeSend, sampleRate, prepared, finalEvent, isInternalException, exception_1, response, error_1;
	            return tslib_es6.__generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        if (!this.isEnabled()) {
	                            return [2 /*return*/, {
	                                    status: dist.Status.Skipped,
	                                }];
	                        }
	                        _a = this.getOptions(), beforeSend = _a.beforeSend, sampleRate = _a.sampleRate;
	                        // 1.0 === 100% events are sent
	                        // 0.0 === 0% events are sent
	                        if (typeof sampleRate === 'number' && Math.random() > sampleRate) {
	                            return [2 /*return*/, {
	                                    status: dist.Status.Skipped,
	                                }];
	                        }
	                        return [4 /*yield*/, this.prepareEvent(event, scope, hint)];
	                    case 1:
	                        prepared = _b.sent();
	                        if (prepared === null) {
	                            return [2 /*return*/, {
	                                    status: dist.Status.Skipped,
	                                }];
	                        }
	                        finalEvent = prepared;
	                        _b.label = 2;
	                    case 2:
	                        _b.trys.push([2, 5, , 6]);
	                        isInternalException = hint && hint.data && hint.data.__sentry__ === true;
	                        if (!(!isInternalException && beforeSend)) return [3 /*break*/, 4];
	                        return [4 /*yield*/, beforeSend(prepared, hint)];
	                    case 3:
	                        finalEvent = _b.sent();
	                        if (typeof finalEvent === 'undefined') {
	                            logger_1.logger.error('`beforeSend` method has to return `null` or a valid event');
	                        }
	                        _b.label = 4;
	                    case 4: return [3 /*break*/, 6];
	                    case 5:
	                        exception_1 = _b.sent();
	                        async.forget(this.captureException(exception_1, {
	                            data: {
	                                __sentry__: true,
	                            },
	                            originalException: exception_1,
	                        }));
	                        return [2 /*return*/, {
	                                reason: 'Event processing in beforeSend method threw an exception',
	                                status: dist.Status.Invalid,
	                            }];
	                    case 6:
	                        if (finalEvent === null) {
	                            return [2 /*return*/, {
	                                    reason: 'Event dropped due to being discarded by beforeSend method',
	                                    status: dist.Status.Skipped,
	                                }];
	                        }
	                        _b.label = 7;
	                    case 7:
	                        _b.trys.push([7, 9, , 10]);
	                        return [4 /*yield*/, send(finalEvent)];
	                    case 8:
	                        response = _b.sent();
	                        response.event = finalEvent;
	                        if (response.status === dist.Status.RateLimit) ;
	                        return [2 /*return*/, response];
	                    case 9:
	                        error_1 = _b.sent();
	                        // We have a catch here since the transport can reject the request internally.
	                        // If we do not catch this here, we will run into an endless loop.
	                        logger_1.logger.error("" + error_1);
	                        return [2 /*return*/, {
	                                reason: "" + error_1,
	                                status: dist.Status.Failed,
	                            }];
	                    case 10: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.flush = function (timeout) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            return tslib_es6.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, Promise.all([
	                            this.getBackend()
	                                .getTransport()
	                                .close(timeout),
	                            this.buffer.drain(timeout),
	                        ])];
	                    case 1: return [2 /*return*/, (_a.sent()).reduce(function (prev, current) { return prev && current; })];
	                }
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.close = function (timeout) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            return tslib_es6.__generator(this, function (_a) {
	                return [2 /*return*/, this.flush(timeout)];
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.getIntegrations = function () {
	        return this.integrations || {};
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseClient.prototype.getIntegration = function (integration) {
	        try {
	            return this.integrations[integration.id] || null;
	        }
	        catch (_oO) {
	            logger_1.logger.warn("Cannot retrieve integration " + integration.id + " from the current Client");
	            return null;
	        }
	    };
	    return BaseClient;
	}());
	exports.BaseClient = BaseClient;

	});

	unwrapExports(baseclient);
	var baseclient_1 = baseclient.BaseClient;

	var noop = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/** Noop transport */
	var NoopTransport = /** @class */ (function () {
	    function NoopTransport() {
	    }
	    /**
	     * @inheritDoc
	     */
	    NoopTransport.prototype.sendEvent = function (_) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            return tslib_es6.__generator(this, function (_a) {
	                return [2 /*return*/, Promise.resolve({
	                        reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
	                        status: dist.Status.Skipped,
	                    })];
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    NoopTransport.prototype.close = function (_) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            return tslib_es6.__generator(this, function (_a) {
	                return [2 /*return*/, Promise.resolve(true)];
	            });
	        });
	    };
	    return NoopTransport;
	}());
	exports.NoopTransport = NoopTransport;

	});

	unwrapExports(noop);
	var noop_1 = noop.NoopTransport;

	var basebackend = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	/**
	 * This is the base implemention of a Backend.
	 */
	var BaseBackend = /** @class */ (function () {
	    /** Creates a new browser backend instance. */
	    function BaseBackend(options) {
	        this.options = options;
	        if (!this.options.dsn) {
	            logger_1.logger.warn('No DSN provided, backend will not do anything.');
	        }
	        this.transport = this.setupTransport();
	    }
	    /**
	     * Sets up the transport so it can be used later to send requests.
	     */
	    BaseBackend.prototype.setupTransport = function () {
	        return new noop.NoopTransport();
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseBackend.prototype.eventFromException = function (_exception, _hint) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            return tslib_es6.__generator(this, function (_a) {
	                throw new error.SentryError('Backend has to implement `eventFromException` method');
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseBackend.prototype.eventFromMessage = function (_message, _level, _hint) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            return tslib_es6.__generator(this, function (_a) {
	                throw new error.SentryError('Backend has to implement `eventFromMessage` method');
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseBackend.prototype.sendEvent = function (event) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            return tslib_es6.__generator(this, function (_a) {
	                // TODO: Remove with v5
	                // tslint:disable-next-line
	                if (this.transport.captureEvent) {
	                    // tslint:disable-next-line
	                    return [2 /*return*/, this.transport.captureEvent(event)];
	                }
	                // --------------------
	                return [2 /*return*/, this.transport.sendEvent(object.serialize(event))];
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseBackend.prototype.storeBreadcrumb = function (_) {
	        return true;
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseBackend.prototype.storeScope = function (_) {
	        // Noop
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseBackend.prototype.getTransport = function () {
	        return this.transport;
	    };
	    return BaseBackend;
	}());
	exports.BaseBackend = BaseBackend;

	});

	unwrapExports(basebackend);
	var basebackend_1 = basebackend.BaseBackend;

	var interfaces = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/** Console logging verbosity for the SDK. */
	var LogLevel;
	(function (LogLevel) {
	    /** No logs will be generated. */
	    LogLevel[LogLevel["None"] = 0] = "None";
	    /** Only SDK internal errors will be logged. */
	    LogLevel[LogLevel["Error"] = 1] = "Error";
	    /** Information useful for debugging the SDK will be logged. */
	    LogLevel[LogLevel["Debug"] = 2] = "Debug";
	    /** All SDK actions will be logged. */
	    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
	})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));

	});

	unwrapExports(interfaces);
	var interfaces_1 = interfaces.LogLevel;

	var sdk = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/**
	 * Internal function to create a new SDK client instance. The client is
	 * installed and then bound to the current scope.
	 *
	 * @param clientClass The client class to instanciate.
	 * @param options Options to pass to the client.
	 * @returns The installed and bound client instance.
	 */
	function initAndBind(clientClass, options) {
	    if (options.debug === true) {
	        logger_1.logger.enable();
	    }
	    var client = new clientClass(options);
	    dist$1.getCurrentHub().bindClient(client);
	    client.install();
	}
	exports.initAndBind = initAndBind;

	});

	unwrapExports(sdk);
	var sdk_1 = sdk.initAndBind;

	var dedupe = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });




	/** Deduplication filter */
	var Dedupe = /** @class */ (function () {
	    function Dedupe() {
	        /**
	         * @inheritDoc
	         */
	        this.name = Dedupe.id;
	    }
	    /**
	     * @inheritDoc
	     */
	    Dedupe.prototype.setupOnce = function () {
	        var _this = this;
	        dist$1.addGlobalEventProcessor(function (currentEvent) { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
	            var self;
	            return tslib_es6.__generator(this, function (_a) {
	                self = dist$1.getCurrentHub().getIntegration(Dedupe);
	                if (self) {
	                    // Juuust in case something goes wrong
	                    try {
	                        if (self.shouldDropEvent(currentEvent, self.previousEvent)) {
	                            return [2 /*return*/, null];
	                        }
	                    }
	                    catch (_oO) {
	                        return [2 /*return*/, (self.previousEvent = currentEvent)];
	                    }
	                    return [2 /*return*/, (self.previousEvent = currentEvent)];
	                }
	                return [2 /*return*/, currentEvent];
	            });
	        }); });
	    };
	    /** JSDoc */
	    Dedupe.prototype.shouldDropEvent = function (currentEvent, previousEvent) {
	        if (!previousEvent) {
	            return false;
	        }
	        if (this.isSameMessageEvent(currentEvent, previousEvent)) {
	            logger_1.logger.warn("Event dropped due to being a duplicate of previous event (same message).\nEvent: " + misc.getEventDescription(currentEvent));
	            return true;
	        }
	        if (this.isSameExceptionEvent(currentEvent, previousEvent)) {
	            logger_1.logger.warn("Event dropped due to being a duplicate of previous event (same exception).\nEvent: " + misc.getEventDescription(currentEvent));
	            return true;
	        }
	        return false;
	    };
	    /** JSDoc */
	    Dedupe.prototype.isSameMessageEvent = function (currentEvent, previousEvent) {
	        var currentMessage = currentEvent.message;
	        var previousMessage = previousEvent.message;
	        // If no event has a message, they were both exceptions, so bail out
	        if (!currentMessage && !previousMessage) {
	            return false;
	        }
	        // If only one event has a stacktrace, but not the other one, they are not the same
	        if ((currentMessage && !previousMessage) || (!currentMessage && previousMessage)) {
	            return false;
	        }
	        if (currentMessage !== previousMessage) {
	            return false;
	        }
	        if (!this.isSameFingerprint(currentEvent, previousEvent)) {
	            return false;
	        }
	        if (!this.isSameStacktrace(currentEvent, previousEvent)) {
	            return false;
	        }
	        return true;
	    };
	    /** JSDoc */
	    Dedupe.prototype.getFramesFromEvent = function (event) {
	        var exception = event.exception;
	        if (exception) {
	            try {
	                // @ts-ignore
	                return exception.values[0].stacktrace.frames;
	            }
	            catch (_oO) {
	                return undefined;
	            }
	        }
	        else if (event.stacktrace) {
	            return event.stacktrace.frames;
	        }
	        else {
	            return undefined;
	        }
	    };
	    /** JSDoc */
	    Dedupe.prototype.isSameStacktrace = function (currentEvent, previousEvent) {
	        var currentFrames = this.getFramesFromEvent(currentEvent);
	        var previousFrames = this.getFramesFromEvent(previousEvent);
	        // If no event has a fingerprint, they are assumed to be the same
	        if (!currentFrames && !previousFrames) {
	            return true;
	        }
	        // If only one event has a stacktrace, but not the other one, they are not the same
	        if ((currentFrames && !previousFrames) || (!currentFrames && previousFrames)) {
	            return false;
	        }
	        currentFrames = currentFrames;
	        previousFrames = previousFrames;
	        // If number of frames differ, they are not the same
	        if (previousFrames.length !== currentFrames.length) {
	            return false;
	        }
	        // Otherwise, compare the two
	        for (var i = 0; i < previousFrames.length; i++) {
	            var frameA = previousFrames[i];
	            var frameB = currentFrames[i];
	            if (frameA.filename !== frameB.filename ||
	                frameA.lineno !== frameB.lineno ||
	                frameA.colno !== frameB.colno ||
	                frameA.function !== frameB.function) {
	                return false;
	            }
	        }
	        return true;
	    };
	    /** JSDoc */
	    Dedupe.prototype.getExceptionFromEvent = function (event) {
	        return event.exception && event.exception.values && event.exception.values[0];
	    };
	    /** JSDoc */
	    Dedupe.prototype.isSameExceptionEvent = function (currentEvent, previousEvent) {
	        var previousException = this.getExceptionFromEvent(previousEvent);
	        var currentException = this.getExceptionFromEvent(currentEvent);
	        if (!previousException || !currentException) {
	            return false;
	        }
	        if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
	            return false;
	        }
	        if (!this.isSameFingerprint(currentEvent, previousEvent)) {
	            return false;
	        }
	        if (!this.isSameStacktrace(currentEvent, previousEvent)) {
	            return false;
	        }
	        return true;
	    };
	    /** JSDoc */
	    Dedupe.prototype.isSameFingerprint = function (currentEvent, previousEvent) {
	        var currentFingerprint = currentEvent.fingerprint;
	        var previousFingerprint = previousEvent.fingerprint;
	        // If no event has a fingerprint, they are assumed to be the same
	        if (!currentFingerprint && !previousFingerprint) {
	            return true;
	        }
	        // If only one event has a fingerprint, but not the other one, they are not the same
	        if ((currentFingerprint && !previousFingerprint) || (!currentFingerprint && previousFingerprint)) {
	            return false;
	        }
	        currentFingerprint = currentFingerprint;
	        previousFingerprint = previousFingerprint;
	        // Otherwise, compare the two
	        try {
	            return !!(currentFingerprint.join('') === previousFingerprint.join(''));
	        }
	        catch (_oO) {
	            return false;
	        }
	    };
	    /**
	     * @inheritDoc
	     */
	    Dedupe.id = 'Dedupe';
	    return Dedupe;
	}());
	exports.Dedupe = Dedupe;

	});

	unwrapExports(dedupe);
	var dedupe_1 = dedupe.Dedupe;

	var functiontostring = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var originalFunctionToString;
	/** Patch toString calls to return proper name for wrapped functions */
	var FunctionToString = /** @class */ (function () {
	    function FunctionToString() {
	        /**
	         * @inheritDoc
	         */
	        this.name = FunctionToString.id;
	    }
	    /**
	     * @inheritDoc
	     */
	    FunctionToString.prototype.setupOnce = function () {
	        originalFunctionToString = Function.prototype.toString;
	        Function.prototype.toString = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            var context = this.__sentry__ ? this.__sentry_original__ : this;
	            // tslint:disable-next-line:no-unsafe-any
	            return originalFunctionToString.apply(context, args);
	        };
	    };
	    /**
	     * @inheritDoc
	     */
	    FunctionToString.id = 'FunctionToString';
	    return FunctionToString;
	}());
	exports.FunctionToString = FunctionToString;

	});

	unwrapExports(functiontostring);
	var functiontostring_1 = functiontostring.FunctionToString;

	var sdkinformation = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/**
	 * @deprecated
	 * This file can be safely removed in the next major bump
	 */
	/** Adds SDK info to an event. */
	var SDKInformation = /** @class */ (function () {
	    function SDKInformation() {
	        /**
	         * @inheritDoc
	         */
	        this.name = 'SDKInformation';
	    }
	    /**
	     * @inheritDoc
	     */
	    SDKInformation.prototype.setupOnce = function () {
	        logger_1.logger.warn("SDKInformation Integration is deprecated and can be safely removed. It's functionality has been merged into the SDK's core.");
	    };
	    return SDKInformation;
	}());
	exports.SDKInformation = SDKInformation;

	});

	unwrapExports(sdkinformation);
	var sdkinformation_1 = sdkinformation.SDKInformation;

	var inboundfilters = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });






	// "Script error." is hard coded into browsers for errors that it can't read.
	// this is the result of a script being pulled in from an external domain and CORS.
	var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
	/** Inbound filters configurable by the user */
	var InboundFilters = /** @class */ (function () {
	    function InboundFilters(options) {
	        if (options === void 0) { options = {}; }
	        this.options = options;
	        /**
	         * @inheritDoc
	         */
	        this.name = InboundFilters.id;
	    }
	    /**
	     * @inheritDoc
	     */
	    InboundFilters.prototype.setupOnce = function () {
	        var _this = this;
	        dist$1.addGlobalEventProcessor(function (event) { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
	            var hub, self, client, clientOptions, options;
	            return tslib_es6.__generator(this, function (_a) {
	                hub = dist$1.getCurrentHub();
	                if (!hub) {
	                    return [2 /*return*/, event];
	                }
	                self = hub.getIntegration(InboundFilters);
	                if (self) {
	                    client = hub.getClient();
	                    clientOptions = client ? client.getOptions() : {};
	                    options = self.mergeOptions(clientOptions);
	                    if (self.shouldDropEvent(event, options)) {
	                        return [2 /*return*/, null];
	                    }
	                }
	                return [2 /*return*/, event];
	            });
	        }); });
	    };
	    /** JSDoc */
	    InboundFilters.prototype.shouldDropEvent = function (event, options) {
	        if (this.isSentryError(event, options)) {
	            logger_1.logger.warn("Event dropped due to being internal Sentry Error.\nEvent: " + misc.getEventDescription(event));
	            return true;
	        }
	        if (this.isIgnoredError(event, options)) {
	            logger_1.logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + misc.getEventDescription(event));
	            return true;
	        }
	        if (this.isBlacklistedUrl(event, options)) {
	            logger_1.logger.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + misc.getEventDescription(event) + ".\nUrl: " + this.getEventFilterUrl(event));
	            return true;
	        }
	        if (!this.isWhitelistedUrl(event, options)) {
	            logger_1.logger.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + misc.getEventDescription(event) + ".\nUrl: " + this.getEventFilterUrl(event));
	            return true;
	        }
	        return false;
	    };
	    /** JSDoc */
	    InboundFilters.prototype.isSentryError = function (event, options) {
	        if (options === void 0) { options = {}; }
	        if (!options.ignoreInternal) {
	            return false;
	        }
	        try {
	            // tslint:disable-next-line:no-unsafe-any
	            return event.exception.values[0].type === 'SentryError';
	        }
	        catch (_oO) {
	            return false;
	        }
	    };
	    /** JSDoc */
	    InboundFilters.prototype.isIgnoredError = function (event, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        if (!options.ignoreErrors || !options.ignoreErrors.length) {
	            return false;
	        }
	        return this.getPossibleEventMessages(event).some(function (message) {
	            // Not sure why TypeScript complains here...
	            return options.ignoreErrors.some(function (pattern) { return _this.isMatchingPattern(message, pattern); });
	        });
	    };
	    /** JSDoc */
	    InboundFilters.prototype.isBlacklistedUrl = function (event, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        // TODO: Use Glob instead?
	        if (!options.blacklistUrls || !options.blacklistUrls.length) {
	            return false;
	        }
	        var url = this.getEventFilterUrl(event);
	        return !url ? false : options.blacklistUrls.some(function (pattern) { return _this.isMatchingPattern(url, pattern); });
	    };
	    /** JSDoc */
	    InboundFilters.prototype.isWhitelistedUrl = function (event, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        // TODO: Use Glob instead?
	        if (!options.whitelistUrls || !options.whitelistUrls.length) {
	            return true;
	        }
	        var url = this.getEventFilterUrl(event);
	        return !url ? true : options.whitelistUrls.some(function (pattern) { return _this.isMatchingPattern(url, pattern); });
	    };
	    /** JSDoc */
	    InboundFilters.prototype.mergeOptions = function (clientOptions) {
	        if (clientOptions === void 0) { clientOptions = {}; }
	        return {
	            blacklistUrls: tslib_es6.__spread((this.options.blacklistUrls || []), (clientOptions.blacklistUrls || [])),
	            ignoreErrors: tslib_es6.__spread((this.options.ignoreErrors || []), (clientOptions.ignoreErrors || []), DEFAULT_IGNORE_ERRORS),
	            ignoreInternal: typeof this.options.ignoreInternal !== 'undefined' ? this.options.ignoreInternal : true,
	            whitelistUrls: tslib_es6.__spread((this.options.whitelistUrls || []), (clientOptions.whitelistUrls || [])),
	        };
	    };
	    /** JSDoc */
	    InboundFilters.prototype.isMatchingPattern = function (value, pattern) {
	        if (is.isRegExp(pattern)) {
	            return pattern.test(value);
	        }
	        else if (typeof pattern === 'string') {
	            return string.includes(value, pattern);
	        }
	        else {
	            return false;
	        }
	    };
	    /** JSDoc */
	    InboundFilters.prototype.getPossibleEventMessages = function (event) {
	        if (event.message) {
	            return [event.message];
	        }
	        else if (event.exception) {
	            try {
	                // tslint:disable-next-line:no-unsafe-any
	                var _a = event.exception.values[0], type = _a.type, value = _a.value;
	                return ["" + value, type + ": " + value];
	            }
	            catch (oO) {
	                logger_1.logger.error("Cannot extract message for event " + misc.getEventDescription(event));
	                return [];
	            }
	        }
	        else {
	            return [];
	        }
	    };
	    /** JSDoc */
	    InboundFilters.prototype.getEventFilterUrl = function (event) {
	        try {
	            if (event.stacktrace) {
	                // tslint:disable:no-unsafe-any
	                var frames_1 = event.stacktrace.frames;
	                return frames_1[frames_1.length - 1].filename;
	            }
	            else if (event.exception) {
	                // tslint:disable:no-unsafe-any
	                var frames_2 = event.exception.values[0].stacktrace.frames;
	                return frames_2[frames_2.length - 1].filename;
	            }
	            else {
	                return null;
	            }
	        }
	        catch (oO) {
	            logger_1.logger.error("Cannot extract url for event " + misc.getEventDescription(event));
	            return null;
	        }
	    };
	    /**
	     * @inheritDoc
	     */
	    InboundFilters.id = 'InboundFilters';
	    return InboundFilters;
	}());
	exports.InboundFilters = InboundFilters;

	});

	unwrapExports(inboundfilters);
	var inboundfilters_1 = inboundfilters.InboundFilters;

	var extraerrordata = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	/** Patch toString calls to return proper name for wrapped functions */
	var ExtraErrorData = /** @class */ (function () {
	    /**
	     * @inheritDoc
	     */
	    function ExtraErrorData(options) {
	        if (options === void 0) { options = { depth: 3 }; }
	        this.options = options;
	        /**
	         * @inheritDoc
	         */
	        this.name = ExtraErrorData.id;
	    }
	    /**
	     * @inheritDoc
	     */
	    ExtraErrorData.prototype.setupOnce = function () {
	        var _this = this;
	        dist$1.addGlobalEventProcessor(function (event, hint) { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
	            var self;
	            return tslib_es6.__generator(this, function (_a) {
	                self = dist$1.getCurrentHub().getIntegration(ExtraErrorData);
	                if (!self) {
	                    return [2 /*return*/, event];
	                }
	                return [2 /*return*/, self.enhanceEventWithErrorData(event, hint)];
	            });
	        }); });
	    };
	    /**
	     * Attaches extracted information from the Error object to extra field in the SentryEvent
	     */
	    ExtraErrorData.prototype.enhanceEventWithErrorData = function (event, hint) {
	        if (!hint || !hint.originalException || !is.isError(hint.originalException)) {
	            return event;
	        }
	        var errorData = this.extractErrorData(hint.originalException);
	        if (errorData) {
	            var extra = tslib_es6.__assign({}, event.extra);
	            var normalizedErrorData = object.safeNormalize(errorData, this.options.depth);
	            if (!is.isString(normalizedErrorData)) {
	                extra = tslib_es6.__assign({}, event.extra, normalizedErrorData);
	            }
	            return tslib_es6.__assign({}, event, { extra: extra });
	        }
	        return event;
	    };
	    /**
	     * Extract extra information from the Error object
	     */
	    ExtraErrorData.prototype.extractErrorData = function (error) {
	        var e_1, _a, _b;
	        var result = null;
	        // We are trying to enhance already existing event, so no harm done if it won't succeed
	        try {
	            var nativeKeys_1 = ['name', 'message', 'stack', 'line', 'column', 'fileName', 'lineNumber', 'columnNumber'];
	            var name_1 = error.name || error.constructor.name;
	            var errorKeys = Object.getOwnPropertyNames(error).filter(function (key) { return nativeKeys_1.indexOf(key) === -1; });
	            if (errorKeys.length) {
	                var extraErrorInfo = {};
	                try {
	                    for (var errorKeys_1 = tslib_es6.__values(errorKeys), errorKeys_1_1 = errorKeys_1.next(); !errorKeys_1_1.done; errorKeys_1_1 = errorKeys_1.next()) {
	                        var key = errorKeys_1_1.value;
	                        var value = error[key];
	                        if (is.isError(value)) {
	                            value = value.name || value.constructor.name;
	                        }
	                        extraErrorInfo[key] = value;
	                    }
	                }
	                catch (e_1_1) { e_1 = { error: e_1_1 }; }
	                finally {
	                    try {
	                        if (errorKeys_1_1 && !errorKeys_1_1.done && (_a = errorKeys_1.return)) _a.call(errorKeys_1);
	                    }
	                    finally { if (e_1) throw e_1.error; }
	                }
	                result = (_b = {},
	                    _b[name_1] = extraErrorInfo,
	                    _b);
	            }
	        }
	        catch (oO) {
	            logger_1.logger.error('Unable to extract extra data from the Error object:', oO);
	        }
	        return result;
	    };
	    /**
	     * @inheritDoc
	     */
	    ExtraErrorData.id = 'ExtraErrorData';
	    return ExtraErrorData;
	}());
	exports.ExtraErrorData = ExtraErrorData;

	});

	unwrapExports(extraerrordata);
	var extraerrordata_1 = extraerrordata.ExtraErrorData;

	var debug = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/** JSDoc */
	var Debug = /** @class */ (function () {
	    /**
	     * @inheritDoc
	     */
	    function Debug(options) {
	        /**
	         * @inheritDoc
	         */
	        this.name = Debug.id;
	        this.options = tslib_es6.__assign({ debugger: false, stringify: false }, options);
	    }
	    /**
	     * @inheritDoc
	     */
	    Debug.prototype.setupOnce = function () {
	        var _this = this;
	        dist$1.addGlobalEventProcessor(function (event, hint) { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
	            var self;
	            return tslib_es6.__generator(this, function (_a) {
	                self = dist$1.getCurrentHub().getIntegration(Debug);
	                if (self) {
	                    // tslint:disable:no-console
	                    // tslint:disable:no-debugger
	                    if (self.options.debugger) {
	                        debugger;
	                    }
	                    if (self.options.stringify) {
	                        console.log(JSON.stringify(event, null, 2));
	                        if (hint) {
	                            console.log(JSON.stringify(hint, null, 2));
	                        }
	                    }
	                    else {
	                        console.log(event);
	                        if (hint) {
	                            console.log(hint);
	                        }
	                    }
	                }
	                return [2 /*return*/, event];
	            });
	        }); });
	    };
	    /**
	     * @inheritDoc
	     */
	    Debug.id = 'Debug';
	    return Debug;
	}());
	exports.Debug = Debug;

	});

	unwrapExports(debug);
	var debug_1 = debug.Debug;

	var path = createCommonjsModule(function (module, exports) {
	// Slightly modified (no IE8 support, ES6) and transcribed to TypeScript
	// https://raw.githubusercontent.com/calvinmetcalf/rollup-plugin-node-builtins/master/src/es6/path.js
	Object.defineProperty(exports, "__esModule", { value: true });
	/** JSDoc */
	function normalizeArray(parts, allowAboveRoot) {
	    // if the path tries to go above the root, `up` ends up > 0
	    var up = 0;
	    for (var i = parts.length - 1; i >= 0; i--) {
	        var last = parts[i];
	        if (last === '.') {
	            parts.splice(i, 1);
	        }
	        else if (last === '..') {
	            parts.splice(i, 1);
	            up++;
	        }
	        else if (up) {
	            parts.splice(i, 1);
	            up--;
	        }
	    }
	    // if the path is allowed to go above the root, restore leading ..s
	    if (allowAboveRoot) {
	        for (; up--; up) {
	            parts.unshift('..');
	        }
	    }
	    return parts;
	}
	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	/** JSDoc */
	function splitPath(filename) {
	    var parts = splitPathRe.exec(filename);
	    return parts ? parts.slice(1) : [];
	}
	// path.resolve([from ...], to)
	// posix version
	/** JSDoc */
	function resolve() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i] = arguments[_i];
	    }
	    var resolvedPath = '';
	    var resolvedAbsolute = false;
	    for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	        var path = i >= 0 ? args[i] : '/';
	        // Skip empty entries
	        if (!path) {
	            continue;
	        }
	        resolvedPath = path + "/" + resolvedPath;
	        resolvedAbsolute = path.charAt(0) === '/';
	    }
	    // At this point the path should be resolved to a full absolute path, but
	    // handle relative paths to be safe (might happen when process.cwd() fails)
	    // Normalize the path
	    resolvedPath = normalizeArray(resolvedPath.split('/').filter(function (p) { return !!p; }), !resolvedAbsolute).join('/');
	    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
	}
	exports.resolve = resolve;
	/** JSDoc */
	function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	        if (arr[start] !== '') {
	            break;
	        }
	    }
	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	        if (arr[end] !== '') {
	            break;
	        }
	    }
	    if (start > end) {
	        return [];
	    }
	    return arr.slice(start, end - start + 1);
	}
	// path.relative(from, to)
	// posix version
	/** JSDoc */
	function relative(from, to) {
	    // tslint:disable:no-parameter-reassignment
	    from = resolve(from).substr(1);
	    to = resolve(to).substr(1);
	    var fromParts = trim(from.split('/'));
	    var toParts = trim(to.split('/'));
	    var length = Math.min(fromParts.length, toParts.length);
	    var samePartsLength = length;
	    for (var i = 0; i < length; i++) {
	        if (fromParts[i] !== toParts[i]) {
	            samePartsLength = i;
	            break;
	        }
	    }
	    var outputParts = [];
	    for (var i = samePartsLength; i < fromParts.length; i++) {
	        outputParts.push('..');
	    }
	    outputParts = outputParts.concat(toParts.slice(samePartsLength));
	    return outputParts.join('/');
	}
	exports.relative = relative;
	// path.normalize(path)
	// posix version
	/** JSDoc */
	function normalize(path) {
	    var isPathAbsolute = isAbsolute(path);
	    var trailingSlash = path.substr(-1) === '/';
	    // Normalize the path
	    var normalizedPath = normalizeArray(path.split('/').filter(function (p) { return !!p; }), !isPathAbsolute).join('/');
	    if (!normalizedPath && !isPathAbsolute) {
	        normalizedPath = '.';
	    }
	    if (normalizedPath && trailingSlash) {
	        normalizedPath += '/';
	    }
	    return (isPathAbsolute ? '/' : '') + normalizedPath;
	}
	exports.normalize = normalize;
	// posix version
	/** JSDoc */
	function isAbsolute(path) {
	    return path.charAt(0) === '/';
	}
	exports.isAbsolute = isAbsolute;
	// posix version
	/** JSDoc */
	function join() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i] = arguments[_i];
	    }
	    return normalize(args.join('/'));
	}
	exports.join = join;
	/** JSDoc */
	function dirname(path) {
	    var result = splitPath(path);
	    var root = result[0];
	    var dir = result[1];
	    if (!root && !dir) {
	        // No dirname whatsoever
	        return '.';
	    }
	    if (dir) {
	        // It has a dirname, strip trailing slash
	        dir = dir.substr(0, dir.length - 1);
	    }
	    return root + dir;
	}
	exports.dirname = dirname;
	/** JSDoc */
	function basename(path, ext) {
	    var f = splitPath(path)[2];
	    if (ext && f.substr(ext.length * -1) === ext) {
	        f = f.substr(0, f.length - ext.length);
	    }
	    return f;
	}
	exports.basename = basename;

	});

	unwrapExports(path);
	var path_1 = path.resolve;
	var path_2 = path.relative;
	var path_3 = path.normalize;
	var path_4 = path.isAbsolute;
	var path_5 = path.join;
	var path_6 = path.dirname;
	var path_7 = path.basename;

	var rewriteframes = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	/** Rewrite event frames paths */
	var RewriteFrames = /** @class */ (function () {
	    /**
	     * @inheritDoc
	     */
	    function RewriteFrames(options) {
	        if (options === void 0) { options = {}; }
	        var _this = this;
	        /**
	         * @inheritDoc
	         */
	        this.name = RewriteFrames.id;
	        /**
	         * @inheritDoc
	         */
	        this.iteratee = function (frame) { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
	            var base;
	            return tslib_es6.__generator(this, function (_a) {
	                if (frame.filename && frame.filename.startsWith('/')) {
	                    base = this.root ? path.relative(this.root, frame.filename) : path.basename(frame.filename);
	                    frame.filename = "app:///" + base;
	                }
	                return [2 /*return*/, frame];
	            });
	        }); };
	        if (options.root) {
	            this.root = options.root;
	        }
	        if (options.iteratee) {
	            this.iteratee = options.iteratee;
	        }
	    }
	    /**
	     * @inheritDoc
	     */
	    RewriteFrames.prototype.setupOnce = function () {
	        var _this = this;
	        dist$1.addGlobalEventProcessor(function (event) { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
	            var self;
	            return tslib_es6.__generator(this, function (_a) {
	                self = dist$1.getCurrentHub().getIntegration(RewriteFrames);
	                if (self) {
	                    return [2 /*return*/, self.process(event)];
	                }
	                return [2 /*return*/, event];
	            });
	        }); });
	    };
	    /** JSDoc */
	    RewriteFrames.prototype.process = function (event) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            var frames, _a, _b, _i, i, _c, _d;
	            return tslib_es6.__generator(this, function (_e) {
	                switch (_e.label) {
	                    case 0:
	                        frames = this.getFramesFromEvent(event);
	                        if (!frames) return [3 /*break*/, 4];
	                        _a = [];
	                        for (_b in frames)
	                            _a.push(_b);
	                        _i = 0;
	                        _e.label = 1;
	                    case 1:
	                        if (!(_i < _a.length)) return [3 /*break*/, 4];
	                        i = _a[_i];
	                        // tslint:disable-next-line
	                        _c = frames;
	                        _d = i;
	                        return [4 /*yield*/, this.iteratee(frames[i])];
	                    case 2:
	                        // tslint:disable-next-line
	                        _c[_d] = _e.sent();
	                        _e.label = 3;
	                    case 3:
	                        _i++;
	                        return [3 /*break*/, 1];
	                    case 4: return [2 /*return*/, event];
	                }
	            });
	        });
	    };
	    /** JSDoc */
	    RewriteFrames.prototype.getFramesFromEvent = function (event) {
	        var exception = event.exception;
	        if (exception) {
	            try {
	                // tslint:disable-next-line:no-unsafe-any
	                return exception.values[0].stacktrace.frames;
	            }
	            catch (_oO) {
	                return undefined;
	            }
	        }
	        else if (event.stacktrace) {
	            return event.stacktrace.frames;
	        }
	        else {
	            return undefined;
	        }
	    };
	    /**
	     * @inheritDoc
	     */
	    RewriteFrames.id = 'RewriteFrames';
	    return RewriteFrames;
	}());
	exports.RewriteFrames = RewriteFrames;

	});

	unwrapExports(rewriteframes);
	var rewriteframes_1 = rewriteframes.RewriteFrames;

	var integrations = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.Dedupe = dedupe.Dedupe;

	exports.FunctionToString = functiontostring.FunctionToString;

	exports.SDKInformation = sdkinformation.SDKInformation;

	exports.InboundFilters = inboundfilters.InboundFilters;

	exports.ExtraErrorData = extraerrordata.ExtraErrorData;

	exports.Debug = debug.Debug;

	exports.RewriteFrames = rewriteframes.RewriteFrames;

	});

	unwrapExports(integrations);
	var integrations_1 = integrations.Dedupe;
	var integrations_2 = integrations.FunctionToString;
	var integrations_3 = integrations.SDKInformation;
	var integrations_4 = integrations.InboundFilters;
	var integrations_5 = integrations.ExtraErrorData;
	var integrations_6 = integrations.Debug;
	var integrations_7 = integrations.RewriteFrames;

	var dist$3 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.addBreadcrumb = dist$2.addBreadcrumb;
	exports.captureException = dist$2.captureException;
	exports.captureEvent = dist$2.captureEvent;
	exports.captureMessage = dist$2.captureMessage;
	exports.configureScope = dist$2.configureScope;
	exports.withScope = dist$2.withScope;

	exports.addGlobalEventProcessor = dist$1.addGlobalEventProcessor;
	exports.getCurrentHub = dist$1.getCurrentHub;
	exports.Hub = dist$1.Hub;
	exports.getHubFromCarrier = dist$1.getHubFromCarrier;
	exports.Scope = dist$1.Scope;

	exports.API = api.API;

	exports.BaseClient = baseclient.BaseClient;

	exports.BaseBackend = basebackend.BaseBackend;

	exports.Dsn = dsn.Dsn;

	exports.SentryError = error.SentryError;

	exports.PromiseBuffer = promisebuffer.PromiseBuffer;

	exports.LogLevel = interfaces.LogLevel;

	exports.initAndBind = sdk.initAndBind;

	exports.NoopTransport = noop.NoopTransport;

	exports.Integrations = integrations;

	});

	unwrapExports(dist$3);
	var dist_1$3 = dist$3.addBreadcrumb;
	var dist_2$3 = dist$3.captureException;
	var dist_3$2 = dist$3.captureEvent;
	var dist_4$2 = dist$3.captureMessage;
	var dist_5$2 = dist$3.configureScope;
	var dist_6$2 = dist$3.withScope;
	var dist_7$2 = dist$3.addGlobalEventProcessor;
	var dist_8 = dist$3.getCurrentHub;
	var dist_9 = dist$3.Hub;
	var dist_10 = dist$3.getHubFromCarrier;
	var dist_11 = dist$3.Scope;
	var dist_12 = dist$3.API;
	var dist_13 = dist$3.BaseClient;
	var dist_14 = dist$3.BaseBackend;
	var dist_15 = dist$3.Dsn;
	var dist_16 = dist$3.SentryError;
	var dist_17 = dist$3.PromiseBuffer;
	var dist_18 = dist$3.LogLevel;
	var dist_19 = dist$3.initAndBind;
	var dist_20 = dist$3.NoopTransport;
	var dist_21 = dist$3.Integrations;

	var fs = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var _0777 = parseInt('0777', 8);
	/**
	 * Asynchronously reads given files content.
	 *
	 * @param path A relative or absolute path to the file
	 * @returns A Promise that resolves when the file has been read.
	 */
	function readFileAsync(path) {
	    return tslib_es6.__awaiter(this, void 0, void 0, function () {
	        return tslib_es6.__generator(this, function (_a) {
	            // We cannot use util.promisify here because that was only introduced in Node
	            // 8 and we need to support older Node versions.
	            return [2 /*return*/, new Promise(function (res, reject) {
	                    fs$1.readFile(path, 'utf8', function (err, data) {
	                        if (err) {
	                            reject(err);
	                        }
	                        else {
	                            res(data);
	                        }
	                    });
	                })];
	        });
	    });
	}
	exports.readFileAsync = readFileAsync;
	/**
	 * Asynchronously creates the given directory.
	 *
	 * @param path A relative or absolute path to the directory.
	 * @param mode The permission mode.
	 * @returns A Promise that resolves when the path has been created.
	 */
	function mkdirAsync(path, mode) {
	    return tslib_es6.__awaiter(this, void 0, void 0, function () {
	        return tslib_es6.__generator(this, function (_a) {
	            // We cannot use util.promisify here because that was only introduced in Node
	            // 8 and we need to support older Node versions.
	            return [2 /*return*/, new Promise(function (res, reject) {
	                    fs$1.mkdir(path, mode, function (err) {
	                        if (err) {
	                            reject(err);
	                        }
	                        else {
	                            res();
	                        }
	                    });
	                })];
	        });
	    });
	}
	/**
	 * Recursively creates the given path.
	 *
	 * @param path A relative or absolute path to create.
	 * @returns A Promise that resolves when the path has been created.
	 */
	function mkdirp(path) {
	    return tslib_es6.__awaiter(this, void 0, void 0, function () {
	        var mode, realPath, err_1, error;
	        return tslib_es6.__generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    mode = _0777 & ~process.umask();
	                    realPath = path$1.resolve(path);
	                    _a.label = 1;
	                case 1:
	                    _a.trys.push([1, 2, , 6]);
	                    return [2 /*return*/, mkdirAsync(realPath, mode)];
	                case 2:
	                    err_1 = _a.sent();
	                    error = err_1;
	                    if (!(error && error.code === 'ENOENT')) return [3 /*break*/, 4];
	                    return [4 /*yield*/, mkdirp(path$1.dirname(realPath))];
	                case 3:
	                    _a.sent();
	                    return [2 /*return*/, mkdirAsync(realPath, mode)];
	                case 4:
	                    try {
	                        if (!fs$1.statSync(realPath).isDirectory()) {
	                            throw err_1;
	                        }
	                    }
	                    catch (_) {
	                        throw err_1;
	                    }
	                    _a.label = 5;
	                case 5: return [3 /*break*/, 6];
	                case 6: return [2 /*return*/];
	            }
	        });
	    });
	}
	exports.mkdirp = mkdirp;
	/**
	 * Synchronous version of {@link mkdirp}.
	 *
	 * @param path A relative or absolute path to create.
	 */
	function mkdirpSync(path) {
	    // tslint:disable-next-line:no-bitwise
	    var mode = _0777 & ~process.umask();
	    var realPath = path$1.resolve(path);
	    try {
	        fs$1.mkdirSync(realPath, mode);
	    }
	    catch (err) {
	        var error = err;
	        if (error && error.code === 'ENOENT') {
	            mkdirpSync(path$1.dirname(realPath));
	            fs$1.mkdirSync(realPath, mode);
	        }
	        else {
	            try {
	                if (!fs$1.statSync(realPath).isDirectory()) {
	                    throw err;
	                }
	            }
	            catch (_) {
	                throw err;
	            }
	        }
	    }
	}
	exports.mkdirpSync = mkdirpSync;

	});

	unwrapExports(fs);
	var fs_2 = fs.readFileAsync;
	var fs_3 = fs.mkdirp;
	var fs_4 = fs.mkdirpSync;

	var lru = createCommonjsModule(function (module, exports) {
	/**
	 * A doubly linked list-based Least Recently Used (LRU) cache. Will keep most
	 * recently used items while discarding least recently used items when its limit
	 * is reached.
	 *
	 * Licensed under MIT. Copyright (c) 2010 Rasmus Andersson <http://hunch.se/>
	 * See README.md for details.
	 *
	 * Illustration of the design:
	 *
	 *       entry             entry             entry             entry
	 *       ______            ______            ______            ______
	 *      | head |.newer => |      |.newer => |      |.newer => | tail |
	 *      |  A   |          |  B   |          |  C   |          |  D   |
	 *      |______| <= older.|______| <= older.|______| <= older.|______|
	 *
	 *  removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added
	 */
	(function(g,f){
	  const e = exports;
	  f(e);
	})(commonjsGlobal, function(exports) {

	const NEWER = Symbol('newer');
	const OLDER = Symbol('older');

	function LRUMap(limit, entries) {
	  if (typeof limit !== 'number') {
	    // called as (entries)
	    entries = limit;
	    limit = 0;
	  }

	  this.size = 0;
	  this.limit = limit;
	  this.oldest = this.newest = undefined;
	  this._keymap = new Map();

	  if (entries) {
	    this.assign(entries);
	    if (limit < 1) {
	      this.limit = this.size;
	    }
	  }
	}

	exports.LRUMap = LRUMap;

	function Entry(key, value) {
	  this.key = key;
	  this.value = value;
	  this[NEWER] = undefined;
	  this[OLDER] = undefined;
	}


	LRUMap.prototype._markEntryAsUsed = function(entry) {
	  if (entry === this.newest) {
	    // Already the most recenlty used entry, so no need to update the list
	    return;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry[NEWER]) {
	    if (entry === this.oldest) {
	      this.oldest = entry[NEWER];
	    }
	    entry[NEWER][OLDER] = entry[OLDER]; // C <-- E.
	  }
	  if (entry[OLDER]) {
	    entry[OLDER][NEWER] = entry[NEWER]; // C. --> E
	  }
	  entry[NEWER] = undefined; // D --x
	  entry[OLDER] = this.newest; // D. --> E
	  if (this.newest) {
	    this.newest[NEWER] = entry; // E. <-- D
	  }
	  this.newest = entry;
	};

	LRUMap.prototype.assign = function(entries) {
	  let entry, limit = this.limit || Number.MAX_VALUE;
	  this._keymap.clear();
	  let it = entries[Symbol.iterator]();
	  for (let itv = it.next(); !itv.done; itv = it.next()) {
	    let e = new Entry(itv.value[0], itv.value[1]);
	    this._keymap.set(e.key, e);
	    if (!entry) {
	      this.oldest = e;
	    } else {
	      entry[NEWER] = e;
	      e[OLDER] = entry;
	    }
	    entry = e;
	    if (limit-- == 0) {
	      throw new Error('overflow');
	    }
	  }
	  this.newest = entry;
	  this.size = this._keymap.size;
	};

	LRUMap.prototype.get = function(key) {
	  // First, find our cache entry
	  var entry = this._keymap.get(key);
	  if (!entry) return; // Not cached. Sorry.
	  // As <key> was found in the cache, register it as being requested recently
	  this._markEntryAsUsed(entry);
	  return entry.value;
	};

	LRUMap.prototype.set = function(key, value) {
	  var entry = this._keymap.get(key);

	  if (entry) {
	    // update existing
	    entry.value = value;
	    this._markEntryAsUsed(entry);
	    return this;
	  }

	  // new entry
	  this._keymap.set(key, (entry = new Entry(key, value)));

	  if (this.newest) {
	    // link previous tail to the new tail (entry)
	    this.newest[NEWER] = entry;
	    entry[OLDER] = this.newest;
	  } else {
	    // we're first in -- yay
	    this.oldest = entry;
	  }

	  // add new entry to the end of the linked list -- it's now the freshest entry.
	  this.newest = entry;
	  ++this.size;
	  if (this.size > this.limit) {
	    // we hit the limit -- remove the head
	    this.shift();
	  }

	  return this;
	};

	LRUMap.prototype.shift = function() {
	  // todo: handle special case when limit == 1
	  var entry = this.oldest;
	  if (entry) {
	    if (this.oldest[NEWER]) {
	      // advance the list
	      this.oldest = this.oldest[NEWER];
	      this.oldest[OLDER] = undefined;
	    } else {
	      // the cache is exhausted
	      this.oldest = undefined;
	      this.newest = undefined;
	    }
	    // Remove last strong reference to <entry> and remove links from the purged
	    // entry being returned:
	    entry[NEWER] = entry[OLDER] = undefined;
	    this._keymap.delete(entry.key);
	    --this.size;
	    return [entry.key, entry.value];
	  }
	};

	// ----------------------------------------------------------------------------
	// Following code is optional and can be removed without breaking the core
	// functionality.

	LRUMap.prototype.find = function(key) {
	  let e = this._keymap.get(key);
	  return e ? e.value : undefined;
	};

	LRUMap.prototype.has = function(key) {
	  return this._keymap.has(key);
	};

	LRUMap.prototype['delete'] = function(key) {
	  var entry = this._keymap.get(key);
	  if (!entry) return;
	  this._keymap.delete(entry.key);
	  if (entry[NEWER] && entry[OLDER]) {
	    // relink the older entry with the newer entry
	    entry[OLDER][NEWER] = entry[NEWER];
	    entry[NEWER][OLDER] = entry[OLDER];
	  } else if (entry[NEWER]) {
	    // remove the link to us
	    entry[NEWER][OLDER] = undefined;
	    // link the newer entry to head
	    this.oldest = entry[NEWER];
	  } else if (entry[OLDER]) {
	    // remove the link to us
	    entry[OLDER][NEWER] = undefined;
	    // link the newer entry to head
	    this.newest = entry[OLDER];
	  } else {// if(entry[OLDER] === undefined && entry.newer === undefined) {
	    this.oldest = this.newest = undefined;
	  }

	  this.size--;
	  return entry.value;
	};

	LRUMap.prototype.clear = function() {
	  // Not clearing links should be safe, as we don't expose live links to user
	  this.oldest = this.newest = undefined;
	  this.size = 0;
	  this._keymap.clear();
	};


	function EntryIterator(oldestEntry) { this.entry = oldestEntry; }
	EntryIterator.prototype[Symbol.iterator] = function() { return this; };
	EntryIterator.prototype.next = function() {
	  let ent = this.entry;
	  if (ent) {
	    this.entry = ent[NEWER];
	    return { done: false, value: [ent.key, ent.value] };
	  } else {
	    return { done: true, value: undefined };
	  }
	};


	function KeyIterator(oldestEntry) { this.entry = oldestEntry; }
	KeyIterator.prototype[Symbol.iterator] = function() { return this; };
	KeyIterator.prototype.next = function() {
	  let ent = this.entry;
	  if (ent) {
	    this.entry = ent[NEWER];
	    return { done: false, value: ent.key };
	  } else {
	    return { done: true, value: undefined };
	  }
	};

	function ValueIterator(oldestEntry) { this.entry = oldestEntry; }
	ValueIterator.prototype[Symbol.iterator] = function() { return this; };
	ValueIterator.prototype.next = function() {
	  let ent = this.entry;
	  if (ent) {
	    this.entry = ent[NEWER];
	    return { done: false, value: ent.value };
	  } else {
	    return { done: true, value: undefined };
	  }
	};


	LRUMap.prototype.keys = function() {
	  return new KeyIterator(this.oldest);
	};

	LRUMap.prototype.values = function() {
	  return new ValueIterator(this.oldest);
	};

	LRUMap.prototype.entries = function() {
	  return this;
	};

	LRUMap.prototype[Symbol.iterator] = function() {
	  return new EntryIterator(this.oldest);
	};

	LRUMap.prototype.forEach = function(fun, thisObj) {
	  if (typeof thisObj !== 'object') {
	    thisObj = this;
	  }
	  let entry = this.oldest;
	  while (entry) {
	    fun.call(thisObj, entry.value, entry.key, this);
	    entry = entry[NEWER];
	  }
	};

	/** Returns a JSON (array) representation */
	LRUMap.prototype.toJSON = function() {
	  var s = new Array(this.size), i = 0, entry = this.oldest;
	  while (entry) {
	    s[i++] = { key: entry.key, value: entry.value };
	    entry = entry[NEWER];
	  }
	  return s;
	};

	/** Returns a String representation */
	LRUMap.prototype.toString = function() {
	  var s = '', entry = this.oldest;
	  while (entry) {
	    s += String(entry.key)+':'+entry.value;
	    entry = entry[NEWER];
	    if (entry) {
	      s += ' < ';
	    }
	  }
	  return s;
	};

	});
	});

	var stackTrace = createCommonjsModule(function (module, exports) {
	exports.get = function(belowFn) {
	  var oldLimit = Error.stackTraceLimit;
	  Error.stackTraceLimit = Infinity;

	  var dummyObject = {};

	  var v8Handler = Error.prepareStackTrace;
	  Error.prepareStackTrace = function(dummyObject, v8StackTrace) {
	    return v8StackTrace;
	  };
	  Error.captureStackTrace(dummyObject, belowFn || exports.get);

	  var v8StackTrace = dummyObject.stack;
	  Error.prepareStackTrace = v8Handler;
	  Error.stackTraceLimit = oldLimit;

	  return v8StackTrace;
	};

	exports.parse = function(err) {
	  if (!err.stack) {
	    return [];
	  }

	  var self = this;
	  var lines = err.stack.split('\n').slice(1);

	  return lines
	    .map(function(line) {
	      if (line.match(/^\s*[-]{4,}$/)) {
	        return self._createParsedCallSite({
	          fileName: line,
	          lineNumber: null,
	          functionName: null,
	          typeName: null,
	          methodName: null,
	          columnNumber: null,
	          'native': null,
	        });
	      }

	      var lineMatch = line.match(/at (?:(.+)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/);
	      if (!lineMatch) {
	        return;
	      }

	      var object = null;
	      var method = null;
	      var functionName = null;
	      var typeName = null;
	      var methodName = null;
	      var isNative = (lineMatch[5] === 'native');

	      if (lineMatch[1]) {
	        functionName = lineMatch[1];
	        var methodStart = functionName.lastIndexOf('.');
	        if (functionName[methodStart-1] == '.')
	          methodStart--;
	        if (methodStart > 0) {
	          object = functionName.substr(0, methodStart);
	          method = functionName.substr(methodStart + 1);
	          var objectEnd = object.indexOf('.Module');
	          if (objectEnd > 0) {
	            functionName = functionName.substr(objectEnd + 1);
	            object = object.substr(0, objectEnd);
	          }
	        }
	        typeName = null;
	      }

	      if (method) {
	        typeName = object;
	        methodName = method;
	      }

	      if (method === '<anonymous>') {
	        methodName = null;
	        functionName = null;
	      }

	      var properties = {
	        fileName: lineMatch[2] || null,
	        lineNumber: parseInt(lineMatch[3], 10) || null,
	        functionName: functionName,
	        typeName: typeName,
	        methodName: methodName,
	        columnNumber: parseInt(lineMatch[4], 10) || null,
	        'native': isNative,
	      };

	      return self._createParsedCallSite(properties);
	    })
	    .filter(function(callSite) {
	      return !!callSite;
	    });
	};

	function CallSite(properties) {
	  for (var property in properties) {
	    this[property] = properties[property];
	  }
	}

	var strProperties = [
	  'this',
	  'typeName',
	  'functionName',
	  'methodName',
	  'fileName',
	  'lineNumber',
	  'columnNumber',
	  'function',
	  'evalOrigin'
	];
	var boolProperties = [
	  'topLevel',
	  'eval',
	  'native',
	  'constructor'
	];
	strProperties.forEach(function (property) {
	  CallSite.prototype[property] = null;
	  CallSite.prototype['get' + property[0].toUpperCase() + property.substr(1)] = function () {
	    return this[property];
	  };
	});
	boolProperties.forEach(function (property) {
	  CallSite.prototype[property] = false;
	  CallSite.prototype['is' + property[0].toUpperCase() + property.substr(1)] = function () {
	    return this[property];
	  };
	});

	exports._createParsedCallSite = function(properties) {
	  return new CallSite(properties);
	};
	});
	var stackTrace_1 = stackTrace.get;
	var stackTrace_2 = stackTrace.parse;
	var stackTrace_3 = stackTrace._createParsedCallSite;

	var parsers = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });






	// tslint:disable-next-line:no-unsafe-any
	var DEFAULT_LINES_OF_CONTEXT = 7;
	var FILE_CONTENT_CACHE = new lru.LRUMap(100);
	/**
	 * Resets the file cache. Exists for testing purposes.
	 */
	function resetFileContentCache() {
	    FILE_CONTENT_CACHE.clear();
	}
	exports.resetFileContentCache = resetFileContentCache;
	/** JSDoc */
	function getFunction(frame) {
	    try {
	        return frame.getFunctionName() || frame.getTypeName() + "." + (frame.getMethodName() || '<anonymous>');
	    }
	    catch (e) {
	        // This seems to happen sometimes when using 'use strict',
	        // stemming from `getTypeName`.
	        // [TypeError: Cannot read property 'constructor' of undefined]
	        return '<anonymous>';
	    }
	}
	var mainModule = ((commonjsRequire.main && commonjsRequire.main.filename && path.dirname(commonjsRequire.main.filename)) ||
	    commonjsGlobal.process.cwd()) + "/";
	/** JSDoc */
	function getModule(filename, base) {
	    if (!base) {
	        base = mainModule; // tslint:disable-line:no-parameter-reassignment
	    }
	    // It's specifically a module
	    var file = path.basename(filename, '.js');
	    filename = path.dirname(filename); // tslint:disable-line:no-parameter-reassignment
	    var n = filename.lastIndexOf('/node_modules/');
	    if (n > -1) {
	        // /node_modules/ is 14 chars
	        return filename.substr(n + 14).replace(/\//g, '.') + ":" + file;
	    }
	    // Let's see if it's a part of the main module
	    // To be a part of main module, it has to share the same base
	    n = (filename + "/").lastIndexOf(base, 0);
	    if (n === 0) {
	        var moduleName = filename.substr(base.length).replace(/\//g, '.');
	        if (moduleName) {
	            moduleName += ':';
	        }
	        moduleName += file;
	        return moduleName;
	    }
	    return file;
	}
	/**
	 * This function reads file contents and caches them in a global LRU cache.
	 * Returns a Promise filepath => content array for all files that we were able to read.
	 *
	 * @param filenames Array of filepaths to read content from.
	 */
	function readSourceFiles(filenames) {
	    return tslib_es6.__awaiter(this, void 0, void 0, function () {
	        var sourceFiles, i, filename, cache, content, _1;
	        return tslib_es6.__generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    // we're relying on filenames being de-duped already
	                    if (filenames.length === 0) {
	                        return [2 /*return*/, {}];
	                    }
	                    sourceFiles = {};
	                    i = 0;
	                    _a.label = 1;
	                case 1:
	                    if (!(i < filenames.length)) return [3 /*break*/, 7];
	                    filename = filenames[i];
	                    cache = FILE_CONTENT_CACHE.get(filename);
	                    // We have a cache hit
	                    if (cache !== undefined) {
	                        // If it's not null (which means we found a file and have a content)
	                        // we set the content and return it later.
	                        if (cache !== null) {
	                            sourceFiles[filename] = cache;
	                        }
	                        // In any case we want to skip here then since we have a content already or we couldn't
	                        // read the file and don't want to try again.
	                        return [3 /*break*/, 6];
	                    }
	                    content = null;
	                    _a.label = 2;
	                case 2:
	                    _a.trys.push([2, 4, , 5]);
	                    return [4 /*yield*/, fs.readFileAsync(filename)];
	                case 3:
	                    content = _a.sent();
	                    sourceFiles[filename] = content;
	                    return [3 /*break*/, 5];
	                case 4:
	                    _1 = _a.sent();
	                    return [3 /*break*/, 5];
	                case 5:
	                    // We always want to set the cache, even to null which means there was an error reading the file.
	                    // We do not want to try to read the file again.
	                    FILE_CONTENT_CACHE.set(filename, content);
	                    _a.label = 6;
	                case 6:
	                    i++;
	                    return [3 /*break*/, 1];
	                case 7: return [2 /*return*/, sourceFiles];
	            }
	        });
	    });
	}
	/** JSDoc */
	function extractStackFromError(error) {
	    return tslib_es6.__awaiter(this, void 0, void 0, function () {
	        var stack;
	        return tslib_es6.__generator(this, function (_a) {
	            stack = stackTrace.parse(error);
	            if (!stack) {
	                return [2 /*return*/, []];
	            }
	            return [2 /*return*/, stack];
	        });
	    });
	}
	exports.extractStackFromError = extractStackFromError;
	/** JSDoc */
	function parseStack(stack, options) {
	    return tslib_es6.__awaiter(this, void 0, void 0, function () {
	        var filesToRead, linesOfContext, frames, _2;
	        return tslib_es6.__generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    filesToRead = [];
	                    linesOfContext = options && options.frameContextLines !== undefined ? options.frameContextLines : DEFAULT_LINES_OF_CONTEXT;
	                    frames = stack.map(function (frame) {
	                        var parsedFrame = {
	                            colno: frame.getColumnNumber(),
	                            filename: frame.getFileName() || '',
	                            function: getFunction(frame),
	                            lineno: frame.getLineNumber(),
	                        };
	                        var isInternal = frame.isNative() ||
	                            (parsedFrame.filename &&
	                                !parsedFrame.filename.startsWith('/') &&
	                                !parsedFrame.filename.startsWith('.') &&
	                                parsedFrame.filename.indexOf(':\\') !== 1);
	                        // in_app is all that's not an internal Node function or a module within node_modules
	                        // note that isNative appears to return true even for node core libraries
	                        // see https://github.com/getsentry/raven-node/issues/176
	                        parsedFrame.in_app =
	                            !isInternal && parsedFrame.filename !== undefined && !parsedFrame.filename.includes('node_modules/');
	                        // Extract a module name based on the filename
	                        if (parsedFrame.filename) {
	                            parsedFrame.module = getModule(parsedFrame.filename);
	                            if (!isInternal && linesOfContext > 0) {
	                                filesToRead.push(parsedFrame.filename);
	                            }
	                        }
	                        return parsedFrame;
	                    });
	                    // We do an early return if we do not want to fetch context liens
	                    if (linesOfContext <= 0) {
	                        return [2 /*return*/, frames];
	                    }
	                    _a.label = 1;
	                case 1:
	                    _a.trys.push([1, 3, , 4]);
	                    return [4 /*yield*/, addPrePostContext(filesToRead, frames, linesOfContext)];
	                case 2: return [2 /*return*/, _a.sent()];
	                case 3:
	                    _2 = _a.sent();
	                    // This happens in electron for example where we are not able to read files from asar.
	                    // So it's fine, we recover be just returning all frames without pre/post context.
	                    return [2 /*return*/, frames];
	                case 4: return [2 /*return*/];
	            }
	        });
	    });
	}
	exports.parseStack = parseStack;
	/**
	 * This function tries to read the source files + adding pre and post context (source code)
	 * to a frame.
	 * @param filesToRead string[] of filepaths
	 * @param frames StackFrame[] containg all frames
	 */
	function addPrePostContext(filesToRead, frames, linesOfContext) {
	    return tslib_es6.__awaiter(this, void 0, void 0, function () {
	        var sourceFiles;
	        return tslib_es6.__generator(this, function (_a) {
	            switch (_a.label) {
	                case 0: return [4 /*yield*/, readSourceFiles(filesToRead)];
	                case 1:
	                    sourceFiles = _a.sent();
	                    return [2 /*return*/, frames.map(function (frame) {
	                            if (frame.filename && sourceFiles[frame.filename]) {
	                                try {
	                                    var lines = sourceFiles[frame.filename].split('\n');
	                                    frame.pre_context = lines
	                                        .slice(Math.max(0, (frame.lineno || 0) - (linesOfContext + 1)), (frame.lineno || 0) - 1)
	                                        .map(function (line) { return string.snipLine(line, 0); });
	                                    frame.context_line = string.snipLine(lines[(frame.lineno || 0) - 1], frame.colno || 0);
	                                    frame.post_context = lines
	                                        .slice(frame.lineno || 0, (frame.lineno || 0) + linesOfContext)
	                                        .map(function (line) { return string.snipLine(line, 0); });
	                                }
	                                catch (e) {
	                                    // anomaly, being defensive in case
	                                    // unlikely to ever happen in practice but can definitely happen in theory
	                                }
	                            }
	                            return frame;
	                        })];
	            }
	        });
	    });
	}
	/** JSDoc */
	function getExceptionFromError(error, options) {
	    return tslib_es6.__awaiter(this, void 0, void 0, function () {
	        var name, stack, frames;
	        return tslib_es6.__generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    name = error.name || error.constructor.name;
	                    return [4 /*yield*/, extractStackFromError(error)];
	                case 1:
	                    stack = _a.sent();
	                    return [4 /*yield*/, parseStack(stack, options)];
	                case 2:
	                    frames = _a.sent();
	                    return [2 /*return*/, {
	                            stacktrace: {
	                                frames: prepareFramesForEvent(frames),
	                            },
	                            type: name,
	                            value: error.message,
	                        }];
	            }
	        });
	    });
	}
	exports.getExceptionFromError = getExceptionFromError;
	/** JSDoc */
	function parseError(error, options) {
	    return tslib_es6.__awaiter(this, void 0, void 0, function () {
	        var name, exception;
	        return tslib_es6.__generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    name = error.name || error.constructor.name;
	                    return [4 /*yield*/, getExceptionFromError(error, options)];
	                case 1:
	                    exception = _a.sent();
	                    return [2 /*return*/, {
	                            exception: {
	                                values: [exception],
	                            },
	                            message: name + ": " + (error.message || '<no message>'),
	                        }];
	            }
	        });
	    });
	}
	exports.parseError = parseError;
	/** JSDoc */
	function prepareFramesForEvent(stack) {
	    if (!stack || !stack.length) {
	        return [];
	    }
	    var localStack = stack;
	    var firstFrameFunction = localStack[0].function || '';
	    if (firstFrameFunction.includes('captureMessage') || firstFrameFunction.includes('captureException')) {
	        localStack = localStack.slice(1);
	    }
	    // The frame where the crash happened, should be the last entry in the array
	    return localStack.reverse();
	}
	exports.prepareFramesForEvent = prepareFramesForEvent;

	});

	unwrapExports(parsers);
	var parsers_1 = parsers.resetFileContentCache;
	var parsers_2 = parsers.extractStackFromError;
	var parsers_3 = parsers.parseStack;
	var parsers_4 = parsers.getExceptionFromError;
	var parsers_5 = parsers.parseError;
	var parsers_6 = parsers.prepareFramesForEvent;

	var version = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SDK_NAME = 'sentry.javascript.node';
	exports.SDK_VERSION = '4.6.4';

	});

	unwrapExports(version);
	var version_1 = version.SDK_NAME;
	var version_2 = version.SDK_VERSION;

	var base = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	/** Base Transport class implementation */
	var BaseTransport = /** @class */ (function () {
	    /** Create instance and set this.dsn */
	    function BaseTransport(options) {
	        this.options = options;
	        /** A simple buffer holding all requests. */
	        this.buffer = new dist$3.PromiseBuffer(30);
	        this.api = new dist$3.API(options.dsn);
	    }
	    /** Returns a build request option object used by request */
	    BaseTransport.prototype.getRequestOptions = function () {
	        var headers = tslib_es6.__assign({}, this.api.getRequestHeaders(version.SDK_NAME, version.SDK_VERSION), this.options.headers);
	        var dsn = this.api.getDsn();
	        var options = {
	            agent: this.client,
	            headers: headers,
	            hostname: dsn.host,
	            method: 'POST',
	            path: this.api.getStoreEndpointPath(),
	            port: dsn.port,
	            protocol: dsn.protocol + ":",
	        };
	        if (this.options.caCerts) {
	            options.ca = fs$1.readFileSync(this.options.caCerts);
	        }
	        return options;
	    };
	    /** JSDoc */
	    BaseTransport.prototype.sendWithModule = function (httpModule, body) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            return tslib_es6.__generator(this, function (_a) {
	                return [2 /*return*/, this.buffer.add(new Promise(function (resolve, reject) {
	                        var req = httpModule.request(_this.getRequestOptions(), function (res) {
	                            res.setEncoding('utf8');
	                            if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
	                                resolve({
	                                    status: dist.Status.fromHttpCode(res.statusCode),
	                                });
	                            }
	                            else {
	                                if (res.headers && res.headers['x-sentry-error']) {
	                                    var reason = res.headers['x-sentry-error'];
	                                    reject(new dist$3.SentryError("HTTP Error (" + res.statusCode + "): " + reason));
	                                }
	                                else {
	                                    reject(new dist$3.SentryError("HTTP Error (" + res.statusCode + ")"));
	                                }
	                            }
	                            // force the socket to drain
	                            res.on('data', function () {
	                                // Drain
	                            });
	                            res.on('end', function () {
	                                // Drain
	                            });
	                        });
	                        req.on('error', reject);
	                        req.end(body);
	                    }))];
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseTransport.prototype.sendEvent = function (_) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            return tslib_es6.__generator(this, function (_a) {
	                throw new dist$3.SentryError('Transport Class has to implement `sendEvent` method.');
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    BaseTransport.prototype.close = function (timeout) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            return tslib_es6.__generator(this, function (_a) {
	                return [2 /*return*/, this.buffer.drain(timeout)];
	            });
	        });
	    };
	    return BaseTransport;
	}());
	exports.BaseTransport = BaseTransport;

	});

	unwrapExports(base);
	var base_1 = base.BaseTransport;

	/**
	 * This currently needs to be applied to all Node.js versions
	 * in order to determine if the `req` is an HTTP or HTTPS request.
	 *
	 * There is currently no PR attempting to move this property upstream.
	 */
	https.request = (function(request) {
	  return function(_options, cb) {
	    let options;
	    if (typeof _options === 'string') {
	      options = url.parse(_options);
	    } else {
	      options = Object.assign({}, _options);
	    }
	    if (null == options.port) {
	      options.port = 443;
	    }
	    options.secureEndpoint = true;
	    return request.call(https, options, cb);
	  };
	})(https.request);

	/**
	 * This is needed for Node.js >= 9.0.0 to make sure `https.get()` uses the
	 * patched `https.request()`.
	 *
	 * Ref: https://github.com/nodejs/node/commit/5118f31
	 */
	https.get = function(options, cb) {
	  const req = https.request(options, cb);
	  req.end();
	  return req;
	};

	var es6Promise = createCommonjsModule(function (module, exports) {
	/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   v4.2.6+9869a4bc
	 */

	(function (global, factory) {
		module.exports = factory();
	}(commonjsGlobal, (function () {
	function objectOrFunction(x) {
	  var type = typeof x;
	  return x !== null && (type === 'object' || type === 'function');
	}

	function isFunction(x) {
	  return typeof x === 'function';
	}



	var _isArray = void 0;
	if (Array.isArray) {
	  _isArray = Array.isArray;
	} else {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	}

	var isArray = _isArray;

	var len = 0;
	var vertxNext = void 0;
	var customSchedulerFn = void 0;

	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};

	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}

	function setAsap(asapFn) {
	  asap = asapFn;
	}

	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}

	// vertx
	function useVertxTimer() {
	  if (typeof vertxNext !== 'undefined') {
	    return function () {
	      vertxNext(flush);
	    };
	  }

	  return useSetTimeout();
	}

	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });

	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}

	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}

	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}

	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];

	    callback(arg);

	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }

	  len = 0;
	}

	function attemptVertx() {
	  try {
	    var vertx = Function('return this')().require('vertx');
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}

	var scheduleFlush = void 0;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && typeof commonjsRequire === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}

	function then(onFulfillment, onRejection) {
	  var parent = this;

	  var child = new this.constructor(noop);

	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }

	  var _state = parent._state;


	  if (_state) {
	    var callback = arguments[_state - 1];
	    asap(function () {
	      return invokeCallback(_state, child, callback, parent._result);
	    });
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }

	  return child;
	}

	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:

	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });

	  promise.then(function(value){
	    // value === 1
	  });
	  ```

	  Instead of writing the above, your code now simply becomes the following:

	  ```javascript
	  let promise = Promise.resolve(1);

	  promise.then(function(value){
	    // value === 1
	  });
	  ```

	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve$1(object) {
	  /*jshint validthis:true */
	  var Constructor = this;

	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }

	  var promise = new Constructor(noop);
	  resolve(promise, object);
	  return promise;
	}

	var PROMISE_ID = Math.random().toString(36).substring(2);

	function noop() {}

	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;

	var TRY_CATCH_ERROR = { error: null };

	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}

	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}

	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    TRY_CATCH_ERROR.error = error;
	    return TRY_CATCH_ERROR;
	  }
	}

	function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then$$1.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}

	function handleForeignThenable(promise, thenable, then$$1) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then$$1, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;

	      reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));

	    if (!sealed && error) {
	      sealed = true;
	      reject(promise, error);
	    }
	  }, promise);
	}

	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return resolve(promise, value);
	    }, function (reason) {
	      return reject(promise, reason);
	    });
	  }
	}

	function handleMaybeThenable(promise, maybeThenable, then$$1) {
	  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$1 === TRY_CATCH_ERROR) {
	      reject(promise, TRY_CATCH_ERROR.error);
	      TRY_CATCH_ERROR.error = null;
	    } else if (then$$1 === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$1)) {
	      handleForeignThenable(promise, maybeThenable, then$$1);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}

	function resolve(promise, value) {
	  if (promise === value) {
	    reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}

	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }

	  publish(promise);
	}

	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }

	  promise._result = value;
	  promise._state = FULFILLED;

	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}

	function reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;

	  asap(publishRejection, promise);
	}

	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;


	  parent._onerror = null;

	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;

	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}

	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;

	  if (subscribers.length === 0) {
	    return;
	  }

	  var child = void 0,
	      callback = void 0,
	      detail = promise._result;

	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];

	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }

	  promise._subscribers.length = 0;
	}

	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}

	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = void 0,
	      error = void 0,
	      succeeded = void 0,
	      failed = void 0;

	  if (hasCallback) {
	    value = tryCatch(callback, detail);

	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value.error = null;
	    } else {
	      succeeded = true;
	    }

	    if (promise === value) {
	      reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }

	  if (promise._state !== PENDING) ; else if (hasCallback && succeeded) {
	    resolve(promise, value);
	  } else if (failed) {
	    reject(promise, error);
	  } else if (settled === FULFILLED) {
	    fulfill(promise, value);
	  } else if (settled === REJECTED) {
	    reject(promise, value);
	  }
	}

	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      resolve(promise, value);
	    }, function rejectPromise(reason) {
	      reject(promise, reason);
	    });
	  } catch (e) {
	    reject(promise, e);
	  }
	}

	var id = 0;
	function nextId() {
	  return id++;
	}

	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}

	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	}

	var Enumerator = function () {
	  function Enumerator(Constructor, input) {
	    this._instanceConstructor = Constructor;
	    this.promise = new Constructor(noop);

	    if (!this.promise[PROMISE_ID]) {
	      makePromise(this.promise);
	    }

	    if (isArray(input)) {
	      this.length = input.length;
	      this._remaining = input.length;

	      this._result = new Array(this.length);

	      if (this.length === 0) {
	        fulfill(this.promise, this._result);
	      } else {
	        this.length = this.length || 0;
	        this._enumerate(input);
	        if (this._remaining === 0) {
	          fulfill(this.promise, this._result);
	        }
	      }
	    } else {
	      reject(this.promise, validationError());
	    }
	  }

	  Enumerator.prototype._enumerate = function _enumerate(input) {
	    for (var i = 0; this._state === PENDING && i < input.length; i++) {
	      this._eachEntry(input[i], i);
	    }
	  };

	  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
	    var c = this._instanceConstructor;
	    var resolve$$1 = c.resolve;


	    if (resolve$$1 === resolve$1) {
	      var _then = getThen(entry);

	      if (_then === then && entry._state !== PENDING) {
	        this._settledAt(entry._state, i, entry._result);
	      } else if (typeof _then !== 'function') {
	        this._remaining--;
	        this._result[i] = entry;
	      } else if (c === Promise$1) {
	        var promise = new c(noop);
	        handleMaybeThenable(promise, entry, _then);
	        this._willSettleAt(promise, i);
	      } else {
	        this._willSettleAt(new c(function (resolve$$1) {
	          return resolve$$1(entry);
	        }), i);
	      }
	    } else {
	      this._willSettleAt(resolve$$1(entry), i);
	    }
	  };

	  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
	    var promise = this.promise;


	    if (promise._state === PENDING) {
	      this._remaining--;

	      if (state === REJECTED) {
	        reject(promise, value);
	      } else {
	        this._result[i] = value;
	      }
	    }

	    if (this._remaining === 0) {
	      fulfill(promise, this._result);
	    }
	  };

	  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
	    var enumerator = this;

	    subscribe(promise, undefined, function (value) {
	      return enumerator._settledAt(FULFILLED, i, value);
	    }, function (reason) {
	      return enumerator._settledAt(REJECTED, i, reason);
	    });
	  };

	  return Enumerator;
	}();

	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.

	  Example:

	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];

	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```

	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:

	  Example:

	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];

	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```

	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}

	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.

	  Example:

	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });

	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });

	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```

	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:

	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });

	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });

	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```

	  An example real-world use case is implementing timeouts:

	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```

	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;

	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}

	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:

	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });

	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```

	  Instead of writing the above, your code now simply becomes the following:

	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));

	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```

	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject$1(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  reject(promise, reason);
	  return promise;
	}

	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}

	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}

	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.

	  Terminology
	  -----------

	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.

	  A promise can be in one of three states: pending, fulfilled, or rejected.

	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.

	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.


	  Basic Usage:
	  ------------

	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);

	    // on failure
	    reject(reason);
	  });

	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```

	  Advanced Usage:
	  ---------------

	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.

	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();

	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();

	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }

	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```

	  Unlike callbacks, promises are great composable primitives.

	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON

	    return values;
	  });
	  ```

	  @class Promise
	  @param {Function} resolver
	  Useful for tooling.
	  @constructor
	*/

	var Promise$1 = function () {
	  function Promise(resolver) {
	    this[PROMISE_ID] = nextId();
	    this._result = this._state = undefined;
	    this._subscribers = [];

	    if (noop !== resolver) {
	      typeof resolver !== 'function' && needsResolver();
	      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	    }
	  }

	  /**
	  The primary way of interacting with a promise is through its `then` method,
	  which registers callbacks to receive either a promise's eventual value or the
	  reason why the promise cannot be fulfilled.
	   ```js
	  findUser().then(function(user){
	    // user is available
	  }, function(reason){
	    // user is unavailable, and you are given the reason why
	  });
	  ```
	   Chaining
	  --------
	   The return value of `then` is itself a promise.  This second, 'downstream'
	  promise is resolved with the return value of the first promise's fulfillment
	  or rejection handler, or rejected if the handler throws an exception.
	   ```js
	  findUser().then(function (user) {
	    return user.name;
	  }, function (reason) {
	    return 'default name';
	  }).then(function (userName) {
	    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	    // will be `'default name'`
	  });
	   findUser().then(function (user) {
	    throw new Error('Found user, but still unhappy');
	  }, function (reason) {
	    throw new Error('`findUser` rejected and we're unhappy');
	  }).then(function (value) {
	    // never reached
	  }, function (reason) {
	    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	  });
	  ```
	  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	   ```js
	  findUser().then(function (user) {
	    throw new PedagogicalException('Upstream error');
	  }).then(function (value) {
	    // never reached
	  }).then(function (value) {
	    // never reached
	  }, function (reason) {
	    // The `PedgagocialException` is propagated all the way down to here
	  });
	  ```
	   Assimilation
	  ------------
	   Sometimes the value you want to propagate to a downstream promise can only be
	  retrieved asynchronously. This can be achieved by returning a promise in the
	  fulfillment or rejection handler. The downstream promise will then be pending
	  until the returned promise is settled. This is called *assimilation*.
	   ```js
	  findUser().then(function (user) {
	    return findCommentsByAuthor(user);
	  }).then(function (comments) {
	    // The user's comments are now available
	  });
	  ```
	   If the assimliated promise rejects, then the downstream promise will also reject.
	   ```js
	  findUser().then(function (user) {
	    return findCommentsByAuthor(user);
	  }).then(function (comments) {
	    // If `findCommentsByAuthor` fulfills, we'll have the value here
	  }, function (reason) {
	    // If `findCommentsByAuthor` rejects, we'll have the reason here
	  });
	  ```
	   Simple Example
	  --------------
	   Synchronous Example
	   ```javascript
	  let result;
	   try {
	    result = findResult();
	    // success
	  } catch(reason) {
	    // failure
	  }
	  ```
	   Errback Example
	   ```js
	  findResult(function(result, err){
	    if (err) {
	      // failure
	    } else {
	      // success
	    }
	  });
	  ```
	   Promise Example;
	   ```javascript
	  findResult().then(function(result){
	    // success
	  }, function(reason){
	    // failure
	  });
	  ```
	   Advanced Example
	  --------------
	   Synchronous Example
	   ```javascript
	  let author, books;
	   try {
	    author = findAuthor();
	    books  = findBooksByAuthor(author);
	    // success
	  } catch(reason) {
	    // failure
	  }
	  ```
	   Errback Example
	   ```js
	   function foundBooks(books) {
	   }
	   function failure(reason) {
	   }
	   findAuthor(function(author, err){
	    if (err) {
	      failure(err);
	      // failure
	    } else {
	      try {
	        findBoooksByAuthor(author, function(books, err) {
	          if (err) {
	            failure(err);
	          } else {
	            try {
	              foundBooks(books);
	            } catch(reason) {
	              failure(reason);
	            }
	          }
	        });
	      } catch(error) {
	        failure(err);
	      }
	      // success
	    }
	  });
	  ```
	   Promise Example;
	   ```javascript
	  findAuthor().
	    then(findBooksByAuthor).
	    then(function(books){
	      // found books
	  }).catch(function(reason){
	    // something went wrong
	  });
	  ```
	   @method then
	  @param {Function} onFulfilled
	  @param {Function} onRejected
	  Useful for tooling.
	  @return {Promise}
	  */

	  /**
	  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	  as the catch block of a try/catch statement.
	  ```js
	  function findAuthor(){
	  throw new Error('couldn't find that author');
	  }
	  // synchronous
	  try {
	  findAuthor();
	  } catch(reason) {
	  // something went wrong
	  }
	  // async with promises
	  findAuthor().catch(function(reason){
	  // something went wrong
	  });
	  ```
	  @method catch
	  @param {Function} onRejection
	  Useful for tooling.
	  @return {Promise}
	  */


	  Promise.prototype.catch = function _catch(onRejection) {
	    return this.then(null, onRejection);
	  };

	  /**
	    `finally` will be invoked regardless of the promise's fate just as native
	    try/catch/finally behaves
	  
	    Synchronous example:
	  
	    ```js
	    findAuthor() {
	      if (Math.random() > 0.5) {
	        throw new Error();
	      }
	      return new Author();
	    }
	  
	    try {
	      return findAuthor(); // succeed or fail
	    } catch(error) {
	      return findOtherAuther();
	    } finally {
	      // always runs
	      // doesn't affect the return value
	    }
	    ```
	  
	    Asynchronous example:
	  
	    ```js
	    findAuthor().catch(function(reason){
	      return findOtherAuther();
	    }).finally(function(){
	      // author was either found, or not
	    });
	    ```
	  
	    @method finally
	    @param {Function} callback
	    @return {Promise}
	  */


	  Promise.prototype.finally = function _finally(callback) {
	    var promise = this;
	    var constructor = promise.constructor;

	    if (isFunction(callback)) {
	      return promise.then(function (value) {
	        return constructor.resolve(callback()).then(function () {
	          return value;
	        });
	      }, function (reason) {
	        return constructor.resolve(callback()).then(function () {
	          throw reason;
	        });
	      });
	    }

	    return promise.then(callback, callback);
	  };

	  return Promise;
	}();

	Promise$1.prototype.then = then;
	Promise$1.all = all;
	Promise$1.race = race;
	Promise$1.resolve = resolve$1;
	Promise$1.reject = reject$1;
	Promise$1._setScheduler = setScheduler;
	Promise$1._setAsap = setAsap;
	Promise$1._asap = asap;

	/*global self*/
	function polyfill() {
	  var local = void 0;

	  if (typeof commonjsGlobal !== 'undefined') {
	    local = commonjsGlobal;
	  } else if (typeof self !== 'undefined') {
	    local = self;
	  } else {
	    try {
	      local = Function('return this')();
	    } catch (e) {
	      throw new Error('polyfill failed because global object is unavailable in this environment');
	    }
	  }

	  var P = local.Promise;

	  if (P) {
	    var promiseToString = null;
	    try {
	      promiseToString = Object.prototype.toString.call(P.resolve());
	    } catch (e) {
	      // silently ignored
	    }

	    if (promiseToString === '[object Promise]' && !P.cast) {
	      return;
	    }
	  }

	  local.Promise = Promise$1;
	}

	// Strange compat..
	Promise$1.polyfill = polyfill;
	Promise$1.Promise = Promise$1;

	return Promise$1;

	})));




	});

	/* global self, window, module, global, require */
	var promise = function () {

	    var globalObject = void 0;

	    function isFunction(x) {
	        return typeof x === "function";
	    }

	    // Seek the global object
	    if (commonjsGlobal !== undefined) {
	        globalObject = commonjsGlobal;
	    } else if (window !== undefined && window.document) {
	        globalObject = window;
	    } else {
	        globalObject = self;
	    }

	    // Test for any native promise implementation, and if that
	    // implementation appears to conform to the specificaton.
	    // This code mostly nicked from the es6-promise module polyfill
	    // and then fooled with.
	    var hasPromiseSupport = function () {

	        // No promise object at all, and it's a non-starter
	        if (!globalObject.hasOwnProperty("Promise")) {
	            return false;
	        }

	        // There is a Promise object. Does it conform to the spec?
	        var P = globalObject.Promise;

	        // Some of these methods are missing from
	        // Firefox/Chrome experimental implementations
	        if (!P.hasOwnProperty("resolve") || !P.hasOwnProperty("reject")) {
	            return false;
	        }

	        if (!P.hasOwnProperty("all") || !P.hasOwnProperty("race")) {
	            return false;
	        }

	        // Older version of the spec had a resolver object
	        // as the arg rather than a function
	        return function () {

	            var resolve = void 0;

	            var p = new globalObject.Promise(function (r) {
	                resolve = r;
	            });

	            if (p) {
	                return isFunction(resolve);
	            }

	            return false;
	        }();
	    }();

	    // Export the native Promise implementation if it
	    // looks like it matches the spec
	    if (hasPromiseSupport) {
	        return globalObject.Promise;
	    }

	    //  Otherwise, return the es6-promise polyfill by @jaffathecake.
	    return es6Promise.Promise;
	}();

	/* global module, require */
	var promisify = function () {

	    // Get a promise object. This may be native, or it may be polyfilled

	    var ES6Promise = promise;

	    /**
	     * thatLooksLikeAPromiseToMe()
	     *
	     * Duck-types a promise.
	     *
	     * @param {object} o
	     * @return {bool} True if this resembles a promise
	     */
	    function thatLooksLikeAPromiseToMe(o) {
	        return o && typeof o.then === "function" && typeof o.catch === "function";
	    }

	    /**
	     * promisify()
	     *
	     * Transforms callback-based function -- func(arg1, arg2 .. argN, callback) -- into
	     * an ES6-compatible Promise. Promisify provides a default callback of the form (error, result)
	     * and rejects when `error` is truthy. You can also supply settings object as the second argument.
	     *
	     * @param {function} original - The function to promisify
	     * @param {object} settings - Settings object
	     * @param {object} settings.thisArg - A `this` context to use. If not set, assume `settings` _is_ `thisArg`
	     * @param {bool} settings.multiArgs - Should multiple arguments be returned as an array?
	     * @return {function} A promisified version of `original`
	     */
	    return function promisify(original, settings) {

	        return function () {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }

	            var returnMultipleArguments = settings && settings.multiArgs;

	            var target = void 0;
	            if (settings && settings.thisArg) {
	                target = settings.thisArg;
	            } else if (settings) {
	                target = settings;
	            }

	            // Return the promisified function
	            return new ES6Promise(function (resolve, reject) {

	                // Append the callback bound to the context
	                args.push(function callback(err) {

	                    if (err) {
	                        return reject(err);
	                    }

	                    for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                        values[_key2 - 1] = arguments[_key2];
	                    }

	                    if (false === !!returnMultipleArguments) {
	                        return resolve(values[0]);
	                    }

	                    resolve(values);
	                });

	                // Call the function
	                var response = original.apply(target, args);

	                // If it looks like original already returns a promise,
	                // then just resolve with that promise. Hopefully, the callback function we added will just be ignored.
	                if (thatLooksLikeAPromiseToMe(response)) {
	                    resolve(response);
	                }
	            });
	        };
	    };
	}();

	const inherits = util.inherits;

	const EventEmitter = events.EventEmitter;

	var agentBase = Agent;

	function isAgent(v) {
	  return v && typeof v.addRequest === 'function';
	}

	/**
	 * Base `http.Agent` implementation.
	 * No pooling/keep-alive is implemented by default.
	 *
	 * @param {Function} callback
	 * @api public
	 */
	function Agent(callback, _opts) {
	  if (!(this instanceof Agent)) {
	    return new Agent(callback, _opts);
	  }

	  EventEmitter.call(this);

	  // The callback gets promisified if it has 3 parameters
	  // (i.e. it has a callback function) lazily
	  this._promisifiedCallback = false;

	  let opts = _opts;
	  if ('function' === typeof callback) {
	    this.callback = callback;
	  } else if (callback) {
	    opts = callback;
	  }

	  // timeout for the socket to be returned from the callback
	  this.timeout = (opts && opts.timeout) || null;

	  this.options = opts;
	}
	inherits(Agent, EventEmitter);

	/**
	 * Override this function in your subclass!
	 */
	Agent.prototype.callback = function callback(req, opts) {
	  throw new Error(
	    '"agent-base" has no default implementation, you must subclass and override `callback()`'
	  );
	};

	/**
	 * Called by node-core's "_http_client.js" module when creating
	 * a new HTTP request with this Agent instance.
	 *
	 * @api public
	 */
	Agent.prototype.addRequest = function addRequest(req, _opts) {
	  const ownOpts = Object.assign({}, _opts);

	  // Set default `host` for HTTP to localhost
	  if (null == ownOpts.host) {
	    ownOpts.host = 'localhost';
	  }

	  // Set default `port` for HTTP if none was explicitly specified
	  if (null == ownOpts.port) {
	    ownOpts.port = ownOpts.secureEndpoint ? 443 : 80;
	  }

	  const opts = Object.assign({}, this.options, ownOpts);

	  if (opts.host && opts.path) {
	    // If both a `host` and `path` are specified then it's most likely the
	    // result of a `url.parse()` call... we need to remove the `path` portion so
	    // that `net.connect()` doesn't attempt to open that as a unix socket file.
	    delete opts.path;
	  }

	  delete opts.agent;
	  delete opts.hostname;
	  delete opts._defaultAgent;
	  delete opts.defaultPort;
	  delete opts.createConnection;

	  // Hint to use "Connection: close"
	  // XXX: non-documented `http` module API :(
	  req._last = true;
	  req.shouldKeepAlive = false;

	  // Create the `stream.Duplex` instance
	  let timeout;
	  let timedOut = false;
	  const timeoutMs = this.timeout;
	  const freeSocket = this.freeSocket;

	  function onerror(err) {
	    if (req._hadError) return;
	    req.emit('error', err);
	    // For Safety. Some additional errors might fire later on
	    // and we need to make sure we don't double-fire the error event.
	    req._hadError = true;
	  }

	  function ontimeout() {
	    timeout = null;
	    timedOut = true;
	    const err = new Error(
	      'A "socket" was not created for HTTP request before ' + timeoutMs + 'ms'
	    );
	    err.code = 'ETIMEOUT';
	    onerror(err);
	  }

	  function callbackError(err) {
	    if (timedOut) return;
	    if (timeout != null) {
	      clearTimeout(timeout);
	      timeout = null;
	    }
	    onerror(err);
	  }

	  function onsocket(socket) {
	    if (timedOut) return;
	    if (timeout != null) {
	      clearTimeout(timeout);
	      timeout = null;
	    }
	    if (isAgent(socket)) {
	      // `socket` is actually an http.Agent instance, so relinquish
	      // responsibility for this `req` to the Agent from here on
	      socket.addRequest(req, opts);
	    } else if (socket) {
	      function onfree() {
	        freeSocket(socket, opts);
	      }
	      socket.on('free', onfree);
	      req.onSocket(socket);
	    } else {
	      const err = new Error(
	        'no Duplex stream was returned to agent-base for `' + req.method + ' ' + req.path + '`'
	      );
	      onerror(err);
	    }
	  }

	  if (!this._promisifiedCallback && this.callback.length >= 3) {
	    // Legacy callback function - convert to a Promise
	    this.callback = promisify(this.callback, this);
	    this._promisifiedCallback = true;
	  }

	  if (timeoutMs > 0) {
	    timeout = setTimeout(ontimeout, timeoutMs);
	  }

	  try {
	    Promise.resolve(this.callback(req, opts)).then(onsocket, callbackError);
	  } catch (err) {
	    Promise.reject(err).catch(callbackError);
	  }
	};

	Agent.prototype.freeSocket = function freeSocket(socket, opts) {
	  // TODO reuse sockets
	  socket.destroy();
	};

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var w = d * 7;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	var ms = function(val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'weeks':
	    case 'week':
	    case 'w':
	      return n * w;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  var msAbs = Math.abs(ms);
	  if (msAbs >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (msAbs >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (msAbs >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (msAbs >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  var msAbs = Math.abs(ms);
	  if (msAbs >= d) {
	    return plural(ms, msAbs, d, 'day');
	  }
	  if (msAbs >= h) {
	    return plural(ms, msAbs, h, 'hour');
	  }
	  if (msAbs >= m) {
	    return plural(ms, msAbs, m, 'minute');
	  }
	  if (msAbs >= s) {
	    return plural(ms, msAbs, s, 'second');
	  }
	  return ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, msAbs, n, name) {
	  var isPlural = msAbs >= n * 1.5;
	  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
	}

	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 */
	function setup(env) {
	  createDebug.debug = createDebug;
	  createDebug.default = createDebug;
	  createDebug.coerce = coerce;
	  createDebug.disable = disable;
	  createDebug.enable = enable;
	  createDebug.enabled = enabled;
	  createDebug.humanize = ms;
	  Object.keys(env).forEach(function (key) {
	    createDebug[key] = env[key];
	  });
	  /**
	  * Active `debug` instances.
	  */

	  createDebug.instances = [];
	  /**
	  * The currently active debug mode names, and names to skip.
	  */

	  createDebug.names = [];
	  createDebug.skips = [];
	  /**
	  * Map of special "%n" handling functions, for the debug "format" argument.
	  *
	  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	  */

	  createDebug.formatters = {};
	  /**
	  * Selects a color for a debug namespace
	  * @param {String} namespace The namespace string for the for the debug instance to be colored
	  * @return {Number|String} An ANSI color code for the given namespace
	  * @api private
	  */

	  function selectColor(namespace) {
	    var hash = 0;

	    for (var i = 0; i < namespace.length; i++) {
	      hash = (hash << 5) - hash + namespace.charCodeAt(i);
	      hash |= 0; // Convert to 32bit integer
	    }

	    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	  }

	  createDebug.selectColor = selectColor;
	  /**
	  * Create a debugger with the given `namespace`.
	  *
	  * @param {String} namespace
	  * @return {Function}
	  * @api public
	  */

	  function createDebug(namespace) {
	    var prevTime;

	    function debug() {
	      // Disabled?
	      if (!debug.enabled) {
	        return;
	      }

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      var self = debug; // Set `diff` timestamp

	      var curr = Number(new Date());
	      var ms = curr - (prevTime || curr);
	      self.diff = ms;
	      self.prev = prevTime;
	      self.curr = curr;
	      prevTime = curr;
	      args[0] = createDebug.coerce(args[0]);

	      if (typeof args[0] !== 'string') {
	        // Anything else let's inspect with %O
	        args.unshift('%O');
	      } // Apply any `formatters` transformations


	      var index = 0;
	      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
	        // If we encounter an escaped % then don't increase the array index
	        if (match === '%%') {
	          return match;
	        }

	        index++;
	        var formatter = createDebug.formatters[format];

	        if (typeof formatter === 'function') {
	          var val = args[index];
	          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

	          args.splice(index, 1);
	          index--;
	        }

	        return match;
	      }); // Apply env-specific formatting (colors, etc.)

	      createDebug.formatArgs.call(self, args);
	      var logFn = self.log || createDebug.log;
	      logFn.apply(self, args);
	    }

	    debug.namespace = namespace;
	    debug.enabled = createDebug.enabled(namespace);
	    debug.useColors = createDebug.useColors();
	    debug.color = selectColor(namespace);
	    debug.destroy = destroy;
	    debug.extend = extend; // Debug.formatArgs = formatArgs;
	    // debug.rawLog = rawLog;
	    // env-specific initialization logic for debug instances

	    if (typeof createDebug.init === 'function') {
	      createDebug.init(debug);
	    }

	    createDebug.instances.push(debug);
	    return debug;
	  }

	  function destroy() {
	    var index = createDebug.instances.indexOf(this);

	    if (index !== -1) {
	      createDebug.instances.splice(index, 1);
	      return true;
	    }

	    return false;
	  }

	  function extend(namespace, delimiter) {
	    return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
	  }
	  /**
	  * Enables a debug mode by namespaces. This can include modes
	  * separated by a colon and wildcards.
	  *
	  * @param {String} namespaces
	  * @api public
	  */


	  function enable(namespaces) {
	    createDebug.save(namespaces);
	    createDebug.names = [];
	    createDebug.skips = [];
	    var i;
	    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
	    var len = split.length;

	    for (i = 0; i < len; i++) {
	      if (!split[i]) {
	        // ignore empty strings
	        continue;
	      }

	      namespaces = split[i].replace(/\*/g, '.*?');

	      if (namespaces[0] === '-') {
	        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	      } else {
	        createDebug.names.push(new RegExp('^' + namespaces + '$'));
	      }
	    }

	    for (i = 0; i < createDebug.instances.length; i++) {
	      var instance = createDebug.instances[i];
	      instance.enabled = createDebug.enabled(instance.namespace);
	    }
	  }
	  /**
	  * Disable debug output.
	  *
	  * @api public
	  */


	  function disable() {
	    createDebug.enable('');
	  }
	  /**
	  * Returns true if the given mode name is enabled, false otherwise.
	  *
	  * @param {String} name
	  * @return {Boolean}
	  * @api public
	  */


	  function enabled(name) {
	    if (name[name.length - 1] === '*') {
	      return true;
	    }

	    var i;
	    var len;

	    for (i = 0, len = createDebug.skips.length; i < len; i++) {
	      if (createDebug.skips[i].test(name)) {
	        return false;
	      }
	    }

	    for (i = 0, len = createDebug.names.length; i < len; i++) {
	      if (createDebug.names[i].test(name)) {
	        return true;
	      }
	    }

	    return false;
	  }
	  /**
	  * Coerce `val`.
	  *
	  * @param {Mixed} val
	  * @return {Mixed}
	  * @api private
	  */


	  function coerce(val) {
	    if (val instanceof Error) {
	      return val.stack || val.message;
	    }

	    return val;
	  }

	  createDebug.enable(createDebug.load());
	  return createDebug;
	}

	var common = setup;

	var browser = createCommonjsModule(function (module, exports) {

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	/* eslint-env browser */

	/**
	 * This is the web browser implementation of `debug()`.
	 */
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = localstorage();
	/**
	 * Colors.
	 */

	exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	// eslint-disable-next-line complexity

	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
	    return true;
	  } // Internet Explorer and Edge do not support colors.


	  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
	    return false;
	  } // Is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


	  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
	  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
	  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
	  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
	}
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */


	function formatArgs(args) {
	  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

	  if (!this.useColors) {
	    return;
	  }

	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into

	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function (match) {
	    if (match === '%%') {
	      return;
	    }

	    index++;

	    if (match === '%c') {
	      // We only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	  args.splice(lastC, 0, c);
	}
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */


	function log() {
	  var _console;

	  // This hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
	}
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */


	function save(namespaces) {
	  try {
	    if (namespaces) {
	      exports.storage.setItem('debug', namespaces);
	    } else {
	      exports.storage.removeItem('debug');
	    }
	  } catch (error) {// Swallow
	    // XXX (@Qix-) should we be logging these?
	  }
	}
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */


	function load() {
	  var r;

	  try {
	    r = exports.storage.getItem('debug');
	  } catch (error) {} // Swallow
	  // XXX (@Qix-) should we be logging these?
	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


	  if (!r && typeof process !== 'undefined' && 'env' in process) {
	    r = process.env.DEBUG;
	  }

	  return r;
	}
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */


	function localstorage() {
	  try {
	    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
	    // The Browser also has localStorage in the global context.
	    return localStorage;
	  } catch (error) {// Swallow
	    // XXX (@Qix-) should we be logging these?
	  }
	}

	module.exports = common(exports);
	var formatters = module.exports.formatters;
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	formatters.j = function (v) {
	  try {
	    return JSON.stringify(v);
	  } catch (error) {
	    return '[UnexpectedJSONParseError]: ' + error.message;
	  }
	};
	});
	var browser_1 = browser.log;
	var browser_2 = browser.formatArgs;
	var browser_3 = browser.save;
	var browser_4 = browser.load;
	var browser_5 = browser.useColors;
	var browser_6 = browser.storage;
	var browser_7 = browser.colors;

	var hasFlag = (flag, argv) => {
		argv = argv || process.argv;
		const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
		const pos = argv.indexOf(prefix + flag);
		const terminatorPos = argv.indexOf('--');
		return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
	};

	const env = process.env;

	let forceColor;
	if (hasFlag('no-color') ||
		hasFlag('no-colors') ||
		hasFlag('color=false')) {
		forceColor = false;
	} else if (hasFlag('color') ||
		hasFlag('colors') ||
		hasFlag('color=true') ||
		hasFlag('color=always')) {
		forceColor = true;
	}
	if ('FORCE_COLOR' in env) {
		forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
	}

	function translateLevel(level) {
		if (level === 0) {
			return false;
		}

		return {
			level,
			hasBasic: true,
			has256: level >= 2,
			has16m: level >= 3
		};
	}

	function supportsColor(stream) {
		if (forceColor === false) {
			return 0;
		}

		if (hasFlag('color=16m') ||
			hasFlag('color=full') ||
			hasFlag('color=truecolor')) {
			return 3;
		}

		if (hasFlag('color=256')) {
			return 2;
		}

		if (stream && !stream.isTTY && forceColor !== true) {
			return 0;
		}

		const min = forceColor ? 1 : 0;

		if (process.platform === 'win32') {
			// Node.js 7.5.0 is the first version of Node.js to include a patch to
			// libuv that enables 256 color output on Windows. Anything earlier and it
			// won't work. However, here we target Node.js 8 at minimum as it is an LTS
			// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
			// release that supports 256 colors. Windows 10 build 14931 is the first release
			// that supports 16m/TrueColor.
			const osRelease = os.release().split('.');
			if (
				Number(process.versions.node.split('.')[0]) >= 8 &&
				Number(osRelease[0]) >= 10 &&
				Number(osRelease[2]) >= 10586
			) {
				return Number(osRelease[2]) >= 14931 ? 3 : 2;
			}

			return 1;
		}

		if ('CI' in env) {
			if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
				return 1;
			}

			return min;
		}

		if ('TEAMCITY_VERSION' in env) {
			return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
		}

		if (env.COLORTERM === 'truecolor') {
			return 3;
		}

		if ('TERM_PROGRAM' in env) {
			const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

			switch (env.TERM_PROGRAM) {
				case 'iTerm.app':
					return version >= 3 ? 3 : 2;
				case 'Apple_Terminal':
					return 2;
				// No default
			}
		}

		if (/-256(color)?$/i.test(env.TERM)) {
			return 2;
		}

		if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
			return 1;
		}

		if ('COLORTERM' in env) {
			return 1;
		}

		if (env.TERM === 'dumb') {
			return min;
		}

		return min;
	}

	function getSupportLevel(stream) {
		const level = supportsColor(stream);
		return translateLevel(level);
	}

	var supportsColor_1 = {
		supportsColor: getSupportLevel,
		stdout: getSupportLevel(process.stdout),
		stderr: getSupportLevel(process.stderr)
	};

	var node = createCommonjsModule(function (module, exports) {

	/**
	 * Module dependencies.
	 */



	/**
	 * This is the Node.js implementation of `debug()`.
	 */


	exports.init = init;
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	/**
	 * Colors.
	 */

	exports.colors = [6, 2, 3, 4, 5, 1];

	try {
	  // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	  // eslint-disable-next-line import/no-extraneous-dependencies
	  var supportsColor = supportsColor_1;

	  if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
	    exports.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221];
	  }
	} catch (error) {} // Swallow - we only care if `supports-color` is available; it doesn't have to be.

	/**
	 * Build up the default `inspectOpts` object from the environment variables.
	 *
	 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
	 */


	exports.inspectOpts = Object.keys(process.env).filter(function (key) {
	  return /^debug_/i.test(key);
	}).reduce(function (obj, key) {
	  // Camel-case
	  var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function (_, k) {
	    return k.toUpperCase();
	  }); // Coerce string value into JS value

	  var val = process.env[key];

	  if (/^(yes|on|true|enabled)$/i.test(val)) {
	    val = true;
	  } else if (/^(no|off|false|disabled)$/i.test(val)) {
	    val = false;
	  } else if (val === 'null') {
	    val = null;
	  } else {
	    val = Number(val);
	  }

	  obj[prop] = val;
	  return obj;
	}, {});
	/**
	 * Is stdout a TTY? Colored output is enabled when `true`.
	 */

	function useColors() {
	  return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
	}
	/**
	 * Adds ANSI color escape codes if enabled.
	 *
	 * @api public
	 */


	function formatArgs(args) {
	  var name = this.namespace,
	      useColors = this.useColors;

	  if (useColors) {
	    var c = this.color;
	    var colorCode = "\x1B[3" + (c < 8 ? c : '8;5;' + c);
	    var prefix = "  ".concat(colorCode, ";1m").concat(name, " \x1B[0m");
	    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
	    args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + "\x1B[0m");
	  } else {
	    args[0] = getDate() + name + ' ' + args[0];
	  }
	}

	function getDate() {
	  if (exports.inspectOpts.hideDate) {
	    return '';
	  }

	  return new Date().toISOString() + ' ';
	}
	/**
	 * Invokes `util.format()` with the specified arguments and writes to stderr.
	 */


	function log() {
	  return process.stderr.write(util.format.apply(util, arguments) + '\n');
	}
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */


	function save(namespaces) {
	  if (namespaces) {
	    process.env.DEBUG = namespaces;
	  } else {
	    // If you set a process.env field to null or undefined, it gets cast to the
	    // string 'null' or 'undefined'. Just delete instead.
	    delete process.env.DEBUG;
	  }
	}
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */


	function load() {
	  return process.env.DEBUG;
	}
	/**
	 * Init logic for `debug` instances.
	 *
	 * Create a new `inspectOpts` object in case `useColors` is set
	 * differently for a particular `debug` instance.
	 */


	function init(debug) {
	  debug.inspectOpts = {};
	  var keys = Object.keys(exports.inspectOpts);

	  for (var i = 0; i < keys.length; i++) {
	    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	  }
	}

	module.exports = common(exports);
	var formatters = module.exports.formatters;
	/**
	 * Map %o to `util.inspect()`, all on a single line.
	 */

	formatters.o = function (v) {
	  this.inspectOpts.colors = this.useColors;
	  return util.inspect(v, this.inspectOpts).replace(/\s*\n\s*/g, ' ');
	};
	/**
	 * Map %O to `util.inspect()`, allowing multiple lines if needed.
	 */


	formatters.O = function (v) {
	  this.inspectOpts.colors = this.useColors;
	  return util.inspect(v, this.inspectOpts);
	};
	});
	var node_1 = node.init;
	var node_2 = node.log;
	var node_3 = node.formatArgs;
	var node_4 = node.save;
	var node_5 = node.load;
	var node_6 = node.useColors;
	var node_7 = node.colors;
	var node_8 = node.inspectOpts;

	var src = createCommonjsModule(function (module) {

	/**
	 * Detect Electron renderer / nwjs process, which is node, but we should
	 * treat as a browser.
	 */
	if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	  module.exports = browser;
	} else {
	  module.exports = node;
	}
	});

	/**
	 * Module dependencies.
	 */





	var inherits$1 = util.inherits;
	var debug$1 = src('https-proxy-agent');

	/**
	 * Module exports.
	 */

	var httpsProxyAgent = HttpsProxyAgent;

	/**
	 * The `HttpsProxyAgent` implements an HTTP Agent subclass that connects to the
	 * specified "HTTP(s) proxy server" in order to proxy HTTPS requests.
	 *
	 * @api public
	 */

	function HttpsProxyAgent(opts) {
	  if (!(this instanceof HttpsProxyAgent)) return new HttpsProxyAgent(opts);
	  if ('string' == typeof opts) opts = url.parse(opts);
	  if (!opts)
	    throw new Error(
	      'an HTTP(S) proxy server `host` and `port` must be specified!'
	    );
	  debug$1('creating new HttpsProxyAgent instance: %o', opts);
	  agentBase.call(this, opts);

	  var proxy = Object.assign({}, opts);

	  // if `true`, then connect to the proxy server over TLS. defaults to `false`.
	  this.secureProxy = proxy.protocol ? /^https:?$/i.test(proxy.protocol) : false;

	  // prefer `hostname` over `host`, and set the `port` if needed
	  proxy.host = proxy.hostname || proxy.host;
	  proxy.port = +proxy.port || (this.secureProxy ? 443 : 80);

	  // ALPN is supported by Node.js >= v5.
	  // attempt to negotiate http/1.1 for proxy servers that support http/2
	  if (this.secureProxy && !('ALPNProtocols' in proxy)) {
	    proxy.ALPNProtocols = ['http 1.1'];
	  }

	  if (proxy.host && proxy.path) {
	    // if both a `host` and `path` are specified then it's most likely the
	    // result of a `url.parse()` call... we need to remove the `path` portion so
	    // that `net.connect()` doesn't attempt to open that as a unix socket file.
	    delete proxy.path;
	    delete proxy.pathname;
	  }

	  this.proxy = proxy;
	  this.defaultPort = 443;
	}
	inherits$1(HttpsProxyAgent, agentBase);

	/**
	 * Called when the node-core HTTP client library is creating a new HTTP request.
	 *
	 * @api public
	 */

	HttpsProxyAgent.prototype.callback = function connect(req, opts, fn) {
	  var proxy = this.proxy;

	  // create a socket connection to the proxy server
	  var socket;
	  if (this.secureProxy) {
	    socket = tls.connect(proxy);
	  } else {
	    socket = net.connect(proxy);
	  }

	  // we need to buffer any HTTP traffic that happens with the proxy before we get
	  // the CONNECT response, so that if the response is anything other than an "200"
	  // response code, then we can re-play the "data" events on the socket once the
	  // HTTP parser is hooked up...
	  var buffers = [];
	  var buffersLength = 0;

	  function read() {
	    var b = socket.read();
	    if (b) ondata(b);
	    else socket.once('readable', read);
	  }

	  function cleanup() {
	    socket.removeListener('data', ondata);
	    socket.removeListener('end', onend);
	    socket.removeListener('error', onerror);
	    socket.removeListener('close', onclose);
	    socket.removeListener('readable', read);
	  }

	  function onclose(err) {
	    debug$1('onclose had error %o', err);
	  }

	  function onend() {
	    debug$1('onend');
	  }

	  function onerror(err) {
	    cleanup();
	    fn(err);
	  }

	  function ondata(b) {
	    buffers.push(b);
	    buffersLength += b.length;
	    var buffered = Buffer.concat(buffers, buffersLength);
	    var str = buffered.toString('ascii');

	    if (!~str.indexOf('\r\n\r\n')) {
	      // keep buffering
	      debug$1('have not received end of HTTP headers yet...');
	      if (socket.read) {
	        read();
	      } else {
	        socket.once('data', ondata);
	      }
	      return;
	    }

	    var firstLine = str.substring(0, str.indexOf('\r\n'));
	    var statusCode = +firstLine.split(' ')[1];
	    debug$1('got proxy server response: %o', firstLine);

	    if (200 == statusCode) {
	      // 200 Connected status code!
	      var sock = socket;

	      // nullify the buffered data since we won't be needing it
	      buffers = buffered = null;

	      if (opts.secureEndpoint) {
	        // since the proxy is connecting to an SSL server, we have
	        // to upgrade this socket connection to an SSL connection
	        debug$1(
	          'upgrading proxy-connected socket to TLS connection: %o',
	          opts.host
	        );
	        opts.socket = socket;
	        opts.servername = opts.servername || opts.host;
	        opts.host = null;
	        opts.hostname = null;
	        opts.port = null;
	        sock = tls.connect(opts);
	      }

	      cleanup();
	      fn(null, sock);
	    } else {
	      // some other status code that's not 200... need to re-play the HTTP header
	      // "data" events onto the socket once the HTTP machinery is attached so that
	      // the user can parse and handle the error status code
	      cleanup();

	      // save a reference to the concat'd Buffer for the `onsocket` callback
	      buffers = buffered;

	      // need to wait for the "socket" event to re-play the "data" events
	      req.once('socket', onsocket);
	      fn(null, socket);
	    }
	  }

	  function onsocket(socket) {
	    // replay the "buffers" Buffer onto the `socket`, since at this point
	    // the HTTP module machinery has been hooked up for the user
	    if ('function' == typeof socket.ondata) {
	      // node <= v0.11.3, the `ondata` function is set on the socket
	      socket.ondata(buffers, 0, buffers.length);
	    } else if (socket.listeners('data').length > 0) {
	      // node > v0.11.3, the "data" event is listened for directly
	      socket.emit('data', buffers);
	    } else {
	      // never?
	      throw new Error('should not happen...');
	    }

	    // nullify the cached Buffer instance
	    buffers = null;
	  }

	  socket.on('error', onerror);
	  socket.on('close', onclose);
	  socket.on('end', onend);

	  if (socket.read) {
	    read();
	  } else {
	    socket.once('data', ondata);
	  }

	  var hostname = opts.host + ':' + opts.port;
	  var msg = 'CONNECT ' + hostname + ' HTTP/1.1\r\n';

	  var headers = Object.assign({}, proxy.headers);
	  if (proxy.auth) {
	    headers['Proxy-Authorization'] =
	      'Basic ' + Buffer.from(proxy.auth).toString('base64');
	  }

	  // the Host header should only include the port
	  // number when it is a non-standard port
	  var host = opts.host;
	  if (!isDefaultPort(opts.port, opts.secureEndpoint)) {
	    host += ':' + opts.port;
	  }
	  headers['Host'] = host;

	  headers['Connection'] = 'close';
	  Object.keys(headers).forEach(function(name) {
	    msg += name + ': ' + headers[name] + '\r\n';
	  });

	  socket.write(msg + '\r\n');
	};

	function isDefaultPort(port, secure) {
	  return Boolean((!secure && port === 80) || (secure && port === 443));
	}

	var http_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	/** Node http module transport */
	var HTTPTransport = /** @class */ (function (_super) {
	    tslib_es6.__extends(HTTPTransport, _super);
	    /** Create a new instance and set this.agent */
	    function HTTPTransport(options) {
	        var _this = _super.call(this, options) || this;
	        _this.options = options;
	        _this.module = http$1;
	        var proxy = options.httpProxy || process.env.http_proxy;
	        _this.client = proxy
	            ? // tslint:disable-next-line:no-unsafe-any
	                new httpsProxyAgent(proxy)
	            : new http$1.Agent({ keepAlive: false, maxSockets: 30, timeout: 2000 });
	        return _this;
	    }
	    /**
	     * @inheritDoc
	     */
	    HTTPTransport.prototype.sendEvent = function (body) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            return tslib_es6.__generator(this, function (_a) {
	                if (!this.module) {
	                    throw new dist$3.SentryError('No module available in HTTPTransport');
	                }
	                return [2 /*return*/, this.sendWithModule(this.module, body)];
	            });
	        });
	    };
	    return HTTPTransport;
	}(base.BaseTransport));
	exports.HTTPTransport = HTTPTransport;

	});

	unwrapExports(http_1);
	var http_2 = http_1.HTTPTransport;

	var https_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	/** Node https module transport */
	var HTTPSTransport = /** @class */ (function (_super) {
	    tslib_es6.__extends(HTTPSTransport, _super);
	    /** Create a new instance and set this.agent */
	    function HTTPSTransport(options) {
	        var _this = _super.call(this, options) || this;
	        _this.options = options;
	        _this.module = https;
	        var proxy = options.httpsProxy || options.httpProxy || process.env.https_proxy || process.env.http_proxy;
	        _this.client = proxy
	            ? // tslint:disable-next-line:no-unsafe-any
	                new httpsProxyAgent(proxy)
	            : new https.Agent({ keepAlive: false, maxSockets: 30, timeout: 2000 });
	        return _this;
	    }
	    /**
	     * @inheritDoc
	     */
	    HTTPSTransport.prototype.sendEvent = function (body) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            return tslib_es6.__generator(this, function (_a) {
	                if (!this.module) {
	                    throw new dist$3.SentryError('No module available in HTTPSTransport');
	                }
	                return [2 /*return*/, this.sendWithModule(this.module, body)];
	            });
	        });
	    };
	    return HTTPSTransport;
	}(base.BaseTransport));
	exports.HTTPSTransport = HTTPSTransport;

	});

	unwrapExports(https_1);
	var https_2 = https_1.HTTPSTransport;

	var transports = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.BaseTransport = base.BaseTransport;

	exports.HTTPTransport = http_1.HTTPTransport;

	exports.HTTPSTransport = https_1.HTTPSTransport;

	});

	unwrapExports(transports);
	var transports_1 = transports.BaseTransport;
	var transports_2 = transports.HTTPTransport;
	var transports_3 = transports.HTTPSTransport;

	var backend = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });








	/** The Sentry Node SDK Backend. */
	var NodeBackend = /** @class */ (function (_super) {
	    tslib_es6.__extends(NodeBackend, _super);
	    function NodeBackend() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    /**
	     * @inheritdoc
	     */
	    NodeBackend.prototype.setupTransport = function () {
	        var e_1, _a;
	        if (!this.options.dsn) {
	            // We return the noop transport here in case there is no Dsn.
	            return _super.prototype.setupTransport.call(this);
	        }
	        var dsn = new dist$3.Dsn(this.options.dsn);
	        var transportOptions = this.options.transportOptions || { dsn: dsn };
	        var clientOptions = ['httpProxy', 'httpsProxy', 'caCerts'];
	        try {
	            for (var clientOptions_1 = tslib_es6.__values(clientOptions), clientOptions_1_1 = clientOptions_1.next(); !clientOptions_1_1.done; clientOptions_1_1 = clientOptions_1.next()) {
	                var option = clientOptions_1_1.value;
	                if (this.options[option] || transportOptions[option]) {
	                    transportOptions[option] = transportOptions[option] || this.options[option];
	                }
	            }
	        }
	        catch (e_1_1) { e_1 = { error: e_1_1 }; }
	        finally {
	            try {
	                if (clientOptions_1_1 && !clientOptions_1_1.done && (_a = clientOptions_1.return)) _a.call(clientOptions_1);
	            }
	            finally { if (e_1) throw e_1.error; }
	        }
	        if (this.options.transport) {
	            return new this.options.transport(transportOptions);
	        }
	        else if (dsn.protocol === 'http') {
	            return new transports.HTTPTransport(transportOptions);
	        }
	        else {
	            return new transports.HTTPSTransport(transportOptions);
	        }
	    };
	    /**
	     * @inheritDoc
	     */
	    NodeBackend.prototype.eventFromException = function (exception, hint) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            var ex, keys_1, message, event;
	            return tslib_es6.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        ex = exception;
	                        if (!is.isError(exception)) {
	                            if (is.isPlainObject(exception)) {
	                                keys_1 = Object.keys(exception).sort();
	                                message = "Non-Error exception captured with keys: " + object.serializeKeysToEventMessage(keys_1);
	                                dist$3.getCurrentHub().configureScope(function (scope) {
	                                    scope.setExtra('__serialized__', object.limitObjectDepthToSize(exception));
	                                    scope.setFingerprint([
	                                        crypto.createHash('md5')
	                                            .update(keys_1.join(''))
	                                            .digest('hex'),
	                                    ]);
	                                });
	                                ex = (hint && hint.syntheticException) || new Error(message);
	                                ex.message = message;
	                            }
	                            else {
	                                // This handles when someone does: `throw "something awesome";`
	                                // We use synthesized Error here so we can extract a (rough) stack trace.
	                                ex = (hint && hint.syntheticException) || new Error(exception);
	                            }
	                        }
	                        return [4 /*yield*/, parsers.parseError(ex, this.options)];
	                    case 1:
	                        event = _a.sent();
	                        return [2 /*return*/, tslib_es6.__assign({}, event, { event_id: hint && hint.event_id })];
	                }
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    NodeBackend.prototype.eventFromMessage = function (message, level, hint) {
	        if (level === void 0) { level = dist.Severity.Info; }
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            var event, stack, _a, frames_1;
	            return tslib_es6.__generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        event = {
	                            event_id: hint && hint.event_id,
	                            level: level,
	                            message: message,
	                        };
	                        if (!(this.options.attachStacktrace && hint && hint.syntheticException)) return [3 /*break*/, 5];
	                        if (!hint.syntheticException) return [3 /*break*/, 2];
	                        return [4 /*yield*/, parsers.extractStackFromError(hint.syntheticException)];
	                    case 1:
	                        _a = _b.sent();
	                        return [3 /*break*/, 3];
	                    case 2:
	                        _a = [];
	                        _b.label = 3;
	                    case 3:
	                        stack = _a;
	                        return [4 /*yield*/, parsers.parseStack(stack, this.options)];
	                    case 4:
	                        frames_1 = _b.sent();
	                        event.stacktrace = {
	                            frames: parsers.prepareFramesForEvent(frames_1),
	                        };
	                        _b.label = 5;
	                    case 5: return [2 /*return*/, event];
	                }
	            });
	        });
	    };
	    return NodeBackend;
	}(dist$3.BaseBackend));
	exports.NodeBackend = NodeBackend;

	});

	unwrapExports(backend);
	var backend_1 = backend.NodeBackend;

	var client = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });




	/**
	 * The Sentry Node SDK Client.
	 *
	 * @see NodeOptions for documentation on configuration options.
	 * @see SentryClient for usage documentation.
	 */
	var NodeClient = /** @class */ (function (_super) {
	    tslib_es6.__extends(NodeClient, _super);
	    /**
	     * Creates a new Node SDK instance.
	     * @param options Configuration options for this SDK.
	     */
	    function NodeClient(options) {
	        return _super.call(this, backend.NodeBackend, options) || this;
	    }
	    /**
	     * @inheritDoc
	     */
	    NodeClient.prototype.prepareEvent = function (event, scope, hint) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            return tslib_es6.__generator(this, function (_a) {
	                event.platform = event.platform || 'node';
	                event.sdk = tslib_es6.__assign({}, event.sdk, { name: version.SDK_NAME, packages: tslib_es6.__spread(((event.sdk && event.sdk.packages) || []), [
	                        {
	                            name: 'npm:@sentry/node',
	                            version: version.SDK_VERSION,
	                        },
	                    ]), version: version.SDK_VERSION });
	                if (this.getOptions().serverName) {
	                    event.server_name = this.getOptions().serverName;
	                }
	                return [2 /*return*/, _super.prototype.prepareEvent.call(this, event, scope, hint)];
	            });
	        });
	    };
	    return NodeClient;
	}(dist$3.BaseClient));
	exports.NodeClient = NodeClient;

	});

	unwrapExports(client);
	var client_1 = client.NodeClient;

	var console$1 = createCommonjsModule(function (module$1, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	/** Console module integration */
	var Console = /** @class */ (function () {
	    function Console() {
	        /**
	         * @inheritDoc
	         */
	        this.name = Console.id;
	    }
	    /**
	     * @inheritDoc
	     */
	    Console.prototype.setupOnce = function () {
	        var nativeModule = module;
	        object.fill(nativeModule, '_load', loadWrapper(nativeModule));
	        // special case: since console is built-in and app-level code won't require() it, do that here
	        
	    };
	    /**
	     * @inheritDoc
	     */
	    Console.id = 'Console';
	    return Console;
	}());
	exports.Console = Console;
	/**
	 * Wrapper function for internal _load calls within `require`
	 */
	function loadWrapper(nativeModule) {
	    // We need to use some functional-style currying to pass values around
	    // as we cannot rely on `bind`, because this has to preserve correct
	    // context for native calls
	    return function (originalLoad) {
	        return function (moduleId) {
	            var originalModule = originalLoad.apply(nativeModule, arguments);
	            if (moduleId !== 'console' || originalModule.__sentry__) {
	                return originalModule;
	            }
	            ['debug', 'info', 'warn', 'error', 'log'].forEach(consoleWrapper(originalModule));
	            originalModule.__sentry__ = true;
	            return originalModule;
	        };
	    };
	}
	/**
	 * Wrapper function that'll be used for every console level
	 */
	function consoleWrapper(originalModule) {
	    return function (level) {
	        if (!(level in originalModule)) {
	            return;
	        }
	        object.fill(originalModule, level, function (originalConsoleLevel) {
	            var sentryLevel;
	            switch (level) {
	                case 'debug':
	                    sentryLevel = dist.Severity.Debug;
	                    break;
	                case 'error':
	                    sentryLevel = dist.Severity.Error;
	                    break;
	                case 'info':
	                    sentryLevel = dist.Severity.Info;
	                    break;
	                case 'warn':
	                    sentryLevel = dist.Severity.Warning;
	                    break;
	                default:
	                    sentryLevel = dist.Severity.Log;
	            }
	            return function () {
	                if (dist$3.getCurrentHub().getIntegration(Console)) {
	                    dist$3.getCurrentHub().addBreadcrumb({
	                        category: 'console',
	                        level: sentryLevel,
	                        message: util.format.apply(undefined, arguments),
	                    }, {
	                        input: tslib_es6.__spread(arguments),
	                        level: level,
	                    });
	                }
	                originalConsoleLevel.apply(originalModule, arguments);
	            };
	        });
	    };
	}

	});

	unwrapExports(console$1);
	var console_1 = console$1.Console;

	var http = createCommonjsModule(function (module$1, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var lastResponse;
	/** http module integration */
	var Http = /** @class */ (function () {
	    function Http() {
	        /**
	         * @inheritDoc
	         */
	        this.name = Http.id;
	    }
	    /**
	     * @inheritDoc
	     */
	    Http.prototype.setupOnce = function () {
	        var nativeModule = module;
	        object.fill(nativeModule, '_load', loadWrapper(nativeModule));
	        // observation: when the https module does its own require('http'), it *does not* hit our hooked require to instrument http on the fly
	        // but if we've previously instrumented http, https *does* get our already-instrumented version
	        // this is because raven's transports are required before this instrumentation takes place, which loads https (and http)
	        // so module cache will have uninstrumented http; proactively loading it here ensures instrumented version is in module cache
	        // alternatively we could refactor to load our transports later, but this is easier and doesn't have much drawback
	        
	    };
	    /**
	     * @inheritDoc
	     */
	    Http.id = 'Http';
	    return Http;
	}());
	exports.Http = Http;
	/**
	 * Function that can combine together a url that'll be used for our breadcrumbs.
	 *
	 * @param options url that should be returned or an object containing it's parts.
	 * @returns constructed url
	 */
	function createBreadcrumbUrl(options) {
	    // We could just always reconstruct this from this.agent, this._headers, this.path, etc
	    // but certain other http-instrumenting libraries (like nock, which we use for tests) fail to
	    // maintain the guarantee that after calling origClientRequest, those fields will be populated
	    if (typeof options === 'string') {
	        return options;
	    }
	    else {
	        var protocol = options.protocol || '';
	        var hostname = options.hostname || options.host || '';
	        // Don't log standard :80 (http) and :443 (https) ports to reduce the noise
	        var port = !options.port || options.port === 80 || options.port === 443 ? '' : ":" + options.port;
	        var path = options.path || '/';
	        return protocol + "//" + hostname + port + path;
	    }
	}
	/**
	 * Wrapper function for internal _load calls within `require`
	 */
	function loadWrapper(nativeModule) {
	    // We need to use some functional-style currying to pass values around
	    // as we cannot rely on `bind`, because this has to preserve correct
	    // context for native calls
	    return function (originalLoad) {
	        return function (moduleId) {
	            var originalModule = originalLoad.apply(nativeModule, arguments);
	            if (moduleId !== 'http' || originalModule.__sentry__) {
	                return originalModule;
	            }
	            var origClientRequest = originalModule.ClientRequest;
	            var clientRequest = function (options, callback) {
	                // Note: this won't capture a breadcrumb if a response never comes
	                // It would be useful to know if that was the case, though, so
	                // TODO: revisit to see if we can capture sth indicating response never came
	                // possibility: capture one breadcrumb for "req sent" and one for "res recvd"
	                // seems excessive but solves the problem and *is* strictly more information
	                // could be useful for weird response sequencing bug scenarios
	                origClientRequest.call(this, options, callback);
	                this.__ravenBreadcrumbUrl = createBreadcrumbUrl(options);
	            };
	            util.inherits(clientRequest, origClientRequest);
	            object.fill(clientRequest.prototype, 'emit', emitWrapper);
	            object.fill(originalModule, 'ClientRequest', function () {
	                return clientRequest;
	            });
	            // http.request orig refs module-internal ClientRequest, not exported one, so
	            // it still points at orig ClientRequest after our monkeypatch; these reimpls
	            // just get that reference updated to use our new ClientRequest
	            object.fill(originalModule, 'request', function () {
	                return function (options, callback) {
	                    return new originalModule.ClientRequest(options, callback);
	                };
	            });
	            object.fill(originalModule, 'get', function () {
	                return function (options, callback) {
	                    var req = originalModule.request(options, callback);
	                    req.end();
	                    return req;
	                };
	            });
	            originalModule.__sentry__ = true;
	            return originalModule;
	        };
	    };
	}
	/**
	 * Wrapper function for request's `emit` calls
	 */
	function emitWrapper(origEmit) {
	    return function (event, response) {
	        // I'm not sure why but Node.js (at least in v8.X)
	        // is emitting all events twice :|
	        if (lastResponse === undefined || lastResponse !== response) {
	            lastResponse = response;
	        }
	        else {
	            return origEmit.apply(this, arguments);
	        }
	        var dsn = dist$3.getCurrentHub()
	            .getClient()
	            .getDsn();
	        var isInterestingEvent = event === 'response' || event === 'error';
	        var isNotSentryRequest = dsn && this.__ravenBreadcrumbUrl && !this.__ravenBreadcrumbUrl.includes(dsn.host);
	        if (isInterestingEvent && isNotSentryRequest && dist$3.getCurrentHub().getIntegration(Http)) {
	            dist$3.getCurrentHub().addBreadcrumb({
	                category: 'http',
	                data: {
	                    method: this.method,
	                    status_code: response.statusCode,
	                    url: this.__ravenBreadcrumbUrl,
	                },
	                type: 'http',
	            }, {
	                event: event,
	                request: this,
	                response: response,
	            });
	        }
	        return origEmit.apply(this, arguments);
	    };
	}

	});

	unwrapExports(http);
	var http_1$1 = http.Http;

	/*!
	 * cookie
	 * Copyright(c) 2012-2014 Roman Shtylman
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	/**
	 * Module exports.
	 * @public
	 */

	var parse_1 = parse$1;
	var serialize_1 = serialize;

	/**
	 * Module variables.
	 * @private
	 */

	var decode = decodeURIComponent;
	var encode = encodeURIComponent;
	var pairSplitRegExp = /; */;

	/**
	 * RegExp to match field-content in RFC 7230 sec 3.2
	 *
	 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
	 * field-vchar   = VCHAR / obs-text
	 * obs-text      = %x80-FF
	 */

	var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 *
	 * @param {string} str
	 * @param {object} [options]
	 * @return {object}
	 * @public
	 */

	function parse$1(str, options) {
	  if (typeof str !== 'string') {
	    throw new TypeError('argument str must be a string');
	  }

	  var obj = {};
	  var opt = options || {};
	  var pairs = str.split(pairSplitRegExp);
	  var dec = opt.decode || decode;

	  for (var i = 0; i < pairs.length; i++) {
	    var pair = pairs[i];
	    var eq_idx = pair.indexOf('=');

	    // skip things that don't look like key=value
	    if (eq_idx < 0) {
	      continue;
	    }

	    var key = pair.substr(0, eq_idx).trim();
	    var val = pair.substr(++eq_idx, pair.length).trim();

	    // quoted values
	    if ('"' == val[0]) {
	      val = val.slice(1, -1);
	    }

	    // only assign once
	    if (undefined == obj[key]) {
	      obj[key] = tryDecode(val, dec);
	    }
	  }

	  return obj;
	}

	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize the a name value pair into a cookie string suitable for
	 * http headers. An optional options object specified cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 *
	 * @param {string} name
	 * @param {string} val
	 * @param {object} [options]
	 * @return {string}
	 * @public
	 */

	function serialize(name, val, options) {
	  var opt = options || {};
	  var enc = opt.encode || encode;

	  if (typeof enc !== 'function') {
	    throw new TypeError('option encode is invalid');
	  }

	  if (!fieldContentRegExp.test(name)) {
	    throw new TypeError('argument name is invalid');
	  }

	  var value = enc(val);

	  if (value && !fieldContentRegExp.test(value)) {
	    throw new TypeError('argument val is invalid');
	  }

	  var str = name + '=' + value;

	  if (null != opt.maxAge) {
	    var maxAge = opt.maxAge - 0;
	    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
	    str += '; Max-Age=' + Math.floor(maxAge);
	  }

	  if (opt.domain) {
	    if (!fieldContentRegExp.test(opt.domain)) {
	      throw new TypeError('option domain is invalid');
	    }

	    str += '; Domain=' + opt.domain;
	  }

	  if (opt.path) {
	    if (!fieldContentRegExp.test(opt.path)) {
	      throw new TypeError('option path is invalid');
	    }

	    str += '; Path=' + opt.path;
	  }

	  if (opt.expires) {
	    if (typeof opt.expires.toUTCString !== 'function') {
	      throw new TypeError('option expires is invalid');
	    }

	    str += '; Expires=' + opt.expires.toUTCString();
	  }

	  if (opt.httpOnly) {
	    str += '; HttpOnly';
	  }

	  if (opt.secure) {
	    str += '; Secure';
	  }

	  if (opt.sameSite) {
	    var sameSite = typeof opt.sameSite === 'string'
	      ? opt.sameSite.toLowerCase() : opt.sameSite;

	    switch (sameSite) {
	      case true:
	        str += '; SameSite=Strict';
	        break;
	      case 'lax':
	        str += '; SameSite=Lax';
	        break;
	      case 'strict':
	        str += '; SameSite=Strict';
	        break;
	      default:
	        throw new TypeError('option sameSite is invalid');
	    }
	  }

	  return str;
	}

	/**
	 * Try decoding a string using a decoding function.
	 *
	 * @param {string} str
	 * @param {function} decode
	 * @private
	 */

	function tryDecode(str, decode) {
	  try {
	    return decode(str);
	  } catch (e) {
	    return str;
	  }
	}

	var cookie = {
		parse: parse_1,
		serialize: serialize_1
	};

	var handlers = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });









	var DEFAULT_SHUTDOWN_TIMEOUT = 2000;
	/** JSDoc */
	function extractTransaction(req, type) {
	    try {
	        // Express.js shape
	        var request = req;
	        switch (type) {
	            case 'path': {
	                return request.route.path;
	            }
	            case 'handler': {
	                return request.route.stack[0].name;
	            }
	            case 'methodPath':
	            default: {
	                var method = request.method.toUpperCase();
	                var path = request.route.path;
	                return method + "|" + path;
	            }
	        }
	    }
	    catch (_oO) {
	        return undefined;
	    }
	}
	/** JSDoc */
	function extractRequestData(req) {
	    // headers:
	    //   node, express: req.headers
	    //   koa: req.header
	    var headers = (req.headers || req.header || {});
	    // method:
	    //   node, express, koa: req.method
	    var method = req.method;
	    // host:
	    //   express: req.hostname in > 4 and req.host in < 4
	    //   koa: req.host
	    //   node: req.headers.host
	    var host = req.hostname || req.host || headers.host || '<no host>';
	    // protocol:
	    //   node: <n/a>
	    //   express, koa: req.protocol
	    var protocol = req.protocol === 'https' || req.secure || (req.socket || {}).encrypted
	        ? 'https'
	        : 'http';
	    // url (including path and query string):
	    //   node, express: req.originalUrl
	    //   koa: req.url
	    var originalUrl = (req.originalUrl || req.url);
	    // absolute url
	    var absoluteUrl = protocol + "://" + host + originalUrl;
	    // query string:
	    //   node: req.url (raw)
	    //   express, koa: req.query
	    var query = url.parse(originalUrl || '', false).query;
	    // cookies:
	    //   node, express, koa: req.headers.cookie
	    var cookies = cookie.parse(headers.cookie || '');
	    // body data:
	    //   node, express, koa: req.body
	    var data = req.body;
	    if (method === 'GET' || method === 'HEAD') {
	        if (typeof data === 'undefined') {
	            data = '<unavailable>';
	        }
	    }
	    if (data && typeof data !== 'string' && {}.toString.call(data) !== '[object String]') {
	        // Make sure the request body is a string
	        data = object.serialize(data);
	    }
	    // request interface
	    var request = {
	        cookies: cookies,
	        data: data,
	        headers: headers,
	        method: method,
	        query_string: query,
	        url: absoluteUrl,
	    };
	    return request;
	}
	/** Default user keys that'll be used to extract data from the request */
	var DEFAULT_USER_KEYS = ['id', 'username', 'email'];
	/** JSDoc */
	function extractUserData(req, keys) {
	    var user = {};
	    var attributes = Array.isArray(keys) ? keys : DEFAULT_USER_KEYS;
	    attributes.forEach(function (key) {
	        if ({}.hasOwnProperty.call(req.user, key)) {
	            user[key] = req.user[key];
	        }
	    });
	    // client ip:
	    //   node: req.connection.remoteAddress
	    //   express, koa: req.ip
	    var ip = req.ip ||
	        (req.connection &&
	            req.connection.remoteAddress);
	    if (ip) {
	        user.ip_address = ip;
	    }
	    return user;
	}
	/**
	 * Enriches passed event with request data.
	 *
	 *
	 * @param event Will be mutated and enriched with req data
	 * @param req Request object
	 * @param options object containing flags to enable functionality
	 */
	function parseRequest(event, req, options) {
	    // tslint:disable-next-line:no-parameter-reassignment
	    options = tslib_es6.__assign({ request: true, serverName: true, transaction: true, user: true, version: true }, options);
	    if (options.version) {
	        event.extra = tslib_es6.__assign({}, event.extra, { node: commonjsGlobal.process.version });
	    }
	    if (options.request) {
	        event.request = tslib_es6.__assign({}, event.request, extractRequestData(req));
	    }
	    if (options.serverName) {
	        event.server_name = commonjsGlobal.process.env.SENTRY_NAME || os.hostname();
	    }
	    if (options.user && req.user) {
	        event.user = tslib_es6.__assign({}, event.user, extractUserData(req, options.user));
	    }
	    if (options.transaction) {
	        var transaction = extractTransaction(req, options.transaction);
	        if (transaction) {
	            event.transaction = transaction;
	        }
	    }
	    return event;
	}
	exports.parseRequest = parseRequest;
	/** JSDoc */
	function requestHandler(options) {
	    return function sentryRequestMiddleware(req, res, next) {
	        var _this = this;
	        var local = domain.create();
	        local.add(req);
	        local.add(res);
	        local.on('error', next);
	        local.run(function () {
	            dist$3.getCurrentHub().configureScope(function (scope) {
	                return scope.addEventProcessor(function (event) { return tslib_es6.__awaiter(_this, void 0, void 0, function () { return tslib_es6.__generator(this, function (_a) {
	                    return [2 /*return*/, parseRequest(event, req, options)];
	                }); }); });
	            });
	            next();
	        });
	    };
	}
	exports.requestHandler = requestHandler;
	/** JSDoc */
	function getStatusCodeFromResponse(error) {
	    var statusCode = error.status || error.statusCode || error.status_code || (error.output && error.output.statusCode);
	    return statusCode ? parseInt(statusCode, 10) : 500;
	}
	/** JSDoc */
	function errorHandler() {
	    return function sentryErrorMiddleware(error, _req, _res, next) {
	        var status = getStatusCodeFromResponse(error);
	        if (status < 500) {
	            next(error);
	            return;
	        }
	        var eventId = dist$3.captureException(error);
	        _res.sentry = eventId;
	        next(error);
	    };
	}
	exports.errorHandler = errorHandler;
	/** JSDoc */
	function defaultOnFatalError(error) {
	    console.error(error && error.stack ? error.stack : error);
	    var options = dist$3.getCurrentHub().getClient().getOptions();
	    var timeout = (options && options.shutdownTimeout && options.shutdownTimeout > 0 && options.shutdownTimeout) ||
	        DEFAULT_SHUTDOWN_TIMEOUT;
	    async.forget(dist$3.getCurrentHub().getClient().close(timeout).then(function (result) {
	        if (!result) {
	            logger_1.logger.warn('We reached the timeout for emptying the request buffer, still exiting now!');
	        }
	        commonjsGlobal.process.exit(1);
	    }));
	}
	exports.defaultOnFatalError = defaultOnFatalError;

	});

	unwrapExports(handlers);
	var handlers_1 = handlers.parseRequest;
	var handlers_2 = handlers.requestHandler;
	var handlers_3 = handlers.errorHandler;
	var handlers_4 = handlers.defaultOnFatalError;

	var onuncaughtexception = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });





	/** Global Promise Rejection handler */
	var OnUncaughtException = /** @class */ (function () {
	    /**
	     * @inheritDoc
	     */
	    function OnUncaughtException(options) {
	        if (options === void 0) { options = {}; }
	        this.options = options;
	        /**
	         * @inheritDoc
	         */
	        this.name = OnUncaughtException.id;
	        /**
	         * @inheritDoc
	         */
	        this.handler = makeErrorHandler(
	        // tslint:disable-next-line
	        this.options.onFatalError);
	    }
	    /**
	     * @inheritDoc
	     */
	    OnUncaughtException.prototype.setupOnce = function () {
	        commonjsGlobal.process.on('uncaughtException', this.handler.bind(this));
	    };
	    /**
	     * @inheritDoc
	     */
	    OnUncaughtException.id = 'OnUncaughtException';
	    return OnUncaughtException;
	}());
	exports.OnUncaughtException = OnUncaughtException;
	/** JSDoc */
	function makeErrorHandler(onFatalError) {
	    var _this = this;
	    if (onFatalError === void 0) { onFatalError = handlers.defaultOnFatalError; }
	    var timeout = 2000;
	    var caughtFirstError = false;
	    var caughtSecondError = false;
	    var calledFatalError = false;
	    var firstError;
	    return function (error) {
	        if (!caughtFirstError) {
	            var hub_1 = dist$3.getCurrentHub();
	            // this is the first uncaught error and the ultimate reason for shutting down
	            // we want to do absolutely everything possible to ensure it gets captured
	            // also we want to make sure we don't go recursion crazy if more errors happen after this one
	            firstError = error;
	            caughtFirstError = true;
	            if (hub_1.getIntegration(OnUncaughtException)) {
	                hub_1.withScope(function (scope) { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
	                    return tslib_es6.__generator(this, function (_a) {
	                        scope.setLevel(dist.Severity.Fatal);
	                        hub_1.captureException(error, { originalException: error });
	                        if (!calledFatalError) {
	                            calledFatalError = true;
	                            onFatalError(error);
	                        }
	                        return [2 /*return*/];
	                    });
	                }); });
	            }
	            else {
	                if (!calledFatalError) {
	                    calledFatalError = true;
	                    onFatalError(error);
	                }
	            }
	        }
	        else if (calledFatalError) {
	            // we hit an error *after* calling onFatalError - pretty boned at this point, just shut it down
	            logger_1.logger.warn('uncaught exception after calling fatal error shutdown callback - this is bad! forcing shutdown');
	            handlers.defaultOnFatalError(error);
	        }
	        else if (!caughtSecondError) {
	            // two cases for how we can hit this branch:
	            //   - capturing of first error blew up and we just caught the exception from that
	            //     - quit trying to capture, proceed with shutdown
	            //   - a second independent error happened while waiting for first error to capture
	            //     - want to avoid causing premature shutdown before first error capture finishes
	            // it's hard to immediately tell case 1 from case 2 without doing some fancy/questionable domain stuff
	            // so let's instead just delay a bit before we proceed with our action here
	            // in case 1, we just wait a bit unnecessarily but ultimately do the same thing
	            // in case 2, the delay hopefully made us wait long enough for the capture to finish
	            // two potential nonideal outcomes:
	            //   nonideal case 1: capturing fails fast, we sit around for a few seconds unnecessarily before proceeding correctly by calling onFatalError
	            //   nonideal case 2: case 2 happens, 1st error is captured but slowly, timeout completes before capture and we treat second error as the sendErr of (nonexistent) failure from trying to capture first error
	            // note that after hitting this branch, we might catch more errors where (caughtSecondError && !calledFatalError)
	            //   we ignore them - they don't matter to us, we're just waiting for the second error timeout to finish
	            caughtSecondError = true;
	            setTimeout(function () {
	                if (!calledFatalError) {
	                    // it was probably case 1, let's treat err as the sendErr and call onFatalError
	                    calledFatalError = true;
	                    onFatalError(firstError, error);
	                }
	            }, timeout); // capturing could take at least sendTimeout to fail, plus an arbitrary second for how long it takes to collect surrounding source etc
	        }
	    };
	}
	exports.makeErrorHandler = makeErrorHandler;

	});

	unwrapExports(onuncaughtexception);
	var onuncaughtexception_1 = onuncaughtexception.OnUncaughtException;
	var onuncaughtexception_2 = onuncaughtexception.makeErrorHandler;

	var onunhandledrejection = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	/** Global Promise Rejection handler */
	var OnUnhandledRejection = /** @class */ (function () {
	    function OnUnhandledRejection() {
	        /**
	         * @inheritDoc
	         */
	        this.name = OnUnhandledRejection.id;
	    }
	    /**
	     * @inheritDoc
	     */
	    OnUnhandledRejection.prototype.setupOnce = function () {
	        commonjsGlobal.process.on('unhandledRejection', this.sendUnhandledPromise.bind(this));
	    };
	    /**
	     * Send an exception with reason
	     * @param reason string
	     * @param promise promise
	     */
	    OnUnhandledRejection.prototype.sendUnhandledPromise = function (reason, promise) {
	        var hub = dist$3.getCurrentHub();
	        if (!hub.getIntegration(OnUnhandledRejection)) {
	            return;
	        }
	        var context = (promise.domain && promise.domain.sentryContext) || {};
	        hub.withScope(function (scope) {
	            scope.setExtra('unhandledPromiseRejection', true);
	            // Preserve backwards compatibility with raven-node for now
	            if (context.user) {
	                scope.setUser(context.user);
	            }
	            if (context.tags) {
	                Object.keys(context.tags).forEach(function (key) {
	                    scope.setTag(key, context.tags[key]);
	                });
	            }
	            if (context.extra) {
	                Object.keys(context.extra).forEach(function (key) {
	                    scope.setExtra(key, context.extra[key]);
	                });
	            }
	            hub.captureException(reason, { originalException: promise });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    OnUnhandledRejection.id = 'OnUnhandledRejection';
	    return OnUnhandledRejection;
	}());
	exports.OnUnhandledRejection = OnUnhandledRejection;

	});

	unwrapExports(onunhandledrejection);
	var onunhandledrejection_1 = onunhandledrejection.OnUnhandledRejection;

	var linkederrors = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var DEFAULT_KEY = 'cause';
	var DEFAULT_LIMIT = 5;
	/** Adds SDK info to an event. */
	var LinkedErrors = /** @class */ (function () {
	    /**
	     * @inheritDoc
	     */
	    function LinkedErrors(options) {
	        if (options === void 0) { options = {}; }
	        /**
	         * @inheritDoc
	         */
	        this.name = LinkedErrors.id;
	        this.key = options.key || DEFAULT_KEY;
	        this.limit = options.limit || DEFAULT_LIMIT;
	    }
	    /**
	     * @inheritDoc
	     */
	    LinkedErrors.prototype.setupOnce = function () {
	        var _this = this;
	        dist$3.addGlobalEventProcessor(function (event, hint) { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
	            var self;
	            return tslib_es6.__generator(this, function (_a) {
	                self = dist$3.getCurrentHub().getIntegration(LinkedErrors);
	                if (self) {
	                    return [2 /*return*/, self.handler(event, hint)];
	                }
	                return [2 /*return*/, event];
	            });
	        }); });
	    };
	    /**
	     * @inheritDoc
	     */
	    LinkedErrors.prototype.handler = function (event, hint) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            var linkedErrors;
	            return tslib_es6.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        if (!event.exception || !event.exception.values || !hint || !(hint.originalException instanceof Error)) {
	                            return [2 /*return*/, event];
	                        }
	                        return [4 /*yield*/, this.walkErrorTree(hint.originalException, this.key)];
	                    case 1:
	                        linkedErrors = _a.sent();
	                        event.exception.values = tslib_es6.__spread(linkedErrors, event.exception.values);
	                        return [2 /*return*/, event];
	                }
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    LinkedErrors.prototype.walkErrorTree = function (error, key, stack) {
	        if (stack === void 0) { stack = []; }
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            var exception;
	            return tslib_es6.__generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        if (!(error[key] instanceof Error) || stack.length + 1 >= this.limit) {
	                            return [2 /*return*/, stack];
	                        }
	                        return [4 /*yield*/, parsers.getExceptionFromError(error[key])];
	                    case 1:
	                        exception = _a.sent();
	                        return [2 /*return*/, this.walkErrorTree(error[key], key, tslib_es6.__spread([exception], stack))];
	                }
	            });
	        });
	    };
	    /**
	     * @inheritDoc
	     */
	    LinkedErrors.id = 'LinkedErrors';
	    return LinkedErrors;
	}());
	exports.LinkedErrors = LinkedErrors;

	});

	unwrapExports(linkederrors);
	var linkederrors_1 = linkederrors.LinkedErrors;

	// builtin



	// node 0.6 support
	fs$1.existsSync = fs$1.existsSync || path$1.existsSync;

	// main_paths are the paths where our mainprog will be able to load from
	// we store these to avoid grabbing the modules that were loaded as a result
	// of a dependency module loading its dependencies, we only care about deps our
	// mainprog loads
	var main_paths = commonjsRequire.main && commonjsRequire.main.paths || [];

	var lsmod = function() {
	    var paths = Object.keys(commonjsRequire.cache || []);

	    // module information
	    var infos = {};

	    // paths we have already inspected to avoid traversing again
	    var seen = {};

	    paths.forEach(function(p) {
	        var dir = p;

	        (function updir() {
	            var orig = dir;
	            dir = path$1.dirname(orig);

	            if (!dir || orig === dir || seen[orig]) {
	                return;
	            }
	            else if (main_paths.indexOf(dir) < 0) {
	                return updir();
	            }

	            var pkgfile = path$1.join(orig, 'package.json');
	            var exists = fs$1.existsSync(pkgfile);

	            seen[orig] = true;

	            // travel up the tree if no package.json here
	            if (!exists) {
	                return updir();
	            }

	            try {
	                var info = JSON.parse(fs$1.readFileSync(pkgfile, 'utf8'));
	                infos[info.name] = info.version;
	            } catch (e) {}        })();
	    });

	    return infos;
	};

	var modules = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var moduleCache;
	/** Add node modules / packages to the event */
	var Modules = /** @class */ (function () {
	    function Modules() {
	        /**
	         * @inheritDoc
	         */
	        this.name = Modules.id;
	    }
	    /**
	     * @inheritDoc
	     */
	    Modules.prototype.setupOnce = function () {
	        var _this = this;
	        dist$3.addGlobalEventProcessor(function (event) { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
	            return tslib_es6.__generator(this, function (_a) {
	                if (!dist$3.getCurrentHub().getIntegration(Modules)) {
	                    return [2 /*return*/, event];
	                }
	                return [2 /*return*/, tslib_es6.__assign({}, event, { modules: this.getModules() })];
	            });
	        }); });
	    };
	    /** Fetches the list of modules and the versions loaded by the entry file for your node.js app. */
	    Modules.prototype.getModules = function () {
	        if (!moduleCache) {
	            // tslint:disable-next-line:no-unsafe-any
	            moduleCache = lsmod();
	        }
	        return moduleCache;
	    };
	    /**
	     * @inheritDoc
	     */
	    Modules.id = 'Modules';
	    return Modules;
	}());
	exports.Modules = Modules;

	});

	unwrapExports(modules);
	var modules_1 = modules.Modules;

	var transaction = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	/** Add node transaction to the event */
	var Transaction = /** @class */ (function () {
	    function Transaction() {
	        /**
	         * @inheritDoc
	         */
	        this.name = Transaction.id;
	    }
	    /**
	     * @inheritDoc
	     */
	    Transaction.prototype.setupOnce = function () {
	        var _this = this;
	        dist$3.addGlobalEventProcessor(function (event) { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
	            var self;
	            return tslib_es6.__generator(this, function (_a) {
	                self = dist$3.getCurrentHub().getIntegration(Transaction);
	                if (self) {
	                    return [2 /*return*/, self.process(event)];
	                }
	                return [2 /*return*/, event];
	            });
	        }); });
	    };
	    /**
	     * @inheritDoc
	     */
	    Transaction.prototype.process = function (event) {
	        return tslib_es6.__awaiter(this, void 0, void 0, function () {
	            var frames, i, frame;
	            return tslib_es6.__generator(this, function (_a) {
	                frames = this.getFramesFromEvent(event);
	                // use for loop so we don't have to reverse whole frames array
	                for (i = frames.length - 1; i >= 0; i--) {
	                    frame = frames[i];
	                    if (frame.in_app === true) {
	                        event.transaction = this.getTransaction(frame);
	                        break;
	                    }
	                }
	                return [2 /*return*/, event];
	            });
	        });
	    };
	    /** JSDoc */
	    Transaction.prototype.getFramesFromEvent = function (event) {
	        var exception = event.exception && event.exception.values && event.exception.values[0];
	        return (exception && exception.stacktrace && exception.stacktrace.frames) || [];
	    };
	    /** JSDoc */
	    Transaction.prototype.getTransaction = function (frame) {
	        return frame.module || frame.function ? (frame.module || '?') + "/" + (frame.function || '?') : '<unknown>';
	    };
	    /**
	     * @inheritDoc
	     */
	    Transaction.id = 'Transaction';
	    return Transaction;
	}());
	exports.Transaction = Transaction;

	});

	unwrapExports(transaction);
	var transaction_1 = transaction.Transaction;

	var integrations$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.Console = console$1.Console;

	exports.Http = http.Http;

	exports.OnUncaughtException = onuncaughtexception.OnUncaughtException;

	exports.OnUnhandledRejection = onunhandledrejection.OnUnhandledRejection;

	exports.LinkedErrors = linkederrors.LinkedErrors;

	exports.Modules = modules.Modules;

	exports.Transaction = transaction.Transaction;

	});

	unwrapExports(integrations$1);
	var integrations_1$1 = integrations$1.Console;
	var integrations_2$1 = integrations$1.Http;
	var integrations_3$1 = integrations$1.OnUncaughtException;
	var integrations_4$1 = integrations$1.OnUnhandledRejection;
	var integrations_5$1 = integrations$1.LinkedErrors;
	var integrations_6$1 = integrations$1.Modules;
	var integrations_7$1 = integrations$1.Transaction;

	var sdk$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });






	exports.defaultIntegrations = [
	    // Common
	    new dist$3.Integrations.Dedupe(),
	    new dist$3.Integrations.InboundFilters(),
	    new dist$3.Integrations.FunctionToString(),
	    new dist$3.Integrations.ExtraErrorData(),
	    // Native Wrappers
	    new integrations$1.Console(),
	    new integrations$1.Http(),
	    // Global Handlers
	    new integrations$1.OnUncaughtException(),
	    new integrations$1.OnUnhandledRejection(),
	    // Misc
	    new integrations$1.LinkedErrors(),
	];
	/**
	 * The Sentry Node SDK Client.
	 *
	 * To use this SDK, call the {@link init} function as early as possible in the
	 * main entry module. To set context information or send manual events, use the
	 * provided methods.
	 *
	 * @example
	 * const { init } = require('@sentry/node');
	 *
	 * init({
	 *   dsn: '__DSN__',
	 *   // ...
	 * });
	 *
	 *
	 * @example
	 * const { configureScope } = require('@sentry/node');
	 * configureScope((scope: Scope) => {
	 *   scope.setExtra({ battery: 0.7 });
	 *   scope.setTag({ user_mode: 'admin' });
	 *   scope.setUser({ id: '4711' });
	 * });
	 *
	 * @example
	 * const { addBreadcrumb } = require('@sentry/node');
	 * addBreadcrumb({
	 *   message: 'My Breadcrumb',
	 *   // ...
	 * });
	 *
	 * @example
	 * const Sentry = require('@sentry/node');
	 * Sentry.captureMessage('Hello, world!');
	 * Sentry.captureException(new Error('Good bye'));
	 * Sentry.captureEvent({
	 *   message: 'Manual',
	 *   stacktrace: [
	 *     // ...
	 *   ],
	 * });
	 *
	 * @see NodeOptions for documentation on configuration options.
	 */
	function init(options) {
	    if (options === void 0) { options = {}; }
	    if (options.defaultIntegrations === undefined) {
	        options.defaultIntegrations = exports.defaultIntegrations;
	    }
	    if (options.dsn === undefined && process.env.SENTRY_DSN) {
	        options.dsn = process.env.SENTRY_DSN;
	    }
	    if (options.release === undefined && process.env.SENTRY_RELEASE) {
	        options.release = process.env.SENTRY_RELEASE;
	    }
	    if (options.environment === undefined && process.env.SENTRY_ENVIRONMENT) {
	        options.environment = process.env.SENTRY_ENVIRONMENT;
	    }
	    if (domain.active) {
	        dist$1.setHubOnCarrier(dist$1.getMainCarrier(), dist$3.getCurrentHub());
	    }
	    dist$3.initAndBind(client.NodeClient, options);
	}
	exports.init = init;
	/**
	 * This is the getter for lastEventId.
	 *
	 * @returns The last event id of a captured event.
	 */
	function lastEventId() {
	    return dist$3.getCurrentHub().lastEventId();
	}
	exports.lastEventId = lastEventId;
	/**
	 * A promise that resolves when all current events have been sent.
	 * If you provide a timeout and the queue takes longer to drain the promise returns false.
	 *
	 * @param timeout Maximum time in ms the client should wait.
	 */
	function flush(timeout) {
	    return tslib_es6.__awaiter(this, void 0, void 0, function () {
	        return tslib_es6.__generator(this, function (_a) {
	            return [2 /*return*/, dist$3.getCurrentHub().getClient().flush(timeout)];
	        });
	    });
	}
	exports.flush = flush;
	/**
	 * A promise that resolves when all current events have been sent.
	 * If you provide a timeout and the queue takes longer to drain the promise returns false.
	 *
	 * @param timeout Maximum time in ms the client should wait.
	 */
	function close(timeout) {
	    return tslib_es6.__awaiter(this, void 0, void 0, function () {
	        return tslib_es6.__generator(this, function (_a) {
	            return [2 /*return*/, dist$3.getCurrentHub().getClient().close(timeout)];
	        });
	    });
	}
	exports.close = close;

	});

	unwrapExports(sdk$1);
	var sdk_1$1 = sdk$1.defaultIntegrations;
	var sdk_2 = sdk$1.init;
	var sdk_3 = sdk$1.lastEventId;
	var sdk_4 = sdk$1.flush;
	var sdk_5 = sdk$1.close;

	var dist$4 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	exports.Severity = dist.Severity;
	exports.Status = dist.Status;

	exports.addGlobalEventProcessor = dist$3.addGlobalEventProcessor;
	exports.addBreadcrumb = dist$3.addBreadcrumb;
	exports.captureException = dist$3.captureException;
	exports.captureEvent = dist$3.captureEvent;
	exports.captureMessage = dist$3.captureMessage;
	exports.configureScope = dist$3.configureScope;
	exports.getCurrentHub = dist$3.getCurrentHub;
	exports.getHubFromCarrier = dist$3.getHubFromCarrier;
	exports.Hub = dist$3.Hub;
	exports.Scope = dist$3.Scope;
	exports.withScope = dist$3.withScope;

	exports.NodeBackend = backend.NodeBackend;

	exports.NodeClient = client.NodeClient;

	exports.defaultIntegrations = sdk$1.defaultIntegrations;
	exports.init = sdk$1.init;
	exports.flush = sdk$1.flush;
	exports.close = sdk$1.close;

	exports.SDK_NAME = version.SDK_NAME;
	exports.SDK_VERSION = version.SDK_VERSION;
	var core_2 = dist$3;

	exports.Handlers = handlers;


	exports.Parsers = parsers;

	exports.Transports = transports;
	var INTEGRATIONS = tslib_es6.__assign({}, core_2.Integrations, integrations$1);
	exports.Integrations = INTEGRATIONS;

	});

	var Sentry = unwrapExports(dist$4);
	var dist_1$4 = dist$4.Severity;
	var dist_2$4 = dist$4.Status;
	var dist_3$3 = dist$4.addGlobalEventProcessor;
	var dist_4$3 = dist$4.addBreadcrumb;
	var dist_5$3 = dist$4.captureException;
	var dist_6$3 = dist$4.captureEvent;
	var dist_7$3 = dist$4.captureMessage;
	var dist_8$1 = dist$4.configureScope;
	var dist_9$1 = dist$4.getCurrentHub;
	var dist_10$1 = dist$4.getHubFromCarrier;
	var dist_11$1 = dist$4.Hub;
	var dist_12$1 = dist$4.Scope;
	var dist_13$1 = dist$4.withScope;
	var dist_14$1 = dist$4.NodeBackend;
	var dist_15$1 = dist$4.NodeClient;
	var dist_16$1 = dist$4.defaultIntegrations;
	var dist_17$1 = dist$4.init;
	var dist_18$1 = dist$4.flush;
	var dist_19$1 = dist$4.close;
	var dist_20$1 = dist$4.SDK_NAME;
	var dist_21$1 = dist$4.SDK_VERSION;
	var dist_22 = dist$4.Handlers;
	var dist_23 = dist$4.Parsers;
	var dist_24 = dist$4.Transports;
	var dist_25 = dist$4.Integrations;

	const MyCustomMiddleware = {
	  // Wrap broker.createService method
	  createService(next) {
	    const name = 'name';
	    const version = 'name';
	    return (schema, schemaMods) => {
	      Sentry.init({
	        dsn: 'https://9837ca09c8e843a9a90507e6564520a7@sentry.io/1406109',
	        release: `${name}@${version}`,
	        debug: true });

	      return next(schema, schemaMods);
	    };
	  } };

	exports.MyCustomMiddleware = MyCustomMiddleware;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
