/* Given three numbers x (base), y(exponent), p(modulus), find (x ^ y) % p */

// Math.pow(x,y) % p doesn't work when base and exponents are large which 
// is the case with encryption algorithms where this is used.

/**
 * @param {number} base,
 * @param {number} exponent,
 * @param {number} modulus,
 * @return {number}
 */

function modularExponentiation(base, exponent, modulus) {
    if(modulus == 1)
        return 0;

    let value = 1;

    for(let i = 1; i <= exponent; i++) {
        value = (value * base) % modulus;
    }
    return value;
}