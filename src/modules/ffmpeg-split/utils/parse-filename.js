/**
 * Parse filename to get video name and extension
 *
 * @param {string} input - filename
 * @typedef {string} Name - video name
 * @typedef {string} Extension - video extension
 * @returns {{Name,Extension}} - video name and extension
 */
export function parseFilename (input) {
  const parts = input.split ('.');
  const extension = parts.length !== 1 && parts[parts.length - 1];
  const name = input.replace ('.' + extension, '');

  return {
    name,
    extension,
  };
}
