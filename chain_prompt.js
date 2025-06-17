/**
 * Converts a given input to kebab-case.
 * 
 * Rules:
 * - Replaces spaces, underscores, and dashes with a single dash.
 * - Converts all characters to lowercase.
 * - Removes all non-alphanumeric characters except dashes.
 * - Preserves numbers.
 * - No leading/trailing/consecutive dashes.
 * - Returns empty string for empty, null, undefined, or non-string inputs.
 * 
 * @param {any} input - The input to convert.
 * @returns {string} The kebab-case version of the input.
 */
function toKebabCase(input) {
    if (typeof input !== 'string' || !input.trim()) return '';

    // Replace spaces, underscores, and dashes with a dash
    let str = input.replace(/[\s_-]+/g, '-');

    // Remove all non-alphanumeric characters except dashes
    str = str.replace(/[^a-zA-Z0-9-]/g, '');

    // Convert to lowercase
    str = str.toLowerCase();

    // Replace multiple consecutive dashes with a single dash
    str = str.replace(/-+/g, '-');

    // Remove leading and trailing dashes
    str = str.replace(/^-+|-+$/g, '');

    return str;
}

module.exports = { toKebabCase };