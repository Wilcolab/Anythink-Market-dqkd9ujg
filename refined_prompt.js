/**
 * Converts a given string to camelCase.
 *
 * Handles spaces, dashes, underscores, and mixed delimiters as word separators.
 * Removes all non-alphanumeric characters except for spaces, dashes, and underscores before processing.
 * Preserves numbers within the string.
 * Returns an empty string if the input is null, undefined, or an empty string.
 * Throws a TypeError if the input is not a string, null, or undefined.
 *
 * @param {string|null|undefined} input - The string to convert to camelCase.
 * @returns {string} The camelCase version of the input string.
 * @throws {TypeError} If the input is not a string, null, or undefined.
 */

/**
 * Converts a given string to dot.case (lowercase words separated by dots).
 *
 * Handles spaces, dashes, underscores, and mixed delimiters as word separators.
 * Removes all non-alphanumeric characters except for spaces, dashes, and underscores before processing.
 * Preserves numbers within the string.
 * Returns an empty string if the input is null, undefined, or an empty string.
 * Throws a TypeError if the input is not a string, null, or undefined.
 *
 * @param {string|null|undefined} input - The string to convert to dot.case.
 * @returns {string} The dot.case version of the input string.
 * @throws {TypeError} If the input is not a string, null, or undefined.
 */
/*
 * Handles spaces, dashes, underscores, and mixed delimiters.
 * Removes non-alphanumeric characters (except delimiters).
 * Preserves numbers in the string.
 * Returns an empty string for null, undefined, or empty input.
 * Throws a TypeError for non-string, non-null/undefined inputs.
 *
 * @param {string} input - The string to convert.
 * @returns {string} The camelCase version of the input.
 * @throws {TypeError} If input is not a string, null, or undefined.
 */
function toCamelCase(input) {
    if (input === null || input === undefined || input === '') {
        return '';
    }
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string, null, or undefined');
    }

    // Replace all delimiters with a single space
    const delimiters = /[\s\-_]+/g;
    // Remove non-alphanumeric characters except delimiters
    const cleaned = input
        .replace(/[^a-zA-Z0-9\s\-_]/g, '')
        .replace(delimiters, ' ')
        .trim();

    if (cleaned === '') return '';

    const words = cleaned.split(' ');

    return words
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            // Capitalize first letter, keep rest as is (preserve numbers)
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
function toDotCase(input) {
    if (input === null || input === undefined || input === '') {
        return '';
    }
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string, null, or undefined');
    }

    // Replace all delimiters with a single space
    const delimiters = /[\s\-_]+/g;
    // Remove non-alphanumeric characters except delimiters
    const cleaned = input
        .replace(/[^a-zA-Z0-9\s\-_]/g, '')
        .replace(delimiters, ' ')
        .trim();

    if (cleaned === '') return '';

    const words = cleaned.split(' ');

    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
console.log(toDotCase('hello_world-foo bar!baz42')); // "hello.world.foo.bar.baz42"

