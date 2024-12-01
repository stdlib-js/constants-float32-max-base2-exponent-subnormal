/** @license Apache-2.0 */

'use strict';

/**
* The maximum biased base 2 exponent for a subnormal single-precision floating-point number.
*
* @module @stdlib/constants-float32-max-base2-exponent-subnormal
* @type {integer32}
*
* @example
* var FLOAT32_MAX_BASE2_EXPONENT_SUBNORMAL = require( '@stdlib/constants-float32-max-base2-exponent-subnormal' );
* // returns -127
*/


// MAIN //

/**
* The maximum biased base 2 exponent for a subnormal single-precision floating-point number.
*
* ```text
* 00000000 => 0 - BIAS = -127
* ```
*
* where `BIAS = 127`.
*
* @constant
* @type {integer32}
* @default -127
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT32_MAX_BASE2_EXPONENT_SUBNORMAL = -127|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT32_MAX_BASE2_EXPONENT_SUBNORMAL;
