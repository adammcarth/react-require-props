/**
 * @name: react-require-props
 * @description: Define property schemas for React.js components.
 * @author: Adam McArthur (@adammcarth)
 * @version v0.0.1
 * @url https://github.com/adammcarth/react-require-props#readme
 * @license MIT
 */
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function RequireProps(e,r,i,t,o){if(o)return!0;if(!r&&i&&i[0])throw new Error("'"+e+"' is missing a required prop: '"+i[0]+"'. Got: undefined");var n=[];if((0,_isArray2.default)(i)?n=i:(0,_isObject2.default)(i)&&(n=Object.keys(i)),n.forEach(function(i){if(void 0===r[i])throw new Error(e+" is missing a required prop: '"+i+"'. Got: undefined")}),!(0,_isArray2.default)(i)&&(0,_isObject2.default)(i)){var a=i||{};t&&Object.keys(t).map(function(e){void 0!==r[e]&&(a[e]=t[e])}),Object.keys(a).map(function(i){if(null===a[i]);else if(a[i]===String){if(!(0,_isString2.default)(r[i]))throw new Error(e+" has an invalid prop type: '"+i+"'. Expected: string, got: "+_typeof(r[i]))}else if(a[i]===Boolean){if(!(0,_isBoolean2.default)(r[i]))throw new Error(e+" has an invalid prop type: '"+i+"'. Expected: boolean, got: "+_typeof(r[i]))}else if(a[i]===Number){if(!(0,_isNumber2.default)(r[i]))throw new Error(e+" has an invalid prop type: '"+i+"'. Expected: number, got: "+_typeof(r[i]))}else if(a[i]===Function){if(!(0,_isFunction2.default)(r[i]))throw new Error(e+" has an invalid prop type: '"+i+"'. Expected: function, got: "+_typeof(r[i]))}else if(a[i]===Array){if(!(0,_isArray2.default)(r[i]))throw new Error(e+" has an invalid prop type: '"+i+"'. Expected: array, got: "+_typeof(r[i]))}else if(a[i]===Object){if(!(0,_isObject2.default)(r[i]))throw new Error(e+" has an invalid prop type: '"+i+"'. Expected: object, got: "+_typeof(r[i]));if((0,_isArray2.default)(r[i]))throw new Error(e+" has an invalid prop type: '"+i+"'. Expected: object, got: array")}})}}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports.default=RequireProps;var _isString=require("lodash/isString"),_isString2=_interopRequireDefault(_isString),_isNumber=require("lodash/isNumber"),_isNumber2=_interopRequireDefault(_isNumber),_isArray=require("lodash/isArray"),_isArray2=_interopRequireDefault(_isArray),_isFunction=require("lodash/isFunction"),_isFunction2=_interopRequireDefault(_isFunction),_isBoolean=require("lodash/isBoolean"),_isBoolean2=_interopRequireDefault(_isBoolean),_isObject=require("lodash/isObject"),_isObject2=_interopRequireDefault(_isObject);