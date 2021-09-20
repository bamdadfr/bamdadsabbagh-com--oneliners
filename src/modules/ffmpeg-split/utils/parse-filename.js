/**
 * @param {string} input user input
 * @typedef {string} Name file name
 * @typedef {string} Extension file extension
 * @returns {{Name,Extension}} file parts
 */
export function parseFilename (input) {

    const parts = input.split ('.')
    const extension = parts.length !== 1 && parts[parts.length - 1]
    const name = input.replace ('.' + extension, '')

    return {
        name,
        extension,
    }

}