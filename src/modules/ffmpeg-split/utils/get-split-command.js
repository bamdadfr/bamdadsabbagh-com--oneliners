/**
 * @param {object} params parameters
 * @param {string} params.name file name
 * @param {string} params.extension file extension
 * @param {string} params.start start time stamp
 * @param {string} params.end end time stamp
 * @param {number} params.index split index number
 * @returns {string} ffmpeg command
 */
export function getSplitCommand ({ name, extension, index, start, end }) {

    const command = `ffmpeg -c:v libvpx-vp9 -i "${name}.${extension}" -ss ${start} -to ${end} -c:v copy -c:a copy "${name} SPLIT${index}.${extension}"`
    const isNewLine = index !== 0
    const newLine = ' && '

    return isNewLine
        ? newLine + command
        : command

}